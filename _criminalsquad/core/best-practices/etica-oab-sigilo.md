---
name: "Ética OAB, Sigilo e LGPD"
description: "Conformidade profissional transversal — sigilo, LGPD em dados de clientes, limites de publicidade advocatícia (Provimento 205/2021), conflito de interesses"
whenToUse: |
  Qualquer agente que lide com dados de cliente, comunicação, peças, publicidade advocatícia ou conduta profissional. Best-practice TRANSVERSAL — todos os squads devem referenciá-la.
version: "1.0.0"
---

# Ética OAB, Sigilo e LGPD — Best Practices

> **Best-practice TRANSVERSAL.** Toda squad do CriminalSquad — independentemente da disciplina (copywriting, social, peças, atendimento, dados) — deve referenciar este documento. A advocacia é atividade regulada: o descumprimento das normas abaixo expõe o profissional a sanções disciplinares (censura, suspensão, exclusão dos quadros) e a responsabilização cível e administrativa. Conformidade não é opcional.

## Como Aplicar (Fluxo Operacional)

Este documento é uma camada de conformidade que se sobrepõe a qualquer outra best-practice. Ordem de prioridade quando houver conflito de orientações:

1. **Sigilo e LGPD primeiro.** Se uma instrução de marketing ou de produtividade exigir expor dado de cliente, a ética prevalece e a instrução é recusada.
2. **Sobriedade sobre persuasão.** Quando uma best-practice de copywriting sugerir gatilhos agressivos, urgência ou superlativos, este documento limita a aplicação ao que é informativo e sóbrio.
3. **Checagem antes da entrega.** Toda squad executa o checklist de *Quality Criteria* (abaixo) antes de finalizar qualquer artefato que toque cliente, marketing jurídico ou conduta profissional.
4. **Bloqueio e escalonamento.** Identificado um *Anti-Pattern*, a squad interrompe a entrega e escala ao advogado responsável — não publica "com ressalva".

## Princípios Fundamentais

1. **Sigilo profissional é dever inviolável, não cortesia.** O sigilo é direito e dever do advogado (Lei 8.906/94 — Estatuto da Advocacia e da OAB, art. 7º, II e XIX, e art. 34, VII; Código de Ética e Disciplina da OAB — CED, arts. 35 a 38). Abrange tudo que o advogado souber em razão da profissão, mesmo sobre fatos não cobertos pelo segredo de justiça, e persiste mesmo após o fim do mandato e mesmo perante o próprio cliente quando este o dispensa de forma que prejudique terceiro. Note-se que o sigilo é a regra, e sua dispensa pela presunção é a exceção (CED, art. 37 — só cede em causa própria, grave ameaça ao direito à vida ou à honra do advogado, ou defesa contra o próprio cliente). Qualquer conteúdo gerado por agente que toque informação de cliente presume o sigilo até prova documental em contrário.

2. **LGPD se aplica integralmente a dados de clientes e processos.** A Lei 13.709/2018 (LGPD) rege o tratamento de dados pessoais pelo escritório, que atua como controlador. Dados de processos contêm, em regra, dados pessoais e frequentemente **dados sensíveis** (art. 5º, II — saúde, vida sexual, dado biométrico, convicções, e a própria existência de processo criminal/penal, que revela situação de vulnerabilidade). Todo tratamento exige base legal (art. 7º e art. 11) e observância dos princípios da finalidade, adequação, necessidade e segurança (art. 6º). O sigilo profissional e a LGPD se reforçam: o dever ético de segredo é, ao mesmo tempo, dever legal de proteção do dado pessoal.

3. **Publicidade informativa é permitida; captação e mercantilização são vedadas.** O marketing jurídico é regido pelo **Provimento 205/2021 do Conselho Federal da OAB** (CFOAB), que substituiu o antigo Provimento 94/2000 e regulamenta a publicidade na advocacia, inclusive em meios digitais e redes sociais. A regra-mãe: a publicidade deve ter caráter **meramente informativo** e primar pela **discrição e sobriedade** (CED, art. 39 e art. 40). O Provimento distingue *publicidade* (informação ativa, permitida nos limites informativos) de *captação* (angariar clientela, vedada). É vedada a mercantilização da profissão (EAOAB, art. 34, IV). A advocacia é múnus público, não atividade comercial.

