---
name: excecao-da-verdade-honra
description: >-
  Use ao arguir ou impugnar a EXCEÇÃO DA VERDADE (exceptio veritatis) nos crimes contra a honra —
  incidente autônomo (CPP arts. 523-524) em que se prova a veracidade do fato imputado: hipóteses de
  cabimento e de vedação, calúnia (regra) × difamação (só contra funcionário público, sobre o
  exercício) × injúria (incabível), exceção da notoriedade, deslocamento de competência quando o
  excepto tem foro por prerrogativa de função… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca, honra, incidente-processual]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-excecao-da-verdade-honra"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["excecao-da-verdade-honra", "excecao verdade", "verdade honra"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Exceção da Verdade nos crimes contra a honra (CP arts. 138, §3º, e 139, p. único; CPP arts. 523-524)

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

Esta skill orienta a **arguição** (defesa/querelado ou réu) e a **impugnação** (acusação/querelante) da **exceção da verdade** — a *exceptio veritatis* — nos crimes contra a honra. É o **incidente processual autônomo** em que o autor da ofensa se propõe a **provar que o fato imputado é verdadeiro**; provada a verdade nas hipóteses em que a lei admite, **exclui-se o crime** (não há calúnia/difamação punível quando o fato é real e sua prova é permitida).

> **Lição central:** a exceção da verdade **não é regra geral** — ela **só cabe onde a lei expressamente admite**. Na **calúnia** é a **regra** (com três vedações do art. 138, §3º); na **difamação** só cabe **contra funcionário público e sobre o exercício da função** (art. 139, p. único); na **injúria** **não cabe** (não se imputa fato, mas juízo de valor). **Antes de excepcionar, classifique o crime** (calúnia, difamação ou injúria) — é a classificação que decide se a exceção é sequer cabível.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente** dos arts. 138, 139 e 140 do CP e dos arts. 519 a 524 do CPP na fonte oficial. Confira também súmulas, temas e eventual *overruling* pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) **antes** de fundamentar a peça. **Nenhuma súmula, tese ou acórdão entra na peça sem passar pelo gate** — há sanção real por jurisprudência inventada por IA.

## O que é e para que serve

- **Natureza:** incidente processual **autônomo** ao processo dos crimes contra a honra (rito dos arts. 519-523 CPP), com **processamento e julgamento próprios**, tramitando **apensado** ou **em conjunto** com a ação penal principal.
- **Objeto:** demonstrar que **o fato imputado à vítima é verdadeiro**. Não se discute a intenção de ofender (isso é mérito da ação principal), mas a **veracidade do fato**.
- **Efeito da procedência:** reconhecida a verdade nas hipóteses admitidas, **afasta-se a tipicidade/punibilidade** da ofensa — o querelado/réu é **absolvido** quanto àquele fato. A *exceptio veritatis* funciona como **causa de exclusão do crime** (o legislador não pune quem diz a verdade que lhe é lícito provar).
- **Distinção crucial:** a **exceção da verdade NÃO é uma das exceções processuais do art. 95 do CPP** (suspeição, incompetência, litispendência, ilegitimidade de parte, coisa julgada). Aquelas se resolvem pela skill `excecoes-processuais`; a *exceptio veritatis* é **incidente específico dos crimes contra a honra** (arts. 523-524 CPP). Não confundir.

## Base legal

- **Art. 138, §3º, CP** — na **calúnia**, admite-se a prova da verdade, **salvo** nas três hipóteses vedadas (ver abaixo).
- **Art. 139, parágrafo único, CP** — na **difamação**, a exceção da verdade **só** cabe se o ofendido é **funcionário público** e a ofensa é **relativa ao exercício de suas funções**.
- **Art. 140, CP (injúria)** — **não** admite exceção da verdade (imputa-se qualidade/juízo, não fato); a lei prevê, para a injúria, apenas o **perdão judicial** (art. 140, §1º) e a **retorsão**, não a prova da verdade.
- **Arts. 519 a 522 CPP** — procedimento dos crimes contra a honra de competência do juiz singular (com a **tentativa de reconciliação/audiência prévia** — art. 520).
- **Art. 523, CPP** — quando for **oferecida a exceção da verdade ou da notoriedade** do fato, o querelante pode **contestá-la no prazo de 2 (dois) dias**, podendo requerer/produzir prova; segue-se o julgamento.
- **Art. 524, CPP** — no processo por crime contra a honra, com **exceção da verdade** ou **notoriedade**, se o querelante for **pessoa com foro por prerrogativa de função** (as autoridades ali indicadas), a exceção será **remetida ao tribunal competente** para julgá-la (**deslocamento de competência** do incidente). Confirmar o rol e a redação vigentes.

