---
name: defesa-embriaguez-atipicidade-306
description: >-
  Use para construir a TESE e a TEORIA DO CASO da defesa no crime de embriaguez ao volante (art. 306
  CTB) — escolher e ordenar as teses (atipicidade da via objetiva por valor abaixo do limiar;
  insuficiência dos sinais notórios do §2º; ausência de prova da condução; nulidade da prova),
  articular com ANPP/transação e orquestrar a auditoria técnica da prova etílica. Trata o perigo
  abstrato, a habitualidade/reincidência e a… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, transito, ctb]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-embriaguez-atipicidade-306"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-embriaguez-atipicidade-306", "defesa embriaguez", "embriaguez atipicidade"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa no crime de embriaguez ao volante (art. 306 do CTB — Lei 9.503/97)

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

Esta skill orienta a construção da **tese de defesa e da teoria do caso** no crime de embriaguez ao volante (**art. 306 do Código de Trânsito Brasileiro**). Não é o inventário metrológico da prova — para auditar etilômetro, exame de sangue e cadeia de custódia, use a skill `impugnacao-prova-embriaguez`. Aqui o foco é **estratégico**: decidir *quais* teses cabem, em *que ordem* alegá-las, como *encaixar a auditoria da prova* numa narrativa coerente e como *articular a saída negocial* (ANPP/transação) sem enfraquecer a tese principal.

> **Lição central:** o art. 306 exige **prova da alteração da capacidade psicomotora** por dois caminhos alternativos — o **objetivo** (concentração de álcool igual ou superior ao limiar legal, por etilômetro ou exame de sangue) e o **subjetivo** (sinais notórios do §2º, aferidos por outros meios). A defesa vence quando **fecha os dois caminhos**: derruba a via objetiva (valor abaixo do limiar, prova nula ou inexistente) *e* demonstra a insuficiência dos sinais notórios. Atacar só um deixa o outro sustentando a condenação.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 306 do CTB e de seus §§1º e 2º**, além do **limiar quantitativo fixado em resolução do CONTRAN** (o valor por litro de sangue e por litro de ar alveolar, e a margem de tolerância do equipamento). As Leis 11.705/2008, 12.760/2012 e 13.281/2016 reescreveram o tipo e o regime probatório — citar a redação *anterior* (que exigia perigo concreto ou concentração maior) é **erro grave de vigência**. Confirme também toda súmula, tema repetitivo e precedente via a skill `jurisprudencia-stj-stf` / gate `verificacao-citacoes` **antes** de fundamentar a peça.

## Base legal

- **Art. 306, *caput*, do CTB** — conduzir veículo automotor com capacidade psicomotora alterada em razão da influência de álcool ou de outra substância psicoativa que determine dependência.
- **Art. 306, §1º, I e II** — as duas formas de comprovação: (I) **concentração igual ou superior** ao limiar por litro de sangue ou por litro de ar alveolar; (II) **sinais que indiquem a alteração** da capacidade psicomotora.
- **Art. 306, §2º** — a verificação pode ser feita por **teste de alcoolemia** ou **toxicológico**, **exame clínico**, **perícia**, **vídeo**, **prova testemunhal** ou **outros meios de prova em direito admitidos**, observado o direito à contraprova.
- **Resolução do CONTRAN** — fixa o **limiar quantitativo** e a **margem de tolerância/erro** do etilômetro (confirmar a resolução vigente e o valor por litro de ar/sangue).
- **Art. 165 do CTB** — a **infração administrativa** de dirigir sob influência de álcool (dose distinta e independente do crime — a absolvição penal não impede a autuação administrativa e vice-versa).
- **Art. 309 do CTB** — dirigir **sem habilitação** gerando **perigo de dano** (tipo diverso; base de eventual desclassificação).
- **CF, art. 5º, LXIII, e princípio da não autoincriminação** (*nemo tenetur se detegere*) — fundamento do direito de **recusar** o etilômetro e o exame de sangue.
- **CTB, art. 277, §§2º e 3º** — consequências administrativas da recusa (não se confundem com prova penal do crime).

## O tipo penal — como a alteração se prova (mapa das duas vias)

O crime é de **perigo abstrato**: consuma-se com a condução em estado de capacidade psicomotora alterada, **sem necessidade de perigo concreto** a pessoa determinada (a direção "anormal" reforça, mas não é elementar). Por isso a batalha é **probatória**, não de resultado. As duas vias do §1º são **alternativas** — basta uma para a tipicidade:

