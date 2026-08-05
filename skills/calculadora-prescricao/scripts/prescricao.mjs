#!/usr/bin/env node
// Calculadora de prescrição penal (CP 109, 110, 115, 116, 117) — MOTOR de datas.
// Dado o prazo do art. 109 (derivado da pena) e os MARCOS interruptivos (art. 117)
// informados, verifica em qual intervalo o prazo se esgotou. Aplica a redução do
// art. 115 (metade) e sinaliza a vedação da retroativa pré-recebimento (Lei
// 12.234/2010). NÃO decide a modalidade nem quais marcos incidem — isso é do
// usuário (a SKILL.md explica); a calculadora faz a conta e mostra cada intervalo.
//
// Uso: node prescricao.mjs '<json>'  |  echo '<json>' | node prescricao.mjs

// pena em anos-decimais para enquadrar no art. 109
function penaEmAnos(p) {
  if (typeof p === 'number') return p; // já em anos
  const anos = Number(p.anos) || 0, meses = Number(p.meses) || 0, dias = Number(p.dias) || 0;
  return anos + meses / 12 + dias / 360;
}

// Prazo prescricional do art. 109 (em anos). fatoPreLei12234: para pena < 1 ano,
// fatos anteriores a 06/05/2010 prescreviam em 2 anos (hoje 3).
function prazoArt109(anosPena, fatoPreLei12234 = false) {
  if (anosPena > 12) return 20;
  if (anosPena > 8) return 16;
  if (anosPena > 4) return 12;
  if (anosPena > 2) return 8;
  if (anosPena >= 1) return 4;
  return fatoPreLei12234 ? 2 : 3; // pena < 1 ano
}

function toDate(s) {
  const d = new Date(s + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) throw new Error(`data inválida: ${s} (use AAAA-MM-DD)`);
  return d;
}
function addMeses(date, meses) {
  const d = new Date(date.getTime());
  const alvoMes = d.getUTCMonth() + meses;
  const alvo = new Date(Date.UTC(d.getUTCFullYear(), alvoMes, d.getUTCDate()));
  // corrige overflow de dia (ex.: 31/jan + 1 mês)
  if (alvo.getUTCDate() !== d.getUTCDate()) alvo.setUTCDate(0);
  return alvo;
}
function addDias(date, dias) { const x = new Date(date.getTime()); x.setUTCDate(x.getUTCDate() + dias); return x; }
function anosEntre(a, b) {
  return (b.getTime() - a.getTime()) / (365.25 * 24 * 3600 * 1000);
}
function idadeEm(nascimento, quando) {
  let idade = quando.getUTCFullYear() - nascimento.getUTCFullYear();
  const m = quando.getUTCMonth() - nascimento.getUTCMonth();
  if (m < 0 || (m === 0 && quando.getUTCDate() < nascimento.getUTCDate())) idade--;
  return idade;
}

