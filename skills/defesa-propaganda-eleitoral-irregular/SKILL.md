---
name: defesa-propaganda-eleitoral-irregular
description: >-
  Use ao defender em representação por propaganda eleitoral irregular ou antecipada — extemporânea,
  em bem público/particular, sonora fora de horário, na internet e impulsionamento pago (arts. 36,
  36-A, 37, 39, 57-A a 57-J da Lei 9.504/97; art. 243 do Código Eleitoral). Teses de pré-campanha
  lícita (36-A), livre manifestação de pensamento, ausência de pedido explícito de voto, distinção
  propaganda × opinião e… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, eleitoral, defesa, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-propaganda-eleitoral-irregular"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-propaganda-eleitoral-irregular", "defesa propaganda", "eleitoral irregular"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Defesa em Propaganda Eleitoral Irregular e Antecipada (Lei 9.504/97, arts. 36 a 39 e 57-A a 57-J)

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

Esta skill orienta a **defesa em representação por propaganda eleitoral irregular ou antecipada** perante a Justiça Eleitoral — a resposta do representado (candidato, partido, coligação, federação ou terceiro) quando o Ministério Público Eleitoral, adversário ou coligação alega propaganda **fora dos limites legais** (extemporânea, em local vedado, sem identificação, fora de horário, na internet com impulsionamento indevido etc.). O procedimento é o da **representação** do art. 96 da Lei 9.504/97 (rito próprio, prazos curtíssimos) e a sanção típica é **multa** — em regra sem consequência criminal, salvo tipos específicos.

> **Lição central:** antes de qualquer tese, **enquadre o ato**. Propaganda **antecipada** (antes de 15/08 do ano eleitoral) e propaganda **irregular no período** (após o início permitido, mas em desconformidade com forma/local/horário) têm regimes e teses distintos. Na antecipada, a chave é o **art. 36-A** (atos de pré-campanha permitidos) e a **ausência de pedido explícito de voto**. Na irregular no período, a chave é a **forma/local/meio** e a **gradação/proporcionalidade da multa**. Errar o enquadramento é defender a tese errada.

> **Cautela de vigência (obrigatória antes de citar):** a Lei 9.504/97 e o Código Eleitoral sofrem alterações frequentes, e a **data de início da propaganda** (hoje **16 de agosto** do ano eleitoral) e os **valores/faixas de multa** mudam por lei e por **resolução do TSE editada a cada ciclo eleitoral**. Antes de citar dispositivo, faixa de multa, data ou tese, confira: (1) a **redação vigente** da Lei 9.504/97 e do Código Eleitoral; (2) a **Resolução do TSE de propaganda** do pleito concreto (número muda a cada eleição); (3) súmulas do TSE e jurisprudência atual via a skill `jurisprudencia-stj-stf` (e, para matéria eleitoral, jurisprudência do **TSE/TREs**). Na dúvida, **omitir vence inventar**.

> **Nota de polo (importante — a spec marca `polo_acusacao: true`).** Esta skill serve majoritariamente à **DEFESA** do representado. As mesmas teses, porém, são espelhadas para o **polo acusatório** (Ministério Público Eleitoral que representa, ou representante/coligação adversária que pede a multa): para a acusação, o roteiro inverte-se — demonstrar o pedido explícito de voto, a extemporaneidade, a forma vedada e a autoria/anuência do beneficiário. **O chefe-roteador deve conferir o polo da instituição** (`_criminalsquad/_memory/company.md`) antes de aplicar: se for MP/assistente de acusação, use as seções como *contra-teses acusatórias*; se for advocacia de defesa, use-as diretamente.

---

## Base legal

