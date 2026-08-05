// Núcleo do sync: verifica um pacote e instala no cache gerenciado.
//
// O conteúdo sincronizado NÃO vai para skills/ ou squads/ (que o `update` do npm
// sobrescreve). Vai para _criminalsquad/_packs/, que é PROTECTED no update.
// Ver docs/specs/sync-criminal/SPEC.md §5.
import { gunzipSync, gzipSync } from 'node:zlib';
import {
  existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import { dirname, join, normalize, resolve, sep } from 'node:path';
import {
  contentHash, isSafePackField, loadPublicKeys, sha256, verifySignature,
} from './sync-crypto.js';

export const PACKS_DIR = join('_criminalsquad', '_packs');

export function packsRoot(projectDir) {
  return join(projectDir, PACKS_DIR);
}

export function installedManifestPath(projectDir) {
  return join(packsRoot(projectDir), 'manifest.json');
}

/** O que já está instalado: { "skills.criminal": { versao, content_hash, verificado_em } } */
export function readInstalled(projectDir) {
  try {
    return JSON.parse(readFileSync(installedManifestPath(projectDir), 'utf8'));
  } catch {
    return { packs: {} };
  }
}

function writeInstalled(projectDir, data) {
  const path = installedManifestPath(projectDir);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

/** Impede path traversal vindo do pacote (../../etc). */
function safeRelative(relPath) {
  const clean = normalize(String(relPath || '')).replace(/^([/\\])+/, '');
  if (!clean || clean === '.' || clean.split(sep).includes('..')) {
    throw new Error(`caminho inválido no pacote: ${relPath}`);
  }
  return clean;
}

/**
 * Núcleo da verificação. Trabalha sobre BYTES, sem tocar no disco: é o mesmo
 * caminho para um pacote em pasta local e para um baixado do servidor — o que
 * garante que o download não tem um portão mais frouxo que o `--from`.
 *
 * `lerArquivo(nomeDeclaradoNoManifesto)` devolve Buffer ou null se não existir.
 * Retorna { ok, manifest, arquivos, erro }.
 */
export function verifyManifest(manifest, lerArquivo, keys = loadPublicKeys()) {
  if (!manifest || typeof manifest !== 'object') {
    return { ok: false, erro: 'manifest ausente ou inválido' };
  }
  if (!manifest.pack_id || !manifest.versao) {
    return { ok: false, erro: 'manifest sem pack_id/versao' };
  }
  // Antes de qualquer leitura pesada ou escrita: pack_id/versao viram caminho e
  // alvo de remoção recursiva, e NÃO estão cobertos pela assinatura. Um pacote
  // legítimo reencaminhado com pack_id trocado para `../../skills` apagaria a
  // biblioteca embarcada inteira. Charset restrito, fail-closed.
  if (!isSafePackField(manifest.pack_id)) {
    return { ok: false, erro: `pack_id inválido: ${String(manifest.pack_id).slice(0, 40)}` };
  }
  if (!isSafePackField(manifest.versao)) {
    return { ok: false, erro: `versao inválida: ${String(manifest.versao).slice(0, 40)}` };
  }

  const arquivos = [];
  for (const entity of manifest.entities || []) {
    let buf;
    try {
      buf = lerArquivo(safeRelative(entity.file));
    } catch (err) {
      return { ok: false, erro: err.message };
    }
    if (!buf) return { ok: false, erro: `arquivo ausente: ${entity.file}` };
    if (sha256(buf) !== entity.sha256) {
      return { ok: false, erro: `sha256 divergente em ${entity.file}` };
    }
    arquivos.push({ file: entity.file, buf });
  }

  const recomputed = contentHash(manifest.entities || []);
  if (recomputed !== String(manifest.content_hash || '').replace(/^sha256:/, '')) {
    return { ok: false, erro: 'content_hash divergente' };
  }
  if (!verifySignature(recomputed, manifest.signature, manifest.kid, keys)) {
    return { ok: false, erro: 'assinatura inválida (pacote não confiável)' };
  }
  return { ok: true, manifest, arquivos };
}

/** Verifica um pacote em disco (pasta com manifest.json + entities). */
export function verifyPack(packDir, keys = loadPublicKeys()) {
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(join(packDir, 'manifest.json'), 'utf8'));
  } catch {
    return { ok: false, erro: 'manifest.json ausente ou inválido' };
  }
  return verifyManifest(manifest, (rel) => {
    const file = join(packDir, rel);
    return existsSync(file) ? readFileSync(file) : null;
  }, keys);
}

