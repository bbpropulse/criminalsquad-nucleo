---
name: imunidade-parlamentar-inviolabilidade-vereador
description: >-
  Use ao analisar, sustentar ou refutar imunidade parlamentar (material e formal), inviolabilidade
  do vereador e foro por prerrogativa de função de agentes políticos (CF, arts. 53; 27, §1º; 29,
  VIII). Gatilhos: imunidade parlamentar, imunidade material, inviolabilidade, imunidade
  formal/processual, opiniões palavras e votos, nexo funcional, vereador…. Não use para conclusão
  definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, imunidade-parlamentar, agentes-politicos, prerrogativa-foro]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-imunidade-parlamentar-inviolabilidade-vereador"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["imunidade-parlamentar-inviolabilidade-vereador", "imunidade parlamentar", "inviolabilidade vereador"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Imunidade parlamentar e inviolabilidade do vereador (CF, arts. 53; 27, §1º; 29, VIII)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **análise e a sustentação** das prerrogativas penais dos agentes políticos: a **imunidade material** (inviolabilidade por opiniões, palavras e votos), a **imunidade formal** (processual — prisão e sustação do processo), a **inviolabilidade do vereador** e o **foro por prerrogativa de função**. É matéria de dupla utilidade: a **defesa** invoca a prerrogativa para trancar/absolver; a **acusação e a assistência** delimitam o seu alcance (nexo funcional, território, relação com o cargo).

> **Lição central:** o erro que mais custa é **confundir imunidade material com formal** e **estender ao vereador o que só cabe ao parlamentar federal/estadual**. Antes de qualquer tese, **classifique o agente** (deputado federal/senador · deputado estadual · vereador) e **o tipo de prerrogativa** em jogo (material = exclui o crime; formal = obstáculo processual; foro = competência). São eixos distintos, com requisitos e efeitos próprios.

> **Cautela de vigência (obrigatória antes de citar):** o regime da imunidade formal foi **reescrito pela EC 35/2001** — não existe mais "licença prévia" da Casa para processar; hoje o STF recebe a denúncia e a Casa pode **sustar** o andamento. A **Súmula 394/STF foi cancelada**. O alcance do foro foi **restringido pelo STF (AP 937 QO)**. Confirme a redação vigente dos arts. 53, 27 e 29 da CF e todo precedente/súmula pela skill `jurisprudencia-stj-stf` antes de fundamentar.

## Quadro comparativo — quem tem o quê

| Prerrogativa | Deputado Federal / Senador | Deputado Estadual | Vereador |
|---|---|---|---|
| **Imunidade material** (opiniões/palavras/votos) | Sim (art. 53, *caput*) | Sim, por simetria (art. 27, §1º) | Sim, **limitada** (art. 29, VIII) |
| Limite territorial da material | Não há | Não há | **Só na circunscrição do Município** |
| **Imunidade formal — prisão** | Sim (art. 53, §2º) | Sim, por simetria | **Não** |
| **Imunidade formal — sustação do processo** | Sim (art. 53, §§3º–5º) | Sim, por simetria | **Não** |
| **Foro por prerrogativa** | STF (art. 53, §1º) | TJ/TRF/TRE (Const. Estadual + simetria) | **Em regra não há** (1º grau) |

## Base legal

- **CF, art. 53, *caput*** — imunidade **material**: Deputados e Senadores são invioláveis, civil e penalmente, por quaisquer de suas **opiniões, palavras e votos**.
- **CF, art. 53, §1º** — **foro**: julgamento perante o **STF**, desde a expedição do diploma.
- **CF, art. 53, §2º** — **prisão** só em **flagrante de crime inafiançável**; autos remetidos em 24h à Casa, que decide pela maioria.
- **CF, art. 53, §§3º a 5º** — **sustação do processo** por crime ocorrido **após a diplomação**, por iniciativa de partido e voto da maioria; a sustação **suspende a prescrição** enquanto durar o mandato.
- **CF, art. 53, §6º** — parlamentar **não é obrigado a testemunhar** sobre informações recebidas/prestadas em razão do mandato.
- **CF, art. 53, §8º** — as imunidades **subsistem no estado de sítio** (salvo suspensão por 2/3, para atos fora do recinto incompatíveis com a medida).
- **CF, art. 27, §1º** — **simetria**: aos **deputados estaduais** aplicam-se as regras da CF sobre inviolabilidade e imunidades.
- **CF, art. 29, VIII** — **inviolabilidade do vereador** por opiniões, palavras e votos **no exercício do mandato e na circunscrição do Município**.
- **EC 35/2001** — instituiu o regime atual (fim da licença prévia; sustação).

## Imunidade material (art. 53, *caput*) — a que exclui o crime