- **Lei 9.504/97 (Lei das Eleições):**
  - **Art. 36** — só é permitida propaganda eleitoral **a partir de 16 de agosto** do ano da eleição (confirmar a data vigente); antes disso, é **propaganda antecipada**.
  - **Art. 36, §3º** — multa para a **propaganda antecipada** (faixa em valores/UFIR — conferir a redação e a resolução vigentes); responsabilidade do beneficiário quando comprovado prévio conhecimento.
  - **Art. 36-A** — rol de **atos de pré-campanha permitidos** (não configuram propaganda antecipada), desde que **sem pedido explícito de voto**: participação em entrevistas, debates, encontros, divulgação de posicionamento pessoal, prévias partidárias, atos de partido etc. **É a principal âncora da defesa na antecipada.**
  - **Art. 37** — propaganda em **bens públicos** e de uso comum (vedações; pichação, inscrição, outdoor); art. 37, §2º admite certos meios com limites.
  - **Art. 38** — propaganda **impressa** independe de licença (com regras de tiragem/identificação).
  - **Art. 39** — regras de **comícios, carros de som, alto-falantes, horários** (ex.: som permitido em faixas de horário; vedações na véspera e no dia).
  - **Arts. 57-A a 57-J** — propaganda na **internet**: início a partir de 16/08 (conferir), meios permitidos (sítio do candidato/partido, blogs, redes sociais, mensagens a cadastrados), **impulsionamento pago permitido apenas** quando contratado por candidato/partido e **identificado** (art. 57-C); **vedação a propaganda paga** fora das hipóteses legais; direito de resposta; remoção de conteúdo.
- **Código Eleitoral (Lei 4.737/65), art. 243** — condutas vedadas na propaganda (guarda relação com abuso e ofensas).
- **Resolução do TSE de propaganda** do pleito (número por eleição) — **detalha** internet, impulsionamento, horários, bens, multas. **Sempre a fonte operacional primária.**
- **Rito:** **art. 96 da Lei 9.504/97** — representação com prazo de **defesa em 48 horas** (conferir), julgamento célere; **poder de polícia** do juiz eleitoral (art. 41, §1º e §2º — atua sobre a propaganda irregular, mas **não** para impor multa de ofício sem representação, quanto a certas condutas — conferir).

> Distinção de escopo: **`publicacao-redes`** trata do **gate ético do advogado** nas suas próprias redes (Provimento 205/2021 da OAB). **Esta skill** trata da **defesa do candidato/partido** em representação eleitoral. Não confundir os dois planos.

---

## Passo 1 — Enquadrar o ato (a triagem que define tudo)

Antes de redigir, classifique o ato representado em **duas perguntas encadeadas**:

```
1) O ato ocorreu ANTES do início legal da propaganda (16/08 — conferir)?
   ├── SIM → PROPAGANDA ANTECIPADA
   │        Tese-mãe: art. 36-A (pré-campanha lícita) + ausência de pedido
   │        explícito de voto + livre manifestação de pensamento.
   └── NÃO → PROPAGANDA NO PERÍODO, porém IRREGULAR quanto a:
            ├── LOCAL       → bem público/uso comum (art. 37)?
            ├── MEIO/FORMA  → impressa, outdoor, pichação, faixa (arts. 37-38)?
            ├── SONORA/HORA → carro de som/alto-falante fora de horário (art. 39)?
            └── INTERNET    → impulsionamento/propaganda paga indevida
                             ou não identificada (arts. 57-A a 57-J)?
```

**Regra de ouro:** identificado o eixo (antecipada × local × meio × sonora × internet), vá à seção de teses correspondente. Uma representação pode cumular eixos — responda a cada um separadamente.

---

## Passo 2 — Teses de defesa por eixo

### A) Propaganda ANTECIPADA (antes do início legal)

Tese-mãe: **o ato é pré-campanha lícita (art. 36-A), não propaganda antecipada.** Sub-teses:

1. **Ausência de pedido explícito de voto.** O art. 36-A permite divulgação de posicionamento, pré-candidatura, plataformas e ideias — o que a lei veda é o **pedido explícito de votos** ("vote em mim", "vote 55"). Sem a menção **expressa e inequívoca** ao voto, não há propaganda antecipada. **Tese central e mais forte.**
2. **Livre manifestação de pensamento (CF, art. 5º, IV e IX; art. 220).** A pré-campanha e o debate político são protegidos; a restrição deve ser interpretada **restritivamente**, sem sufocar a liberdade de expressão.
3. **Enquadramento no rol do art. 36-A** — participação em entrevista, debate, encontro, sabatina, evento partidário, prévia, divulgação de atos parlamentares/de gestão, exaltação de qualidades pessoais — **atos nominados como permitidos**.
4. **Ausência de gasto eleitoral / de meio vedado.** Se não houve contratação de propaganda paga vedada nem uso de meio proibido, reforça a licitude.
5. **Ausência de prévio conhecimento do beneficiário** (quando o ato é de terceiro) — sem prova de que o pré-candidato sabia/anuiu, não se lhe imputa a multa (art. 36, §3º, exige o vínculo).

