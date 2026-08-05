// Cliente HTTP do sync (SPEC §6.1 e §7).
//
// Princípio que manda aqui: **sincroniza, não serve**. A rede aparece uma vez,
// para trazer bytes; a busca do usuário nunca sai da máquina. E a rede NUNCA é
// autoridade sobre confiança: o servidor só diz *onde* baixar — quem decide se o
// conteúdo entra é a assinatura ed25519, verificada localmente contra a chave
// embarcada. Servidor comprometido não instala nada.
import { hostname, userInfo } from 'node:os';
import { instalacaoId } from './sync-license.js';
import { installPack, readInstalled, verifyCsqpack } from './sync.js';
import { loadPublicKeys } from './sync-crypto.js';

// Servidor da curadoria. Pode ser trocado por CRIMINALSQUAD_SYNC_URL (útil para
// homologar antes de publicar de verdade).
export const ENDPOINT_PADRAO = 'https://sync-production-cdb0.up.railway.app';

// Teto de tempo por FASE, nunca pela operação inteira.
//
// O teto único de 20s cobria headers E corpo. Os pacotes reais têm 3,3 MB
// (skills) e 3,7 MB (acervo): exigia ~180 KB/s SUSTENTADOS para o sync sequer
// terminar — em link doméstico ruim o aluno nunca baixava, e não havia escape.
// Agora: 20s para o servidor RESPONDER, 30s sem receber NENHUM byte durante o
// corpo (um servidor vivo renova o relógio a cada pedaço) e um teto absoluto
// que impede o servidor que goteja de propósito de prender o processo.
const TIMEOUT_PADRAO_MS = 20000;
const TIMEOUT_INATIVIDADE_MS = 30000;
const TIMEOUT_ABSOLUTO_MS = 10 * 60 * 1000;
// Teto de download por pacote: o servidor declara `bytes`, mas um servidor
// comprometido poderia mentir e despejar bytes até encher o disco.
const LIMITE_PACOTE_BYTES = 64 * 1024 * 1024;
// O catálogo é JSON pequeno; um servidor hostil não pode transformá-lo num
// despejo de memória. Teto próprio, bem menor que o de pacote.
const LIMITE_CATALOGO_BYTES = 1 * 1024 * 1024;

// 429/503 são "volte depois", não "seu pacote é inválido". Poucas tentativas:
// insistir muito num servidor sobrecarregado é parte do problema, não da cura.
const STATUS_TRANSITORIO = new Set([429, 503]);
const TENTATIVAS_PADRAO = 3;
const ESPERA_BASE_MS = 1000;
const ESPERA_MAX_MS = 30000;

// Um 3xx é o servidor mandando a máquina do aluno bater em OUTRO lugar. Seguimos
// no máximo isto, e só dentro da mesma origem.
const REDIRECIONAMENTO = new Set([301, 302, 303, 307, 308]);
const MAX_SALTOS = 3;

export function endpointConfigurado(env = process.env) {
  return String(env.CRIMINALSQUAD_SYNC_URL || ENDPOINT_PADRAO).replace(/\/+$/, '');
}

/**
 * Escape de emergência do aluno em link ruim, sem editar código nem esperar
 * release. Vale para headers e, por tabela, para a paciência com o corpo.
 * Devolve `undefined` quando não configurado, para o padrão valer.
 */
export function tempoLimiteConfigurado(env = process.env) {
  const ms = Number(env.CRIMINALSQUAD_SYNC_TIMEOUT_MS);
  return Number.isFinite(ms) && ms > 0 ? ms : undefined;
}

const pausa = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Quanto esperar antes de tentar de novo. O servidor manda (Retry-After, em
 * segundos ou data HTTP); na falta dele, backoff exponencial.
 *
 * O valor do servidor é dado NÃO confiável: um Retry-After de 3 horas — ou uma
 * data no passado — não pode nem prender o sync nem virar espera negativa.
 */
function esperaSugerida(retryAfter, tentativa) {
  const padrao = Math.min(ESPERA_BASE_MS * 2 ** (tentativa - 1), ESPERA_MAX_MS);
  const bruto = typeof retryAfter === 'string' ? retryAfter.trim() : '';
  if (!bruto) return padrao;
  const segundos = Number(bruto);
  const ms = Number.isFinite(segundos) ? segundos * 1000 : Date.parse(bruto) - Date.now();
  if (!Number.isFinite(ms)) return padrao;
  return Math.min(Math.max(ms, 0), ESPERA_MAX_MS);
}

