---
name: defesa-crimes-informaticos-invasao
description: >-
  Use ao defender crime cibernético NÃO-patrimonial — invasão de dispositivo informático (CP, art.
  154-A, red. Lei 12.737/12 e Lei 14.155/21), interrupção/perturbação de serviço telemático (CP,
  art. 266, §1º), stalking/perseguição cibernética (CP, art. 147-A, Lei 14.132/21): atipicidade por
  ausência de violação indevida de mecanismo de segurança, condição de procedibilidade
  (representação — art. 154-B), competência e… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, crimes-informaticos, leis-especiais]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-crimes-informaticos-invasao"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-crimes-informaticos-invasao", "defesa crimes", "informaticos invasao"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa nos Crimes Cibernéticos Não-Patrimoniais (CP, arts. 154-A/154-B, 266, §1º, e 147-A)

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

Esta skill orienta a **defesa técnica** nos crimes cibernéticos **não-patrimoniais**: a **invasão de dispositivo informático** (CP, art. 154-A — Lei 12.737/2012, "Lei Carolina Dieckmann", com majoração pela Lei 14.155/2021), a **interrupção ou perturbação de serviço telemático ou de informação de utilidade pública** (CP, art. 266, §1º) e a **perseguição/stalking**, inclusive em ambiente digital (CP, art. 147-A — Lei 14.132/2021). O núcleo é o crime cuja ofensa recai sobre a **liberdade individual, a intimidade e a inviolabilidade de dados** — não sobre o patrimônio.

> **Lição central:** o elemento normativo decisivo do art. 154-A é a **violação INDEVIDA de mecanismo de segurança**. Sem uma barreira técnica de proteção efetivamente burlada (senha, criptografia, autenticação, bloqueio), **o fato é atípico**. A primeira pergunta da defesa é sempre: *havia mecanismo de segurança e ele foi violado indevidamente?* Acesso a dispositivo desbloqueado, com senha entregue/consentida ou sem qualquer proteção **não configura o tipo**.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente do **art. 154-A do CP** — a **Lei 14.155/2021** reescreveu a pena base (reclusão, 1 a 4 anos) e as majorantes, e ampliou o objeto para "dispositivo informático **da vítima ou de terceiro**", removendo a antiga exigência de conexão à rede. Confira também o **art. 147-A** (redação da Lei 14.132/2021, que revogou a antiga contravenção de perturbação — art. 65 da LCP) e o **art. 266, §1º**. Passe **toda** súmula, tese, tema ou acórdão pelo gate `verificacao-citacoes` (via `jurisprudencia-stj-stf`) antes de fundamentar. Na dúvida sobre número de julgado: **ensine a tese e o dispositivo; não arrisque o número.**

---

## Base legal

- **CP, art. 154-A** — Invadir dispositivo informático de uso alheio, conectado ou não à rede de computadores, **mediante violação indevida de mecanismo de segurança**, com o fim de obter, adulterar ou destruir dados/informações sem autorização expressa ou tácita, ou de instalar vulnerabilidades. Pena base: **reclusão, 1 a 4 anos, e multa** (red. Lei 14.155/2021).
  - **§2º** — aumento se resulta prejuízo econômico.
  - **§3º** — forma qualificada se da invasão resulta obtenção de **conteúdo de comunicações privadas, segredos comerciais/industriais, informações sigilosas** (assim definidas em lei) ou controle remoto não autorizado — pena de reclusão, 2 a 5 anos, e multa.
  - **§4º** — aumento na hipótese do §3º se há **divulgação, comercialização ou transmissão** a terceiro dos dados obtidos.
  - **§5º** — aumento se o crime é praticado contra **autoridades** (Presidente, Governadores, Prefeitos, dirigentes máximos de órgãos etc.).
