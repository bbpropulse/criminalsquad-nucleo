---
name: excecoes-processuais
description: >-
  Use ao redigir exceções processuais no processo penal (CPP, arts. 95-112) — exceção de suspeição e
  de impedimento (juiz, MP, peritos, serventuários, jurados), exceção de incompetência do juízo
  (absoluta × relativa, declinatória de foro), litispendência, ilegitimidade de parte e coisa
  julgada —, e ao suscitar questão prejudicial (CPP 92-94) com pedido de suspensão do processo.
  Gatilhos: exceção de suspeição, exceção de… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-excecoes-processuais"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["excecoes-processuais", "excecoes processuais"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Exceções Processuais (CPP, arts. 95-112)

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

Esta skill orienta a redação das **exceções** — as defesas processuais (indiretas) do processo penal que atacam **o processo ou o julgador**, não o mérito da imputação. Cobre o rol do art. 95 do CPP (suspeição, incompetência de juízo, litispendência, ilegitimidade de parte e coisa julgada), o **impedimento** (art. 252) e a **incompatibilidade** (art. 112), que seguem o rito da suspeição, além da **questão prejudicial** (arts. 92-94) como técnica de suspensão do processo.

> **Lição central:** exceção é peça de **três acertos obrigatórios**: (1) o **instituto certo** para o vício certo (suspeição ≠ impedimento ≠ incompetência); (2) o **momento certo** — a incompetência **relativa** preclui se não arguida no prazo da defesa (art. 108 c/c art. 396-A, § 1º); a suspeição deve ser arguida na **primeira oportunidade após a ciência do motivo** (preclusão consolidada na jurisprudência) e **precede qualquer outra** exceção (art. 96); (3) o **endereçamento certo** — a suspeição é dirigida **ao próprio juiz excepto**, não ao tribunal. Errar qualquer um dos três compromete a peça inteira.

> **Regra de processamento (art. 111):** as exceções correm em **autos apartados** e, **em regra, não suspendem** o andamento da ação penal. Não prometa ao cliente paralisação do processo pela simples oposição da exceção.

## O rol do art. 95 e a classificação que orienta o pedido

| Exceção (art. 95) | Natureza | Efeito se procedente |
|---|---|---|
| I — **Suspeição** (+ impedimento, art. 252, e incompatibilidade, art. 112) | Dilatória | Afasta o julgador; **ficam nulos os atos do processo principal** (art. 101; art. 564, I) |
| II — **Incompetência de juízo** | Dilatória | Remessa ao juízo competente; anulam-se os **atos decisórios** (art. 567) |
| III — **Litispendência** | Peremptória | Extingue o processo repetido (*ne bis in idem* processual) |
| IV — **Ilegitimidade de parte** | Peremptória (*ad causam*) / Dilatória (*ad processum*, sanável — art. 568) | Nulidade (art. 564, II) ou ratificação dos atos |
| V — **Coisa julgada** | Peremptória | Extingue o processo (*ne bis in idem* material) |

- **Dilatórias** deslocam ou retardam o processo (suspeição, impedimento, incompetência).
- **Peremptórias** o extinguem (litispendência, coisa julgada, ilegitimidade *ad causam*).
- A distinção orienta o **pedido final**: remessa/afastamento × extinção.

## Mapa — qual exceção (ou via) cabe em cada situação

| Situação concreta | Instituto | Base legal |
|---|---|---|
| Juiz amigo íntimo/inimigo capital da parte, aconselhou a parte, credor/devedor, sócio de interessada | **Exceção de suspeição** | CPP 95, I; 254 |
| Juiz que atuou no feito como MP, defensor, perito ou testemunha; parente atuando no processo; juiz que se pronunciou em outra instância | **Exceção de impedimento** (rito da suspeição) | CPP 252; 112 |
| Membro do MP, perito, intérprete ou serventuário suspeito/impedido | Arguição ao **juiz da causa**, que decide | CPP 104; 105 |
| **Jurado** suspeito/impedido | Arguição **oral, no plenário**, decidida de plano pelo juiz presidente | CPP 106; 448-449 |
| Autoridade policial suspeita no inquérito | **Não cabe exceção** — apenas dever de autodeclaração | CPP 107 |
| Processo em vara territorialmente errada (competência **relativa**) | **Exceção de incompetência** (declinatória) — no prazo da defesa, sob pena de **preclusão** | CPP 108; 396-A, § 1º |
| Violação de competência **absoluta** (matéria, prerrogativa de função, Justiça especializada, júri) | Incompetência arguível **a qualquer tempo** (também por exceção); reconhecível de ofício | CPP 109; 564, I; SV 45 |
| Dois processos **pendentes** pelo mesmo fato contra o mesmo réu | **Exceção de litispendência** | CPP 95, III; 110 |
| Fato principal **já sentenciado definitivamente** | **Exceção de coisa julgada** | CPP 95, V; 110, § 2º |
| Denúncia do MP em crime de **ação penal privada** (ou queixa de quem não é ofendido) | **Exceção de ilegitimidade de parte** | CPP 95, IV; 564, II; 568 |
| Existência do crime depende de controvérsia séria sobre **estado civil** (ex.: bigamia × nulidade do 1º casamento) | **Questão prejudicial obrigatória** — suspensão do processo e da prescrição | CPP 92; CP 116, I |
| Outra questão cível, de difícil solução, **já ajuizada** | **Questão prejudicial facultativa** — suspensão por prazo marcado | CPP 93 |
| Coisa julgada/litispendência flagrantes com réu sofrendo constrangimento | Exceção **+** avaliar **habeas corpus** para trancamento — ver skill **habeas-corpus** | CF 5º, LXVIII; CPP 648, I |