```
                        ART. 306 — alteração da capacidade psicomotora
                                        |
              ┌─────────────────────────┴─────────────────────────┐
        VIA OBJETIVA (§1º, I)                              VIA SUBJETIVA (§1º, II + §2º)
   concentração ≥ limiar do CONTRAN                sinais notórios de embriaguez
   (etilômetro OU exame de sangue)                 (exame clínico, testemunhas, vídeo)
        |                                                          |
   Ataque da defesa:                                      Ataque da defesa:
   - valor abaixo do limiar                               - sinais genéricos/insuficientes
   - descontar margem de tolerância                       - hálito etílico ISOLADO não basta
   - prova nula (metrologia/cadeia)                       - laudo clínico vago/padronizado
   - recusa legítima → sem prova objetiva                 - fonte de erro (fadiga, doença, colírio)
```

➡️ **Estratégia-mestra:** identifique **qual via a acusação usou** (ou se usou as duas) e monte a defesa para **fechar cada porta aberta**. Se a denúncia se apoia só no etilômetro, o eixo é metrológico (via objetiva); se há recusa e a acusação foi pelos sinais notórios, o eixo é a **insuficiência da prova subjetiva**.

## Roteiro de teoria do caso — ordem das teses (do mais forte ao subsidiário)

Alegue em ordem de radicalidade decrescente, **sempre em cascata** (o pedido subsidiário não enfraquece o principal quando bem articulado com "ainda que assim não se entenda"):

1. **Absolvição por atipicidade / ausência de prova da alteração (via objetiva derrubada).**
   - Valor aferido **abaixo do limiar** do CONTRAN, **já descontada a margem de tolerância** do equipamento → fato **atípico** pela via objetiva (art. 386, III, CPP). Peça a auditoria numérica à skill `impugnacao-prova-embriaguez`.
   - **Prova objetiva nula** (etilômetro sem verificação/aprovação do INMETRO, sem certificado, laudo sem cadeia de custódia) → afastada a via objetiva, resta só a subjetiva, que se ataca no ponto 2.

2. **Insuficiência dos sinais notórios (via subjetiva derrubada) — art. 306, §2º.**
   - **Hálito etílico isolado não tipifica** — é indício de ingestão, não prova de *alteração da capacidade psicomotora*. Sustente que os sinais descritos (olhos vermelhos, fala pastosa) são **genéricos**, compatíveis com fadiga, doença, medicação, e não descrevem *comprometimento da direção*.
   - **Laudo/termo clínico padronizado** (formulário com quadradinhos marcados, sem narrativa individualizada) tem valor probatório frágil; exija a descrição concreta do comprometimento psicomotor.
   - **Ausência de exame clínico** e apoio apenas em impressão do agente de trânsito → prova subjetiva insuficiente para condenação penal (padrão além da dúvida razoável).

3. **Ausência de prova da condução do veículo (autoria/nexo).**
   - O tipo pune **conduzir**. Se não há prova de que o acusado **efetivamente dirigia** (encontrado parado no acostamento, no banco do passageiro, veículo desligado, sem testemunha da direção), falta elementar → **atipicidade/absolvição por ausência de autoria** (art. 386, IV ou VII, CPP). É tese frequentemente esquecida e muitas vezes a mais limpa.

4. **Legitimidade da recusa e vedação à autoincriminação.**
   - A recusa ao etilômetro/exame de sangue é **direito** (*nemo tenetur se detegere*); dela **não pode derivar presunção de culpa** nem prova penal do crime. As sanções do art. 277 do CTB são **administrativas**. Se a condenação se apoia na recusa como se fosse confissão, há violação constitucional.

5. **Nulidades e ilicitude da prova.**
   - Cadeia de custódia rompida, coleta sem consentimento válido, exame sem contraditório/contraprova (§2º, parte final) → ilicitude (art. 157, CPP) e nulidade. Se a prova ilícita for a única, a absorção contamina o conjunto (ver `impugnacao-prova-ilicita-derivada`).

6. **Desclassificação subsidiária.**
   - Não sendo o caso de embriaguez típica, mas havendo **direção perigosa sem habilitação**, cogitar a subsunção ao **art. 309 do CTB** (perigo concreto de dano), de menor gravidade — sempre como **pedido subsidiário**, nunca como confissão da tese principal.

7. **Saída negocial articulada (não é tese de mérito, é gestão de risco).**
   - Ver seção própria abaixo — ANPP/transação como **plano B consciente**, decidido *com o cliente*, e nunca oferecido em petição que sustenta atipicidade sem a devida ressalva.

## Teses e contra-teses

