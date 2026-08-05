#!/usr/bin/env node
// Gerador determinístico de .ics para prazos e atos designados.
//
// POR QUE ISTO EXISTE. O smoke-run de 27/07/2026 do `gestao-prazos-intimacoes`
// reprovou (50) e o achado nº 1 foi este: a régua D-7/D-3/D-1/D-0 existia no
// `prazos.yaml` e **sumia no `.ics`** — nenhum VALARM. O squad agendava datas que
// ninguém seria lembrado de cumprir. A causa-raiz é a mesma do prazo calculado de
// cabeça: formato de contrato escrito à mão pelo modelo. iCalendar tem regra
// (RFC 5545) — DTSTAMP obrigatório, escaping de texto, VALARM com TRIGGER — e
// regra é trabalho de motor.
//
// A divisão continua a de sempre: o AGENTE decide o que agendar e com que
// antecedência; o MOTOR emite o arquivo.
//
// Uso:
//   node gerar-ics.mjs '<json>'  |  echo '<json>' | node gerar-ics.mjs
//
// Entrada:
// {
//   "calendario": "Prazos — rodada 14/08/2026",   // opcional
//   "eventos": [
//     { "uid": "prazo-1", "titulo": "FATAL — Resposta à acusação (Adenor)",
//       "data": "2026-08-24",                      // dia inteiro
//       "descricao": "Proc 0007542-18... | CPP 396",
//       "alarmes_dias": [7, 3, 1, 0],              // régua; [] para nenhum
//       "a_conferir": false },                     // true => marca no título
//     { "uid": "aij", "titulo": "Audiência de instrução",
//       "inicio": "2026-09-22T14:00:00", "fuso_offset": "-03:00",
//       "duracao_min": 120, "alarmes_dias": [7, 1] }
//   ]
// }

import { createHash } from 'node:crypto';

const PRODID = '-//CriminalSquad//agenda-juridica//PT-BR';