// --- .csqpack: o pacote inteiro num arquivo só ---
//
// O servidor entrega UM arquivo por pacote (SPEC §6.1: uma `url` + um `sha256`),
// então manifesto e entities viajam juntos num envelope gzipado. Base64 nas
// entities para o envelope continuar sendo JSON puro — sem dependência, e o
// gzip absorve boa parte do custo. A assinatura interna continua sendo a
// autoridade: o envelope é só transporte.
export const CSQPACK_FORMAT = 'csqpack/1';

// Teto de descompressão: um .csqpack de poucos KB pode expandir para gigabytes
// (bomba gzip). O zlib lança RangeError assim que passa deste limite, SEM
// alocar o resto — e como a descompressão acontece ANTES da verificação de
// assinatura, sem o teto um servidor hostil derrubaria o cliente por memória.
const LIMITE_DESCOMPRIMIDO = 256 * 1024 * 1024;

function descomprimir(bytes) {
  return gunzipSync(bytes, { maxOutputLength: LIMITE_DESCOMPRIMIDO });
}

export function packToCsqpack(manifest, arquivos) {
  const conteudo = {};
  for (const { file, buf } of arquivos) conteudo[file] = Buffer.from(buf).toString('base64');
  return gzipSync(Buffer.from(JSON.stringify({
    formato: CSQPACK_FORMAT, manifest, arquivos: conteudo,
  }), 'utf8'));
}

/** Verifica um .csqpack recebido como bytes. Não escreve nada. */
export function verifyCsqpack(bytes, keys = loadPublicKeys()) {
  let envelope;
  try {
    envelope = JSON.parse(descomprimir(bytes).toString('utf8'));
  } catch {
    return { ok: false, erro: 'csqpack ilegível (não é gzip/JSON válido)' };
  }
  if (envelope?.formato !== CSQPACK_FORMAT) {
    return { ok: false, erro: `formato desconhecido: ${String(envelope?.formato).slice(0, 30)}` };
  }
  const conteudo = envelope.arquivos || {};
  return verifyManifest(envelope.manifest, (rel) => (
    typeof conteudo[rel] === 'string' ? Buffer.from(conteudo[rel], 'base64') : null
  ), keys);
}

/** Lê as entradas (uma por linha) de um arquivo .jsonl.gz do pacote. */
function readEntries(buf, file) {
  const text = file.endsWith('.gz') ? descomprimir(buf).toString('utf8') : buf.toString('utf8');
  const out = [];
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    const entry = JSON.parse(t);
    if (!entry.arquivo || typeof entry.conteudo !== 'string') {
      throw new Error('entrada sem { arquivo, conteudo }');
    }
    out.push(entry);
  }
  return out;
}

/**
 * Instala um pacote JÁ VERIFICADO. Escrita atômica: monta em tmp e só então
 * promove com rename. Falha no meio não deixa cache pela metade.
 */
export function installPack(projectDir, verified) {
  const { manifest, arquivos } = verified;
  const root = packsRoot(projectDir);
  // Cinto e suspensório: verifyPack já recusa pack_id/versao fora do charset,
  // mas esta função apaga diretórios — ela confere sozinha antes de destruir.
  if (!isSafePackField(manifest.pack_id) || !isSafePackField(manifest.versao)) {
    throw new Error(`pacote com identificação inválida: ${String(manifest.pack_id).slice(0, 40)}`);
  }
  const staging = join(root, `.tmp-${manifest.pack_id}-${manifest.versao}`);
  rmSync(staging, { recursive: true, force: true });
  mkdirSync(staging, { recursive: true });

  let total = 0;
  for (const { file, buf } of arquivos) {
    for (const entry of readEntries(buf, file)) {
      const dest = join(staging, safeRelative(entry.arquivo));
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, entry.conteudo, 'utf8');
      total++;
    }
  }

  // Promove: substitui a versão anterior deste pacote de uma vez.
  const final = join(root, manifest.pack_id);
  if (resolve(final) !== resolve(root, manifest.pack_id) || !resolve(final).startsWith(resolve(root) + sep)) {
    throw new Error('destino do pacote fora do cache gerenciado');
  }
  rmSync(final, { recursive: true, force: true });
  renameSync(staging, final);

  const installed = readInstalled(projectDir);
  installed.packs = installed.packs || {};
  installed.packs[manifest.pack_id] = {
    versao: manifest.versao,
    content_hash: manifest.content_hash,
    arquivos: total,
    verificado_em: new Date().toISOString(),
  };
  writeInstalled(projectDir, installed);
  return { pack_id: manifest.pack_id, versao: manifest.versao, arquivos: total };
}

