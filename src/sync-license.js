// Licença do sync: token opaco (credencial) + marca de titularidade (inibidor de
// compartilhamento).
//
// Decisão de projeto (ver docs/specs/sync-criminal/SPEC.md §3): a CREDENCIAL é um
// token aleatório e revogável — nunca dado pessoal. O nome e o CPF entram só como
// MARCA VISÍVEL ("Licenciado para: BRUN0 C0UT1NH0 — CPF ***.789.***-**"), que é o
// que inibe o repasse. O CPF em claro é usado uma vez para calcular o hash e a
// máscara, e então DESCARTADO — nunca é gravado nem trafega.
import { createHash } from 'node:crypto';
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';

// Crockford base32 sem I, L, O, U (elimina ambiguidade na digitação).
export const TOKEN_RE = /^CSQ-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/;

export function isValidToken(token) {
  return TOKEN_RE.test(String(token || '').trim().toUpperCase());
}

export function normalizeToken(token) {
  return String(token || '').trim().toUpperCase();
}

/** Codinome do titular: maiúsculas com O→0 e I→1 (marca visível, não é credencial). */
export function codinome(nome) {
  return String(nome || '')
    .trim()
    .replace(/\s+/g, ' ')
    .toUpperCase()
    .replaceAll('O', '0')
    .replaceAll('I', '1');
}

export function onlyDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

/** Valida CPF pelos dígitos verificadores (evita erro de digitação na ativação). */
export function isValidCpf(cpf) {
  const d = onlyDigits(cpf);
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) return false;
  const check = (len) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(d[i]) * (len + 1 - i);
    const rest = (sum * 10) % 11;
    return (rest === 10 ? 0 : rest) === Number(d[len]);
  };
  return check(9) && check(10);
}

/** Máscara para exibição — mostra só o bloco do meio. */
export function cpfMask(cpf) {
  const d = onlyDigits(cpf);
  if (d.length !== 11) return '***.***.***-**';
  return `***.${d.slice(3, 6)}.***-**`;
}

/** Hash do CPF — é isto (e só isto) que o servidor recebe. */
export function cpfHash(cpf) {
  return 'sha256:' + createHash('sha256').update(onlyDigits(cpf)).digest('hex');
}

/** Identificador de instalação (para detectar compartilhamento) — não identifica a pessoa. */
export function instalacaoId(hostname, user) {
  return createHash('sha256').update(`${hostname || ''}|${user || ''}`).digest('hex').slice(0, 16);
}

export function licensePath(home = homedir()) {
  return join(home, '.config', 'criminalsquad', 'license.json');
}

/**
 * Monta o registro de licença a partir do token + dados do titular.
 * O CPF em claro entra aqui e NÃO sai: viram só máscara e hash.
 */
export function buildLicense({ token, nome, cpf, ativadoEm }) {
  const t = normalizeToken(token);
  if (!isValidToken(t)) throw new Error('Token inválido. Formato esperado: CSQ-XXXX-XXXX-XXXX');
  if (!String(nome || '').trim()) throw new Error('Informe o nome completo do titular.');
  if (!isValidCpf(cpf)) throw new Error('CPF inválido.');
  return {
    token: t,
    titular: String(nome).trim().replace(/\s+/g, ' '),
    codinome: codinome(nome),
    cpf_mascara: cpfMask(cpf),
    cpf_hash: cpfHash(cpf),
    ativado_em: ativadoEm || new Date().toISOString(),
  };
}

export function readLicense(home = homedir()) {
  try {
    return JSON.parse(readFileSync(licensePath(home), 'utf8'));
  } catch {
    return null;
  }
}

export function writeLicense(license, home = homedir()) {
  const path = licensePath(home);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(license, null, 2) + '\n', 'utf8');
  try {
    chmodSync(path, 0o600); // só o dono lê: a licença carrega o hash do CPF
  } catch { /* best-effort */ }
  return path;
}

/** A marca que aparece no CLI e no rodapé das saídas. */
export function selo(license) {
  if (!license) return null;
  return `Licenciado para: ${license.codinome} — CPF ${license.cpf_mascara}`;
}
