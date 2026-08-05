#!/usr/bin/env node
/**
 * Citation Gate v2 — sentinela determinística para artefatos jurídicos finais.
 *
 * FAZ (fail-closed no escopo):
 * - identifica arquivos jurídicos finais em squads/<squad>/output/;
 * - bloqueia marcadores de pendência ANTES da gravação (PreToolUse);
 * - exige um manifesto <artefato>.citation-gate.json aprovado;
 * - confere a estrutura do manifesto e seu vínculo SHA-256 com o arquivo exato.
 *
 * DOIS MOMENTOS, de propósito:
 * - PreToolUse  — o conteúdo ainda não está em disco. Bloqueia o que não depende
 *   do arquivo gravado: marcador de pendência numa peça final. É aqui que a peça
 *   suja deixa de chegar ao disco (antes, ela chegava e só depois era acusada).
 * - PostToolUse — confere o manifesto e o vínculo SHA-256. Esta parte SÓ pode ser
 *   pós-escrita: o manifesto atesta o hash do arquivo exato, então o fluxo é
 *   gravar a peça, calcular o hash e só então gravar o manifesto.
 *
 * NÃO FAZ (verificação material):
 * - não acessa tribunais, diários ou bases oficiais;
 * - não confirma existência, vigência, teor, pertinência ou oficialidade da fonte;
 * - não substitui o verificador de citações nem a revisão humana.
 *
 * O manifesto é uma ATESTAÇÃO do trabalho material já realizado, não prova de que
 * a fonte existe. URL bem-formada e status "verificada" são apenas dados locais.
 * Entrada inesperada fora do escopo é ignorada; depois que um artefato final é
 * identificado, erro de leitura, manifesto ausente/inválido ou hash divergente
 * sempre bloqueia (exit 2).
 */
import { createHash } from 'node:crypto';
import { basename, dirname, isAbsolute, join, normalize, resolve } from 'node:path';
import { readFileSync, readdirSync, statSync } from 'node:fs';

