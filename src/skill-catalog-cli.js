import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  discoverSkillCatalog,
  renderSkillIndex,
  validateSkillCatalog,
  withPackSkills,
} from './skill-catalog.js';
import { auditSkillCatalogQuality } from './skill-quality.js';
import { contractSkillCatalog, generateSkillOpenAiMetadata } from './skill-contract.js';

function projectProfilesPath(targetDir) {
  const path = join(targetDir, '_criminalsquad', 'core', 'skill-quality-profiles.json');
  return existsSync(path) ? path : undefined;
}

// Skills sincronizadas que o pacote trouxe defeituosas são DESCARTADAS (nunca
// derrubam o catálogo), mas o usuário precisa saber — senão some conteúdo em
// silêncio e ele acha que o sync não trouxe nada.
function avisarDescartadas(catalog) {
  for (const item of catalog.packSkillsDescartadas || []) {
    console.warn(`  ⚠️  skill sincronizada ignorada: ${item.id} — ${item.motivo}`);
  }
}

function validateProjectCatalog(targetDir) {
  const skillsDir = join(targetDir, 'skills');
  const integrationPath = join(skillsDir, '_execucao-penal-v3-integration.yaml');
  return validateSkillCatalog({
    skillsDir,
    requireIntegration: existsSync(integrationPath),
    // Production installs intentionally do not receive the preserved preview
    // source directories. Validate the 73-row manifest itself, not their local
    // presence. The package/repository gate uses the strict default instead.
    requireCanonicalSources: false,
  });
}

function printErrors(result) {
  for (const error of result.errors) {
    console.error(`  - [${error.code}] ${error.message}`);
  }
}

export function indexSkillsProject(targetDir) {
  const skillsDir = join(targetDir, 'skills');
  if (!existsSync(skillsDir)) {
    console.error('Diretório skills/ ausente. Execute `npx criminalsquad init` primeiro.');
    return { success: false };
  }
  // withPackSkills: o que veio pelo `sync` entra no índice, senão o download
  // fica no disco sem nunca aparecer na busca.
  const catalog = withPackSkills(discoverSkillCatalog(skillsDir), targetDir);
  writeFileSync(join(skillsDir, '_index.yaml'), renderSkillIndex(catalog), 'utf8');
  const result = validateProjectCatalog(targetDir);
  if (!result.ok) {
    console.error(`Índice gerado, mas o catálogo tem ${result.errors.length} problema(s):`);
    printErrors(result);
    return { success: false, result };
  }
  avisarDescartadas(catalog);
  const sincronizadas = catalog.packEntries?.length || 0;
  console.log(
    `Indexadas ${catalog.entries.length} skills`
    + (sincronizadas ? ` (${sincronizadas} sincronizadas da curadoria)` : '')
    + '; catálogo íntegro e fresco.',
  );
  return { success: true, result };
}

export function checkSkillsProject(targetDir) {
  const skillsDir = join(targetDir, 'skills');
  if (!existsSync(skillsDir)) {
    console.error('Diretório skills/ ausente. Execute `npx criminalsquad init` primeiro.');
    return { success: false };
  }
  const result = validateProjectCatalog(targetDir);
  if (!result.ok) {
    console.error(`Catálogo de skills inválido (${result.errors.length} problema(s)):`);
    printErrors(result);
    return { success: false, result };
  }
  // `result.catalog` é só o embarcado (o gate estrutural não julga pacote); a
  // contagem exibida soma as sincronizadas para não subnotificar o que existe.
  const comPacks = withPackSkills(result.catalog, targetDir);
  avisarDescartadas(comPacks);
  const sincronizadas = comPacks.packEntries?.length || 0;
  console.log(
    `Catálogo íntegro: ${result.catalog.entries.length} skills embarcadas`
    + (sincronizadas ? ` + ${sincronizadas} sincronizadas` : '')
    + '; índice fresco; grafo válido.',
  );
  return { success: true, result };
}