- **CP, art. 154-B** — **Ação penal pública condicionada a REPRESENTAÇÃO**, salvo se o crime é cometido contra a Administração Pública (União, Estados, DF, Municípios, empresas públicas etc.), quando é **incondicionada**.
- **CP, art. 266, §1º** — Interromper ou perturbar **serviço telemático** ou de informação de utilidade pública, ou impedir/dificultar-lhe o restabelecimento. Pena: detenção, 1 a 3 anos, e multa (dobrada em calamidade — §2º).
- **CP, art. 147-A** — **Perseguição** (stalking): perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a locomoção ou invadindo/perturbando sua esfera de liberdade/privacidade. Alcança a **perseguição por meio digital** (redes sociais, mensagens, monitoramento). Ação penal pública **condicionada a representação**, salvo nas hipóteses de aumento (ex.: contra a mulher por razões da condição de sexo feminino).
- **Marco Civil da Internet (Lei 12.965/2014), arts. 22-23** — requisitos e limites da **ordem judicial** para obtenção de registros de conexão/acesso; base para atacar prova obtida sem autorização.
- **CF, art. 5º, X, XII e LVI** — inviolabilidade da intimidade e do sigilo de dados; inadmissibilidade das provas ilícitas.

---

## Roteiro de defesa por tipo penal

### 1. Invasão de dispositivo (art. 154-A) — o coração da matéria

**Elementos do tipo (todos exigidos):**
1. **conduta:** invadir dispositivo informático de uso alheio;
2. **meio vinculado:** **mediante violação INDEVIDA de mecanismo de segurança** (elemento normativo — sem ele, atipicidade);
3. **dolo específico:** fim de **obter, adulterar ou destruir** dados/informações sem autorização, ou **instalar vulnerabilidades**;
4. **ausência de autorização** expressa ou tácita do titular.

**Teses defensivas típicas:**
- **Atipicidade por ausência de mecanismo de segurança violado (tese-mãe).** Dispositivo sem senha/bloqueio, tela já desbloqueada, conta com sessão aberta, ou acesso obtido sem burlar barreira técnica → **fato atípico**. O tipo pune a *superação indevida da proteção*, não o mero acesso.
- **Autorização expressa ou tácita.** Cônjuge, ex-parceiro, familiar ou colega que recebeu a senha, teve acesso consentido ou compartilhava o dispositivo → falta a elementar "sem autorização". Distinguir *acesso autorizado que depois desagrada* de *invasão*.
- **Consentimento no fornecimento da senha.** Entregar voluntariamente a senha afasta a "violação indevida" — não há mecanismo de segurança a burlar quando a chave é fornecida.
- **Ausência de dolo específico.** Acesso curioso/acidental, sem finalidade de obter, adulterar ou destruir dados, nem de instalar vulnerabilidade → atipicidade subjetiva.
- **Erro de tipo** sobre a existência de autorização (art. 20 do CP) — o agente supunha autorizado o acesso.
- **Princípio da insignificância / lesividade** em casos de bagatela sem prejuízo nem obtenção de conteúdo sensível (tese subsidiária, de acolhida restrita — confira o estado atual da jurisprudência via `jurisprudencia-stj-stf`).
- **Afastamento das qualificadoras/majorantes.** Se não há prova de obtenção de **comunicações privadas, segredos ou informações sigilosas** (§3º) nem de **divulgação/comercialização** (§4º), a defesa pleiteia a desclassificação para o **caput**.

> **Distinção crucial (não confundir com a fraude patrimonial):** se a conduta visa **subtração/desvio de valores** (PIX, transferência, cartão, boleto), o enquadramento migra para **furto mediante fraude eletrônica** (CP, art. 155, §4º-B) ou **estelionato eletrônico** (art. 171, §2º-A) — matéria da skill `defesa-fraude-eletronica`. O art. 154-A protege a **inviolabilidade do dispositivo e dos dados**, não o patrimônio. Verifique o **bem jurídico** para não aceitar dupla imputação indevida (bis in idem) nem enquadramento mais gravoso.

### 2. Interrupção/perturbação de serviço telemático (art. 266, §1º)

