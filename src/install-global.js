import { cp, mkdir, readdir, readFile, writeFile, rm, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = join(__dirname, '..');

// The npm tarball ships only templates/ (not the repo's own .claude/), so the
// global skill + agents are sourced from the claude-code IDE template.
const CC_TEMPLATE = join(PACKAGE_ROOT, 'templates', 'ide-templates', 'claude-code', '.claude');
const CURSOR_TEMPLATE = join(PACKAGE_ROOT, 'templates', 'ide-templates', 'cursor', '.cursor');

const CLAUDE_MD_BEGIN = '<!-- BEGIN CriminalSquad (install-global) -->';
const CLAUDE_MD_END = '<!-- END CriminalSquad (install-global) -->';
// Matches a whole CriminalSquad block (BEGIN…END). CRLF-tolerant (no ^/$ line
// anchors — those break on Windows line endings). Global so ALL blocks collapse.
const BLOCK_RE =
  /<!-- BEGIN CriminalSquad \(install-global\) -->[\s\S]*?<!-- END CriminalSquad \(install-global\) -->/g;

// Writes {path}.bak ONLY if it doesn't exist yet, so re-running install-global never
// overwrites the backup of the user's ORIGINAL content with an already-modified copy.
async function backupOnce(path, content) {
  try {
    await stat(path + '.bak');
    return false; // a backup already exists — preserve the original
  } catch {
    await writeFile(path + '.bak', content, 'utf-8');
    return true;
  }
}

// Concise activation so the chefe-roteador engages in EVERY conversation, not
// only inside a project — but ONLY for legal/office requests, never hijacking
// unrelated work. The full procedure lives in the /criminalsquad skill.
function claudeMdBlock() {
  return `${CLAUDE_MD_BEGIN}
## CriminalSquad — advocacia criminal (disponível quando você precisar)

O CriminalSquad está instalado globalmente. **Vale apenas para pedidos jurídicos ou de gestão de escritório.** Se o pedido NÃO for desse tipo, **ignore este bloco e responda normalmente** — não anuncie planos nem cite gates jurídicos. Se a pasta atual já tiver um \`CLAUDE.md\` de projeto CriminalSquad, **siga aquele**; este bloco vale para conversas fora de uma casa CriminalSquad.

Para um pedido jurídico/de escritório em linguagem natural, aja como o **chefe-roteador**:

1. **Raiz do workspace:** a raiz é **sempre a pasta atual** — cada projeto é autocontido; todos os arquivos (squads, acervo, \`output/\`) ficam nela, **nunca numa casa global**. Se a pasta atual não tiver \`_criminalsquad/\`, **inicialize-a aqui automaticamente, sem perguntar**: rode \`npx criminalsquad init --yes --lang "<idioma do usuário>"\` na pasta atual, avise em uma linha, e siga usando a pasta atual como raiz.
2. **Decida quem atende** — REUSAR › ADAPTAR › CRIAR: squad em \`{root}/squads/\` · agente em \`~/.claude/agents/\` · tarefa pontual ad-hoc · se recorrente e nada cobrir, **proponha criar** um squad (só com o "sim").
3. **Tarefa aberta / multi-etapa → loop visível:** anuncie "Vou tratar em N etapas: 1)… 2)…" e, a cada ciclo, escreva «Ciclo k/N — <etapa>», delegue ao especialista e, após o report, escreva «Resultado: <1 linha> · Próximo: <1 linha>». Teto de 3–5 ciclos; pare em "concluído" ou escale ao usuário. Um único passo: resolva direto, sem loop.
4. **Gates inegociáveis:** revisão humana; **verificação de citações** — nenhuma súmula/precedente citado de memória, grave peças em \`{root}/squads/<nome>/output/\` e confira as citações antes de entregar (há sanção real por jurisprudência inventada por IA); checkpoint antes de criar squad ou enviar e-mail/protocolo.

Na primeira vez em cada pasta de projeto, o \`/criminalsquad\` faz o onboarding do perfil (tipo de instituição + polo). Use \`/criminalsquad\` para o menu completo.
${CLAUDE_MD_END}`;
}

// Copies the global /criminalsquad skill into <ide>/skills/. Cleans the dest
// first so a future multi-file skill never leaves stale files behind (the skill
// is the product, not user content — safe to replace wholesale).
//
// `ideDir` e `srcDir` são parâmetros porque o Claude Code e o Cursor têm a MESMA
// noção de skill (`SKILL.md`) em diretórios diferentes — duplicar a função só
// para trocar dois caminhos garantiria que uma das cópias envelhecesse.
async function installGlobalSkill(ideDir, srcDir = CC_TEMPLATE) {
  const src = join(srcDir, 'skills', 'criminalsquad');
  const dest = join(ideDir, 'skills', 'criminalsquad');
  await rm(dest, { recursive: true, force: true });
  await mkdir(dirname(dest), { recursive: true });
  await cp(src, dest, { recursive: true });
}

// Copies the specialist agents into <ide>/agents/, NEVER overwriting an
// existing file (could be a user's own agent). Skips the README index. Returns
// { installed, skipped } counts so the caller can report honestly.
async function installGlobalAgents(ideDir, srcDir = CC_TEMPLATE) {
  const src = join(srcDir, 'agents');
  const dest = join(ideDir, 'agents');
  await mkdir(dest, { recursive: true });

  let entries;
  try {
    entries = await readdir(src, { withFileTypes: true });
  } catch {
    return { installed: 0, skipped: 0 };
  }

  let installed = 0;
  let skipped = 0;
  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
    if (entry.name === 'README.md') continue; // index, not an agent
    const destPath = join(dest, entry.name);
    try {
      await stat(destPath);
      skipped++; // already exists — do not clobber user content
      continue;
    } catch {
      // does not exist — copy it
    }
    await cp(join(src, entry.name), destPath);
    installed++;
  }
  return { installed, skipped };
}

