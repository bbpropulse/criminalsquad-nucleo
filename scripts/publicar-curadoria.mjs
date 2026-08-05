#!/usr/bin/env node
// S4 — a rotina de publicação da curadoria, num comando só.
//
//   node scripts/publicar-curadoria.mjs --key <priv.pem> --url https://<servico> \
//        --admin-token "$ADMIN_TOKEN" [--dry-run] [--so skills|acervo] \
//        [--confirmar-remocoes]
//
// Por que NÃO é um cron no servidor: a chave privada de assinatura vive só na
// máquina da curadoria. Um servidor capaz de assinar destruiria a garantia
// central do desenho (servidor comprometido não consegue fazer o cliente
// instalar nada). O que dá para automatizar é tudo MENOS o ato de assinar —
// e é isso que este script faz: detecta o que mudou, roda os gates, versiona,
// assina e publica, sem passo manual entre eles.
//
// A fonte é a pasta `curadoria/`, que o time alimenta durante a semana:
//   curadoria/skills/<id>/SKILL.md      (+ references/, scripts/…)
//   curadoria/skills/_evals/*.json
//   curadoria/acervo/**
//
// Códigos de saída: 1 = conteúdo bloqueado (ou falha ao publicar), 2 = uso
// incorreto, 3 = a rodada remove material (ou não dá para saber se remove) e
// ninguém confirmou.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync,
} from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(__dirname, '..');
const CURADORIA = join(RAIZ, 'curadoria');
const ESTADO = join(CURADORIA, '.publicado.json');
const TIMEOUT_SERVIDOR_MS = 15000;

