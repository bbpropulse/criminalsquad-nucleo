---
name: inepcia-denuncia-generica
description: >-
  Use ao defender administrador, sócio ou gestor em crimes societários (tributários, financeiros,
  previdenciários, ambientais) contra denúncia genérica: arguição de inépcia (CPP 41 e 395, I),
  exigência de individualização mínima da conduta em autoria coletiva, vedação da responsabilidade
  penal objetiva pelo cargo e desmonte do uso indevido da teoria do domínio do fato; delegação e
  compliance como quebra do nexo. Gatilhos… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-inepcia-denuncia-generica"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["inepcia-denuncia-generica", "inepcia denuncia", "denuncia generica"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Inépcia da Denúncia Genérica (crimes societários)

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

Esta skill orienta a **preliminar mais recorrente do penal empresarial**: a arguição de **inépcia da denúncia genérica** contra administradores, sócios e gestores em crimes societários (tributários, financeiros, previdenciários, ambientais). Entrega dois veículos: a **preliminar na resposta à acusação** (CPP, art. 396-A) e o **habeas corpus de trancamento** da ação penal.

> **Lição central:** ninguém vira réu **pelo cargo que ocupa**. A denúncia que imputa o crime "aos sócios/administradores" apenas porque figuram no contrato social — sem descrever **o que cada um fez**, quando e como — viola o art. 41 do CPP, a ampla defesa (CF, art. 5º, LV) e a vedação à **responsabilidade penal objetiva**. É inepta e deve ser rejeitada (art. 395, I) ou trancada por HC.

> **Distinção que decide a causa:** a jurisprudência **não** exige descrição minuciosa em crimes de autoria coletiva — mas exige **vínculo mínimo** entre o acusado e o fato. Saber separar **denúncia geral (válida)** de **denúncia genérica (inepta)** é o coração da tese.

## Instituto e base legal

A denúncia é a peça que delimita a acusação e inaugura o contraditório. Seus requisitos são taxativos:

| Norma | Conteúdo |
|---|---|
| **CPP, art. 41** | A denúncia conterá **a exposição do fato criminoso, com todas as suas circunstâncias**, a qualificação do acusado, a classificação do crime e o rol de testemunhas |
| **CPP, art. 395, I** | Rejeição da denúncia **manifestamente inepta** |
| **CPP, art. 396-A** | Resposta à acusação: arguição de **preliminares** e tudo o que interesse à defesa |
| **CPP, art. 648, I** | Coação ilegal por **falta de justa causa** — fundamento do HC de trancamento |
| **CF, art. 5º, LIV e LV** | Devido processo legal, contraditório e **ampla defesa** — impossível defender-se de acusação que não diz o que o réu fez |
| **CF, art. 5º, XLV** | Pessoalidade da pena — raiz constitucional da vedação à responsabilidade penal objetiva |

**Por que a genérica é inepta:** a exposição do fato "com todas as suas circunstâncias" existe para permitir o exercício da defesa. Se a peça não individualiza a conduta, o acusado é obrigado a provar fato negativo indeterminado ("não participei de nada") — inversão incompatível com o sistema acusatório (CPP, art. 3º-A).

## Denúncia geral × denúncia genérica — a distinção-chave

O STJ consolidou a distinção (confirme a formulação atual via agente `jurisprudencia-stj-stf` antes de citar precedente):

| Tipo | O que faz | Validade |
|---|---|---|
| **Denúncia geral** | Atribui **o mesmo fato, certo e delimitado**, a todos os acusados, quando a conduta é única e indivisível (ex.: todos os diretores assinaram o balanço fraudulento) | **Válida** — cada um sabe exatamente do que se defende |
| **Denúncia genérica** | Imputa **fatos incertos ou indeterminados**, sem dizer qual conduta coube a cada acusado, apoiando-se só na posição societária | **Inepta** — viola CPP 41 e a ampla defesa |

**Teste prático antes de arguir:** pergunte, para o seu cliente, "*o que* a denúncia diz que ele fez, *quando* e *por qual ato*?" Se a resposta for apenas "era sócio/administrador à época dos fatos", a peça é genérica. Se houver ato concreto descrito (ainda que comum a todos), é geral — e a preliminar tende a fracassar; migre para teses de mérito ou de justa causa.

**Mitigação em crimes societários (conheça o limite da própria tese):** a jurisprudência admite abrandamento da individualização **na denúncia** quando a apuração exaustiva só for possível na instrução — mas **nunca dispensa** a demonstração do **vínculo mínimo** (liame subjetivo) entre o denunciado e a conduta. A mitigação não autoriza acusar pelo cargo; autoriza apenas descrever com menor detalhe uma participação **que precisa existir e estar indicada**.