// Installs the Citation Gate hook globally so the deterministic safety net (it
// blocks pieces that still carry pending markers) ALSO runs in conversations
// outside the default home. Copies the hook to ~/.claude/hooks/ and idempotently
// registers a PostToolUse (Write|Edit) entry in ~/.claude/settings.json pointing
// to an ABSOLUTE path ($CLAUDE_PROJECT_DIR is empty outside a project). Backs up
// settings.json first and never clobbers an unparseable file.
async function installGlobalHook(claudeDir) {
  const src = join(CC_TEMPLATE, 'hooks', 'verifica-citacoes.mjs');
  const hookDest = join(claudeDir, 'hooks', 'verifica-citacoes.mjs');
  await mkdir(dirname(hookDest), { recursive: true });
  try {
    await cp(src, hookDest);
  } catch {
    return 'missing'; // hook source absent — nothing to register
  }

  // O detector de vazamento de pipeline viaja junto. Ele é irmão do Gate de
  // Citações e mora no mesmo lugar — separá-los faria o `update` levar um e
  // deixar o outro órfão, que é exatamente como um gate morre em silêncio.
  try {
    await cp(
      join(CC_TEMPLATE, 'hooks', 'verifica-redacao.mjs'),
      join(claudeDir, 'hooks', 'verifica-redacao.mjs')
    );
  } catch {
    // ausente no pacote — o Gate de Citações segue registrado sozinho
  }

  const command = `node "${hookDest.replace(/\\/g, '/')}"`;
  const settingsPath = join(claudeDir, 'settings.json');

  let settings = {};
  let existed = false;
  let raw = null;
  try {
    raw = await readFile(settingsPath, 'utf-8');
    existed = true;
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) settings = parsed;
      else return 'manual'; // not an object — don't risk clobbering
    } catch {
      return 'manual'; // invalid JSON — leave the user's file untouched
    }
  } catch {
    // settings.json doesn't exist yet — we'll create a minimal one
  }

  // Back up the user's ORIGINAL bytes (not a reserialized copy) so the .bak is a
  // faithful restore point — matches ensureGlobalClaudeMd's backupOnce(path, existing).
  if (existed) {
    await backupOnce(settingsPath, raw);
  }

  if (!settings.hooks || typeof settings.hooks !== 'object') settings.hooks = {};
  if (!Array.isArray(settings.hooks.PostToolUse)) settings.hooks.PostToolUse = [];

  // Idempotent: skip if any existing entry already runs our hook.
  const already = settings.hooks.PostToolUse.some(
    (e) =>
      Array.isArray(e?.hooks) &&
      e.hooks.some((h) => typeof h?.command === 'string' && h.command.includes('verifica-citacoes'))
  );
  if (!already) {
    settings.hooks.PostToolUse.push({
      matcher: 'Write|Edit',
      hooks: [{ type: 'command', command }],
    });
  }

  // Detector de vazamento de pipeline: PreToolUse, porque andaime tem de ser
  // barrado ANTES de virar arquivo. Globalmente ele só olha peça em
  // squads/*/output/, então não atrapalha escrita em projeto não-jurídico.
  const redacao = join(claudeDir, 'hooks', 'verifica-redacao.mjs');
  if (!Array.isArray(settings.hooks.PreToolUse)) settings.hooks.PreToolUse = [];
  const jaRedacao = settings.hooks.PreToolUse.some(
    (e) =>
      Array.isArray(e?.hooks) &&
      e.hooks.some((h) => typeof h?.command === 'string' && h.command.includes('verifica-redacao'))
  );
  if (!jaRedacao) {
    settings.hooks.PreToolUse.push({
      matcher: 'Write|Edit',
      hooks: [{ type: 'command', command: `node "${redacao.replace(/\\/g, '/')}"` }],
    });
  }

  await writeFile(settingsPath, JSON.stringify(settings, null, 2) + '\n', 'utf-8');
  return already ? 'already' : 'registered';
}