/**
 * Repete só o que é transitório (429/503), e poucas vezes.
 *
 * Mora aqui fora, e não dentro do download, porque o freio do servidor é por IP
 * e o /v1/catalog é o PRIMEIRO a estourá-lo: as duas rotas dividem o mesmo
 * contador de IP com tetos diferentes (60/min no catálogo, 30/min no download).
 * Numa turma atrás de um IP só — escritório, NAT, faculdade — o catálogo levava
 * 429, o sync abortava inteiro e o retry do download nunca chegava a rodar.
 *
 * `tarefa` recebe (tentativa, podeRepetir) e devolve `{ repetir, espera }` para
 * pedir outra volta ou `{ valor }` para encerrar. 401, 403, assinatura inválida
 * e pack_id divergente são veredito: nunca voltam como `repetir`.
 */
async function comRetry(tarefa, { tentativas = TENTATIVAS_PADRAO, esperar = pausa } = {}) {
  for (let tentativa = 1; ; tentativa++) {
    const passo = await tarefa(tentativa, tentativa < tentativas);
    if (!passo?.repetir) return passo?.valor;
    await esperar(passo.espera);
  }
}

/**
 * Lê o corpo por streaming, abortando no primeiro byte que passa do teto.
 *
 * Duas defesas num lugar só, ambas contra servidor hostil:
 * 1. TAMANHO — o teto é conferido enquanto os bytes chegam, não depois de
 *    bufferizar tudo (content-length pode faltar ou mentir).
 * 2. TEMPO — o relógio do `pedir()` continua valendo aqui, mas como teto de
 *    INATIVIDADE: cada pedaço recebido chama `renovar()`. Download longo e
 *    saudável passa; servidor que emudece no meio do corpo morre em 30s em vez
 *    de pendurar o sync para sempre.
 */
async function lerComTeto(resposta, limiteBytes, controle) {
  try {
    const reader = resposta.body?.getReader?.();
    if (!reader) {
      // Sem stream (mock antigo em teste): cai no arrayBuffer com conferência pós.
      const buf = Buffer.from(await resposta.arrayBuffer());
      if (buf.length > limiteBytes) {
        throw new SyncHttpError(`resposta grande demais (${buf.length} bytes)`, { codigo: 'tamanho' });
      }
      return buf;
    }
    const partes = [];
    let total = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      // Chegou byte: o servidor está vivo, o relógio recomeça.
      controle?.renovar?.();
      total += value.length;
      if (total > limiteBytes) {
        controle?.abortar?.();
        throw new SyncHttpError(`resposta grande demais (> ${limiteBytes} bytes)`, { codigo: 'tamanho' });
      }
      partes.push(value);
    }
    return Buffer.concat(partes, total);
  } catch (err) {
    if (err instanceof SyncHttpError) throw err;
    // Se o relógio abortou aqui, o erro chega como AbortError cru e tem de virar
    // 'timeout' classificado — com o motivo real (inatividade ou teto absoluto),
    // que é a diferença entre "seu link caiu" e "o servidor te enrolou".
    if (err?.name === 'AbortError') {
      throw new SyncHttpError(
        controle?.motivo?.() || 'sem resposta (o servidor travou no meio da transferência)',
        { codigo: 'timeout' },
      );
    }
    throw new SyncHttpError(`falha ao ler a resposta (${err.message})`, { codigo: 'rede' });
  }
}

/**
 * A url de download vem do catálogo — que é conteúdo NÃO confiável. Sem esta
 * checagem, um servidor comprometido poderia apontar o cliente para file://,
 * um host interno da rede do aluno ou um IP de metadados de nuvem (SSRF).
 * A url tem de ser https e da MESMA origem do endpoint configurado.
 */
function urlDeDownloadConfiavel(bruta, endpoint) {
  let url;
  let base;
  try {
    url = new URL(bruta);
    base = new URL(endpoint);
  } catch {
    return false;
  }
  if (url.origin !== base.origin) return false;
  // Só https em produção; http liberado apenas quando o próprio endpoint é http
  // (homologação local com CRIMINALSQUAD_SYNC_URL=http://...).
  return url.protocol === 'https:' || (url.protocol === 'http:' && base.protocol === 'http:');
}

/** Erro de rede/servidor — separado de "pacote recusado", que é outra história. */
export class SyncHttpError extends Error {
  constructor(mensagem, { codigo = 'rede', status = null } = {}) {
    super(mensagem);
    this.name = 'SyncHttpError';
    this.codigo = codigo;
    this.status = status;
  }
}

