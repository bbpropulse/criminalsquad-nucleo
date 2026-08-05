---
name: defesa-crimes-falimentares
description: >-
  Use ao defender imputação de crime falimentar (Lei 11.101/2005, arts. 168-178) — fraude a
  credores, contabilidade paralela/omissão de documentos, favorecimento de credores,
  desvio/apropriação de bens, indução a erro, divulgação de informação falsa. Ataca a CONDIÇÃO
  OBJETIVA DE PUNIBILIDADE (sentença de falência, de concessão da recuperação judicial ou de
  homologação da extrajudicial — art. 180), a competência do juízo… Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, empresarial, leis-especiais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-falimentares"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-falimentares", "defesa crimes", "crimes falimentares"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa nos Crimes Falimentares (Lei 11.101/2005, arts. 168-178)

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

Esta skill orienta a **defesa de quem é acusado de crime falimentar** — os delitos previstos na Lei 11.101/2005 (Lei de Recuperação de Empresas e Falência, "LREF"), praticados no contexto de **falência**, **recuperação judicial** ou **recuperação extrajudicial**. Monta o **banco de teses** do instituto e a **estrutura forense** para os veículos usuais: resposta à acusação (art. 396-A CPP), memoriais, habeas corpus de trancamento e alegações finais. O produto é sempre **rascunho técnico para revisão humana obrigatória**.

> **Lição central:** o crime falimentar tem uma peculiaridade que **não existe** nos crimes tributários nem na lavagem — a **condição objetiva de punibilidade** do art. 180: **sem sentença de falência, de concessão da recuperação judicial ou de homologação da recuperação extrajudicial, não há punibilidade**. Antes de discutir tipicidade, dolo ou autoria, **verifique a existência e a data dessa decisão** — ela é o eixo da defesa (afasta a punibilidade e marca o termo inicial da prescrição, art. 182).

