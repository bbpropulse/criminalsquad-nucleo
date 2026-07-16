---
name: liberdade-provisoria-relaxamento
description: >-
  Use ao elaborar pedido de soltura no processo penal — relaxamento de prisão ilegal (CF 5º LXV),
  liberdade provisória (CPP 310/321), revogação de prisão preventiva (CPP 312/315/316) ou
  substituição por cautelares do art. 319. Gatilhos: relaxamento, liberdade provisória, revogação de
  preventiva, alvará de soltura, excesso de prazo, medidas cautelares, fiança. Não use para decisão
  final, assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-liberdade-provisoria-relaxamento"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["liberdade-provisoria-relaxamento", "liberdade provisoria", "provisoria relaxamento"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Liberdade Provisória / Relaxamento (pedidos de soltura)

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

Esta skill orienta a construção dos **pedidos de soltura na fase de conhecimento** do processo penal brasileiro — antes do trânsito em julgado, quando o acusado está preso cautelarmente. Cobre os **quatro institutos** que liberam o réu e ensina a escolher o remédio correto para cada vício.

> **Lição central:** o erro mais comum e mais grave é confundir os remédios. **Ilegalidade → relaxa; desnecessidade cautelar → revoga; excesso de constrição → liberdade provisória; alternativa menos gravosa → cautelares do art. 319.** Usar o instituto errado é o que compromete a peça.

> **Princípio reitor (presunção de inocência — CF, art. 5º, LVII e LXVI):** a regra é a **liberdade**; a prisão cautelar é a **exceção** e a *ultima ratio*. A custódia "somente se justifica na hipótese de impossibilidade que, por instrumento menos gravoso, seja alcançado idêntico resultado acautelatório".

## Três eixos — não confundir os planos

O direito das cautelares pessoais se organiza em três planos que produzem **remédios diferentes**. Antes de redigir, identifique em qual eixo está o vício:

| Eixo | Pergunta | Vício atacado | Remédio |
|------|----------|---------------|---------|
| **Legalidade da prisão** | A prisão nasceu legal? | Prisão ilegal (sem flagrante válido, sem ordem, sem requisito formal, excesso de prazo) | **Relaxamento** (CF, art. 5º, LXV) |
| **Necessidade cautelar** | A prisão (legal) ainda é necessária? | Falta/cessação de *fumus* + *periculum*; fundamentação inidônea ou não contemporânea | **Revogação** da preventiva (art. 316, CPP) |
| **Cabimento da liberdade** | Pode responder solto? | Excesso de constrição diante de medidas menos gravosas | **Liberdade provisória** com/sem fiança (art. 310, III; 321) **ou** cautelares diversas (art. 319) |

## Mapa — qual pedido cabe em cada situação

| Situação concreta | Instituto correto | Base legal |
|---|---|---|
| Flagrante sem situação de flagrância (art. 302) | **Relaxamento** | CF 5º, LXV |
| Flagrante sem nota de culpa / sem comunicação à família ou ao juiz em 24h | **Relaxamento** | CF 5º, LXII/LXIII; CPP 306 |
| Audiência de custódia não realizada em 24h (vício relevante) | **Relaxamento** | CPP 310 |
| Conversão do flagrante em preventiva **de ofício** (pós-Pacote Anticrime) | **Relaxamento** | CPP 3º-A, 282, §2º, 311 |
| Prazo da temporária esgotado sem conversão fundamentada | **Relaxamento** | Lei 7.960/89, art. 2º |
| **Excesso de prazo** na formação da culpa (prisão durando além do razoável) | **Relaxamento** | CF 5º, LXV e LXXVIII; CPP 648, II |
| Falta de revisão obrigatória da preventiva a cada 90 dias | **Relaxamento/revogação** | CPP 316, parágrafo único |
| Preventiva fundada só na **gravidade abstrata** do delito | **Revogação** | CPP 312, §2º; 315, §1º |
| Cessaram os motivos que justificaram a preventiva | **Revogação** | CPP 316, *caput* |
| Preventiva sem *fumus* idôneo (ex.: reconhecimento viciado, art. 226) | **Revogação** | CPP 312 |
| Preventiva incabível (crime com pena máxima ≤ 4 anos, réu primário — art. 313, I) | **Revogação** + **liberdade provisória** | CPP 313, I; 321 |
| Prisão legal, mas réu pode responder solto (delito afiançável, condições favoráveis) | **Liberdade provisória** (com fiança se cabível) | CPP 310, III; 321; 350 |
| Custódia mantida "só pelo não pagamento da fiança" em caso de menor gravidade | **Liberdade provisória** (relaxa a exigência) | CPP 350 |
| Prisão dispensável, mas há algum risco a tutelar | **Substituição por cautelares do art. 319** | CPP 319; 282, §6º |
| Gestante / mãe de criança < 12 anos / responsável por PcD | **Prisão domiciliar substitutiva** (subsidiária à soltura) | CPP 318 e 318-A |

