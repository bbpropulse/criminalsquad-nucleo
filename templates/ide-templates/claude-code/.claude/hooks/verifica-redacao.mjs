#!/usr/bin/env node
/**
 * Detector de VAZAMENTO DE PIPELINE na peça — o irmão mecânico do Citation Gate.
 *
 * O QUE ELE É, E O QUE ELE NÃO É
 * ─────────────────────────────
 * Ele NÃO julga se a redação é boa. Um hook determinístico não lê prosa: não
 * sabe se a teoria do caso cabe numa frase, se há norma órfã, se a eventualidade
 * é autofágica. Isso é trabalho do revisor em contexto isolado, e é lá que o
 * veredito `redacao:` mora.
 *
 * O que ele faz é impedir que ANDAIME chegue ao protocolo: marcador de tese,
 * nome de agente, número de step, front-matter de controle, caminho de skill,
 * `run_id`. Coisas que ninguém escreve numa petição de propósito e que nenhum
 * gate anterior olhava.
 *
 * POR QUE ELE EXISTE — medições de 28/07/2026, todas com os gates VERDES:
 *   • `negociacao-penal` entregou a peça com `citation_gate: final` no topo e um
 *     bloco de metadado de IA no rodapé;
 *   • `tribunal-juri` entregou o dossiê com "STATUS: partial", "Step: 07" e
 *     auditoria de `skills/…/SKILL.md` dentro do corpo;
 *   • "peça não protocolável" apareceu em TRÊS medições seguidas.
 * A correção da vez foi uma instrução de step — prosa. E a lei deste projeto é
 * que proibição em prosa não segura; motor segura. Este arquivo é o motor.
 *
 * COMO BLOQUEIA
 *   PreToolUse (Claude Code) / preToolUse (Cursor) → exit 2 antes de gravar.
 *   O mecanismo é o mesmo nas duas IDEs, então o hook é um só.
 */
import { readFileSync } from 'node:fs';
import { basename, normalize, isAbsolute, resolve } from 'node:path';

// Só peça final em squads/<nome>/output/. Mesmo alcance do Citation Gate: fora
// disso, andaime é legítimo (relatório, checklist e revisão PRECISAM citar step).
const OUTPUT_PATH = /(?:^|[/\\])squads[/\\][^/\\]+[/\\]output[/\\]/;
const LEGAL_NAME = /(?:^|[-_.])(?:peti[çc][ãa]o|peticao|pe[çc]a|peca|recurso|apela[çc][ãa]o|apelacao|agravo|habeas[-_]?corpus|hc|resposta[-_]?acusa[çc][ãa]o|memoriais|alega[çc][õo]es|contrarraz[õo]es|raz[õo]es|queixa[-_]?crime|den[úu]ncia|parecer|acordo|plenario|plen[áa]rio)(?:[-_.]|$)/i;
// Interno por natureza: aqui o jargão de pipeline é o conteúdo, não vazamento.
const INTERNAL_NAME = /^(?:revis[ãa]o|aprova[çc][ãa]o|checklist|relat[óo]rio|pesquisa|resumo|diagn[óo]stico|bloqueio|precedentes|cabimento|fatos|teses|estrat[ée]gia|c[áa]lculo|intake|onboarding|state|checkpoints?)(?:[-_.]|$)/i;