> **Distinção propaganda × opinião/jornalismo:** manifestação de apoio, opinião de terceiro, cobertura jornalística e crítica política **não** são propaganda eleitoral do candidato. A defesa demonstra que o conteúdo é **opinativo/informativo**, não **captação antecipada de voto**.

### B) Propaganda em BEM PÚBLICO / de uso comum (art. 37)

1. **O bem não se enquadra na vedação** — art. 37 e resolução distinguem bem público de uso comum, bem particular e locais em que certos meios são tolerados (§2º admite bandeiras/adesivos com limites de dimensão e sem fixação permanente). Demonstrar que o meio/local **está na faixa tolerada**.
2. **Ausência de autoria/anuência do candidato** — propaganda de terceiro/apoiador sem prévio conhecimento não gera multa ao beneficiário (exigência de vínculo).
3. **Retirada espontânea / cessação imediata** — a cessação após notificação afasta ou reduz a multa (proporcionalidade; poder de polícia visa **restabelecer a legalidade**, não punir de ofício — conferir).
4. **Ausência de dano/efetividade** — propaganda de alcance ínfimo, prontamente removida, pesa na **gradação** da multa.

### C) Propaganda SONORA / carro de som / horário (art. 39)

1. **Enquadramento no horário permitido** — demonstrar que a veiculação sonora ocorreu na **faixa horária** autorizada pela lei/resolução (conferir horários vigentes).
2. **Meio permitido em comício/evento** — o que é vedado em via pública pode ser lícito em comício autorizado.
3. **Ausência de reiteração / boa-fé** — evento pontual, cessado após advertência, reduz a multa.

### D) Propaganda na INTERNET e IMPULSIONAMENTO (arts. 57-A a 57-J)

1. **Meio permitido e identificado** — sítio do candidato/partido, blog, rede social e mensagem a cadastrados são meios lícitos (art. 57-B). **Impulsionamento é permitido** quando **contratado por candidato/partido** e **devidamente identificado** (art. 57-C); a defesa demonstra a **contratação regular** e a **identificação** do conteúdo pago.
2. **Conteúdo espontâneo de terceiro / militância virtual** — postagem de apoiador, compartilhamento orgânico e opinião pessoal são **livres** e não configuram propaganda paga vedada; não se imputa ao candidato sem prova de contratação/anuência.
3. **Ausência de propaganda paga vedada** — a vedação é à **propaganda paga fora das hipóteses do art. 57-C**; se não houve pagamento (ou o pagamento foi identificado e regular), não há ilícito.
4. **Liberdade de expressão e vedação à censura prévia** — remoção de conteúdo exige ordem específica e fundamentada; a defesa resiste a remoções genéricas.
5. **Impossibilidade técnica / autoria não comprovada** — perfil falso, conta não vinculada, ausência de prova de que o candidato controla/patrocina o conteúdo (ver skill `analise-provas-digitais`/cadeia de custódia digital para atacar a prova).

---

## Passo 3 — Teses transversais (valem em qualquer eixo)

- **Ausência de pedido explícito de voto** — reitera-se como filtro geral: sem menção expressa ao voto/número, a captação antecipada não se configura.
- **Ausência de prévio conhecimento e de vínculo** — a multa ao beneficiário exige **prova** de que ele sabia/anuiu (art. 36, §3º e correlatos). Ato de terceiro sem vínculo → improcedência quanto ao candidato.
- **Proporcionalidade e gradação da multa** — a multa tem **faixa** (piso e teto); a defesa pleiteia o **piso** invocando: ausência de reiteração, boa-fé, alcance ínfimo, cessação espontânea, ausência de dano à igualdade do pleito. **Nunca aceite o teto sem impugnar a dosimetria.**
- **Nulidades processuais** — cerceamento de defesa (prazo exíguo do art. 96 respeitado?), ausência de intimação regular, decisão sem fundamentação idônea (CF, art. 93, IX), prova ilícita/quebra de cadeia de custódia (prints sem autenticação, ata notarial ausente).
- **Perda de objeto** — encerrado o período eleitoral / cessada a propaganda, discutir a **perda de interesse** quanto à obrigação de remover (a multa, contudo, subsiste).
- **Legitimidade e competência** — conferir legitimidade do representante e competência do juízo (propaganda municipal × estadual × federal).

---

## Teses e contra-teses (defesa × acusação)