4. **Conflito de interesses impede a atuação.** O advogado não pode patrocinar, na mesma causa, partes contrárias, nem atuar contra ex-cliente em matéria correlata àquela em que o assistiu (EAOAB, art. 17 — responsabilidade e impedimentos; CED, arts. 19 a 21). O conflito alcança também o escritório como um todo, não apenas o profissional individual, e estende-se a sócios e associados. A triagem de conflito é etapa obrigatória antes de aceitar qualquer caso e antes de produzir conteúdo que mencione partes.

5. **Dever de informação ao cliente é contínuo.** O advogado deve informar o cliente de forma clara e inequívoca sobre o andamento, os riscos e as consequências do caso, abstendo-se de criar expectativas infundadas (CED, art. 9º e art. 11). O dever inclui esclarecer sobre estratégias, custos e probabilidades de forma realista. Conteúdo dirigido a clientes deve ser preciso, não pode induzir a erro nem omitir riscos relevantes.

6. **É vedado garantir resultado.** Nenhuma comunicação — peça, proposta, post, anúncio ou mensagem — pode prometer, garantir ou sugerir êxito, valores de indenização ou prazos certos de vitória. A vedação decorre do dever de sobriedade e da proibição de captação (CED, art. 40; Provimento 205/2021). Resultado em processo depende de fatores incontroláveis pelo advogado (prova, convencimento do julgador, recursos da parte adversa); assegurá-lo é infração ética e, conforme o caso, propaganda enganosa (CDC, art. 37).

7. **Independência e dignidade profissional acima do engajamento.** O advogado deve preservar a independência e a dignidade da profissão em todas as suas manifestações (EAOAB, art. 31; CED, arts. 2º e 4º). Métricas de marketing — alcance, curtidas, conversão — jamais justificam o sacrifício de sigilo, sobriedade ou veracidade. Conteúdo que ganha audiência às custas da ética é dano reputacional e disciplinar, não sucesso.

## Sigilo e LGPD

Regras práticas que todo agente e toda squad devem aplicar ao manusear informação de cliente:

- **Nunca exponha dados de cliente em repositório público.** Nomes, números de processo, documentos (CPF, RG, OAB de partes), endereços, fatos do caso e qualquer peça nunca devem ser commitados em repositório público, colados em prompts de serviços de terceiros sem base contratual, nem incluídos em logs ou exemplos.
- **`acervo/casos/` (e diretórios de clientes) devem estar no `.gitignore`.** Qualquer pasta que contenha material de caso real — peças, contratos, documentos, anotações — precisa ser ignorada pelo versionamento. Verifique o `.gitignore` antes de o primeiro commit tocar essas pastas. Se um agente criar diretório de caso, deve garantir a entrada correspondente no `.gitignore`.
- **Minimização de dados (LGPD, art. 6º, III).** Trate apenas o dado estritamente necessário à finalidade. Ao gerar conteúdo, prefira casos anonimizados, hipotéticos ou agregados. Não carregue o processo inteiro quando bastam os fatos juridicamente relevantes e despersonalizados.
- **Identifique a base legal antes de tratar (LGPD, arts. 7º e 11).** Para o cliente, a base usual é a **execução de contrato** (art. 7º, V) e o **exercício regular de direitos em processo** (art. 7º, VI; art. 11, II, "d"). Para finalidades de marketing que usem dados de terceiros (ex.: prospecção), a base de **legítimo interesse** é restrita e não autoriza captação — na dúvida, não trate.
- **Cuidado redobrado com dados sensíveis (LGPD, art. 11).** A simples existência de um processo criminal é informação sensível e estigmatizante. Jamais use o caso, o crime ou a condição do cliente como gancho de conteúdo sem autorização específica e finalidade legítima.
- **Nomes reais em conteúdo de redes exigem consentimento expresso.** Não cite cliente, vítima, parte adversa, testemunha ou terceiro identificável em posts, depoimentos, "cases de sucesso" ou storytelling sem **autorização escrita e específica** do titular — e ainda assim respeitando o sigilo e o Provimento 205/2021. Anonimize por padrão.
- **Segurança e descarte (LGPD, art. 6º, VII e art. 16).** Material de caso deve trafegar e ser armazenado com controle de acesso. Rascunhos, exports e arquivos temporários gerados pela squad devem ser eliminados quando cumprida a finalidade, salvo dever legal de guarda.
- **Atenção ao tratamento por ferramentas de IA e terceiros (LGPD, arts. 39 e 11, §4º).** Inserir dados de cliente em serviços de IA, nuvem ou automação de terceiros é uma operação de tratamento e/ou compartilhamento. Só é admissível com base legal, contrato com cláusulas de proteção de dados (operador) e preservação do sigilo. Na ausência de garantia contratual, **anonimize antes** de enviar a qualquer serviço externo.
- **Direitos do titular (LGPD, art. 18).** O cliente e terceiros têm direito de acesso, correção, eliminação e informação sobre o uso de seus dados. A squad não pode produzir conteúdo que inviabilize o atendimento desses direitos nem reter dados além do necessário.