> **Os pedidos podem (e devem) ser cumulados em ordem sucessiva**, sob o princípio da eventualidade: relaxar; não sendo o caso, revogar; não sendo o caso, conceder liberdade provisória; e, subsidiariamente, aplicar cautelares do art. 319 em vez da prisão.

## Instituto 1 — Relaxamento de prisão ilegal (CF, art. 5º, LXV)

Toda **prisão ilegal** deve ser **imediatamente relaxada** pela autoridade judiciária. Ataca-se o **vício de origem ou superveniente** da custódia — não a sua necessidade.

**Vícios típicos do flagrante (arts. 302-310 CPP):**
- Ausência de **situação de flagrância** (art. 302 — não estava cometendo, não acabou de cometer, não foi perseguido nem encontrado logo após).
- Flagrante **forjado, preparado** (Súmula 145 STF — crime impossível) ou **provocado**.
- Descumprimento das **formalidades** do art. 306: comunicação imediata ao juiz, ao MP e à família; entrega da **nota de culpa** em 24h.
- **Audiência de custódia** não realizada no prazo de 24h (art. 310; CF 5º, LXII/LXIII; CADH art. 7.5), quando o vício comprometer o controle da legalidade.

> O flagrante é prisão **pré-cautelar e precária**: legitima a captura, mas **não se sustenta sozinho** como título de manutenção da custódia. Recebido o auto de prisão em flagrante (APF), o juiz deve, em 24h, na audiência de custódia, ou (I) **relaxar** a prisão ilegal, ou (II) **converter** em preventiva (presentes os requisitos), ou (III) conceder **liberdade provisória** com/sem fiança ou cautelares.

**Conversão de ofício é ilegal (tese forte):** a 3ª Seção do STJ pacificou que, após a Lei 13.964/2019, **não é possível a conversão *ex officio* do flagrante em preventiva**, ainda que não haja audiência de custódia — é indispensável requerimento do MP, querelante, assistente ou representação policial (arts. 3º-A, 282, §2º, 311). Prisão convertida de ofício → **relaxamento**.

**Excesso de prazo:** a demora não razoável na formação da culpa gera constrangimento ilegal (CF 5º, LXXVIII; CPP 648, II) e enseja **relaxamento** (não revogação). Considerar a Súmula 52 STJ (encerrada a instrução, fica superada a alegação de excesso) e os marcos de soma global dos prazos.

## Instituto 2 — Liberdade provisória (CPP, arts. 321-350)

Pressupõe prisão **legal**, mas **dispensável**: o réu pode responder ao processo em liberdade. Concede-se quando **ausentes os requisitos da preventiva** (art. 321), com ou sem fiança, podendo o juiz impor cautelares do art. 319.

- **Com fiança** (arts. 322-325, 350): regra para infrações de menor e médio potencial. A fiança é arbitrada conforme a situação econômica; em caso de hipossuficiência, pode ser **dispensada, reduzida ou parcelada** (art. 325, §1º; art. 350). É **desproporcional** manter alguém preso "tão somente em razão do não pagamento da fiança" em crime de menor gravidade.
- **Sem fiança** (art. 310, III; CF 5º, LXVI): nas hipóteses em que a fiança é incabível mas a prisão é desnecessária.
- **Inafiançáveis** (CF 5º, XLII, XLIII, XLIV): racismo, tortura, tráfico, terrorismo, hediondos e equiparados, e ação de grupos armados. **Inafiançável não significa que a liberdade provisória é vedada** — significa apenas que não se arbitra fiança; cabe liberdade provisória sem fiança quando ausente o fundamento da preventiva.

