---
name: restituicao-coisas-apreendidas
description: >-
  Use ao elaborar pedido ou incidente de restituição de coisas apreendidas (CPP, arts. 118-124) —
  devolução de veículo, celular, dinheiro em espécie, documentos, computadores e equipamentos
  apreendidos em flagrante ou busca e apreensão (CPP 240 e ss.). Gatilhos: restituição de coisas
  apreendidas, restituição de bem apreendido, devolução de veículo/carro/moto/celular/valores,
  incidente de restituição…. Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-restituicao-coisas-apreendidas"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["restituicao-coisas-apreendidas", "restituicao coisas", "coisas apreendidas"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Restituição de Coisas Apreendidas (CPP, arts. 118-124)

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

Esta skill orienta a construção do **pedido de restituição de coisas apreendidas** e do respectivo **incidente em apenso** — a rotina patrimonial mais frequente do escritório criminal: o carro que ficou no pátio, o celular retido para perícia, o dinheiro em espécie apreendido no flagrante, os documentos e equipamentos levados na busca e apreensão. As skills de soltura (ver `liberdade-provisoria-relaxamento`) cuidam da **pessoa**; esta cuida das **coisas**.

> **Lição central:** a restituição se decide por **três perguntas cumulativas** — (1) a coisa **ainda interessa ao processo**? (2) o requerente **provou a propriedade/posse legítima**? (3) a coisa está **sujeita a confisco** (CP, art. 91, II)? Só se restitui quando a resposta é **não / sim / não**. A peça que não enfrenta as três de uma vez volta indeferida.

> **Não confundir os regimes:** coisa **apreendida** (CPP 118-124, via desta skill) ≠ bem **sequestrado/arrestado/hipotecado** (medidas assecuratórias, CPP 125-144 — a via de defesa são os **embargos**, art. 130) ≠ bens sob **regime especial** (tráfico: Lei 11.343/2006, arts. 60-63; lavagem: Lei 9.613/98, art. 4º). Identificar o título da constrição **antes** de redigir.

## O instituto e a base legal

A apreensão (em flagrante ou em busca e apreensão — CPP, art. 240, §1º) retira a coisa do poder do titular **para servir à prova ou para garantir efeitos da condenação**. Cessada a utilidade probatória e afastado o confisco, a retenção perde causa e a devolução é imperativa:

| Dispositivo | O que diz |
|---|---|
| **CPP 118** | Antes do trânsito em julgado, as coisas apreendidas **não podem ser restituídas enquanto interessarem ao processo** — logo, cessado o interesse, podem (e devem) |
| **CPP 119** | Coisas sujeitas a perdimento (hoje, CP 91, II) **não se restituem** nem após o trânsito — **salvo se pertencerem ao lesado ou a terceiro de boa-fé** |
| **CPP 120, *caput*** | Sem dúvida quanto ao direito do reclamante, a restituição pode ser ordenada **pela autoridade policial ou pelo juiz**, mediante termo nos autos |
| **CPP 120, §1º** | Direito duvidoso → **incidente autuado em apartado**, com prazo de **5 dias** para o requerente provar |
| **CPP 120, §2º** | Coisa apreendida **em poder de terceiro de boa-fé** → incidente em apartado, decidido **só pelo juiz**, com contraditório entre reclamante e terceiro |
| **CPP 120, §3º** | **Oitiva do Ministério Público é obrigatória** em todo pedido de restituição |
| **CPP 120, §4º** | Dúvida sobre quem é o verdadeiro dono → juiz **remete as partes ao cível** e deposita a coisa |
| **CPP 120, §5º** | Coisas **facilmente deterioráveis**: avaliação e leilão, ou entrega ao terceiro idôneo mediante termo de responsabilidade |
| **CPP 121** | Coisa **adquirida com os proventos da infração** → segue o destino do art. 133 (não se restitui ao agente) |
| **CPP 122-123** | Destino pós-trânsito: bens com perdimento decretado são alienados (art. 122, com redação do Pacote Anticrime, remetendo ao art. 133); coisas **não reclamadas em 90 dias** do trânsito vão a leilão (**art. 123**) |
| **CPP 124** | Instrumentos ilícitos perdidos em favor da União: inutilização ou museu criminal |
| **CP 91, II** | Confisco como efeito da condenação: **(a)** instrumentos cujo fabrico/uso/porte seja **em si ilícito**; **(b)** produto do crime e proveito auferido — sempre **ressalvado o lesado e o terceiro de boa-fé** |

**Legitimidade:** o próprio investigado/acusado, o **terceiro de boa-fé** (proprietário não envolvido — o caso clássico do veículo emprestado), o lesado, e qualquer pessoa com posse legítima demonstrável. **Momento:** a qualquer tempo — no inquérito, na ação penal e mesmo após o trânsito (observado o prazo do art. 123).

