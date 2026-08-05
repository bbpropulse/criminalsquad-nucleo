#!/usr/bin/env node
// Envia ao servidor um pacote JÁ construído e assinado por scripts/build-pack.mjs.
//
//   node scripts/publicar-pack.mjs <saida-do-build-pack/> \
//        --url https://<servico> --admin-token "$ADMIN_TOKEN"
//
// A chave PRIVADA não entra aqui: este script só transporta bytes que já foram
// assinados. É de propósito — o servidor nunca precisa poder assinar nada.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
function flag(nome, padrao = null) {
  const i = args.indexOf(`--${nome}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : padrao;
}
const dir = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') !== true);
const url = flag('url');
const adminToken = flag('admin-token', process.env.ADMIN_TOKEN);

if (!dir || !url || !adminToken) {
  console.error('Uso: publicar-pack.mjs <saida/> --url https://<servico> --admin-token <token>');
  process.exit(2);
}

let distribuicao;
try {
  distribuicao = JSON.parse(readFileSync(join(dir, 'distribuicao.json'), 'utf8'));
} catch {
  console.error(`distribuicao.json nao encontrado em ${dir}. Rode o build-pack.mjs antes.`);
  process.exit(1);
}

const bytes = readFileSync(join(dir, distribuicao.arquivo));
const resposta = await fetch(new URL('/admin/api/packs', url), {
  method: 'POST',
  headers: {
    authorization: `Bearer ${adminToken}`,
    'content-type': 'application/octet-stream',
    'x-pack-id': distribuicao.pack_id,
    'x-pack-versao': distribuicao.versao,
    'x-pack-sha256': distribuicao.sha256,
  },
  body: bytes,
});

const corpo = await resposta.json().catch(() => ({}));
if (!resposta.ok) {
  console.error(`Falha ao publicar (${resposta.status}): ${corpo.erro || 'sem detalhe'}`);
  process.exit(1);
}
console.log(`Publicado: ${distribuicao.pack_id}@${distribuicao.versao} (${bytes.length} bytes)`);
console.log('Os alunos recebem no proximo `npx criminalsquad sync`.');
