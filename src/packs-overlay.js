// Overlay do conteúdo sincronizado.
//
// O `criminalsquad sync` grava os pacotes assinados da curadoria em
// _criminalsquad/_packs/<pack-id>/ (protegido do `update`). Este módulo é a
// única porta pela qual os indexadores enxergam esse cache: sem ele, o que foi
// baixado fica no disco mas nunca aparece na busca.
// Ver docs/specs/sync-criminal/SPEC.md §5.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { PACKS_DIR, readInstalled } from './sync.js';
import { isSafePackField } from './sync-crypto.js';

/**
 * Pacotes INSTALADOS, em ordem estável de pack_id.
 *
 * A fonte de verdade é o manifesto de instalação (só o `installPack` escreve
 * nele, e só depois de a assinatura conferir). Um diretório solto dentro de
 * `_packs/` — largado à mão, copiado de um pendrive, restaurado de um backup —
 * NÃO é curadoria verificada e por isso não é listado: se fosse, bastaria criar
 * uma pasta para que qualquer conteúdo entrasse no índice como VERIFIED_OFFICIAL.
 * Fail-closed também aqui.
 */
export function listPacks(projectDir) {
  const root = join(projectDir, PACKS_DIR);
  if (!existsSync(root)) return [];
  const installed = readInstalled(projectDir).packs || {};
  return Object.keys(installed)
    .filter(isSafePackField) // manifesto editado à mão não vira travessia de caminho
    .sort((a, b) => a.localeCompare(b))
    .map((packId) => ({
      packId,
      versao: installed[packId]?.versao || 'desconhecida',
      verificadoEm: installed[packId]?.verificado_em || null,
      dir: join(root, packId),
    }))
    .filter((pack) => existsSync(pack.dir));
}

/** Rótulo de procedência exibido no índice: `<pack-id>@<versão>`. */
export function packLabel(pack) {
  return `${pack.packId}@${pack.versao}`;
}

/** Diretório de um tipo de conteúdo dentro do pacote, ou null se não houver. */
export function packContentDir(pack, kind) {
  const dir = join(pack.dir, kind);
  return existsSync(dir) ? dir : null;
}
