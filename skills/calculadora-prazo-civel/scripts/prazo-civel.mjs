#!/usr/bin/env node
// Motor de datas do prazo processual CÍVEL (CPC) — dias ÚTEIS.
//
// POR QUE EXISTE. O smoke-run de 27/07/2026 do `gestao-prazos-intimacoes` mostrou
// o buraco: numa carteira MISTA (penal + um cível derivado), o único prazo cível
// da rodada saiu contado à mão e foi para a agenda assim. O squad tinha motor
// penal e nenhum motor cível, então toda rodada mista põe uma data de cabeça no
// calendário — e "de cabeça" é o que o framework inteiro existe para impedir.
//
// NÃO É O MOTOR PENAL COM OUTRO PARÂMETRO. São regimes distintos:
//   - penal: contínuo, dias corridos (CPP 798, caput) — só o vencimento é ajustado;
//   - cível: só dias úteis (CPC 219) — CADA feriado no meio empurra o resultado.
// Por isso não dá para "aproximar" um pelo outro: o erro cresce com o prazo.
//
// Regras aplicadas (texto de lei, sem jurisprudência):
//   CPC 219      — na contagem em dias, computam-se somente os DIAS ÚTEIS
//                  (parágrafo único: só prazos processuais).
//   CPC 216      — são feriados forenses os sábados, os domingos e os dias sem
//                  expediente forense.
//   CPC 224      — exclui o dia do começo, inclui o do vencimento.
//     § 2º       — data da publicação = 1º dia útil seguinte à disponibilização
//                  no Diário eletrônico.
//     § 3º       — a contagem começa no 1º dia útil seguinte ao da publicação.
//   CPC 220      — suspende-se o curso do prazo entre 20/12 e 20/01, inclusive.
//
// Uso: node prazo-civel.mjs '<json>'  |  echo '<json>' | node prazo-civel.mjs
//
// Entrada:
// {
//   "prazo_dias": 15,
//   "data_disponibilizacao": "2026-08-12",   // OU "data_publicacao": "2026-08-13"
//   "feriados": ["2026-09-07"],              // nacionais/estaduais/MUNICIPAIS
//   "suspensoes": [["2026-10-01","2026-10-03"]],  // suspensões do tribunal
//   "recesso_cpc_220": true                  // default true
// }

const MS_DIA = 86400000;

function toDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  if (!m) throw new Error(`data inválida: ${iso} (use AAAA-MM-DD)`);
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  if (Number.isNaN(d.getTime())) throw new Error(`data inválida: ${iso}`);
  return d;
}
const iso = (d) => d.toISOString().slice(0, 10);
const addDias = (d, n) => new Date(d.getTime() + n * MS_DIA);

// CPC 220: o recesso é 20/12 a 20/01 INCLUSIVE, e atravessa a virada do ano.
function noRecesso(d) {
  const mes = d.getUTCMonth() + 1;
  const dia = d.getUTCDate();
  return (mes === 12 && dia >= 20) || (mes === 1 && dia <= 20);
}

function emSuspensao(d, suspensoes) {
  return suspensoes.some(([a, b]) => d >= toDate(a) && d <= toDate(b));
}

// CPC 216: sábado e domingo são feriados forenses — por texto expresso, ao
// contrário do penal, onde sábado não está no art. 798.
function ehUtil(d, ctx) {
  const semana = d.getUTCDay();
  if (semana === 0 || semana === 6) return false;
  if (ctx.feriados.has(iso(d))) return false;
  if (ctx.recesso && noRecesso(d)) return false;
  if (emSuspensao(d, ctx.suspensoes)) return false;
  return true;
}

function proximoUtil(d, ctx) {
  let x = d;
  let guarda = 0;
  while (!ehUtil(x, ctx)) {
    x = addDias(x, 1);
    // 400 dias cobre recesso + suspensão longa; além disso é entrada errada,
    // e laço infinito num motor de prazo seria pior que erro de conta.
    if ((guarda += 1) > 400) throw new Error('não foi encontrado dia útil em 400 dias — confira feriados/suspensões');
  }
  return x;
}