function calcularPrescricao(input) {
  const avisos = [];
  const anosPena = penaEmAnos(input.pena);
  if (!(anosPena > 0)) throw new Error('Informe a pena (objeto {anos,meses,dias} ou número em anos).');

  const dataFato = input.data_fato ? toDate(input.data_fato) : null;
  const fatoPreLei = dataFato ? dataFato < toDate('2010-05-06') : false;
  let prazoAnos = prazoArt109(anosPena, fatoPreLei);
  const prazoBase = prazoAnos;

  // Art. 110 — PPE do reincidente: prazo + 1/3.
  if (input.modalidade === 'PPE' && input.reincidente) {
    prazoAnos = prazoAnos * (4 / 3);
    avisos.push(`Art. 110: PPE de reincidente — prazo aumentado de 1/3 (${prazoBase} → ${prazoAnos.toFixed(2)} anos).`);
  }

  // Art. 115 — metade se < 21 no fato ou > 70 na sentença.
  const reducoes = [];
  if (input.reu_data_nascimento && dataFato) {
    const nasc = toDate(input.reu_data_nascimento);
    if (idadeEm(nasc, dataFato) < 21) reducoes.push('menor de 21 na data do fato');
    const dataSent = input.data_sentenca ? toDate(input.data_sentenca) : null;
    if (dataSent) {
      const idadeSent = idadeEm(nasc, dataSent);
      if (idadeSent >= 70) reducoes.push('septuagenário (≥ 70) na data da sentença');
      if (idadeSent === 70) avisos.push('Art. 115: réu com 70 anos completos na sentença — redução aplicada (leitura dominante: basta ser septuagenário). Há corrente que exige "maior de 70" (71+); confira.');
    }
  }
  if (reducoes.length) {
    prazoAnos = prazoAnos / 2;
    avisos.push(`Art. 115: prazo reduzido à METADE (${reducoes.join('; ')}).`);
  }

  // Meses inteiros + dias do resíduo (a PPE +1/3 e a metade do art. 115 geram fração).
  const prazoMesesFloat = prazoAnos * 12;
  const prazoMesesInt = Math.floor(prazoMesesFloat + 1e-9);
  const prazoDiasExtra = Math.round((prazoMesesFloat - prazoMesesInt) * 30);

  // Monta a linha do tempo: data do fato (início da PPP em abstrato) + marcos.
  const marcos = [];
  if (dataFato) marcos.push({ tipo: 'data_fato', data: input.data_fato });
  for (const m of input.marcos || []) marcos.push({ tipo: m.tipo, data: m.data });
  // ponto final: hoje só se explicitamente informado (para não depender de relógio)
  if (input.data_referencia) marcos.push({ tipo: 'data_referencia', data: input.data_referencia });

  marcos.forEach((m) => { m._d = toDate(m.data); });
  for (let i = 1; i < marcos.length; i++) {
    if (marcos[i]._d < marcos[i - 1]._d) throw new Error(`marcos fora de ordem cronológica: ${marcos[i - 1].data} → ${marcos[i].data}`);
  }

  // Verifica cada intervalo entre marcos consecutivos.
  const intervalos = [];
  let prescrito = false;
  for (let i = 1; i < marcos.length; i++) {
    const de = marcos[i - 1], ate = marcos[i];
    // Art. 10 CP: inclui-se o dia do começo → a prescrição consuma-se um dia
    // ANTES da data-espelho (ex.: 4 anos de 01/01/2010 consumam-se em 31/12/2013).
    const consumacao = addDias(addDias(addMeses(de._d, prazoMesesInt), prazoDiasExtra), -1);
    const anos = anosEntre(de._d, ate._d);
    const estourou = ate._d >= consumacao; // marco na data de consumação (ou após) = prescrito
    if (estourou) prescrito = true;
    intervalos.push({
      de: `${de.tipo} (${de.data})`, ate: `${ate.tipo} (${ate.data})`,
      decorrido_anos: Number(anos.toFixed(2)),
      data_consumacao_prescricao: consumacao.toISOString().slice(0, 10),
      prescrito_neste_intervalo: estourou,
    });
    if (estourou) break; // uma vez prescrita, os marcos seguintes são irrelevantes
  }

  // Vedação da retroativa pré-recebimento (Lei 12.234/2010, fatos ≥ 06/05/2010).
  if (input.modalidade === 'PPP_retroativa' && dataFato && !fatoPreLei) {
    avisos.push('CP art. 110, § 1º (red. Lei 12.234/2010): para fatos a partir de 06/05/2010, a prescrição retroativa NÃO pode ter por termo inicial data ANTERIOR à do recebimento da denúncia/queixa. Só conte a retroativa do recebimento em diante.');
  }
  if (input.modalidade === 'PPP_retroativa' && fatoPreLei) {
    avisos.push('Fato anterior a 06/05/2010: a retroativa pode alcançar o período entre o fato e o recebimento (lei mais benéfica).');
  }

  return {
    modalidade: input.modalidade || '(não informada)',
    pena_considerada_anos: Number(anosPena.toFixed(3)),
    prazo_art109_base_anos: prazoBase,
    prazo_aplicavel_anos: Number(prazoAnos.toFixed(3)),
    prazo_aplicavel: `${prazoAnos % 1 === 0 ? prazoAnos : prazoAnos.toFixed(2)} ano(s)`,
    prescrito: prescrito,
    intervalos,
    avisos: [
      'RASCUNHO de triagem — a prescrição definitiva é conferência do(a) advogado(a). Confirme a modalidade e QUAIS marcos do art. 117 incidem no caso.',
      'Cômputo já inclui o dia do começo (CP art. 10): a prescrição consuma-se um dia ANTES da data-espelho. Confira o marco exato (publicação x intimação) na sua comarca.',
      'Marcos interruptivos ZERAM a contagem (recomeça do marco); esta calculadora já trata cada intervalo isoladamente.',
      ...avisos,
    ],
  };
}

async function main() {
  let arg = process.argv[2];
  if (!arg && !process.stdin.isTTY) {
    arg = await new Promise((res) => { let d = ''; process.stdin.on('data', (c) => (d += c)); process.stdin.on('end', () => res(d.trim())); });
  }
  if (!arg) {
    console.error('Uso: node prescricao.mjs \'{"modalidade":"PPP_abstrata","pena":{"anos":4},"data_fato":"2010-01-01","marcos":[{"tipo":"recebimento_denuncia","data":"2019-06-01"}]}\'');
    process.exit(2);
  }
  try {
    console.log(JSON.stringify(calcularPrescricao(JSON.parse(arg)), null, 2));
  } catch (e) {
    console.error('Erro: ' + e.message);
    process.exit(1);
  }
}

import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

export { calcularPrescricao, prazoArt109, penaEmAnos, idadeEm };