| Tese defensiva | Fundamento | Contra-tese (acusação) | Como neutralizar |
|---|---|---|---|
| Valor abaixo do limiar (descontada a tolerância) | Art. 306, §1º, I + resolução CONTRAN | "O valor bruto superou o limiar" | Exigir o desconto da **margem de erro** do equipamento sobre o valor bruto; o penal é *in dubio pro reo* |
| Hálito etílico não basta | Art. 306, §2º; ausência de comprometimento psicomotor | "Havia outros sinais" | Mostrar que os "outros sinais" são genéricos e não descrevem *alteração da direção* |
| Recusa é direito, não confissão | *Nemo tenetur*; CF, art. 5º, LXIII | "A recusa autoriza os sinais notórios" | Separar: recusa gera sanção *administrativa* (art. 277), não prova *penal* automática |
| Sem prova da condução | Elementar "conduzir"; art. 386, IV/VII, CPP | "Estava perto do carro / admitiu ter dirigido" | Distinguir *estar embriagado* de *conduzir embriagado*; atacar a prova da direção |
| Prova objetiva nula | Metrologia/INMETRO/cadeia de custódia | "Erro é mera irregularidade" | Sustentar nulidade essencial que atinge a fé pública do exame (detalhar via `impugnacao-prova-embriaguez`) |
| Perigo abstrato não dispensa a alteração | Núcleo do tipo é a *capacidade alterada* | "É perigo abstrato, basta dirigir bêbado" | O abstrato dispensa *perigo concreto*, não a *prova da alteração* — são coisas distintas |

➡️ **Cuidado com a contra-tese do "perigo abstrato":** a acusação costuma dizer que, por ser crime de perigo abstrato, bastaria a ingestão. **Falso.** O perigo abstrato dispensa a demonstração de risco concreto a alguém, mas **não dispensa a prova da alteração da capacidade psicomotora** (elementar do tipo, §1º). Essa distinção é o coração da defesa.

## A saída negocial (ANPP / transação) — quando e como articular

O art. 306 tem pena que, isolada, admite discussão sobre o cabimento de institutos despenalizadores — **confira, no caso concreto e na redação vigente, a pena mínima cominada** para aferir:

- **Transação penal (art. 76 da Lei 9.099/95):** cabível se o delito for de **menor potencial ofensivo** (pena máxima até 2 anos). **Confirme se a pena máxima atual do art. 306 comporta** o rito dos Juizados — ponto sensível que mudou com as reformas do tipo. Ver skill `transacao-penal`.
- **ANPP (art. 28-A do CPP):** cabível quando a **pena mínima for inferior a 4 anos**, presentes os demais requisitos (confissão formal, não reincidência, ausência de vedações). Ver skill `anpp`.

**Regra de articulação (crucial):**

- A saída negocial é **decisão do cliente**, informado do risco — nunca imposição do defensor. A confissão exigida pela ANPP é **irreversível na prática** e pode inviabilizar a tese de atipicidade.
- **Não ofereça acordo em petição que sustenta atipicidade** sem ressalva expressa. O correto é: (a) sustentar a tese de mérito; (b) *subsidiariamente e sem reconhecer culpa*, requerer que, superada a fase, se examine a proposta de ANPP/transação — ou tratar a negociação em **fase e peça próprias**.
- Para a **estratégia integrada** (quando negociar vs. quando litigar; sequência de movimentos), use `estrategia-plea-negociacao-integrada-anpp-colaboracao`.

## Habitualidade, reincidência e concurso

- **Reincidência específica** em embriaguez pesa na dosimetria e pode obstar benefícios — cheque a folha de antecedentes antes de decidir pela via negocial.
- **Concurso com outros crimes de trânsito:** se houver lesão/homicídio culposo, atenção à eventual **imputação de dolo eventual** (o MP às vezes migra do culposo para o doloso) — ver, no polo contrário, `acusacao-dolo-eventual-transito`; na defesa, `defesa-culpa-nexo-acidente-transito`.
- **Bis in idem administrativo/penal:** a autuação do art. 165 do CTB (administrativa) **não** impede nem depende da ação penal — não confundir as esferas na peça.

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

> **Nenhum número de HC, REsp, RE, tema repetitivo ou informativo abaixo deve ser citado de memória.** Ensine a **tese** e o **dispositivo**; confirme qualquer identificador via `jurisprudencia-stj-stf` / gate `verificacao-citacoes`.

