#!/usr/bin/env node
// Guarda de publicação: o `build-dist.mjs` copia da ÁRVORE DE TRABALHO, não do
// HEAD. Sem esta verificação, um arquivo em voo — seu, ou de outra sessão
// trabalhando no mesmo repositório — vira distribuição PÚBLICA sem nunca ter
// sido commitado nem revisado.
//
// Aconteceu em 29/07/2026: dez arquivos de `src/` e `scripts/` modificados e
// três não rastreados, todos de trabalho inacabado de sync/curadoria, estavam a
// um comando de ir para o repo público. Foi pego à mão; esta guarda é para não
// depender disso da próxima vez.
//
// Só interessam os caminhos que ENTRAM no pacote (`files[]` do package.json):
// sujeira em `tests/` ou `docs/` não é distribuída e não deve travar a release.
//
// Uso:  node scripts/check-arvore-para-dist.mjs         → sai 1 se houver sujeira
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

// `files[]` aceita entradas negadas (`!**/*.pyc`), que não são caminhos a vigiar.
export function caminhosDistribuidos(pkg) {
  return (pkg.files || [])
    .filter((f) => typeof f === 'string' && !f.startsWith('!'))
    .map((f) => f.replace(/\/$/, ''));
}

// `git status --porcelain` traz o estado nas duas primeiras colunas e o caminho
// a partir da terceira. Caminho com espaço vem entre aspas; renomeado vem como
// "antigo -> novo", e o que interessa é o destino, que é o que seria copiado.
//
// A sobreposição tem de ser checada nos DOIS sentidos, e foi aqui que a primeira
// versão desta guarda falhou: o git colapsa diretório não rastreado numa única
// linha (`?? curadoria/`), enquanto o `files[]` pode listar um ARQUIVO lá dentro
// (`curadoria/README.md`). Olhando só "o caminho está dentro de uma entrada
// distribuída?", esse caso escapava — e era exatamente o diretório em voo que
// seria publicado.
function sobrepoe(caminho, distribuido) {
  if (caminho === distribuido) return true;
  if (caminho.startsWith(distribuido + '/')) return true;           // arquivo dentro de dir distribuído
  if (caminho.endsWith('/') && distribuido.startsWith(caminho)) return true; // dir sujo contém o distribuído
  return false;
}

export function caminhosSujosNoPacote(porcelain, distribuidos) {
  const sujos = [];
  for (const linha of String(porcelain).split('\n')) {
    if (!linha.trim()) continue;
    let caminho = linha.slice(3).trim();
    const seta = caminho.indexOf(' -> ');
    if (seta !== -1) caminho = caminho.slice(seta + 4).trim();
    caminho = caminho.replace(/^"|"$/g, '');
    if (distribuidos.some((f) => sobrepoe(caminho, f))) sujos.push(caminho);
  }
  return sujos;
}

function main() {
  const pkg = JSON.parse(readFileSync(join(RAIZ, 'package.json'), 'utf8'));
  const porcelain = execSync('git status --porcelain', { cwd: RAIZ, encoding: 'utf8' });
  const sujos = caminhosSujosNoPacote(porcelain, caminhosDistribuidos(pkg));

  if (sujos.length === 0) {
    console.log('árvore limpa nos caminhos distribuídos — pode publicar.');
    return;
  }

  console.error('publish-dist: há alterações NÃO COMMITADAS em caminhos que entram no pacote:');
  for (const c of sujos) console.error(`  ${c}`);
  console.error('');
  console.error('Publicar agora colocaria trabalho inacabado num repositório PÚBLICO.');
  console.error('Commite (ou reverta) esses caminhos e rode de novo.');
  process.exit(1);
}

if (process.argv[1] && process.argv[1].endsWith('check-arvore-para-dist.mjs')) main();