/**
 * Faz o fetch e devolve { resposta, abortar, renovar, motivo }. Quem chama é
 * responsável por consumir o corpo (com lerComTeto) e SÓ ENTÃO deixar o relógio
 * morrer — por isso ele não é limpo aqui: tem de sobreviver à leitura do corpo,
 * senão um servidor que trava depois dos headers penduraria o sync para sempre.
 * A leitura chama `abortar()` no seu próprio finally.
 */
async function pedir(url, {
  timeoutMs = tempoLimiteConfigurado() ?? TIMEOUT_PADRAO_MS,
  // Quem pede mais paciência para os headers está em link ruim e precisa da
  // mesma paciência no corpo — um botão só, em vez de dois que se contradizem.
  inatividadeMs = Math.max(TIMEOUT_INATIVIDADE_MS, timeoutMs),
  tetoAbsolutoMs = TIMEOUT_ABSOLUTO_MS,
  ...init
} = {}) {
  let origem;
  try {
    origem = new URL(url).origin;
  } catch {
    throw new SyncHttpError(`url inválida: ${String(url).slice(0, 60)}`, { codigo: 'rede' });
  }

  const abort = new AbortController();
  let motivo = null;
  const disparar = (m) => () => { motivo = m; abort.abort(); };
  let timer = setTimeout(disparar(`sem resposta em ${Math.round(timeoutMs / 1000)}s`), timeoutMs);
  // O relógio de inatividade é renovado a cada pedaço recebido — sozinho, ele
  // deixaria um servidor que goteja 1 byte por vez segurar o sync para sempre.
  // Este aqui ninguém renova.
  const tetoTimer = setTimeout(
    disparar(`transferência longa demais (passou de ${Math.round(tetoAbsolutoMs / 60000)} min)`),
    tetoAbsolutoMs,
  );
  const pararRelogios = () => { clearTimeout(timer); clearTimeout(tetoTimer); };
  const abortar = () => { pararRelogios(); abort.abort(); };
  // Montado uma vez só: `renovar` roda a cada pedaço do corpo, e um pacote de
  // 3,7 MB tem centenas deles.
  const porInatividade = disparar(
    `sem resposta (o servidor parou de enviar dados por ${Math.round(inatividadeMs / 1000)}s)`,
  );
  const renovar = () => {
    clearTimeout(timer);
    timer = setTimeout(porInatividade, inatividadeMs);
  };

  let alvo = String(url);
  for (let salto = 0; ; salto++) {
    let resposta;
    try {
      // redirect:'manual': seguir sozinho anularia a checagem de origem que o
      // catálogo já passou — um 302 levaria o aluno a qualquer host da rede dele.
      resposta = await fetch(alvo, { ...init, signal: abort.signal, redirect: 'manual' });
    } catch (err) {
      pararRelogios();
      if (err?.name === 'AbortError') {
        throw new SyncHttpError(motivo || `sem resposta em ${Math.round(timeoutMs / 1000)}s`, { codigo: 'timeout' });
      }
      throw new SyncHttpError(`sem conexão com o servidor (${err.message})`, { codigo: 'rede' });
    }

    if (!REDIRECIONAMENTO.has(resposta.status)) {
      // Headers na mão: daqui em diante o relógio é de inatividade, não mais o
      // dos headers — é isto que deixa um download de 3,7 MB terminar.
      renovar();
      return { resposta, abortar, renovar, motivo: () => motivo };
    }

    const destino = resposta.headers.get('location');
    // Sem drenar o 3xx a conexão fica pendurada até o coletor de lixo.
    try { await resposta.body?.cancel(); } catch { /* corpo do 3xx é irrelevante */ }

    let proximo;
    try { proximo = new URL(destino ?? '', alvo); } catch { /* Location ausente ou lixo */ }
    if (!proximo || proximo.origin !== origem) {
      abortar();
      throw new SyncHttpError(
        `o servidor redirecionou para fora da própria origem (${String(destino).slice(0, 80)}) — recusado`,
        { codigo: 'redirecionamento', status: resposta.status },
      );
    }
    if (salto >= MAX_SALTOS) {
      abortar();
      throw new SyncHttpError('o servidor entrou em laço de redirecionamentos', { codigo: 'servidor' });
    }
    alvo = proximo.href;
  }
}