// Cada padrão traz a razão pela qual ele NÃO pode ir ao juízo — a mensagem de
// bloqueio precisa ensinar, não só recusar.
const VAZAMENTOS = [
  {
    re: /^---\s*[\s\S]*?^(?:citation_gate|redacao_gate|status|squad|step|run_id)\s*:/im,
    o_que: 'front-matter de controle no topo do arquivo',
    porque: 'é metadado do pipeline; petição começa no endereçamento.',
  },
  {
    re: /\(\s*tese\s+n?[º°]?\s*\d+\s*\)|\btese\s+n[º°]\s*\d+\b/i,
    o_que: 'marcador "(tese N)"',
    porque: 'numeração interna de tese — o juízo lê o argumento, não o índice do redator.',
  },
  {
    re: /^\s*(?:\*\*)?(?:Agente|Persona|Squad|Run|Execu[çc][ãa]o)(?:\*\*)?\s*:/im,
    o_que: 'rótulo de agente/squad/run',
    porque: 'identifica a máquina que produziu, não a parte que peticiona.',
  },
  {
    re: /\bSTATUS\s*:\s*(?:ready|partial|blocked|draft)\b/i,
    o_que: 'STATUS do pipeline',
    porque: 'estado de execução não é parte de peça.',
  },
  {
    re: /\bStep\s*[-_ ]?\d{1,2}\b|\bstep-\d{2}\b/i,
    o_que: 'referência a Step NN',
    porque: 'passo do pipeline; a peça não tem passos, tem capítulos.',
  },
  {
    re: /\bskills?\/[a-z0-9-]+\/SKILL\.md\b|`(?:skills|_criminalsquad)\/[^`]+`/i,
    o_que: 'caminho de skill ou do núcleo',
    porque: 'caminho de arquivo interno do produto.',
  },
  {
    re: /\{run_id\}|\/v\d+\/|\brun_id\b/i,
    o_que: 'run_id ou pasta de versão',
    porque: 'endereço interno de artefato.',
  },
  {
    re: /\b(?:rascunho t[ée]cnico|produzido com apoio de sistema de intelig[êe]ncia artificial|gerado por IA)\b/i,
    o_que: 'bloco de metadado sobre uso de IA',
    porque: 'se o escritório exige essa menção, é decisão do profissional sobre onde e como — não texto que o pipeline injeta na peça.',
  },
];

function block(mensagem) {
  process.stderr.write(`${mensagem}\n`);
  process.exit(2);
}

// Uma peça final em squads/*/output/ cujo nome não seja de artefato interno.
export function ehPecaFinal(caminho) {
  if (!OUTPUT_PATH.test(normalize(caminho))) return false;
  const nome = basename(caminho);
  if (INTERNAL_NAME.test(nome)) return false;
  if (/\.(json|yaml|yml|png|jpe?g|pdf|docx?)$/i.test(nome)) return false;
  return LEGAL_NAME.test(nome);
}

export function vazamentos(texto) {
  return VAZAMENTOS.filter((v) => v.re.test(texto));
}

function validarAntesDeGravar(caminho, conteudo) {
  if (!conteudo || !ehPecaFinal(caminho)) return;
  const achados = vazamentos(conteudo);
  if (!achados.length) return;

  const lista = achados.map((a) => `  • ${a.o_que} — ${a.porque}`).join('\n');
  block(
    `${basename(caminho)} carrega andaime do pipeline e não pode ir ao protocolo assim:\n${lista}\n\n`
      + 'Retire o que é do pipeline e deixe o que é da peça. Isto NÃO avalia a qualidade da\n'
      + 'redação — só impede que a peça saia com marca de fábrica. O julgamento da escrita é\n'
      + 'do revisor, em contexto isolado.',
  );
}

function hookPayload(bruto) {
  let dados;
  try { dados = JSON.parse(bruto); } catch { return null; }
  if (!dados || typeof dados !== 'object') return null;
  const entrada = dados.tool_input || {};
  return {
    // Claude Code manda `PreToolUse`; o Cursor, `preToolUse`. Um hook, duas IDEs.
    evento: String(dados.hook_event_name || '').toLowerCase(),
    caminho: entrada.file_path || entrada.path || entrada.target_file || '',
    conteudo: typeof entrada.content === 'string'
      ? entrada.content
      : (typeof entrada.new_string === 'string' ? entrada.new_string : ''),
  };
}

const i = process.argv.indexOf('--check');
if (i >= 0) {
  const alvo = process.argv[i + 1];
  if (!alvo) block('uso: verifica-redacao.mjs --check <peça>');
  const caminho = isAbsolute(alvo) ? normalize(alvo) : normalize(resolve(alvo));
  let conteudo = '';
  try { conteudo = readFileSync(caminho, 'utf8'); } catch { process.exit(0); }
  validarAntesDeGravar(caminho, conteudo);
  process.exit(0);
}

let bruto = '';
try { bruto = readFileSync(0, 'utf8'); } catch { process.exit(0); }
const p = hookPayload(bruto);
if (!p || !p.caminho) process.exit(0);
if (p.evento === 'pretooluse') validarAntesDeGravar(p.caminho, p.conteudo);
process.exit(0);
