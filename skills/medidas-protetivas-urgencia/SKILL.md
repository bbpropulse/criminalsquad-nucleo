---
name: medidas-protetivas-urgencia
description: >-
  Use ao elaborar requerimento de MEDIDAS PROTETIVAS DE URGÊNCIA da Lei Maria da Penha (Lei
  11.340/2006, arts. 18 a 24) pelo polo da vítima/assistente — pedido liminar de afastamento do lar,
  proibição de aproximação e contato, suspensão de armas, medidas patrimoniais,
  prorrogação/manutenção e reação ao descumprimento (art. 24-A). Gatilhos: medida protetiva, medidas
  protetivas de urgência, MPU, Lei Maria da Penha, Lei 11.340… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-medidas-protetivas-urgencia"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["medidas-protetivas-urgencia", "medidas protetivas", "protetivas urgencia"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Medidas Protetivas de Urgência (Lei 11.340/2006 — polo da vítima)

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

Esta skill orienta a construção do **requerimento de medidas protetivas de urgência** da Lei Maria da Penha e da atuação subsequente pelo **polo da vítima/assistente**: escolha das medidas do rol legal, demonstração do risco, pedido liminar em 48h, prorrogação/manutenção e reação ao descumprimento. A camada de teses do nicho (incidência da lei, prova, dosimetria) está na best-practice `defesa-violencia-domestica` — aqui está a **peça e o procedimento**, que a BP não cobre.

> **Lição central (Lei 14.550/2023):** as medidas protetivas têm **natureza autônoma** de tutela inibitória. São deferíveis **independentemente de boletim de ocorrência, inquérito, ação penal ou cível e até da tipificação penal da conduta** (art. 19, §5º), em **cognição sumária a partir da palavra da ofendida** (art. 19, §4º), e **vigoram enquanto persistir o risco** (art. 19, §6º). Condicionar o pedido a BO ou a processo é o erro que mais mutila a proteção.

> **Regra de ouro da peça:** protetiva não se pede em abstrato. Individualize **quais** medidas, **contra quem**, **com que parâmetros** (metros de distância, meios de contato vedados, bens atingidos) e **por qual risco concreto** — é isso que o juiz defere em 48h.

## Instituto e base legal

| Ponto | Regra | Base legal |
|---|---|---|
| **Natureza** | Tutela inibitória **autônoma** — não acessória de processo penal | Art. 19, §§4º a 6º; art. 40-A (Lei 14.550/2023) |
| **Legitimidade** | Ofendida (**dispensado advogado** neste pedido), MP, ou via autoridade policial | Arts. 19, *caput*, 27 (parte final) e 12, III |
| **Duas portas de entrada** | (a) pedido registrado **na delegacia** → expediente apartado ao juiz em **48h**; (b) **petição direta** do advogado/DP ao juízo | Art. 12, III; art. 19 |
| **Prazo de decisão** | Juiz decide em **48 horas**, podendo deferir **liminarmente, sem ouvir as partes nem o MP** | Arts. 18 e 19, §1º |
| **Afastamento imediato** | Em risco atual/iminente à vida ou integridade, o afastamento do lar pode ser determinado **pelo delegado** (município não sede de comarca) ou **pelo policial** (sem delegado disponível), com comunicação ao juiz em **24h** | Art. 12-C |
| **Cumulação e revisão** | Medidas aplicáveis isolada ou **cumulativamente**, substituíveis e ampliáveis a qualquer tempo | Art. 19, §§2º e 3º |
| **Juízo competente** | Juizado de Violência Doméstica e Familiar contra a Mulher (JVDFM); onde não houver, a vara criminal com competência da lei | Arts. 14 e 33 |
| **Descumprimento** | Crime do **art. 24-A** + prisão preventiva para **garantir a execução das protetivas** | Art. 24-A; CPP, art. 313, III; art. 20 |