- **Natureza:** prevalece que é causa de **exclusão do próprio crime (atipicidade/irresponsabilidade penal absoluta)** — não simples isenção de pena. Efeito prático: o fato é **penal e civilmente impunível**; a ação deve ser **rejeitada ou trancada**.
- **Alcance:** opiniões, palavras e votos em qualquer suporte — discursos, votos, relatórios, pareceres, entrevistas, publicações e **redes sociais** —, inclusive a **divulgação/reprodução** dessas manifestações.
- **Requisito-chave — nexo funcional:**
  - **Dentro do recinto da Casa / no exercício típico da função:** cobertura ampla (presume-se a conexão com o mandato).
  - **Fora do Parlamento:** exige **nexo de pertinência** entre a manifestação e o exercício do mandato. Sem esse liame (ofensa de motivação pessoal/privada), **não há imunidade**.
- **Perpetuidade:** a inviolabilidade **adere ao ato** praticado sob o mandato — persiste ainda que o agente deixe o cargo, quanto àquele fato.

## Imunidade formal (processual) — obstáculo, não exclusão

Não afeta a existência do crime; é **prerrogativa de índole processual**. **Só parlamentares federais e estaduais** (por simetria) — **vereador não tem**.

- **Prisão (§2º):** desde a diplomação, o parlamentar **só pode ser preso em flagrante de crime inafiançável** (art. 5º, XLII–XLIV, CF — racismo, tortura/tráfico/terrorismo/hediondos, ação de grupos armados). Fora disso, prisão (inclusive preventiva) é vedada → **relaxamento**. Autos à Casa em 24h.
- **Sustação (§§3º–5º):** para crime **posterior à diplomação**, recebida a denúncia, o STF dá ciência à Casa, que **pode sustar** o processo (iniciativa de partido, voto da maioria, prazo de 45 dias). A sustação **suspende a prescrição**.
- **Marco temporal:** a imunidade formal de prisão vale **desde a expedição do diploma**; a sustação alcança apenas crimes **após a diplomação**.

## Foro por prerrogativa de função

- **Deputado federal/senador → STF** (art. 53, §1º). **Deputado estadual → TJ** (ou TRF/TRE conforme a matéria). **Vereador → em regra, 1º grau.**
- **Restrição do foro (AP 937 QO/STF):** o foro alcança **apenas crimes cometidos no exercício do cargo e em razão das funções**. Após a instrução (publicada a intimação para alegações finais), a **competência se perpetua**, não se alterando pelo fim do mandato. Crimes **estranhos à função** → juízo comum. `[Conferir tese e marco processual via jurisprudencia-stj-stf.]`
- **Vereador com foro em Constituição Estadual:** onde previsto, cede ao **Tribunal do Júri** nos **crimes dolosos contra a vida** (foro estadual não prevalece sobre competência constitucional do Júri). `[NÃO VERIFICADO — confirmar súmula vinculante aplicável e alcance via jurisprudencia-stj-stf.]`

## Metodologia — roteiro de análise (5 passos)

1. **Classifique o agente:** deputado federal/senador · deputado estadual · vereador (define quais prerrogativas existem — ver quadro).
2. **Identifique a prerrogativa em jogo:** material (mérito/atipicidade) · formal (prisão ou sustação) · foro (competência). Não as misture.
3. **Teste o nexo funcional:** a conduta é opinião/palavra/voto **ligada ao mandato**? Se vereador, foi também **na circunscrição do Município**?
4. **Escolha o veículo processual correto:**
   - Imunidade **material** → **rejeição da denúncia** por falta de justa causa (art. 395, III, CPP) · **absolvição sumária** (art. 397, III, CPP — o fato não constitui crime) · **trancamento por HC** (atipicidade).
   - Prisão ilegal → **relaxamento** (art. 5º, LXV, CF).
   - **Foro** → exceção de incompetência / declínio.
5. **Passe as citações pelo gate** (`jurisprudencia-stj-stf`) e submeta a **revisão humana**.

## Teses (defesa)

- **Atipicidade por imunidade material:** a manifestação é opinião/voto ligado ao mandato → exclusão do crime; rejeição ou absolvição sumária.
- **Nexo funcional presente:** discurso político, fala fiscalizatória, crítica a autoridade no debate público — pertinência com o exercício do mandato.
- **Vereador dentro dos limites:** manifestação **no exercício** e **na circunscrição** → inviolabilidade plena.
- **Prisão ilegal (parlamentar federal/estadual):** ausência de flagrante de crime inafiançável → relaxamento.
- **Incompetência / foro:** crime **no exercício e em razão da função** → deslocamento ao tribunal competente (ou, cessado o marco da AP 937, sua manutenção).

## Contra-teses (acusação / assistência)

