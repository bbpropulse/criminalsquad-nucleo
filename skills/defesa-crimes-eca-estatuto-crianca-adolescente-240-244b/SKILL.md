---
name: defesa-crimes-eca-estatuto-crianca-adolescente-240-244b
description: >-
  Use ao defender acusado dos crimes em espécie do ECA contra a criança e o adolescente —
  pornografia infantil (produção, registro, publicação, aquisição, posse/armazenamento), aliciamento
  online e correlatos. Gatilhos: ECA, art. 240, art. 241, art. 241-A, art. 241-B, art. 241-C, art.
  241-D, art. 241-E, art. 244-B, Lei 8.069/90, pornografia infantil, pedofilia (uso…. Não use para
  conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, leis-penais-especiais, eca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-eca-estatuto-crianca-adolescente-240-244b"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-eca-estatuto-crianca-adolescente-240-244b", "defesa crimes", "adolescente 244b"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos crimes do ECA contra a criança e o adolescente (Lei 8.069/90, arts. 240 a 244-B)

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

Esta skill orienta a **defesa técnica** do acusado dos crimes em espécie do **Estatuto da Criança e do Adolescente** que têm a criança/adolescente como **vítima** — sobretudo o núcleo de **pornografia infantil** (arts. 240, 241, 241-A a 241-E), o **aliciamento online** (art. 241-D) e a **corrupção de menores** (art. 244-B). São crimes de altíssima reprovabilidade social e imensa carga emocional: a defesa aqui é exigente, impopular e **estritamente técnica** — foca em tipicidade, individualização da conduta, licitude da prova digital, dolo e distinção entre figuras típicas.

> **Lição central:** nestes crimes, a batalha ganha-se **na prova e na subsunção**, não na retórica. **Individualize a conduta** (quem fez o quê, em qual dispositivo, com qual dolo) e **classifique o verbo típico correto** — produzir (240) ≠ divulgar/compartilhar (241-A) ≠ possuir/armazenar (241-B). Cada figura tem pena, competência e teses próprias. Errar o tipo — ou aceitar denúncia genérica que imputa "os crimes do ECA" em bloco — é o erro que mais compromete a defesa.

> **Cautela de vigência (obrigatória antes de citar):** os arts. 240, 241 e 241-A a 241-E foram **inteiramente reescritos pela Lei 11.829/2008**, que criou as figuras autônomas (divulgação, aquisição, posse/armazenamento, simulação, aliciamento). Antes de 2008 havia um único art. 241 com redação diversa — citar a redação antiga é **erro grave de vigência**. O art. 244-B (corrupção de menores) veio com a **Lei 12.015/2009**. Confira a **redação vigente** de cada dispositivo na fonte oficial e **todas** as súmulas, temas e precedentes pela skill `jurisprudencia-stj-stf` (ou `verificacao-citacoes`) **antes** de fundamentar a peça. Há sanções reais por jurisprudência inventada por IA.

---

## O que esta skill cobre — e o que NÃO cobre

**Cobre** (crimes do ECA com a criança/adolescente como **vítima**):

- **Art. 240** — produzir, dirigir, fotografar, filmar ou **registrar** cena de sexo explícito ou pornográfica com criança/adolescente (inclui quem agencia, facilita, contracena).
- **Art. 241** — **vender ou expor à venda** o material.
- **Art. 241-A** — **oferecer, trocar, disponibilizar, transmitir, distribuir, publicar ou divulgar** (inclui **compartilhamento** em rede/P2P/mensageria).
- **Art. 241-B** — **adquirir, possuir ou armazenar** o material (a figura da **posse/armazenamento** — a mais frequente nas operações policiais).
- **Art. 241-C** — **simulação** de participação de criança/adolescente em cena pornográfica (montagem/imagem adulterada, incluindo IA generativa — verificar tratamento atual).
- **Art. 241-D** — **aliciar, assediar, instigar ou constranger** criança pela internet com o fim de praticar ato libidinoso (o "grooming").
- **Art. 241-E** — norma **interpretativa** do que é "cena de sexo explícito ou pornográfica".
- **Art. 244-B** — **corrupção de menores**: corromper/facilitar a corrupção de menor de 18 anos, com ele praticando infração penal ou induzindo-o a praticá-la.

**NÃO cobre** (usar outras skills):

- **Ato infracional e medida socioeducativa** (adolescente como **autor**) — matéria própria, com procedimento e princípios distintos.
- **Estupro de vulnerável** (art. 217-A, CP) e demais crimes sexuais **do Código Penal** — ver skill de defesa em crimes sexuais.
- Crimes administrativos do ECA (arts. 228-244-A que não os aqui listados) e infrações administrativas.

---

## Base legal

- **Lei 8.069/90 (ECA), arts. 240, 241 e 241-A a 241-E** — redação da **Lei 11.829/2008** (pornografia infantil e figuras correlatas).
- **Art. 244-B do ECA** — redação da **Lei 12.015/2009** (corrupção de menores).
- **Art. 241-E do ECA** — definição legal de "cena de sexo explícito ou pornográfica" (norma interpretativa — baliza a tipicidade).
- **CF, art. 5º, LVI** — inadmissibilidade da prova obtida por meios ilícitos (eixo da defesa na prova digital).
- **CF, art. 109, V** — competência da **Justiça Federal** quando o material transita por rede internacional (internet), por força de tratado (ver Súmula 500/STJ — conferir).
- **CPP, arts. 158-A a 158-F** — **cadeia de custódia** da prova (essencial na perícia de dispositivos).
- **Lei 12.965/2014 (Marco Civil da Internet), arts. 22-23** — requisitos para obtenção de registros/dados; **reserva de jurisdição**.
- **CP, art. 71** — continuidade delitiva (relevante em multiplicidade de arquivos/condutas).

---

## Roteiro de defesa por tipo penal

### 1. Individualizar a conduta ANTES de tudo

A denúncia precisa dizer **qual verbo** o réu praticou, **em qual arquivo/dispositivo** e **com qual dolo**. Denúncia que imputa "os crimes de pornografia infantil" em bloco, sem descrever a conduta concreta de cada acusado, é **inepta** (CPP, art. 41).

- **Tese preliminar:** rejeição da denúncia / **inépcia** por ausência de descrição individualizada da conduta e do nexo com o material apreendido.
- Em **coautoria/uso compartilhado de dispositivo** (computador familiar, rede doméstica, IP dinâmico), exigir a **individualização** de quem efetivamente possuía/compartilhou — a mera titularidade do IP ou do aparelho não prova autoria.

### 2. Atacar a licitude da prova digital (frequentemente o ponto mais forte)

A prova destes crimes é quase sempre **digital**: arquivos, hashes, logs de IP, dados de mensageria, perícia em dispositivos. Fiscalizar:

- **Reserva de jurisdição:** quebra de sigilo telemático, acesso a conteúdo de dispositivo e dados de conexão **exigem ordem judicial fundamentada** (Marco Civil, arts. 22-23). Acesso a celular/computador **sem autorização judicial** e sem consentimento válido → **prova ilícita** (CF, art. 5º, LVI) e nulidade por derivação (teoria dos frutos da árvore envenenada).
- **Cadeia de custódia (CPP, arts. 158-A a 158-F):** exigir a **integridade** do vestígio digital — **hash** de coleta e de exame conferentes, lacres, registro de acesso, espelhamento forense. Quebra na cadeia → **fragilidade/inidoneidade** da prova.
- **Perícia:** o laudo deve **individualizar** os arquivos, comprovar que retratam criança/adolescente **real** (não desenho/ficção — o tipo protege criança real; ver art. 241-E e discussão sobre material inteiramente sintético) e demonstrar a **posse consciente**.
- **Denúncia anônima / cooperação internacional (NCMEC etc.):** a notícia inicial anônima **não basta** por si; exige-se **diligências prévias** antes da medida invasiva. Verificar a **licitude da porta de entrada** da investigação.

### 3. Dolo e conhecimento — afastar a posse/armazenamento inconsciente (art. 241-B)

O crime do art. 241-B exige **dolo**: consciência de possuir/armazenar material de pornografia infantil.

- **Teses de atipicidade subjetiva:** arquivos em **cache** de navegador, **download automático** de app de mensageria (mídia recebida sem solicitação e não aberta), **malware/acesso de terceiros**, arquivos **apagados** recuperados pela perícia (a posse **cessou**), material recebido e **não visualizado**.
- **Momento consumativo:** discutir se houve **posse consciente e atual** ao tempo dos fatos.
- **Quantidade e contexto** importam para o dolo e para a dosimetria (não confundir volume com gravidade automática).

### 4. Classificação típica correta — não deixar a acusação "empilhar" tipos

- **Produção (240) × divulgação (241-A) × posse (241-B):** são condutas distintas com penas distintas. Quem **apenas armazena** não pratica produção nem divulgação.
- **Consunção / concurso aparente:** discutir se a **posse (241-B)** é **absorvida** pela **divulgação (241-A)** quando o compartilhamento é a conduta-fim e a posse é meio necessário (ver posição da jurisprudência — **conferir**). Evitar dupla imputação pelo mesmo substrato fático.
- **Continuidade delitiva (art. 71, CP):** multiplicidade de arquivos/compartilhamentos no mesmo contexto pode configurar **crime continuado**, não concurso material (impacta fortemente a pena) — sustentar a unidade de desígnio.
- **Simulação (241-C):** montagem/adulteração — distinguir de material com criança real; discutir tipicidade de conteúdo **inteiramente sintético** (IA), tema em evolução — **verificar tratamento legislativo e jurisprudencial atual**.

### 5. Art. 241-D (aliciamento online / grooming) — dolo específico e execução

- Exige **fim específico**: aliciar/assediar/instigar/constranger criança **para praticar ato libidinoso**. Conversa sem esse elemento finalístico é atípica quanto a este artigo.
- Discutir **crime consumado × tentativa** e a atuação de **agente infiltrado/perfil falso** (verificar requisitos legais da infiltração virtual — Lei 13.441/2017 alterou o ECA neste ponto; **conferir**). Provocação policial que induz o crime pode configurar **flagrante preparado** (Súmula 145/STF).

### 6. Art. 244-B (corrupção de menores) — prova da participação do menor

- **Súmula 500/STJ** — a caracterização da corrupção de menores é **formal**, **bastando** a prova da participação do menor na infração, **independentemente** de prova de sua efetiva corrupção. **[Confira o enunciado e a vigência via `jurisprudencia-stj-stf`.]**
- **Teses defensivas:** ausência de prova da **efetiva participação** do menor na empreitada; comprovação de que o adolescente **já era corrompido/experiente** no crime não afasta o tipo (por ser formal) — logo, o foco defensivo é a **participação em concreto** e a **menoridade à época** (certidão de nascimento; exame se houver dúvida).

### 7. Dosimetria e execução (apontar, não calcular aqui)

Estes crimes têm penas elevadas e **repercussão na execução** (alguns equiparados/hediondos — **conferir o rol atual** da Lei 8.072/90 e alterações). A defesa deve:

- Trabalhar **circunstâncias judiciais** (art. 59, CP), **atenuantes**, **causas de diminuição** e a **continuidade delitiva** para conter a pena.
- Discutir **regime inicial** e cabimento de substituição/benefícios conforme a classificação (hediondez impacta progressão — ver skills de execução).
- Para o cálculo determinístico da pena, aplicar a skill **`calculadora-dosimetria`**; para prazos e prescrição, **`calculadora-prescricao`** e **`calculadora-tempestividade`**. Esta skill descreve o **método e as teses**, não executa cálculo.

---

## Teses e contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Inépcia da denúncia (conduta não individualizada) | CPP, art. 41 | Descrição suficiente para o exercício da defesa |
| Prova digital ilícita (acesso sem ordem judicial) | CF, art. 5º, LVI; Marco Civil arts. 22-23 | Consentimento válido / flagrante / dado aberto |
| Quebra da cadeia de custódia | CPP, arts. 158-A a 158-F | Integridade demonstrada por hash/espelhamento |
| Posse inconsciente (cache, malware, mídia auto-baixada) | Atipicidade subjetiva (ausência de dolo) | Perícia demonstra acesso e organização dos arquivos |
| Consunção da posse pela divulgação | Concurso aparente de normas | Condutas autônomas com bens jurídicos próprios |
| Crime continuado (não concurso material) | CP, art. 71 | Desígnios autônomos / contextos distintos |
| Flagrante preparado no grooming | Súmula 145/STF **[conferir]** | Infiltração virtual legalmente autorizada |
| Atipicidade de material sintético/ficcional | Tipo protege criança **real** | Verificar tratamento atual (IA/241-C) |

---

## Súmulas e precedentes sob o Citation Gate

> **Regra inegociável:** cite **dispositivos de lei** e **súmulas notórias** com certeza; para **qualquer** número de HC/REsp/RE, informativo ou tema **sem certeza absoluta**, marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf`. Prefira ensinar a **tese e o dispositivo** a arriscar um número de acórdão.

- **Súmula 500/STJ** — corrupção de menores é crime **formal** (basta a participação do menor na infração). **[Confirmar enunciado/vigência.]**
- **Súmula 145/STF** — não há crime quando a preparação do flagrante torna **impossível** a consumação (flagrante preparado). Útil no grooming provocado. **[Confirmar.]**
- **Competência da Justiça Federal** para pornografia infantil quando o material transita por **rede internacional** (internet) — há enunciado sumular do STJ sobre o tema. **[NÃO VERIFICADO — confirmar número e alcance via `jurisprudencia-stj-stf`; distinguir posse local × transnacionalidade.]**
- **Discussão sobre consunção posse (241-B) × divulgação (241-A)** e sobre **material sintético/IA** — há precedentes e evolução legislativa recentes. **[NÃO VERIFICADO — pesquisar posição atual antes de citar.]**
- **Infiltração de agentes virtuais** (arts. 190-A e ss. do ECA, Lei 13.441/2017) — requisitos e limites. **[Conferir redação e jurisprudência atuais.]**

Não invente número de acórdão. Na dúvida, **omitir vence inventar**.

---

## Erros comuns / checklist da defesa

- [ ] A **conduta de cada réu** está individualizada (verbo típico + arquivo/dispositivo + dolo)? Se não → **inépcia**.
- [ ] O **tipo penal** foi corretamente classificado (produção 240 × divulgação 241-A × posse 241-B)? Não aceitar empilhamento indevido.
- [ ] Houve **ordem judicial** para acesso a dispositivo/dados telemáticos (Marco Civil, arts. 22-23)? Sem ela → **prova ilícita** (CF, art. 5º, LVI).
- [ ] A **cadeia de custódia** (CPP, arts. 158-A a 158-F) está íntegra (hash, lacre, espelhamento)? Apontar cada quebra.
- [ ] A **porta de entrada** da investigação (denúncia anônima / cooperação internacional) é lícita e foi seguida de diligências prévias?
- [ ] Há tese de **posse inconsciente** (cache, malware, mídia auto-baixada, arquivo apagado)?
- [ ] Cabe **consunção** (241-B absorvido pelo 241-A) e/ou **continuidade delitiva** (art. 71) para conter a pena?
- [ ] No **grooming (241-D)**, há o **fim específico** e não houve **flagrante preparado** (Súm. 145/STF)?
- [ ] Na **corrupção de menores (244-B)**, a **participação do menor** e a **menoridade à época** estão provadas/impugnadas (Súm. 500/STJ)?
- [ ] **Competência** (Justiça Federal × Estadual) foi corretamente fixada conforme a transnacionalidade?
- [ ] Todas as **súmulas/precedentes** passaram pelo gate `jurisprudencia-stj-stf` / `verificacao-citacoes`?

**Anti-padrões (evitar):**
- Aceitar denúncia genérica que não descreve a conduta concreta de cada acusado.
- Confundir **posse** (241-B) com **produção** (240) ou **divulgação** (241-A) — penas e teses distintas.
- Tratar **titularidade de IP/aparelho** como prova automática de autoria.
- Ignorar a **cadeia de custódia** e a **reserva de jurisdição** na prova digital (onde a defesa costuma ter mais força).
- Deixar de sustentar **continuidade delitiva** diante de multiplicidade de arquivos (aceitando concurso material que infla a pena).
- Citar número de acórdão/súmula **de memória**, sem passar pelo Citation Gate.

---

## Nota de conformidade

- **Rascunho técnico sob revisão humana obrigatória.** Este material é apoio à preparação da defesa — hipótese a confirmar —, não substitui o juízo do advogado responsável nem a leitura dos autos concretos (laudos periciais, cadeia de custódia, decisões judiciais).
- **Polo e ética:** esta skill é de **DEFESA** (`polo_acusacao=false`). O chefe-roteador deve **conferir o polo** da instituição em `_criminalsquad/_memory/company.md` antes de acionar. A atuação observa o **Estatuto da Advocacia (Lei 8.906/94)**, o **Código de Ética e Disciplina da OAB** e o **Provimento 205/2021**; havendo atuação de Defensoria, a **LC 80/94**. Conflito de interesses (art. 17 EAOAB) checado na triagem.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo passa por `jurisprudencia-stj-stf` / `verificacao-citacoes` antes do uso.
- **Sigilo e LGPD:** o material probatório é sensível; dados do assistido e das vítimas nunca em repositório público (`acervo/casos/` é gitignored). Tratar imagens/arquivos apreendidos com o rigor legal — o próprio manuseio indevido pode configurar crime.

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