### Anonimização na Prática

Quando um caso real inspirar conteúdo (artigo, post educativo, exemplo), aplique anonimização robusta antes de qualquer uso externo:

- **Remova identificadores diretos** — nome completo, apelido conhecido, CPF, RG, número da OAB de partes, número do processo, comarca específica e datas exatas.
- **Remova identificadores indiretos** — combinações que permitam reidentificar (profissão rara + cidade pequena + idade, por exemplo). Anonimização falha quando o conjunto ainda aponta para a pessoa.
- **Prefira o hipotético ao mascarado.** Em vez de "trocar o nome", reescreva o caso como cenário genérico ("imagine um réu acusado de..."). Reduz risco e dispensa autorização.
- **Não use casos notórios como atalho.** Fatos midiáticos identificam a pessoa por definição; comentá-los para autopromoção viola sobriedade e pode expor terceiros.

## Publicidade Advocatícia (Provimento 205/2021 — CFOAB)

O Provimento 205/2021 regulamenta a publicidade e a informação da advocacia, com atenção especial ao ambiente digital. A bússola é sempre **informar com sobriedade**, nunca **vender**.

### Permitido (conteúdo informativo, educativo e sóbrio)
- **Conteúdo educativo sobre direito** — teses, mudanças legislativas, jurisprudência e orientações gerais (marketing de conteúdo). É o terreno mais seguro: informa sem vender.
- **Identificação profissional** — nome do advogado/escritório, áreas de atuação, títulos acadêmicos e qualificações verificáveis, telefone, e-mail, site e endereço.
- **Postagens informativas em redes sociais** (Instagram, LinkedIn, YouTube, X, blog) com tom moderado, voltadas a esclarecer o público sobre seus direitos.
- **Produção intelectual e presença pública** — artigos, entrevistas, palestras e participação em eventos, desde que sem autopromoção sensacionalista.
- **Indicação de áreas de especialização**, observadas as regras da OAB sobre uso de títulos e a vedação de se anunciar especialista sem o respaldo correspondente.

### Vedado
- **Mercantilização e captação de clientela** (EAOAB, art. 34, IV): tratar a advocacia como comércio, "ofertar serviços" como produto, abordar potenciais clientes para angariar causa.
- **Promessa ou garantia de resultado/êxito** e menção a probabilidades de vitória.
- **Menção a valores, honorários, descontos, promoções, "consulta grátis", parcelamento** ou qualquer apelo de preço — o Provimento veda divulgação de valores e ofertas como chamariz.
- **Sensacionalismo, mercantilização e apelo emocional desproporcional**, inclusive uso de casos reais ou notórios para autopromoção.
- **Termos superlativos e comparativos**: "o melhor", "número 1", "líder", "o mais experiente", "especialista incontestável" e similares que não sejam aferíveis e que induzam o público.
- **Divulgação de "cases" identificáveis** ou exposição de clientes/processos sem autorização e em violação ao sigilo.
- **Impulsionamento/anúncio pago** com conteúdo que extrapole o caráter informativo (o Provimento restringe a publicidade ativa e o marketing de captação, mesmo patrocinado).
- **Uso de imagem de terceiros, vítimas ou de fatos midiáticos** para atrair seguidores ou clientes.

### Regras para redes sociais
- **Posicionamento informativo, não vitrine de vendas.** Trate o perfil como canal educativo. CTA aceitável: "saiba mais", "entenda seus direitos", "tire suas dúvidas". CTA vedado: "contrate agora", "garanta sua indenização", "fale com o melhor".
- **Sem gatilhos comerciais de urgência/escassez.** Nada de "últimas vagas", "promoção por tempo limitado", "só hoje". Esses recursos pertencem ao comércio, não à advocacia.
- **Sem prova social baseada em resultado de cliente.** Não exiba "ganhos", indenizações obtidas, depoimentos de clientes identificáveis ou "antes e depois" de processos.
- **Linguagem sóbria e tecnicamente correta.** Evite jargão de marketing agressivo importado de nichos não regulados (infoprodutos, e-commerce). O tom deve refletir a seriedade do múnus.
- **Sigilo e LGPD em todo post.** Sem nomes, números de processo, prints de autos ou conversas de clientes — mesmo que o cliente "não se importe". O dever é do advogado, não do titular.
- **Impulsionamento com cautela.** Anúncio pago só para conteúdo informativo; jamais para captação. Conteúdo patrocinado herda todas as vedações acima e ainda atrai escrutínio adicional.