const EXIT_BLOCKED = 2;
const MANIFEST_SUFFIX = '.citation-gate.json';
const FINAL_MARKER = /<!--\s*CRIMINALSQUAD:CITATION-GATE:FINAL\s*-->/i;
const FINAL_FRONTMATTER = /^---\s*[\s\S]*?^citation_gate:\s*["']?final["']?\s*$[\s\S]*?^---\s*$/im;
const DRAFT_FRONTMATTER = /^---\s*[\s\S]*?^citation_gate:\s*["']?(?:draft|internal|rascunho)["']?\s*$[\s\S]*?^---\s*$/im;
const PENDING_MARKER = /\[(?:N[ÃA]O[ _]VERIFICAD[OA]|DIVERGENTE|CONFERIR|A[ _]CONFERIR|VERIFICAR|HIP[ÓO]TESE|CITA[ÇC][ÃA]O[ _]PENDENTE|FONTE[ _]PENDENTE|PENDENTE[ _]DE[ _]VERIFICA[ÇC][ÃA]O)\]/gi;
const MATERIAL_CITATION = /(?:\b(?:REsp|AREsp|RHC|HC|AgRg|EDcl|ARE|RE|ADPF|ADI|ADC)\s*(?:n[º°o.]?\s*)?[\d.]|\bS[úu]mula(?:\s+Vinculante)?\s*(?:n[º°o.]?\s*)?\d+|\bTema\s+(?:repetitivo\s+|de\s+repercuss[ãa]o\s+geral\s+)?(?:n[º°o.]?\s*)?\d+|\bart(?:igo)?[.]?\s*\d+[A-Za-z-]*(?:\s*,?\s*(?:§|inciso|[IVXLCDM]+))?[^\n]{0,100}\b(?:CP|CPP|CF|LEP|Lei|Decreto|Resolu[çc][ãa]o)\b)/i;
const LEGAL_NAME = /(?:^|[-_.])(?:peti[çc][ãa]o|peticao|pe[çc]a|peca|recurso|apela[çc][ãa]o|apelacao|agravo|habeas[-_]?corpus|hc|resposta[-_]?acusa[çc][ãa]o|memoriais|alega[çc][õo]es|contrarraz[õo]es|raz[õo]es|queixa[-_]?crime|den[úu]ncia|parecer|decis[ãa]o|acordo)(?:[-_.]|$)/i;
const FINAL_NAME = /(?:^|[-_.])final(?:[-_.]|$)/i;
const DRAFT_NAME = /(?:^|[-_.])(?:minuta|rascunho|draft|intern[oa])(?:[-_.]|$)/i;
const INTERNAL_NAME = /^(?:revis[ãa]o|aprova[çc][ãa]o|checklist|relat[óo]rio|pesquisa|resumo|diagn[óo]stico|bloqueio|precedentes|cabimento|fatos|teses|estrat[ée]gia|c[áa]lculo|intake|onboarding|publish[-_]?report)(?:[-_.]|$)/i;
// Status possíveis de uma citação no manifesto. "acesso_falhou" existe porque a
// verdade tem de ser exprimível: antes, só "verificada" passava, então quem não
// conseguia abrir a fonte (timeout, portal fora do ar) só entregava mentindo.
// A estrutura punia a honestidade — e o registro em que todo o resto se apoia
// virava ficção. Declarar a falha passa; manter a citação na peça, não.
const CITATION_STATUS = ['verificada', 'acesso_falhou'];
const CITATION_STOPWORDS = new Set(['do', 'da', 'de', 'dos', 'das', 'o', 'a', 'os', 'as', 'e', 'em', 'no', 'na', 'n']);
const SUPPORTED_EXT = /\.(?:md|txt|rtf|docx|odt|pdf)$/i;
// Formatos sem texto inspecionável: não dá para procurar marcador de pendência
// nem `citation_gate: final` dentro deles.
const BINARY_EXT = /\.(?:docx|odt|pdf)$/i;

function normalizePath(value = '') {
  return String(value).replace(/\\/g, '/');
}

function inSquadOutput(filePath) {
  return /(?:^|\/)squads\/[^/]+\/output\//i.test(normalizePath(filePath));
}

/**
 * Peça final gravada num `output/` que NÃO é o canônico.
 *
 * Medido na rodada 3: dois runs gravaram em `r3/<squad>/output/…` e o gate
 * devolveu exit 0 sem uma linha de saída — ele só olha `squads/<nome>/output/`.
 * Gate que falha aberto é gate que não existe; e a pasta criada justamente
 * "para provar que o gate engata" estava fora dele.
 *
 * O alcance é deliberadamente estreito — só dispara para o que já PARECE peça
 * final (nome de peça ou `final`, extensão suportada) dentro de algum
 * `output/`. Um `build/output/notas.md` não é assunto desta sentinela.
 */
function finalForaDoLayout(filePath) {
  const normalizedPath = normalizePath(filePath);
  if (inSquadOutput(normalizedPath)) return false;
  // Diretorios de ENTREGA. A exigencia de estar num deles nao e arbitraria:
  // sem ela o hook bloquearia o proprio arquivo-fonte `step-05-redigir-recurso.md`,
  // cujo nome casa LEGAL_NAME. O buraco medido era so a lista curta demais —
  // `entregas/razoes-apelacao-final.md` passava mudo.
  if (!/(?:^|\/)(?:output|entregas?|saida|final|deliver\w*)\//i.test(normalizedPath)) return false;
  const name = basename(normalizedPath);
  if (name.endsWith(MANIFEST_SUFFIX) || !SUPPORTED_EXT.test(name)) return false;
  if (isInternalDraft(normalizedPath, '')) return false;
  return FINAL_NAME.test(name) || LEGAL_NAME.test(name);
}

// `verified_by` é IDENTIFICADOR, não frase. Medido na rodada 3: manifestos
// carregavam "verificador-citacoes · ciclo 1 (contexto isolado) · run smoke-…"
// enquanto o relatório do mesmo run admitia "rodaram inline, 0 de 3
// verificadores". Isolamento não se verifica lendo arquivo — então a alegação
// não verificável não entra. Quem lê o manifesto confia nele.
const VERIFIED_BY_ID = /^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$/;

function isInternalDraft(filePath, text) {
  const normalizedPath = normalizePath(filePath);
  const name = basename(normalizedPath);
  return name.startsWith('_')
    || name.startsWith('.')
    || /\/(?:_?drafts?|_?rascunhos?|_internal|revis(?:ao|ão)(?:[-_/]|$))\//i.test(normalizedPath)
    || DRAFT_NAME.test(name)
    || INTERNAL_NAME.test(name)
    || DRAFT_FRONTMATTER.test(text);
}

function isFinalLegalArtifact(filePath, text) {
  const normalizedPath = normalizePath(filePath);
  const name = basename(normalizedPath);
  if (!inSquadOutput(normalizedPath) || name.endsWith(MANIFEST_SUFFIX)) return false;
  if (!SUPPORTED_EXT.test(name)) return false;

  // PRECEDÊNCIA DOS SINAIS. Pôr o arquivo em `output/final/` ou marcá-lo como
  // final no frontmatter é DECLARAÇÃO do autor; o nome do arquivo é só palpite.
  // Antes, o palpite vencia: uma peça em `output/final/` escapava do gate inteiro
  // por começar com "relatório"/"pesquisa"/"resumo" — e ia ao cliente com
  // `[NÃO VERIFICADO]` dentro. Declaração explícita agora vence o nome.
  const declaradoFinal = /\/output\/final\//i.test(normalizedPath)
    || FINAL_MARKER.test(text)
    || FINAL_FRONTMATTER.test(text);
  if (declaradoFinal) return true;

  if (isInternalDraft(normalizedPath, text)) return false;
  // Binário em squads/*/output/ é tratado como peça final (exige manifesto) a
  // menos que o nome já o marque como interno/rascunho — checado acima. Sem esta
  // regra, um .docx de nome neutro ("entrega.docx") escaparia do gate, porque
  // não há texto onde procurar o marcador de final.
  if (BINARY_EXT.test(name)) return true;
  return /\/output\/final\//i.test(normalizedPath)
    || FINAL_NAME.test(name)
    || LEGAL_NAME.test(name)
    || FINAL_MARKER.test(text)
    || FINAL_FRONTMATTER.test(text);
}

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function block(message) {
  process.stderr.write(`CITATION GATE — BLOQUEADO: ${message}\n`);
  process.stderr.write(
    'Esta sentinela só valida pendências, manifesto e integridade local. '
      + 'Ela NÃO consulta nem confirma fontes. Faça a verificação material em fonte primária, '
      + 'registre-a no manifesto e mantenha a revisão humana obrigatória.\n',
  );
  process.exit(EXIT_BLOCKED);
}

function cleanHash(value) {
  return String(value || '').trim().toLowerCase().replace(/^sha256:/, '');
}

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/.test(String(value || ''))) return false;
  return !Number.isNaN(Date.parse(value));
}

function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

// Marcas combinantes (os acentos que o NFD separa da letra). Construída a partir
// de escapes porque a classe escrita com os caracteres em si fica invisível no
// diff e some numa cópia descuidada entre as cópias espelhadas deste hook.
const DIACRITICS = new RegExp('[\\u0300-\\u036f]', 'g');

function normalizeForMatch(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/**
 * A citação do manifesto ainda aparece no texto da peça?
 *
 * "Súmula 444 do STJ" segue citada mesmo escrita "Súmula n. 444/STJ": casar só a
 * frase exata deixaria a fuga trivial. Exigir os termos significativos na ordem,
 * com poucas palavras entre eles, pega a variação sem inventar coincidência —
 * e errar para o lado de NÃO encontrar é o certo aqui, porque um falso positivo
 * bloquearia justamente quem foi honesto.
 */
function citacaoSegueNaPeca(artifactText, title) {
  const corpo = normalizeForMatch(artifactText);
  const alvo = normalizeForMatch(title);
  if (!corpo || !alvo) return false;
  if (corpo.includes(alvo)) return true;
  const termos = alvo.split(' ').filter((termo) => termo && !CITATION_STOPWORDS.has(termo));
  if (termos.length < 2) return false;
  return new RegExp(`(?:^| )${termos.join('(?: [a-z0-9]+){0,3} ')}(?: |$)`).test(corpo);
}

/**
 * Assinatura canônica das citações de um texto: `sumula:441`, `resp:1234567`.
 *
 * Serve para reconhecer a MESMA citação escrita de formas diferentes em arquivos
 * diferentes do mesmo run ("Súmula 441 do STJ" × "Súm. 441/STJ").
 *
 * Limite deliberado: artigos de lei ficam de fora. "art. 5º" aparece em quase
 * toda peça e a atribuição ao código é ambígua a poucos caracteres de distância;
 * incluí-los produziria bloqueio falso, que é o defeito pior — desliga o gate na
 * prática. Aqui vale errar para menos.
 */
const CITATION_SIGNATURE_PATTERNS = [
  { kind: 'sumula-vinculante', re: /\bs[úu]mula\s+vinculante\s*(?:n[º°o.]?\s*)?(\d+)/gi },
  { kind: 'sumula', re: /\bs[úu]m(?:ula)?\.?\s*(?:n[º°o.]?\s*)?(\d+)/gi },
  { kind: 'tema', re: /\btema\s+(?:repetitivo\s+|de\s+repercuss[ãa]o\s+geral\s+)?(?:n[º°o.]?\s*)?([\d.]+)/gi },
  { kind: null, re: /\b(REsp|AREsp|RHC|HC|AgRg|EDcl|ARE|RE|ADPF|ADI|ADC)\s*(?:n[º°o.]?\s*)?([\d.]+)/gi },
];

function citationSignatures(text) {
  const assinaturas = new Set();
  for (const { kind, re } of CITATION_SIGNATURE_PATTERNS) {
    for (const match of String(text || '').matchAll(re)) {
      const tipo = kind || match[1].toLowerCase();
      const numero = (kind ? match[1] : match[2]).replace(/\D/g, '');
      if (numero) assinaturas.add(`${tipo}:${numero}`);
    }
  }
  return assinaturas;
}

function outputRootFor(filePath) {
  return normalizePath(filePath).match(/^(.*\/squads\/[^/]+\/output)(?:\/|$)/i)?.[1] || null;
}

// Teto defensivo: o gate roda a cada gravação de peça final e não pode virar um
// varredor de disco.
const SIBLING_FILE_LIMIT = 300;
const SIBLING_SIZE_LIMIT = 512 * 1024;

function collectSiblingTexts(root, selfPath, acc = []) {
  if (acc.length >= SIBLING_FILE_LIMIT) return acc;
  let entries;
  try {
    entries = readdirSync(root, { withFileTypes: true });
  } catch {
    return acc;
  }
  for (const entry of entries) {
    if (acc.length >= SIBLING_FILE_LIMIT) break;
    const path = join(root, entry.name);
    if (entry.isDirectory()) {
      collectSiblingTexts(path, selfPath, acc);
      continue;
    }
    if (normalize(path) === normalize(selfPath)) continue;
    if (entry.name.endsWith(MANIFEST_SUFFIX) || !/\.(?:md|txt|rtf)$/i.test(entry.name)) continue;
    try {
      if (statSync(path).size > SIBLING_SIZE_LIMIT) continue;
      acc.push({ path, text: readFileSync(path, 'utf8') });
    } catch {
      // Arquivo ilegível não pode derrubar o gate de um artefato válido.
    }
  }
  return acc;
}

/**
 * Citações que ALGUM outro artefato do mesmo run declara pendentes.
 *
 * A janela é a linha do marcador — se a citação estiver na linha seguinte, o
 * conflito passa. É o lado seguro do erro: um falso negativo deixa passar o que
 * a revisão humana ainda pega; um falso positivo bloqueia trabalho correto.
 */
function pendingSignaturesElsewhere(root, selfPath) {
  const pendentes = new Map();
  for (const { path, text } of collectSiblingTexts(root, selfPath)) {
    for (const linha of text.split('\n')) {
      PENDING_MARKER.lastIndex = 0;
      if (!PENDING_MARKER.test(linha)) continue;
      for (const assinatura of citationSignatures(linha)) {
        if (!pendentes.has(assinatura)) pendentes.set(assinatura, basename(path));
      }
    }
  }
  return pendentes;
}

/**
 * O run não pode se contradizer sobre a mesma citação.
 *
 * Medido na rodada 2: a mesma Súmula 441/STJ saiu afirmada sem ressalva num
 * arquivo e marcada `[NÃO VERIFICADO]` noutro. Como o gate opera por arquivo, a
 * afirmação escapava por estar em outro lugar.
 *
 * O manifesto VENCE: marcar como pendente na pesquisa, verificar e então incluir
 * é o fluxo NORMAL, e bloqueá-lo desligaria o gate na prática. Só sobra o que
 * ninguém atestou.
 */
function conflitosDePendencia(filePath, artifactText, manifest) {
  const root = outputRootFor(filePath);
  if (!root) return [];
  const afirmadas = citationSignatures(artifactText);
  if (!afirmadas.size) return [];
  const atestadas = new Set();
  for (const citation of Array.isArray(manifest?.citations) ? manifest.citations : []) {
    if (citation?.status !== 'verificada') continue;
    for (const assinatura of citationSignatures(citation.title)) atestadas.add(assinatura);
  }
  const pendentes = pendingSignaturesElsewhere(root, filePath);
  return [...afirmadas]
    .filter((assinatura) => pendentes.has(assinatura) && !atestadas.has(assinatura))
    .map((assinatura) => `${assinatura.replace(':', ' ')} (pendente em ${pendentes.get(assinatura)})`);
}

function validateManifest(manifest, artifactPath, artifactBuffer, artifactText) {
  const errors = [];
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) return ['manifesto deve ser objeto JSON'];
  if (manifest.schema_version !== '1') errors.push('schema_version deve ser "1"');
  if (manifest.kind !== 'criminalsquad.citation-gate-attestation') errors.push('kind inválido');
  if (manifest.artifact !== basename(artifactPath)) errors.push(`artifact deve ser "${basename(artifactPath)}"`);
  if (!/^[a-f0-9]{64}$/.test(cleanHash(manifest.artifact_sha256))) errors.push('artifact_sha256 deve ser SHA-256 hexadecimal');
  if (cleanHash(manifest.artifact_sha256) !== sha256(artifactBuffer)) errors.push('artifact_sha256 não corresponde ao artefato atual');
  if (manifest.gate_status !== 'aprovado') errors.push('gate_status deve ser "aprovado"');
  if (manifest.verification_type !== 'material') errors.push('verification_type deve ser "material"');
  if (!['citacoes_materiais', 'sem_citacoes_materiais'].includes(manifest.scope)) errors.push('scope inválido');
  if (typeof manifest.verified_by !== 'string' || !manifest.verified_by.trim()) {
    errors.push('verified_by é obrigatório');
  } else if (!VERIFIED_BY_ID.test(manifest.verified_by.trim())) {
    errors.push(
      'verified_by deve ser um identificador simples (ex.: "verificador-citacoes"), não uma frase. '
        + 'Alegação embutida — "contexto isolado", número de ciclo, id do run — não é verificável pela '
        + 'sentinela e já apareceu atestando isolamento que não houve',
    );
  }
  if (!isIsoDate(manifest.verified_at)) errors.push('verified_at deve ser data/hora ISO 8601 válida');
  if (!Array.isArray(manifest.citations)) errors.push('citations deve ser array');

  const citations = Array.isArray(manifest.citations) ? manifest.citations : [];
  if (manifest.scope === 'citacoes_materiais' && citations.length === 0) errors.push('scope citacoes_materiais exige ao menos uma citação');
  if (manifest.scope === 'sem_citacoes_materiais' && citations.length > 0) errors.push('scope sem_citacoes_materiais exige citations vazio');
  if (MATERIAL_CITATION.test(artifactText) && manifest.scope !== 'citacoes_materiais') {
    errors.push('o artefato aparenta conter citação material; scope não pode declarar ausência');
  }
  let verificadas = 0;
  citations.forEach((citation, index) => {
    if (!citation || typeof citation !== 'object' || Array.isArray(citation)) {
      errors.push(`citations[${index}] deve ser objeto`);
      return;
    }
    if (typeof citation.title !== 'string' || !citation.title.trim()) errors.push(`citations[${index}].title é obrigatório`);
    if (!CITATION_STATUS.includes(citation.status)) {
      errors.push(`citations[${index}].status deve ser ${CITATION_STATUS.map((s) => `"${s}"`).join(' ou ')}`);
    } else if (citation.status === 'verificada') {
      verificadas += 1;
    } else if (citacaoSegueNaPeca(artifactText, citation.title)) {
      // Documentar a falha é legítimo; usar a citação assim mesmo, não.
      errors.push(
        `citations[${index}] está como "acesso_falhou", mas "${citation.title}" segue citada na peça `
          + '— remova a citação do texto ou confira-a em fonte primária',
      );
    }
    if (!isHttpsUrl(citation.source_url)) errors.push(`citations[${index}].source_url deve ser URL HTTPS`);
    if (!isIsoDate(citation.consulted_at)) errors.push(`citations[${index}].consulted_at deve ser data/hora ISO 8601 válida`);
  });

  // Sem isto, "acesso_falhou" viraria o caminho de menor esforço: um manifesto
  // inteiro de fontes que "não abriram", nenhuma delas no texto, atestaria nada
  // e a peça passaria com as citações que de fato usa nunca conferidas.
  if (manifest.scope === 'citacoes_materiais' && citations.length > 0 && verificadas === 0
    && MATERIAL_CITATION.test(artifactText)) {
    errors.push('o manifesto não traz nenhuma citação verificada, e a peça contém citação material');
  }

  const pending = `${artifactText}\n${JSON.stringify(manifest)}`.match(PENDING_MARKER) || [];
  if (pending.length) errors.push(`há ${pending.length} marcador(es) de pendência`);
  return errors;
}

function readArtifact(filePath) {
  try {
    const buffer = readFileSync(filePath);
    const isText = /\.(?:md|txt|rtf)$/i.test(filePath);
    return { buffer, text: isText ? buffer.toString('utf8') : '' };
  } catch (error) {
    block(`não foi possível ler o artefato final ${filePath}: ${error.message}`);
  }
}

function validateArtifact(filePath) {
  const { buffer, text } = readArtifact(filePath);
  if (!isFinalLegalArtifact(filePath, text)) return;

  const pending = text.match(PENDING_MARKER) || [];
  if (pending.length) {
    const kinds = [...new Set(pending.map((item) => item.toUpperCase()))].join(', ');
    block(`${basename(filePath)} contém ${pending.length} marcador(es) de pendência (${kinds})`);
  }

  const manifestPath = `${filePath}${MANIFEST_SUFFIX}`;
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  } catch (error) {
    block(
      `manifesto ausente ou inválido para ${basename(filePath)}. `
        + `Crie ${basename(manifestPath)} conforme scripts/citation-gate-manifest.schema.json (${error.message})`,
    );
  }
  const errors = validateManifest(manifest, filePath, buffer, text);
  if (errors.length) block(`${basename(manifestPath)} inválido: ${errors.join('; ')}`);

  const conflitos = conflitosDePendencia(filePath, text, manifest);
  if (conflitos.length) {
    block(
      `${basename(filePath)} afirma citação que o próprio run declara pendente: ${conflitos.join('; ')}. `
        + 'Verifique em fonte primária e registre no manifesto, ou remova a citação da peça.',
    );
  }
}

