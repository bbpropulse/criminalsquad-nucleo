#!/usr/bin/env node
// Ferramenta de publicação (dev): monta e ASSINA um pacote de sync.
//
//   node scripts/build-pack.mjs <entrada.jsonl> <saida/> --pack-id skills.criminal \
//        --versao 2026.07.3 --key <chave-privada.pem> [--kid 2026-a]
//
// A entrada é um JSONL com uma linha por arquivo: { "arquivo": "...", "conteudo": "..." }
// A chave privada NUNCA fica no repositório — passe o caminho por --key.
import { gzipSync } from 'node:zlib';
import { createPrivateKey, sign as cryptoSign } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { createHash } from 'node:crypto';
import { packToCsqpack, verifyCsqpack } from '../src/sync.js';
import { loadPublicKeys } from '../src/sync-crypto.js';

const args = process.argv.slice(2);
function flag(name, fallback = null) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
}
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
const [entrada, saida] = positional;
const packId = flag('pack-id');
const versao = flag('versao');
const keyPath = flag('key');
const kid = flag('kid', '2026-a');
// Contra qual conjunto de chaves públicas o auto-check confere o pacote. Padrão:
// as chaves embarcadas no repo/npm (o que o aluno usa). Um ambiente de teste pode
// apontar para o seu próprio arquivo com --keys.
const keysPath = flag('keys');

if (!entrada || !saida || !packId || !versao || !keyPath) {
  console.error('Uso: build-pack.mjs <entrada.jsonl> <saida/> --pack-id <id> --versao <v> --key <priv.pem> [--kid <kid>]');
  process.exit(2);
}

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');

// 1) valida a entrada linha a linha (falha cedo, não publica lixo)
const linhas = readFileSync(entrada, 'utf8').split('\n').map((l) => l.trim()).filter(Boolean);
let n = 0;
for (const linha of linhas) {
  const e = JSON.parse(linha);
  if (!e.arquivo || typeof e.conteudo !== 'string') {
    console.error(`Linha invalida (precisa de { arquivo, conteudo }): ${linha.slice(0, 80)}…`);
    process.exit(1);
  }
  n++;
}

// 2) comprime o payload
mkdirSync(saida, { recursive: true });
const payloadName = `${basename(entrada, '.jsonl')}.jsonl.gz`;
const payload = gzipSync(Buffer.from(linhas.join('\n') + '\n', 'utf8'));
writeFileSync(join(saida, payloadName), payload);

// 3) manifesto + content_hash + assinatura
const entities = [{ file: payloadName, sha256: sha256(payload), bytes: payload.length }];
const contentHash = sha256(Buffer.from(entities.map((e) => e.sha256).join(''), 'utf8'));
const privateKey = createPrivateKey(readFileSync(keyPath));
const signature = cryptoSign(null, Buffer.from(contentHash, 'utf8'), privateKey).toString('base64');

const manifest = {
  pack_id: packId,
  versao,
  criado_em: new Date().toISOString(),
  counts: { arquivos: n },
  entities,
  content_hash: `sha256:${contentHash}`,
  kid,
  signature: `ed25519:${signature}`,
};
writeFileSync(join(saida, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');

// 4) .csqpack — o pacote inteiro num arquivo só, que é o que o servidor entrega
// (SPEC §6.1 dá uma url + um sha256 por pacote). O sha256 abaixo é o do
// ARQUIVO, usado pelo cliente antes mesmo de abrir o envelope; a assinatura
// interna continua sendo a autoridade sobre o conteúdo.
const csqpack = packToCsqpack(manifest, [{ file: payloadName, buf: payload }]);

// AUTO-CHECK: o pacote recém-assinado tem de verificar contra a chave PÚBLICA
// embarcada (a mesma que vai no npm e que todo cliente usa). Sem isto, assinar
// com uma chave que não corresponde à pública embarcada "publica" com sucesso
// aparente um pacote que 100% dos alunos recusam em silêncio — e o defeito só
// apareceria semanas depois. Melhor falhar aqui, no ato, com mensagem acionável.
const autoCheck = verifyCsqpack(csqpack, keysPath ? loadPublicKeys(keysPath) : undefined);
if (!autoCheck.ok) {
  console.error('FALHA: o pacote assinado NAO verifica contra a chave publica embarcada.');
  console.error(`  motivo: ${autoCheck.erro}`);
  console.error(`  kid carimbado: ${kid}`);
  console.error('  Causa provavel: a chave privada em --key nao corresponde a chave publica');
  console.error('  desse kid em _criminalsquad/config/sync-keys.json. Todo cliente recusaria');
  console.error('  este pacote. Gere/rotacione a chave com: node scripts/gerar-chave-sync.mjs');
  console.error('  Nada foi publicado.');
  process.exit(1);
}

const csqpackName = `${packId}-${versao}.csqpack`;
writeFileSync(join(saida, csqpackName), csqpack);
const distribuicao = {
  pack_id: packId,
  versao,
  arquivo: csqpackName,
  sha256: sha256(csqpack),
  bytes: csqpack.length,
};
writeFileSync(join(saida, 'distribuicao.json'), JSON.stringify(distribuicao, null, 2) + '\n', 'utf8');

console.log(`Pacote: ${packId}@${versao}`);
console.log(`  arquivos: ${n}`);
console.log(`  payload:  ${payloadName} (${payload.length} bytes)`);
console.log(`  csqpack:  ${csqpackName} (${csqpack.length} bytes, sha256 ${distribuicao.sha256.slice(0, 12)}…)`);
console.log(`  destino:  ${saida}`);
