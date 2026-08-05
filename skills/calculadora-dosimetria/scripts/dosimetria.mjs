#!/usr/bin/env node
// Calculadora de dosimetria trifásica (CP 68) — MOTOR ARITMÉTICO, não jurídico.
// Recebe os quanta discricionários (informados pelo usuário/juiz) e faz a conta
// aplicando as regras estruturais: base de cálculo de cada fase, limites do tipo,
// Súmula 231/STJ (2ª fase não ultrapassa mínimo/máximo). Mostra CADA passo com o
// artigo. NÃO decide quantum de circunstância — isso é discricionariedade motivada.
//
// Uso:  node dosimetria.mjs '<json>'   |   echo '<json>' | node dosimetria.mjs
// Saída: JSON com os passos, penas de cada fase, regime e substituição (rascunho).

// ── Convenção forense de tempo: 1 ano = 12 meses; 1 mês = 30 dias. ──
const MES = 1; // unidade base = mês
function fmt(meses) {
  if (meses < 0) meses = 0;
  const totalDias = Math.round(meses * 30);
  const anos = Math.floor(totalDias / 360);
  const rem = totalDias - anos * 360;
  const m = Math.floor(rem / 30);
  const d = rem - m * 30;
  const partes = [];
  if (anos) partes.push(`${anos} ano${anos > 1 ? 's' : ''}`);
  if (m) partes.push(`${m} ${m > 1 ? 'meses' : 'mês'}`);
  if (d) partes.push(`${d} dia${d > 1 ? 's' : ''}`);
  return partes.length ? partes.join(', ') : '0 dia';
}

// "1/6" → 0.1666..., "1/3" → 0.333..., "0.25" → 0.25
function fracao(f) {
  if (typeof f === 'number') return f;
  const s = String(f).trim();
  if (s.includes('/')) {
    const [a, b] = s.split('/').map(Number);
    if (!b) throw new Error(`fração inválida: ${f}`);
    return a / b;
  }
  const n = Number(s);
  if (Number.isNaN(n)) throw new Error(`fração inválida: ${f}`);
  return n;
}