## As duas vias — pedido simples × incidente

| Via | Quando | Quem decide | Forma |
|---|---|---|---|
| **Pedido simples nos autos** | Direito do reclamante **sem dúvida** (documentação inequívoca) e coisa sem interesse ao processo | **Delegado** (na fase de inquérito) ou **juiz**, mediante termo nos autos (CPP 120, *caput*) | Requerimento direto |
| **Incidente de restituição** | Direito **duvidoso**, coisa em poder de **terceiro de boa-fé**, ou negativa da autoridade policial | **Somente o juiz** (CPP 120, §§1º e 2º) | Autuação **em apartado (apenso)**, prazo de 5 dias para prova, oitiva do MP |

> **Estratégia prática:** na fase de inquérito, com documentação sólida, tente primeiro o requerimento **à autoridade policial** — é a via mais rápida. Indeferido ou silente, reitere **ao juízo competente**. Havendo qualquer disputa sobre a titularidade, vá direto ao incidente judicial.

## Requisitos — o tripé da restituição

| # | Requisito | Como demonstrar na peça |
|---|---|---|
| 1 | **A coisa não interessa mais ao processo** (CPP 118) | Perícia **já realizada** (laudo juntado); extração de dados do celular **concluída** (espelhamento); fotografias e descrição nos autos **suprem** a retenção física; bem sem relação com o objeto da prova |
| 2 | **Propriedade/posse legítima demonstrada** (CPP 120) | Veículo: CRLV em nome do requerente; celular/equipamento: nota fiscal, IMEI, caixa; dinheiro: extratos de saque, contabilidade, declaração de IR, natureza da atividade lícita; documentos: identificação civil |
| 3 | **Coisa não sujeita a confisco** (CPP 119; CP 91, II) | Bem de **fabrico/uso lícito** (art. 91, II, *a*, só alcança coisas em si ilícitas); ausência de prova de que seja **produto ou proveito** do crime (II, *b*); condição de **terceiro de boa-fé** (ressalva expressa do art. 91) |

**Atenção ao ônus:** demonstrada a origem lícita pelo requerente, o perdimento exige que a **acusação** prove o vínculo do bem com o crime — a peça deve inverter o foco: não é o cidadão que deve provar que o bem "não é do crime" quando já demonstrou aquisição lícita documentada.

## Teses típicas da prática

- **Perícia concluída = interesse processual cessado.** Juntado o laudo (ou o espelhamento dos dados do celular), a coisa em si nada mais acrescenta à prova — fotografias e o laudo a substituem. Reter o bem físico após a perícia é constrição sem causa.
- **Terceiro de boa-fé (o dono do carro emprestado).** O proprietário não investigado, que demonstra a titularidade e a ausência de ciência do uso ilícito, tem direito à restituição **mesmo em crimes com regime severo de perdimento** — a ressalva ao terceiro de boa-fé é expressa no CP 91 e no CPP 119.
- **Dinheiro de origem lícita comprovada.** Valores em espécie com lastro documental (saques, faturamento de comércio, IR) não se presumem proveito do crime; a quantia deve ser restituída ou, no mínimo, **depositada em conta judicial remunerada** (evita alegação de perecimento).
- **Instrumento de trabalho.** Veículo de motorista de aplicativo, ferramentas de ofício, computador profissional: a retenção prolongada fere a **proporcionalidade** e compromete a subsistência — reforço argumentativo (não substitui o tripé).
- **Deterioração no pátio.** Veículo se degradando a céu aberto: se a restituição imediata for negada, pedir **subsidiariamente** a nomeação do requerente como **fiel depositário** (CPP 120, §§4º e 5º) ou, em último caso, a **alienação antecipada** (CPP 144-A) com depósito do valor — melhor o dinheiro preservado do que a sucata.
- **Documentos pessoais.** Restituíveis mediante **cópia nos autos** — a via original raramente interessa à prova depois de digitalizada.
- **Confisco de veículo usado no crime — cuidado.** Fora dos regimes especiais, o art. 91, II, *a*, só alcança instrumentos **em si ilícitos** — um carro comum não é confiscável apenas por ter sido usado. No **tráfico**, porém, há regime próprio (Lei 11.343/2006, arts. 60-63) e jurisprudência específica do STF/STJ sobre a (des)necessidade de habitualidade: **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar**. Confira a redação atual dos arts. 60-63 (alterados pela Lei 13.840/2019) via agente lei-e-sumula antes de transcrever.
- **Confisco alargado (CP 91-A).** Em crimes com pena máxima superior a 6 anos de reclusão, a acusação pode pedir a perda de bens correspondentes à diferença patrimonial injustificada — se houver esse pedido nos autos, a restituição deve enfrentá-lo especificamente (origem lícita documentada do bem individualizado). Confira o alcance atual do dispositivo via agente lei-e-sumula.