> **Cautela de vigência (obrigatória antes de citar):** a Lei 11.101/2005 foi **profundamente alterada pela Lei 14.112/2020** (reforma da recuperação e falência), que mexeu em institutos que repercutem na esfera penal (recuperação extrajudicial, DIP financing, insolvência transnacional). Confirme a **redação vigente** dos arts. 168-182 na fonte oficial antes de fundamentar. Toda súmula, tese, tema ou acórdão citado passa **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes` — **omitir vence inventar**.

## Instituto e base legal

Os crimes falimentares são **próprios do estado de insolvência empresarial**: pressupõem uma empresa em falência ou recuperação e punem condutas que fraudam credores, a massa ou o próprio procedimento. Base legal essencial:

- **Arts. 168 a 178, Lei 11.101/2005** — os tipos penais falimentares.
- **Art. 179** — regra do concurso e da **equiparação de sujeitos ativos** (sócio, administrador, gerente, diretor, conselheiro de fato ou de direito; contador; e demais que concorrem para os fatos).
- **Art. 180** — a **condição objetiva de punibilidade**: a sentença que decreta a falência, concede a recuperação judicial ou homologa a recuperação extrajudicial é **condição objetiva de punibilidade** das infrações penais da Lei.
- **Art. 181** — **efeitos da condenação** (inabilitação para atividade empresarial, impedimento para cargo em conselho/administração, incapacidade para gestão), que **devem ser motivadamente declarados** na sentença e têm prazo próprio.
- **Art. 182** — **prescrição**: regula-se pelo CP; o **termo inicial** é a **decretação da falência, a concessão da recuperação judicial ou a homologação da recuperação extrajudicial**; a **decretação da falência interrompe** a prescrição cujo curso tenha iniciado com a concessão da recuperação.
- **Art. 183** — a **competência para os crimes falimentares é do juízo criminal** da jurisdição onde tenha sido decretada a falência/concedida a recuperação (juízo criminal, **não** o juízo falimentar/universal — a separação de competências é ponto sensível).
- **Art. 184** — o procedimento observa o **rito comum ordinário** do CPP; legitimidade do MP e do administrador judicial/credores para provocar a ação penal nos termos da lei.

> **Distinção que orienta toda a defesa.** Ao contrário do crime tributário (que admite extinção pela quitação, e cuja constituição definitiva do crédito é condição de procedibilidade — Súmula Vinculante 24/STF), e ao contrário da lavagem (Lei 9.613/98, cujo pilar é o ato autônomo de ocultação), o crime falimentar gira em torno da **sentença falimentar/recuperacional como condição objetiva de punibilidade**. Não confunda os regimes.

## Panorama dos tipos penais (mapa da defesa por conduta)

Leia sempre a **redação vigente** de cada artigo; o quadro abaixo é **mapa de teses**, não substitui o texto legal (confirme via `jurisprudencia-stj-stf`).

| Art. | Núcleo típico (nome usual) | Frente defensiva típica |
|---|---|---|
| **168** | **Fraude a credores** — praticar ato fraudulento de que resulte ou possa resultar prejuízo aos credores, com o fim de obter ou assegurar vantagem indevida para si ou para outrem | Atacar o **dolo específico** (fim de vantagem indevida) e o **nexo com o prejuízo/risco aos credores**; distinguir **erro de gestão / risco empresarial lícito** de fraude |
| **168, §1º** | **Contabilidade paralela ("caixa dois")** — aumento de pena por manter/movimentar recursos ou valores em escrituração paralela | Discutir autoria e ciência; distinção entre irregularidade contábil e escrituração dolosamente paralela |
| **168, §2º** | Concurso de contador/técnico que elabora escrituração fraudulenta | Delimitar o **âmbito do dever profissional**; ausência de dolo do técnico que apenas processa dados fornecidos |
| **168, §3º** | Redução de pena — contabilidade não obrigatória por lei (microempresário etc.) | Enquadramento do porte da empresa; causa de diminuição |
| **169** | **Violação de sigilo empresarial** — em prejuízo dos credores/massa | Ausência de prejuízo; ausência de dolo |
| **170** | **Divulgação de informações falsas** sobre a empresa | Aferir falsidade e potencialidade lesiva |
| **171** | **Indução a erro** — sonegar/omitir informações ou prestar falsas ao juízo, ao MP, aos credores, à assembleia, ao administrador judicial ou ao Comitê | Distinguir **omissão dolosa** de mera insuficiência/atraso documental; boa-fé |
| **172** | **Favorecimento de credores** — praticar ato de disposição/oneração que favoreça um ou mais credores em prejuízo dos demais (par conditio creditorum) | Aferir se o pagamento estava **autorizado**, se era **negócio ordinário** ou anterior ao termo legal; ausência de dolo de favorecer |
| **173** | **Desvio, ocultação ou apropriação de bens** da massa | Prova da posse/destinação; ausência de apropriação; devolução/regularização |
| **174** | **Aquisição, recebimento ou uso ilegal de bens** — adquirir/receber bem da massa sabendo ou devendo saber a origem | Discutir a **ciência** (elemento subjetivo); boa-fé do terceiro |
| **175** | **Habilitação ilegal de crédito** — apresentar declaração/documento falso na habilitação/verificação de crédito | Falsidade documental x divergência de valores; ausência de dolo |
| **176** | **Exercício ilegal de atividade** por quem está inabilitado por sentença | Verificar a existência/validade da inabilitação (art. 181) |
| **177** | **Violação de impedimento** — administrador judicial, perito, avaliador, escrivão etc. que adquire bens da massa ou entra em especulação de lucro | Delimitar a função e o impedimento legal |
| **178** | **Omissão de documentos contábeis obrigatórios** — deixar de elaborar/escriturar/autenticar documentos de escrituração contábil obrigatórios | Discutir a **obrigatoriedade legal** do documento e o **dolo de omitir** (não a mera desorganização) |

## O eixo da defesa — a condição objetiva de punibilidade (art. 180)

> **A pergunta que abre o caso.** Existe **sentença** que (a) decreta a falência, (b) concede a recuperação judicial ou (c) homologa a recuperação extrajudicial? **Qual a data?** Está **transitada** ou pendente de recurso? Sem essa decisão, **não há punibilidade** — e, mesmo com denúncia, falta condição para a punição.

Consequências práticas:

1. **Ausência da sentença** → a punibilidade **não se aperfeiçoa**; a denúncia é prematura e cabe **rejeição/trancamento** (falta de condição objetiva de punibilidade). É natureza jurídica reconhecida em doutrina majoritária e na literalidade do art. 180 — mas **confirme o tratamento jurisprudencial** (rejeição da denúncia x suspensão x arquivamento) via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
2. **Data da sentença** → é o **termo inicial da prescrição** (art. 182). Fixe-a com precisão: define se a pretensão punitiva já está prescrita (ver adiante).
3. **Natureza da condição** → por ser **condição objetiva de punibilidade** (e não elementar do tipo), ela **independe do dolo** do agente e **não integra a tipicidade** — o que tem reflexos na denúncia e na análise do erro. Não confunda com condição de procedibilidade nem com elemento normativo do tipo.
4. **Recuperação convertida em falência** → atenção à sucessão de decisões: a concessão da recuperação e a posterior decretação da falência têm efeitos distintos sobre o termo inicial e a interrupção da prescrição (art. 182 — a decretação da falência **interrompe** a prescrição iniciada com a concessão da recuperação).

## Prescrição própria (art. 182) — método

> **Não gere aqui o cálculo determinístico do prazo.** Descreva o método e **encaminhe** o cálculo para a skill `calculadora-prescricao` (e, quando envolver a pena aplicada/projetada, para `calculadora-dosimetria`). O que segue é o **roteiro** que alimenta essas calculadoras.

Passos do raciocínio prescricional no crime falimentar:

1. **Identifique a pena** do tipo imputado (arts. 168-178) — em abstrato (prescrição da pretensão punitiva antes da sentença) ou em concreto (após condenação).
2. **Fixe o termo inicial (art. 182):** decretação da falência **ou** concessão da recuperação judicial **ou** homologação da recuperação extrajudicial — **não** a data do fato/ato fraudulento. Este é o ponto que mais diferencia o crime falimentar dos crimes comuns.
3. **Aplique as regras de prescrição do CP** (arts. 109-117, remissão do art. 182): prazos por faixa de pena, causas interruptivas (art. 117 CP: recebimento da denúncia, pronúncia, sentença condenatória recorrível etc.) e suspensivas.
4. **Interrupção específica (art. 182):** se a prescrição começou a correr com a **concessão da recuperação** e sobrevém **decretação da falência**, esta **interrompe** o curso — recalcule.
5. **Conclua** com `calculadora-prescricao`: verifique prescrição da pretensão punitiva (abstrata/retroativa/intercorrente) e, se for o caso, executória. **Extinção da punibilidade pela prescrição é a tese-mãe** em processos falimentares antigos, pela distância entre o ato e a sentença falimentar.

➡️ **Tese defensiva recorrente:** dado que o termo inicial legal é a sentença falimentar/recuperacional (frequentemente muito posterior aos atos de gestão), calcule sempre a prescrição — mas **cuidado**: por vezes a sentença é recente e a prescrição só começou a correr ali, o que joga contra a defesa. O art. 182 é **faca de dois gumes** — meça no caso concreto.

## Banco de teses defensivas (por eixo)

### 1. Ausência de condição objetiva de punibilidade (art. 180)
- Não há sentença de falência/recuperação: denúncia prematura → **rejeição/trancamento**.
- Sentença anulada/reformada em grau recursal: **desaparece** a condição → extinção/absolvição.

### 2. Atipicidade e ausência de dolo específico
- **Fraude a credores (art. 168):** exige **fim especial** de obter vantagem indevida. **Erro de gestão, risco empresarial e insucesso do negócio não são crime** — a crise empresarial lícita é atípica. Ataque a confusão entre **má administração** e **fraude dolosa**.
- **Favorecimento de credores (art. 172):** pagamento **autorizado**, **negócio ordinário** ou **anterior ao termo legal da falência** não configura favorecimento; exige dolo de preferir um credor em detrimento dos demais.
- **Omissão contábil (art. 178):** discutir a **obrigatoriedade legal** do documento (ME/EPP têm regime simplificado — art. 168, §3º sinaliza a lógica) e o **dolo de omitir** — desorganização não é dolo.

### 3. Autoria, delegação e o administrador que não geria de fato
- **Responsabilidade penal é subjetiva e individual** — vedada a responsabilidade objetiva pela mera condição de sócio/administrador (rejeitar a **denúncia genérica**, que não descreve a conduta individualizada de cada acusado). Este é um dos ataques mais fortes: exigir **descrição individualizada** da conduta (nexo causal concreto de cada réu), sob pena de inépcia (art. 41 CPP).
- Distinguir **administrador de direito** x **administrador de fato** (art. 179): quem constava do contrato mas **não geria** x quem geria sem figurar. A imputação deve seguir o **poder de gestão real**.
- **Contador/técnico (art. 168, §2º):** o profissional que apenas **processa dados fornecidos** pela empresa, sem ciência da fraude, não responde — delimitar o **âmbito do dever** e a ausência de dolo.

### 4. Prova pericial — o laudo econômico-financeiro é o coração do caso
- Crime falimentar **vive de perícia contábil**. A defesa deve **impugnar o laudo** (metodologia, premissas, período analisado, confusão entre passivo a descoberto e fraude) e, se preciso, **requerer perícia/assistente técnico** próprio (arts. 159 e ss. CPP).
- **Nexo entre o ato e o prejuízo/risco aos credores** precisa estar **demonstrado tecnicamente** — não se presume do resultado (a falência) a fraude (o crime).

### 5. Prescrição (art. 182) — ver método acima
- Calcular sempre (via `calculadora-prescricao`), a partir do termo inicial legal.

### 6. Interfaces com outros crimes (evitar bis in idem e sobreposição)
- **Crime falimentar x crime tributário:** condutas de sonegação no contexto da empresa podem atrair a Lei 8.137/90; **não** se aplica a condição do art. 180 ao crime tributário, que tem regime próprio (SV 24/STF; extinção pelo pagamento). Ver `extincao-punibilidade-pagamento-tributario`.
- **Crime falimentar x lavagem:** desvio de bens da massa (art. 173) pode servir de antecedente à lavagem (Lei 9.613/98) — vigiar **dupla imputação** e a autonomia do ato de ocultação. Ver `defesa-lavagem-capitais`.
- **Crime falimentar x estelionato/apropriação:** delimitar o campo próprio de cada tipo para evitar **duplicidade de imputação** sobre o mesmo fato.

## Estrutura da peça de defesa (roteiro forense)

Adapte ao veículo (resposta à acusação, memoriais, HC de trancamento, alegações finais). Sugestão de esqueleto:

```
I — SÍNTESE E TEORIA DO CASO
   Delimitar quem é o réu, seu papel real na empresa e a linha central da defesa
   (ex.: crise empresarial lícita, ausência de dolo, ausência da condição do art. 180,
   prescrição). Uma frase-teto que organiza tudo.