## Cabimento — dois veículos, momentos distintos

| Veículo | Momento | Órgão | Resultado |
|---|---|---|---|
| **Preliminar na resposta à acusação** (CPP 396-A) | 10 dias após a citação | Juízo de 1º grau que recebeu a denúncia | Reconsideração do recebimento / absolvição sumária (art. 397) quando couber |
| **HC de trancamento** (CPP 647/648, I) | A qualquer tempo antes da sentença | Tribunal (TJ/TRF contra ato do juiz; STJ contra acórdão do TJ/TRF) | Trancamento da ação penal por inépcia ou falta de justa causa |

> **Use os dois em paralelo:** a preliminar preserva a matéria nos autos (evita preclusão e prequestiona); o HC destrava o constrangimento sem esperar a instrução. O trancamento por HC é **excepcional** — exige inépcia **manifesta**, aferível de plano, sem revolvimento de prova.

## Teses típicas

**1. Vedação da responsabilidade penal objetiva pelo cargo.** Constar do contrato social ou do estatuto não é conduta típica. A condição de sócio, administrador ou representante legal é **qualidade pessoal**, não ato. Denúncia que deduz autoria da mera posição societária pune pelo status — responsabilidade objetiva vedada (CF 5º, XLV; CP, art. 13: o resultado só é imputável a quem lhe deu causa). Junte à peça o contrato social e atas que demonstrem **quem geria o quê** (sócio cotista sem gestão, administrador de área alheia ao fato).

**2. Ausência de individualização mínima em autoria coletiva.** Mesmo aceita a mitigação, a denúncia deve indicar **de que forma** o acusado concorreu (CP, art. 29: "na medida de sua culpabilidade"). Aponte, uma a uma, as perguntas que a peça não responde: qual ato? em que data? com que poder de decisão? com que dolo? A impossibilidade de responder demonstra a impossibilidade de defender.

**3. Uso indevido da teoria do domínio do fato.** A teoria (Roxin) é critério para **distinguir autor de partícipe** — pressupõe prova de que o agente **dominava finalisticamente** o curso do fato. Não é atalho probatório nem presunção de autoria do dirigente. A discussão ganhou notoriedade com a AP 470 (STF, "Mensalão") e o próprio STF depois reiterou que a posição hierárquica **não substitui** a prova da participação concreta — pesquise a formulação atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] até o `verificador-citacoes` validar. Denúncia que invoca "domínio do fato" sem descrever o domínio **confessa** a ausência de conduta individualizada — vire a invocação contra o acusador.

**4. Delegação de poderes como quebra do nexo.** Em estruturas empresariais reais, decisões fiscais, ambientais ou financeiras são delegadas a diretorias técnicas, contadores e gestores de área. Delegação **formal e efetiva** (procurações, organogramas, alçadas, atas) desloca o domínio do fato e o dever de cuidado para o delegatário — quebra o nexo entre o administrador denunciado e o fato. Documente: quem assinava, quem decidia, quem tinha alçada.

**5. Compliance como reforço da quebra do nexo.** Programa de integridade efetivo (código de conduta, treinamentos, canais de denúncia, auditorias — parâmetros da Lei 12.846/2013 e seu decreto regulamentador; confira a redação vigente via agente `lei-e-sumula`) demonstra que o administrador **organizou a empresa para evitar o crime**: nega o dolo, nega a omissão relevante (CP, art. 13, §2º) e esvazia a alegação de domínio da organização. Não é excludente automática — é prova de ausência de vínculo subjetivo.

**6. Falta de justa causa (CPP 395, III c/c 648, I).** Tese irmã da inépcia: além de não descrever, a denúncia frequentemente **não lastreia** — ausência de suporte probatório mínimo ligando o denunciado ao fato. Cumule: inépcia (defeito da narrativa) + falta de justa causa (defeito do lastro). O trancamento por falta de justa causa é mais estável que o por inépcia (veja pegadinha da renovação da denúncia, abaixo).

**Particularidades por nicho:**