## Regra de cabimento por tipo penal (decorar)

| Crime | Cabe exceção da verdade? | Fundamento / condição |
|-------|--------------------------|-----------------------|
| **Calúnia** (art. 138) | **SIM — regra geral**, salvo as 3 vedações | Art. 138, §3º, CP |
| **Difamação** (art. 139) | **SÓ** se o ofendido é **funcionário público** **e** o fato é **relativo ao exercício da função** | Art. 139, p. único, CP |
| **Injúria** (art. 140) | **NÃO** (jamais) | Não se imputa fato, mas juízo de valor |

> **Ponto de prova/OAB:** a difamação **de particular** **não** admite exceção da verdade — o cabimento na difamação é **restrito** ao funcionário público **e** ao fato **funcional**. Faltando qualquer dos dois requisitos, a exceção é **inadmissível**.

## As três vedações na calúnia (art. 138, §3º, CP) — decorar

Na **calúnia**, embora a prova da verdade seja a regra, ela é **VEDADA** em três hipóteses:

1. **I —** se, constituindo o fato imputado crime de **ação penal privada**, o ofendido **não foi condenado por sentença irrecorrível** (ainda não há trânsito em julgado da condenação por aquele crime de ação privada).
2. **II —** se o fato é imputado a **Presidente da República** ou a **chefe de governo estrangeiro** (proteção institucional — confirmar redação/rol vigentes).
3. **III —** se do crime imputado, embora de **ação pública**, o ofendido foi **absolvido por sentença irrecorrível**.

> **Racional:** as vedações I e III protegem a **coisa julgada** e evitam rediscutir, na ação de honra, aquilo que o Judiciário já decidiu (ou ainda não decidiu, nos crimes de ação privada). A vedação II é de **proteção institucional**. Fora dessas três hipóteses, na calúnia a prova da verdade é **admitida**.

## A exceção da notoriedade (art. 523 CPP)

Ao lado da exceção da **verdade**, o art. 523 do CPP menciona a exceção da **notoriedade** do fato: quando o fato imputado é **notório** (de conhecimento público e incontroverso), sustenta-se que a demonstração é **desnecessária** por evidência. Processualmente segue a **mesma sistemática** (contestação em 2 dias — art. 523; deslocamento do art. 524 se houver foro). **Distinguir:** a **notoriedade** dispensa a prova pela evidência pública do fato; a **verdade** exige a **produção de prova** da veracidade.

## Processamento — passo a passo (arts. 519-524 CPP)

1. **Momento de oferecer:** a exceção é arguida pela **defesa** (querelado/réu) na **oportunidade de resposta/defesa** no rito dos crimes contra a honra. **Confirmar o marco temporal exato** no rito aplicável (queixa-crime/ação privada; ou ação pública na difamação de funcionário) — ponto sensível de preclusão.
2. **Autuação:** processa-se como **incidente**, apensado ou em conjunto com a ação principal.
3. **Contestação (art. 523):** oferecida a exceção da verdade **ou** da notoriedade, o **querelante** (excepto) é intimado a **contestá-la em 2 (dois) dias**, podendo indicar e requerer provas (inclusive inquirir as testemunhas arroladas na queixa e outras).
4. **Instrução:** produzem-se as provas da **veracidade** (documentos, testemunhas, perícias) e da **contestação**.
5. **Deslocamento (art. 524):** se o **excepto** (ofendido/querelante) tiver **foro por prerrogativa de função**, o **julgamento da exceção** é **remetido ao tribunal competente** — o juízo de 1º grau instrui, mas **não julga** a exceção; **quem julga é o tribunal do foro**. A ação principal pode seguir no juízo de origem; a **exceção** vai ao tribunal.
6. **Julgamento:** decide-se a exceção. **Procedente** → reconhece-se a verdade/notoriedade → reflexo **absolutório** na ação principal quanto àquele fato. **Improcedente** → a ação de honra segue seu curso normal.

## Estrutura da petição de exceção da verdade (DEFESA / querelado)

> Peça **autônoma**, endereçada ao juízo do processo de honra, oferecida com/na resposta à queixa. Adaptar ao caso concreto e ao rito aplicável.