function artifactFromManifest(manifestPath) {
  const name = basename(manifestPath);
  const artifactName = name.slice(0, -MANIFEST_SUFFIX.length);
  if (!artifactName || artifactName.includes('/') || artifactName.includes('\\')) block('nome de manifesto inválido');
  return join(dirname(manifestPath), artifactName);
}

function runForPath(inputPath) {
  const filePath = normalize(inputPath);
  if (finalForaDoLayout(filePath)) {
    block(
      `${basename(filePath)} parece peça final, mas está fora do layout que a sentinela alcança. `
        + 'O gate só enxerga `squads/<nome>/output/…` — gravar peça final em outro `output/` a deixa '
        + 'SEM verificação nenhuma, em silêncio. Mova o artefato para `squads/<nome>/output/` '
        + '(ou `output/final/` dentro dele). Não renomeie para escapar.',
    );
  }
  if (!inSquadOutput(filePath)) return;
  if (filePath.endsWith(MANIFEST_SUFFIX)) {
    const artifactPath = artifactFromManifest(filePath);
    validateArtifact(artifactPath);
    return;
  }
  let text = '';
  try {
    if (/\.(?:md|txt|rtf)$/i.test(filePath)) text = readFileSync(filePath, 'utf8');
  } catch {
    // Só a classificação usa esta leitura; artefato final identificado por nome
    // será relido de modo fail-closed em validateArtifact.
  }
  if (isFinalLegalArtifact(filePath, text)) validateArtifact(filePath);
}