// RFC 5545 §3.3.11: barra, ponto-e-vírgula, vírgula e quebra de linha são
// escapados. Sem isto, um número de processo com vírgula quebra o arquivo.
function escapar(texto) {
  return String(texto ?? '')
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

// RFC 5545 §3.1: o limite é de 75 OCTETOS, não de caracteres. Contar caracteres
// estoura em português — "Resposta à acusação" tem acento, travessão e cedilha, e
// cada um pesa 2-3 bytes em UTF-8. Cortar por índice de string também parte par
// surrogate no meio (emoji), gerando caractere inválido. Por isso a dobra
// percorre CODE POINTS e mede em bytes.
function dobrar(linha) {
  const LIMITE = 74; // 75 octetos menos o espaço de continuação
  if (Buffer.byteLength(linha, 'utf8') <= 75) return linha;
  const partes = [];
  let atual = '';
  let bytes = 0;
  let primeira = true;
  for (const cp of linha) { // iterador de string percorre code points, não UTF-16
    const b = Buffer.byteLength(cp, 'utf8');
    const teto = primeira ? 75 : LIMITE;
    if (bytes + b > teto) {
      partes.push(primeira ? atual : ` ${atual}`);
      primeira = false;
      atual = cp;
      bytes = b;
    } else {
      atual += cp;
      bytes += b;
    }
  }
  if (atual) partes.push(primeira ? atual : ` ${atual}`);
  return partes.join('\r\n');
}

// UID precisa ser único no MUNDO, não dentro do arquivo (RFC 5545 §3.8.4.7).
// `prazo-1@criminalsquad` se repetiria em toda varredura semanal e, na
// importação, o evento novo SOBRESCREVERIA o da semana passada — que é de outro
// cliente e outro prazo. Num squad de prazo, agenda que apaga prazo é o dano que
// ele existe para impedir.
//
// O escopo sai do conteúdo do próprio evento: mesma rodada regerada dá o mesmo
// UID (reimportar não duplica), rodada diferente dá UID diferente (não sobrescreve).
function uidUnico(ev, indice, escopoExterno) {
  const base = ev.uid || `evento-${indice + 1}`;
  const semente = escopoExterno || `${base}|${ev.titulo}|${ev.data || ev.inicio || ''}`;
  return `${base}-${createHash('sha256').update(semente).digest('hex').slice(0, 12)}@criminalsquad`;
}

function soData(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  if (!m) throw new Error(`data inválida: ${iso} (use AAAA-MM-DD)`);
  return `${m[1]}${m[2]}${m[3]}`;
}

// Converte horário local + offset para UTC, que é o único formato que importador
// nenhum interpreta errado. Sem offset, recusa — "14h" sem fuso é ambiguidade, e
// audiência agendada uma hora errada é o mesmo dano de prazo perdido.
function paraUtc(inicioLocal, offset) {
  if (!/^[-+]\d{2}:\d{2}$/.test(String(offset || ''))) {
    throw new Error(`evento com hora exige "fuso_offset" no formato -03:00 (recebido: ${offset})`);
  }
  const d = new Date(`${inicioLocal}${offset}`);
  if (Number.isNaN(d.getTime())) throw new Error(`inicio inválido: ${inicioLocal}`);
  return `${d.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`;
}

function alarme(dias, titulo) {
  // TRIGGER negativo = antes do evento. -P0D não existe em RFC 5545; o alarme do
  // próprio dia usa PT0S.
  const trigger = dias === 0 ? '-PT0S' : `-P${dias}D`;
  const quando = dias === 0 ? 'HOJE é o dia fatal' : `faltam ${dias} dia(s)`;
  return [
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `TRIGGER:${trigger}`,
    dobrar(`DESCRIPTION:${escapar(`${quando} — ${titulo}`)}`),
    'END:VALARM',
  ];
}

export function gerarIcs(entrada, agora = new Date(0)) {
  const eventos = Array.isArray(entrada?.eventos) ? entrada.eventos : [];
  if (!eventos.length) throw new Error('informe ao menos um evento em "eventos".');
  const dtstamp = `${agora.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`;

  const linhas = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${PRODID}`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];
  if (entrada.calendario) linhas.push(dobrar(`X-WR-CALNAME:${escapar(entrada.calendario)}`));

  const avisos = [];
  for (const [i, ev] of eventos.entries()) {
    const uid = uidUnico(ev, i, entrada.escopo);
    const titulo = ev.a_conferir ? `[A CONFERIR] ${ev.titulo}` : ev.titulo;
    if (!titulo) throw new Error(`evento ${i + 1} sem "titulo"`);

    linhas.push('BEGIN:VEVENT');
    linhas.push(dobrar(`UID:${escapar(uid)}`));
    linhas.push(`DTSTAMP:${dtstamp}`); // obrigatório na RFC 5545 — faltava no .ics feito à mão
    if (ev.inicio) {
      const ini = paraUtc(ev.inicio, ev.fuso_offset);
      const fim = new Date(new Date(`${ev.inicio}${ev.fuso_offset}`).getTime() + (ev.duracao_min || 60) * 60000);
      linhas.push(`DTSTART:${ini}`);
      linhas.push(`DTEND:${fim.toISOString().replace(/[-:]/g, '').slice(0, 15)}Z`);
    } else {
      linhas.push(`DTSTART;VALUE=DATE:${soData(ev.data)}`);
    }
    // SIGILO NO TÍTULO. O SUMMARY é o que aparece na notificação de tela
    // bloqueada e na agenda compartilhada com a secretaria. Nome do cliente ao
    // lado do ato criminal ali é exposição desnecessária (Provimento 205/2021 e
    // dever de sigilo do EAOAB). O nome vive na DESCRIPTION, que só aparece para
    // quem abre o evento.
    if (ev.cliente && titulo.includes(ev.cliente)) {
      avisos.push(
        `SIGILO: o título do evento "${ev.titulo}" traz o nome do cliente (${ev.cliente}). `
        + 'O SUMMARY aparece em notificação de tela bloqueada e em agenda compartilhada — '
        + 'use iniciais ou o número do processo no título e deixe o nome na descrição.',
      );
    }
    linhas.push(dobrar(`SUMMARY:${escapar(titulo)}`));
    const descricao = [ev.cliente ? `Cliente: ${ev.cliente}` : null, ev.descricao]
      .filter(Boolean).join(' | ');
    if (descricao) linhas.push(dobrar(`DESCRIPTION:${escapar(descricao)}`));

    const regua = Array.isArray(ev.alarmes_dias) ? ev.alarmes_dias : [];
    if (!regua.length) {
      avisos.push(`Evento "${ev.titulo}" saiu SEM alerta antecipado — só a data. Confirme se é intencional.`);
    }
    for (const d of [...new Set(regua)].sort((a, b) => b - a)) linhas.push(...alarme(Number(d), titulo));

    linhas.push('END:VEVENT');
  }
  linhas.push('END:VCALENDAR');
  return { ics: `${linhas.join('\r\n')}\r\n`, eventos: eventos.length, avisos };
}

/* c8 ignore start */
if (import.meta.url === `file://${process.argv[1]}`) {
  const ler = async () => {
    if (process.argv[2]) return process.argv[2];
    let s = '';
    for await (const p of process.stdin) s += p;
    return s;
  };
  ler()
    .then((raw) => {
      const r = gerarIcs(JSON.parse(raw), new Date());
      process.stdout.write(r.ics);
      for (const a of r.avisos) process.stderr.write(`AVISO: ${a}\n`);
    })
    .catch((e) => {
      process.stderr.write(`erro: ${e.message}\n`);
      process.exit(1);
    });
}
/* c8 ignore stop */