// Idempotently inserts/refreshes the CriminalSquad block in ~/.claude/CLAUDE.md,
// preserving everything else. Strategy that is safe even on a corrupted file:
//   1. back up the existing file to CLAUDE.md.bak before touching it;
//   2. remove ALL well-formed CriminalSquad blocks (collapses duplicates);
//   3. append exactly one fresh block.
// Returns { action: 'created'|'updated'|'appended', backedUp: boolean }.
async function ensureGlobalClaudeMd(claudeDir) {
  const path = join(claudeDir, 'CLAUDE.md');
  let block = claudeMdBlock();

  let existing = null;
  try {
    existing = await readFile(path, 'utf-8');
  } catch {
    // no global CLAUDE.md yet
  }

  if (existing === null) {
    await mkdir(claudeDir, { recursive: true });
    await writeFile(path, block + '\n', 'utf-8');
    return { action: 'created', backedUp: false };
  }

  const hadBlock = existing.includes(CLAUDE_MD_BEGIN);
  const eol = existing.includes('\r\n') ? '\r\n' : '\n';

  // Match the file's line endings so we never introduce mixed LF/CRLF (Windows).
  if (eol === '\r\n') block = block.replace(/\n/g, '\r\n');

  // Back up the user's ORIGINAL once — recoverable no matter what (covers the
  // edge case of our markers appearing inside user text). Never overwrite an
  // existing .bak on re-runs (it would replace the original with a modified copy).
  await backupOnce(path, existing);

  // Remove every existing block (collapses duplicates), tidy blank runs, then
  // append exactly one fresh block.
  const base = existing
    .replace(BLOCK_RE, '')
    .replace(/(\r?\n){3,}/g, eol + eol)
    .replace(/\s+$/, '');
  const next = base + eol + eol + block + eol;
  await writeFile(path, next, 'utf-8');

  return { action: hadBlock ? 'updated' : 'appended', backedUp: true };
}

// ─────────────────────────── Superfície do Cursor ───────────────────────────
// O Cursor 2.4 passou a ter subagente em contexto isolado, hook com bloqueio e
// skill — os três recursos de que a orquestração depende. Por isso a instalação
// global deixou de ser exclusiva do Claude Code.

// A regra global do Cursor. `alwaysApply: false` DE PROPÓSITO: no Claude Code o
// bloco vive no CLAUDE.md, que já é carregado sempre; aqui, forçar a regra em
// toda conversa do Cursor injetaria contexto jurídico em projeto que não é
// jurídico. Com `false`, o modelo a puxa quando a `description` casar com o
// pedido — que é exatamente o gatilho que o bloco descreve.
export function cursorGlobalRuleContent() {
  const corpo = claudeMdBlock()
    .replace(CLAUDE_MD_BEGIN, '')
    .replace(CLAUDE_MD_END, '')
    // No Cursor os agentes globais moram em ~/.cursor/agents/.
    .replace('`~/.claude/agents/`', '`~/.cursor/agents/`')
    .trim();
  return `---
description: CriminalSquad — chefe-roteador para pedidos jurídicos ou de gestão de escritório (advocacia criminal)
alwaysApply: false
---

${corpo}
`;
}

async function installCursorGlobalRule(cursorDir) {
  const path = join(cursorDir, 'rules', 'criminalsquad.mdc');
  await mkdir(dirname(path), { recursive: true });
  try {
    const existing = await readFile(path, 'utf-8');
    await backupOnce(path, existing);
  } catch {
    // não existe — nada a preservar
  }
  await writeFile(path, cursorGlobalRuleContent(), 'utf-8');
}

// O comando `/criminalsquad`. No Cursor ele é um arquivo em commands/, não uma
// skill — a skill também é instalada (as duas superfícies coexistem: a skill dá
// descoberta automática, o comando dá a porta explícita).
async function installCursorSlashCommand(cursorDir) {
  const src = join(CURSOR_TEMPLATE, 'commands', 'criminalsquad.md');
  const dest = join(cursorDir, 'commands', 'criminalsquad.md');
  await mkdir(dirname(dest), { recursive: true });
  try {
    await cp(src, dest);
    return true;
  } catch {
    return false;
  }
}

