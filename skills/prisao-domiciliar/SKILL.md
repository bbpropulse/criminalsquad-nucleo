---
name: prisao-domiciliar
description: >-
  Use ao elaborar pedido autônomo de prisão domiciliar substitutiva da prisão preventiva (CPP, arts.
  317, 318, 318-A e 318-B) — gestante, puérpera, mãe ou responsável por criança de até 12 anos ou
  pessoa com deficiência, pai único responsável, maior de 80 anos, doença grave (domiciliar
  humanitária) e cuidador imprescindível de menor de 6 anos. Gatilhos: prisão domiciliar, domiciliar
  substitutiva, art. 318, art. 318-A, HC… Não use para decisão final, assinatura, protocolo ou
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
  eval_case_ids: ["csq-v5-prisao-domiciliar"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["prisao-domiciliar", "prisao domiciliar"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Prisão Domiciliar Substitutiva da Preventiva (CPP, arts. 317 a 318-B)

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

Esta skill orienta o **pedido autônomo de substituição da prisão preventiva por prisão domiciliar**. A skill `liberdade-provisoria-relaxamento` trata a domiciliar como pedido subsidiário de uma linha na petição de soltura; aqui o instituto é desenvolvido por inteiro — requisitos e prova documental por inciso, o HC coletivo 143.641 do STF, a domiciliar humanitária e a peça pronta.

> **Lição central:** prisão domiciliar **não é soltura** — é a **mesma preventiva cumprida em casa** (art. 317). Duas consequências práticas: (1) nunca a formule como pedido principal quando cabe soltura — ela entra **após** relaxamento, revogação e liberdade provisória, na cumulação sucessiva da skill `liberdade-provisoria-relaxamento`; (2) o coração do pedido é a **prova documental idônea** do inciso invocado (art. 318, parágrafo único) — pedido sem documento é pedido indeferido.

> **Princípio reitor:** proteção integral e prioridade absoluta da criança (CF, art. 227; ECA, arts. 3º e 4º; Lei 13.257/2016 — Marco Legal da Primeira Infância) e dignidade e saúde do preso (CF, arts. 1º, III, e 196). A pena não passa da pessoa (CF, art. 5º, XLV): o filho não cumpre preventiva com a mãe.

## O instituto — muda o local da custódia, não a custódia

- **Natureza:** a domiciliar dos arts. 318/318-A **pressupõe preventiva decretada** e consiste no recolhimento do indiciado ou acusado **em sua residência**, só podendo dela ausentar-se com autorização judicial (art. 317). Muda o *onde*, não o *se*.
- **Consequência estratégica:** se a preventiva é ilegal ou desnecessária, ataque-a primeiro (relaxamento/revogação/liberdade provisória). A domiciliar é o degrau **subsidiário** para quando o juízo insistir na custódia.
- **Evolução legislativa:** rol criado pela Lei 12.403/2011; a **Lei 13.257/2016** (Marco Legal da Primeira Infância) deu nova redação ao inciso IV (gestante em qualquer fase) e acrescentou os incisos V e VI (mãe de filho de até 12 anos, pai único responsável); a **Lei 13.769/2018** acrescentou o **art. 318-A** (substituição como regra para gestante/mãe/responsável) e o **art. 318-B** (cumulação com as medidas do art. 319).
- **Detração:** o tempo em domiciliar é prisão cautelar e **conta como pena cumprida** (art. 42 CP) — argumento que desarma a objeção de "impunidade".

## Três "domiciliares" — não confunda o instituto nem o juízo

| Instituto | Natureza | Base legal | Juízo competente |
|---|---|---|---|
| **Prisão domiciliar substitutiva** (esta skill) | Preventiva cumprida em casa | CPP 317, 318, 318-A | Juízo do processo de conhecimento |
| **Recolhimento domiciliar noturno** | Cautelar **diversa** da prisão (menos gravosa que prisão) | CPP 319, V | Juízo do processo de conhecimento |
| **Prisão domiciliar da execução** | Regime aberto em residência particular (hipóteses da LEP); ou falta de vaga em regime adequado | LEP, art. 117; SV 56 | Juízo da execução penal |

> Endereçar o pedido do art. 318 ao juízo da execução (ou o da LEP 117 ao juízo do processo) é erro que custa semanas. Se a preventiva foi decretada por tribunal (foro por prerrogativa ou em grau recursal), o pedido vai ao **relator**.

## Cabimento e prova documental por inciso (art. 318, parágrafo único)

O parágrafo único do art. 318 exige **prova idônea** da condição pessoal. Monte o dossiê **antes** de protocolar:

| Base | Hipótese | Prova documental mínima |
|---|---|---|
| 318, I | Maior de **80 anos** | Documento de identidade / certidão de nascimento |
| 318, II | **Extremamente debilitado** por **doença grave** | Laudo/atestado médico **atualizado** + exames e relatórios + demonstração de que o tratamento **não pode ser prestado no cárcere** (requisite o prontuário da unidade) |
| 318, III | **Imprescindível** aos cuidados especiais de pessoa **menor de 6 anos** ou **com deficiência** | Certidão de nascimento / laudo da deficiência (Lei 13.146/2015) + prova da **imprescindibilidade** (estudo social, declarações, inexistência de outro cuidador) |
| 318, IV | **Gestante** — qualquer fase da gestação | Exame ou atestado de gravidez (a exigência de 7º mês ou gravidez de risco **caiu** com a Lei 13.257/2016) |
| 318, V | **Mulher com filho de até 12 anos incompletos** | Certidão de nascimento do filho — a imprescindibilidade dos cuidados maternos é **presumida**; não exija de si prova que a lei não pede (confirme o estado atual via `jurisprudencia-stj-stf`) |
| 318, VI | **Homem, único responsável** por filho de até 12 anos incompletos | Certidão de nascimento + prova da **exclusividade** do cuidado (óbito/prisão/abandono da mãe, termo de guarda, estudo social) |
| 318-A | Gestante ou **mãe/responsável por crianças ou por PcD** | Prova da condição (linhas acima) + demonstração de que **não incidem as duas vedações** do artigo |

## Art. 318-A — para gestantes e mães, a substituição é a regra

O art. 318-A não diz "poderá": diz que a preventiva imposta à mulher gestante ou mãe/responsável por crianças ou pessoas com deficiência **"será substituída"** por domiciliar, **desde que**:

- **I —** o crime **não** tenha sido cometido **com violência ou grave ameaça a pessoa**;
- **II —** o crime **não** tenha sido cometido **contra o próprio filho ou dependente**.

**Origem — HC coletivo 143.641 (STF, 2ª Turma, 2018, notório):** ordem coletiva determinando a substituição da preventiva por domiciliar de gestantes, puérperas e mães de crianças de até 12 anos ou de pessoas com deficiência, ressalvados os crimes com violência ou grave ameaça, os praticados contra os próprios descendentes e as **"situações excepcionalíssimas" devidamente fundamentadas**. A Lei 13.769/2018 **positivou** esse entendimento. Reforce com as **Regras de Bangkok** (ONU — tratamento de mulheres presas), incorporadas ao argumento pelo próprio precedente.

**Teses de aplicação:**

- **A exceção se interpreta restritivamente e exige fundamentação concreta.** Negar a domiciliar invocando "gravidade do tráfico" genérica reedita a gravidade abstrata que não sustenta preventiva (ver skill `liberdade-provisoria-relaxamento`). O ônus de demonstrar a situação excepcionalíssima é da decisão que nega — não da defesa.
- **Tráfico praticado na residência, reincidência e "risco de reiteração"** oscilam na jurisprudência como possíveis "situações excepcionalíssimas" — pesquise o cenário atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO] até a conferência.
- **Pais e outros responsáveis únicos:** o STF estendeu a lógica do HC coletivo a homens e demais responsáveis únicos por crianças e PcD em ordem coletiva posterior — pesquise via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO]; na peça, o inciso VI do art. 318 já fornece base legal direta.
- **O melhor interesse da criança decide** (CF 227; ECA 3º/4º): manter no cárcere a genitora de criança pequena, sem estrutura na unidade, transfere a pena a um inocente (CF 5º, XLV) e contraria a prioridade absoluta constitucional.