| Nicho | Atenção |
|---|---|
| **Tributários (Lei 8.137/90)** | Crimes materiais do art. 1º, **I a IV**, exigem **lançamento definitivo** (Súmula Vinculante 24 — STF); sem constituição definitiva, falta justa causa. Parcelamento suspende e pagamento extingue a punibilidade — teses completas na BP `defesa-crimes-tributarios` e na skill `extincao-punibilidade-pagamento-tributario` |
| **Previdenciários (CP 168-A e 337-A)** | Denúncia deve indicar quem **detinha o poder de decisão** sobre os repasses; dificuldade financeira invencível ataca o dolo/exigibilidade — mas é mérito, não preliminar: não misture |
| **Financeiros (Lei 7.492/86)** | O art. 25 (responsabilidade dos controladores e administradores) **não cria presunção de autoria** — indica o círculo possível de autores, e a denúncia continua obrigada a individualizar |
| **Ambientais (Lei 9.605/98)** | Art. 2º exige, para o dirigente omitente, ciência da conduta criminosa alheia + poder de impedi-la — a denúncia deve descrever ambos; na imputação à pessoa jurídica (art. 3º), a orientação atual do STF dispensa a dupla imputação obrigatória — confirme via `jurisprudencia-stj-stf` [NÃO VERIFICADO] |

## Estrutura forense 1 — preliminar na resposta à acusação

A preliminar abre a resposta à acusação (peça integral no agente `defesa-criminal-resposta-acusacao`; aqui, o módulo da tese):

```
I — PRELIMINARMENTE: DA INÉPCIA DA DENÚNCIA (CPP, arts. 41 e 395, I)

1. Da narrativa genérica — transcrever o trecho da denúncia que imputa o fato
   "aos sócios/administradores" e demonstrar, pergunta a pergunta, o que a peça
   NÃO responde quanto ao acusado: qual ato? quando? com que poder? com que dolo?

2. Da distinção denúncia geral × genérica — demonstrar que não se trata de fato
   único atribuído a todos (geral), mas de imputação indeterminada pelo cargo
   (genérica), fora da mitigação admitida para crimes societários.

3. Da vedação à responsabilidade penal objetiva — CF 5º, XLV; CP 13 e 29;
   posição societária não é conduta. Instruir com contrato social, atas,
   organograma e alçadas (quem geria a área do fato).

4. Do uso indevido da teoria do domínio do fato — se invocada, demonstrar que a
   denúncia não descreve domínio concreto algum [precedente atual: pesquisar via
   jurisprudencia-stj-stf e marcar NÃO VERIFICADO até validação].

5. (Se houver) Da delegação e do compliance — documentar a estrutura decisória
   que quebra o nexo entre o denunciado e o fato.

6. Do pedido preliminar — reconsideração do recebimento e rejeição da denúncia
   (art. 395, I) ou, subsidiariamente, absolvição sumária (art. 397) quando a
   atipicidade da conduta do acusado for manifesta; no mínimo, o reconhecimento
   da nulidade desde o recebimento (CPP 564, IV c/c 395, I).

II — NO MÉRITO (eventualidade)
   Desenvolver as teses de mérito normalmente — a preliminar NUNCA vem sozinha.
```

## Estrutura forense 2 — HC de trancamento

Estrutura completa do remédio (impetração, liminar, autoridade coatora) na skill `habeas-corpus`; para tribunais superiores, `hc-tribunais-superiores`. O núcleo específico do trancamento por denúncia genérica:

| Elemento | Conteúdo |
|---|---|
| **Endereçamento** | Ato do juiz de 1º grau → **TJ/TRF**; acórdão denegatório → **STJ**; nunca salte instância (jurisprudência consolidada não conhece de HC *per saltum* — vedação à supressão de instância) |
| **Autoridade coatora** | O juízo que **recebeu** a denúncia (o recebimento é o ato coator) |
| **Causa de pedir** | Inépcia manifesta (CPP 41 e 395, I) + falta de justa causa (CPP 648, I) — demonstráveis **de plano**, pela simples leitura da denúncia, sem dilação probatória |
| **Prova pré-constituída** | Denúncia integral, decisão de recebimento, contrato social/atas/organograma, resposta à acusação já apresentada |
| **Liminar** | Suspensão do processo (ou de atos instrutórios) até o julgamento do mérito do HC |
| **Pedido** | Trancamento da ação penal **quanto ao paciente** (o trancamento pode ser parcial, réu a réu) |

> **Argumento de fecho:** o processo penal é, em si, um constrangimento (estigma, custos, medidas assecuratórias, repercussão empresarial). Submeter alguém à instrução com base em peça que não diz o que ele fez é impor pena antes do processo válido.

## Erros comuns e pegadinhas