/**
 * GET /v1/catalog — pergunta o que há de novo.
 * Envia o token, o HASH do CPF (nunca o CPF) e um id de instalação derivado de
 * máquina+usuário, que não identifica a pessoa. Ver SPEC §8.
 */
export async function buscarCatalogo({
  endpoint = endpointConfigurado(),
  license,
  instalados = {},
  timeoutMs,
  tentativas = TENTATIVAS_PADRAO,
  esperar = pausa,
} = {}) {
  if (!license?.token) throw new SyncHttpError('licença não ativada', { codigo: 'sem-licenca' });

  const have = Object.entries(instalados)
    .map(([id, p]) => `${id}@${p.versao}`)
    .sort()
    .join(',');
  const url = new URL('/v1/catalog', endpoint);
  url.searchParams.set('token', license.token);
  if (have) url.searchParams.set('have', have);
  if (license.cpf_hash) url.searchParams.set('h', license.cpf_hash);
  url.searchParams.set('i', instalacaoId(hostname(), userInfo().username));

  return comRetry(async (tentativa, podeRepetir) => {
    const controle = await pedir(url, { timeoutMs, headers: { accept: 'application/json' } });
    const { resposta, abortar } = controle;
    try {
      // Veredito antes de tudo: token errado e licença revogada não melhoram
      // com insistência, e repetir os dois é martelar o servidor com credencial
      // que ele já negou.
      if (resposta.status === 401) {
        throw new SyncHttpError('token não reconhecido pelo servidor', { codigo: 'token-invalido', status: 401 });
      }
      if (resposta.status === 403) {
        throw new SyncHttpError('licença revogada', { codigo: 'revogada', status: 403 });
      }
      if (STATUS_TRANSITORIO.has(resposta.status) && podeRepetir) {
        return { repetir: true, espera: esperaSugerida(resposta.headers.get('retry-after'), tentativa) };
      }
      if (!resposta.ok) {
        throw new SyncHttpError(`servidor respondeu ${resposta.status}`, { codigo: 'servidor', status: resposta.status });
      }
      const texto = (await lerComTeto(resposta, LIMITE_CATALOGO_BYTES, controle)).toString('utf8');
      let catalogo;
      try {
        catalogo = JSON.parse(texto);
      } catch {
        throw new SyncHttpError('resposta do servidor não é JSON', { codigo: 'servidor' });
      }
      return { valor: normalizarCatalogo(catalogo) };
    } finally {
      abortar();
    }
  }, { tentativas, esperar });
}

/**
 * O catálogo é dado NÃO confiável. Antes de iterar sobre ele, garantimos a forma:
 * um `packs` não-iterável derrubaria o sync com um TypeError cru em vez de um
 * erro classificado, e um `status` inventado furaria a degradação graciosa.
 */
function normalizarCatalogo(bruto) {
  if (!bruto || typeof bruto !== 'object') {
    throw new SyncHttpError('catálogo em formato inesperado', { codigo: 'servidor' });
  }
  const status = ['ativa', 'vencida', 'revogada'].includes(bruto.status) ? bruto.status : 'ativa';
  const packs = Array.isArray(bruto.packs) ? bruto.packs.filter(
    (p) => p && typeof p.id === 'string' && typeof p.versao === 'string',
  ) : [];
  return {
    status,
    titular: typeof bruto.titular === 'string' ? bruto.titular : null,
    expira_em: /^\d{4}-\d{2}-\d{2}$/.test(bruto.expira_em) ? bruto.expira_em : null,
    packs,
  };
}

/**
 * Baixa um .csqpack com teto de tamanho. Devolve os bytes crus, sem confiar neles.
 *
 * Só 429/503 são repetidos, e poucas vezes: servidor ocupado é estado passageiro.
 * Assinatura inválida, pack_id divergente, 401 e 403 NUNCA chegam aqui como
 * retry — são veredito, e repetir veredito é insistir com um servidor hostil.
 */