> **Ordem de arguição (art. 96):** a suspeição **precede qualquer outra exceção**, salvo se fundada em motivo superveniente. Se houver suspeição e incompetência a arguir, apresente **primeiro** a suspeição — de nada adianta o juízo certo com o juiz errado.

## Exceção 1 — Suspeição (arts. 96-107; hipóteses do art. 254)

Ataca a **imparcialidade subjetiva** do julgador — vínculo do juiz **com as partes**. Hipóteses do art. 254: amizade íntima ou inimizade capital; juiz (ou cônjuge/ascendente/descendente) respondendo a processo por fato análogo; demanda com a parte; ter **aconselhado** a parte; relação de crédito/débito, tutela/curatela; sócio, acionista ou administrador de sociedade interessada.

**Rito (a parte mais cobrada na prática):**
1. **Petição dirigida ao próprio juiz excepto**, assinada **pela própria parte ou por procurador com poderes especiais** (art. 98) — procuração genérica **não basta**; junte instrumento específico.
2. Razões acompanhadas de **prova documental e/ou rol de testemunhas** (art. 98).
3. O juiz **aceita** (declara-se suspeito e remete a substituição — art. 99) **ou responde em 3 dias** e remete os autos apartados ao **tribunal**, que julga (art. 100).
4. Procedente: **ficam nulos os atos** praticados pelo juiz suspeito (art. 101); a suspeição é também causa de **nulidade** do art. 564, I.
5. Má-fé do excipiente pode gerar multa (art. 101, parte final) — não banalize a via.

**Extensões:** MP (art. 104 — o juiz decide, sem recurso), peritos/intérpretes/serventuários (art. 105 — decisão de plano), **jurados** (art. 106 — arguição **oral em plenário**, no momento do sorteio, decidida imediatamente pelo juiz presidente; por escrito depois, **precluiu**). Autoridade policial: **não se opõe suspeição** nos atos do inquérito (art. 107).

> O juiz também pode **afirmar espontaneamente a própria suspeição**, por escrito e **declarando o motivo legal** (art. 97 — o CPP não prevê "foro íntimo" sem motivação, regime do CPC 145, § 1º, de aplicação controvertida no processo penal). Se houver sinal disso nos autos, provoque antes por petição simples — mais rápido que a exceção.

## Exceção 2 — Impedimento (art. 252) e incompatibilidade (art. 112)

Ataca a **imparcialidade objetiva**: vínculo do juiz **com o processo** (não com as partes). Hipóteses do art. 252: cônjuge/parente atuou como defensor, MP, autoridade policial, auxiliar ou perito (I); o **próprio juiz** exerceu qualquer dessas funções ou foi testemunha (II); atuou como **juiz de outra instância, pronunciando-se de fato ou de direito sobre a questão** (III); ele ou parente é **parte ou diretamente interessado** (IV). O art. 253 veda, nos juízos coletivos, juízes **parentes entre si** (consanguíneos ou afins, em linha reta ou colateral, até o 3º grau).

- **Distinção que sustenta a tese:** suspeição = rol do art. 254, presunção **relativa**, subjetiva; impedimento = rol do art. 252, vício **objetivo e mais grave** — corrente doutrinária forte trata os atos do juiz impedido como **inexistentes** (não meramente nulos), o que afasta a lógica da preclusão.
- **Rito:** o CPP não criou procedimento próprio — o art. 112 manda o juiz **declarar-se impedido de ofício**; não o fazendo, a parte argui **pelo rito da suspeição** (arts. 98-101, por analogia — art. 3º).
- Para o **inventário de consequências** (nulidade × inexistência, necessidade de demonstração de prejuízo, art. 563), apoie-se no agente **mapa-nulidades**.