## Instituto 3 — Revogação de prisão preventiva (CPP, arts. 312/315/316)

Pressupõe prisão **legal**, mas que **perdeu (ou nunca teve) necessidade cautelar**. Ataca-se o art. 312.

**Binômio do art. 312 (pressupostos cumulativos):**
1. **Fumus commissi delicti** — prova da **materialidade** + **indícios suficientes de autoria**;
2. **Periculum libertatis** — perigo **concreto** gerado pelo estado de liberdade (art. 312, §2º), em uma das hipóteses-fim: garantia da ordem pública; da ordem econômica; conveniência da instrução; ou aplicação da lei penal (risco de fuga).

**Teses de revogação:**
- **Gravidade abstrata não basta** — a custódia não pode se fundar na gravidade abstrata do delito, na opinião pessoal do julgador ou na mera tipificação. A denúncia por organização criminosa, tráfico etc. **não** impõe preventiva automática.
- **Falta de contemporaneidade** — os fatos que fundamentam a prisão devem ser **atuais** (art. 312, §2º; art. 315, §1º). Fundamento velho não sustenta prisão nova.
- **Fundamentação inidônea / não suprível em 2º grau** — exige-se motivação concreta (art. 315, §1º; art. 564, V). No HC, o **Tribunal não pode acrescer fundamentos** para salvar preventiva mantida na sentença sem fundamentação concreta (art. 387, §1º).
- **Fumus inexistente** — reconhecimento de pessoa em desacordo com o art. 226 do CPP **não serve de lastro** sequer para a preventiva (Tema Repetitivo 1258 STJ).
- **Revisão obrigatória de 90 dias** (art. 316, parágrafo único) — o juízo **que decretou** a preventiva deve revisá-la, de ofício, a cada 90 dias, mediante decisão fundamentada, sob pena de tornar a prisão ilegal. Atenção aos limites jurisprudenciais: o dever recai sobre o juízo decretante (não o tribunal revisor); prolatada a sentença surge novo título; não há dever de revisão para réu **foragido**; e o mero decurso do prazo **não gera soltura automática** na jurisprudência do STF — confira o entendimento atual via agente `jurisprudencia-stj-stf` antes de usar a tese.

## Instituto 4 — Substituição por cautelares diversas (CPP, art. 319) — subutilizado

A preventiva é o **último recurso**. Antes dela, o juiz **deve** testar as medidas cautelares diversas; só prende se demonstrar que **nenhuma** basta (art. 282, §6º). Esse pedido é frequentemente esquecido pela defesa — **apresente-o sempre como alternativa subsidiária à prisão**.

**Rol do art. 319 (combináveis):**
- I — comparecimento periódico em juízo;
- II — proibição de acesso/frequência a determinados lugares;
- III — proibição de contato com pessoa determinada;
- IV — proibição de ausentar-se da comarca/país;
- V — recolhimento domiciliar noturno e nos dias de folga;
- VI — suspensão do exercício de função pública ou de atividade econômica/financeira;
- VII — internação provisória (inimputável/semi-imputável, com risco de reiteração);
- VIII — fiança;
- IX — **monitoração eletrônica**.

> **Tese aplicada:** quando o *modus operandi* está ligado a uma função, a cautelar adequada **substitui** a prisão (ex.: proibição do exercício da medicina basta para prevenir reiteração de crime sexual praticado por médico). Manter a custódia, ausentes os requisitos, "caracteriza verdadeira antecipação de pena".

> **Detração antecipada (argumento de impacto na execução):** o tempo de **recolhimento domiciliar noturno** e de **monitoração eletrônica** é **detraível** da pena (art. 42 CP; Tema Repetitivo 1155 STJ) e conta para a progressão — útil para reforçar a proporcionalidade da cautelar diversa frente à prisão.

