#!/usr/bin/env node
// Gera (ou rotaciona) a chave de assinatura ed25519 dos pacotes de sync.
//
//   node scripts/gerar-chave-sync.mjs [--kid 2026-a] [--out <priv.pem>] [--substituir]
//
// Por que existe: a verificação do cliente (src/sync-crypto.js) confere cada pack
// contra a chave PÚBLICA embarcada em _criminalsquad/config/sync-keys.json. Para
// publicar, a curadoria precisa da chave PRIVADA correspondente. Antes disso, não
// havia ferramenta que gerasse o par — a pública embarcada não tinha privada
// conhecida, e todo pack publicado seria recusado por 100% dos clientes.
//
// O que este comando faz, e o que NÃO faz:
//   - gera o par ed25519;
//   - grava a PRIVADA fora do repositório (padrão ~/.config/criminalsquad/), com
//     permissão 600, e RECUSA sobrescrever uma privada existente (clobber de chave
//     que já assinou pacotes é catastrófico — old packs deixam de verificar);
//   - escreve a PÚBLICA em _criminalsquad/config/sync-keys.json (arquivo versionado;
//     a pública é pública). Rotação (kid novo) ANEXA, preservando as chaves antigas
//     para que pacotes já assinados continuem válidos; um kid que já existe só é
//     tocado com --substituir (uso único: fechar a chave-placeholder inicial).
//
// A privada NUNCA entra no repositório nem sobe ao servidor de sync.
import { generateKeyPairSync } from 'node:crypto';
import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
// Onde a PÚBLICA é gravada. Padrão: a config embarcada do repo (a que vai ao npm).
// CRIMINALSQUAD_KEYS_PATH isola o alvo em teste, sem tocar o arquivo versionado.
const KEYS_PATH = process.env.CRIMINALSQUAD_KEYS_PATH || join(ROOT, '_criminalsquad', 'config', 'sync-keys.json');

const args = process.argv.slice(2);
function flag(nome, fallback = null) {
  const i = args.indexOf(`--${nome}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback;
}
const temFlag = (nome) => args.includes(`--${nome}`);

// kid padrão: <ano>-a. É um rótulo curto e estável, não um segredo.
const anoAtual = new Date().getFullYear();
const kid = flag('kid', `${anoAtual}-a`);
if (!/^[a-z0-9][a-z0-9._-]{0,40}$/i.test(kid)) {
  console.error(`kid inválido: "${kid}" (use letras/números/.-_, começando por alfanumérico).`);
  process.exit(2);
}

// A privada mora fora do repo por padrão, num diretório de config do usuário.
const configDir = join(process.env.XDG_CONFIG_HOME || join(homedir(), '.config'), 'criminalsquad');
const outPriv = resolve(flag('out', join(configDir, `sync-priv-${kid}.pem`)));

// Guarda-corpo: NUNCA gravar a privada dentro da árvore do repositório — de lá ela
// poderia acabar num commit ou no tarball (files[] inclui scripts/). Fail-closed.
if (outPriv === ROOT || outPriv.startsWith(ROOT + '/')) {
  console.error('RECUSADO: a chave privada não pode ser gravada dentro do repositório');
  console.error(`  (${outPriv} está sob ${ROOT}).`);
  console.error('  Escolha um caminho fora do repo, ex.: --out ~/.config/criminalsquad/sync-priv.pem');
  process.exit(1);
}

// Nunca sobrescrever uma privada existente sem intenção explícita: se ela já
// assinou pacotes, perdê-la é irrecuperável.
if (existsSync(outPriv) && !temFlag('forcar')) {
  console.error(`RECUSADO: já existe uma chave privada em ${outPriv}.`);
  console.error('  Se ela ainda é válida, NÃO gere outra por cima — faça backup e reutilize.');
  console.error('  Para rotacionar, use um kid novo: --kid ' + anoAtual + '-b');
  console.error('  Para sobrescrever mesmo assim (perde a antiga), acrescente --forcar.');
  process.exit(1);
}

// Estado atual das chaves públicas (o placeholder 2026-a vem no repo).
let doc = { descricao: 'Chaves publicas de verificacao dos pacotes de sync. A privada NUNCA fica no repositorio.', keys: [] };
if (existsSync(KEYS_PATH)) {
  try {
    doc = JSON.parse(readFileSync(KEYS_PATH, 'utf8'));
    if (!Array.isArray(doc.keys)) doc.keys = [];
  } catch (err) {
    console.error(`sync-keys.json ilegível (${err.message}); corrija antes de gerar chave.`);
    process.exit(1);
  }
}

const jaExiste = doc.keys.find((k) => k.kid === kid);
if (jaExiste && !temFlag('substituir')) {
  console.error(`RECUSADO: o kid "${kid}" já existe em sync-keys.json.`);
  console.error('  Pacotes já assinados com a chave desse kid deixariam de verificar se você a trocar.');
  console.error('  Para ROTACIONAR (recomendado), use um kid novo: --kid ' + anoAtual + '-b');
  console.error('  Só use --substituir para fechar a chave-placeholder inicial, antes da 1ª publicação.');
  process.exit(1);
}

// --- geração ---
const { publicKey, privateKey } = generateKeyPairSync('ed25519');
const privPem = privateKey.export({ format: 'pem', type: 'pkcs8' });
// A pública no MESMO formato que loadPublicKeys() lê: base64 do DER SPKI.
const pubDerBase64 = publicKey.export({ format: 'der', type: 'spki' }).toString('base64');

// grava a privada (fora do repo), 600
mkdirSync(dirname(outPriv), { recursive: true });
writeFileSync(outPriv, privPem, { mode: 0o600 });
try { chmodSync(outPriv, 0o600); } catch { /* best-effort em FS sem permissões POSIX */ }

// atualiza a pública embarcada: substitui o kid (uso único) ou anexa (rotação)
const entrada = { kid, alg: 'ed25519', pub: pubDerBase64, criada_em: new Date().toISOString().slice(0, 10) };
doc.keys = jaExiste
  ? doc.keys.map((k) => (k.kid === kid ? entrada : k))
  : [...doc.keys, entrada];
mkdirSync(dirname(KEYS_PATH), { recursive: true });
writeFileSync(KEYS_PATH, JSON.stringify(doc, null, 2) + '\n', 'utf8');

console.log('Chave de assinatura gerada.');
console.log(`  kid:      ${kid}${jaExiste ? ' (SUBSTITUÍDA)' : (doc.keys.length > 1 ? ' (rotação — chaves antigas preservadas)' : '')}`);
console.log(`  privada:  ${outPriv}  (permissão 600, FORA do repositório)`);
console.log(`  pública:  gravada em _criminalsquad/config/sync-keys.json`);
console.log('');
console.log('PRÓXIMOS PASSOS:');
console.log('  1. FAÇA BACKUP da chave privada num cofre (1Password/Bitwarden/pen drive offline).');
console.log('     Sem ela você NÃO consegue mais publicar, e não há como recuperá-la.');
console.log('  2. Commite _criminalsquad/config/sync-keys.json (só a PÚBLICA — a privada nunca).');
console.log(`  3. Publique com:  node scripts/build-pack.mjs <entrada> <saida> --pack-id <id> --versao <v> --key ${outPriv} --kid ${kid}`);
console.log('     (o build-pack confere sozinho, antes de terminar, se o par bate com a pública embarcada.)');