## Exceção 3 — Incompetência do juízo (arts. 108-109) — a declinatória

| | **Absoluta** (matéria, prerrogativa de função, júri) | **Relativa** (territorial) |
|---|---|---|
| Preclusão | **Não preclui** — arguível a qualquer tempo e grau | **Preclui** se não arguida no prazo da defesa (art. 108) |
| De ofício | Reconhecível a qualquer tempo (art. 109) | Divergência; a segurança da defesa é **arguir na resposta** |
| Efeito | Nulidade (art. 564, I); anulam-se os **atos decisórios** (art. 567) | Idem, com possibilidade de **ratificação** dos demais atos |
| Consequência prática | Remessa ao juízo competente | Remessa ao juízo competente |

- Forma: "oposta, **verbalmente ou por escrito**, no prazo de defesa" (art. 108) — na prática, sempre **por escrito**, em apartado, junto com a resposta à acusação (art. 396-A, § 1º).
- Aceita a declinatória, os autos vão ao juízo competente (art. 108, § 1º); **rejeitada**, o processo segue — a decisão que rejeita é **irrecorrível de imediato** (reitere como preliminar de apelação ou avalie HC).
- Súmulas consolidadas úteis: **Súmula 706 STF** (é **relativa** a nulidade por inobservância da competência por **prevenção**); **Súmula 704 STF** (atração por conexão/continência ao foro por prerrogativa não viola juiz natural); **Súmula Vinculante 45** (competência do júri prevalece sobre foro por prerrogativa de constituição **estadual**); **Súmula 235 STJ** (conexão não reúne processos se um já foi julgado).
- Fixação do momento consumativo/teoria da atividade e regras dos arts. 69-91 (conexão, continência, prevenção): desenvolva conforme o caso; para precedente atual sobre competência (ex.: crimes digitais, estelionato por depósito/PIX), **pesquise via agente jurisprudencia-stj-stf e verifique com verificador-citacoes; marque [NÃO VERIFICADO] o que não confirmar**.

## Exceções 4 e 5 — Litispendência e coisa julgada (art. 110)

Ambas protegem o ***ne bis in idem*** e seguem o rito da declinatória (art. 110, *caput*). São matérias de **ordem pública**: não precluem e podem ser conhecidas de ofício.

- **Litispendência:** dois processos **em curso** sobre o mesmo fato, contra o mesmo réu. Identidade que importa é a do **fato natural** (mesma conduta), ainda que as capitulações difiram. Prova: certidões/cópias das duas ações.
- **Coisa julgada:** o fato já foi **definitivamente julgado** (absolvição, condenação ou extinção da punibilidade). Limite legal: só quanto ao **fato principal** objeto da sentença (art. 110, § 2º).
- Se o constrangimento é flagrante (réu preso ou processo teratológico), a exceção convive com **habeas corpus para trancamento** — ver skill **habeas-corpus**.

## Exceção 6 — Ilegitimidade de parte (art. 95, IV)

- ***Ad causam*** (titularidade da ação): MP denunciando crime de **ação privada**; querelante que não é o ofendido nem seu representante (arts. 30-31). Efeito: **nulidade** (art. 564, II) — peremptória.
- ***Ad processum*** (capacidade processual): queixa ofertada por menor de 18 anos sem representante, defeito de representação. Efeito: **sanável** — a ilegitimidade do representante pode ser corrigida com **ratificação dos atos processuais** (art. 568) — dilatória.
- Antes de excepcionar, confira a espécie de ação penal do delito imputado (pública incondicionada/condicionada/privada) via agente **lei-e-sumula** quando houver dúvida sobre alteração legislativa recente (ex.: regime da ação penal no estelionato após a Lei 13.964/2019 — **não afirme de memória**).

## Questão prejudicial (arts. 92-94) — suspensão, não exceção

Não é exceção (não ataca o processo), mas mereceu o mesmo capítulo do CPP e cabe nesta peça quando a defesa **quer suspender** o feito:

| | **Obrigatória** (art. 92) | **Facultativa** (art. 93) |
|---|---|---|
| Objeto | **Estado civil das pessoas** (ex.: validade do casamento na bigamia) | Qualquer outra questão cível de difícil solução |
| Pressuposto | Controvérsia **séria e fundada**, de que dependa a existência do crime | Ação cível **já ajuizada** |
| Suspensão | **Obrigatória**, sem prazo, até o trânsito no cível | Facultativa, por **prazo marcado** (prorrogável) |
| Prescrição | **Suspensa** (CP, art. 116, I) | Suspensa enquanto durar a suspensão |
| Provas | Inquirição de testemunhas e provas urgentes prosseguem | Idem |

- A suspensão pode ser decretada de ofício ou a requerimento (art. 94). Da decisão que **ordena a suspensão** por prejudicial cabe **RESE** (art. 581, XVI) — ver skill **rese**.

## Estrutura forense da peça

**A) Exceção de suspeição/impedimento — dirigida ao PRÓPRIO JUIZ EXCEPTO:**

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]          ← o excepto, NÃO o tribunal

Autos nº [NÚMERO] (processar em APARTADO — art. 111 do CPP)

[NOME DO EXCIPIENTE], já qualificado(a), por procurador(a) com PODERES
ESPECIAIS (instrumento anexo — art. 98 do CPP) [ou assinando pessoalmente],
vem opor EXCEÇÃO DE SUSPEIÇÃO [ou DE IMPEDIMENTO — art. 252 c/c art. 112]
em face de Vossa Excelência, pelas razões seguintes:

I — DOS FATOS
Narrativa objetiva do vínculo: hipótese do art. 254 [ou 252], com a prova
documental anexa e/ou rol de testemunhas (art. 98, parte final).

II — DO DIREITO
1. Enquadramento na hipótese legal (art. 254, inciso [X] / art. 252, inciso [X]).
2. Garantia do juiz natural e da imparcialidade (CF, art. 5º, XXXVII e LIII).
3. Consequências: nulidade dos atos (arts. 101 e 564, I) [impedimento:
   sustentar a inexistência dos atos — vício objetivo].
[Precedente atual sobre imparcialidade: pesquise via agente
jurisprudencia-stj-stf e verifique com verificador-citacoes; marque
[NÃO VERIFICADO] o que não confirmar.]

III — DOS PEDIDOS
a) que Vossa Excelência RECONHEÇA a suspeição/impedimento, remetendo os
   autos ao substituto legal (art. 99);
b) não acolhida, que autue a exceção EM APARTADO e a remeta, com sua
   resposta em 3 dias, ao Egrégio Tribunal [TJ/TRF] para julgamento
   (arts. 99 e 100);
c) a NULIDADE dos atos praticados desde o surgimento da causa (art. 101).

Termos em que, pede deferimento.
[LOCAL], [DATA]. — [ADVOGADO(A)] OAB/[UF] nº [XXX] + assinatura da PARTE
                    (ou procuração com poderes especiais anexa)
```

**B) Declinatória / litispendência / ilegitimidade / coisa julgada — ao juízo do processo:**

```
AO JUÍZO DA [N]ª VARA CRIMINAL DA COMARCA DE [COMARCA] — [UF]

Autos nº [NÚMERO] (autos apartados — art. 111 do CPP)

[NOME], já qualificado(a), vem, no PRAZO DA DEFESA (art. 108 c/c
art. 396-A, § 1º, do CPP), opor EXCEÇÃO DE [INCOMPETÊNCIA DO JUÍZO /
LITISPENDÊNCIA / ILEGITIMIDADE DE PARTE / COISA JULGADA]:

I — DOS FATOS  [o defeito processual concreto + prova documental:
     certidões dos dois feitos, sentença transitada, capitulação da ação penal]
II — DO DIREITO  [base legal específica + efeito: peremptória → extinção;
     dilatória → remessa ao juízo competente]
III — DOS PEDIDOS
   a) acolhimento da exceção, com [remessa dos autos ao juízo competente /
      EXTINÇÃO do processo, em razão do ne bis in idem];
   b) subsidiariamente, o registro da arguição para fins de preliminar
      recursal (evitar preclusão).