| Tese da DEFESA | Contra-tese da ACUSAÇÃO (MP/adversário) |
|---|---|
| Ato é pré-campanha lícita (art. 36-A), sem pedido de voto | Houve **pedido explícito** de voto/número, ou equivalente inequívoco de captação antecipada |
| Livre manifestação de pensamento / opinião | Conteúdo transcende a opinião e caracteriza **propaganda** (mérito de candidatura + apelo eleitoral) |
| Sem prévio conhecimento do beneficiário (ato de terceiro) | Prova de **anuência/benefício direto** e reiteração revelam prévio conhecimento |
| Impulsionamento contratado e **identificado** (art. 57-C) | Impulsionamento **não identificado** ou por quem não é candidato/partido → propaganda paga vedada |
| Multa deve ir ao **piso** (boa-fé, alcance ínfimo, cessação) | Reiteração, alcance amplo e dolo justificam a **exasperação** |
| Prova digital sem cadeia de custódia / print não autenticado | Ata notarial/certidão e metadados comprovam autoria e conteúdo |

> Para a acusação: o roteiro é **provar** o pedido explícito de voto (ou o inequívoco apelo), a **extemporaneidade/forma vedada**, a **autoria e o prévio conhecimento** e o **dano à igualdade** do pleito — invertendo cada linha acima.

---

## Estrutura da peça de defesa (resposta à representação — art. 96)

Roteiro (adaptar ao caso; a redação persuasiva é obrigatória — ver nota final):

1. **Endereçamento e qualificação** — Juízo Eleitoral competente (Zona/TRE); representado, representante, autos.
2. **Síntese da representação** — o que se imputa (eixo: antecipada/local/meio/sonora/internet) e o pedido de multa.
3. **Preliminares** (se houver) — ilegitimidade, incompetência, cerceamento de defesa (prazo), prova ilícita/cadeia de custódia, perda de objeto.
4. **Mérito — por eixo:**
   - **Enquadramento correto do ato** (Passo 1) e a **tese-mãe** (Passo 2).
   - **Ausência de pedido explícito de voto** e **livre manifestação** (quando antecipada).
   - **Ausência de meio/local vedado** e/ou **impulsionamento regular e identificado** (quando irregular no período/internet).
   - **Ausência de prévio conhecimento/vínculo** (quando ato de terceiro).
5. **Da multa — subsidiariamente:** impugnação da **dosimetria**; pedido de fixação no **piso**; proporcionalidade; boa-fé; cessação espontânea.
6. **Pedidos:** improcedência da representação; subsidiariamente, multa no mínimo legal; produção de prova (documental, ata notarial, perícia digital) se necessária.
7. **Provas e documentos** — procuração, prints com ata notarial, comprovantes de contratação/identificação de impulsionamento, prova de cessação/remoção.

> **Cálculo/gradação da multa** é matéria de **faixa legal** (piso–teto) definida na lei e na **resolução vigente** — descreva o método (partir do piso; agravar só com reiteração/dolo/alcance comprovados) e **confira os valores na resolução do pleito**. Não há calculadora determinística padrão para multa eleitoral no acervo; se o escritório padronizar faixas, marcar **[calculadora de multa eleitoral a implementar com testes]** e, enquanto isso, calcular manualmente sobre a tabela da resolução vigente.

---

## Súmulas e precedentes (sob o Citation Gate — conferir antes de citar)

**Dispositivos de lei e regra estrutural** (citáveis com certeza, conferida a redação vigente): arts. 36, 36-A, 37, 38, 39, 57-A a 57-J da Lei 9.504/97; art. 243 do Código Eleitoral; art. 96 (rito da representação); CF, art. 5º, IV e IX, e art. 220 (liberdade de expressão).

**Súmulas do TSE e precedentes específicos** (número/tese **[NÃO VERIFICADO]** — conferir obrigatoriamente via `jurisprudencia-stj-stf` e na base do TSE/TREs antes de usar):

- Entendimento consolidado de que **a caracterização da propaganda antecipada exige pedido EXPLÍCITO de voto** (chave do art. 36-A) — **[NÃO VERIFICADO]**: confirmar o enunciado e os julgados-líderes do TSE atuais.
- Entendimento sobre **responsabilidade do beneficiário condicionada ao prévio conhecimento** — **[NÃO VERIFICADO]**: confirmar súmula/precedente.
- Enunciados do TSE sobre **propaganda em bens de uso comum**, **impulsionamento** e **remoção de conteúdo na internet** — **[NÃO VERIFICADO]**: cada eleição tem resolução e jurisprudência próprias; conferir.