/**
 * PRÉ-ESCRITA (PreToolUse) — o conteúdo ainda NÃO está em disco.
 *
 * Aqui só se checa o que independe do arquivo gravado, e é exatamente o que não
 * pode vazar: marcador de pendência numa peça final. O manifesto não é exigido
 * neste momento de propósito — ele atesta o SHA-256 do arquivo exato, que só
 * existe depois da gravação (ver PostToolUse em validateArtifact).
 */
function validateBeforeWrite(inputPath, incoming) {
  const filePath = normalize(inputPath);
  if (!inSquadOutput(filePath) || filePath.endsWith(MANIFEST_SUFFIX)) return;
  if (!incoming) return; // sem conteúdo inspecionável (ex.: binário) — cai no pós-escrita
  if (!isFinalLegalArtifact(filePath, incoming)) return;

  const pending = incoming.match(PENDING_MARKER) || [];
  if (pending.length) {
    const kinds = [...new Set(pending.map((item) => item.toUpperCase()))].join(', ');
    block(
      `${basename(filePath)} traz ${pending.length} marcador(es) de pendência (${kinds}). `
        + 'Resolva a pendência ANTES de gravar a peça final — ela não chega ao disco assim.',
    );
  }
}

function hookPayload(raw) {
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!data || typeof data !== 'object') return null;
  const toolInput = data.tool_input || {};
  return {
    // Claude Code manda `PreToolUse`; o Cursor manda `preToolUse`. O mecanismo de
    // bloqueio é o MESMO nas duas IDEs (exit 2), então o hook é um só — normalizar
    // o nome do evento é tudo que separa "roda no Claude" de "roda nas duas".
    event: String(data.hook_event_name || '').toLowerCase(),
    // `target_file` é o nome que a ferramenta de escrita do Cursor usa.
    filePath: toolInput.file_path || toolInput.path || toolInput.target_file || '',
    // Write traz o conteúdo inteiro. Edit traz só o trecho novo — suficiente
    // para pegar um marcador de pendência introduzido pela própria edição.
    incoming: typeof toolInput.content === 'string'
      ? toolInput.content
      : (typeof toolInput.new_string === 'string' ? toolInput.new_string : ''),
  };
}

const checkIndex = process.argv.indexOf('--check');
if (checkIndex >= 0) {
  const requestedPath = process.argv[checkIndex + 1];
  if (!requestedPath) block('uso: verifica-citacoes.mjs --check <artefato-ou-manifesto>');
  runForPath(isAbsolute(requestedPath) ? normalize(requestedPath) : normalize(resolve(requestedPath)));
  process.exit(0);
}

let raw = '';
try {
  raw = readFileSync(0, 'utf8');
} catch {
  process.exit(0);
}
const payload = hookPayload(raw);
if (!payload || !payload.filePath) process.exit(0);
if (payload.event === 'pretooluse') {
  validateBeforeWrite(payload.filePath, payload.incoming);
} else {
  runForPath(normalize(payload.filePath));
}
process.exit(0);