Termos em que, pede deferimento.
```

**Documentos a anexar:** procuração (com **poderes especiais**, na suspeição/impedimento); prova documental do vínculo ou do defeito (certidões dos processos, sentença com trânsito em julgado, atos do juiz em outra instância); rol de testemunhas quando a prova for oral (art. 98).

## Erros comuns e pegadinhas

- **Endereçar a suspeição ao tribunal.** A petição é dirigida **ao juiz excepto** (art. 98); só sobe ao tribunal se ele não a reconhecer (arts. 99-100).
- **Procuração sem poderes especiais** na suspeição/impedimento (art. 98) — vício de representação que derruba a exceção antes do mérito.
- **Deixar precluir a incompetência relativa** — argui-se no **prazo da defesa** (art. 108); depois, resta só a via da nulidade relativa com prova de prejuízo (art. 563), muito mais difícil.
- **Errar a contagem do prazo** — o prazo da defesa é o da resposta à acusação, **10 dias** (art. 396); contagem penal do art. 798: prazo **contínuo** (não se interrompe por feriado), excluído o dia do começo e incluído o do vencimento (§ 1º); **em dobro para a Defensoria Pública** (LC 80/94), sem dobra para o MP no processo penal.
- **Embutir a exceção no corpo da resposta à acusação** — a exceção é **peça autônoma**, processada **em apartado** (art. 396-A, § 1º; art. 111): protocole **duas peças** (resposta + exceção).
- **Inverter a ordem do art. 96** — a suspeição precede qualquer outra exceção (salvo motivo superveniente).
- **Confundir suspeição (art. 254, vínculo com as partes) com impedimento (art. 252, vínculo com o processo)** — o enquadramento errado enfraquece a tese e o regime de consequências.
- **Recusar jurado por escrito depois do sorteio** — a arguição é **oral e imediata** em plenário (art. 106); ver skill **juri-plenario-debates** para as recusas motivadas e imotivadas.
- **Opor suspeição a delegado** — vedado pelo art. 107; o caminho é outro (nulidade da prova, correição, suspeição dos atos judiciais subsequentes).
- **Prometer suspensão do processo** — a exceção corre em apartado **sem suspender** a ação penal (art. 111); suspensão é efeito da **prejudicial** (arts. 92-94), não da exceção.
- **Recorrer da rejeição da exceção** — não cabe recurso imediato; reitere em **preliminar de apelação** (ver skill **apelacao**) ou avalie **HC**. Já a decisão que **acolhe** incompetência/litispendência/coisa julgada desafia RESE do MP (art. 581, II e III) — prepare contrarrazões (ver skill **contrarrazoes-rese**).
- **Citar de memória precedente sobre imparcialidade ou competência** — pesquise via agente **jurisprudencia-stj-stf** e verifique com **verificador-citacoes**; marque **[NÃO VERIFICADO]** o que não confirmar.

## Checklist antes de protocolar

- [ ] Instituto correto para o vício (suspeição × impedimento × incompetência × litispendência × ilegitimidade × coisa julgada)?
- [ ] **Momento**: dentro do prazo da defesa (art. 108; 396-A, § 1º)? Suspeição arguida **antes** das demais (art. 96)?
- [ ] **Endereçamento**: suspeição/impedimento → ao juiz excepto; demais → ao juízo do feito?
- [ ] Procuração com **poderes especiais** + assinatura exigida (art. 98)?
- [ ] Pedido de autuação **em apartado** (art. 111)?
- [ ] Prova documental/rol de testemunhas anexos?
- [ ] Efeito pedido coerente (dilatória → remessa/afastamento; peremptória → extinção)?
- [ ] Nulidades correlatas mapeadas (arts. 564, I e II; 567; 568) com o agente **mapa-nulidades**?
- [ ] Precedentes verificados (nenhum número de julgado citado de memória)?

## Apoie-se em

- **Agente `mapa-nulidades`** — classificação absoluta × relativa, demonstração de prejuízo (art. 563) e consequências dos arts. 564, 567 e 568; ele conhece os arts. 95-111, mas **não redige a peça** — esta skill fecha essa lacuna.
- **Agente `jurisprudencia-stj-stf`** + **agente `verificador-citacoes`** — todo precedente atual (imparcialidade, competência, *ne bis in idem*) entra na peça **somente** depois de pesquisado e verificado; o que não se confirmar recebe a marca **[NÃO VERIFICADO]**.
- **Agente `lei-e-sumula`** — conferência de dispositivos recentes ou alterados (ex.: regime de ação penal pós-Pacote Anticrime) antes de afirmar o número do artigo.
- **Best-practice `peticao-criminal`** — padrão de endereçamento, qualificação, técnica de redação e formatação da peça.
- **Best-practice `revisao-juridica`** — revisão final obrigatória antes da entrega ao(à) profissional.
- Skills relacionadas: **habeas-corpus** (trancamento por coisa julgada/litispendência flagrantes), **rese** e **contrarrazoes-rese** (recursos ligados ao acolhimento das exceções — art. 581, II, III e XVI), **apelacao** (reiteração em preliminar), **juri-plenario-debates** (recusas de jurados em plenário).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