// O Gate de Citações global no Cursor. Duas escolhas conscientes, e ambas são
// mais brandas que no nível de PROJETO:
//   • só `afterFileEdit` (observa e alerta), não `preToolUse` (bloqueia). Um gate
//     global bloqueante barraria escrita em QUALQUER projeto da máquina, jurídico
//     ou não — o bloqueio pertence ao `.cursor/hooks.json` do projeto, que o
//     `criminalsquad init` instala;
//   • sem `failClosed`. Globalmente, hook que falha e trava tudo é hook que o
//     usuário desliga no dia seguinte.
async function installCursorGlobalHook(cursorDir) {
  // O detector de vazamento viaja junto com o Gate de Citações — mesma pasta,
  // mesma instalação. Separá-los faria o `update` levar um e deixar o outro
  // órfão, que é como um gate morre sem ninguém perceber.
  try {
    await mkdir(join(cursorDir, 'hooks'), { recursive: true });
    await cp(
      join(CURSOR_TEMPLATE, 'hooks', 'verifica-redacao.mjs'),
      join(cursorDir, 'hooks', 'verifica-redacao.mjs')
    );
  } catch {
    // ausente no pacote — segue só com o Gate de Citações
  }

  const src = join(CURSOR_TEMPLATE, 'hooks', 'verifica-citacoes.mjs');
  const hookDest = join(cursorDir, 'hooks', 'verifica-citacoes.mjs');
  await mkdir(dirname(hookDest), { recursive: true });
  try {
    await cp(src, hookDest);
  } catch {
    return 'missing';
  }

  const command = `node "${hookDest.replace(/\\/g, '/')}"`;
  const path = join(cursorDir, 'hooks.json');

  let config = { version: 1, hooks: {} };
  try {
    const raw = await readFile(path, 'utf-8');
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) config = parsed;
      else return 'manual';
    } catch {
      return 'manual'; // JSON inválido — não mexemos no arquivo do usuário
    }
    await backupOnce(path, raw);
  } catch {
    // ainda não existe — criamos um mínimo
  }

  if (typeof config.version !== 'number') config.version = 1;
  if (!config.hooks || typeof config.hooks !== 'object') config.hooks = {};
  if (!Array.isArray(config.hooks.afterFileEdit)) config.hooks.afterFileEdit = [];

  const already = config.hooks.afterFileEdit.some(
    (h) => typeof h?.command === 'string' && h.command.includes('verifica-citacoes')
  );
  if (!already) config.hooks.afterFileEdit.push({ command, timeout: 20 });

  // O detector de vazamento entra no MESMO `afterFileEdit` — alerta, não bloqueia.
  // Vale aqui a mesma razão do Gate de Citações: globalmente ele observa; quem
  // barra antes da escrita é o `.cursor/hooks.json` do projeto.
  const redacao = join(cursorDir, 'hooks', 'verifica-redacao.mjs');
  const jaRedacao = config.hooks.afterFileEdit.some(
    (h) => typeof h?.command === 'string' && h.command.includes('verifica-redacao')
  );
  if (!jaRedacao) {
    config.hooks.afterFileEdit.push({
      command: `node "${redacao.replace(/\\/g, '/')}"`,
      timeout: 20,
    });
  }

  await writeFile(path, JSON.stringify(config, null, 2) + '\n', 'utf-8');
  return already ? 'already' : 'registered';
}

// Instala tudo que o Cursor precisa. Devolve um relatório para o chamador narrar
// com honestidade o que entrou e o que foi pulado.
async function installCursorSurface(home) {
  const cursorDir = join(home, '.cursor');
  await installGlobalSkill(cursorDir, CC_TEMPLATE);
  const comando = await installCursorSlashCommand(cursorDir);
  const agentes = await installGlobalAgents(cursorDir, CURSOR_TEMPLATE);
  await installCursorGlobalRule(cursorDir);
  const hook = await installCursorGlobalHook(cursorDir);
  return { cursorDir, comando, agentes, hook };
}