## Domiciliar humanitária (art. 318, II) — doença grave no cárcere

Dois requisitos cumulativos: **doença grave** + **extrema debilidade**. O que decide não é o CID — é a **incompatibilidade entre o quadro clínico e o cárcere**:

- **Prove a insuficiência do tratamento intramuros:** requisite o prontuário da unidade, oficie à direção sobre a estrutura de saúde disponível, junte laudos externos e relatório do médico assistente com o tratamento exigido.
- **Ancore no direito à saúde** (CF 196) e na vedação de penas cruéis (CF 5º, XLVII): manter preso quem definha sem tratamento converte a cautela em castigo antecipado.
- **Formule pedido alternativo:** transferência para unidade hospitalar ou requisição do tratamento adequado — o subsidiário evita o "indefiro por falta de prova da debilidade extrema" seco.
- **Laudo desatualizado é a causa número 1 de indeferimento** — renove antes de protocolar e a cada reiteração.

## Estrutura da petição

Peça única dirigida ao **juízo onde tramita o feito** (ou ao relator, se a preventiva foi decretada em tribunal). Em urgência que não espera — parto iminente, quadro clínico crítico —, a via é o **habeas corpus com liminar** (skill `habeas-corpus`).

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a) nos autos em epígrafe, por intermédio do(a)
advogado(a) que ao final subscreve (procuração anexa), vem, respeitosamente,
requerer a SUBSTITUIÇÃO DA PRISÃO PREVENTIVA POR PRISÃO DOMICILIAR, nos
termos dos arts. 317, 318, [inciso], e 318-A do CPP, pelas razões seguintes:

I — DOS FATOS
Síntese da custódia (data, modalidade, imputação, decisão que decretou/manteve
a preventiva) + a CONDIÇÃO PESSOAL que autoriza a substituição (gravidez,
filho de até 12 anos, idade, doença grave, dependente PcD), com remissão
expressa a cada documento anexo que a comprova.

II — DO DIREITO
   1. Do enquadramento no art. 318, [inciso] [e/ou art. 318-A]
      [subsunção explícita: condição legal provada documento a documento,
      atendendo à prova idônea do parágrafo único].
   2. Da substituição como regra — art. 318-A e HC coletivo 143.641/STF
      [mulher gestante/mãe/responsável: "será substituída"; ausência das
      vedações dos incisos I e II; a exceção ("situação excepcionalíssima")
      exige fundamentação concreta, inexistente no caso].
   3. Da proteção integral / do direito à saúde
      [CF 227, ECA 3º/4º e Marco Legal da Primeira Infância (incisos III a
      VI) — ou CF 196 e vedação de pena cruel (inciso II, humanitária)].
   4. Da suficiência da domiciliar no caso concreto
      [residência fixa comprovada; oferecer, se necessário, a cumulação com
      medidas do art. 319 (art. 318-B), inclusive monitoração eletrônica].
   5. Da detração (art. 42 CP)
      [o tempo em domiciliar conta como pena cumprida — não há impunidade].

III — DOS PEDIDOS
   a) a SUBSTITUIÇÃO da prisão preventiva por PRISÃO DOMICILIAR (arts. 317,
      318, [inciso], e 318-A do CPP), expedindo-se o competente alvará com a
      determinação de recolhimento no endereço declinado;
   b) caso necessário à convicção do juízo, a cumulação com medidas do
      art. 319 (art. 318-B do CPP), inclusive monitoração eletrônica;
   c) [na humanitária] subsidiariamente, a TRANSFERÊNCIA para unidade com
      tratamento adequado ou a requisição do tratamento indispensável;
   d) a análise IMEDIATA do pedido, dada a urgência da condição pessoal, sem
      prejuízo de estudo social/perícia que o juízo repute conveniente.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia da decisão que decretou/manteve a preventiva; **comprovante de residência** (é o local de cumprimento — sem ele não há domiciliar); documento do inciso (certidão de nascimento do filho, exame de gravidez, laudo médico atualizado, laudo da deficiência, documento de identidade); declarações e estudo social quando a imprescindibilidade (inciso III) ou a exclusividade (inciso VI) forem o ponto controvertido.

> Quando a estratégia for a escada completa de soltura, este pedido entra como item final da petição da skill `liberdade-provisoria-relaxamento`. A peça autônoma desta skill serve quando a soltura já foi negada ou o fato novo é a própria condição pessoal (gravidez superveniente, agravamento da doença, nascimento do filho).

## Erros comuns e pegadinhas

