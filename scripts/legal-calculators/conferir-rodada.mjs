#!/usr/bin/env node
// Confere os artefatos de uma rodada de prazos e EMITE os números do relatório.
//
// POR QUE EXISTE — a lição que três avaliações seguidas ensinaram.
// O smoke-run do `gestao-prazos-intimacoes` foi julgado três vezes (50, 63, 63) e
// o mesmo defeito reapareceu nas três: **o relatório afirmava o que os artefatos
// desmentiam** — "prazo não agendado" com o evento no `.ics`, "cada um com régua
// D-7/D-3/D-1/D-0" com 3 de 5 sem ela, "2 rascunhos" ao lado de "3" e de 4 blocos
// existentes. A cada rodada a proibição no step-07 ficou mais explícita, e a cada
// rodada o defeito voltou.
//
// O veredito do juiz na terceira: "mais texto proibitivo claramente não o detém,
// pela mesma razão que a data e o `.ics` já saíram da mão do modelo". Contagem é
// aritmética. Aritmética é trabalho de motor — igual à data-limite e ao VALARM.
//
// Ele também FALHA quando o `prazos.yaml` não parseia. Na terceira rodada o
// arquivo tinha aspas duplas aninhadas num escalar (`"… "domingo" …"`) e nenhum
// parser o lia — o que tornava decorativo todo gate a jusante que dizia "ler o
// prazos.yaml". Gate que não consegue ler o arquivo não é gate.
//
// Uso:
//   node conferir-rodada.mjs <prazos.yaml> [prazos.ics] [relatorio.md]
//
// Saída: JSON com `ok`, `fatos` (os números reais) e `divergencias` (o que o
// relatório afirma e o artefato desmente). Sai com código 1 se `ok` for falso.

import { readFileSync, existsSync } from 'node:fs';

