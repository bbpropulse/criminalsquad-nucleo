import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Ranked search over the local acervo (acervo/_index.yaml), symmetric to
// src/skill-search.js. Lets pesquisa-jurisprudencial consult the acervo BEFORE
// the web without reading the whole index into the prompt. The tiny text
// helpers below mirror skill-search.js on purpose: the skill-routing path is
// critical and kept untouched, so a little duplication buys full isolation.

const DEFAULT_LIMIT = 8;
const MAX_LIMIT = 20;
const STOPWORDS = new Set([
  'a', 'ao', 'aos', 'as', 'com', 'como', 'da', 'das', 'de', 'do', 'dos', 'e',
  'em', 'na', 'nas', 'no', 'nos', 'o', 'os', 'ou', 'para', 'por', 'que', 'um',
  'uma', 'the', 'to', 'of', 'and', 'for', 'with',
]);

function normalize(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function queryTokens(query) {
  return [...new Set(normalize(query).split(' ')
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token)))];
}

function boundedLimit(value) {
  const parsed = Number.parseInt(String(value || DEFAULT_LIMIT), 10);
  if (!Number.isFinite(parsed)) return DEFAULT_LIMIT;
  return Math.max(1, Math.min(MAX_LIMIT, parsed));
}

function includesToken(text, token) {
  return text.split(' ').some((word) => word === token || word.startsWith(token));
}

// Quantos trechos localizados devolver por arquivo, e o tamanho de cada um. A
// shortlist vai para dentro do prompt: trecho é para dizer ONDE olhar, não para
// despejar o acervo no contexto.
const MAX_TRECHOS = 2;
const TRECHO_CHARS = 170;

// Varredura de CONTEÚDO — o que faltava.
//
// O índice deriva `tema` e `tags` do NOME do arquivo (`tema: "STJ 2020"`), então
// nenhum termo de assunto casa com metadado. Medido em 28/07/2026: a busca por
// "reconhecimento fotográfico CPP 226 nulidade" devolvia ZERO com o precedente
// no acervo em inteiro teor. Como o produto manda consultar o acervo antes da
// web e proíbe ler o índice inteiro, quem obedecia concluía "não há nada".
//
// O sinal não é o termo isolado — "reconhecimento" aparece em todo lugar. É a
// CO-OCORRÊNCIA dos termos no mesmo bloco (seção sob um heading markdown).
function escanearConteudo(caminhoCompleto, tokens) {
  let bruto;
  try { bruto = readFileSync(caminhoCompleto, 'utf8'); } catch { return { score: 0, trechos: [] }; }

  const linhas = bruto.split('\n');
  const blocos = [];
  let atual = { inicio: 1, linhas: [] };
  linhas.forEach((linha, i) => {
    if (/^#{1,6}\s/.test(linha) && atual.linhas.length) {
      blocos.push(atual);
      atual = { inicio: i + 1, linhas: [] };
    }
    atual.linhas.push({ n: i + 1, texto: linha });
  });
  if (atual.linhas.length) blocos.push(atual);

  const achados = [];
  for (const bloco of blocos) {
    const normalizado = normalize(bloco.linhas.map((l) => l.texto).join(' '));
    const cobertos = tokens.filter((t) => includesToken(normalizado, t));
    // Um termo só não diz nada num acervo de 8 MB. Exigir 2+ termos no MESMO
    // bloco é o que separa sinal de ruído — salvo query de termo único.
    const minimo = tokens.length === 1 ? 1 : 2;
    if (cobertos.length < minimo) continue;

    // A linha mais densa do bloco é a que serve de âncora para o advogado.
    let melhor = bloco.linhas[0];
    let melhorPeso = -1;
    for (const l of bloco.linhas) {
      if (l.texto.trim().length < 20) continue;
      const norm = normalize(l.texto);
      const peso = tokens.filter((t) => includesToken(norm, t)).length;
      if (peso > melhorPeso) { melhorPeso = peso; melhor = l; }
    }
    achados.push({
      cobertura: cobertos.length / tokens.length,
      cobertos: cobertos.length,
      linha: melhor.n,
      texto: melhor.texto.trim().slice(0, TRECHO_CHARS),
    });
  }
  if (!achados.length) return { score: 0, trechos: [] };

  achados.sort((a, b) => b.cobertos - a.cobertos || a.linha - b.linha);
  // Teto abaixo do `tema-exato` (160) de propósito: casar por conteúdo é um
  // acerto legítimo, mas nunca deve passar à frente de um tema pedido pelo nome.
  const score = Math.round(70 * achados[0].cobertura) + Math.min(achados.length, 5) * 4;
  return {
    score,
    trechos: achados.slice(0, MAX_TRECHOS).map(({ linha, texto }) => ({ linha, texto })),
  };
}