> **Cautela de redação legislativa:** o art. 12-B teve dispositivos vetados e os arts. 19/40-A foram reescritos por leis recentes (14.550/2023); a pena do art. 24-A foi alterada por lei posterior (Lei 14.994/2024) e o rol do art. 23 ganhou incisos novos (ex.: auxílio-aluguel — Lei 14.674/2023). **Confira a redação vigente de cada dispositivo via agente `lei-e-sumula` antes de citar.**

## Cabimento — o que demonstrar

1. **Âmbito da Lei 11.340** (art. 5º): violência doméstica, familiar ou em relação íntima de afeto contra mulher. **Dispensa coabitação** (Súmula 600/STJ) e o agressor pode ser homem ou mulher. Após o art. 40-A (Lei 14.550/2023), a lei se aplica "independentemente da causa ou da motivação dos atos" — o alcance exato dessa cláusula frente à exigência clássica de motivação de gênero é ponto em construção: **pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até confirmar.
2. **Forma de violência** (art. 7º): física, **psicológica** (cf. art. 147-B CP), sexual, patrimonial ou moral — protetiva não exige lesão física.
3. **Risco atual ou iminente**: é o coração do pedido. Materialize com BO **se houver** (não é requisito), laudos/prontuários, prints de mensagens e redes, gravações, testemunhas, histórico de ocorrências e o **Formulário Nacional de Avaliação de Risco — FONAR** (Lei 14.149/2021), preenchido na delegacia ou juntado pela parte.
4. **Standard probatório**: cognição sumária — basta a **palavra da ofendida** verossímil (art. 19, §4º), que na violência doméstica tem **especial relevância** dada a clandestinidade do lar (ficha VDO-A02 do acervo). O indeferimento exige avaliação fundamentada de **inexistência de risco**.

## Rol de medidas — escolha cirúrgica

### Que obrigam o agressor (art. 22)

| Inciso | Medida | Como pedir bem |
|---|---|---|
| I | Suspensão da posse / restrição do porte de **armas** | Cumule com a **apreensão imediata** (art. 18, IV); se o agressor for agente de segurança, peça comunicação ao órgão/corporação de vínculo (art. 22, §2º) |
| II | **Afastamento do lar** ou local de convivência | Indique o endereço; peça acompanhamento policial para retirada de pertences (art. 11, IV) |
| III, a | Proibição de **aproximação** da ofendida, familiares e testemunhas | Fixe **limite mínimo em metros** (ex.: 300m) e nomeie os protegidos |
| III, b | Proibição de **contato por qualquer meio** | Explicite: telefone, mensagens, redes sociais, e-mail e **interposta pessoa** |
| III, c | Proibição de **frequentar lugares** | Liste: residência, trabalho, escola dos filhos, casa de familiares |
| IV | Restrição/suspensão de **visitas** aos dependentes | Justifique o risco aos menores; o próprio inciso IV prevê a oitiva da equipe de atendimento multidisciplinar ou serviço similar |
| V | **Alimentos** provisionais ou provisórios | Aponte necessidade/possibilidade mínimas — o JVDFM pode fixá-los |
| VI–VII | Comparecimento a **programa de reeducação** e **acompanhamento psicossocial** | Incisos acrescidos por lei posterior (Lei 13.984/2020) — úteis quando a vítima deseja proteção sem encarceramento |

### Que protegem a ofendida (arts. 23 e 24)

- **Pessoais (art. 23):** encaminhamento a programa de proteção/atendimento; **recondução ao domicílio** após afastamento do agressor; afastamento **da ofendida** do lar **sem prejuízo** da guarda, alimentos e direitos patrimoniais; **separação de corpos**; matrícula/transferência dos dependentes em escola próxima; **auxílio-aluguel** (inciso recente — confirmar redação via `lei-e-sumula`).
- **Patrimoniais (art. 24):** restituição de bens subtraídos; proibição temporária de compra, venda e locação de bens comuns; **suspensão de procurações** outorgadas ao agressor; caução provisória por perdas e danos.
- **Reforços úteis:** monitoração eletrônica do agressor e dispositivo de segurança da vítima ("botão do pânico"), conforme programa disponível na comarca — peça expressamente e indique o programa local.