## Estrutura da petição

Pedido dirigido ao **juízo criminal onde tramita o feito** (ou onde tramitou, se já sentenciado); na fase de inquérito sem dúvida sobre o direito, cabe requerimento **à autoridade policial** (CPP 120, *caput*).

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]
[na fase policial, sem dúvida sobre o direito: À AUTORIDADE POLICIAL que
preside o IP nº ..., com fundamento no art. 120, caput, do CPP]

Autos nº [Nº DO PROCESSO/INQUÉRITO]
(Incidente de Restituição de Coisas Apreendidas — autuação em apenso,
art. 120, §1º, do CPP, se houver dúvida a instruir)

[NOME], [nacionalidade, estado civil, profissão, RG, CPF, endereço]
— réu nos autos em epígrafe OU terceiro interessado ESTRANHO aos fatos —,
por seu(sua) advogado(a) (procuração anexa), vem, respeitosamente, requerer a

   RESTITUIÇÃO DE COISAS APREENDIDAS (arts. 118 a 120 do CPP)

pelas razões que passa a expor:

I — DOS FATOS
Data e contexto da apreensão (flagrante/busca e apreensão); AUTO DE
APREENSÃO de fls. [...]; INDIVIDUALIZAÇÃO COMPLETA do bem: veículo
(marca/modelo/placa/chassi/RENAVAM), celular (marca/modelo/IMEI),
valores (quantia exata e forma), documentos/equipamentos (descrição).
Onde o bem se encontra (pátio, cartório, instituição financeira).

II — DO DIREITO
   1. Da cessação do interesse processual (art. 118 do CPP)
      [perícia concluída — laudo de fls.; extração de dados encerrada;
      fotografias e descrição suprem a retenção física do bem].
   2. Da propriedade / posse legítima (art. 120 do CPP)
      [CRLV, nota fiscal, extratos, IR — documentação anexa; se terceiro:
      boa-fé e ausência de vínculo com os fatos].
   3. Da não sujeição a confisco (art. 119 do CPP; art. 91, II, do CP)
      [bem de fabrico/uso lícito; ausência de prova de que constitua
      produto ou proveito do crime; ressalva do terceiro de boa-fé;
      origem lícita documentada dos valores].
   4. Subsidiariamente — do depósito em mãos do requerente
      [nomeação como FIEL DEPOSITÁRIO (art. 120, §§4º e 5º, do CPP),
      ante o risco de deterioração; ou depósito dos valores em conta
      judicial remunerada].

III — DOS PEDIDOS
Ante o exposto, requer-se:
   a) a RESTITUIÇÃO DEFINITIVA do(s) bem(ns) descrito(s), mediante termo
      nos autos, expedindo-se ofício ao [pátio/depósito] para entrega;
   b) subsidiariamente, a nomeação do requerente como FIEL DEPOSITÁRIO
      do bem, mediante termo de compromisso, até decisão definitiva;
   c) [se valores] subsidiariamente, o depósito da quantia em conta
      judicial remunerada;
   d) a oitiva do Ministério Público (art. 120, §3º, do CPP);
   e) a produção de prova complementar da propriedade, se necessário,
      no prazo do art. 120, §1º, do CPP.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia do auto de apreensão (localize-o nos autos com a skill `ocr-autos-pdf` e o agente `resumo-processo`); prova da propriedade (CRLV, nota fiscal com IMEI/série, extratos bancários, declaração de IR, contrato social e faturamento se comerciante); comprovante de residência; se terceiro, prova da ausência de vínculo com os fatos (certidões, comprovante de que não figura no APF/denúncia).

## Erros comuns e pegadinhas