- **Preclusão pela sentença:** a orientação consolidada é a de que a inépcia deve ser arguida **antes da sentença** — sobrevindo condenação, a alegação fica superada (o vício da narrativa é absorvido pelo juízo de mérito). Argua na **primeira oportunidade** (resposta à acusação) e reforce por HC; não guarde a tese para a apelação.
- **Não confunda inépcia com mérito:** "não há prova do dolo" é mérito; "a denúncia não descreve a conduta" é inépcia. Misturar os planos convida o tribunal a dizer que a tese demanda instrução — e o HC morre por não caber revolvimento probatório.
- **Rejeitada ≠ enterrada:** a rejeição por inépcia (e o trancamento por inépcia) fazem apenas coisa julgada **formal** — o MP pode oferecer **nova denúncia** corrigida enquanto não prescrever. Alinhe a expectativa do cliente; o trancamento por **falta de justa causa** ou atipicidade tende a ser mais definitivo.
- **Contra o recebimento não cabe recurso:** o RESE do art. 581, I, socorre a **acusação** contra a rejeição; para a defesa, o caminho contra o recebimento é a preliminar do 396-A + **HC**. Não perca prazo procurando recurso que não existe.
- **Prazo da resposta à acusação:** 10 dias da citação (CPP 396), contados na forma do CPP 798, §1º — dias **corridos**, excluído o dia do começo e incluído o do vencimento (não se aplicam os dias úteis do CPC); Defensoria Pública tem prazo **em dobro** (LC 80/94). Perdido o prazo com defensor constituído, o juiz nomeia defensor para apresentá-la (396-A, §2º) — mas a preliminar terá a profundidade que o dativo lhe der. Não terceirize a melhor tese do caso.
- **Endereçamento do HC:** impetrar direto no STJ/STF contra ato do juiz de 1º grau = não conhecimento por supressão de instância. Suba degrau por degrau (salvo flagrante ilegalidade que autorize concessão de ofício — não conte com ela).
- **Denúncia "geral" travestida:** se a denúncia descreve UM ato concreto comum a todos (assinatura coletiva de documento, deliberação em ata), a preliminar de inépcia tende a falhar. Redirecione: ataque a justa causa (o ato descrito liga mesmo o seu cliente?) e o mérito.
- **Aditamento no meio do caminho:** arguida a inépcia, o MP pode aditar a denúncia para individualizar. O aditamento reabre resposta e não convalida atos praticados sob a peça inepta — peça a renovação dos atos se houver prejuízo (CPP 563).
- **Citar julgado de memória:** os limites da mitigação em crimes societários oscilam entre turmas. Todo precedente vai por pesquisa do agente `jurisprudencia-stj-stf`, marcado [NÃO VERIFICADO] até o `verificador-citacoes` aprovar. Dispositivo alterado por lei recente — conferir via `lei-e-sumula`.

## Checklist antes de protocolar

- [ ] A denúncia foi lida **linha a linha** com o agente `analise-denuncia` (mapa de imputações por réu)?
- [ ] O teste geral × genérica foi aplicado: há **ato concreto** descrito para o cliente ou só o cargo?
- [ ] Contrato social, atas, organograma e alçadas anexados (quem geria a área do fato)?
- [ ] Delegação/compliance documentados (procurações, código de conduta, auditorias)?
- [ ] Inépcia (narrativa) e falta de justa causa (lastro) arguidas **cumulativamente**?
- [ ] Preliminar no 396-A **e** HC em paralelo, cada um no endereçamento correto?
- [ ] Nicho conferido: SV 24 / lançamento definitivo (tributários); poder de decisão sobre repasses (previdenciários); art. 25 da Lei 7.492 sem presunção (financeiros); ciência + poder de impedir (ambientais)?
- [ ] Precedentes pesquisados via `jurisprudencia-stj-stf` e validados pelo `verificador-citacoes` — nada citado de memória?
- [ ] Mérito desenvolvido em eventualidade (a preliminar nunca vai sozinha)?

## Apoie-se em

- **Agente `analise-denuncia`** — dissecação da peça acusatória e mapa de imputações por réu: é o insumo desta skill (a skill dá o instituto; o agente dá o diagnóstico do caso concreto).
- **Agente `defesa-criminal-resposta-acusacao`** — redige a resposta à acusação completa; esta skill fornece o módulo da preliminar de inépcia.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais sobre denúncia genérica, autoria coletiva e domínio do fato (sempre marcar [NÃO VERIFICADO] até validação).
- **Agente `verificador-citacoes`** — gate obrigatório: nenhuma súmula, tema ou julgado entra na peça sem verificação.
- **Skill `habeas-corpus`** — estrutura completa do HC de trancamento (impetração, liminar, autoridade coatora, endereçamento).
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima: teoria do caso, narrativa, subsunção explícita e persuasão na redação final (aplicar SEMPRE).
- **BP `defesa-crimes-tributarios`** — teses de fundo do nicho tributário (SV 24, parcelamento, pagamento, dolo específico) que complementam a preliminar desta skill.