> **Regra do Citation Gate:** prefira **ensinar a tese e citar o dispositivo** (que é estável) a arriscar um número de acórdão/súmula. Nenhum número de HC/REsp/RE/RESPE/AgR ou informativo entra na peça sem verificação. Para matéria eleitoral, a jurisprudência é **do TSE e dos TREs** e muda a cada ciclo — a verificação é ainda mais crítica.

---

## Erros comuns / anti-padrões (evitar)

- **Confundir propaganda antecipada com irregular no período** — tese-mãe muda (art. 36-A × forma/local/meio). Enquadre primeiro.
- **Alegar 36-A sem afastar o pedido explícito de voto** — se houve "vote 55", o art. 36-A não salva; ataque então a **prova** do pedido e a **dosimetria**.
- **Ignorar a resolução do TSE do pleito** — datas, horários, faixas de multa e regras de internet estão **na resolução**, não só na lei. Citar valor desatualizado é erro grave.
- **Aceitar a multa no teto** sem impugnar a **gradação** (piso, boa-fé, alcance, cessação).
- **Imputar/aceitar imputação ao candidato por ato de terceiro** sem discutir **prévio conhecimento/vínculo**.
- **Tratar impulsionamento como sempre ilícito** — é **lícito** quando contratado por candidato/partido e **identificado** (art. 57-C).
- **Usar print de rede social sem ata notarial/cadeia de custódia** — atacar (defesa) ou suprir (acusação) a autenticidade da prova digital.
- **Perder o prazo de 48h** (art. 96) — o rito é célere; controle o prazo com `calculadora-tempestividade`/`agenda-juridica`.
- **Citar súmula/precedente do TSE de memória** — passa pelo Citation Gate, sempre.

## Checklist da peça

- [ ] Ato **enquadrado** (antecipada × local × meio × sonora × internet)?
- [ ] Tese-mãe do eixo escolhida (36-A / forma-local / horário / internet-impulsionamento)?
- [ ] **Ausência de pedido explícito de voto** sustentada (quando antecipada)?
- [ ] **Livre manifestação de pensamento** invocada (CF, art. 5º e 220)?
- [ ] **Prévio conhecimento/vínculo** discutido (ato de terceiro)?
- [ ] **Impulsionamento** analisado sob o art. 57-C (contratado + identificado)?
- [ ] **Prova digital** atacada/suprida (ata notarial, cadeia de custódia)?
- [ ] **Dosimetria da multa** impugnada (pedido de piso; proporcionalidade)?
- [ ] **Preliminares** conferidas (prazo/96, competência, prova ilícita, perda de objeto)?
- [ ] **Datas, horários e faixas** conferidos na **resolução do TSE do pleito**?
- [ ] **Redação vigente** da Lei 9.504/97 e do CE conferida?
- [ ] **Súmulas/precedentes** do TSE/TREs verificados via `jurisprudencia-stj-stf` (nada de memória)?
- [ ] **Polo conferido** (defesa × acusação) conforme `company.md`?
- [ ] **Prazo controlado** (48h — art. 96) e peça pronta para **revisão humana**?

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação da defesa (ou da representação, se o polo for acusatório); não substitui o juízo do profissional responsável nem a leitura dos autos concretos.
- **Ética por polo.** Advocacia: EAOAB e Provimento 205/2021 (OAB). Ministério Público Eleitoral: normas do CNMP. Defensoria: LC 80/94. **Conferir o polo** da instituição em `_criminalsquad/_memory/company.md` — a spec marca `polo_acusacao: true`, logo as seções servem tanto à defesa (uso direto) quanto à acusação (como contra-teses).
- **Citation Gate.** Nenhuma súmula/precedente/tese do TSE/TRE citada de memória — tudo passa por `jurisprudencia-stj-stf` e pela base oficial do TSE; a jurisprudência eleitoral muda a cada ciclo.
- **Prova digital e LGPD.** Dados de assistidos e material sigiloso nunca em repositório público; prints e mídias tratados com cadeia de custódia.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra). Para controle de prazo, use `calculadora-tempestividade`; para o eixo internet, apoie-se em `analise-provas-digitais`/cadeia de custódia.
