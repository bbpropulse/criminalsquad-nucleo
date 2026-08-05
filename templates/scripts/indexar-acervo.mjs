#!/usr/bin/env node
// Indexador do acervo do CriminalSquad.
// Varre acervo/ e (re)gera acervo/_index.yaml — o catálogo que os agentes de
// pesquisa consultam ANTES da web (best-practice `pesquisa-jurisprudencial`).
// Uso: npm run indexar-acervo [-- <raiz-do-projeto>]
// Sem argumento, a raiz é a do próprio pacote/projeto onde o script vive.
// A pasta acervo/casos/ é IGNORADA (dados sensíveis de cliente — LGPD/sigilo).
// O material sincronizado (_criminalsquad/_packs/<pack>/acervo/) também entra no
// índice, marcado com fonte_pack — senão o download ficaria invisível à busca.

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative, resolve, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootArg = process.argv.slice(2).find((arg) => !arg.startsWith('--'));
const PROJECT_ROOT = rootArg ? resolve(rootArg) : join(__dirname, '..');
const ROOT = join(PROJECT_ROOT, 'acervo');
const VAULT_MAP = join(PROJECT_ROOT, '_criminalsquad', '_memory', 'vault-map.yaml');
const PACKS_ROOT = join(PROJECT_ROOT, '_criminalsquad', '_packs');

// Leitura do cache do sync, inline de propósito: este script roda também dentro
// do projeto do usuário, onde src/ não existe (é o pacote npm, não a instalação).
// O gêmeo em src/packs-overlay.js serve o indexador de skills.
// A fonte de verdade é o manifesto de instalação, escrito só depois de a
// assinatura conferir. Diretório solto em _packs/ (largado à mão, restaurado de
// backup) NÃO é curadoria e não entra como VERIFIED_OFFICIAL — fail-closed.
const PACK_ID_SEGURO = /^[a-z0-9][a-z0-9._-]*$/i;
function pacotesSincronizados() {
  let instalados = {};
  try {
    instalados = JSON.parse(readFileSync(join(PACKS_ROOT, 'manifest.json'), 'utf8')).packs || {};
  } catch {
    return []; // nada sincronizado ainda
  }
  return Object.keys(instalados)
    .filter((packId) => PACK_ID_SEGURO.test(packId) && !packId.includes('..'))
    .sort((a, b) => a.localeCompare(b))
    .map((packId) => ({
      dir: join(PACKS_ROOT, packId),
      fontePack: `${packId}@${instalados[packId]?.versao || 'desconhecida'}`,
      verificadoEm: instalados[packId]?.verificado_em || null,
    }))
    .filter((pack) => existsSync(pack.dir));
}

const STRICT = process.argv.includes('--strict'); // CI: falha (exit 1) se houver wikilink quebrado

// Sigilo de cliente — nunca indexar. A comparação é EM MINÚSCULAS de propósito:
// macOS e Windows têm filesystem case-insensitive, então `Casos/` e `CASOS/` são
// a mesma pasta para o usuário. Comparar caixa exata deixaria dados sigilosos
// entrarem no índice só porque a pasta foi criada com a inicial maiúscula.
const SKIP_DIRS = new Set(['casos']);
const ehPastaSigilosa = (nome) => SKIP_DIRS.has(String(nome).toLowerCase());
const TIPO_POR_PASTA = {
  jurisprudencia: 'jurisprudencia',
  doutrina: 'doutrina',
  legislacao: 'legislacao',
  teses: 'tese',
  'teses-modelos': 'modelo',
};
const EXT_OK = new Set(['.md', '.pdf', '.txt', '.docx', '.rtf']);
// Formatos binários: se houver um .md irmão (mesmo nome), indexa só o .md legível
// (os agentes leem markdown; o .docx fica como fonte original não indexada).
const PREFER_MD_OVER = new Set(['.docx', '.rtf']);
const CONFIANCA_VALIDA = new Set(['VERIFIED_OFFICIAL', 'DISCOVERY_ONLY', 'QUARANTINED']);