function calcularDosimetria(input) {
  const avisos = [];
  const passos = [];

  const min = Number(input.pena_min_meses);
  const max = Number(input.pena_max_meses);
  if (!(min > 0) || !(max >= min)) {
    throw new Error('Informe pena_min_meses e pena_max_meses válidos (em meses; máx ≥ mín).');
  }

  // ── FASE 1 — pena-base (art. 59 + 68) ──
  // A base é discricionariedade motivada; o usuário INFORMA a pena-base. A
  // calculadora só valida que ela respeita os limites do tipo.
  const f1 = input.fase1 || {};
  let penaBase;
  if (f1.pena_base_meses != null) {
    penaBase = Number(f1.pena_base_meses);
  } else if (f1.circunstancias_desfavoraveis != null) {
    // Estimativa opcional: parte do mínimo e soma fração por circunstância.
    // Base de cálculo da fração é PONTO CONTROVERSO (intervalo do tipo × fração,
    // aqui adotado) — sinalizado; a fixação real é do juiz.
    const n = Number(f1.circunstancias_desfavoraveis);
    if (!Number.isFinite(n) || n < 0) throw new Error('circunstancias_desfavoraveis inválido (informe um número ≥ 0).');
    const fr = f1.fracao ? fracao(f1.fracao) : 1 / 6;
    penaBase = min + n * fr * (max - min);
    avisos.push(`Fase 1 ESTIMADA: mínimo + ${n}×(${f1.fracao || '1/6'})×(intervalo do tipo). A base de cálculo do acréscimo (intervalo do tipo × sobre a pena mínima) é DIVERGENTE na jurisprudência — confira a linha do seu tribunal. O ideal é informar pena_base_meses.`);
  } else {
    penaBase = min;
    avisos.push('Fase 1: sem dados — adotei a pena mínima como base. Informe pena_base_meses ou circunstancias_desfavoraveis.');
  }
  if (!Number.isFinite(penaBase)) {
    throw new Error('pena-base inválida — informe um número em meses (pena_base_meses) ou circunstancias_desfavoraveis.');
  }
  if (penaBase < min || penaBase > max) {
    throw new Error(`pena-base (${fmt(penaBase)}) fora dos limites do tipo [${fmt(min)} – ${fmt(max)}].`);
  }
  passos.push({ fase: 1, base_legal: 'CP art. 59 e 68', descricao: 'Pena-base', resultado_meses: penaBase, resultado: fmt(penaBase) });

  // ── FASE 2 — agravantes e atenuantes (art. 61-67) ──
  // Incidem sobre a PENA-BASE. Súmula 231/STJ: não podem levar abaixo do mínimo
  // (atenuante) nem acima do máximo (agravante) do tipo. Compensação (ex.: Súm.
  // 545 confissão × reincidência) é juízo — informe o efeito líquido se quiser.
  let penaProvisoria = penaBase;
  for (const c of input.fase2 || []) {
    const fr = fracao(c.fracao ?? '1/6');
    const delta = penaBase * fr; // fração sobre a pena-base (não cumulativa)
    const antes = penaProvisoria;
    if (c.tipo === 'agravante') penaProvisoria += delta;
    else if (c.tipo === 'atenuante') penaProvisoria -= delta;
    else throw new Error(`fase2: tipo deve ser "agravante" ou "atenuante" (recebido: ${c.tipo}).`);
    // Súmula 231 — trava nos limites do tipo na 2ª fase.
    let travado = false;
    if (penaProvisoria < min) { penaProvisoria = min; travado = true; }
    if (penaProvisoria > max) { penaProvisoria = max; travado = true; }
    passos.push({
      fase: 2, base_legal: `CP art. ${c.tipo === 'agravante' ? '61-62' : '65-66'}` + (travado ? ' + Súmula 231/STJ' : ''),
      descricao: `${c.tipo}: ${c.nome || '(não nomeada)'} (${c.fracao ?? '1/6'})`,
      de: fmt(antes), resultado_meses: penaProvisoria, resultado: fmt(penaProvisoria),
      ...(travado ? { nota: 'travada no limite do tipo (Súmula 231/STJ — a 2ª fase não ultrapassa mínimo/máximo)' } : {}),
    });
  }
  if ((input.fase2 || []).length === 0) {
    passos.push({ fase: 2, base_legal: 'CP art. 61-67', descricao: 'Sem agravantes/atenuantes', resultado_meses: penaProvisoria, resultado: fmt(penaProvisoria) });
  }

  // ── FASE 3 — causas de aumento e diminuição (parte especial/geral) ──
  // Incidem sobre a PENA PROVISÓRIA (resultado da 2ª fase), cumulativamente na
  // ordem informada. PODEM ultrapassar mínimo e máximo do tipo (regra pacífica).
  let penaDefinitiva = penaProvisoria;
  for (const c of input.fase3 || []) {
    const fr = fracao(c.fracao);
    const antes = penaDefinitiva;
    if (c.tipo === 'aumento') penaDefinitiva += penaDefinitiva * fr;
    else if (c.tipo === 'diminuicao') penaDefinitiva -= penaDefinitiva * fr;
    else throw new Error(`fase3: tipo deve ser "aumento" ou "diminuicao" (recebido: ${c.tipo}).`);
    passos.push({
      fase: 3, base_legal: 'CP art. 68 (causa de ' + c.tipo + ')',
      descricao: `${c.tipo}: ${c.nome || '(não nomeada)'} (${c.fracao})`,
      de: fmt(antes), resultado_meses: penaDefinitiva, resultado: fmt(penaDefinitiva),
    });
  }
  if ((input.fase3 || []).length === 0) {
    passos.push({ fase: 3, base_legal: 'CP art. 68', descricao: 'Sem causas de aumento/diminuição', resultado_meses: penaDefinitiva, resultado: fmt(penaDefinitiva) });
  }

  // ── Regime inicial (art. 33 §2) — baseline por QUANTIDADE; §3 remete ao art. 59 ──
  const anos = penaDefinitiva / 12;
  const reincidente = !!input.reincidente;
  let regime;
  if (anos > 8) regime = 'fechado';
  else if (anos > 4) regime = reincidente ? 'fechado (reincidência — art. 33 §2 "b"; possível semiaberto por Súmula 269/STJ se favoráveis)' : 'semiaberto';
  else regime = reincidente ? 'semiaberto — reincidente não faz jus ao aberto (art. 33 §2 "c"); Súmula 269/STJ admite o semiaberto (em vez do fechado) se favoráveis as circunstâncias' : 'aberto';
  if (input.crime_hediondo) avisos.push('Crime hediondo/equiparado: regime inicial e progressão têm regras próprias (Lei 8.072/90; art. 112 LEP) — confira.');

  // ── Substituição por restritiva de direitos (art. 44) ──
  const subst = { elegivel: null, requisitos: [] };
  const violencia = !!input.violencia_grave_ameaca;
  const culposo = !!input.culposo;
  if (culposo) {
    // Art. 44, I: no crime CULPOSO a substituição cabe qualquer que seja a pena,
    // e a exigência de não-violência não se aplica (são requisitos do doloso).
    subst.requisitos.push('crime CULPOSO: art. 44 I dispensa o teto de 4 anos e a não-violência (só valem para o doloso)');
    subst.requisitos.push(`não reincidente em crime doloso (art. 44 II; §3 admite exceção): ${reincidente ? 'ATENÇÃO — reincidente' : 'OK'}`);
    subst.requisitos.push('circunstâncias do art. 59 favoráveis (art. 44 III): juízo — confira');
    subst.elegivel = !reincidente;
  } else {
    subst.requisitos.push(`pena ≤ 4 anos (crime doloso): ${anos <= 4 ? 'OK' : 'NÃO (' + fmt(penaDefinitiva) + ')'}`);
    subst.requisitos.push(`doloso sem violência/grave ameaça à pessoa: ${violencia ? 'NÃO' : 'OK (confirme)'}`);
    subst.requisitos.push(`não reincidente em crime doloso (art. 44 II; §3 admite exceção): ${reincidente ? 'ATENÇÃO — reincidente' : 'OK'}`);
    subst.requisitos.push('circunstâncias do art. 59 favoráveis (art. 44 III): juízo — confira');
    subst.elegivel = anos <= 4 && !violencia && !reincidente;
    if (input.culposo === undefined) avisos.push('Substituição (art. 44): checklist assumiu crime DOLOSO. Se for CULPOSO, informe "culposo": true — o teto de 4 anos e a não-violência deixam de se aplicar.');
  }

  return {
    limites_tipo: { min_meses: min, max_meses: max, min: fmt(min), max: fmt(max) },
    pena_base: { meses: penaBase, formatada: fmt(penaBase) },
    pena_provisoria: { meses: penaProvisoria, formatada: fmt(penaProvisoria) },
    pena_definitiva: { meses: penaDefinitiva, formatada: fmt(penaDefinitiva) },
    detracao_meses: Number(input.detracao_meses) || 0,
    pena_a_cumprir_pos_detracao: fmt(penaDefinitiva - (Number(input.detracao_meses) || 0)),
    regime_inicial_sugerido: regime,
    substituicao_art44: subst,
    passos,
    avisos: [
      'RASCUNHO DE CÁLCULO para conferência do(a) advogado(a) — não é decisão. Cada quantum de circunstância é discricionariedade motivada do juiz.',
      'A 2ª fase incide sobre a pena-base (cada agravante/atenuante sobre a base, NÃO sucessiva — há corrente que aplica cumulativamente; confira o padrão do seu tribunal); a 3ª incide sobre a pena provisória. Convenção majoritária.',
      ...avisos,
    ],
  };
}

// ── CLI ──
async function main() {
  let arg = process.argv[2];
  if (!arg && !process.stdin.isTTY) {
    arg = await new Promise((res) => { let d = ''; process.stdin.on('data', (c) => (d += c)); process.stdin.on('end', () => res(d.trim())); });
  }
  if (!arg) {
    console.error('Uso: node dosimetria.mjs \'{"pena_min_meses":48,"pena_max_meses":120,"fase1":{"pena_base_meses":60},"fase2":[...],"fase3":[...]}\'');
    process.exit(2);
  }
  try {
    const out = calcularDosimetria(JSON.parse(arg));
    console.log(JSON.stringify(out, null, 2));
  } catch (e) {
    console.error('Erro: ' + e.message);
    process.exit(1);
  }
}

// roda como CLI só se invocado direto
import { fileURLToPath } from 'node:url';
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

export { calcularDosimetria, fmt, fracao };
