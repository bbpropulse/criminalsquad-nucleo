// CLI do sync: ativar, sync e status.
import { createInterface } from 'node:readline/promises';
import { execFileSync } from 'node:child_process';
import { hostname, userInfo } from 'node:os';
import { existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildLicense, instalacaoId, isValidToken, licensePath, readLicense, selo, writeLicense,
} from './sync-license.js';
import { PACKS_DIR, readInstalled, syncFromDir } from './sync.js';
import { endpointConfigurado, syncFromServer } from './sync-http.js';
import { indexSkillsProject } from './skill-catalog-cli.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
// O indexador de acervo é um script standalone (também vai para o projeto do
// aluno como template): rodamos a cópia do pacote passando a raiz do projeto.
const ACERVO_INDEXER = join(__dirname, '..', 'scripts', 'indexar-acervo.js');

/**
 * Regenera os sumários que o ORQUESTRADOR usa para pesquisar.
 *
 * Sem isto o conteúdo baixado fica no disco mas invisível: o `search-acervo`
 * lê o `acervo/_index.yaml` gerado, e o `skills/_index.yaml` (fonte que o
 * catalog-scout/roteador consulta) fica velho. Reindexar é o passo que fecha o
 * laço "baixou → aparece na busca" sem o aluno rodar nada à mão.
 *
 * É best-effort: uma falha aqui NUNCA invalida o que já foi baixado e verificado
 * — o conteúdo está seguro no cache; só o sumário ficaria para trás, e o aluno
 * pode reindexar depois.
 */
function reindexar(cwd) {
  console.log('');
  console.log('  Atualizando os indices de busca do orquestrador...');
  let okSkills = false;
  let okAcervo = false;

  try {
    // indexSkillsProject escreve skills/_index.yaml ANTES de validar; mesmo com
    // pendências no catálogo o sumário fica fresco. success:false só sinaliza que
    // há o que consertar — o conteúdo já aparece na busca.
    indexSkillsProject(cwd); // imprime a própria linha de resumo
    okSkills = true;
  } catch (err) {
    console.error(`  (aviso) nao consegui reindexar as skills: ${err.message}`);
  }

  try {
    // stderr capturado (pipe): numa falha do filho NÃO vazamos o stack cru do
    // Node para o aluno — o produto não grita erro técnico.
    execFileSync(process.execPath, [ACERVO_INDEXER, cwd], { stdio: ['ignore', 'inherit', 'pipe'] });
    okAcervo = true;
  } catch (err) {
    // Código 2 = classificação inválida no acervo LOCAL, mas o índice FOI escrito
    // (o conteúdo sincronizado aparece). Qualquer outro código é falha real de
    // I/O, em que o índice não foi escrito.
    if (err?.status === 2) {
      okAcervo = true;
      console.error('  (aviso) ha classificacao de confianca invalida no seu acervo local;');
      console.error('  rode `npm run indexar-acervo` para ver os detalhes.');
    } else {
      console.error('  (aviso) nao consegui reindexar o acervo.');
    }
  }

  if (okSkills && okAcervo) {
    console.log('  Pronto — o conteudo novo ja aparece na busca.');
  } else {
    // Honesto: nao afirmamos "aparece na busca" quando a reindexacao falhou.
    console.error('  Parte do indice nao pode ser atualizada — rode quando puder:');
    if (!okSkills) console.error('    npx criminalsquad indexar-skills');
    if (!okAcervo) console.error('    npm run indexar-acervo');
  }
}

/**
 * Os índices estão defasados em relação ao que está instalado?
 *
 * Sinal barato e correto: o `manifest.json` do cache é reescrito a cada install;
 * se algum índice for MAIS VELHO que ele (ou estiver ausente), o conteúdo já
 * baixado não está refletido na busca. Cobre o caso do aluno que sincronizou com
 * uma versão antiga do CLI (sem reindex) ou de uma reindexação que falhou antes:
 * o próximo `sync` conserta sozinho, mesmo sem novidade da curadoria.
 */
function indicesDefasados(cwd) {
  let mManifest;
  try {
    mManifest = statSync(join(cwd, PACKS_DIR, 'manifest.json')).mtimeMs;
  } catch {
    return false; // sem pacote instalado — nada a refletir
  }
  for (const rel of ['skills', 'acervo']) {
    try {
      if (statSync(join(cwd, rel, '_index.yaml')).mtimeMs < mManifest) return true;
    } catch {
      return true; // índice ausente com pacote instalado = defasado
    }
  }
  return false;
}

