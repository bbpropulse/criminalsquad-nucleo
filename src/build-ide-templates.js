import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { realpathSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ASSETS_DIR = join(ROOT, 'templates', 'ide-assets');
const IDE = 'templates/ide-templates';

// Single source of truth: each shared body lives once in templates/ide-assets/.
// The files below carry that body, each wrapped in its own per-IDE frontmatter
// (which is legitimately IDE-specific and stays in the file). Paths are relative
// to the repo root, so this also covers the repo's OWN copies (the CriminalSquad
// repo functioning as a project). Editing a body asset + `npm run build:ide`
// propagates the change everywhere — replacing the old hand-maintained mirroring.
// Claude Code e Cursor. O corte anterior era Claude-only porque a orquestração
// depende de subagente em contexto isolado, hook determinístico e skill — e o
// Cursor não tinha nenhum dos três. O Cursor 2.4 passou a ter os três
// (`.cursor/agents/` com janela própria, `.cursor/hooks.json` com `preToolUse`
// que nega por exit 2, e `SKILL.md`), então a premissa caiu. As demais IDEs
// seguem de fora pelo mesmo critério de antes: sem subagente não há orquestração.
const MANIFEST = {
  'command-body.md': [
    `${IDE}/claude-code/.claude/skills/criminalsquad/SKILL.md`,
    `${IDE}/cursor/.cursor/commands/criminalsquad.md`,
    '.claude/skills/criminalsquad/SKILL.md', // cópia do próprio repo
  ],
  'instructions-body.md': [
    `${IDE}/claude-code/CLAUDE.md`,
    `${IDE}/cursor/.cursor/rules/criminalsquad.mdc`,
    'CLAUDE.md', // cópia do próprio repo
  ],
};

// CRLF-tolerant: a target edited on Windows (or git autocrlf) must not silently
// lose its IDE-specific frontmatter when the generator runs.
const FRONTMATTER_RE = /^(---\r?\n[\s\S]*?\r?\n---)\r?\n/;

// Reassembles a target file: preserve its existing frontmatter (if any) and use
// the shared body. Frontmatter + blank line + body, or just the body.
function render(currentContent, body) {
  const match = currentContent.match(FRONTMATTER_RE);
  return match ? `${match[1]}\n\n${body}` : body;
}

// Regenerates the IDE template bodies from templates/ide-assets/. With
// { check: true } nothing is written — it returns the files that are out of sync
// (used by tests/CI). Returns the list of changed (or would-be-changed) files.
export async function buildIdeTemplates({ check = false } = {}) {
  const changed = [];
  for (const [asset, files] of Object.entries(MANIFEST)) {
    const body = await readFile(join(ASSETS_DIR, asset), 'utf-8');
    for (const rel of files) {
      const path = join(ROOT, rel);
      const current = await readFile(path, 'utf-8');
      const next = render(current, body);
      if (next !== current) {
        changed.push(rel);
        if (!check) await writeFile(path, next, 'utf-8');
      }
    }
  }
  return changed;
}

// Os subagentes do Cursor são GERADOS a partir de `.claude/agents/` — fonte única.
// Manter 34 agentes em duas pastas à mão é garantir que uma delas envelhece: foi
// exatamente assim que o `verificador-citacoes` ficou com o gate cego só na cópia
// distribuída, enquanto a local já estava certa.
//
// A tradução tem UM ponto que não é mecânico. O Cursor não tem campo `tools:` —
// subagente herda as ferramentas do pai. A granularidade vira o booleano
// `readonly`, que preserva a garantia que de fato importa nos agentes de auditoria
// (auditam, nunca escrevem), mas não reproduz a lista fina. Onde a lista do Claude
// não tem nenhuma ferramenta de escrita, o agente sai `readonly: true`.
const FERRAMENTAS_DE_ESCRITA = /\b(Write|Edit|MultiEdit|NotebookEdit|Bash)\b/;
const CLAUDE_AGENTS = join(ROOT, '.claude', 'agents');
const CURSOR_AGENTS = join(ROOT, IDE, 'cursor', '.cursor', 'agents');

function paraFrontmatterDoCursor(texto) {
  const m = texto.match(FRONTMATTER_RE);
  if (!m) return null;
  const corpo = texto.slice(m[0].length);
  const linhas = m[1].replace(/^---\r?\n|\r?\n---$/g, '').split(/\r?\n/);

  const campos = [];
  let somenteLeitura = false;
  for (const linha of linhas) {
    const tools = /^tools:\s*(.*)$/.exec(linha);
    if (tools) { somenteLeitura = !FERRAMENTAS_DE_ESCRITA.test(tools[1]); continue; }
    // `name`, `description` e `model` têm o mesmo significado nas duas IDEs.
    if (/^(name|description|model):/.test(linha) || /^\s{2,}/.test(linha)) campos.push(linha);
  }
  if (somenteLeitura) campos.push('readonly: true');
  return `---\n${campos.join('\n')}\n---\n\n${corpo.replace(/^\n+/, '')}`;
}

export async function buildCursorAgents({ check = false } = {}) {
  const mudados = [];
  let nomes;
  try { nomes = (await readdir(CLAUDE_AGENTS)).filter((n) => n.endsWith('.md')); } catch { return mudados; }
  if (!check) await mkdir(CURSOR_AGENTS, { recursive: true });

  for (const nome of nomes) {
    const origem = await readFile(join(CLAUDE_AGENTS, nome), 'utf-8');
    const convertido = paraFrontmatterDoCursor(origem);
    if (!convertido) continue;
    const destino = join(CURSOR_AGENTS, nome);
    let atual = '';
    try { atual = await readFile(destino, 'utf-8'); } catch { /* ainda não existe */ }
    if (atual === convertido) continue;
    mudados.push(`${IDE}/cursor/.cursor/agents/${nome}`);
    if (!check) await writeFile(destino, convertido, 'utf-8');
  }
  return mudados;
}

// Run directly: `node src/build-ide-templates.js`
const isMain = process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const changed = [...await buildIdeTemplates(), ...await buildCursorAgents()];
  console.log(
    changed.length
      ? `IDE templates atualizados (${changed.length}):\n  ${changed.join('\n  ')}`
      : 'IDE templates já estão em sincronia com templates/ide-assets/.'
  );
}