- **Ausência de nexo funcional:** ofensa de motivação **pessoal/privada**, desvinculada do mandato → imunidade material não incide.
- **Vereador fora dos limites:** manifestação **fora da circunscrição** do Município ou **estranha ao mandato** → sem inviolabilidade.
- **Crime não relacionado à função:** afasta o foro (AP 937 QO) → competência do juízo comum.
- **Excesso doloso:** a prerrogativa cobre o debate, não crimes autônomos desvinculados (ameaça, extorsão, injúria de fundo privado).
- **Inaplicabilidade ao vereador** da imunidade formal e do foro federal — restrição literal do art. 29, VIII.

## Súmulas e precedentes (conferir vigência via `jurisprudencia-stj-stf`)

- **AP 937 QO/STF** — foro restrito a crimes cometidos **no cargo e em razão da função**; perpetuação da competência após a intimação para alegações finais. `[Conferir.]`
- **Súmula 394/STF — CANCELADA** — não citar como válida; serve apenas de alerta de vigência (foro não se prorroga automaticamente após o cargo).
- **Súmula vinculante sobre Júri × foro estadual** — a competência do Tribunal do Júri prevalece sobre foro instituído **apenas** por Constituição Estadual. `[NÃO VERIFICADO — confirmar número e redação via jurisprudencia-stj-stf.]`
- **Tese do nexo (imunidade material):** manifestações **no recinto** da Casa presumem-se cobertas; **fora**, exige-se nexo com o mandato. Prefira sustentar **tese + dispositivo (art. 53, caput)** a citar número de acórdão incerto. `[Conferir precedente específico.]`

## Erros comuns e anti-padrões

- Confundir imunidade **material** (exclui o crime) com **formal** (obstáculo processual) — tratam-se por veículos diferentes.
- Atribuir ao **vereador** imunidade **formal** (prisão/sustação) ou **foro federal** — ele só tem a **material limitada** (art. 29, VIII).
- Ignorar o **limite territorial** do vereador (circunscrição do Município) e o **nexo funcional**.
- Tratar a imunidade material como **isenção de pena** — é **atipicidade**, mais benéfica (permite absolvição sumária/rejeição).
- Invocar o regime de **licença prévia** (revogado pela **EC 35/2001**) ou a **Súmula 394/STF** (cancelada).
- Sustentar **foro** para crime **estranho à função** (contraria a AP 937 QO).
- Esquecer que a inviolabilidade material **adere ao ato** e é **perpétua** quanto àquele fato.
- Citar **número de acórdão** de memória — Citation Gate: prefira tese + dispositivo constitucional.

## Checklist

- [ ] Agente **classificado** (federal/senador · estadual · vereador) e prerrogativas mapeadas no quadro?
- [ ] Tipo de prerrogativa **identificado** (material · formal · foro) e não confundido?
- [ ] **Nexo funcional** testado? Se vereador, também o **limite territorial** (circunscrição)?
- [ ] Imunidade material veiculada pelo **instrumento correto** (art. 395, III / art. 397, III, CPP / HC)?
- [ ] Prisão conferida contra o **flagrante de crime inafiançável** (§2º)?
- [ ] Marco temporal (diplomação) e **restrição do foro** (AP 937) observados?
- [ ] **EC 35/2001** e **cancelamento da Súmula 394** respeitados (nada do regime antigo)?
- [ ] Toda súmula/precedente **conferido via `jurisprudencia-stj-stf`** e submetido a **revisão humana**?

## Nota de conformidade

- **Revisão humana obrigatória:** este material é apoio à preparação da tese, **hipótese a confirmar** — não substitui o juízo do profissional responsável nem a análise do caso concreto.
- **Citation Gate:** nenhuma súmula, tese ou acórdão citado de memória; tudo passa por `jurisprudencia-stj-stf`. Na dúvida sobre precedente específico, **marque `[NÃO VERIFICADO]` e omita antes de inventar**.
- **Ética por polo:** a skill serve à **defesa** (invocar a prerrogativa) e à **acusação/assistência** (delimitar seu alcance) — atue conforme o polo e a instituição (OAB/Prov. 205-2021, CNMP, LC 80/94), checando conflito de interesses na triagem.

## Lembretes finais

- **Classifique primeiro** (agente + tipo de prerrogativa); a tese vem depois.
- **Material exclui o crime** (atipicidade) — **formal** é obstáculo processual — **foro** é competência. Três eixos, não um.
- **Vereador:** só imunidade **material**, e **no exercício + na circunscrição**; sem imunidade formal, sem foro federal.
- **Regime atual = EC 35/2001** (sustação, não licença); **Súmula 394 cancelada**; **foro restrito** (AP 937 QO).
- **Sempre conferir** vigência e precedentes via `jurisprudencia-stj-stf` antes de peticionar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