## Cálculo de prazos (sempre conferir)

| Marco | Regra | Cálculo |
|---|---|---|
| **Audiência de custódia** | 24h (art. 310) — confira o **termo inicial** da contagem (da prisão × do recebimento do APF) na redação vigente via agente `lei-e-sumula`; detalhes na skill `audiencia-de-custodia` | some também o marco do art. 306, § 1º (APF ao juiz em 24h da prisão) |
| **Revisão da preventiva** | a cada 90 dias (art. 316, p.ú.) | data da decretação + 90 dias = 1ª revisão |
| **Temporária** | 5+5 dias (comum); 30+30 (hediondos) | conferir prorrogação fundamentada |
| **Detração** | art. 42 CP | dias corridos de privação efetiva (início → fim), somando todos os períodos |

> A detração soma **todos** os períodos de privação de liberdade e antecipa o *dies a quo* dos benefícios (progressão, livramento). Não interrompe nem suspende a prescrição — institutos distintos.

## Estrutura da petição

A peça é **petição única** dirigida ao **juízo onde tramita o feito** (não é bipartida). Havendo **ilegalidade flagrante ou demora**, a via imediata é o **habeas corpus** (CF 5º, LXVIII) — esta skill cobre o requerimento ao juízo de origem; para HC, ver a skill própria.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]
[ou, moderna: Ao Juízo da [N]ª Vara Criminal da Comarca de (...) — art. 319, I, CPC c/c art. 3º CPP]

Autos nº [Nº DO PROCESSO/INQUÉRITO/APF]

[NOME], já qualificado(a) nos autos em epígrafe, por intermédio do(a)
advogado(a) que ao final subscreve (procuração anexa), vem, respeitosamente,
à presença de Vossa Excelência, requerer

   [escolher o(s) pedido(s) conforme o mapa, em ordem sucessiva]
   o RELAXAMENTO DA PRISÃO (art. 5º, LXV, da CF) e/ou
   a REVOGAÇÃO DA PRISÃO PREVENTIVA (art. 316 do CPP) e/ou
   a concessão de LIBERDADE PROVISÓRIA (art. 321 do CPP), com ou sem fiança,

pelas razões de fato e de direito a seguir expostas:

I — DOS FATOS
Síntese da custódia: data e modalidade da prisão (flagrante/temporária/
preventiva), imputação, e o vício concreto invocado (ilegalidade do flagrante /
ausência ou cessação dos requisitos do art. 312 / falta de fundamentação
concreta / excesso de prazo / falta de revisão de 90 dias).

II — DO DIREITO
Desenvolver POR INSTITUTO, na ordem da eventualidade, apenas o que couber:

   1. Da ilegalidade da prisão — relaxamento (CF 5º, LXV)
      [vício de origem/superveniente: flagrante inválido, conversão de ofício,
      prazo da temporária esgotado, excesso de prazo na formação da culpa].

   2. Da ausência/cessação dos requisitos da preventiva — revogação (art. 316)
      [desmontar fumus e periculum; gravidade abstrata não basta; falta de
      contemporaneidade; fundamentação inidônea; ausência de revisão de 90 dias].

   3. Do cabimento da liberdade provisória (art. 321)
      [ausentes os requisitos da preventiva; delito afiançável → fiança
      compatível/dispensa por hipossuficiência (art. 350); inafiançável → sem fiança].

   4. Da subsidiariedade — cautelares do art. 319 (art. 282, §6º)
      [propor medidas específicas e suficientes que substituam a prisão].

   5. (Se aplicável) Da prisão domiciliar substitutiva (arts. 318/318-A)
      [gestante, mãe de criança < 12 anos ou responsável por PcD].

   Reforçar sempre as CONDIÇÕES PESSOAIS FAVORÁVEIS (primariedade, bons
   antecedentes, residência fixa, ocupação lícita, vínculos familiares) e a
   PROPORCIONALIDADE (art. 282, I e II, CPP).