- **Pedir domiciliar como pedido principal quando cabe soltura** — legitima a preventiva que poderia cair. Ordem sucessiva: relaxamento → revogação → liberdade provisória → cautelares do 319 → domiciliar.
- **Confundir os três institutos** (tabela acima): 318 ≠ 319, V ≠ LEP 117 — natureza, requisitos e **endereçamento** diferentes.
- **Pedir domiciliar sem preventiva em vigor** — o art. 318 pressupõe preventiva decretada; para quem está solto ou sob cautelares do 319 falta interesse. Em flagrante ainda não convertido, formule-a como subsidiária na audiência de custódia (CPP, art. 310).
- **Citar a redação antiga do inciso IV** (7º mês/gravidez de risco): caiu em 2016. Se a decisão a invocar, aponte a superveniência do Marco Legal — e confirme a redação vigente via `lei-e-sumula` antes de transcrever.
- **Protocolar sem o documento do inciso** — o parágrafo único exige prova idônea; sem certidão/laudo, o indeferimento é certo. No polo oposto, não exija de si mais do que a lei pede (inciso V: maternidade + idade do filho bastam).
- **Laudo médico velho na humanitária** — renove sempre; prova de saúde tem prazo de validade prático.
- **Esquecer o comprovante de residência** — e, se o endereço mudar depois do deferimento, peça autorização judicial antes da mudança.
- **Não oferecer o art. 318-B** — a cumulação com monitoração eletrônica frequentemente é o que destrava o deferimento em caso limítrofe.
- **Aceitar indeferimento por falta de tornozeleira** — a indisponibilidade de equipamento estatal não pode manter alguém no cárcere; pesquise o entendimento atual via `jurisprudencia-stj-stf` e marque [NÃO VERIFICADO].
- **Achar que o pedido preclui** — não preclui: a condição pessoal pode ser demonstrada a qualquer tempo, inclusive já na audiência de custódia; fato novo reabre a discussão. Reitere com **prova nova**, não com a mesma peça.
- **Errar a via de impugnação** — contra o indeferimento não há RESE para a defesa: a via é o **habeas corpus** ao tribunal (skill `habeas-corpus`), com liminar em urgência.
- **Não alertar o cliente** — ausentar-se de casa sem autorização é descumprimento e autoriza o restabelecimento da preventiva no cárcere (arts. 282, § 4º, e 312, § 1º, do CPP). A domiciliar é prisão: há fiscalização.

## Checklist antes de protocolar

- [ ] O ataque à própria preventiva (soltura) já foi formulado ou cumulado? (domiciliar = subsidiária)
- [ ] Inciso correto identificado e **prova documental completa** anexada?
- [ ] Comprovante de residência atualizado nos autos?
- [ ] Mulher gestante/mãe/responsável → **art. 318-A invocado como regra** + ausência das duas vedações demonstrada?
- [ ] HC coletivo 143.641 e Regras de Bangkok articulados (quando couber)?
- [ ] Humanitária → laudo **atualizado** + prova da inadequação do tratamento intramuros + pedido alternativo de transferência?
- [ ] Art. 318-B oferecido (monitoração/cautelares cumuladas)?
- [ ] Detração (art. 42 CP) lembrada como resposta à objeção de impunidade?
- [ ] Endereçamento correto (juízo do processo / relator — nunca o juízo da execução)?
- [ ] Precedentes atuais conferidos via `jurisprudencia-stj-stf` — nada citado de memória?

## Lembretes finais

- **Domiciliar não é soltura** — é preventiva em casa (art. 317); trate-a sempre como degrau subsidiário da escada de soltura.
- **Art. 318-A é regra, não faculdade** — para gestante/mãe/responsável, "será substituída"; a exceção exige fundamentação concreta e restritiva.
- **Prova por inciso é o coração da peça** (art. 318, parágrafo único) — dossiê documental antes do protocolo.
- **Humanitária = laudo atualizado + inadequação do tratamento intramuros** — sem o segundo elemento, o pedido não para em pé.
- **O pedido não preclui** — fato novo (gravidez, agravamento, nascimento) reabre; reitere com prova nova.
- **Contra o indeferimento, HC** — não há RESE da defesa nessa hipótese.
- **Conferir vigência** de dispositivos e o estado atual da jurisprudência antes de citar — nada de memória.

## Apoie-se em

- **Skill `liberdade-provisoria-relaxamento`** — os quatro pedidos de soltura e a **cumulação sucessiva** em que a domiciliar entra como degrau final; lá está a petição de soltura na qual este pedido se encaixa como item subsidiário.
- **Skill `habeas-corpus`** — via de urgência quando o indeferimento gera constrangimento ilegal ou a situação não espera (parto iminente, quadro clínico crítico); é também a via recursal prática contra a negativa.
- **Agente `jurisprudencia-stj-stf`** — pesquisa dos precedentes atuais (situações excepcionalíssimas, tornozeleira indisponível, extensão a pais e responsáveis); todo achado entra como [NÃO VERIFICADO] até conferência.
- **Agente `verificador-citacoes`** (best-practice `verificacao-citacoes`) — gate obrigatório antes de protocolar: nenhuma súmula, tema ou julgado citado de memória.
- **Skill `redacao-persuasiva-criminal`** — SEMPRE: teoria do caso, narrativa dos fatos, subsunção explícita e a régua de obra-prima que a revisão humana cobra.
