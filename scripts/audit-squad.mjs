#!/usr/bin/env node
// Relatório ADVISORY de cobertura de skills por papel de um squad.
//
//   npm run audit-squad -- <nome-do-squad>
//   npm run audit-squad -- --all
//
// NÃO bloqueia (sai 0 sempre): é diagnóstico para o Arquiteto priorizar, não um
// gate. O gate real de performance é a Fase 5 smoke-run. Redação/revisão são
// onde a qualidade da peça mora — priorize atribuir as skills lá.
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import {
  auditSquadCoverage, auditSkillManifest, auditPipelineCoherence, auditAutoDeclaracoes,
  auditNotaVencida, loadRoleProfiles, loadSkillProfileMap,
} from '../src/squad-quality.js';

// Data da última linha de dados do scores.md (cabeçalho não conta).
function ultimaMedicao(dir) {
  const p = join(dir, '_evals', 'scores.md');
  if (!existsSync(p)) return null;
  const datas = [...readFileSync(p, 'utf8').matchAll(/^\|\s*(20\d\d-\d\d-\d\d)/gm)].map((m) => m[1]);
  return datas.length ? datas.sort().at(-1) : null;
}

// Data da última alteração do que define o comportamento do squad. Sem git
// disponível, devolve null e o checker fica silencioso em vez de chutar.
function ultimaAlteracao(dir) {
  try {
    const out = execFileSync('git', [
      'log', '-1', '--format=%ad', '--date=short', '--',
      join(dir, 'pipeline'), join(dir, 'agents'), join(dir, 'squad.yaml'),
    ], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return out || null;
  } catch { return null; }
}

const cwd = process.cwd();
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const all = process.argv.includes('--all');

const matrizPath = join(cwd, '_criminalsquad', 'core', 'squad-role-profiles.json');
const indexPath = join(cwd, 'skills', '_index.yaml');
const squadsDir = join(cwd, 'squads');

if (!existsSync(matrizPath)) {
  console.error(`Matriz não encontrada em ${matrizPath}. Rode a partir da raiz do projeto.`);
  process.exit(0); // advisory: não derruba fluxo
}
const matriz = loadRoleProfiles(matrizPath);
const mapa = loadSkillProfileMap(indexPath);
const skillProfileOf = (id) => mapa.get(id) || null;

let alvos;
if (all) {
  alvos = existsSync(squadsDir)
    ? readdirSync(squadsDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : [];
} else if (args[0]) {
  alvos = [args[0]];
} else {
  console.error('Uso: npm run audit-squad -- <nome-do-squad> | --all');
  process.exit(0);
}

let totalDescobertos = 0;
let totalForaDoManifesto = 0;
let totalIncoerencias = 0;
let totalNotasVencidas = 0;
let alvoInvalido = false;
for (const bruto of alvos) {
  // Aceitar `squads/negociacao-penal` além de `negociacao-penal`: é o que se
  // digita por tab-complete, e recusar em silêncio era pior que recusar alto —
  // a auditoria "passava" com 0 recomendações sobre um squad que existe.
  const nome = bruto.replace(/^\.?\/?squads\//, '').replace(/\/+$/, '');
  const dir = join(squadsDir, nome);
  if (!existsSync(join(dir, 'squad.yaml'))) {
    const existentes = existsSync(squadsDir)
      ? readdirSync(squadsDir).filter((d) => existsSync(join(squadsDir, d, 'squad.yaml')))
      : [];
    console.error(`\n[x] squad "${bruto}" não encontrado (procurei em ${join('squads', nome)}/squad.yaml).`);
    if (existentes.length) console.error(`    Disponíveis: ${existentes.join(', ')}`);
    alvoInvalido = true;
    continue;
  }
  // Bypass do gate de runtime é DEFEITO, não recomendação: skill que o step
  // manda carregar e o manifesto não declara é carregada sem passar por
  // lifecycle/maturidade/evidência.
  const m = auditSkillManifest(dir, { skillsDir: join(cwd, 'skills') });
  if (!m.ok) {
    console.log(`\n[DEFEITO] ${nome} — skill fora do manifesto de runtime (o gate não a vê):`);
    for (const id of m.foraDoManifesto) console.log(`   ! ${id}`);
    console.log('     → declare em squad.yaml `skills:` ou no `skills:` do agente que a usa');
    totalForaDoManifesto += m.foraDoManifesto.length;
  }

  // Agente que nenhum step aciona e artefato exigido sem produtor sao DEFEITO de
  // execucao, nao recomendacao: em runtime a persona nunca carrega e a entrada
  // obrigatoria nunca existe.
  const c = auditPipelineCoherence(dir);
  if (!c.ok) {
    console.log(`\n[DEFEITO] ${nome} — incoerencia do pipeline:`);
    for (const a of c.agentesInertes) console.log(`   ! agente ${a} nao e acionado por nenhum step (persona nunca carregada)`);
    for (const a of c.artefatosSemProdutor) console.log(`   ! ${a} e exigido por ${c.exigidoPor[a]} e nenhum step o produz`);
    for (const f of c.referenciasInertes) console.log(`   ! pipeline/data/${f} nao e carregado por nenhum step de agente (nunca entra em contexto)`);
    for (const d of c.consumidorDeclaradoAusente) console.log(`   ! pipeline/data/${d.arquivo} diz que ${d.step} o usa, e ${d.step} nao o carrega`);
    for (const k of c.knobsInertes) console.log(`   ! squad.yaml declara ${k.chave}: ${k.valor} e nenhum leitor (nem step, nem agente, nem runner) le essa chave`);
    totalIncoerencias += c.agentesInertes.length + c.artefatosSemProdutor.length
      + c.referenciasInertes.length + c.consumidorDeclaradoAusente.length + c.knobsInertes.length;
  }

  // Autodescricao que nao bate com o artefato — o ultimo lugar onde a familia
  // "registro que afirma o que nao aconteceu" ainda morava.
  const a = auditAutoDeclaracoes(dir);
  if (!a.ok) {
    console.log(`\n[DEFEITO] ${nome} — o squad conta errado sobre si mesmo:`);
    for (const d of a.divergencias) console.log(`   ! ${d.arquivo}: diz "${d.o_que_diz}", mas ha ${d.real}`);
    totalIncoerencias += a.divergencias.length;
  }

  // Nota velha nao e evidencia — e memoria de um artefato que mudou.
  const n = auditNotaVencida(dir, { medidoEm: ultimaMedicao(dir), alteradoEm: ultimaAlteracao(dir) });
  if (!n.ok) {
    console.log(`\n[NOTA VENCIDA] ${nome} — ${n.motivo}`);
    if (n.medidoEm) console.log(`   medido em ${n.medidoEm}, alterado em ${n.alteradoEm} — rode o caso-ouro de novo`);
    totalNotasVencidas++;
  }

  const r = auditSquadCoverage(dir, { matriz, skillProfileOf });
  console.log(`\n[${r.covered ? 'OK' : 'RECOMENDAÇÕES'}] ${nome}`);
  for (const u of r.uncovered) {
    const partes = [
      u.missingProfile ? `perfil ${u.missingProfile}` : null,
      ...(u.missingAnchors || []).map((a) => `âncora ${a}`),
    ].filter(Boolean).join('; ');
    const prioridade = ['redacao', 'revisao'].includes(u.role) ? ' « prioridade (qualidade da peça)' : '';
    console.log(`   - ${u.id} (${u.role}): ${partes}${prioridade}`);
    totalDescobertos++;
  }
}

console.log(
  `\n${totalDescobertos} recomendação(ões) de cobertura. Advisory — não bloqueia. `
  + 'Priorize redação/revisão; o gate real é a Fase 5 smoke-run.',
);
if (totalForaDoManifesto) {
  console.log(
    `${totalForaDoManifesto} skill(s) FORA DO MANIFESTO — isto é defeito, não recomendação: `
    + 'o gate de runtime não as vê.',
  );
}
if (totalNotasVencidas) {
  console.log(
    `${totalNotasVencidas} squad(s) com NOTA VENCIDA — a avaliacao e anterior a ultima alteracao do squad. `
    + 'Nota velha nao e evidencia: e memoria de um artefato que mudou.',
  );
}
if (totalIncoerencias) {
  console.log(`${totalIncoerencias} incoerência(s) de pipeline — agente inerte ou artefato sem produtor.`);
}
// Alvo inexistente sai com erro. Antes saía 0 com "0 recomendações", o que faz
// um squad digitado errado parecer aprovado — a pior mensagem possível numa
// ferramenta de auditoria.
process.exit(alvoInvalido ? 1 : 0);