function frontmatterDe(full) {
  if (extname(full).toLowerCase() !== '.md') return {};
  let raw;
  try { raw = readFileSync(full, 'utf8'); } catch { return {}; }
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const value = (key) => {
    const found = match[1].match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    return found ? found[1].trim().replace(/^["']|["']$/g, '') : null;
  };
  return {
    confianca: value('confianca'),
    urlOficial: value('url_oficial'),
    consultadoEm: value('consultado_em'),
    proximaRevalidacao: value('proxima_revalidacao'),
  };
}

// Material sincronizado vem de pacote ASSINADO pela curadoria: na ausência de
// declaração explícita ele entra como VERIFIED_OFFICIAL, não como descoberta.
// Uma declaração explícita continua mandando — inclusive para rebaixar.
function provenienciaDe(full, { padraoConfianca = 'DISCOVERY_ONLY' } = {}) {
  const fm = frontmatterDe(full);
  const declarada = fm.confianca;
  return {
    confianca: CONFIANCA_VALIDA.has(declarada) ? declarada : (declarada ? 'QUARANTINED' : padraoConfianca),
    urlOficial: fm.urlOficial,
    consultadoEm: fm.consultadoEm,
    proximaRevalidacao: fm.proximaRevalidacao,
    classificacaoInvalida: declarada && !CONFIANCA_VALIDA.has(declarada) ? declarada : null,
  };
}

// O tipo vem da primeira pasta relativa à RAIZ DAQUELE acervo (o local ou o do
// pacote), não ao acervo/ do projeto — senão todo material sincronizado cairia
// em 'outro' por causa do `../` do caminho relativo.
function tipoDe(relDaRaiz) {
  return TIPO_POR_PASTA[relDaRaiz.split('/')[0]] || 'outro';
}

function temaDe(full, rel) {
  if (extname(full).toLowerCase() === '.md') {
    try {
      const c = readFileSync(full, 'utf8');
      const h = c.match(/^#\s+(.+)$/m);
      if (h) return h[1].trim().replace(/\s+/g, ' ').slice(0, 140);
    } catch { /* ignore */ }
  }
  return basename(rel).replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
}

function tagsDe(rel) {
  const stop = new Set(['crime', 'transversal', 'as', 'de', 'da', 'do', 'e', 'em', 'os', 'principais']);
  return [...new Set(
    basename(rel).replace(/\.[^.]+$/, '').toLowerCase().split(/[-_\s]+/)
      .filter((w) => w.length > 2 && !stop.has(w)),
  )].slice(0, 8);
}

// Extrai os alvos de wikilinks [[Nota]], [[Nota|alias]], [[Nota#trecho]],
// [[pasta/Nota]] de um arquivo .md. O lookbehind (?<!!) ignora embeds de mídia
// ![[arquivo.png]], que apontam para anexos e não para notas.
const WIKILINK_RE = /(?<!!)\[\[([^\]]+)\]\]/g;
function wikilinksDe(full) {
  let raw;
  try { raw = readFileSync(full, 'utf8'); } catch { return []; }
  const out = [];
  for (const m of raw.matchAll(WIKILINK_RE)) {
    const target = m[1].split('|')[0].split('#')[0].trim();
    if (target) out.push(target);
  }
  return out;
}

// True se há um vault Obsidian configurado (vault-map.yaml com vault_root não-vazio).
// Quando há, wikilinks não encontrados no acervo podem viver no vault (privado),
// então não são tratados como quebrados — apenas informados.
function vaultConfigured() {
  try {
    const m = readFileSync(VAULT_MAP, 'utf8').match(/^\s*vault_root:\s*["']?([^"'\n]*)/m);
    return !!(m && m[1].trim());
  } catch {
    return false;
  }
}

// `origem` define de onde o material vem: { base } é a raiz daquele acervo (usada
// para classificar o tipo) e, quando sincronizado, `fontePack`/`verificadoEm`/
// `padraoConfianca`. O campo `path` continua sempre relativo a acervo/, então
// material de pacote aparece como `../_criminalsquad/_packs/…` — um caminho só,
// resolvível a partir da mesma base que todo o resto do índice.
function walk(dir, acc, origem) {
  const entries = readdirSync(dir, { withFileTypes: true });
  // Nomes-base que já têm versão .md neste diretório (para preferir o legível).
  const temMd = new Set(
    entries
      .filter((e) => e.isFile() && extname(e.name).toLowerCase() === '.md')
      .map((e) => e.name.slice(0, -3)),
  );
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = join(dir, e.name);
    const rel = relative(ROOT, full).split(/[/\\]/).join('/');
    const relDaRaiz = relative(origem.base, full).split(/[/\\]/).join('/');
    if (e.isDirectory()) {
      // casos/ é sigiloso em qualquer origem — inclusive dentro de um pacote.
      if (!ehPastaSigilosa(e.name)) walk(full, acc, origem);
      continue;
    }
    const ext = extname(e.name).toLowerCase();
    if (!EXT_OK.has(ext) || e.name === '_index.yaml' || e.name === 'README.md') continue;
    // .docx/.rtf com .md irmão → pula o binário, indexa só o .md.
    if (PREFER_MD_OVER.has(ext) && temMd.has(e.name.slice(0, -ext.length))) continue;
    acc.push({
      path: rel,
      tipo: tipoDe(relDaRaiz),
      tema: temaDe(full, relDaRaiz),
      tags: tagsDe(relDaRaiz),
      links: ext === '.md' ? wikilinksDe(full) : [],
      ...provenienciaDe(full, { padraoConfianca: origem.padraoConfianca }),
      fontePack: origem.fontePack || null,
      verificadoEm: origem.verificadoEm || null,
    });
  }
}

const entries = [];
// acervo/ pode não existir (aluno que apagou a pasta; sync que instalou só
// pacote sem semear o acervo local). Não é motivo para crashar — indexamos o
// que houver de pacote e recriamos a pasta na hora de gravar o índice.
if (existsSync(ROOT)) walk(ROOT, entries, { base: ROOT, padraoConfianca: 'DISCOVERY_ONLY' });

// Acervo sincronizado: um pacote por vez, na ordem estável de pack_id.
let sincronizados = 0;
for (const pack of pacotesSincronizados()) {
  const packAcervo = join(pack.dir, 'acervo');
  if (!existsSync(packAcervo)) continue;
  const antes = entries.length;
  walk(packAcervo, entries, {
    base: packAcervo,
    padraoConfianca: 'VERIFIED_OFFICIAL',
    fontePack: pack.fontePack,
    verificadoEm: pack.verificadoEm,
  });
  sincronizados += entries.length - antes;
}

entries.sort((a, b) => a.path.localeCompare(b.path));

let y = '# Índice do Acervo — GERADO por `npm run indexar-acervo` (não editar à mão; será sobrescrito).\n';
y += '# Os agentes de pesquisa consultam este índice ANTES da web. Pasta casos/ é omitida (sigilo).\n';
y += '# Confiança: VERIFIED_OFFICIAL exige declaração explícita; ausência = DISCOVERY_ONLY.\n';
y += '# Entrada com `fonte_pack` veio do sync da curadoria (pacote assinado) e entra\n';
y += '# como VERIFIED_OFFICIAL por padrão; seu `path` aponta para fora de acervo/.\n';
y += `# Última indexação: ${entries.length} arquivos`;
y += sincronizados ? ` (${sincronizados} sincronizados).\n\n` : '.\n\n';
y += 'acervo:\n';
for (const it of entries) {
  y += `  - path: ${it.path}\n`;
  y += `    tipo: ${it.tipo}\n`;
  y += `    tema: ${JSON.stringify(it.tema)}\n`;
  y += `    tags: [${it.tags.join(', ')}]\n`;
  y += `    confianca: ${it.confianca}\n`;
  if (it.urlOficial) y += `    url_oficial: ${JSON.stringify(it.urlOficial)}\n`;
  if (it.consultadoEm) y += `    consultado_em: ${JSON.stringify(it.consultadoEm)}\n`;
  if (it.proximaRevalidacao) y += `    proxima_revalidacao: ${JSON.stringify(it.proximaRevalidacao)}\n`;
  if (it.fontePack) y += `    fonte_pack: ${JSON.stringify(it.fontePack)}\n`;
  if (it.verificadoEm) y += `    verificado_em: ${JSON.stringify(it.verificadoEm)}\n`;
}
mkdirSync(ROOT, { recursive: true }); // garante acervo/ mesmo se o aluno a apagou
writeFileSync(join(ROOT, '_index.yaml'), y, 'utf8');
console.log(
  `Indexados ${entries.length} arquivos em acervo/_index.yaml`
  + (sincronizados ? ` (${sincronizados} sincronizados da curadoria)` : ''),
);
// Classificação inválida no acervo LOCAL é erro do usuário. O índice JÁ foi
// escrito acima (o conteúdo aparece na busca); sinalizamos com o código de saída
// DEDICADO 2 — "índice ok, mas há classificação a corrigir". Quem chama pelo sync
// distingue isso de uma falha real (exit 1 por I/O, que não escreve o índice).
// Em material sincronizado é defeito da curadoria: avisa, mas não altera o código.
const classificacoesInvalidas = entries.filter((it) => it.classificacaoInvalida);
if (classificacoesInvalidas.length) {
  console.error('Classificações de confiança inválidas foram colocadas em QUARANTINED:');
  for (const it of classificacoesInvalidas) {
    const origem = it.fontePack ? ` [sincronizado de ${it.fontePack}]` : '';
    console.error(`  - ${it.path}: ${it.classificacaoInvalida}${origem}`);
  }
  if (classificacoesInvalidas.some((it) => !it.fontePack)) process.exitCode = 2;
}

// --- Validação de wikilinks (saúde do grafo de conhecimento) ---
// Confere cada [[link]] do acervo contra as notas existentes. Links não
// resolvidos são "quebrados" — exceto quando há vault Obsidian configurado,
// caso em que podem viver no vault (privado, não indexado).
// Normaliza p/ comparação: minúsculas + remove SÓ extensões conhecidas (não um
// ponto qualquer — nomes jurídicos têm pontos: "Lei 11.343", "HC 126.292").
const norm = (s) => {
  const lower = s.toLowerCase();
  const ext = extname(lower);
  return EXT_OK.has(ext) ? lower.slice(0, -ext.length) : lower;
};
const known = new Set();
for (const it of entries) {
  known.add(norm(basename(it.path))); // por nome de nota
  known.add(norm(it.path)); // por caminho relativo
}
const broken = [];
let totalLinks = 0;
for (const it of entries) {
  for (const link of it.links || []) {
    totalLinks++;
    const byName = norm(link.split(/[/\\]/).pop());
    const byPath = norm(link);
    if (!known.has(byName) && !known.has(byPath)) broken.push({ from: it.path, link });
  }
}

if (totalLinks > 0) {
  if (broken.length === 0) {
    console.log(`Wikilinks: ${totalLinks} verificados, 0 quebrados.`);
  } else if (vaultConfigured()) {
    console.log(`Wikilinks: ${totalLinks} verificados, ${broken.length} fora do acervo (vault configurado — podem estar no vault):`);
    for (const b of broken) console.log(`  - ${b.from} → [[${b.link}]]`);
  } else {
    console.log(`Wikilinks: ${totalLinks} verificados, ${broken.length} QUEBRADOS:`);
    for (const b of broken) console.log(`  - ${b.from} → [[${b.link}]]`);
    if (STRICT) process.exitCode = 1;
  }
}
