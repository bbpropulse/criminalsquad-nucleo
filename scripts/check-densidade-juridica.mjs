#!/usr/bin/env node
// Gate de DENSIDADE JURÍDICA — o que faltava para "skill oca" ser um defeito
// mecânico e não uma impressão.
//
// O `audit:skills` aprova 522/522 porque só confere estrutura: frontmatter,
// marcador de contrato, eval vinculada. Nenhum desses campos olha o conteúdo.
// Foi por essa fresta que uma onda inteira (73 skills da família `ep-`) nasceu
// com 18 KB de texto sobre COMO trabalhar e quase nenhum direito dentro.
//
// Medido em 02/08/2026 sobre as 522 skills:
//   - mediana das skills jurídicas: 3,99 âncoras/KB
//   - mediana da família `ep-`:      0,15 âncoras/KB  (27x abaixo)
// Confirmado por leitura cega: 10/10 amostradas julgadas OCA por criminalista
// independente (zero dispositivos concretos), contra 5/5 controles densos
// julgados SUBSTANTIVA (13 a 19 dispositivos). 15 refutadores adversariais
// tentaram derrubar os vereditos de OCA; nenhum conseguiu.
//
// Uso:
//   node scripts/check-densidade-juridica.mjs            → relatório (não bloqueia)
//   node scripts/check-densidade-juridica.mjs --check    → sai 1 se piorar
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

// Uma "âncora" é um dispositivo legal concreto. Siglas ficam CASE-SENSITIVE de
// propósito: com a flag `i`, `\bCP\b` casaria "cp" em qualquer palavra.
export const ANCORA = new RegExp(
  '(?:arts?\\.|artigos?)\\s*\\d+'
  + '|§\\s*\\d+'
  + '|[Ll]ei\\s+n?[º°]?\\s*[\\d.]+\\/\\d{2,4}'
  + '|S[úu]mula\\s+(?:Vinculante\\s+)?\\d+'
  + '|\\bCPP\\b|\\bCPM\\b|\\bLEP\\b|\\bCPC\\b|\\bCDC\\b|\\bCLT\\b|\\bECA\\b|\\bCF\\b|\\bCP\\b',
  'g',
);

// Piso: metade da MODA prática do catálogo saudável, não um número escolhido a
// dedo. A 1,0/KB o gate separa a onda oca (0,15) das famílias reais (2,5 a 6,4)
// com folga dos dois lados.
export const PISO_DENSIDADE = 1.0;
// Abaixo disso o arquivo é pequeno demais para a densidade significar algo.
export const TAMANHO_MINIMO_KB = 3;

// ISENÇÕES — cada uma precisa de razão escrita. Uma isenção sem justificativa é
// o começo do fim de qualquer gate: vira o lugar onde se esconde o defeito.
export const ISENTAS = {
  'revisao-gramatical-ortografica-juridica': 'o objeto da skill é LÍNGUA (gramática, ortografia, concordância), não direito material — citar artigo não é o que ela ensina',
  'redacao-persuasiva-criminal': 'o objeto é RETÓRICA e estrutura argumentativa; é a fonte única da escrita forense, não da doutrina',
  'mail-merge-pecas': 'ferramenta de geração em lote de documentos — não veicula tese nem fundamento',
  'dossie-caso': 'ferramenta de organização do conhecimento do caso — indexa material jurídico, não o ensina',
};

// Perfis cujo objeto declarado é ferramenta/integração, não doutrina.
const PERFIS_NAO_DOUTRINARIOS = /external-action|client-operations|system-orchestration/;

function frontmatter(texto) {
  const m = texto.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? m[1] : '';
}
function campo(fm, nome) {
  const m = fm.match(new RegExp(`^\\s*${nome}:\\s*"?([^"\\n]+)"?`, 'm'));
  return m ? m[1].trim() : '';
}

export function medirCatalogo(dirSkills = join(RAIZ, 'skills')) {
  const ids = readdirSync(dirSkills)
    .filter((n) => !n.startsWith('_') && existsSync(join(dirSkills, n, 'SKILL.md')));

  const medidas = [];
  for (const id of ids) {
    const texto = readFileSync(join(dirSkills, id, 'SKILL.md'), 'utf8');
    const fm = frontmatter(texto);
    const perfil = campo(fm, 'quality_profile');
    const ciclo = campo(fm, 'lifecycle');
    const kb = texto.length / 1000;
    const ancoras = (texto.match(ANCORA) || []).length;
    const densidade = +(ancoras / kb).toFixed(2);

    // Fora do escopo: quarentena (esvaziada de propósito), perfil de ferramenta,
    // arquivo curto demais para a razão significar algo, e as isenções escritas.
    const foraDeEscopo = ciclo === 'quarantined'
      || PERFIS_NAO_DOUTRINARIOS.test(perfil)
      || !/legal|juridic/i.test(perfil)
      || kb < TAMANHO_MINIMO_KB
      || Object.hasOwn(ISENTAS, id);

    medidas.push({ id, kb: +kb.toFixed(1), ancoras, densidade, perfil, ciclo, foraDeEscopo });
  }
  const noEscopo = medidas.filter((m) => !m.foraDeEscopo);
  return {
    medidas,
    noEscopo,
    reprovadas: noEscopo.filter((m) => m.densidade < PISO_DENSIDADE).sort((a, b) => a.densidade - b.densidade),
    mediana: noEscopo.map((m) => m.densidade).sort((a, b) => a - b)[Math.floor(noEscopo.length / 2)],
  };
}

function main() {
  const r = medirCatalogo();
  const bloqueante = process.argv.includes('--check');

  console.log(`Densidade jurídica: ${r.noEscopo.length} skills no escopo; mediana ${r.mediana} âncoras/KB; piso ${PISO_DENSIDADE}.`);
  console.log(`${r.reprovadas.length} abaixo do piso.`);

  if (!bloqueante) {
    for (const m of r.reprovadas) {
      console.log(`  ${m.densidade.toFixed(2).padStart(5)}/KB  ${m.id}  (${m.ancoras} âncoras em ${m.kb}KB)`);
    }
    return;
  }

  // Em modo --check o número é uma CATRACA: ver tests/densidade-juridica.test.js.
  // Bloquear hoje seria reprovar o catálogo inteiro e o gate seria desligado no
  // mesmo dia; a catraca deixa o débito visível e impede que ele cresça.
  if (r.reprovadas.length > 0) {
    console.error(`\n${r.reprovadas.length} skills abaixo do piso de ${PISO_DENSIDADE} âncora/KB.`);
    console.error('Uma skill jurídica que não cita dispositivo não ensina direito — ela descreve processo de trabalho.');
    console.error('Compare com `execucao-defesa-regressao-regime` (123 âncoras): os títulos são o direito, não o protocolo.');
    process.exitCode = 1;
  }
}

if (process.argv[1] && process.argv[1].endsWith('check-densidade-juridica.mjs')) main();