## Estrutura forense do requerimento

```
AO JUÍZO DO JUIZADO DE VIOLÊNCIA DOMÉSTICA E FAMILIAR CONTRA A MULHER
DA COMARCA DE [COMARCA] — [UF]
[onde não houver JVDFM: à Vara Criminal com competência da Lei 11.340/2006 — art. 33]

[Medida Protetiva de Urgência — pedido de tramitação PRIORITÁRIA e SIGILOSA]

[NOME DA OFENDIDA], [qualificação — requerer SIGILO do endereço, informado
em apartado (CPP, art. 201, §6º — preservação da intimidade da ofendida)], por sua advogada/seu
advogado (procuração anexa) [ou diretamente, art. 19 c/c art. 27, parte final],
vem requerer MEDIDAS PROTETIVAS DE URGÊNCIA em desfavor de

[NOME DO AGRESSOR], [qualificação e endereço para intimação],

com fundamento nos arts. 18 a 24 da Lei 11.340/2006, pelas razões seguintes:

I — DOS FATOS E DO RISCO ATUAL
Vínculo (art. 5º: relação doméstica/familiar/íntima de afeto); histórico da
violência (art. 7º: física/psicológica/sexual/patrimonial/moral); o EPISÓDIO
ou a ESCALADA que revela risco atual/iminente; provas (FONAR, BO se houver,
laudos, prints, testemunhas). Narrar em ordem que evidencie a URGÊNCIA.

II — DO DIREITO
1. Da incidência da Lei 11.340/2006 (art. 5º; dispensa coabitação — S. 600/STJ).
2. Da natureza autônoma das protetivas (art. 19, §§4º a 6º — Lei 14.550/2023):
   independem de BO, inquérito, ação ou tipificação; cognição sumária pela
   palavra da ofendida; vigência enquanto persistir o risco.
3. Do risco concreto e da adequação de CADA medida requerida (subsunção
   medida a medida — não pedir "as protetivas de praxe").

III — DOS PEDIDOS
a) LIMINARMENTE, inaudita altera pars e sem manifestação prévia do MP
   (art. 19, §1º), no prazo de 48 HORAS (art. 18), o deferimento de:
   [rol individualizado — ex.: afastamento do lar (art. 22, II); proibição de
   aproximação a menos de ___ metros da ofendida, de seus familiares X e Y e
   das testemunhas (art. 22, III, a); proibição de contato por qualquer meio,
   inclusive por interposta pessoa (art. 22, III, b); suspensão da posse de
   armas, com APREENSÃO IMEDIATA (art. 22, I c/c art. 18, IV); ...];
b) a INTIMAÇÃO PESSOAL do requerido, com advertência expressa de que o
   descumprimento configura o crime do art. 24-A e autoriza preventiva
   (CPP, art. 313, III) — ciência inequívoca documentada nos autos;
c) a comunicação da decisão à autoridade policial e à patrulha/rede de
   proteção local, com cadastro da ofendida nos programas disponíveis
   (monitoração eletrônica do agressor / dispositivo de segurança);
d) a VIGÊNCIA das medidas enquanto persistir o risco (art. 19, §6º), com
   prévia oitiva da ofendida antes de qualquer revogação;
e) a intimação da ofendida dos atos processuais, em especial de eventual
   soltura do agressor (art. 21);
f) [se houver filhos/patrimônio: medidas dos arts. 22, IV e V, 23 e 24].

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]  [ou assinatura da ofendida]
```

**Documentos:** procuração (se por advogado); documentos pessoais; FONAR; BO e ocorrências anteriores **se existirem**; laudos/prontuários; prints autenticáveis (com metadados quando possível); certidões de protetivas anteriores; comprovantes do vínculo (certidão de casamento/nascimento dos filhos).

