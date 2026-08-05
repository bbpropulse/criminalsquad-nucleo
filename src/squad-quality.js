// Cobertura de skills por papel num squad (spec 2026-07-24).
//
// Garante, no build, que cada agente carrega ao menos as skills do PERFIL do seu
// papel (+ âncoras obrigatórias). É o piso estrutural do "squad de alta
// performance"; a prova empírica é a Fase 5 smoke-run e, no tempo, o A1.
//
// Reusa os 8 perfis do skill-quality.js e o campo quality_profile do catálogo —
// não cria taxonomia nova.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseList, parseScalar } from './frontmatter.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_MATRIX_PATH = join(__dirname, '..', '_criminalsquad', 'core', 'squad-role-profiles.json');
const DEFAULT_INDEX_PATH = join(__dirname, '..', 'skills', '_index.yaml');

/**
 * Resolve o papel de um agente: o `role` declarado vence (se existir na matriz);
 * senão detecta pelo `id` na primeira regra da lista ORDENADA cujo padrão casa
 * (como PROFILE_PATTERNS — regra mais específica primeiro); senão null.
 */
export function resolveAgentRole(agent, matriz) {
  const roles = matriz?.roles || [];
  const declared = agent?.role;
  if (declared && roles.some((r) => r.role === declared)) return declared;
  const id = String(agent?.id || '');
  for (const r of roles) {
    if (r.namePattern && new RegExp(r.namePattern, 'i').test(id)) return r.role;
  }
  return null;
}

/**
 * Um agente está coberto para seu papel se carrega TODAS as skills-âncora do
 * papel E — quando o papel exige um perfil — ao menos uma skill daquele perfil.
 * `skillProfileOf(id)` devolve o quality_profile da skill (vem do catálogo).
 */
export function agentIsCovered(rule, assignedSkills, skillProfileOf) {
  const skills = assignedSkills || [];
  const anchors = rule?.anchors || [];
  const missingAnchors = anchors.filter((a) => !skills.includes(a));
  const profileCovered = !rule?.profile
    || skills.some((s) => skillProfileOf(s) === rule.profile);
  return {
    covered: missingAnchors.length === 0 && profileCovered,
    missingAnchors,
    missingProfile: profileCovered ? null : rule.profile,
  };
}

/** Carrega a matriz papel → perfil (fonte única em _criminalsquad/core/). */
export function loadRoleProfiles(path = DEFAULT_MATRIX_PATH) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