// Parses the generated acervo/_index.yaml. The file is machine-emitted by
// scripts/indexar-acervo.js with a fixed, regular shape, so a line-based reader
// is robust and avoids adding a YAML dependency (the repo has none).
export function parseAcervoIndex(indexPath) {
  if (!existsSync(indexPath)) return null;
  const text = readFileSync(indexPath, 'utf8');
  const entries = [];
  let current = null;
  for (const raw of text.split('\n')) {
    const line = raw.replace(/\r$/, '');
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || trimmed === 'acervo:') continue;
    const pathMatch = line.match(/^\s*-\s*path:\s*(.+)$/);
    if (pathMatch) {
      current = {
        path: pathMatch[1].trim(),
        tipo: '',
        tema: '',
        tags: [],
        confianca: 'DISCOVERY_ONLY',
        fontePack: null,
      };
      entries.push(current);
      continue;
    }
    if (!current) continue;
    const tipoMatch = line.match(/^\s*tipo:\s*(.+)$/);
    if (tipoMatch) { current.tipo = tipoMatch[1].trim(); continue; }
    const temaMatch = line.match(/^\s*tema:\s*(.+)$/);
    if (temaMatch) {
      const value = temaMatch[1].trim();
      try { current.tema = JSON.parse(value); } catch { current.tema = value.replace(/^"|"$/g, ''); }
      continue;
    }
    const tagsMatch = line.match(/^\s*tags:\s*\[(.*)\]\s*$/);
    if (tagsMatch) {
      current.tags = tagsMatch[1].split(',').map((tag) => tag.trim()).filter(Boolean);
      continue;
    }
    const confMatch = line.match(/^\s*confianca:\s*(.+)$/);
    if (confMatch) { current.confianca = confMatch[1].trim(); continue; }
    const packMatch = line.match(/^\s*fonte_pack:\s*(.+)$/);
    if (packMatch) {
      const value = packMatch[1].trim();
      try { current.fontePack = JSON.parse(value); } catch { current.fontePack = value.replace(/^"|"$/g, ''); }
      continue;
    }
  }
  return entries;
}

function scoreEntry(entry, phrase, tokens) {
  const tema = normalize(entry.tema);
  const tipo = normalize(entry.tipo);
  const tags = (entry.tags || []).map(normalize);
  const path = normalize(entry.path);
  const reasons = new Set();
  let score = 0;

  if (phrase && tema === phrase) {
    score += 160;
    reasons.add('tema-exato');
  } else if (phrase && tema && tema.includes(phrase)) {
    score += 80;
    reasons.add('tema-frase');
  }

  let covered = 0;
  for (const token of tokens) {
    let tokenCovered = false;
    if (includesToken(tema, token)) { score += 24; tokenCovered = true; reasons.add('tema'); }
    if (tags.some((tag) => includesToken(tag, token))) { score += 20; tokenCovered = true; reasons.add('tag'); }
    if (includesToken(tipo, token)) { score += 10; tokenCovered = true; reasons.add('tipo'); }
    if (includesToken(path, token)) { score += 6; tokenCovered = true; reasons.add('caminho'); }
    if (tokenCovered) covered++;
  }
  if (tokens.length && covered === tokens.length) {
    score += 30;
    reasons.add('todos-os-termos');
  }
  return { score, reasons: [...reasons].sort() };
}