// Detecta o escalar quebrado sem precisar de um parser YAML completo: aspas
// duplas não escapadas DENTRO de um escalar entre aspas duplas. É a forma exata
// que quebrou a rodada, e a mesma que já derrubou 15 skills num fork.
function escalaresQuebrados(texto) {
  const ruins = [];
  texto.split('\n').forEach((linha, i) => {
    const m = /^\s*[\w-]+:\s+"(.*)"\s*$/.exec(linha);
    if (!m) return;
    const miolo = m[1];
    if (/(?<!\\)"/.test(miolo)) {
      ruins.push({ linha: i + 1, campo: linha.trim().split(':')[0], motivo: 'aspas duplas aninhadas sem escape' });
    }
  });
  // `chave: valor: outro` em escalar simples também quebra parser estrito.
  // MAS flow mapping (`{ a: 1, b: 2 }`) e flow sequence (`[a, b]`) são YAML
  // válido e legítimo — o `regua_lembretes` do squad usa flow mapping. Excluí-los
  // é a diferença entre um detector e um gerador de ruído.
  texto.split('\n').forEach((linha, i) => {
    const m = /^\s*[\w-]+:\s+([^"'>|#\s][^#]*)$/.exec(linha);
    if (!m) return;
    const valor = m[1].trim();
    if (/^[{[]/.test(valor)) return; // flow mapping/sequence
    if (/:\s/.test(valor)) {
      ruins.push({ linha: i + 1, campo: linha.trim().split(':')[0], motivo: 'escalar simples com ": " no meio — use bloco >- ou aspas' });
    }
  });
  return ruins;
}

function fatosDoYaml(texto) {
  const bloco = (id) => {
    const partes = texto.split(new RegExp(`^\\s*- id: ${id}\\s*$`, 'm'));
    if (partes.length < 2) return '';
    return partes[1].split(/^\s*- id: /m)[0];
  };
  const ids = [...texto.matchAll(/^\s*- id: (\S+)\s*$/gm)].map((m) => m[1]);
  const prazos = ids.map((id) => {
    const b = bloco(id);
    const pega = (campo) => (new RegExp(`^\\s*${campo}:\\s*"?([^"\\n]+)"?`, 'm').exec(b) || [])[1]?.trim();
    return {
      id,
      cliente: pega('cliente'),
      data_fatal: pega('data_fatal'),
      regime: pega('regime'),
      motor_json: pega('motor_json'),
      tem_regua: /regua_lembretes/.test(b),
      tem_avisos: /avisos_do_motor/.test(b),
    };
  });
  return {
    prazos: prazos.length,
    clientes_com_prazo_fatal: [...new Set(prazos.map((p) => p.cliente).filter(Boolean))],
    sem_motor: prazos.filter((p) => !p.motor_json || p.motor_json === 'null').map((p) => p.id),
    sem_regua: prazos.filter((p) => !p.tem_regua).map((p) => p.id),
    sem_avisos_do_motor: prazos.filter((p) => !p.tem_avisos).map((p) => p.id),
    detalhe: prazos,
  };
}

function fatosDoIcs(texto) {
  const conta = (re) => (texto.match(re) || []).length;
  const uids = [...texto.matchAll(/^UID:(.+)$/gm)].map((m) => m[1].trim());
  const eventos = texto.split(/^BEGIN:VEVENT$/m).slice(1);
  return {
    eventos: conta(/^BEGIN:VEVENT$/gm),
    alarmes: conta(/^BEGIN:VALARM$/gm),
    com_d7: conta(/^TRIGGER:-P7D$/gm),
    uids_unicos: new Set(uids).size,
    uids_repetidos: uids.length - new Set(uids).size,
    sem_dtstamp: eventos.filter((e) => !/^DTSTAMP:/m.test(e)).length,
    sem_alarme: eventos.filter((e) => !/BEGIN:VALARM/.test(e)).length,
    linhas_acima_de_75_octetos: texto.split('\r\n').filter((l) => Buffer.byteLength(l, 'utf8') > 75).length,
  };
}

// O relatório afirma números. Aqui eles são confrontados com os fatos.
function divergenciasDoRelatorio(texto, fatos) {
  const out = [];
  const afirma = (re) => { const m = re.exec(texto); return m ? Number(m[1]) : null; };

  const eventosAfirmados = afirma(/\*\*(\d+)\s+eventos?\*\*/i);
  if (eventosAfirmados != null && eventosAfirmados !== fatos.ics.eventos) {
    out.push({ afirma: `${eventosAfirmados} eventos`, real: `${fatos.ics.eventos} no .ics` });
  }
  const alarmesAfirmados = afirma(/\*\*(\d+)\s+alarmes?\*\*/i);
  if (alarmesAfirmados != null && alarmesAfirmados !== fatos.ics.alarmes) {
    out.push({ afirma: `${alarmesAfirmados} alarmes`, real: `${fatos.ics.alarmes} no .ics` });
  }
  const rascunhosAfirmados = afirma(/\*\*(\d+)\s+rascunhos?\*\*/i);
  const rascunhosReais = (texto.match(/^### Cliente —/gm) || []).length;
  if (rascunhosAfirmados != null && rascunhosAfirmados !== rascunhosReais) {
    out.push({ afirma: `${rascunhosAfirmados} rascunhos`, real: `${rascunhosReais} blocos "### Cliente —"` });
  }
  // Cobertura: todo cliente com prazo fatal precisa de rascunho (ou omissão declarada).
  const faltando = fatos.yaml.clientes_com_prazo_fatal.filter((c) => !texto.includes(c));
  if (faltando.length) {
    out.push({ afirma: 'comunicação completa', real: `sem menção a: ${faltando.join(', ')}` });
  }
  if (/todos? os \d+ com a régua|alerta D-7\/D-3\/D-1\/D-0 em cada um/i.test(texto)
      && fatos.ics.com_d7 !== fatos.ics.eventos) {
    out.push({ afirma: 'régua completa em todos', real: `${fatos.ics.com_d7} de ${fatos.ics.eventos} têm D-7` });
  }
  return out;
}

export function conferirRodada({ yamlPath, icsPath, relatorioPath }) {
  const yamlTexto = readFileSync(yamlPath, 'utf8');
  const quebrados = escalaresQuebrados(yamlTexto);

  // FAIL-CLOSED: se o YAML não é legível, nada a jusante vale. Não seguir.
  if (quebrados.length) {
    return {
      ok: false,
      bloqueio: 'prazos.yaml não é parseável — todo gate que diz "ler o prazos.yaml" seria decorativo',
      escalares_quebrados: quebrados,
    };
  }

  const fatos = { yaml: fatosDoYaml(yamlTexto), ics: null };
  if (icsPath && existsSync(icsPath)) fatos.ics = fatosDoIcs(readFileSync(icsPath, 'utf8'));

  const problemas = [];
  if (fatos.yaml.sem_motor.length) problemas.push(`prazo(s) sem memória do motor: ${fatos.yaml.sem_motor.join(', ')}`);
  if (fatos.yaml.sem_regua.length) problemas.push(`prazo(s) sem régua de lembretes: ${fatos.yaml.sem_regua.join(', ')}`);
  if (fatos.yaml.sem_avisos_do_motor.length) problemas.push(`prazo(s) sem os avisos do motor transcritos: ${fatos.yaml.sem_avisos_do_motor.join(', ')}`);
  if (fatos.ics) {
    if (fatos.ics.uids_repetidos) problemas.push(`${fatos.ics.uids_repetidos} UID(s) repetido(s) no .ics — importação sobrescreve evento`);
    if (fatos.ics.sem_dtstamp) problemas.push(`${fatos.ics.sem_dtstamp} evento(s) sem DTSTAMP (RFC 5545)`);
    if (fatos.ics.sem_alarme) problemas.push(`${fatos.ics.sem_alarme} evento(s) sem nenhum alerta — data na agenda que ninguém será lembrado de cumprir`);
    if (fatos.ics.linhas_acima_de_75_octetos) problemas.push(`${fatos.ics.linhas_acima_de_75_octetos} linha(s) acima de 75 octetos (RFC 5545 § 3.1)`);
  }

  let divergencias = [];
  if (relatorioPath && existsSync(relatorioPath)) {
    divergencias = divergenciasDoRelatorio(readFileSync(relatorioPath, 'utf8'), fatos);
  }

  return {
    ok: !problemas.length && !divergencias.length,
    fatos,
    problemas,
    divergencias,
    resumo_para_o_relatorio: fatos.ics ? {
      eventos: fatos.ics.eventos,
      alarmes: fatos.ics.alarmes,
      eventos_com_d7: fatos.ics.com_d7,
      prazos: fatos.yaml.prazos,
      clientes_com_prazo_fatal: fatos.yaml.clientes_com_prazo_fatal.length,
    } : null,
  };
}

/* c8 ignore start */
if (import.meta.url === `file://${process.argv[1]}`) {
  const [yamlPath, icsPath, relatorioPath] = process.argv.slice(2);
  if (!yamlPath) {
    process.stderr.write('uso: node conferir-rodada.mjs <prazos.yaml> [prazos.ics] [relatorio.md]\n');
    process.exit(2);
  }
  const r = conferirRodada({ yamlPath, icsPath, relatorioPath });
  console.log(JSON.stringify(r, null, 2));
  process.exit(r.ok ? 0 : 1);
}
/* c8 ignore stop */