- **Errar a via pela natureza da constrição:** bem **sequestrado** (CPP 125 e ss.) não se ataca por restituição — a via são os **embargos** (CPP 130) ou o pedido de levantamento; conferir nos autos qual decisão constritou o bem antes de escolher o remédio.
- **Endereçamento errado na fase policial:** havendo **qualquer dúvida** sobre o direito, o delegado **não pode** restituir (CPP 120, §1º) — pedido à autoridade policial nesses casos só perde tempo; vá ao juiz.
- **Ignorar o interesse probatório persistente:** pedir devolução de celular **antes** da extração de dados é indeferimento certo. Verifique nos autos se o laudo/espelhamento já foi juntado — e, se não foi, peça **primeiro a realização da perícia em prazo razoável**, com restituição na sequência.
- **Não individualizar o bem:** sem placa/chassi/IMEI/quantia exata e referência às fls. do auto de apreensão, o cartório não expede o ofício de entrega. Individualização é requisito prático, não estilo.
- **Documentação de propriedade frágil:** o incidente dá só **5 dias** para prova (CPP 120, §1º; contagem do CPP 798 — prazo contínuo; Defensoria tem **prazo em dobro**, LC 80/94) — reúna os documentos **antes** de protocolar, não depois. Veículo **financiado** (alienação fiduciária): a propriedade resolúvel é do banco — junte o contrato e demonstre a posse legítima do requerente.
- **Esquecer a oitiva do MP:** a manifestação ministerial é obrigatória (CPP 120, §3º); pedi-la expressamente evita nulidade e retrabalho.
- **Perder o prazo pós-trânsito:** coisas **não reclamadas em 90 dias** contados do trânsito em julgado vão a leilão (CPP 123). Em caso encerrado, a restituição é **urgente** — calendarize.
- **Recurso errado contra o indeferimento:** a decisão que resolve o incidente de restituição tem força de definitiva — o recurso clássico é a **apelação** (CPP 593, II), não o RESE. Para terceiro estranho ao processo, discute-se também o mandado de segurança: **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar**.
- **Aplicar o rito geral a regime especial:** bens apreendidos por **tráfico** (Lei 11.343/2006, arts. 60-63) e **lavagem** (Lei 9.613/98, art. 4º) têm procedimentos, prazos e presunções próprios — a petição pelo rito genérico do CPP 120 tende a ser indeferida por inadequação; confira o regime aplicável via agente lei-e-sumula antes de redigir.
- **Arma de fogo — corrida contra a destruição:** após o laudo pericial, a arma que não mais interessa à persecução é encaminhada ao Comando do Exército para destruição/doação (Lei 10.826/2003, art. 25 — confira a redação atual via agente lei-e-sumula). Quem tem registro regular e quer o bem de volta deve requerer a restituição **antes** desse encaminhamento; arma cujo porte/detenção seja em si ilícito não se restitui (CP 91, II, *a*).
- **Não oferecer alternativa subsidiária:** juiz reticente nega restituição definitiva mas costuma deferir **fiel depositário** — sempre cumule o pedido subsidiário (eventualidade), como nas peças de soltura.

## Checklist antes de protocolar

- [ ] A constrição é **apreensão** (CPP 118-124) — e não sequestro/arresto/hipoteca?
- [ ] Regime especial afastado (tráfico — Lei 11.343; lavagem — Lei 9.613)?
- [ ] Auto de apreensão localizado e citado por fls. (usar `ocr-autos-pdf` + `resumo-processo`)?
- [ ] Bem **individualizado** (placa/chassi/IMEI/quantia exata)?
- [ ] **Interesse processual cessado** demonstrado (laudo pericial/espelhamento juntado)?
- [ ] **Propriedade documentada** (CRLV, NF, extratos, IR) — anexos prontos para o prazo de 5 dias?
- [ ] **Confisco afastado** ponto a ponto (CP 91, II, *a* e *b*; terceiro de boa-fé)?
- [ ] Pedido de **oitiva do MP** incluído (CPP 120, §3º)?
- [ ] **Pedido subsidiário** de fiel depositário / conta judicial formulado?
- [ ] Caso transitado em julgado: dentro dos **90 dias** (CPP 123)?
- [ ] Precedentes citados **verificados** (nada de memória — Citation Gate)?

## Lembretes finais

- **Tripé sempre:** interesse cessado + propriedade provada + confisco afastado — a peça enfrenta os três, na ordem.
- **Duas vias:** sem dúvida → pedido simples (delegado ou juiz); com dúvida ou terceiro → **incidente em apenso**, só o juiz decide.
- **Terceiro de boa-fé é ressalva expressa** do CP 91 e do CPP 119 — tese mais forte do instituto.
- **Perícia concluída** é o gatilho prático da maioria das restituições — verifique o laudo antes de tudo.
- **Subsidiariedade salva a peça:** fiel depositário e conta judicial remunerada como plano B.
- **90 dias pós-trânsito** é prazo fatal prático (leilão) — trate como urgência.
- **Recurso do indeferimento: apelação (CPP 593, II)** — não RESE.
- Toda a entrega é **rascunho para revisão humana**; precedentes só entram verificados.

## Apoie-se em

- **Skill `ocr-autos-pdf`** e **agente `resumo-processo`** — para localizar o auto de apreensão nos autos digitalizados, extrair a individualização dos bens e as fls. de referência.
- **Agente `jurisprudencia-stj-stf`** — para os pontos que exigem precedente atual (confisco de veículo no tráfico e habitualidade; MS de terceiro contra apreensão; restituição de valores com origem lícita).
- **Best-practice `peticao-criminal`** — estrutura, tom e técnica das peças.
- **Best-practice `verificacao-citacoes`** — Citation Gate obrigatório: nenhum julgado citado de memória; o que não for confirmado sai da peça ou recebe [NÃO VERIFICADO].

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