II — DA (IN)EXISTÊNCIA DA CONDIÇÃO OBJETIVA DE PUNIBILIDADE (art. 180)
   Existe sentença de falência/recuperação? Data? Trânsito? Se ausente → prematuridade
   → rejeição/trancamento. Se presente → fixar a data (base da prescrição).

III — DA PRESCRIÇÃO (art. 182)
   Termo inicial = sentença falimentar/recuperacional. Aplicar CP. Remeter ao cálculo
   (calculadora-prescricao). Se consumada → extinção da punibilidade.

IV — DA ATIPICIDADE / AUSÊNCIA DE DOLO
   Erro de gestão x fraude (168); pagamento autorizado/ordinário x favorecimento (172);
   obrigatoriedade e dolo na omissão contábil (178). Subsunção negada, artigo a artigo.

V — DA AUTORIA — INÉPCIA DA DENÚNCIA GENÉRICA
   Exigir descrição individualizada da conduta de cada réu (art. 41 CPP). Administrador
   de fato x de direito (art. 179). Vedação à responsabilidade penal objetiva.

VI — DA PROVA PERICIAL
   Impugnar o laudo econômico-financeiro; requerer perícia/assistente técnico; negar o
   salto lógico "houve falência, logo houve fraude".

VII — DAS INTERFACES E DO BIS IN IDEM
   Afastar dupla imputação (tributário/lavagem/estelionato) sobre o mesmo fato.