- **Teses típicas:** atipicidade quando a "interrupção" é **momentânea, insignificante ou não atinge serviço de utilidade pública/coletiva**; ausência de dolo (falha técnica, sobrecarga não intencional); distinção entre *ataque de negação de serviço* (DoS/DDoS) doloso e mera instabilidade.
- **Objeto jurídico:** o **funcionamento regular** do serviço telemático coletivo — não o serviço privado de um único usuário. Sustentar que serviço individual/privado não preenche o tipo, quando cabível.
- **Distinção do dano (art. 163):** se a conduta destrói *coisa* (hardware/dado como coisa) sem interromper serviço coletivo, discutir o enquadramento correto.

### 3. Perseguição/stalking cibernético (art. 147-A)

- **Elementar da REITERAÇÃO:** o tipo exige perseguição **reiterada** — ato único, isolado, **não configura** o crime (pode, quando muito, tipificar ameaça — art. 147 — ou injúria). Atacar a ausência de habitualidade/reiteração é tese central.
- **Ameaça efetiva a bem jurídico:** exigir que a conduta **ameace a integridade física/psicológica**, restrinja locomoção ou invada a privacidade — mera reprovação social, discussão ou crítica pública não bastam.
- **Distinção de tipos vizinhos:** separar do art. 147 (ameaça), da injúria/difamação (arts. 139-140), e da divulgação de cena de sexo/intimidade (art. 218-C) — cada qual com procedibilidade e pena próprias, evitando cumulação indevida.
- **Procedibilidade:** em regra **condicionada a representação** — verificar sua existência e tempestividade (ver adiante). Atenção às hipóteses de aumento (violência doméstica/razões da condição de sexo feminino) que alteram o regime.

---

## Condição de procedibilidade — a porta de entrada da defesa (art. 154-B)

A **representação** é frequentemente o ponto mais eficiente de ataque, porque pode **extinguir o processo sem discutir o mérito**.

- **Regra (art. 154-A):** ação penal pública **condicionada a representação** da vítima.
- **Exceção:** **incondicionada** se o crime é cometido contra a **Administração Pública** (art. 154-B) ou, no §5º, contra autoridades ali listadas.
- **Decadência (art. 103 do CP):** o direito de representação decai em **6 meses** contados do dia em que a vítima veio a saber quem é o autor. Representação **intempestiva** → **extinção da punibilidade** (art. 107, IV, do CP).
- **Ausência/irregularidade da representação** → falta de condição de procedibilidade → **rejeição da denúncia** (art. 395, II, do CPP) ou trancamento por HC.
- **Retratação da representação** (art. 25 do CPP): possível **até o oferecimento da denúncia**.

> Para a **contagem exata do prazo decadencial e da tempestividade**, descreva o método (termo inicial = ciência da autoria; prazo de 6 meses, contado na forma do art. 10 do CP, incluído o dia do começo) e **aponte para a `calculadora-tempestividade`** para o cálculo determinístico — não faça a conta "de cabeça" na peça.

---

## Competência — onde processar

- **Regra geral:** competência do **local da consumação** (art. 70 do CPP). Nos crimes informáticos, discute-se o lugar do **acesso** (onde o agente atuou) vs. o lugar do **dispositivo/servidor** vs. o **domicílio da vítima**.
- **Justiça Federal (CF, art. 109):** cogitável quando há **transnacionalidade** (dado/servidor no exterior com previsão em tratado), lesão a **bens/serviços da União** ou a interesse federal específico. **Não** basta o crime ocorrer "pela internet" para federalizar — exigir o vínculo constitucional concreto.
- **Teses de incompetência** podem levar à anulação de atos decisórios (art. 567 do CPP) — matéria de **exceção** (art. 108 do CPP) ou preliminar de resposta.

> Confirme o critério de competência aplicável ao caso concreto e o **entendimento atual dos tribunais** (conflitos de competência STJ) via `jurisprudencia-stj-stf` antes de sustentar Federal × Estadual.

---

## Prova digital — interface com as skills próprias