async function ask(question, { silent = false } = {}) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  try {
    return (await rl.question(question)).trim();
  } finally {
    rl.close();
    if (silent) process.stdout.write('\n');
  }
}

function fmtIdade(iso) {
  if (!iso) return 'nunca';
  const dias = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (Number.isNaN(dias)) return 'desconhecida';
  if (dias <= 0) return 'hoje';
  return `há ${dias} dia${dias === 1 ? '' : 's'}`;
}

/** `criminalsquad ativar <token> [--nome "..."] [--cpf ...]` */
export async function ativarCli(args, values = {}) {
  const token = args[0];
  if (!token) {
    console.error('Uso: criminalsquad ativar <CSQ-XXXX-XXXX-XXXX> [--nome "Nome Completo"] [--cpf 000.000.000-00]');
    return { success: false };
  }
  if (!isValidToken(token)) {
    console.error('Token inválido. Formato esperado: CSQ-XXXX-XXXX-XXXX');
    return { success: false };
  }

  const nome = values.nome || await ask('Nome completo do titular: ');
  const cpf = values.cpf || await ask('CPF do titular: ');

  let license;
  try {
    license = buildLicense({ token, nome, cpf });
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }

  const path = writeLicense(license);
  console.log('');
  console.log('  Licença ativada.');
  console.log(`  ${selo(license)}`);
  console.log('');
  console.log('  O CPF nao foi gravado: guardamos apenas a mascara (exibicao) e o hash.');
  console.log(`  Arquivo: ${path}`);
  console.log('');
  console.log('  Proximo passo: `criminalsquad sync` para baixar o conteudo mais recente.');
  return { success: true };
}

/**
 * Teto de tempo pedido na linha de comando. Existe porque em link ruim o padrão
 * pode não dar conta e o único escape antes era editar o código.
 *
 * O guarda contra `true` continua: `bin/criminalsquad.js` declara a flag como
 * string, mas o parser roda com `strict: false` e qualquer outro ponto de
 * entrada pode entregar um booleano. Avisar é melhor do que virar um teto de
 * 1 ms em silêncio, que quebraria TODO sync.
 */
function tempoLimitePedido(values) {
  if (values.timeout === undefined) return undefined;
  const ms = typeof values.timeout === 'boolean' ? NaN : Number(values.timeout);
  if (Number.isFinite(ms) && ms > 0) return ms;
  console.error('  Ignorando --timeout: informe milissegundos, por exemplo --timeout 60000.');
  return undefined;
}

/**
 * `criminalsquad sync [--from <dir>] [--check] [--timeout=<ms>]`
 *
 * A licença e o sync entram por parâmetro (com o comportamento real como padrão)
 * porque, presos aos módulos, o caminho de REDE deste comando só rodava com a
 * licença da máquina de quem testa e um servidor no ar — e ficou sem teste
 * nenhum: o balde `adiado:` e o código de saída podiam quebrar em silêncio.
 */
