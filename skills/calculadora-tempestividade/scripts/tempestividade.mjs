#!/usr/bin/env node
// Calculadora de tempestividade recursal penal (CPP 798) — MOTOR de datas.
// Regra penal: prazos CONTÍNUOS (art. 798 CPP — não se interrompem por férias,
// sábado, domingo ou feriado); exclui-se o dia do começo e inclui-se o do
// vencimento (§1); se o vencimento cai em dia não útil, prorroga-se para o
// próximo dia útil (§3). Prazo em dobro para a Defensoria (LC 80/94).
//
// Uso: node tempestividade.mjs '<json>'  |  echo '<json>' | node tempestividade.mjs

// Prazos recursais penais mais comuns (dias). Use `prazo_dias` para sobrepor.
const PRAZOS = {
  apelacao: 5,                 // interposição (razões: +8)
  apelacao_razoes: 8,
  apelacao_jecrim: 10,         // Lei 9.099 (interposição + razões juntas)
  rese: 5,                     // interposição (razões: +2)
  rese_razoes: 2,
  agravo_execucao: 5,          // Súmula 700/STF (prazo do RESE)
  embargos_declaracao: 2,
  embargos_infringentes: 10,
  carta_testemunhavel: 2,      // 48h — ver aviso
  recurso_especial: 15,
  recurso_extraordinario: 15,
  agravo_em_recurso_esp_ext: 15,
  agravo_regimental: 5,        // varia por regimento — confira
};

function toDate(s) {
  const d = new Date(s + 'T00:00:00Z');
  if (Number.isNaN(d.getTime())) throw new Error(`data inválida: ${s} (use AAAA-MM-DD)`);
  return d;
}
function iso(d) { return d.toISOString().slice(0, 10); }
function addDias(d, n) { const x = new Date(d.getTime()); x.setUTCDate(x.getUTCDate() + n); return x; }
function diaSemana(d) { return d.getUTCDay(); } // 0=dom, 6=sáb
function ehUtil(d, feriados) {
  const ds = diaSemana(d);
  if (ds === 0 || ds === 6) return false;
  return !feriados.has(iso(d));
}
function proximoUtil(d, feriados) { let x = d; while (!ehUtil(x, feriados)) x = addDias(x, 1); return x; }

function calcularTempestividade(input) {
  const avisos = [];
  const feriados = new Set(input.feriados || []); // ['2026-01-01', ...]

  let prazo;
  if (input.prazo_dias != null) prazo = Number(input.prazo_dias);
  else if (input.tipo && PRAZOS[input.tipo] != null) prazo = PRAZOS[input.tipo];
  else throw new Error(`informe prazo_dias ou um tipo conhecido (${Object.keys(PRAZOS).join(', ')}).`);
  if (!(prazo > 0)) throw new Error('prazo inválido.');

  if (input.prazo_dobro) { prazo *= 2; avisos.push('Prazo em DOBRO aplicado. Cabe à DEFENSORIA PÚBLICA (LC 80/94, arts. 44 I e 128 I) e a defensores dativos/núcleos de prática jurídica. ATENÇÃO: o MINISTÉRIO PÚBLICO NÃO tem prazo em dobro no processo penal (o art. 180 do CPC é do cível) — não aplique o dobro ao MP.'); }
  if (input.tipo === 'carta_testemunhavel') avisos.push('Carta testemunhável: o prazo do art. 640 CPP é de 48 HORAS, contadas EM HORAS a partir da ciência. A data-limite abaixo é apenas aproximação por 2 dias e NÃO deve ser usada como prazo real.');
  if (input.tipo === 'agravo_regimental') avisos.push('Agravo regimental: 5 dias é o padrão (RISTF art. 317; RISTJ art. 258), mas o prazo VARIA conforme o regimento interno do tribunal — confira.');

  const intimacao = toDate(input.data_intimacao);
  // Intimação em dia não útil: consideram-se feitas/publicadas no 1º dia útil
  // seguinte, de onde então se exclui o dia do começo. Sinaliza a divergência.
  let inicio = intimacao;
  if (!ehUtil(intimacao, feriados)) {
    inicio = proximoUtil(intimacao, feriados);
    avisos.push(`Intimação em dia não útil (${iso(intimacao)}): considerada no 1º dia útil seguinte (${iso(inicio)}) para início da contagem. Sólido para PUBLICAÇÃO em diário; para INTIMAÇÃO PESSOAL/ciência nos autos a premissa é mais frágil — confira o marco.`);
  }

  // Exclui o dia do começo (§1): o prazo termina em inicio + prazo (dias corridos).
  let limite = addDias(inicio, prazo);
  const limiteBruto = iso(limite);
  // Vencimento em dia não útil → prorroga para o próximo útil (§3).
  const prorrogado = !ehUtil(limite, feriados);
  if (prorrogado) limite = proximoUtil(limite, feriados);

  const resultado = {
    tipo: input.tipo || '(prazo_dias)',
    prazo_dias: prazo,
    data_intimacao: iso(intimacao),
    inicio_contagem: iso(inicio),
    data_limite: iso(limite),
    vencimento_bruto: limiteBruto,
    prorrogado_por_dia_nao_util: prorrogado,
    contagem: 'contínua (dias corridos — art. 798 CPP), exclui o dia do começo e inclui o do vencimento',
  };

  if (input.tipo === 'carta_testemunhavel') {
    resultado.prazo_em_horas = '48 horas (art. 640 CPP) — a data_limite acima é apenas aproximação por 2 dias; conte em HORAS a partir da ciência.';
  }

  if (input.data_protocolo) {
    const prot = toDate(input.data_protocolo);
    resultado.data_protocolo = iso(prot);
    resultado.tempestivo = prot <= limite;
    resultado.dias_de_folga = Math.round((limite.getTime() - prot.getTime()) / 86400000);
  }

  resultado.avisos = [
    'RASCUNHO de conferência de prazo — a tempestividade final é responsabilidade do(a) advogado(a).',
    'Processo penal: prazos CORRIDOS (art. 798 CPP), NÃO em dias úteis. A tese de dias úteis é majoritariamente REJEITADA pelo STJ/STF — não conte com ela; protocole por dias corridos.',
    'Confirme a data de intimação real (o marco muda: publicação no DJEN, intimação pessoal, ciência nos autos).',
    ...avisos,
  ];
  return resultado;
}

async function main() {
  let arg = process.argv[2];
  if (!arg && !process.stdin.isTTY) {
    arg = await new Promise((res) => { let d = ''; process.stdin.on('data', (c) => (d += c)); process.stdin.on('end', () => res(d.trim())); });
  }
  if (!arg) {
    console.error('Uso: node tempestividade.mjs \'{"tipo":"apelacao","data_intimacao":"2026-03-02","data_protocolo":"2026-03-06"}\'');
    process.exit(2);
  }
  try {
    console.log(JSON.stringify(calcularTempestividade(JSON.parse(arg)), null, 2));
  } catch (e) {
    console.error('Erro: ' + e.message);
    process.exit(1);
  }
}

import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

export { calcularTempestividade, PRAZOS };