/** Mapa skill → quality_profile lido do catálogo (skills/_index.yaml). */
export function loadSkillProfileMap(indexPath = DEFAULT_INDEX_PATH) {
  const map = new Map();
  if (!existsSync(indexPath)) return map;
  let name = null;
  for (const line of readFileSync(indexPath, 'utf8').split(/\r?\n/)) {
    const nm = line.match(/^\s*-\s*name:\s*(\S+)/);
    if (nm) { name = nm[1].replace(/^["']|["']$/g, ''); continue; }
    const pm = line.match(/^\s*quality_profile:\s*["']?([a-z-]+)["']?/);
    if (pm && name) map.set(name, pm[1]);
  }
  return map;
}

// Extrai [{ id, custom }] do bloco `agents:` do squad.yaml. Parser mínimo e
// dependency-free — a estrutura é regular (`- id:` / `custom:`); paramos ao
// sair do bloco (primeira linha sem indentação = nova chave top-level).
function parseAgents(squadYaml) {
  const lines = squadYaml.split(/\r?\n/);
  const start = lines.findIndex((l) => /^agents:\s*$/.test(l));
  if (start < 0) return [];
  const agents = [];
  let cur = null;
  for (let i = start + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^\S/.test(line)) break;
    const idm = line.match(/^\s*-\s*id:\s*(\S+)/);
    if (idm) { cur = { id: idm[1].replace(/^["']|["']$/g, '') }; agents.push(cur); continue; }
    if (!cur) continue;
    const cm = line.match(/^\s*custom:\s*(\S+)/);
    if (cm) cur.custom = cm[1].replace(/^["']|["']$/g, '');
  }
  return agents;
}

function frontmatterOf(raw) {
  return raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
}

// Skills citadas na prosa de um step: "carregue a skill `X`" ou "`skills/X/…`".
const SKILL_NA_PROSA = [
  /skill\s+`([a-z0-9][a-z0-9-]+)`/gi,
  /`skills\/([a-z0-9][a-z0-9-]+)\//g,
];

/**
 * Skills que o pipeline manda carregar mas o MANIFESTO DE RUNTIME não declara.
 *
 * O gate de maturidade monta seu manifesto da união `squad.yaml.skills` +
 * `skills:` de cada agente (runner.pipeline.md). A prosa dos steps não entra
 * nessa conta — então uma skill nomeada só ali é carregada de verdade e nunca
 * passa pelo gate de lifecycle/maturidade/evidência.
 *
 * Isso não é o gate sendo burlado: é ele não sendo consultado, porque a skill
 * não está onde ele procura. É a mesma cegueira pela qual uma `quarantined`
 * passaria. Ao contrário da cobertura por papel (advisory), isto é defeito.
 *
 * Menção a skill que não existe no disco é erro de texto, não bypass — fica de
 * fora para o checker não gerar ruído.
 */
export function auditSkillManifest(squadDir, opts = {}) {
  const skillExists = opts.skillExists
    || ((id) => existsSync(join(opts.skillsDir || join(__dirname, '..', 'skills'), id, 'SKILL.md')));
  const declaradas = new Set();

  const squadYamlPath = join(squadDir, 'squad.yaml');
  if (existsSync(squadYamlPath)) {
    const raw = readFileSync(squadYamlPath, 'utf8');
    for (const id of parseList(raw, 'skills') || []) declaradas.add(String(id));
    for (const agent of parseAgents(raw)) {
      if (!agent.custom) continue;
      const p = join(squadDir, agent.custom);
      if (!existsSync(p)) continue;
      const fm = frontmatterOf(readFileSync(p, 'utf8'));
      for (const id of parseList(fm, 'skills') || []) declaradas.add(String(id));
    }
  }

  const stepsDir = join(squadDir, 'pipeline', 'steps');
  const naProsa = new Set();
  if (existsSync(stepsDir)) {
    for (const file of readdirSync(stepsDir).filter((f) => f.endsWith('.md'))) {
      const texto = readFileSync(join(stepsDir, file), 'utf8');
      for (const padrao of SKILL_NA_PROSA) {
        padrao.lastIndex = 0;
        for (const m of texto.matchAll(padrao)) naProsa.add(m[1]);
      }
    }
  }

  const foraDoManifesto = [...naProsa]
    .filter((id) => !declaradas.has(id) && skillExists(id))
    .sort();
  return { squad: squadDir, ok: foraDoManifesto.length === 0, foraDoManifesto };
}

// O que o squad AFIRMA sobre si mesmo, em prosa, e que dá para contar.
const AUTO_DECLARACOES = [
  {
    rotulo: 'checkpoints',
    re: /(\d+)[ \t]+checkpoints?\b/gi,
    contar: ({ pipelineYaml }) => (pipelineYaml.match(/^\s*type:\s*checkpoint\s*$/gim) || []).length,
  },
  {
    rotulo: 'agentes',
    re: /(\d+)[ \t]+agentes?\b/gi,
    contar: ({ squadYaml }) => parseAgents(squadYaml).length,
  },
];

/**
 * Autodescrição que não bate com o artefato.
 *
 * É o último lugar onde a família "registro que afirma o que não aconteceu"
 * ainda morava depois de todos os outros gates. Medido na 3ª geração: um bloco
 * de autocrítica marcava "Checkpoints — OK, 5 checkpoints" e a própria nota
 * enumerava SEIS nomes; o artefato tinha seis.
 *
 * O escopo é estreito de propósito — só afirmações NUMÉRICAS sobre o que existe
 * no próprio squad, porque só essas se contam sem interpretar. "O pipeline é
 * robusto" continua sendo prosa, e prosa não é assunto de checker.
 */
export function auditAutoDeclaracoes(squadDir) {
  const ler = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');
  const squadYaml = ler(join(squadDir, 'squad.yaml'));
  const pipelineYaml = ler(join(squadDir, 'pipeline', 'pipeline.yaml'));
  // _build/design.yaml entra porque e onde a autocritica mora — 3 das 5
  // instancias da 3a geracao estavam la dentro, e o checker nasceu cego a ele:
  // a 4a geracao achou "4 checkpoints" contra 5 reais nesse arquivo, com
  // auditAutoDeclaracoes devolvendo ok:true.
  const fontes = [
    { arquivo: 'squad.yaml', texto: squadYaml },
    { arquivo: 'pipeline/pipeline.yaml', texto: pipelineYaml },
    { arquivo: '_build/design.yaml', texto: ler(join(squadDir, '_build', 'design.yaml')) },
    { arquivo: '_build/discovery.yaml', texto: ler(join(squadDir, '_build', 'discovery.yaml')) },
  ];

  const divergencias = [];
  for (const { rotulo, re, contar } of AUTO_DECLARACOES) {
    const real = contar({ squadYaml, pipelineYaml });
    for (const { arquivo, texto } of fontes) {
      re.lastIndex = 0;
      for (const m of texto.matchAll(re)) {
        const declarado = Number(m[1]);
        if (declarado !== real) {
          divergencias.push({
            arquivo, rotulo, o_que_diz: m[0].trim(), declarado, real,
          });
        }
      }
    }
  }
  return { squad: squadDir, ok: divergencias.length === 0, divergencias };
}

function stepFiles(squadDir) {
  const dir = join(squadDir, 'pipeline', 'steps');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => ({ nome: f, raw: readFileSync(join(dir, f), 'utf8') }));
}

/**
 * Número no `squad.yaml` que ninguém executa.
 *
 * A 4ª geração acusou `citation_verifiers: 3` de knob inerte, e a acusação era
 * FALSA: quem lê a chave é o `runner.pipeline.md` (voting do Citation Gate e da
 * Verificação da Meta), não um step. A lição — a mesma que este checker existe
 * para impor — é que "inerte" só se afirma depois de olhar TODOS os leitores
 * possíveis. Por isso o escopo aqui inclui o núcleo, não só o squad: knob lido
 * pelo runner é knob vivo.
 *
 * A regra é deliberadamente mecânica: chave de valor numérico cujo NOME não
 * aparece em nenhum leitor (steps, agentes, pipeline, runner, prompts do núcleo)
 * é knob sem leitor. Não interpreta semântica — só confere se alguém lê.
 */
function knobsSemLeitor(squadDir, squadYaml, opts = {}) {
  const coreDir = opts.coreDir || join(__dirname, '..', '_criminalsquad', 'core');
  const textos = [];
  const juntar = (dir, recursivo) => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) { if (recursivo) juntar(p, recursivo); continue; }
      if (!/\.(md|ya?ml|csv|json)$/i.test(e.name)) continue;
      textos.push(readFileSync(p, 'utf8'));
    }
  };
  juntar(join(squadDir, 'pipeline', 'steps'), false);
  juntar(join(squadDir, 'agents'), false);
  juntar(join(squadDir, 'pipeline'), false);
  juntar(coreDir, true); // o runner é leitor legítimo de knob declarado no squad.yaml

  const corpo = textos.join('\n');
  const achados = [];
  for (const m of squadYaml.matchAll(/^\s*([a-z_][a-z0-9_]*)\s*:\s*(\d+)\s*$/gim)) {
    const [, chave, valor] = m;
    if (corpo.includes(chave)) continue;
    achados.push({ chave, valor: Number(valor) });
  }
  return achados;
}

// Só conta como "consumidor declarado" quando o arquivo diz que ALGUÉM O USA —
// verbo de consumo perto da referência ao step. Menção cruzada em prosa ("as
// teses aprovadas no Step 07") não é declaração de consumo.
const CONSUMO_DECLARADO = /\b(usad[ao]s?|utilizad[ao]s?|lid[ao]s?|carregad[ao]s?|consumid[ao]s?|aplicad[ao]s?|consultad[ao]s?)\b[^.\n]{0,80}?\bstep[ _-]?(\d{1,2})\b/gi;

// Arquivos de referência citados sob um cabeçalho do step (Context Loading).
// Casa `pipeline/data/x.md` e também a menção só pelo nome do arquivo.
function referencesUnder(raw, heading) {
  const i = raw.search(new RegExp(`^##+\\s*${heading}`, 'im'));
  if (i < 0) return [];
  const resto = raw.slice(i);
  const fim = resto.slice(1).search(/^##\s/m);
  const bloco = fim < 0 ? resto : resto.slice(0, fim + 1);
  return [...bloco.matchAll(/(?:pipeline\/data\/)?([A-Za-z0-9._-]+\.(?:md|ya?ml|json|csv|txt))/g)]
    .map((m) => m[1]);
}

// Artefatos citados sob um cabeçalho específico do step (Context Loading /
// Expected Outputs). Delimita pela próxima seção `##` para não varrer o arquivo
// inteiro — menção em prosa não é declaração.
function artifactsUnder(raw, heading) {
  const i = raw.search(new RegExp(`^##+\\s*${heading}`, 'im'));
  if (i < 0) return [];
  const resto = raw.slice(i);
  const fim = resto.slice(1).search(/^##\s/m);
  const bloco = fim < 0 ? resto : resto.slice(0, fim + 1);
  return [...bloco.matchAll(/(output\/[A-Za-z0-9._/-]+\.[a-z]{2,5})/g)].map((m) => m[1]);
}

/**
 * Artefatos declarados no `pipeline.yaml` (`output.artifacts`), por step.
 *
 * O runner tem um fallback EXPLÍCITO para isto (`runner.pipeline.md`, Post-Step
 * Output Validation): "If the step does not declare an `outputFile` in its
 * frontmatter, fall back to the `pipeline.yaml` … Many hand-crafted squads
 * declare outputs in `pipeline.yaml` (not in the step frontmatter)". Os 9 squads
 * embarcados são todos assim — nenhum dos 49 steps de agente traz `outputFile:`.
 * Ignorar esta fonte fazia o checker acusar de "sem produtor" artefato que o
 * runner produz. Ler o step e não ler o pipeline.yaml é ver metade do contrato.
 *
 * Checkpoint continua FORA: o runner só grava arquivo em checkpoint quando o
 * `outputFile` está no FRONTMATTER do step (não no pipeline.yaml), e a validação
 * de saída isenta checkpoints. Artefato de checkpoint declarado só aqui não é
 * escrito por ninguém.
 */
function artifactsFromPipelineYaml(squadDir) {
  const p = join(squadDir, 'pipeline', 'pipeline.yaml');
  if (!existsSync(p)) return new Map();
  const porStep = new Map();
  let id = null;
  let dentroDeSteps = false;
  for (const linha of readFileSync(p, 'utf8').split('\n')) {
    // Chave de coluna zero fecha o bloco anterior. Sem isto, o `output.artifacts`
    // de NÍVEL SUPERIOR (o rol de entregáveis do pipeline inteiro, no fim do
    // arquivo) é atribuído ao último step — e passa a "produzir" tudo, inclusive
    // o que só um checkpoint declarava. Isso mascara justamente o defeito que
    // este checker existe para pegar.
    const chaveRaiz = linha.match(/^([a-z_][a-z0-9_]*):/i);
    if (chaveRaiz) { dentroDeSteps = chaveRaiz[1] === 'steps'; id = null; continue; }
    if (!dentroDeSteps) continue;
    const novo = linha.match(/^\s*-\s+id:\s*(\S+)/);
    if (novo) { [, id] = novo; porStep.set(id, { tipo: null, artefatos: [] }); continue; }
    if (!id) continue;
    const t = linha.match(/^\s+type:\s*(\S+)/);
    if (t) { porStep.get(id).tipo = t[1]; continue; }
    const a = linha.match(/^\s+-\s+(output\/\S+)/);
    if (a) porStep.get(id).artefatos.push(a[1]);
  }
  return porStep;
}

/**
 * Coerência interna do pipeline — as duas direções que nenhum gate via.
 *
 * O Gate 3 do build conferia step→agente (o step aponta para agente existente?).
 * Faltavam a direção inversa e a dos artefatos, e é lá que os defeitos moravam:
 *
 * - **Agente inerte:** persona escrita, com skills e guard-rails, que nenhum
 *   step aciona por `agent:`. Em runtime ela nunca é carregada — tudo o que foi
 *   escrito nela vira texto morto.
 * - **Artefato sem produtor:** step que declara em Context Loading uma entrada
 *   OBRIGATÓRIA que nenhum outro step produz. Medido: o produtor pretendido era
 *   um `type: checkpoint`, e checkpoint não executa trabalho — só grava a
 *   resposta do usuário em `outputFile`. Por isso checkpoint não conta aqui
 *   como produtor, mesmo declarando `Expected Outputs`.
 *
 * A 4ª geração acrescentou duas frestas, ambas da mesma família e ambas
 * invisíveis aos gates anteriores:
 *
 * - **Referência sem consumidor:** arquivo em `pipeline/data/` (declarado ou não
 *   em `squad.yaml`) que nenhum step de agente carrega. Medido: o
 *   `research-brief.md` era o ÚNICO arquivo do squad com o rito de plenário
 *   correto (arts. 463, 467, 468, 477 do CPP) e nunca entrava em contexto — o
 *   conhecimento certo foi escrito e depois desconectado. Checkpoint não conta
 *   como consumidor pela mesma razão que não conta como produtor.
 * - **Consumidor declarado que não lê:** o arquivo de referência nomeia o step
 *   que o usa ("rubrica usada pelo revisor do Step 11") e esse step não o
 *   carrega. A rubrica existe, o revisor existe, e eles nunca se encontram.
 */
export function auditPipelineCoherence(squadDir) {
  const squadYamlPath = join(squadDir, 'squad.yaml');
  const squadYaml = existsSync(squadYamlPath) ? readFileSync(squadYamlPath, 'utf8') : '';
  const steps = stepFiles(squadDir);

  const acionados = new Set();
  const produzidos = new Set();
  const exigidos = new Map();
  const referenciasLidasPor = new Map();
  for (const { nome, raw } of steps) {
    const fm = frontmatterOf(raw);
    const agente = parseScalar(fm, 'agent');
    if (agente) acionados.add(agente);
    const ehCheckpoint = (parseScalar(fm, 'type') || '').toLowerCase() === 'checkpoint';
    if (!ehCheckpoint) {
      for (const a of artifactsUnder(raw, 'Expected Outputs')) produzidos.add(a);
      for (const r of referencesUnder(raw, 'Context Loading')) {
        if (!referenciasLidasPor.has(r)) referenciasLidasPor.set(r, []);
        referenciasLidasPor.get(r).push(nome);
      }
    }
    const saidaDoCheckpoint = parseScalar(fm, 'outputFile');
    if (saidaDoCheckpoint) produzidos.add(saidaDoCheckpoint.replace(/^.*?(output\/)/, '$1'));
    for (const a of artifactsUnder(raw, 'Context Loading')) {
      if (!exigidos.has(a)) exigidos.set(a, nome);
    }
  }

  // Fallback do runner: step de AGENTE sem `outputFile:` no frontmatter produz
  // o que o pipeline.yaml declarar. Checkpoint segue de fora — lá o runner só
  // grava a partir do frontmatter.
  for (const [, { tipo, artefatos }] of artifactsFromPipelineYaml(squadDir)) {
    if ((tipo || '').toLowerCase() === 'checkpoint') continue;
    for (const a of artefatos) produzidos.add(a);
  }

  const agentesInertes = parseAgents(squadYaml)
    .map((a) => a.id)
    .filter((id) => id && !acionados.has(id))
    .sort();
  const artefatosSemProdutor = [...exigidos.keys()]
    .filter((a) => !produzidos.has(a))
    .sort();

  // Referências: o que existe em pipeline/data/ e quem realmente lê.
  const dataDir = join(squadDir, 'pipeline', 'data');
  const arquivosDeReferencia = existsSync(dataDir)
    ? readdirSync(dataDir).filter((f) => !f.startsWith('.')).sort()
    : [];
  const referenciasInertes = arquivosDeReferencia
    .filter((f) => !(referenciasLidasPor.get(f) || []).length);

  // O arquivo nomeia o step que o consome — esse step o carrega mesmo?
  const consumidorDeclaradoAusente = [];
  const nomesDeStep = steps.map((s) => s.nome);
  for (const f of arquivosDeReferencia) {
    const texto = readFileSync(join(dataDir, f), 'utf8');
    const leitores = referenciasLidasPor.get(f) || [];
    const declarados = new Set();
    CONSUMO_DECLARADO.lastIndex = 0;
    for (const m of texto.matchAll(CONSUMO_DECLARADO)) declarados.add(m[2].padStart(2, '0'));
    for (const num of declarados) {
      const alvo = nomesDeStep.find((n) => n.startsWith(`step-${num}`));
      if (!alvo) continue;
      if (!leitores.includes(alvo)) consumidorDeclaradoAusente.push({ arquivo: f, step: alvo });
    }
  }

  const knobsInertes = knobsSemLeitor(squadDir, squadYaml);

  return {
    squad: squadDir,
    ok: agentesInertes.length === 0 && artefatosSemProdutor.length === 0
      && referenciasInertes.length === 0 && consumidorDeclaradoAusente.length === 0
      && knobsInertes.length === 0,
    agentesInertes,
    artefatosSemProdutor,
    referenciasInertes,
    consumidorDeclaradoAusente,
    knobsInertes,
    exigidoPor: Object.fromEntries(exigidos),
  };
}

/**
 * Nota que envelheceu — a avaliação diz o que o squad ERA, não o que ele É.
 *
 * Medido em 27/07/2026: dos 9 squads embarcados, **8 tinham a última nota
 * anterior à última alteração do próprio squad**. Todas as 16 avaliações vinham
 * de 26/07 e o pipeline havia sido cirurgiado depois (checkpoint que não executa,
 * motores novos, gates novos). Uma nota nessas condições não é evidência — é
 * memória, e memória de um artefato que mudou.
 *
 * Pior: o único squad remedido caiu de 88 para 50 quando o juiz ficou rigoroso.
 * Isso significa que nota velha também tende a ser nota otimista, e é lida como
 * garantia por quem confia no `scores.md`.
 *
 * Recebe as datas já resolvidas (o chamador sabe se usa git ou mtime), para o
 * checker não depender de git nem de relógio.
 */
export function auditNotaVencida(squadDir, { medidoEm, alteradoEm } = {}) {
  // Só as datas recebidas decidem. Reabrir o `scores.md` aqui faria a função
  // discordar do próprio contrato — e foi o que quebrou o primeiro teste.
  if (!medidoEm) {
    return {
      squad: squadDir, ok: false, motivo: 'sem nenhuma avaliação registrada', medidoEm: null, alteradoEm,
    };
  }
  const vencida = Boolean(alteradoEm && alteradoEm > medidoEm);
  return {
    squad: squadDir,
    ok: !vencida,
    motivo: vencida ? 'a última nota é anterior à última alteração do squad' : null,
    medidoEm,
    alteradoEm,
  };
}

/**
 * Audita a cobertura de skills por papel de um squad no disco. Para cada agente:
 * resolve o papel (role declarado no frontmatter do custom.md vence a detecção
 * por id), lê as skills atribuídas e confere contra a matriz. Papel não
 * reconhecido é ignorado (não exige nada). Devolve { covered, uncovered, agents }.
 */
export function auditSquadCoverage(squadDir, opts = {}) {
  const matriz = opts.matriz || loadRoleProfiles();
  let skillProfileOf = opts.skillProfileOf;
  if (!skillProfileOf) {
    const map = loadSkillProfileMap();
    skillProfileOf = (id) => map.get(id) || null;
  }
  const squadYaml = readFileSync(join(squadDir, 'squad.yaml'), 'utf8');
  const uncovered = [];
  const agents = [];
  const semArquivo = [];
  for (const agent of parseAgents(squadYaml)) {
    let skills = [];
    let declaredRole = null;
    // Agente sem arquivo resolvível lia como "zero skills" — indistinguível de
    // um agente que legitimamente não carrega nenhuma. O checker media a
    // própria cegueira: `custom:` ausente ou apontando para arquivo inexistente
    // virava silenciosamente "descoberto", e o `role:` declarado nunca era
    // lido. Agora a ausência é REPORTADA, não presumida.
    const caminho = agent.custom ? join(squadDir, agent.custom) : null;
    if (caminho && existsSync(caminho)) {
      const fm = frontmatterOf(readFileSync(caminho, 'utf8'));
      skills = (parseList(fm, 'skills') || []).filter((s) => typeof s === 'string');
      declaredRole = parseScalar(fm, 'role') || null;
    } else {
      semArquivo.push({ id: agent.id, custom: agent.custom || null });
    }
    const role = resolveAgentRole({ id: agent.id, role: declaredRole }, matriz);
    if (!role) { agents.push({ id: agent.id, role: null, skipped: true }); continue; }
    const rule = matriz.roles.find((r) => r.role === role);
    const cov = agentIsCovered(rule, skills, skillProfileOf);
    agents.push({ id: agent.id, role, skills, ...cov });
    if (!cov.covered) uncovered.push({ id: agent.id, role, ...cov });
  }
  return {
    squad: squadDir, covered: uncovered.length === 0, uncovered, agents, semArquivo,
  };
}