VIII — DOS PEDIDOS
   Rejeição/trancamento; ou absolvição (art. 386 CPP, inciso pertinente); ou extinção
   da punibilidade (prescrição); subsidiariamente, afastar §§ de aumento e discutir os
   efeitos do art. 181 (inabilitação) por falta de fundamentação motivada.
```

> **Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).

## Teses × contra-teses (acusação)

| Tese defensiva | Contra-tese (acusação) | Como sustentar a defesa |
|---|---|---|
| Sem sentença (art. 180), não há punibilidade → denúncia prematura | A denúncia pode aguardar a condição; ou a condição já está satisfeita | Provar documentalmente a **ausência/pendência** da decisão e sua data; se satisfeita, migrar para prescrição/mérito |
| Erro de gestão / crise lícita ≠ fraude (art. 168) | O resultado ruinoso e o "caixa dois" revelam o dolo | Isolar **dolo específico** de vantagem indevida; laudo próprio; distinguir irregularidade de fraude |
| Denúncia genérica é inepta (art. 41 CPP) | A dinâmica societária autoriza imputação a todos os gestores | Exigir **conduta individualizada**; administrador de fato x de direito (art. 179) |
| Prescrição consumada (art. 182 + CP) | O termo inicial é a sentença recente → sem prescrição | Medir no caso concreto (faca de dois gumes); `calculadora-prescricao` |
| Pagamento autorizado/ordinário ≠ favorecimento (art. 172) | Preferência a credor no período suspeito é dolosa | Provar autorização/ordinariedade/anterioridade ao termo legal e ausência de dolo de preferir |

## Súmulas e precedentes (sob o Citation Gate)

> **Regra inegociável:** **não** invente jurisprudência. Cite com certeza apenas **dispositivos de lei** e **súmulas notórias**. Para **qualquer** número de HC/REsp/RE, informativo ou tema, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. **Ensinar a tese e o dispositivo vence arriscar um acórdão.**

- **Súmula Vinculante 24/STF** — pertence ao **crime tributário material** (não se tipifica antes do lançamento definitivo). **Não é** o regime do crime falimentar; serve à **distinção** (o falimentar tem condição objetiva de punibilidade própria, art. 180, e não condição de procedibilidade tributária). Use para **contrastar** os regimes.
- **Competência (art. 183):** juízo **criminal** para o crime falimentar (separado do juízo universal da falência). Há debate sobre unidade/separação de juízos e sobre a necessidade de intimação do juízo falimentar — **confira o estado atual** via `jurisprudencia-stj-stf` **[NÃO VERIFICADO]**.
- **Natureza do art. 180 como condição objetiva de punibilidade** — posição doutrinária majoritária e leitura literal; o **tratamento processual** (rejeição x suspensão) e eventuais precedentes específicos do STJ/STF devem ser confirmados **[NÃO VERIFICADO]**.
- **Denúncia genérica em crimes societários/empresariais** — a exigência de individualização da conduta (art. 41 CPP) é orientação consolidada, mas cite acórdãos específicos **somente** após verificação **[NÃO VERIFICADO]**.

> Em todos os casos: passe cada citação pelo gate `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) **antes** de inseri-la na peça. Na dúvida, **omita o número e sustente o dispositivo + a tese**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Discutir mérito **sem antes verificar** a condição objetiva de punibilidade (art. 180) e sua data.
- Contar a prescrição a partir da **data do ato fraudulento** em vez da **sentença falimentar/recuperacional** (art. 182) — erro grave nos dois sentidos.
- Aceitar **denúncia genérica** contra "os sócios" sem exigir conduta individualizada (art. 41 CPP).
- Tratar **erro de gestão / insucesso empresarial** como crime — a crise lícita é atípica.
- Confundir o regime falimentar com o **tributário** (SV 24; extinção pelo pagamento) ou com a **lavagem** (ato autônomo de ocultação).
- Ignorar o **laudo econômico-financeiro** ou não impugná-lo tecnicamente / não requerer assistente técnico.
- Esquecer que a **decretação da falência interrompe** a prescrição iniciada com a concessão da recuperação (art. 182).
- Citar competência, número de acórdão ou tema **de memória**, sem passar pelo Citation Gate.