```
EXCELENTÍSSIMO(A) SENHOR(A) DOUTOR(A) JUIZ(A) DE DIREITO DA [VARA] DA COMARCA DE
[COMARCA]

Autos nº [Nº DA AÇÃO PENAL — queixa-crime]

[NOME DO QUERELADO], já qualificado nos autos da ação penal em epígrafe, por seu
advogado que esta subscreve (procuração anexa), vem, respeitosamente, com
fundamento no art. 138, §3º [ou art. 139, parágrafo único], do Código Penal, e no
art. 523 do Código de Processo Penal, oferecer

EXCEÇÃO DA VERDADE [e/ou EXCEÇÃO DA NOTORIEDADE]

em face de [NOME DO QUERELANTE], pelas razões de fato e de direito a seguir
expostas.

I — DA ADMISSIBILIDADE (cabimento)

O querelado foi acusado de [CALÚNIA — art. 138 / DIFAMAÇÃO de funcionário público —
art. 139] por ter imputado ao querelante o fato de [DESCREVER O FATO IMPUTADO].

Tratando-se de [calúnia, a prova da verdade é a regra (art. 138, §3º), não incidindo
nenhuma das três vedações legais / difamação contra funcionário público relativa ao
exercício da função (art. 139, parágrafo único), o querelante é [CARGO/FUNÇÃO
PÚBLICA] e o fato imputado diz respeito ao exercício de suas funções], é cabível a
presente exceção da verdade.

II — DA VERDADE DO FATO IMPUTADO

O fato imputado é VERDADEIRO, como se demonstra por [documentos anexos / rol de
testemunhas / perícia], a saber: [ARTICULAR A PROVA DA VERACIDADE].

[Se notoriedade: o fato é de conhecimento público e incontroverso, conforme
(demonstrar a notoriedade), sendo desnecessária prova adicional.]

III — DO PEDIDO

Requer:
a) o recebimento e processamento da presente exceção da verdade [e/ou da
   notoriedade], com intimação do querelante para contestá-la no prazo de 2 (dois)
   dias (art. 523 do CPP);
b) a produção das provas arroladas (documental, testemunhal [e pericial]);
c) ao final, a PROCEDÊNCIA da exceção, reconhecendo-se a veracidade [/notoriedade]
   do fato imputado, com o consequente reflexo ABSOLUTÓRIO na ação penal principal;
[d) se o querelante detém foro por prerrogativa de função (art. 524 do CPP), a
   remessa da exceção ao [TRIBUNAL COMPETENTE] para julgamento.]

Rol de testemunhas: [...]. Documentos anexos: [...].

Termos em que, pede deferimento.

[LOCAL], [DATA].

[NOME DO ADVOGADO] — OAB/[UF] nº [NÚMERO]
```

**Campos a preencher:** [COMARCA], [VARA], [Nº DA AÇÃO PENAL], [NOME DO QUERELADO], [NOME DO QUERELANTE], [FATO IMPUTADO], tipo penal (calúnia/difamação), [CARGO/FUNÇÃO PÚBLICA], [ARTICULAÇÃO DA PROVA], rol de testemunhas, documentos, [TRIBUNAL COMPETENTE], [LOCAL], [DATA], [NOME DO ADVOGADO], [UF], [NÚMERO] OAB.

## Teses da DEFESA (quem oferece a exceção)

1. **Enquadramento no cabimento** — demonstrar que o crime é **calúnia** (regra do §3º) ou **difamação de funcionário público sobre a função** (art. 139, p. único); afastar as três vedações do §3º na calúnia.
2. **Prova robusta da veracidade** — articular já na petição a prova concreta (documental primeiro; testemunhal e pericial em reforço). A exceção sem lastro probatório tende à improcedência.
3. **Notoriedade como reforço/alternativa** — se o fato é público e incontroverso, cumular a **exceção da notoriedade** (art. 523), dispensando prova pela evidência.
4. **Reflexo absolutório** — sustentar que a procedência da exceção **exclui o crime** contra a honra quanto àquele fato (não há punição de quem prova a verdade que lhe é lícito provar).
5. **Interesse público (difamação funcional)** — no art. 139, p. único, enfatizar o **controle social do agente público** e a relevância do fato **funcional** (fiscalização da coisa pública).

## Teses da ACUSAÇÃO / querelante (quem impugna — art. 523)

> Esta parte serve ao **querelante** e ao **assistente de acusação**. O chefe-roteador deve **conferir o polo** da instituição (company.md) antes de aplicá-la; a skill é neutra quanto ao polo, mas o foco majoritário do CriminalSquad é a defesa.

1. **Inadmissibilidade por tipo penal** — se o crime é **injúria**, a exceção **não cabe** (não há fato a provar). Se é **difamação de particular**, também **não cabe** (falta o requisito de funcionário público / fato funcional).
2. **Incidência de vedação (calúnia)** — invocar o art. 138, §3º, I, II ou III (ação privada sem condenação irrecorrível; ofensa a Presidente/chefe de governo estrangeiro; absolvição irrecorrível em crime de ação pública) para **barrar** a prova da verdade.
3. **Contestação tempestiva (2 dias — art. 523)** — impugnar a veracidade, requerer contraprova e inquirir testemunhas; **não** deixar precluir o prazo.
4. **Fato funcional ausente (difamação)** — sustentar que a ofensa **não** se refere ao exercício da função, retirando o cabimento do art. 139, p. único.
5. **Verdade não demonstrada** — atacar a insuficiência/ilicitude da prova da veracidade; verdade **duvidosa** ou **parcial** não basta para a procedência.

