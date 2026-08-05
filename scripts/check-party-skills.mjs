#!/usr/bin/env node
// A coluna `skills` do squad-party.csv tem de espelhar o `skills:` do frontmatter
// do agente. Quando as duas divergem, o runner fica com duas fontes para a mesma
// resposta — e a Initialization monta a união de skills a partir de uma delas.
//
// Medido em 28/07/2026, no smoke-run limpo do `negociacao-penal`: o CSV do redator
// listava 4 skills e o frontmatter dele, 5; o do revisor estava VAZIO enquanto o
// frontmatter declarava uma. Um executor que leia o CSV carrega menos do que o
// agente precisa; um que leia o frontmatter e depois cheque contra o manifesto do
// CSV encontra skill "não declarada" e para. Divergência silenciosa vira deadlock.
//
// A autoridade é o FRONTMATTER do agente — é ele que o runner injeta. O CSV é
// resumo legível para humano, e resumo que mente é pior que resumo ausente.
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
// Nativas do modelo: aparecem no CSV para auditoria e não têm SKILL.md.
const NATIVAS = new Set(['web_search', 'web_fetch']);

// Parser de CSV com aspas — os campos de descrição contêm vírgulas.
export function parseLinhaCsv(linha) {
  const campos = [];
  let atual = '';
  let dentroDeAspas = false;
  for (let i = 0; i < linha.length; i += 1) {
    const c = linha[i];
    if (c === '"') {
      if (dentroDeAspas && linha[i + 1] === '"') { atual += '"'; i += 1; } else dentroDeAspas = !dentroDeAspas;
    } else if (c === ',' && !dentroDeAspas) { campos.push(atual); atual = ''; } else atual += c;
  }
  campos.push(atual);
  return campos;
}

// Só põe aspas quando o campo precisa — manter o CSV com o mesmo aspecto de antes
// evita diff de ruído e mantém o arquivo legível para quem o abre no editor.
export function serializarCampo(valor) {
  const v = String(valor ?? '');
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

function skillsDoFrontmatter(texto) {
  const fm = /^---\n([\s\S]*?)\n---/.exec(texto);
  if (!fm) return [];
  const linhas = fm[1].split('\n');
  const i = linhas.findIndex((l) => /^skills:/.test(l));
  if (i < 0) return [];
  const inline = /^skills:\s*(.+)$/.exec(linhas[i]);
  if (inline && inline[1].trim()) {
    return inline[1].replace(/[[\]]/g, '').split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  }
  const lista = [];
  for (const l of linhas.slice(i + 1)) {
    if (!/^\s+-\s/.test(l)) break;
    lista.push(l.replace(/^\s+-\s*/, '').trim().replace(/^["']|["']$/g, ''));
  }
  return lista;
}

export function checarPartySkills({ raiz = RAIZ, corrigir = false } = {}) {
  const divergencias = [];
  const orfas = [];
  const corrigidos = [];
  let agentes = 0;

  for (const base of ['squads', 'templates/squads']) {
    const dir = join(raiz, base);
    if (!existsSync(dir)) continue;
    for (const squad of readdirSync(dir)) {
      const csv = join(dir, squad, 'squad-party.csv');
      if (!existsSync(csv) || !statSync(csv).isFile()) continue;
      const linhas = readFileSync(csv, 'utf8').trim().split('\n');
      const cabecalho = parseLinhaCsv(linhas[0]);
      const iSkills = cabecalho.indexOf('skills');
      // A coluna do caminho chama-se `path` neste produto; `file` é o nome antigo.
      const iFile = cabecalho.indexOf('path') >= 0 ? cabecalho.indexOf('path') : cabecalho.indexOf('file');
      if (iSkills < 0 || iFile < 0) continue;

      const saida = [linhas[0]];
      let mudou = false;

      for (const linha of linhas.slice(1)) {
        if (!linha.trim()) { saida.push(linha); continue; }
        const campos = parseLinhaCsv(linha);
        const id = campos[0];
        const arquivo = join(dir, squad, (campos[iFile] || '').replace(/^\.\//, ''));
        if (!existsSync(arquivo) || !statSync(arquivo).isFile()) { saida.push(linha); continue; }
        agentes += 1;

        const doAgente = skillsDoFrontmatter(readFileSync(arquivo, 'utf8'));
        const doCsv = (campos[iSkills] || '').split(',').map((s) => s.trim()).filter(Boolean);
        const chave = (lista) => [...new Set(lista)].sort().join(', ');
        // Reescrever só a LINHA divergente. Re-serializar as demais mudaria o
        // aspas/escape de campos que estavam certos — diff sujo e risco à toa.
        let estaLinhaMudou = false;
        if (chave(doAgente) !== chave(doCsv)) {
          divergencias.push({
            local: `${relative(raiz, csv)} → ${id}`,
            csv: chave(doCsv) || '(vazio)',
            agente: chave(doAgente) || '(vazio)',
          });
          if (corrigir) {
            // O frontmatter manda. Preserva a ORDEM declarada no agente — ela
            // costuma refletir prioridade de carregamento, e reordenar seria
            // trocar um dado por outro sem motivo.
            campos[iSkills] = [...new Set(doAgente)].join(',');
            corrigidos.push(`${relative(raiz, csv)} → ${id}`);
            estaLinhaMudou = true;
            mudou = true;
          }
        }
        saida.push(estaLinhaMudou ? campos.map(serializarCampo).join(',') : linha);

        // Skill declarada que não existe trava o gate fail-closed na execução.
        // Fica FORA do ramo de correção: alinhar o CSV não faz a skill existir.
        for (const s of doAgente) {
          if (NATIVAS.has(s)) continue;
          if (!existsSync(join(raiz, 'skills', s, 'SKILL.md'))) {
            orfas.push(`${relative(raiz, arquivo)} declara \`${s}\`, que não existe em skills/`);
          }
        }
      }

      if (corrigir && mudou) writeFileSync(csv, `${saida.join('\n')}\n`);
    }
  }
  return {
    ok: divergencias.length === 0 && orfas.length === 0, divergencias, orfas, corrigidos, agentes,
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const corrigir = process.argv.includes('--fix');
  const r = checarPartySkills({ corrigir });
  for (const d of r.divergencias) {
    console.error(`${corrigir ? 'CORRIGIDO' : 'ERRO'}: ${d.local}\n        csv:    ${d.csv}\n        agente: ${d.agente}`);
  }
  for (const o of r.orfas) console.error(`ERRO: ${o}`);
  console.log(
    `\nParty × frontmatter: ${r.agentes} agentes; ${r.divergencias.length} divergência(s)`
    + `${corrigir ? ` (${r.corrigidos.length} alinhada(s) ao frontmatter)` : ''}; ${r.orfas.length} skill(s) órfã(s).`,
  );
  // Com --fix as divergências acabaram de ser resolvidas; só as órfãs travam,
  // porque alinhar o CSV não faz uma skill inexistente passar a existir.
  if (corrigir) { if (r.orfas.length) process.exit(1); }
  else if (!r.ok) {
    console.error(
      '\nA autoridade é o frontmatter do agente — é ele que o runner injeta. Alinhe a coluna\n'
      + '`skills` do squad-party.csv ao frontmatter (ou o contrário, se o CSV é que está certo).\n'
      + 'Duas fontes para a mesma resposta é como um deadlock de carregamento nasce.',
    );
    process.exit(1);
  }
}
