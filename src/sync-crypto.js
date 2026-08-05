// Integridade e procedência dos pacotes de sync.
//
// Fail-closed (SPEC §2.3): pacote sem assinatura válida é RECUSADO e nada é gravado.
// A chave pública vem embarcada no pacote npm — a verificação NUNCA depende de rede.
import { createHash, createPublicKey, verify as cryptoVerify } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const KEYS_PATH = join(__dirname, '..', '_criminalsquad', 'config', 'sync-keys.json');

export function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

/**
 * content_hash = sha256 da concatenação ordenada dos sha256 de cada arquivo do
 * manifesto. É sobre ele que a assinatura é feita — assim uma troca de byte em
 * qualquer arquivo invalida o pacote inteiro.
 */
export function contentHash(entities) {
  const concat = (entities || []).map((e) => e.sha256).join('');
  return sha256(Buffer.from(concat, 'utf8'));
}

// pack_id e versao decidem ONDE o pacote é gravado e o que é apagado para dar
// lugar a ele. Como não fazem parte do material assinado, um pacote legítimo
// reencaminhado por terceiro poderia ter o pack_id trocado sem invalidar a
// assinatura — e um `../..` viraria escrita e remoção recursiva fora do cache.
// Charset restrito, verificado ANTES de qualquer escrita.
const ID_SEGURO = /^[a-z0-9][a-z0-9._-]*$/i;

export function isSafePackField(value) {
  const text = String(value ?? '');
  return text.length > 0 && text.length <= 100 && ID_SEGURO.test(text) && !text.includes('..');
}

/** Carrega as chaves públicas embarcadas: { kid: KeyObject }. */
export function loadPublicKeys(keysPath = KEYS_PATH) {
  const raw = JSON.parse(readFileSync(keysPath, 'utf8'));
  const out = {};
  for (const k of raw.keys || []) {
    if (k.alg !== 'ed25519' || !k.pub) continue;
    out[k.kid] = createPublicKey({
      key: Buffer.from(k.pub, 'base64'),
      format: 'der',
      type: 'spki',
    });
  }
  return out;
}

export function verifySignature(contentHashHex, signature, kid, keys) {
  const key = keys?.[kid];
  if (!key || !signature) return false;
  try {
    return cryptoVerify(
      null,
      Buffer.from(contentHashHex, 'utf8'),
      key,
      Buffer.from(String(signature).replace(/^ed25519:/, ''), 'base64')
    );
  } catch {
    return false;
  }
}