export async function syncCli(cwd, values = {}, { sync = syncFromServer, license = readLicense() } = {}) {
  if (license) console.log(`  ${selo(license)}`);

  const from = values.from;
  let r;

  if (from) {
    // Origem local: pasta com pacote(s) ou com .csqpack já baixados — o MESMO
    // arquivo que o servidor entrega. Útil para publicar à mão e é a via de fuga
    // de quem está sem rede ou com o servidor fora do ar.
    if (!existsSync(from)) {
      console.error(`  Origem nao encontrada: ${from}`);
      return { success: false };
    }
    try {
      r = syncFromDir(from, cwd, { dryRun: values.check === true });
    } catch (err) {
      console.error(`  Falha no sync: ${err.message}`);
      return { success: false };
    }
  } else {
    if (!license) {
      console.error('');
      console.error('  Sem licenca ativa — nao ha o que sincronizar.');
      console.error('  Ative com: criminalsquad ativar <CSQ-XXXX-XXXX-XXXX>');
      console.error('  (o conteudo que ja veio instalado continua funcionando normalmente)');
      return { success: false };
    }
    try {
      r = await sync(cwd, {
        license,
        dryRun: values.check === true,
        timeoutMs: tempoLimitePedido(values),
      });
    } catch (err) {
      // Sem rede NAO e falha do produto: o cache local continua servindo. Por
      // isso a mensagem e informativa e o comando nao grita erro tecnico.
      console.error('');
      console.error(`  Nao deu para consultar a curadoria: ${err.message}`);
      // token-invalido = provavelmente culpa do aluno (token errado). Todo o
      // resto — sem rede, timeout, tamanho, 5xx do servidor — NAO e falha do
      // aluno: o cache local continua servindo, e a mensagem tem que deixar
      // isso claro em vez de parecer que algo quebrou do lado dele.
      if (err?.codigo === 'revogada') {
        console.error('  A licenca foi revogada. Fale com o suporte do Nucleo para reativar.');
        console.error('  O que ja esta no computador continua funcionando normalmente.');
      } else if (err?.codigo === 'token-invalido') {
        console.error('  Confira o token com `criminalsquad status` e reative se preciso.');
      } else {
        console.error('  O conteudo que ja esta no computador continua funcionando normalmente.');
        if (err?.codigo === 'servidor') {
          console.error('  Foi uma falha temporaria da curadoria — tente de novo mais tarde.');
        }
      }
      return { success: false };
    }
    if (r.status && r.status !== 'ativa') {
      const rotulo = r.status === 'vencida' ? 'vencida' : r.status;
      console.log('');
      console.log(`  Licenca ${rotulo}${r.expiraEm ? ` (expirou em ${r.expiraEm})` : ''}.`);
      console.log('  Nada foi baixado, e nada parou de funcionar: o acervo e as skills que');
      console.log('  ja estao no computador seguem disponiveis, apenas sem as atualizacoes.');
      return { success: true };
    }
  }

  for (const p of r.instalados) {
    console.log(`  ${p.dryRun ? 'disponivel' : 'instalado'}: ${p.pack_id}@${p.versao}` +
      (p.arquivos ? ` (${p.arquivos} arquivos)` : ''));
  }
  for (const p of r.semNovidade) console.log(`  em dia: ${p}`);
  for (const p of r.recusados) console.error(`  RECUSADO: ${p.dir} — ${p.erro}`);
  // Servidor ocupado nao e pacote invalido: chamar de RECUSADO fazia o aluno
  // achar que a curadoria mandou lixo e abrir chamado por uma espera de minutos.
  for (const p of r.adiados) console.error(`  adiado: ${p.dir} — ${p.erro}`);
  if (r.adiados.length) {
    console.error('  Foi uma falha temporaria da curadoria — tente de novo mais tarde.');
    console.error('  O conteudo que ja esta no computador continua funcionando normalmente.');
  }

  if (!r.instalados.length && !r.semNovidade.length && !r.recusados.length && !r.adiados.length) {
    console.log(from ? '  Nenhum pacote encontrado na origem.' : '  Tudo em dia — nada novo na curadoria.');
  }
  // Fecha o laço: o que entrou vira sumário que o orquestrador pesquisa, na hora.
  // Reindexa também quando os índices já estão defasados (auto-cura), não só
  // quando ESTA execução instalou algo. Nunca em --check (nada foi instalado).
  if (!values.check && (r.instalados.length || indicesDefasados(cwd))) {
    reindexar(cwd);
  }
  // --check sai != 0 quando ha novidade (util em automacao)
  if (values.check === true && r.instalados.length) return { success: false };
  return { success: r.recusados.length === 0 && r.adiados.length === 0 };
}

/** `criminalsquad status` */
export function statusCli(cwd) {
  const license = readLicense();
  console.log('');
  console.log('  CriminalSquad — status');
  console.log('  ----------------------');
  if (license) {
    console.log(`  ${selo(license)}`);
    console.log(`  Token: ${license.token}`);
    console.log(`  Ativado: ${fmtIdade(license.ativado_em)}`);
    console.log(`  Instalacao: ${instalacaoId(hostname(), userInfo().username)}`);
  } else {
    console.log('  Sem licenca ativa.');
    console.log(`  Ative com: criminalsquad ativar <CSQ-XXXX-XXXX-XXXX>`);
    console.log(`  (o conteudo que ja veio instalado continua funcionando normalmente)`);
  }

  const installed = readInstalled(cwd);
  const packs = Object.entries(installed.packs || {});
  console.log('');
  if (!packs.length) {
    console.log('  Nenhum pacote sincronizado ainda.');
    console.log(`  O conteudo inicial embarcado nao depende de sync.`);
  } else {
    console.log('  Pacotes sincronizados:');
    for (const [id, p] of packs) {
      console.log(`   - ${id}@${p.versao} — ${p.arquivos} arquivos, verificado ${fmtIdade(p.verificado_em)}`);
    }
    console.log('');
    console.log(`  Cache: ${join(cwd, PACKS_DIR)}`);
  }
  console.log('');
  console.log(`  Curadoria: ${endpointConfigurado()}`);
  if (!license) console.log(`  Licenca: ${licensePath()}`);
  return { success: true };
}