## Teses típicas do polo da vítima

- **Autonomia da protetiva (art. 19, §5º):** o juízo não pode condicionar o deferimento a BO, representação, inquérito ou ação — indeferimento com esse fundamento é contrário à literalidade legal pós-2023.
- **Palavra da ofendida basta na cognição sumária** (art. 19, §4º; ficha VDO-A02): exigir "prova robusta" em sede liminar inverte o regime legal de urgência.
- **Vigência atrelada ao risco, não a prazo fixo (art. 19, §6º):** revogação automática por decurso de tempo, sem reavaliação do risco e **sem oitiva da vítima**, é ilegal (ficha VDO-A09). Peça reavaliação periódica **com** manutenção enquanto perdurar o risco.
- **Descumprimento → dupla resposta:** notícia do crime do **art. 24-A** (o **consentimento da vítima não afasta a tipicidade** — fichas VDO-A10/A11) + requerimento de **prisão preventiva** pelo art. 313, III, CPP (ficha VDO-A01). Não há consunção entre o 24-A e a violação de domicílio (VDO-A12).
- **Afastamento imediato pelo delegado/policial (art. 12-C):** nas comarcas do interior, provoque a via administrativa — o controle judicial vem em 24/48h; não espere o expediente chegar ao fórum com a vítima sob risco.
- **Apreensão de arma é pedido autônomo (art. 18, IV):** especialmente contra agressor agente de segurança — cumule com comunicação à corporação.
- **Precedentes atuais** sobre alcance do art. 40-A, prazo/renovação das medidas e recurso cabível: **pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]** até o gate confirmar.

## Erros comuns e pegadinhas

- **Endereçar ao JECrim ou embutir despenalizadores.** A Lei 9.099/95 não se aplica (art. 41; Súmula 536/STJ). O juízo é o **JVDFM** (ou a vara criminal do art. 33).
- **Ignorar a opção de foro da ofendida (art. 15).** A competência territorial é **escolha da ofendida** — juizado do seu domicílio/residência, do lugar do fato ou do domicílio do agressor. A literalidade fala em "processos cíveis"; a extensão às protetivas é usual, mas confirme o entendimento via `jurisprudencia-stj-stf` [NÃO VERIFICADO].
- **Exigir BO/representação da própria cliente antes de pedir.** Desnecessário desde a Lei 14.550/2023 — e lesão corporal leve é ação **incondicionada** (ADI 4424/ADC 19; Súmula 542/STJ), irrelevante para a protetiva.
- **Pedido genérico ("requer as medidas protetivas cabíveis").** Sem rol individualizado, sem metragem e sem nomes dos protegidos, a decisão sai incompleta e inexequível.
- **Esquecer a ciência inequívoca do agressor.** Sem intimação pessoal documentada, a futura imputação do art. 24-A nasce fragilizada (a defesa atacará exatamente aí).
- **Confundir protetivas com as cautelares do art. 319 do CPP.** Regimes distintos: as protetivas têm rito, prazo de 48h e crime próprio de descumprimento; as cautelares do CPP acompanham a persecução — podem coexistir, não se substituem.
- **Confundir retratação da representação com renúncia à protetiva.** A audiência do art. 16 (só a pedido da vítima, antes do recebimento) atinge a **representação** nos crimes condicionados — **não revoga automaticamente** a protetiva, que segue o regime do risco (art. 19, §6º). Ver skill `retratacao-representacao`.
- **Deixar a medida "caducar" em silêncio.** Se a decisão fixou prazo, calendarize e **peça prorrogação antes do termo**, demonstrando a persistência do risco; provocado pedido de revogação pela defesa, exija a **oitiva prévia da ofendida**.
- **Recurso contra o indeferimento:** a via recursal (apelação, RESE ou agravo) é controvertida por causa da natureza híbrida da medida — **não afirme de memória**; pesquise o entendimento do tribunal local e do STJ via `jurisprudencia-stj-stf` e considere **habeas corpus/mandado de segurança** ou simples **reiteração com fatos novos** (art. 19, §3º), que não preclui.
- **Expor o endereço da vítima nos autos.** Peça sigilo dos dados de localização e tramitação em segredo — vazamento de endereço é falha grave do polo protetor.