// Installs CriminalSquad globally so /criminalsquad and the chefe-roteador work
// in every Claude Code / Cursor conversation — installs the COMMAND surface
// only; project data stays per-folder. Options: { homeDir } — mainly for tests.
export async function installGlobal(options = {}) {
  const home = options.homeDir || homedir();
  const claudeDir = join(home, '.claude');

  console.log('\n  🟢 CriminalSquad — Instalação global (só o comando; os dados ficam por projeto)\n');

  // Global install ships ONLY the command surface (skill + agents + hook + CLAUDE.md).
  // It NEVER creates a global data home — each project is self-contained, and the
  // /criminalsquad skill auto-initializes the current folder on first use.

  // 1) Global skill + 2) global agents → ~/.claude/
  await installGlobalSkill(claudeDir);
  console.log('  ✓ Skill /criminalsquad instalada em ~/.claude/skills/');

  const { installed, skipped } = await installGlobalAgents(claudeDir);
  console.log(
    `  ✓ Agentes especialistas: ${installed} instalado(s)` +
      (skipped ? `, ${skipped} preservado(s) (já existiam)` : '') +
      ' em ~/.claude/agents/'
  );

  // 4) Citation Gate hook — deterministic safety net, now also outside the casa padrão.
  const hook = await installGlobalHook(claudeDir);
  if (hook === 'registered' || hook === 'already') {
    console.log('  ✓ Gate de citações (hook) ativo globalmente em ~/.claude/hooks/ + settings.json');
  } else if (hook === 'manual') {
    console.log('  ⚠️  ~/.claude/settings.json não pôde ser lido — hook copiado, mas registre o PostToolUse à mão (veja INSTALL.md)');
  }

  // 5) Activate the chefe-roteador in every conversation via global CLAUDE.md.
  const { action, backedUp } = await ensureGlobalClaudeMd(claudeDir);
  const label =
    action === 'created'
      ? 'criado'
      : action === 'updated'
        ? 'bloco atualizado'
        : 'bloco adicionado ao seu CLAUDE.md (conteúdo preservado)';
  console.log(
    `  ✓ Chefe-roteador ativado em todas as conversas (~/.claude/CLAUDE.md — ${label})` +
      (backedUp ? ' · backup: ~/.claude/CLAUDE.md.bak' : '')
  );

  // 6) Cursor. Mesma superfície de comando, adaptada ao que a IDE oferece.
  const cursor = await installCursorSurface(home);
  console.log(
    `  ✓ Cursor: skill + ${cursor.comando ? 'comando /criminalsquad + ' : ''}` +
      `${cursor.agentes.installed} agente(s) em ~/.cursor/` +
      (cursor.agentes.skipped ? ` (${cursor.agentes.skipped} preservado(s))` : '')
  );
  console.log('  ✓ Cursor: chefe-roteador em ~/.cursor/rules/criminalsquad.mdc (sob demanda, não em toda conversa)');
  if (cursor.hook === 'registered' || cursor.hook === 'already') {
    console.log('  ✓ Cursor: gate de citações em ~/.cursor/hooks.json (afterFileEdit — alerta; o bloqueio é por projeto)');
  } else if (cursor.hook === 'manual') {
    console.log('  ⚠️  ~/.cursor/hooks.json não pôde ser lido — hook copiado, mas registre o afterFileEdit à mão (veja INSTALL.md)');
  }

  console.log('\n  ✅ Pronto! O CriminalSquad agora funciona em qualquer conversa do Claude Code e do Cursor.');
  console.log('     • Digite /criminalsquad para o menu completo.');
  console.log('     • Ou só descreva o que precisa — o chefe-roteador assume.');
  console.log('     • Cada pasta vira um projeto próprio: os dados (squads, acervo, output) ficam nela.');
  console.log('     • Rode /criminalsquad numa pasta e ela se inicializa sozinha (onboarding na 1ª vez).\n');
  if (hook === 'registered' || hook === 'already') {
    console.log('  ℹ️  Verificação de citações ativa em qualquer pasta (o hook bloqueia peças');
    console.log('     com pendências em squads/*/output/). A conferência final é sempre humana.');
  } else {
    console.log('  ℹ️  Verificação de citações (hook) não foi registrada globalmente — confira');
    console.log('     manualmente toda súmula/precedente.');
  }
  console.log('  ℹ️  Para o Sherlock (navegador), dentro de um projeto rode:');
  console.log('     npm install && npx playwright install chromium\n');

  return {
    claudeDir,
    agentsInstalled: installed,
    agentsSkipped: skipped,
    citationHook: hook,
    claudeMd: action,
    claudeMdBackedUp: backedUp,
    cursorDir: cursor.cursorDir,
    cursorCommand: cursor.comando,
    cursorAgentsInstalled: cursor.agentes.installed,
    cursorAgentsSkipped: cursor.agentes.skipped,
    cursorCitationHook: cursor.hook,
  };
}