/**
 * Prazo de ANTECEDÊNCIA — conta para TRÁS a partir de um ato futuro.
 *
 * Família diferente das duas anteriores. Prazo comum corre PARA FRENTE de um
 * marco passado (a intimação) e pergunta "até quando posso"; prazo de
 * antecedência corre PARA TRÁS de um ato futuro (a sessão) e pergunta "até
 * quando ainda dá". Rodar o motor de ida numa conta de volta devolve uma data
 * DEPOIS do ato — inútil e perigosamente plausível.
 *
 * Caso que motivou: CPP art. 479 — documento não juntado com antecedência
 * mínima de 3 dias úteis não é admitido em plenário. Medido no smoke-run do
 * `tribunal-juri`: o caso-ouro exige essa conta e o squad não tinha motor para
 * ela, então ela sairia à mão.
 *
 * O dia do ato NÃO conta (é o marco); contam-se N dias úteis anteriores a ele.
 */
export function calcularAntecedencia(input) {
  const avisos = [];
  const ctx = {
    feriados: new Set(input.feriados || []),
    suspensoes: Array.isArray(input.suspensoes) ? input.suspensoes : [],
    recesso: input.recesso_cpc_220 !== false,
  };
  const dias = Number(input.dias_uteis_antecedencia);
  if (!(dias > 0)) throw new Error('informe dias_uteis_antecedencia > 0.');
  if (!input.data_do_ato) throw new Error('informe data_do_ato (a sessão/audiência).');

  const ato = toDate(input.data_do_ato);
  let cursor = ato;
  let uteis = 0;
  const pulados = [];
  while (uteis < dias) {
    cursor = addDias(cursor, -1);
    if (ehUtil(cursor, ctx)) uteis += 1;
    else pulados.push(iso(cursor));
  }

  if (!ctx.feriados.size) {
    avisos.push(
      'NENHUM feriado informado. Em contagem por dias úteis, cada feriado dentro da janela '
      + 'ANTECIPA o limite — confira a portaria do tribunal antes de confiar nesta data.',
    );
  }
  avisos.push(
    'Prazo de ANTECEDÊNCIA: esta é a ÚLTIMA data para praticar o ato (juntar/protocolar). '
    + 'Praticar depois dela não atrasa o prazo — inviabiliza o uso.',
  );
  avisos.push('RASCUNHO de conferência — a contagem final é responsabilidade do(a) advogado(a).');
  // O caminho de IDA avisa que este motor é cível; o de VOLTA não avisava, e por
  // isso o JSON entregue saía sem ressalva de regime. Medido no smoke-run do
  // `tribunal-juri`, onde a conta era do CPP art. 479.
  avisos.push(
    'REGIME: este motor aplica as regras de dia útil do CPC (arts. 216 e 219) e, por padrão, '
    + 'o recesso do art. 220. Prazo de antecedência do CPP — como o art. 479 — traz "dias úteis" '
    + 'no próprio texto, mas NÃO está sujeito ao recesso do CPC: passe recesso_cpc_220: false em '
    + 'prazo penal e confirme o calendário do tribunal.',
  );

  return {
    regime: 'ANTECEDENCIA_DIAS_UTEIS',
    // Sem isto não dá para auditar se o feriado municipal entrou na conta — e
    // cada feriado a mais ANTECIPA o limite.
    feriados_informados: [...ctx.feriados].sort(),
    recesso_cpc_220_aplicado: ctx.recesso,
    data_do_ato: iso(ato),
    dias_uteis_exigidos: dias,
    data_limite_para_praticar: iso(cursor),
    dias_nao_uteis_pulados: pulados.length,
    dias_nao_uteis: pulados,
    contagem: 'para trás a partir do ato, contando somente dias úteis; o dia do ato não conta',
    avisos,
  };
}