export function searchAcervoCatalog(query, rootDir, options = {}) {
  const tokens = queryTokens(query);
  if (!tokens.length) {
    return {
      success: false,
      results: [],
      error: { code: 'search-query-empty', message: 'informe termos materiais do tema' },
    };
  }
  const indexPath = join(rootDir, 'acervo', '_index.yaml');
  const entries = parseAcervoIndex(indexPath);
  if (!entries) {
    return {
      success: false,
      results: [],
      error: { code: 'acervo-index-missing', message: 'acervo/_index.yaml ausente — rode indexar-acervo' },
    };
  }

  const phrase = normalize(query);
  const limit = boundedLimit(options.limit);
  // QUARANTINED = confiança rebaixada na indexação; fica fora por padrão.
  const includeQuarantined = options.includeQuarantined === true;

  const ranked = entries
    .filter((entry) => includeQuarantined || entry.confianca !== 'QUARANTINED')
    .map((entry) => {
      const match = scoreEntry(entry, phrase, tokens);
      // Fonte oficial verificada é mais confiável que descoberta — leve empurrão.
      const confidenceBonus = entry.confianca === 'VERIFIED_OFFICIAL' ? 10 : 0;
      // A varredura de conteúdo só roda para o que o metadado NÃO alcança. É
      // onde estava o buraco (tema/tags vêm do nome do arquivo), e restringir
      // assim preserva o ranqueamento existente e mantém a shortlist enxuta.
      if (match.score > 0) return { entry, match, rank: match.score + confidenceBonus, trechos: [] };
      const conteudo = escanearConteudo(join(rootDir, 'acervo', entry.path), tokens);
      if (conteudo.score > 0) match.reasons = [...match.reasons, 'conteudo'].sort();
      return {
        entry,
        match: { ...match, score: conteudo.score },
        rank: conteudo.score + confidenceBonus,
        trechos: conteudo.trechos,
      };
    })
    .filter((item) => item.match.score > 0)
    .sort((left, right) => right.rank - left.rank || left.entry.path.localeCompare(right.entry.path))
    .slice(0, limit)
    .map(({ entry, match, rank, trechos }) => ({
      path: entry.path,
      tipo: entry.tipo,
      tema: entry.tema,
      tags: entry.tags,
      confianca: entry.confianca,
      score: rank,
      matched_by: match.reasons,
      verified: entry.confianca === 'VERIFIED_OFFICIAL',
      // Procedência: preenchido só quando o material veio do sync da curadoria.
      fonte_pack: entry.fontePack || null,
      // Onde olhar dentro do arquivo. Dizer "está em STJ_2025.md" é inútil — são
      // 673 KB. Vem preenchido só quando o acerto veio do conteúdo.
      ...(trechos && trechos.length ? { trechos } : {}),
    }));

  return {
    success: true,
    result_count: ranked.length,
    limit,
    results: ranked,
    error: null,
  };
}

export function acervoSearchCli(query, targetDir, values = {}) {
  const result = searchAcervoCatalog(query, targetDir, {
    limit: values.limit,
    includeQuarantined: values['include-quarantined'] === true,
  });
  if (values.json === true) {
    console.log(JSON.stringify(result));
    return result;
  }
  if (!result.success) {
    console.error(`BUSCA_ACERVO:BLOQUEADA — ${result.error.message}`);
    return result;
  }
  console.log(`BUSCA_ACERVO:${result.result_count}`);
  for (const item of result.results) {
    const selo = item.verified ? 'oficial-verificado' : 'descoberta';
    const sync = item.fonte_pack ? `; sync ${item.fonte_pack}` : '';
    console.log(`  - ${item.path} [${selo}${sync}] — ${item.tema}`);
  }
  return result;
}
