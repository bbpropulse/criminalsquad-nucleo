/**
 * Harness de promoção de maturidade de SKILL.
 *
 * O validador (`validateSkillPromotionEvidence`) já era rigoroso; faltava o
 * caminho de AUTORIA. Sem ele, promover exigia montar à mão um envelope com
 * hashes, mínimos por risco e vínculo com o SKILL.md instalado — trabalhoso o
 * bastante para que, na prática, ninguém promovesse: as 520 skills seguem em
 * `contracted`, e `contracted` é contrato estrutural cumprido, não desempenho
 * comprovado.
 *
 * A regra que desenha tudo aqui: **o esqueleto nasce reprovado**. Ele preenche
 * só o que a máquina pode saber sozinha (vínculo com a skill, quantos cenários o
 * risco exige, o formato) e deixa como marcador de preenchimento exatamente o
 * que só uma execução real e um revisor independente produzem — `behavioral_run`,
 * status dos cenários, hashes de entrada/saída, escores do baseline e a decisão
 * do revisor. Um scaffold que preenchesse esses campos não seria conveniência:
 * seria um gerador de mentira, e a maturidade voltaria a ser rótulo.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';

import {
  PROMOTION_EVIDENCE_MINIMUMS,
  PROMOTION_EVIDENCE_SCHEMA_VERSION,
  readSkillEvidenceBinding,
  validateSkillPromotionEvidence,
} from './skill-quality.js';

export const RESULTS_DIR_NAME = 'results';

// Marcador de preenchimento. É deliberadamente inválido para o schema (não é
// hex de 64 caracteres, não é `true`, não é `pass`): se alguém esquecer de
// preencher, a validação reprova em vez de deixar passar um zero plausível.
const PREENCHER = 'PREENCHER';
const PREENCHER_HASH = 'PREENCHER-sha256-de-64-caracteres';

function agoraIso(now) {
  return (now instanceof Date ? now : new Date(now || 0)).toISOString();
}

function dentroDeResults(caminho) {
  const partes = resolve(caminho).split(sep);
  const i = partes.lastIndexOf('_evals');
  return i >= 0 && partes[i + 1] === RESULTS_DIR_NAME;
}

function cenarioEsqueleto(indice, total) {
  // O primeiro é adversarial de propósito: a cobertura normal+adversarial é
  // exigida pelo validador, e quem preenche tende a começar pelo caso fácil.
  const kind = indice === 0 ? 'adversarial' : (indice === total - 1 ? 'edge' : 'normal');
  return {
    id: `caso-${indice + 1}`,
    kind,
    behavioral_run: false,
    status: PREENCHER,
    executed_at: PREENCHER,
    input_sha256: PREENCHER_HASH,
    output_sha256: PREENCHER_HASH,
    grader: {
      id: PREENCHER,
      type: 'model',
      model: { provider: PREENCHER, name: PREENCHER, version: PREENCHER },
      rubric_version: PREENCHER,
    },
  };
}

/**
 * Monta o esqueleto de evidência para uma skill instalada.
 *
 * `destino` é opcional; quando informado, o arquivo é gravado — nunca dentro de
 * `_evals/results/`, porque a resolução de evidência é cronológica: uma
 * tentativa inválida mais recente SUPERA um pass válido anterior, então um
 * rascunho largado ali rebaixaria em silêncio uma skill já promovida.
 */
export function scaffoldPromotionEvidence(skillsDir, skill, options = {}) {
  const status = String(options.status || 'verified').toLowerCase();
  if (!['verified', 'certified'].includes(status)) {
    return { ok: false, error: 'status deve ser "verified" ou "certified"' };
  }
  const binding = readSkillEvidenceBinding(skillsDir, skill, options.extraSkillsDirs || []);
  if (!binding) {
    return { ok: false, error: `skill "${skill}" não encontrada em ${skillsDir}` };
  }
  const minimo = PROMOTION_EVIDENCE_MINIMUMS[binding.risk_level];
  if (!minimo) {
    return { ok: false, error: `risk_level "${binding.risk_level}" inválido no SKILL.md de ${skill}` };
  }
  if (options.destino && dentroDeResults(options.destino)) {
    return {
      ok: false,
      error: 'destino proibido: um rascunho inválido em _evals/results/ supera evidência válida anterior '
        + 'e rebaixa a skill sem aviso. Grave fora e mova só depois de o --conferir passar.',
    };
  }

  const revisoresExigidos = status === 'certified' ? minimo.certifiedReviewers : minimo.verifiedReviewers;
  const evidence = {
    schema_version: PROMOTION_EVIDENCE_SCHEMA_VERSION,
    suite: `promocao-${skill}`,
    evaluated_at: PREENCHER,
    execution_model: { provider: PREENCHER, name: PREENCHER, version: PREENCHER },
    evaluator: { id: PREENCHER, type: 'model', model: { provider: PREENCHER, name: PREENCHER, version: PREENCHER } },
    results: [{
      evidence_id: `${skill}-${agoraIso(options.now).slice(0, 10)}`,
      skill,
      skill_binding: {
        algorithm: binding.algorithm,
        skill_sha256: binding.skill_sha256,
        skill_version: binding.skill_version,
        contract_version: binding.contract_version,
      },
      risk_level: binding.risk_level,
      awarded_status: status,
      behavioral_run: false,
      verdict: PREENCHER,
      hard_fails: [],
      scenarios: Array.from({ length: minimo.cases }, (_, i) => cenarioEsqueleto(i, minimo.cases)),
      baseline: {
        method: 'same-cases-without-skill',
        executed_at: PREENCHER,
        model: { provider: PREENCHER, name: PREENCHER, version: PREENCHER },
        metric: PREENCHER,
        direction: 'higher-is-better',
        case_ids: Array.from({ length: minimo.cases }, (_, i) => `caso-${i + 1}`),
        without_skill_score: null,
        with_skill_score: null,
        improvement: null,
      },
      reviewers: Array.from({ length: revisoresExigidos }, (_, i) => ({
        id: `${PREENCHER}-revisor-${i + 1}`,
        type: status === 'certified' && i < minimo.certifiedHumans ? 'human' : 'model',
        independent: true,
        decision: PREENCHER,
        reviewed_at: PREENCHER,
      })),
      regression: {
        suite_id: PREENCHER,
        executed_at: PREENCHER,
        status: PREENCHER,
        case_count: minimo.cases,
      },
    }],
  };

  if (options.destino) {
    mkdirSync(dirname(resolve(options.destino)), { recursive: true });
    writeFileSync(resolve(options.destino), `${JSON.stringify(evidence, null, 2)}\n`);
  }
  return {
    ok: true, evidence, binding, minimo, destino: options.destino || null,
  };
}