export const CSQPACK_EXT = '.csqpack';

function ehArquivoCsqpack(caminho) {
  try {
    return caminho.endsWith(CSQPACK_EXT) && statSync(caminho).isFile();
  } catch {
    return false;
  }
}

function subpastasComManifesto(fromDir) {
  return readdirSync(fromDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => join(fromDir, e.name))
    .filter((d) => existsSync(join(d, 'manifest.json')));
}

function csqpacksEm(fromDir) {
  return readdirSync(fromDir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(CSQPACK_EXT))
    .map((e) => join(fromDir, e.name))
    .sort();
}

/**
 * Sincroniza a partir de uma origem local (S1 — antes de existir servidor, e
 * hoje a via de fuga oficial quando o servidor está fora).
 *
 * A origem pode ser um pacote (pasta com manifest.json), uma pasta com vários,
 * uma pasta com .csqpack baixados — o MESMO formato que GET /v1/download serve,
 * e que antes era ignorado com um "Nenhum pacote encontrado" enganoso — ou o
 * próprio .csqpack. Os dois formatos passam pelo mesmo portão de verificação.
 */
export function syncFromDir(fromDir, projectDir, { dryRun = false, keys = loadPublicKeys() } = {}) {
  let pastas = [];
  let arquivos = [];
  if (ehArquivoCsqpack(fromDir)) {
    arquivos = [fromDir];
  } else if (existsSync(join(fromDir, 'manifest.json'))) {
    // Pasta com manifest.json É o pacote. O .csqpack que o build-pack grava ali
    // dentro é o mesmo conteúdo empacotado para transporte, não um segundo
    // candidato — se fosse lido também, uma pasta adulterada seria ressuscitada
    // pela cópia intacta ao lado, e a recusa viraria instalação.
    pastas = [fromDir];
  } else {
    pastas = subpastasComManifesto(fromDir);
    arquivos = csqpacksEm(fromDir);
  }

  const resultado = { instalados: [], recusados: [], adiados: [], semNovidade: [] };
  if (!pastas.length && !arquivos.length) return resultado;

  const installed = readInstalled(projectDir);
  // Guarda o caso de o aluno deixar a pasta do pacote e o .csqpack dele lado a
  // lado na mesma origem: é um pacote só, e instalar duas vezes na mesma
  // execução só produziria trabalho e relatório em dobro.
  const vistos = new Set();

  const aplicar = (origem, verified) => {
    if (!verified.ok) {
      resultado.recusados.push({ dir: origem, erro: verified.erro });
      return; // fail-closed: nada é gravado
    }
    const { pack_id: packId, versao } = verified.manifest;
    if (vistos.has(`${packId}@${versao}`)) return;
    vistos.add(`${packId}@${versao}`);

    const atual = installed.packs?.[packId];
    if (atual && atual.versao === versao) {
      resultado.semNovidade.push(packId);
      return;
    }
    if (dryRun) {
      resultado.instalados.push({ pack_id: packId, versao, dryRun: true });
      return;
    }
    resultado.instalados.push(installPack(projectDir, verified));
  };

  for (const dir of pastas) aplicar(dir, verifyPack(dir, keys));
  for (const arquivo of arquivos) {
    let bytes;
    try {
      bytes = readFileSync(arquivo);
    } catch (err) {
      resultado.recusados.push({ dir: arquivo, erro: `nao consegui ler o pacote (${err.message})` });
      continue;
    }
    aplicar(arquivo, verifyCsqpack(bytes, keys));
  }
  return resultado;
}
