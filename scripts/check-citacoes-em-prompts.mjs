#!/usr/bin/env node
// O Citation Gate valida a PEÇA, não o PROMPT.
//
// Um número de tema ou de acórdão escrito dentro de um agente, de um step ou de
// uma best-practice nunca passa pelo gate — e é copiado direto para dentro da
// peça por quem executa. Medido em 28/07/2026, no smoke-run limpo do
// `defesa-criminal-completa`: dois temas repetitivos errados estavam em 14
// arquivos, 7 deles distribuídos ao aluno. Nenhum gate os pegou porque nenhum
// gate olha para prompt.
//
// A regra que este checker impõe: número de jurisprudência só vive num prompt se
// existir um REGISTRO DE AUTORIDADE que o cubra, em `_criminalsquad/core/authorities/`.
// O registro carrega URL oficial, data de verificação, política de revalidação e
// revisão humana — é a curadoria que o número sozinho não tem.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const registroDe = (raiz) => join(raiz, '_criminalsquad', 'core', 'authorities');

// Onde moram os prompts — tudo que instrui a produção da peça sem ser a peça.
const AREAS = [
  '.claude/agents',
  'templates/ide-templates/claude-code/.claude/agents',
  '_criminalsquad/core/best-practices',
  '_criminalsquad/core/prompts',
  'squads',
  'templates/squads',
];
// Dentro de squads/, só o que é prompt (não o output, não os casos-ouro, não a memória).
const DENTRO_DE_SQUAD = /(\/agents\/|\/pipeline\/)/;
const IGNORAR = /(\/output\/|\/_evals\/|\/_memory\/|\/_investigations\/|\/node_modules\/|\/\.git\/|\/worktrees\/)/;

// Identificadores que exigem curadoria. Súmula fica de fora do ERRO de propósito:
// é estável e amplamente conhecida — entra como aviso, não como bloqueio.
const BLOQUEIA = [
  // `Tema` com T maiúsculo: "tema 1", "tema 2" em minúscula é assunto editorial,
  // não repetitivo — e o squad de conteúdo usa a palavra nesse sentido o tempo todo.
  { nome: 'tema/repetitivo', re: /\bTemas?\s+n?\.?º?\s*([\d][\d.]*)/g },
  { nome: 'acórdão', re: /\b(REsp|AREsp|RHC|HC|ARE|RE|ADPF|ADI|ADC|AgRg\s+no\s+\w+)\s+n?\.?º?\s*([\d][\d.]*)/g },
];
const AVISA = [{ nome: 'súmula', re: /\bS(?:úmula|úm|V)\.?\s+(?:Vinculante\s+)?n?\.?º?\s*(\d+)/gi }];

// Números-exemplo em documentação de "como citar" não são citações — são gabaritos
// de formato. Sinalizá-los só produz ruído e faz o checker ser ignorado.
const EH_EXEMPLO = (linha, achado) =>
  /\b(123\.456|1\.234\.567|999\.999|000\.000|X{3,}|NNN)\b/.test(achado)
  || /\b(ex\.?:|exemplo|placeholder|modelo de citação|formato)/i.test(linha);

function arquivos(dir, saida = []) {
  if (!existsSync(dir)) return saida;
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (IGNORAR.test(`${caminho}/`)) continue;
    if (statSync(caminho).isDirectory()) { arquivos(caminho, saida); continue; }
    if (/\.(md|ya?ml)$/.test(nome)) saida.push(caminho);
  }
  return saida;
}

function autoridadesRegistradas(raiz) {
  const cobertos = new Set();
  const REGISTRO = registroDe(raiz);
  if (!existsSync(REGISTRO)) return cobertos;
  for (const nome of readdirSync(REGISTRO).filter((n) => n.endsWith('.json'))) {
    let rec;
    try { rec = JSON.parse(readFileSync(join(REGISTRO, nome), 'utf8')); } catch { continue; }
    // Um registro cobre todo identificador que apareça no seu tópico ou nos títulos das fontes.
    const texto = [rec.topic, ...(rec.sources || []).flatMap((s) => [s.title, s.scope, s.id])].filter(Boolean).join(' \n ');
    for (const { re } of [...BLOQUEIA, ...AVISA]) {
      for (const m of texto.matchAll(new RegExp(re.source, re.flags))) cobertos.add(normalizar(m[0]));
    }
  }
  return cobertos;
}

const normalizar = (s) => s.replace(/\s+/g, ' ').replace(/n?\.?º?\s*/i, ' ').replace(/\./g, '').trim().toLowerCase();

export function checarCitacoesEmPrompts({ raiz = RAIZ } = {}) {
  const cobertos = autoridadesRegistradas(raiz);
  const erros = [];
  const avisos = [];
  let lidos = 0;

  for (const area of AREAS) {
    const base = join(raiz, area);
    for (const caminho of arquivos(base)) {
      const rel = relative(raiz, caminho);
      if (/^(squads|templates\/squads)\//.test(rel) && !DENTRO_DE_SQUAD.test(`/${rel}`)) continue;
      lidos += 1;
      const linhas = readFileSync(caminho, 'utf8').split('\n');
      linhas.forEach((linha, i) => {
        if (/^\s*>/.test(linha) || /^\s*(\/\/|#)/.test(linha)) return; // aviso/comentário não é citação de uso
        for (const grupo of [...BLOQUEIA.map((b) => ({ ...b, grave: true })), ...AVISA.map((a) => ({ ...a, grave: false }))]) {
          for (const m of linha.matchAll(new RegExp(grupo.re.source, grupo.re.flags))) {
            if (cobertos.has(normalizar(m[0]))) continue;
            if (EH_EXEMPLO(linha, m[0])) continue;
            const achado = `${rel}:${i + 1} — ${grupo.nome} sem registro de autoridade: "${m[0].trim()}"`;
            (grupo.grave ? erros : avisos).push(achado);
          }
        }
      });
    }
  }
  return { ok: erros.length === 0, erros, avisos, lidos, registros: cobertos.size };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // Nasceu em modo relatório porque havia 83 pendências, e gate que trava o build
  // com 83 pendências é desligado no dia seguinte — que é como um gate morre.
  // Em 28/07/2026 o backlog foi curado a ZERO (16 julgados verificados em fonte
  // oficial e registrados; 5 citações erradas corrigidas ou removidas), então o
  // gate passou a BLOQUEAR por padrão. `--report` volta ao modo de leitura.
  const estrito = !process.argv.includes('--report');
  const r = checarCitacoesEmPrompts();
  if (process.argv.includes('--avisos')) for (const a of r.avisos) console.log(`AVISO: ${a}`);
  for (const e of r.erros) console.error(`ERRO: ${e}`);
  console.log(
    `\nCitações em prompts: ${r.lidos} arquivos varridos; ${r.erros.length} sem curadoria; ` +
    `${r.avisos.length} aviso(s); ${r.registros} identificador(es) cobertos pelo registro de autoridades.`,
  );
  if (!r.ok && estrito) {
    console.error(
      '\nUm número de tema ou de acórdão dentro de um prompt NUNCA passa pelo Citation Gate —\n' +
      'o gate valida a peça, não a instrução. Ou você registra a autoridade em\n' +
      '_criminalsquad/core/authorities/ (com URL oficial, data e revisão humana), ou tira o número\n' +
      'do prompt e manda localizá-lo na execução, pela skill jurisprudencia-stj-stf.',
    );
    process.exit(1);
  }
}