## Súmulas, precedentes e pontos sob o Citation Gate

> **Nada aqui entra na peça sem verificação.** Os dispositivos de lei (CP arts. 138-140; CPP arts. 519-524) são de citação segura na **redação vigente**. Qualquer **precedente específico** (número de HC/REsp/RE, informativo, tema, tese firmada) deve ser confirmado via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso.

- **Foro por prerrogativa e deslocamento (art. 524 CPP):** a competência para **julgar a exceção** quando o excepto tem foro é do tribunal — há entendimento consolidado, mas o **rol de autoridades** e a **extensão do deslocamento** variam; **confirmar** antes de afirmar competência. [NÃO VERIFICADO — conferir precedentes específicos do STF/STJ sobre o alcance do art. 524 via `jurisprudencia-stj-stf`.]
- **Exceção da verdade e imunidade parlamentar/advocatícia:** a interação entre exceção da verdade, **imunidade material** (CF art. 53; imunidade do advogado — EAOAB art. 7º, §2º) e **animus narrandi/criticandi** é objeto de jurisprudência específica; **não citar número** sem conferência. [NÃO VERIFICADO — conferir via `jurisprudencia-stj-stf`.]
- **Regra:** prefira **ensinar a tese e o dispositivo** (art. 138, §3º; art. 139, p. único; arts. 523-524 CPP) a arriscar um número de acórdão. Na dúvida, **omitir vence inventar**.

## Erros comuns e checklist

**Anti-padrões (evitar):**
- **Oferecer exceção da verdade na injúria** — jamais cabe (não há fato a provar).
- **Oferecer na difamação de particular** — só cabe contra **funcionário público** e sobre o **exercício da função**.
- **Ignorar as três vedações do art. 138, §3º** na calúnia (ação privada sem condenação; Presidente/chefe estrangeiro; absolvição irrecorrível em ação pública).
- **Confundir com as exceções do art. 95 CPP** (suspeição, incompetência, litispendência, ilegitimidade, coisa julgada) — aquelas são da skill `excecoes-processuais`.
- **Esquecer o deslocamento do art. 524** quando o excepto tem foro por prerrogativa de função.
- **Oferecer a exceção sem lastro probatório** da veracidade — a mera alegação não a sustenta.
- **Perder o prazo de contestação de 2 dias** (art. 523), do lado do querelante.
- **Citar precedente de memória** sem passar pelo gate `verificacao-citacoes`.

**Checklist de admissibilidade e processamento:**
- [ ] Crime **classificado** (calúnia / difamação / injúria) **antes** de decidir o cabimento?
- [ ] Se **calúnia**: nenhuma das **três vedações** do art. 138, §3º incide?
- [ ] Se **difamação**: ofendido é **funcionário público** **e** o fato é **relativo ao exercício da função** (art. 139, p. único)?
- [ ] Se **injúria**: reconhecido que a exceção **não cabe**?
- [ ] **Prova da veracidade** articulada e anexada (documental/testemunhal/pericial)?
- [ ] **Notoriedade** cumulada quando o fato é público e incontroverso (art. 523)?
- [ ] **Excepto tem foro** por prerrogativa de função? → prever **remessa ao tribunal** (art. 524).
- [ ] **Prazo** de oferecimento (defesa) e de **contestação de 2 dias** (querelante — art. 523) observados?
- [ ] Redação **vigente** dos arts. 138-140 CP e 519-524 CPP conferida na fonte oficial?
- [ ] Súmulas/precedentes conferidos via `jurisprudencia-stj-stf` / `verificacao-citacoes` antes de citar?
- [ ] **Revisão humana** do advogado responsável antes de protocolar?

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da peça e ao estudo do incidente; **não** substitui o juízo do profissional nem a leitura dos autos concretos e do rito aplicável. A responsabilidade pela arguição/impugnação e pelas provas é sempre do **advogado** (CED/OAB, art. 2º).
- **Ética por polo:** advocacia — OAB/EAOAB e **Provimento 205/2021** (comunicação e publicidade); Ministério Público/assistente de acusação — **CNMP**; Defensoria — **LC 80/94**. O chefe-roteador deve **conferir o polo** da instituição (company.md) — a skill é neutra, mas o **foco majoritário é a defesa**.
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf` (há sanções reais por jurisprudência inventada por IA).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