/**
 * Confere um arquivo de evidência contra o mesmo validador do runtime —
 * estrutura, mínimos por risco e vínculo com os bytes do SKILL.md instalado.
 */
export function checkPromotionEvidenceFile(skillsDir, filePath, options = {}) {
  let suite;
  try {
    suite = JSON.parse(readFileSync(resolve(filePath), 'utf8'));
  } catch (error) {
    return { ok: false, error: `não foi possível ler o arquivo: ${error.message}`, results: [] };
  }
  const results = (Array.isArray(suite?.results) ? suite.results : []).map((result) => {
    const binding = readSkillEvidenceBinding(skillsDir, result?.skill, options.extraSkillsDirs || []);
    const validation = validateSkillPromotionEvidence(suite, result, binding);
    return {
      skill: result?.skill || '(sem skill)',
      awardedStatus: validation.awardedStatus,
      valid: validation.valid,
      qualifiesForPromotion: validation.qualifiesForPromotion,
      failures: validation.failures,
      skillInstalada: Boolean(binding),
    };
  });
  if (!results.length) {
    return { ok: false, error: 'o arquivo não traz nenhum resultado em `results`', results: [] };
  }
  return { ok: results.every((r) => r.valid), results };
}

const GUIA = [
  'O esqueleto NÃO promove nada — ele nasce reprovado, de propósito.',
  'Preencha só com o que existir de fato:',
  '  1. execução comportamental real de cada cenário (behavioral_run, status, executed_at);',
  '  2. hashes SHA-256 do input e do output de cada execução;',
  '  3. baseline nos MESMOS casos sem a skill, com o mesmo modelo versionado;',
  '  4. revisor independente (id distinto do avaliador) aprovando explicitamente;',
  '  5. suíte de regressão com status pass.',
  'Depois rode --conferir. Só mova para _evals/results/ quando ele passar.',
];

export function promoverSkillCli(args = [], cwd = process.cwd(), values = {}) {
  const skillsDir = join(cwd, 'skills');
  const alvo = args[0];
  const conferir = values.conferir || values.check;

  if (conferir) {
    const arquivo = typeof conferir === 'string' ? conferir : alvo;
    if (!arquivo) {
      console.error('uso: npx criminalsquad promover-skill --conferir <arquivo.json>');
      return { success: false };
    }
    const relatorio = checkPromotionEvidenceFile(skillsDir, arquivo);
    if (relatorio.error) {
      console.error(`✗ ${relatorio.error}`);
      return { success: false };
    }
    for (const r of relatorio.results) {
      if (r.valid) {
        console.log(`✓ ${r.skill} — evidência válida para ${r.awardedStatus}`);
      } else {
        console.log(`✗ ${r.skill} — ainda não promove. Falta:`);
        for (const f of r.failures) console.log(`    · ${f}`);
        if (!r.skillInstalada) console.log('    · a skill não está instalada neste projeto');
      }
    }
    return { success: relatorio.ok };
  }

  if (!alvo) {
    console.error('uso: npx criminalsquad promover-skill <skill> [--status verified|certified] [--saida <arquivo>]');
    return { success: false };
  }
  const destino = values.saida || join(cwd, 'skills', '_evals', 'rascunhos', `${alvo}.json`);
  const resultado = scaffoldPromotionEvidence(skillsDir, alvo, {
    status: values.status || 'verified',
    destino,
    now: new Date(),
  });
  if (!resultado.ok) {
    console.error(`✗ ${resultado.error}`);
    return { success: false };
  }
  console.log(`✓ esqueleto gravado em ${destino}`);
  console.log(`  risco ${resultado.binding.risk_level} ⇒ ${resultado.minimo.cases} cenários exigidos`);
  console.log('');
  for (const linha of GUIA) console.log(`  ${linha}`);
  return { success: true };
}