export function auditSkillsProject(targetDir) {
  const skillsDir = join(targetDir, 'skills');
  if (!existsSync(skillsDir)) {
    console.error('Diretório skills/ ausente. Execute `npx criminalsquad init` primeiro.');
    return { success: false };
  }
  const report = auditSkillCatalogQuality(
    withPackSkills(discoverSkillCatalog(skillsDir), targetDir),
    { profilesPath: projectProfilesPath(targetDir) },
  );
  writeFileSync(join(skillsDir, '_quality-report.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  console.log(
    `Auditoria concluída: ${report.summary.skills} skills; `
    + `${report.summary.structural_pass} sem hard fail estrutural; `
    + `${report.summary.high_performance_eligible} elegíveis por evidência. `
    + `Maturidade: ${report.summary.by_status.contracted || 0} contracted, `
    + `${report.summary.by_status.verified || 0} verified, `
    + `${report.summary.by_status.certified || 0} certified, `
    + `${report.summary.by_status.quarantined || 0} quarantined; `
    + `${report.summary.behavioral_evidence_skills || 0} com forward-run persistido e `
    + `${report.summary.promotion_evidence_skills || 0} com evidência de promoção reconhecida.`,
  );

  // O Build chama este comando como item BLOCKING e confia no código de saída.
  // Devolver sucesso incondicional fazia o gate ser encenação: uma skill com
  // hard fail estrutural (contrato v5 ausente, eval não vinculada, cálculo sem
  // motor determinístico) passava direto no exato momento em que o Arquiteto
  // cria skill nova. Só reprovamos o que está EM PRODUÇÃO — `preview`,
  // `deprecated` e `quarantined` são estados de trabalho, não entregas.
  const emProducao = report.results.filter(
    (r) => ['active', 'pilot'].includes(r.lifecycle) && r.hardFails.length > 0,
  );
  if (emProducao.length > 0) {
    console.error(`\n${emProducao.length} skill(s) de produção com hard fail estrutural:`);
    for (const r of emProducao) {
      console.error(`  - ${r.id} [${r.lifecycle}]: ${r.hardFails.join('; ')}`);
    }
    console.error('\nCorrija o SKILL.md (ou marque como `preview` enquanto trabalha) e rode de novo.');
    return { success: false, report };
  }
  return { success: true, report };
}

// Applies the full v5 operational contract to the project's skills/ library and
// reindexes. Structural only: it never grants maturity — `verified`/`certified`
// come from behavioural evidence and are judged by `audit-skills`.
// This is the cwd-aware twin of the package-root dev pipeline
// (migrate-skills-v5 + generate-skill-openai-metadata + indexar-skills). The
// Architect runs it after authoring a new skill so the skill ships with the
// contract body block, its references/high-performance-contract.md, its
// agents/openai.yaml, a registered eval case, and a fresh index — reproducibly,
// without the dev build tooling.
export function contractSkillsProject(targetDir, { force = false } = {}) {
  const skillsDir = join(targetDir, 'skills');
  if (!existsSync(skillsDir)) {
    console.error('Diretório skills/ ausente. Execute `npx criminalsquad init` primeiro.');
    return { success: false };
  }
  const profilesPath = projectProfilesPath(targetDir);
  const contract = contractSkillCatalog({ root: targetDir, force, profilesPath });
  const ui = generateSkillOpenAiMetadata({ root: targetDir, profilesPath });
  const catalog = withPackSkills(discoverSkillCatalog(skillsDir), targetDir);
  writeFileSync(join(skillsDir, '_index.yaml'), renderSkillIndex(catalog), 'utf8');
  const result = validateProjectCatalog(targetDir);
  console.log(
    `Contrato operacional v5 (estrutural) aplicado: ${contract.catalog_skills} skills; `
    + `${contract.changed} contratada(s)/atualizada(s), ${contract.skipped} já conformes; `
    + `${contract.generated_contract_evals} evals de contrato; `
    + `${ui.generated} agents/openai.yaml; índice regenerado. `
    + 'Contrato cumprido não é desempenho comprovado.',
  );
  if (!result.ok) {
    console.error(`Catálogo com ${result.errors.length} problema(s) após o contrato:`);
    printErrors(result);
    return { success: false, result, contract, ui };
  }
  console.log('Catálogo íntegro e fresco. Rode `npx criminalsquad audit-skills` para a maturidade.');
  return { success: true, result, contract, ui };
}