**Checklist antes de protocolar:**
- [ ] Verifiquei **existência e data** da sentença de falência/recuperação (art. 180)?
- [ ] Fixei o **termo inicial** da prescrição na sentença (art. 182) e calculei via `calculadora-prescricao`?
- [ ] A **competência** é do juízo criminal (art. 183) e o endereçamento está correto?
- [ ] Neguei a subsunção **artigo a artigo** (dolo específico; obrigatoriedade contábil; favorecimento)?
- [ ] Ataquei a **denúncia genérica** exigindo conduta individualizada (art. 41 CPP; art. 179 — de fato x de direito)?
- [ ] Impugnei o **laudo pericial** e/ou requeri assistente técnico?
- [ ] Afastei **bis in idem** com tributário/lavagem/estelionato?
- [ ] Discuti os **efeitos do art. 181** (inabilitação) e exigi fundamentação motivada?
- [ ] **Todas** as citações passaram pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Confirmei a **redação vigente** dos arts. 168-182 (Lei 14.112/2020) na fonte oficial?

## Lembretes finais

- **Condição objetiva de punibilidade primeiro (art. 180)** — é o que distingue este crime e o que abre (ou fecha) o caso.
- **Prescrição (art. 182)** com termo inicial na **sentença falimentar/recuperacional** — meça sempre, com `calculadora-prescricao`; é faca de dois gumes.
- **Competência criminal (art. 183)** — não confundir com o juízo universal da falência.
- **Dolo específico e crise lícita** — erro de gestão não é crime; a acusação que confunde má administração com fraude é a que se desmonta.
- **Denúncia genérica é inepta** — exigir conduta individualizada (art. 41 CPP; art. 179).
- **Laudo pericial** é o campo de batalha — impugne e produza prova técnica própria.
- **Distinguir** dos regimes tributário e de lavagem — não importe o que não se aplica.

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa; a responsabilidade técnica pela peça, pelas teses e pelo protocolo é sempre do **advogado** (EAOAB; CED, art. 2º; Provimento OAB 205/2021). Não substitui o juízo profissional nem a leitura dos autos concretos.
- **Foco em DEFESA** (advocacia criminal). Havendo atuação pela **acusação/assistência** (MP/assistente de acusação), o polo e as vedações éticas próprias (CNMP; e, no caso da Defensoria, LC 80/94) devem ser conferidos pelo **roteador** antes do uso — esta skill **não** é do polo acusatório.
- **Citation Gate:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` (há sanções reais por jurisprudência inventada por IA).
- **Sigilo e LGPD:** dados do assistido e documentos societários/contábeis nunca em repositório público.