export function calcularPrazoCivel(input) {
  const avisos = [];
  const ctx = {
    feriados: new Set(input.feriados || []),
    suspensoes: Array.isArray(input.suspensoes) ? input.suspensoes : [],
    recesso: input.recesso_cpc_220 !== false,
  };

  const prazo = Number(input.prazo_dias);
  if (!(prazo > 0)) throw new Error('informe prazo_dias > 0.');

  // Marco: publicação. Se veio a disponibilização, aplica o CPC 224 § 2º.
  let publicacao;
  if (input.data_publicacao) {
    publicacao = toDate(input.data_publicacao);
  } else if (input.data_disponibilizacao) {
    const disp = toDate(input.data_disponibilizacao);
    publicacao = proximoUtil(addDias(disp, 1), ctx);
    avisos.push(
      `Disponibilização em ${iso(disp)} → publicação em ${iso(publicacao)} `
      + '(CPC 224, § 2º: data da publicação é o 1º dia útil seguinte à disponibilização).',
    );
  } else {
    throw new Error('informe data_publicacao ou data_disponibilizacao.');
  }

  // CPC 224, § 3º: a contagem começa no 1º dia útil seguinte ao da publicação.
  const inicio = proximoUtil(addDias(publicacao, 1), ctx);

  // CPC 219: contam-se SOMENTE os dias úteis; o dia do vencimento é o N-ésimo útil.
  let cursor = inicio;
  let uteis = 1;
  const pulados = [];
  while (uteis < prazo) {
    cursor = addDias(cursor, 1);
    if (ehUtil(cursor, ctx)) uteis += 1;
    else pulados.push(iso(cursor));
  }

  const resultado = {
    regime: 'CIVEL',
    fundamento: 'CPC 219 (só dias úteis) + CPC 224 §§ 2º e 3º (marco) + CPC 216 (sábado/domingo são feriados forenses)',
    prazo_dias_uteis: prazo,
    data_publicacao: iso(publicacao),
    inicio_contagem: iso(inicio),
    data_limite: iso(cursor),
    dias_nao_uteis_pulados: pulados.length,
    contagem: 'somente dias úteis (CPC 219), exclui o dia do começo e inclui o do vencimento (CPC 224)',
  };

  // O aviso mais importante deste motor. Em dias corridos, feriado local só
  // importa se cair no vencimento. Em dias ÚTEIS, CADA feriado no meio do prazo
  // empurra a data — e feriado municipal o motor não tem como saber.
  if (!ctx.feriados.size) {
    avisos.push(
      'NENHUM feriado informado. Em contagem por dias úteis, cada feriado nacional, '
      + 'ESTADUAL ou MUNICIPAL dentro do período empurra a data-limite em um dia. '
      + 'Sem a lista do tribunal, esta data é PROVISÓRIA — confira a portaria antes de protocolar.',
    );
  }
  if (ctx.recesso && pulados.some((d) => noRecesso(toDate(d)))) {
    avisos.push('O prazo atravessou o recesso de 20/12 a 20/01 (CPC 220) — dias suspensos não foram contados.');
  }
  avisos.push('RASCUNHO de conferência — a tempestividade final é responsabilidade do(a) advogado(a).');
  avisos.push(
    'Regime CÍVEL. NÃO use este motor para prazo PENAL: lá a contagem é contínua '
    + '(CPP 798, caput) e usar dias úteis ALARGA o prazo indevidamente — erro que perde recurso.',
  );

  if (input.data_protocolo) {
    const prot = toDate(input.data_protocolo);
    resultado.data_protocolo = iso(prot);
    resultado.tempestivo = prot <= cursor;
  }
  resultado.avisos = avisos;
  return resultado;
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
      const input = JSON.parse(raw);
      // Modo escolhido pelo INPUT, nao por flag: quem passa 'data_do_ato' esta
      // perguntando 'ate quando ainda da', nao 'ate quando posso'.
      const r = input.data_do_ato || input.dias_uteis_antecedencia
        ? calcularAntecedencia(input)
        : calcularPrazoCivel(input);
      console.log(JSON.stringify(r, null, 2));
    })
    .catch((e) => {
      process.stderr.write(`erro: ${e.message}\n`);
      process.exit(1);
    });
}
/* c8 ignore stop */