export async function baixarPacote(url, {
  timeoutMs,
  inatividadeMs,
  limiteBytes = LIMITE_PACOTE_BYTES,
  tentativas = TENTATIVAS_PADRAO,
  esperar = pausa,
} = {}) {
  return comRetry(async (tentativa, podeRepetir) => {
    const controle = await pedir(url, { timeoutMs, inatividadeMs });
    const { resposta, abortar } = controle;
    try {
      if (STATUS_TRANSITORIO.has(resposta.status)) {
        if (podeRepetir) {
          return { repetir: true, espera: esperaSugerida(resposta.headers.get('retry-after'), tentativa) };
        }
        // O aluno tem de ler "volte depois", não "seu pacote foi recusado" — o
        // pacote pode estar perfeito.
        throw new SyncHttpError(
          `a curadoria está ocupada agora (${resposta.status}) e nada foi baixado`,
          { codigo: 'temporario', status: resposta.status },
        );
      }
      if (!resposta.ok) {
        throw new SyncHttpError(`download falhou (${resposta.status})`, { codigo: 'servidor', status: resposta.status });
      }
      // O content-length é só uma dica: pode faltar (chunked) ou mentir. A
      // verdade é o teto conferido byte a byte enquanto o corpo chega.
      return { valor: await lerComTeto(resposta, limiteBytes, controle) };
    } finally {
      abortar();
    }
  }, { tentativas, esperar });
}

/**
 * O fluxo completo do §7: catálogo → baixa → VERIFICA → só então grava.
 *
 * Degradação graciosa: licença vencida não baixa e não quebra nada — o que está
 * no computador continua funcionando, só desatualizado. Fail-closed: qualquer
 * pacote que não passe na verificação é recusado e nada é escrito por ele.
 */
export async function syncFromServer(projectDir, {
  endpoint = endpointConfigurado(),
  license,
  dryRun = false,
  keys = loadPublicKeys(),
  timeoutMs,
  fetchCatalogo = buscarCatalogo,
  fetchPacote = baixarPacote,
} = {}) {
  const instalados = readInstalled(projectDir).packs || {};
  const catalogo = await fetchCatalogo({ endpoint, license, instalados, timeoutMs });

  const resultado = {
    status: catalogo.status || 'ativa',
    titular: catalogo.titular || null,
    expiraEm: catalogo.expira_em || null,
    instalados: [],
    recusados: [],
    // Separado de `recusados` de propósito: aqui o pacote não foi julgado, só
    // não veio. Misturar os dois fazia o CLI acusar de lixo um pacote que o
    // servidor apenas pediu para buscar mais tarde.
    adiados: [],
    semNovidade: [],
  };

  // 'vencida' vem 200 e sem URLs: o servidor não entrega novidade, mas o cliente
  // não vira tijolo. Quem chama exibe o selo de defasagem.
  if (resultado.status !== 'ativa') return resultado;

  // Robustez mesmo com fetchCatalogo customizado que não passou pela
  // normalização: um `packs` não-iterável não pode virar TypeError cru.
  const listaPacks = Array.isArray(catalogo.packs) ? catalogo.packs : [];
  for (const pack of listaPacks) {
    if (!pack || typeof pack.id !== 'string' || typeof pack.versao !== 'string') continue;
    const atual = instalados[pack.id];
    if (atual && atual.versao === pack.versao) {
      resultado.semNovidade.push(pack.id);
      continue;
    }
    if (dryRun) {
      resultado.instalados.push({ pack_id: pack.id, versao: pack.versao, dryRun: true });
      continue;
    }
    if (!pack.url) {
      resultado.recusados.push({ dir: pack.id, erro: 'catálogo sem url de download' });
      continue;
    }
    if (!urlDeDownloadConfiavel(pack.url, endpoint)) {
      resultado.recusados.push({ dir: pack.id, erro: 'url de download fora da origem do servidor — recusada' });
      continue;
    }

    let bytes;
    try {
      bytes = await fetchPacote(pack.url, { timeoutMs });
    } catch (err) {
      const destino = err?.codigo === 'temporario' ? resultado.adiados : resultado.recusados;
      destino.push({ dir: pack.id, erro: err.message });
      continue;
    }

    const verificado = verifyCsqpack(bytes, keys);
    if (!verificado.ok) {
      resultado.recusados.push({ dir: pack.id, erro: verificado.erro });
      continue; // fail-closed: nada é gravado
    }
    // O catálogo é só uma pista; a assinatura é a autoridade. Mas se o servidor
    // anunciou um pacote e entregou OUTRO, isso é sinal de problema — recusa.
    if (verificado.manifest.pack_id !== pack.id || verificado.manifest.versao !== pack.versao) {
      resultado.recusados.push({
        dir: pack.id,
        erro: `catálogo anunciou ${pack.id}@${pack.versao} mas o pacote é `
          + `${verificado.manifest.pack_id}@${verificado.manifest.versao}`,
      });
      continue;
    }
    resultado.instalados.push(installPack(projectDir, verificado));
  }
  return resultado;
}