const args = process.argv.slice(2);
const flag = (nome, padrao = null) => {
  const i = args.indexOf(`--${nome}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : padrao;
};
const temFlag = (nome) => args.includes(`--${nome}`);

const chave = flag('key');
const url = flag('url');
const adminToken = flag('admin-token', process.env.ADMIN_TOKEN);
const dryRun = temFlag('dry-run');
const so = flag('so');
const confirmarRemocoes = temFlag('confirmar-remocoes');

// Um pacote por tipo de conteúdo: o acervo muda mais e é maior que as skills,
// então separar evita reenviar a biblioteca inteira por causa de um julgado.
const PACOTES = [
  { id: 'skills.criminal', pasta: 'skills', prefixo: 'skills' },
  { id: 'acervo.criminal', pasta: 'acervo', prefixo: 'acervo' },
].filter((p) => !so || p.prefixo === so);

const EXT_OK = new Set(['.md', '.json', '.yaml', '.yml', '.txt', '.csv', '.mjs', '.js', '.py']);
const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

function extname(nome) {
  const i = nome.lastIndexOf('.');
  return i < 0 ? '' : nome.slice(i).toLowerCase();
}

/**
 * Devolve o que entra no pacote E o que ficou de fora.
 *
 * O descarte por extensão precisa ser DEVOLVIDO, não engolido: `indexar-acervo`
 * aceita .pdf/.docx e este script não, então o primeiro acórdão em PDF sem
 * gêmeo .md sumiria da entrega sem uma linha de log — a curadoria acharia que
 * publicou e o aluno nunca receberia. Arquivo oculto continua fora de vista de
 * propósito: `.publicado.json` e `.build/` são estado interno, não material.
 */
function varrer(dir, base, acc = { arquivos: [], descartados: [] }) {
  if (!existsSync(dir)) return acc;
  for (const entrada of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entrada.name.startsWith('.')) continue;
    const full = join(dir, entrada.name);
    const rel = relative(base, full).split(sep).join('/');
    if (entrada.isDirectory()) { varrer(full, base, acc); continue; }
    if (!EXT_OK.has(extname(entrada.name))) { acc.descartados.push(rel); continue; }
    acc.arquivos.push({ rel, full });
  }
  return acc;
}

// --- gates: o que NUNCA pode ser publicado ---

const problemas = [];
const avisos = [];

/**
 * Sigilo é o gate mais importante do sistema.
 *
 * Publicar um arquivo de `casos/` mandaria dado de cliente/assistido para TODOS
 * os alunos — vazamento irreversível, com o pacote já assinado e distribuído.
 * A comparação é em minúsculas porque macOS e Windows não distinguem caixa.
 */
function conferirSigilo(arquivos, packId) {
  for (const { rel } of arquivos) {
    const segmentos = rel.toLowerCase().split('/');
    if (segmentos.includes('casos')) {
      problemas.push(`[${packId}] SIGILO: ${rel} está sob casos/ — dado de cliente NUNCA vai para o pacote`);
    }
  }
}

/**
 * Skill sem frontmatter válido é DESCARTADA em silêncio pelo cliente (é assim
 * que o overlay se protege). Publicar assim significa o aluno pagar por conteúdo
 * que nunca aparece — então o defeito tem de morrer aqui, não lá.
 */
function conferirSkills(arquivos, packId) {
  const ids = new Set();
  for (const { rel, full } of arquivos) {
    const partes = rel.split('/');
    if (partes.length < 2 || partes[partes.length - 1] !== 'SKILL.md') continue;
    const id = partes[partes.length - 2];
    ids.add(id);
    const raw = readFileSync(full, 'utf8');
    const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fm) {
      problemas.push(`[${packId}] ${rel}: sem frontmatter — o cliente descartaria em silêncio`);
      continue;
    }
    const nome = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '');
    if (nome !== id) {
      problemas.push(`[${packId}] ${rel}: frontmatter name é "${nome || '(vazio)'}", esperado "${id}"`);
    }
    if (!/^description:\s*\S/m.test(fm[1])) {
      problemas.push(`[${packId}] ${rel}: sem description — não aparece na busca`);
    }
  }
  if (ids.size === 0 && arquivos.length) {
    avisos.push(`[${packId}] nenhuma skill encontrada — só arquivos de apoio?`);
  }
  return ids;
}

/** Nada de arquivo vazio: o aluno recebe uma casca e não entende por quê. */
function conferirVazios(arquivos, packId) {
  for (const { rel, full } of arquivos) {
    if (readFileSync(full, 'utf8').trim().length === 0) {
      problemas.push(`[${packId}] ${rel}: arquivo vazio`);
    }
  }
}

// --- gates de qualidade do repo ---

const ALVO_GRAFO = /aponta para skill inexistente ([\w.-]+)$/;
const ALVO_ENGINE = /engine determinístico inexistente ([\w.-]+)$/;

/**
 * A curadoria é um DELTA sobre a biblioteca embarcada, não a biblioteca inteira.
 *
 * Sem esta ponte, uma skill curada que aponte `next_skills` para uma skill já
 * entregue no npm — ou que declare um engine que mora em scripts/ — pararia a
 * publicação inteira por um alvo que EXISTE na máquina do aluno. Vira aviso:
 * sai do bloqueio, não da vista.
 */
function resolvidoNaBiblioteca(erro) {
  const grafo = ALVO_GRAFO.exec(erro.message);
  if (grafo && existsSync(join(RAIZ, 'skills', grafo[1], 'SKILL.md'))) return `skills/${grafo[1]}`;
  const engine = ALVO_ENGINE.exec(erro.message);
  if (engine) {
    const caminho = join('scripts', 'legal-calculators', `${engine[1]}-engine.mjs`);
    if (existsSync(join(RAIZ, caminho))) return caminho;
  }
  return null;
}

/**
 * Os gates que a curadoria PROMETE ter rodado.
 *
 * src/skill-catalog.js diz, por escrito, que a skill sincronizada pula o gate
 * estrutural do cliente "porque a curadoria roda o gate antes de publicar".
 * Enquanto isso não acontecia aqui, a garantia era só uma frase: dava para
 * assinar e distribuir uma skill com lifecycle inválido ou referência quebrada,
 * e o defeito só aparecia na máquina de quem pagou.
 */
async function rodarGatesDeQualidade(pastaSkills) {
  if (pastaSkills) {
    // Gate que estoura é gate que NÃO rodou: vira bloqueio com motivo legível,
    // nunca stack por cima de uma publicação que segue em frente.
    try {
      const { validateSkillCatalog } = await import('../src/skill-catalog.js');
      // Índice, manifesto de integração e canonicalização descrevem a biblioteca
      // inteira e não têm par dentro do delta — exigi-los aqui reprovaria toda
      // curadoria válida.
      const resultado = validateSkillCatalog({
        skillsDir: pastaSkills,
        checkIndex: false,
        requireIntegration: false,
        requireCanonicalSources: false,
      });
      for (const erro of resultado.errors) {
        const ponte = resolvidoNaBiblioteca(erro);
        if (ponte) avisos.push(`[gate estrutural] ${erro.message} — existe na biblioteca embarcada (${ponte})`);
        else problemas.push(`[gate estrutural] ${erro.message}`);
      }
      console.log(`  gate estrutural: ${resultado.catalog.entries.length} skill(s) da curadoria conferidas`);
    } catch (err) {
      problemas.push(`gate estrutural não rodou (${err.message}) — sem ele a garantia de src/skill-catalog.js fica sem lastro`);
    }
  }

  // Estes dois só sabem varrer a biblioteca do REPO (skills/ e
  // _criminalsquad/core/authorities/): não aceitam diretório por parâmetro, então
  // não enxergam o delta da curadoria. Rodam mesmo assim — a máquina que assina
  // não pode estar com a própria biblioteca quebrada, e é aqui que mora o único
  // item com sanção real do lado de fora (jurisprudência inventada) — e o escopo
  // vai dito na tela, para ninguém achar que o material da semana passou por eles.
  try {
    const { checkSkillEvals } = await import('./check-skill-evals.mjs');
    const resultado = checkSkillEvals();
    for (const p of resultado.problems) problemas.push(`[gate de contratos] ${p}`);
    console.log(`  gate de contratos: ${resultado.caseCount} especificação(ões) — escopo: biblioteca do repo, não a curadoria`);
  } catch (err) {
    problemas.push(`gate de contratos indisponível (${err.message})`);
  }

  try {
    const { checkLegalAuthorities } = await import('./check-legal-authorities.mjs');
    const resultado = checkLegalAuthorities();
    for (const p of resultado.problems) problemas.push(`[gate de autoridades] ${p}`);
    for (const a of resultado.warnings) avisos.push(`[gate de autoridades] ${a}`);
    console.log(`  gate de autoridades: ${resultado.records} registro(s) — escopo: biblioteca do repo, não a curadoria`);
  } catch (err) {
    problemas.push(`gate de autoridades indisponível (${err.message})`);
  }
}

// --- versão ---

/**
 * Mesma ordenação do servidor (server/store.mjs): componente a componente, como
 * número. Se as duas divergirem, este script planeja uma versão que o servidor
 * recusa — ou pior, uma que ele aceita e que é menor do que a publicada.
 */
function compararVersoes(a, b) {
  const pa = String(a).split('.').map(Number);
  const pb = String(b).split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

function proximaVersao(anterior) {
  const agora = new Date();
  const prefixo = `${agora.getFullYear()}.${String(agora.getMonth() + 1).padStart(2, '0')}`;
  let candidata;
  if (anterior && anterior.startsWith(`${prefixo}.`)) {
    const n = Number(anterior.slice(prefixo.length + 1)) || 0;
    candidata = `${prefixo}.${n + 1}`;
  } else {
    candidata = `${prefixo}.1`;
  }
  // Relógio atrasado, fuso ou versão publicada num mês à frente fariam a data
  // produzir um número MENOR que o já publicado. O servidor recusaria com 409 e
  // a rodada morreria à toa; pior, um servidor sem a guarda aceitaria o
  // rebaixamento. Nunca devolvemos versão que não avança.
  if (anterior && compararVersoes(candidata, anterior) <= 0) {
    const partes = String(anterior).split('.');
    partes[partes.length - 1] = String((Number(partes[partes.length - 1]) || 0) + 1);
    return partes.join('.');
  }
  return candidata;
}

function lerEstado() {
  try {
    return JSON.parse(readFileSync(ESTADO, 'utf8'));
  } catch {
    return {};
  }
}

function gravarEstado(estadoNovo) {
  writeFileSync(ESTADO, JSON.stringify(estadoNovo, null, 2) + '\n', 'utf8');
}

/**
 * `arquivos` já foi só a CONTAGEM. Estado no formato antigo — ou máquina que
 * nunca publicou daqui e só sabe a versão pelo servidor — não permite dizer o
 * que sumiu, e fingir "0 removidos" seria a mesma omissão que este gate existe
 * para acabar.
 */
function baselineDe(anterior) {
  const arquivos = anterior?.arquivos;
  return arquivos && typeof arquivos === 'object' ? arquivos : null;
}

function comparar(baseline, atuais) {
  const novos = [];
  const alterados = [];
  const removidos = [];
  for (const [caminho, hash] of Object.entries(atuais)) {
    if (!baseline || !(caminho in baseline)) novos.push(caminho);
    else if (baseline[caminho] !== hash) alterados.push(caminho);
  }
  if (baseline) {
    for (const caminho of Object.keys(baseline)) {
      if (!(caminho in atuais)) removidos.push(caminho);
    }
  }
  return { novos, alterados, removidos };
}

// --- estado publicado (a verdade mora no servidor) ---

function avisoAlto(linhas) {
  console.warn('\n  ⚠️  AVISO ALTO ⚠️');
  for (const linha of linhas) console.warn(`     ${linha}`);
  console.warn('');
}

/** GET /admin/api/packs — o que o servidor ANUNCIA hoje para a turma. */
async function packsPublicados() {
  const resposta = await fetch(new URL('/admin/api/packs', url), {
    headers: { authorization: `Bearer ${adminToken}`, accept: 'application/json' },
    signal: AbortSignal.timeout(TIMEOUT_SERVIDOR_MS),
  });
  // 401/403 é recusa com autoridade, não intermitência: seguir daqui seria
  // publicar às cegas. Fail-closed, sem retry e sem aviso brando.
  if (resposta.status === 401 || resposta.status === 403) {
    const err = new Error(`o servidor respondeu ${resposta.status} em /admin/api/packs — admin token recusado`);
    err.fatal = true;
    throw err;
  }
  if (!resposta.ok) throw new Error(`o servidor respondeu ${resposta.status}`);
  const corpo = await resposta.json();
  if (!corpo?.packs || typeof corpo.packs !== 'object') throw new Error('resposta sem { packs }');
  return corpo.packs;
}

/**
 * A próxima versão tem de sair do SERVIDOR, não do arquivo local.
 *
 * curadoria/.publicado.json é um arquivo de trabalho: pode faltar (máquina nova,
 * clone limpo, pasta nunca criada) ou estar atrasado. Derivar a versão só dele
 * fazia o script propor 2026.07.1 enquanto o servidor já anunciava 2026.07.11 —
 * publicar assim REBAIXA a turma inteira, em silêncio, com pacote assinado.
 *
 * A reconciliação vale nas DUAS direções. Quando o servidor não tem o que o
 * estado local dá como publicado (volume perdido, deploy novo, backup antigo
 * restaurado), o script dizia "em dia" e encerrava com "Tudo em dia": o
 * servidor sem nada, a turma sem receber, e ninguém avisado.
 */
function semear(estadoLocal, publicados) {
  const novo = { ...estadoLocal };
  for (const { id } of PACOTES) {
    const remoto = publicados[id];
    const versaoRemota = typeof remoto?.versao === 'string' ? remoto.versao : null;
    const local = estadoLocal[id];

    if (local?.versao && (!versaoRemota || compararVersoes(local.versao, versaoRemota) > 0)) {
      avisoAlto([
        `O servidor NÃO tem ${id}@${local.versao}, que o estado local dá como publicado`,
        `(ele anuncia ${versaoRemota || 'nada'} para este pacote).`,
        'Volume perdido, deploy novo ou backup restaurado deixam a turma sem receber.',
        'Zerando o hash: o conteúdo vai de novo nesta rodada, com versão maior.',
      ]);
      // Só o content_hash cai. A lista de caminhos descreve o que a curadoria já
      // entregou e continua valendo — é dela que sai a detecção de remoção.
      novo[id] = { ...local, content_hash: null };
      continue;
    }

    if (!versaoRemota) continue;
    if (local?.versao && compararVersoes(local.versao, versaoRemota) >= 0) continue;
    console.log(`  ${id}: o servidor anuncia ${versaoRemota} (local: ${local?.versao || 'nada'}) — quem manda é o servidor`);
    // O content_hash descreve uma publicação ANTERIOR à que está no ar: mantê-lo
    // faria o script dizer "em dia" para um conteúdo que o servidor não tem.
    // Já a lista de caminhos SOBREVIVE: o servidor manda na versão, não sabe
    // nada sobre quais arquivos a curadoria entregou. Jogá-la fora cegava o gate
    // de remoção justo no caminho mais comum — e falso-negativo aqui apaga
    // material pago da máquina de todo aluno, enquanto falso-positivo custa um
    // --confirmar-remocoes.
    novo[id] = { ...local, versao: versaoRemota, content_hash: null, origem: 'servidor' };
  }
  return novo;
}

// --- execução ---

if (!existsSync(CURADORIA)) {
  console.error(`Pasta de curadoria ausente: ${CURADORIA}`);
  console.error('Crie curadoria/skills/ e curadoria/acervo/ com o material da semana.');
  process.exit(1);
}
if (!dryRun && (!chave || !url || !adminToken)) {
  console.error('Uso: publicar-curadoria.mjs --key <priv.pem> --url <servico> --admin-token <token> [--dry-run]');
  console.error('     (--dry-run confere e mostra o que iria, sem assinar nem enviar)');
  process.exit(2);
}

let estado = lerEstado();
if (url && adminToken) {
  try {
    estado = semear(estado, await packsPublicados());
  } catch (err) {
    if (err.fatal) {
      console.error(`\nPUBLICACAO BLOQUEADA — ${err.message}`);
      console.error('  Sem saber a versão que está no ar, a próxima sairia do arquivo local e');
      console.error('  poderia rebaixar a turma inteira com um pacote assinado.');
      console.error('\nNada foi assinado nem enviado.');
      process.exit(1);
    }
    avisoAlto([
      `Não deu para confirmar no servidor o que está publicado (${err.message}).`,
      'A versão planejada abaixo saiu do estado LOCAL, que pode estar atrasado.',
      'Se estiver, o servidor recusa com 409 e ninguém rebaixa — mas confirme antes.',
    ]);
  }
} else {
  avisoAlto([
    'Versão planejada sem consultar o servidor (faltou --url/--admin-token).',
    'O que está no ar pode ser MAIOR que o estado local: publicar a partir daqui',
    'rebaixaria a turma. O servidor recusa com 409, mas rode com --url para conferir.',
  ]);
}

const planejados = [];
const descartados = [];

for (const pacote of PACOTES) {
  const base = join(CURADORIA, pacote.pasta);
  const varredura = varrer(base, CURADORIA);
  const arquivos = varredura.arquivos;
  for (const rel of varredura.descartados) descartados.push({ pack: pacote.id, rel });
  if (!arquivos.length) {
    console.log(`  ${pacote.id}: nada em curadoria/${pacote.pasta}/ — pulando`);
    continue;
  }

  conferirSigilo(arquivos, pacote.id);
  conferirVazios(arquivos, pacote.id);
  if (pacote.prefixo === 'skills') conferirSkills(arquivos, pacote.id);

  // O conteúdo do pacote é o que o cliente vai ver: caminho relativo à raiz do
  // projeto do aluno (skills/... e acervo/...), exatamente como o overlay espera.
  const entradas = arquivos.map(({ rel, full }) => ({
    arquivo: rel,
    conteudo: readFileSync(full, 'utf8'),
  }));
  const porArquivo = Object.fromEntries(
    entradas.map((e) => [e.arquivo, sha256(Buffer.from(e.conteudo, 'utf8'))]),
  );

  // Hash do CONTEÚDO (caminho + bytes), não do momento: republicar sem mudança
  // não gera versão nova, e o aluno não baixa de novo à toa.
  const hash = sha256(Buffer.from(
    entradas.map((e) => `${e.arquivo}:${porArquivo[e.arquivo]}`).join('\n'),
    'utf8',
  ));

  const anterior = estado[pacote.id];
  if (anterior && anterior.content_hash === hash) {
    console.log(`  ${pacote.id}: em dia (${anterior.versao}, ${arquivos.length} arquivos) — nada a publicar`);
    continue;
  }

  const baseline = baselineDe(anterior);
  // Só conta quando JÁ houve publicação e mesmo assim não dá para comparar
  // (estado no formato antigo, ou versão que veio só do servidor). Na primeira
  // publicação não há o que remover, e alertar ali seria ruído que ensina a
  // ignorar avisos.
  const semBaseline = Boolean(anterior && !baseline);
  if (semBaseline) {
    avisos.push(`[${pacote.id}] sem a lista de caminhos da publicação anterior — remoções não são detectáveis nesta rodada`);
  }

  planejados.push({
    ...pacote,
    entradas,
    porArquivo,
    hash,
    versao: proximaVersao(anterior?.versao),
    anterior: anterior?.versao || null,
    semBaseline,
    diff: comparar(baseline, porArquivo),
  });
}

if (planejados.length) {
  const pastaSkills = PACOTES.some((p) => p.prefixo === 'skills') && existsSync(join(CURADORIA, 'skills'))
    ? join(CURADORIA, 'skills')
    : null;
  await rodarGatesDeQualidade(pastaSkills);
}

// O que o EXT_OK jogou fora aparece SEMPRE — em dry-run e na publicação de
// verdade. O pacote só transporta texto utf8 (src/sync.js grava utf8), então
// binário não tem representação hoje; o mínimo é o operador ver o que ficou de
// fora antes de achar que entregou.
if (descartados.length) {
  console.log(`\n  Descartados por extensão (o aluno NÃO recebe): ${descartados.length}`);
  for (const { pack, rel } of descartados) console.log(`    · [${pack}] ${rel}`);
  console.log('    O pacote transporta texto utf8; PDF/DOCX/imagem não têm representação hoje.');
}

if (problemas.length) {
  console.error('\nPUBLICACAO BLOQUEADA — corrija antes de assinar:\n');
  for (const p of problemas) console.error(`  ✗ ${p}`);
  console.error('\nNada foi assinado nem enviado.');
  process.exit(1);
}
for (const a of avisos) console.warn(`  ⚠️  ${a}`);

if (!planejados.length) {
  console.log('\nTudo em dia. Nenhum pacote publicado.');
  process.exit(0);
}

console.log('');
for (const p of planejados) {
  const de = p.anterior ? `${p.anterior} → ` : '';
  const { novos, alterados, removidos } = p.diff;
  // "-0 removidos" sem baseline é uma AFIRMAÇÃO que ninguém pode fazer: sem a
  // lista anterior não se sabe se algo sai. Dizer zero ali é o relatório mentir
  // sobre a única linha que apaga material da máquina do aluno.
  const saiu = p.semBaseline ? '-? removidos (sem baseline)' : `-${removidos.length} removidos`;
  console.log(`  ${p.id}: ${de}${p.versao} (${p.entradas.length} arquivos: `
    + `+${novos.length} novos, ~${alterados.length} alterados, ${saiu})`);
}

// Publicar é SNAPSHOT: o cliente destrói e recria _packs/<pack-id>/ (src/sync.js),
// então o que sai da curadoria some da máquina do aluno. Isso é CORRETO — é o
// único mecanismo de retratação que existe, e poder tirar do computador de todo
// mundo uma súmula superada é feature num produto jurídico. O que não pode é
// acontecer por engano, sem ninguém ter dito que era para acontecer.
//
// Não saber o que sai vale como saber que sai: sem a lista da publicação
// anterior, o snapshot pode apagar qualquer coisa e o script não tem como
// listar o quê. Seguir em frente ali era o caminho MAIS comum do defeito —
// máquina nova, clone limpo, versão vinda só do servidor.
const comRemocoes = planejados.filter((p) => p.diff.removidos.length || p.semBaseline);
if (comRemocoes.length && !confirmarRemocoes) {
  console.error('\nPUBLICACAO BLOQUEADA — esta rodada pode REMOVER material já entregue:\n');
  for (const p of comRemocoes) {
    for (const caminho of p.diff.removidos) console.error(`  − [${p.id}] ${caminho}`);
    if (p.semBaseline) {
      console.error(`  − [${p.id}] sem baseline: não dá para saber o que sai — o snapshot substitui tudo`);
    }
  }
  console.error('\nCada linha acima será APAGADA da máquina de todo aluno no próximo sync.');
  console.error('Se é isso mesmo (retratar material superado), repita com --confirmar-remocoes.');
  console.error('\nNada foi assinado nem enviado.');
  process.exit(3);
}

if (dryRun) {
  console.log('\n--dry-run: nada foi assinado nem enviado.');
  process.exit(0);
}

/**
 * Roda um passo externo sem deixar vazar stack.
 *
 * build-pack e publicar-pack já imprimem o motivo em linguagem de gente; o que
 * chegava ao operador era um "Command failed" do execFileSync por cima disso.
 * O stderr do filho é capturado e reemitido, e o 409 (versão recusada) ganha a
 * explicação que ele precisa para saber que NÃO é defeito.
 */
function rodarEtapa(descricao, argv) {
  try {
    execFileSync(process.execPath, argv, { stdio: ['inherit', 'inherit', 'pipe'], encoding: 'utf8' });
    return true;
  } catch (err) {
    const stderr = String(err.stderr || '').trim();
    if (stderr) console.error(stderr);
    console.error(`\n${descricao}: falhou.`);
    if (/\(409\)/.test(stderr)) {
      console.error('  O servidor RECUSOU a versão (409): já existe uma igual ou maior publicada.');
      console.error('  Isso é a proteção contra rebaixar a turma, não um defeito do pacote.');
      console.error('  Rode de novo: a versão é semeada de /admin/api/packs e sai maior.');
    }
    return false;
  }
}

const trabalho = join(CURADORIA, '.build');
mkdirSync(trabalho, { recursive: true });
const novoEstado = { ...estado };

for (const p of planejados) {
  const jsonl = join(trabalho, `${p.prefixo}.jsonl`);
  writeFileSync(jsonl, p.entradas.map((e) => JSON.stringify(e)).join('\n') + '\n', 'utf8');
  const saida = join(trabalho, `${p.prefixo}-${p.versao}`);

  const ok = rodarEtapa(`${p.id}@${p.versao} (build)`, [
    join(__dirname, 'build-pack.mjs'), jsonl, saida,
    '--pack-id', p.id, '--versao', p.versao, '--key', chave,
  ]) && rodarEtapa(`${p.id}@${p.versao} (publicação)`, [
    join(__dirname, 'publicar-pack.mjs'), saida,
    '--url', url, '--admin-token', adminToken,
  ]);
  if (!ok) process.exit(1);

  novoEstado[p.id] = {
    versao: p.versao,
    content_hash: p.hash,
    arquivos: p.porArquivo,
    publicado_em: new Date().toISOString(),
  };
  // Gravado AQUI, dentro do laço, não no fim: quando o segundo pacote falhava, o
  // primeiro — já no ar — não ficava registrado, e a rodada seguinte reenviava
  // os mesmos 3,3 MB com versão nova. Todo aluno rebaixava à toa.
  gravarEstado(novoEstado);
}

console.log('\nCuradoria publicada. Os alunos recebem no próximo `npx criminalsquad sync`.');
