---
name: execucao-progressao-regime
description: >-
  Use para diagnosticar e preparar pedido de progressão de regime na execução penal. Exige
  classificação documental do fato e do apenado, matriz temporal do art. 112 da LEP, pesquisa
  oficial no mesmo dia, cálculo auditável e revisão humana. Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  engines: ["fraction-date"]
  risk_level: "r4"
  type: "prompt"
  version: "1.1.0"
  categories: [law, criminal, peca, execucao-penal]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-execucao-progressao-regime"]
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["execucao-progressao-regime", "execucao progressao", "progressao regime"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Progressão de Regime (execução penal)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-drafting`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** objetivo, polo, fase e via processual.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** classificar cabimento, competência, prazo e resultado pretendido; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; minuta identificada como rascunho técnico; matriz fato–prova–tese e inventário de fontes; riscos, lacunas, próximos passos e checkpoint humano.
- **Gate:** pedido de assinatura, protocolo ou envio sem aprovação humana. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill organiza o diagnóstico e a minuta de progressão perante o Juízo da
Execução. Toda entrega é hipótese técnica sujeita ao Citation Gate e à revisão
humana obrigatória.

> **GATE P0 DO ART. 112 — CORTE 2026-07-09.** Antes de afirmar inciso,
> percentual, fração, lapso ou data, leia
> `acervo/legislacao/matriz-temporal-art-112-lep.md`, reconsulte no mesmo dia a
> LEP consolidada e os processos oficiais de controle concentrado, e registre
> data/hora, URLs, versão normativa, direito intertemporal, decisões aplicáveis
> e revisor humano. A sucessão das Leis 15.358/2026 e 15.402/2026 impede usar a
> tabela histórica da Lei 13.964/2019 como regra atual. Se faltar qualquer campo,
> responda: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO VERIFICADA`**. Nesse
> estado, não calcule, não projete data e não preencha a minuta com número.

## Resultado permitido

Produza um dos estados:

- `BLOQUEADO`: falta documento, regra temporal, fonte oficial, decisão ou
  revisão humana;
- `DIAGNOSTICO_SUPERVISIONADO`: versões e hipóteses mapeadas, sem conclusão
  numérica;
- `REGRA_APROVADA_POR_HUMANO`: regra individualizada registrada e liberada
  somente para cálculo/revisão naquele caso.

Nunca converta aprovação genérica do operador em validação jurídica da regra.

## Documentos mínimos

1. guia de recolhimento e cálculo atualizado;
2. sentença/acórdão e certidões de trânsito;
3. datas de cada fato e capitulação definitiva;
4. folha de antecedentes e títulos usados para a reincidência;
5. data de prisão, períodos interruptos e detração reconhecida;
6. histórico de regimes, faltas graves e respectivas decisões;
7. atestado de conduta e, se houver, exame criminológico;
8. decisões específicas proferidas na execução.

Documento ausente vira `lacuna_documental`; nunca presuma seu conteúdo.

## Protocolo temporal obrigatório

Copie e preencha o contrato da matriz do acervo. No mínimo, a saída deve conter:

```yaml
verificacao_art_112:
  verificado_em: ""
  fontes_oficiais: []
  data_do_fato: ""
  titulo_e_classificacao: ""
  primariedade_reincidencia: ""
  versoes_comparadas: []
  regra_intertemporal: ""
  adis_reconsultadas: []
  decisoes_especificas: []
  regra_aprovada: ""
  revisor_humano: "PENDENTE"
  status: "BLOQUEADO"
```

Sem `revisor_humano` identificado e justificativa da regra, o status continua
`BLOQUEADO`, mesmo que a redação formal tenha sido encontrada.

## Sequência de análise

### 1. Fixar os fatos documentados

- separar cada condenação e cada data de fato;
- registrar capitulação definitiva, violência/grave ameaça, hediondez ou
  equiparação, resultado morte e demais elementos relevantes;
- documentar primariedade, reincidência e eventual especificidade sem inferir
  pela mera existência de outro processo;
- distinguir pena total, pena cumprida e saldo.

### 2. Mapear as versões normativas

- consultar a publicação original de cada lei potencialmente incidente;
- consultar a LEP consolidada na Presidência e na Câmara;
- comparar os regimes integrais pertinentes, sem montar automaticamente uma
  terceira regra por combinação de trechos;
- classificar o efeito de cada versão como `mais_benefica`, `mais_gravosa`,
  `igual` ou `INDETERMINADO` para o caso concreto.

`INDETERMINADO` bloqueia o cálculo.

### 3. Verificar eficácia e alcance

- conferir as ADIs indicadas na matriz e decisões supervenientes;
- verificar se a execução é uma daquelas alcançadas por decisão específica;
- não generalizar suspensão monocrática proferida em outro processo;
- registrar alcance subjetivo, objetivo e temporal de cada decisão usada.

### 4. Classificar o requisito objetivo

Somente depois dos passos anteriores, apontar o inciso e o valor **candidatos**.
A classificação é uma conclusão jurídica provisória até revisão humana.

### 5. Verificar o requisito subjetivo

Consultar a redação vigente dos parágrafos do art. 112 e o estado atual dos
precedentes sobre conduta e exame criminológico. Não reutilizar, sem pesquisa,
formulações anteriores à Lei 14.843/2024. Faltas graves, PAD e seus efeitos
devem ser individualizados por instituto.

### 6. Calcular somente após liberação

Com regra aprovada e inputs documentados:

```text
lapso = base de cálculo aprovada × valor temporal aprovado
data candidata = data-base aprovada + lapso
```

O cálculo deve registrar unidade, convenção de contagem, arredondamento,
detração, remição, interrupções e hash/versão dos inputs. A ferramenta calcula a
regra fornecida; ela não escolhe a regra jurídica.

Com a regra e aplicabilidade já aprovadas, use `scripts/legal-calculators/fraction-date-engine.mjs`. O motor bloqueia regra pendente, fonte ausente, ajuste sem evidência e parâmetros conflitantes; sua saída continua sujeita à revisão humana.

## Questões correlatas que exigem pesquisa própria

- natureza declaratória da decisão de progressão e definição da data-base;
- efeitos de falta grave e do saldo remanescente;
- progressão especial dos §§ 3º e seguintes;
- reincidência genérica versus específica e eventual lacuna normativa;
- progressão *per saltum*;
- falta de vaga no regime adequado;
- exame criminológico e requisito subjetivo;
- múltiplos fatos sujeitos a versões diferentes.

Qualquer súmula, tema, número de processo ou tese deve ser confirmado em fonte
oficial. Precedentes formados sobre redação anterior são `HISTORICOS` até que
sua compatibilidade com a redação atual seja demonstrada.

## Contrato da minuta

A minuta só pode ser iniciada após `REGRA_APROVADA_POR_HUMANO`. Use:

```text
II — DO DIREITO

a) Regra temporal aplicável
- data do fato: [DATA + documento]
- versões comparadas: [LEIS + URLs oficiais + data de consulta]
- controle de constitucionalidade/decisões específicas: [PROCESSOS + alcance]
- regra escolhida: [INCISO/VALOR]
- justificativa intertemporal aprovada por: [REVISOR HUMANO]

b) Requisito objetivo
- base: [VALOR + origem]
- data-base: [DATA + origem]
- cálculo auditável: [MEMÓRIA]

c) Requisito subjetivo
- documentos e fundamento vigente: [FONTES]
```

É proibido gerar versão “protocolável” com placeholders, regra pendente,
marcador não verificado ou revisor humano ausente.

## Revisão adversarial

O revisor independente deve tentar refutar:

1. a data do fato e a versão escolhida;
2. a classificação do crime e da reincidência;
3. a comparação de benignidade/gravosidade;
4. o alcance das decisões cautelares;
5. a base e a data-base do cálculo;
6. a vigência de cada precedente citado;
7. a presença de requisito subjetivo atual.

Qualquer divergência material gera `REJECT` e retorno ao diagnóstico, nunca
correção silenciosa do número.

## Checklist final

- [ ] Matriz temporal consultada e copiada para a saída?
- [ ] Fontes oficiais reconsultadas no mesmo dia?
- [ ] Data de cada fato ancorada em documento?
- [ ] Versões integrais comparadas e regra intertemporal justificada?
- [ ] ADIs e decisões específicas com alcance registrado?
- [ ] Regra aprovada por criminalista humano identificado?
- [ ] Base, data-base, detração, remição e interrupções auditáveis?
- [ ] Requisito subjetivo verificado na redação vigente?
- [ ] Citation Gate sem pendências?
- [ ] Revisão independente aprovou regra e cálculo?

Falha em qualquer item crítico: **`BLOQUEADO — REGRA TEMPORAL DO ART. 112 NÃO
VERIFICADA`**.

Ao redigir, use também `redacao-persuasiva-criminal`, mas nunca permita que a
redação preencha lacunas jurídicas ou numéricas.