III — DOS PEDIDOS
Ante o exposto, requer-se, sucessivamente:
   a) o RELAXAMENTO da prisão ilegal, com imediata expedição de ALVARÁ DE
      SOLTURA (art. 5º, LXV, da CF);
   b) caso assim não se entenda, a REVOGAÇÃO da prisão preventiva (art. 316
      do CPP), com expedição de alvará de soltura;
   c) subsidiariamente, a concessão de LIBERDADE PROVISÓRIA (art. 321 do CPP),
      [com fiança em valor compatível / sem fiança / com dispensa de fiança por
      hipossuficiência, art. 350];
   d) em qualquer caso, na eventualidade de se reputar necessária alguma cautela,
      a aplicação de MEDIDAS CAUTELARES DIVERSAS DA PRISÃO (art. 319 do CPP),
      em substituição à custódia.

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração; cópia do APF e/ou da decisão que decretou/converteu a preventiva; comprovante de residência; comprovante de ocupação lícita; certidão de antecedentes; documentos da condição pessoal (certidão de nascimento de filho < 12 anos, laudo de gestação etc., quando for o caso da domiciliar).

## Checklist de teses (verificar antes de protocolar)

**Relaxamento (ilegalidade):**
- [ ] Situação de flagrância presente (art. 302)? Flagrante forjado/provocado?
- [ ] Formalidades do art. 306 (nota de culpa em 24h, comunicações)?
- [ ] Audiência de custódia realizada em 24h?
- [ ] Conversão do flagrante em preventiva foi **de ofício** (pós-Anticrime)? → ilegal
- [ ] Prazo da temporária esgotado sem conversão fundamentada?
- [ ] **Excesso de prazo** na formação da culpa (soma global dos prazos)?

**Revogação (necessidade cautelar):**
- [ ] *Fumus commissi delicti* idôneo (materialidade + indícios — não reconhecimento viciado)?
- [ ] *Periculum libertatis* concreto e atual, ou só **gravidade abstrata**?
- [ ] **Contemporaneidade** dos fatos (art. 312, §2º; 315, §1º)?
- [ ] Fundamentação concreta (art. 315, §1º; 564, V) — sem suprir vício em 2º grau?
- [ ] **Revisão obrigatória de 90 dias** cumprida pelo juízo decretante (art. 316, p.ú.)?

**Liberdade provisória / cautelares:**
- [ ] Delito **afiançável**? Fiança proporcional / dispensa por hipossuficiência (art. 350)?
- [ ] Custódia mantida só pela fiança não paga em caso de menor gravidade?
- [ ] **Cautelares do art. 319** propostas como alternativa específica e suficiente?
- [ ] **Condições pessoais favoráveis** demonstradas (primariedade, residência, ocupação, vínculos)?
- [ ] Cabível **prisão domiciliar** (gestante/mãe/responsável por PcD — art. 318-A)?
- [ ] Pedidos formulados **em ordem sucessiva** (eventualidade) + **alvará de soltura**?

## Lembretes finais

- **Quatro institutos, quatro vícios:** ilegalidade → **relaxa**; desnecessidade → **revoga**; constrição excessiva → **liberdade provisória**; alternativa menos gravosa → **cautelares (art. 319)**.
- **Petição única ao juízo de origem.** Havendo ilegalidade flagrante ou demora, a via imediata é o **habeas corpus** (CF 5º, LXVIII).
- **Sempre cumular em ordem sucessiva** (eventualidade) e pedir **alvará de soltura**.
- **Gravidade abstrata não fundamenta preventiva** — exigir *periculum* concreto e contemporâneo.
- **Conversão de ofício pós-Anticrime é ilegal** (3ª Seção STJ — exige requerimento).
- **Revisão de 90 dias** (art. 316, p.ú.) — tese autônoma quando o juízo decretante omite.
- **Cautelares do art. 319 são subutilizadas** — apresente-as sempre como alternativa à prisão.
- **Inafiançável ≠ vedação à liberdade provisória** — só significa que não se arbitra fiança.
- **Condições pessoais favoráveis** (primariedade, residência fixa, ocupação lícita) reforçam todos os pedidos.
- **Conferir vigência** de súmulas, temas e julgados antes de citar — adaptar sempre ao caso concreto.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