A defesa nos crimes cibernéticos vive da **qualidade da prova digital**. Aqui a orientação é de **interface**: a impugnação técnica da prova (cadeia de custódia, integridade, extração, quebra de sigilo) é tratada nas skills `impugnacao-prova-digital` / `cadeia-de-custodia` / `ocr-autos-pdf`. Pontos de atenção que dialogam com a tipicidade:

- **Prova da violação do mecanismo de segurança:** exigir demonstração técnica de *como* a barreira foi burlada — a mera alegação da vítima não prova o elemento normativo.
- **Autoria e IP:** endereço IP identifica um ponto de conexão, **não uma pessoa**; atacar a presunção de autoria por IP dinâmico, rede compartilhada, NAT, VPN.
- **Ordem judicial (Marco Civil, arts. 22-23):** registros de conexão obtidos sem decisão fundamentada → **prova ilícita** (CF, art. 5º, LVI), com efeito de contaminação (art. 157 do CPP).
- **Integridade e hash:** ausência de espelhamento/hash e de cadeia de custódia (art. 158-A e ss. do CPP) fragiliza a prova pericial.

---

## Teses e contra-teses (mapa rápido)

| Tese defensiva | Fundamento | Contra-tese (acusação) |
|---|---|---|
| Atipicidade — sem mecanismo de segurança violado | CP, art. 154-A (elemento normativo) | Havia proteção (senha/biometria) efetivamente burlada; prova pericial da superação |
| Autorização expressa/tácita | ausência de elementar "sem autorização" | Autorização revogada/limitada; acesso excedeu o consentido |
| Ausência de dolo específico | CP, art. 154-A (fim de obter/adulterar/destruir) | Instalação de vulnerabilidade / cópia de dados demonstra a finalidade |
| Falta/decadência da representação | CP, arts. 154-B e 103; CPP, art. 395, II | Vítima é Administração Pública → incondicionada (art. 154-B) |
| Stalking — ato único, sem reiteração | CP, art. 147-A (elementar "reiteradamente") | Prova de conduta habitual/plúrima ao longo do tempo |
| Interrupção momentânea/privada, atípica | CP, art. 266, §1º (serviço coletivo) | Serviço telemático de utilidade pública efetivamente perturbado |
| Incompetência do juízo | CPP, arts. 70 e 108; CF, art. 109 | Consumação/prevenção no foro; vínculo federal concreto |
| Prova ilícita (IP/registros sem ordem) | CF, art. 5º, LVI; CPP, art. 157; MCI arts. 22-23 | Ordem judicial regular; prova derivada por fonte independente |
| Desclassificação de qualificadora (§3º/§4º) p/ caput | ausência de conteúdo sigiloso/divulgação | Obtenção de comunicações privadas/segredos; divulgação a terceiro |
| *Bis in idem* / enquadramento como fraude patrimonial | bem jurídico ≠ patrimônio | Concurso de crimes; condutas autônomas |

---

## Sumular/precedentes sob o Citation Gate

- **Dispositivos de lei e da Constituição citados acima** (CP arts. 154-A, 154-B, 266 §1º, 147-A, 103, 107 IV, 157, 158-A; CPP arts. 70, 108, 395 II, 567; CF art. 5º X/XII/LVI, art. 109; Marco Civil arts. 22-23) podem ser afirmados com certeza — **sempre conferindo a redação vigente** (Leis 12.737/2012, 14.155/2021, 14.132/2021).
- **Qualquer precedente específico** (número de HC, REsp, RE, RHC, conflito de competência, informativo ou tema repetitivo) sobre invasão de dispositivo, competência de crime informático, alcance do art. 147-A ou (i)licitude de prova por IP **NÃO deve ser citado de memória**. Marque **[NÃO VERIFICADO]** e confira via `jurisprudencia-stj-stf` antes de usar.
- **Regra de ouro:** prefira **ensinar a tese e apontar o dispositivo** a arriscar um número de acórdão. Há sanção real por jurisprudência inventada por IA — **omitir vence inventar**.

---

## Erros comuns e checklist

