import {
  listInstalled,
  installAgent,
  removeAgent,
  getAgentMeta,
  getLocalizedDescription,
} from './agents.js';
import { createResourceCli } from './resource-cli.js';

export const agentsCli = createResourceCli({
  resource: {
    listInstalled,
    install: installAgent,
    remove: removeAgent,
    getMeta: getAgentMeta,
    getLocalizedDescription,
  },
  i18nPrefix: 'agents',
  header: 'CriminalSquad Agents',
  // Apontava para `criminalsquad/tree/main/agents` — pasta que só tem .gitkeep,
  // num repositório PRIVADO: o aluno recebia 404 e, se tivesse acesso, veria
  // vazio. Os 34 agentes moram no template distribuído, e o repo público é o
  // único que ele consegue abrir.
  browseLine: 'Browse available agents at: '
    + 'https://github.com/bbpropulse/criminalsquad-nucleo/tree/main/templates/ide-templates/claude-code/.claude/agents',
  formatListItem: (meta, desc) => {
    const parts = [meta.name];
    if (meta.icon) parts.unshift(meta.icon);
    if (meta.category) parts.push(`(${meta.category})`);
    parts.push(`- ${desc.split('.')[0]}`);
    return parts.join(' ');
  },
  logResource: 'agent',
  usage: {
    install: '\n  Usage: criminalsquad agents install <id>\n',
    remove: '\n  Usage: criminalsquad agents remove <id>\n',
    updateOne: '\n  Usage: criminalsquad update <name>\n',
  },
});