### Honorários, Preço e Contratação

- **Honorários não são argumento de marketing.** É vedado divulgar valores, tabelas, descontos, "consulta gratuita", parcelamento ou qualquer apelo de preço para atrair cliente (Provimento 205/2021; CED, art. 40).
- **Negociação de honorários é privada.** Trate valores apenas na relação direta com o cliente, em contrato, nunca em conteúdo público ou material promocional.
- **Sem "oferta" da advocacia.** A profissão não se "vende" em campanha. Pacotes, combos e chamadas comerciais ("seu processo a partir de R\$ X") são captação vedada.
- **Concorrência por mérito, não por preço.** O diferencial divulgável é a informação de qualidade e a reputação técnica — jamais o menor preço ou a promessa de mais.

## Conflito de Interesses e Triagem

Antes de aceitar caso ou de gerar conteúdo que mencione partes, executar a checagem do **art. 17 do EAOAB** e dos arts. 19 a 21 do CED:

1. **Identificação das partes.** Levantar autor, réu, terceiros interessados e seus vínculos. Cruzar com a base de clientes atuais e ex-clientes do escritório.
2. **Verificação de patrocínio simultâneo.** É vedado atuar para partes contrárias na mesma causa ou em causas conexas. Se houver, **declinar** ou recusar a produção do conteúdo.
3. **Verificação de atuação contra ex-cliente.** É vedado atuar contra quem o escritório assistiu, em matéria que guarde relação com o que foi confiado sob sigilo. Na dúvida sobre correlação, presumir conflito.
4. **Impedimentos e incompatibilidades** (EAOAB, arts. 27 a 30): observar funções públicas e situações que vedam ou restringem o exercício; sinalizar quando o caso envolver agente em situação de impedimento.
5. **Quando declinar.** Diante de conflito real ou potencial não sanável, ou de impossibilidade de preservar o sigilo de informação anterior, a squad deve **interromper e escalar** ao responsável humano, recomendando recusa do caso ou do conteúdo. Não improvise solução; conflito de interesses não se contorna com disclaimer.

> **Nota sobre matéria criminal.** Em direito penal, o conflito é especialmente sensível: corréus podem ter teses defensivas incompatíveis (um imputa ao outro), o que veda a defesa conjunta pelo mesmo advogado. Antes de produzir peça ou conteúdo para mais de um acusado no mesmo fato, confirmar a compatibilidade das defesas; havendo colidência, cada réu exige defensor distinto. A exposição de vítima e a vedação de revitimização também impõem cautela redobrada em qualquer comunicação pública.

## Quality Criteria

Checklist obrigatório antes de qualquer entrega que toque cliente, marketing jurídico ou conduta profissional:

- [ ] **Nenhum dado sensível ou identificável de cliente exposto** — sem nomes, CPF/RG, número de processo, endereços, prints de autos ou conversas. Casos apresentados estão anonimizados ou são hipotéticos.
- [ ] **Conteúdo de marketing respeita o Provimento 205/2021** — caráter informativo/educativo, tom sóbrio e discreto, sem viés mercantil.
- [ ] **Sem promessa, garantia ou sugestão de resultado** — nenhuma menção a êxito, indenização provável, valores ou prazo certo de vitória.
- [ ] **Sem menção a valores, honorários, descontos, "grátis" ou promoções** como chamariz.
- [ ] **Sem termos superlativos vedados** — "melhor", "líder", "nº 1", "o mais experiente" e similares não aferíveis ausentes.
- [ ] **Conflito de interesses checado** — partes identificadas e cruzadas contra clientes/ex-clientes (EAOAB, art. 17); nenhum patrocínio contrário ou atuação contra ex-cliente.
- [ ] **Base legal de tratamento identificada** — há fundamento na LGPD (arts. 7º/11) para usar os dados envolvidos, com minimização aplicada.
- [ ] **Sigilo profissional preservado** — nada divulgado que tenha sido conhecido em razão da profissão; dever observado mesmo após o mandato (EAOAB, art. 34, VII; CED, arts. 35 a 38).
- [ ] **`.gitignore` cobre pastas de caso** — `acervo/casos/` e diretórios de clientes não vão para versionamento público.
- [ ] **Nomes de terceiros só com autorização escrita** — qualquer pessoa identificável citada tem consentimento específico documentado.
- [ ] **Linguagem sóbria e tecnicamente correta** — sem sensacionalismo, urgência comercial ou apelo emocional desproporcional.
- [ ] **Anonimização robusta verificada** — removidos identificadores diretos e indiretos; caso inspirado em fato real não permite reidentificação.
- [ ] **Dados não enviados a IA/terceiro sem salvaguarda** — nenhum dado de cliente foi inserido em serviço externo sem contrato de proteção de dados ou anonimização prévia.