- **Tese consolidada (STJ) sobre a suficiência probatória:** a jurisprudência admite a comprovação da embriaguez por **sinais notórios** e não apenas por etilômetro, desde 2012 — **mas** exige prova segura da *alteração da capacidade psicomotora*. **[NÃO VERIFICADO — confirmar o repetitivo/tema e o número no `jurisprudencia-stj-stf`.]**
- **Não autoincriminação e recusa ao bafômetro:** entendimento de que ninguém é obrigado a produzir prova contra si e a recusa não gera presunção de culpa penal. **[NÃO VERIFICADO — confirmar precedente/tema antes de citar número.]**
- **Perigo abstrato do art. 306 (constitucionalidade):** a doutrina e a jurisprudência majoritária reconhecem a validade do tipo de perigo abstrato em trânsito. **[NÃO VERIFICADO — confirmar o julgado no gate.]**
- **Súmulas notórias diretamente aplicáveis ao art. 306 são escassas;** desconfie de qualquer "súmula sobre bafômetro" citada sem fonte — provavelmente é invenção. **Na dúvida, omitir vence inventar.**

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Atacar **só** o etilômetro e esquecer que a via subjetiva (§2º) sozinha condena.
- Tratar o crime como se exigisse **perigo concreto** (regime revogado) — ou, no oposto, aceitar que "perigo abstrato" dispensa a prova da *alteração*.
- Ignorar a **margem de tolerância** e comparar o valor **bruto** com o limiar.
- Confundir sanção **administrativa** da recusa (art. 277) com **prova penal** do crime.
- Esquecer de questionar a **prova da condução** (autoria) — muitas vezes a tese mais forte.
- Oferecer **ANPP/transação com confissão** antes de esgotar a análise de atipicidade, jogando fora a tese de mérito.
- Citar "súmula do bafômetro" ou número de HC **de memória** — risco de sanção por jurisprudência inventada.
- Não conferir a **redação vigente** do tipo e a **resolução do CONTRAN** com o limiar atual.

**Checklist da defesa:**
- [ ] Identifiquei **qual via** (§1º, I objetiva; §1º, II subjetiva; ou ambas) a acusação usou?
- [ ] Auditei o **valor objetivo** com a **margem de tolerância descontada** (via `impugnacao-prova-embriaguez`)?
- [ ] Confirmei o **limiar vigente** na **resolução do CONTRAN** e a redação atual do art. 306?
- [ ] Ataquei a **suficiência dos sinais notórios** (hálito isolado não basta; laudo genérico)?
- [ ] Verifiquei se há **prova real da condução** do veículo (autoria)?
- [ ] Tratei a **recusa** como direito (*nemo tenetur*), sem deixá-la virar confissão?
- [ ] Levantei **nulidades/ilicitude** da prova (cadeia de custódia, contraprova do §2º)?
- [ ] Ordenei as teses **do mais forte ao subsidiário**, com desclassificação (art. 309) como plano B?
- [ ] Discuti **ANPP/transação com o cliente** e, se for o caso, tratei-as em peça/ressalva próprias (sem minar a atipicidade)?
- [ ] Conferi **reincidência específica** e concurso (dolo eventual) antes de decidir a via?
- [ ] Passei **toda** súmula/precedente pelo gate `verificacao-citacoes` / `jurisprudencia-stj-stf`?

## Skills relacionadas

- `impugnacao-prova-embriaguez` — a **auditoria técnica** da prova etílica (etilômetro, exame de sangue, metrologia, cadeia de custódia). Esta skill a **usa e articula**; aquela é o inventário probatório.
- `anpp` / `transacao-penal` — os institutos negociais genéricos (requisitos e procedimento).
- `estrategia-plea-negociacao-integrada-anpp-colaboracao` — quando litigar vs. negociar.
- `impugnacao-prova-ilicita-derivada` — contaminação por prova ilícita.
- `defesa-culpa-nexo-acidente-transito` / `acusacao-dolo-eventual-transito` — quando o 306 concorre com lesão/homicídio de trânsito.
- `redacao-persuasiva-criminal` — padrão de redação da peça (teoria do caso, narrativa, subsunção).
- `jurisprudencia-stj-stf` / `verificacao-citacoes` — gate obrigatório de citações.

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à construção da tese, não peça pronta nem substituto do juízo do advogado responsável (CED, art. 2º).
- **Polo:** skill de **defesa** (advocacia). O roteador deve conferir o **polo** da instituição em `company.md`: se o usuário atua como **Ministério Público/assistente de acusação**, esta skill *não* é a adequada (buscar as skills de acusação em trânsito). Ética por polo: **OAB + Provimento 205/2021** (advocacia); **CNMP** (MP); **LC 80/94** (Defensoria).
- **Citation Gate inegociável:** nenhuma súmula, tese ou acórdão citado de memória — tudo confirmado via `verificacao-citacoes` antes de protocolar (há sanções reais por jurisprudência inventada por IA).
- **Vigência:** confira sempre a redação atual do art. 306 do CTB e a resolução do CONTRAN vigente antes de fundamentar.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