## Checklist antes de protocolar

- [ ] Vínculo do art. 5º e forma de violência do art. 7º descritos com fatos, não com rótulos?
- [ ] **Risco atual/iminente** materializado (FONAR, histórico, prints, testemunhas)?
- [ ] Rol de medidas **individualizado** (metros, meios, lugares, pessoas protegidas)?
- [ ] Pedido **liminar** com invocação expressa do art. 19, §1º e do prazo de 48h (art. 18)?
- [ ] Apreensão de arma (art. 18, IV) avaliada? Agressor é agente de segurança?
- [ ] Intimação pessoal do agressor com advertência do art. 24-A requerida?
- [ ] Vigência enquanto persistir o risco (art. 19, §6º) + oitiva prévia da vítima requeridas?
- [ ] Sigilo do endereço da ofendida requerido?
- [ ] Filhos e patrimônio cobertos (arts. 22, IV-V, 23 e 24), se for o caso?
- [ ] Redação vigente dos dispositivos recentes conferida via `lei-e-sumula` e precedentes via `jurisprudencia-stj-stf` (nada [NÃO VERIFICADO] remanescente)?

## Lembretes finais

- **Autonomia é a palavra-chave pós-2023:** sem BO, sem inquérito, sem ação — a protetiva se sustenta na palavra da ofendida e no risco.
- **48h para o juiz decidir; 24h para o controle do afastamento imediato do art. 12-C.** Use os prazos como argumento de urgência, não como espera passiva.
- **Peça medidas com parâmetros executáveis** — metragem, meios de contato, lugares, nomes.
- **Descumprimento tem resposta dupla:** art. 24-A + preventiva (art. 313, III, CPP). O consentimento da vítima não descriminaliza.
- **Protetiva não morre com a retratação da representação** — institutos diversos (ver `retratacao-representacao`).
- **O ataque da defesa virá pela via da revogação/flexibilização** — antecipe-se: risco documentado e atualizado nos autos é a melhor blindagem (contraponto na skill `revogacao-flexibilizacao-protetivas`).
- **Toda entrega é rascunho para revisão humana** — e toda citação passa pelo gate.

## Apoie-se em

- **BP `defesa-violencia-domestica`** — camada de teses do nicho (incidência, art. 24-A, preventiva, prova e dosimetria) para os dois polos; esta skill traz a peça e o procedimento que a BP não cobre.
- **`acervo/teses-modelos/crime-violencia-domestica.md`** — fichas **VDO-A** (palavra da vítima A02, preventiva por descumprimento A01, natureza inibitória A09, 24-A e consentimento A10/A11/A12): consulte **antes** da web.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima (teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão): aplique **sempre** ao redigir o requerimento.
- **Agente `jurisprudencia-stj-stf`** — precedentes atuais (alcance do art. 40-A, prazo/renovação, recurso cabível); tudo entra como **[NÃO VERIFICADO]** até confirmação.
- **Agente `verificador-citacoes` (gate `verificacao-citacoes`)** — nenhuma súmula, tese ou dispositivo recente vai à peça sem passar pelo gate; redação de lei alterada confere-se via `lei-e-sumula`.
- **Skill `retratacao-representacao`** — instituto vizinho e diverso (art. 16): complementa esta skill quando a vítima quer retirar a representação sem abrir mão da proteção.
- **Skill `revogacao-flexibilizacao-protetivas`** — o espelho defensivo desta peça: conhecê-la é antecipar os argumentos de revogação e blindar a manutenção.