## Anti-Patterns

Padrões proibidos. A ocorrência de qualquer um deles é motivo para **bloquear a entrega** e escalar ao responsável humano:

- **Expor dados de cliente** — publicar, commitar em repositório público ou colar em ferramenta de terceiro nomes, números de processo, documentos ou peças. Viola sigilo (EAOAB/CED) e LGPD.
- **Captação mercantil de clientela** — "ofertas de serviço", abordagem ativa de potenciais clientes, conteúdo que vende a advocacia como produto. Viola EAOAB, art. 34, IV, e o Provimento 205/2021.
- **Promessa de êxito** — "garanto sua absolvição", "você vai receber sua indenização", "ganhamos 99% dos casos". Viola o dever de sobriedade e configura propaganda enganosa.
- **Sensacionalismo com casos reais** — transformar o crime, a tragédia ou o processo de uma pessoa em gancho de engajamento. Viola sigilo, sobriedade e a dignidade do titular.
- **Usar nome de cliente sem autorização** — "case de sucesso" com cliente identificável, depoimento exposto, print de mensagem. Sem consentimento escrito e específico, é violação de sigilo e LGPD.
- **"Advogado nº 1" / superlativos** — "o melhor criminalista", "escritório líder", "o mais experiente da cidade". Termos não aferíveis e mercantis vedados pelo Provimento 205/2021.
- **Anunciar preço ou desconto** — "primeira consulta grátis", "honorários a partir de R$ X", "parcelamos em 12x". Menção a valores como chamariz é vedada.
- **Atuar em conflito de interesses** — produzir peça ou conteúdo contra ex-cliente em matéria correlata, ou para partes contrárias. Viola EAOAB, art. 17, e CED, arts. 19 a 21.
- **Enviar dados de cliente a IA/terceiro sem salvaguarda** — colar peça, processo ou dado pessoal em serviço externo sem contrato de proteção de dados nem anonimização prévia. Viola sigilo e LGPD (arts. 39 e 11).

## Referência Cruzada

Por ser transversal, este documento se sobrepõe a outras best-practices do catálogo. Ao combinar com:

- **copywriting** — a persuasão é limitada à sobriedade: sem superlativos, promessas de êxito ou gatilhos comerciais.
- **social-networks-publishing** / **instagram-***, **linkedin-***, **twitter-*** — todo post passa pelo crivo de sigilo, LGPD e Provimento 205/2021 antes de publicar.
- **strategist** — a estratégia editorial prioriza conteúdo informativo/educativo, nunca captação de clientela.
- **review** — o agente de revisão deve incluir os *Quality Criteria* deste documento como critérios de aprovação obrigatórios.
- **researching** / **data-analysis** — pesquisa e análise sobre casos reais exigem anonimização e base legal de tratamento.

---

> **Em caso de dúvida, escale.** Diante de incerteza sobre sigilo, base legal de LGPD, limite de publicidade ou possível conflito de interesses, a squad deve **parar e consultar o advogado responsável** antes de produzir ou publicar. A presunção é sempre pró-sigilo e pró-conformidade.
>
> **Base normativa:** Lei 8.906/94 (Estatuto da Advocacia e da OAB — esp. arts. 7º, 17, 27-30, 34); Código de Ética e Disciplina da OAB (Resolução 02/2015 — esp. arts. 9º, 11, 19-21, 35-40); Provimento 205/2021 do CFOAB (publicidade e marketing jurídico); Lei 13.709/2018 (LGPD — esp. arts. 5º, 6º, 7º, 11 e 16). Este documento é orientação de conformidade e não substitui parecer jurídico específico.