**Anti-padrões (evitar):**
- Aceitar a tipicidade do art. 154-A **sem checar** se houve mecanismo de segurança **efetivamente violado** (o erro nº 1).
- Confundir **acesso não autorizado a patrimônio** (fraude — arts. 155 §4º-B / 171 §2º-A) com **invasão de dispositivo** (154-A), aceitando enquadramento mais gravoso ou dupla imputação.
- Ignorar a **condição de procedibilidade** (representação, art. 154-B) e a **decadência** (art. 103) — muitas vezes a via mais curta para a extinção.
- Tratar **ato único** como stalking (art. 147-A exige **reiteração**).
- Presumir autoria a partir do **IP** sem discutir rede compartilhada/dinâmica/VPN.
- Aceitar prova de registros de conexão obtida **sem ordem judicial** (Marco Civil, arts. 22-23).
- Não pleitear a **desclassificação** das qualificadoras (§3º/§4º) para o caput quando ausente o conteúdo sigiloso ou a divulgação.
- Citar **número de julgado** sem passar pelo gate `verificacao-citacoes`.

**Checklist da defesa:**
- [ ] Houve **mecanismo de segurança** e ele foi **indevidamente violado**? (Se não → atipicidade.)
- [ ] Existe **autorização** expressa ou tácita do titular? (Cônjuge/familiar/senha entregue?)
- [ ] Está presente o **dolo específico** (obter/adulterar/destruir/instalar vulnerabilidade)?
- [ ] A conduta é **patrimonial**? Se sim, o enquadramento correto é fraude (skill própria), não 154-A.
- [ ] **Representação** existe, é regular e **tempestiva** (6 meses — art. 103; calculadora-tempestividade)? Vítima é Administração Pública (incondicionada)?
- [ ] **Competência** correta (local da consumação; Federal só com vínculo concreto — art. 109)?
- [ ] Em stalking: há **reiteração** e ameaça efetiva a bem jurídico protegido?
- [ ] Em art. 266, §1º: o serviço é **coletivo/de utilidade pública** e a perturbação foi relevante?
- [ ] **Prova digital** hígida? (cadeia de custódia, hash, ordem judicial — skills próprias.)
- [ ] Qualificadoras/majorantes (§§2º-5º) **provadas**, ou cabe **desclassificação** para o caput?
- [ ] Todas as **citações verificadas** (`verificacao-citacoes`) e **revisão humana** do advogado responsável?

---

## Nota sobre polo — atenção do roteador

**Esta matéria comporta atuação nos DOIS polos, mas o foco desta skill é a DEFESA.** A spec assinala `polo_acusacao: true`: quando o operador for **Ministério Público** ou **assistente de acusação**, o roteador deve **confirmar o polo** e, então, inverter a lógica — sustentar a **presença** do mecanismo de segurança violado, do dolo específico e das qualificadoras; demonstrar a **regularidade e tempestividade** da representação (ou a incondicionalidade quando vítima é a Administração Pública); e fundamentar a **competência**. O material aqui é escrito para o **defensor**; o acusador o usa como *espelho* (antecipar teses defensivas). **Confirme o polo em `company.md` antes de redigir** — a ética e a estratégia mudam conforme MP/assistente (CNMP) × advocacia (OAB, Prov. 205/2021) × Defensoria (LC 80/94).

---

## Nota de conformidade

- **Rascunho sob revisão humana obrigatória.** Este material é apoio à preparação; a peça final e a estratégia são de responsabilidade do **advogado/operador** (CED/EAOAB; CNMP; LC 80/94, conforme o polo).
- **Citation Gate inegociável:** nenhuma súmula, tese, tema ou acórdão citado de memória — tudo passa por `verificacao-citacoes` / `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Cautela de vigência:** confirme sempre as redações vigentes dos arts. 154-A, 154-B, 266 §1º e 147-A do CP (Leis 12.737/2012, 14.155/2021, 14.132/2021) e do Marco Civil antes de peticionar.
- **Sigilo e LGPD:** dados do assistido e do caso não vão a repositório público (`acervo/casos/` é gitignored).

**Padrão de redação:** ao redigir a peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
