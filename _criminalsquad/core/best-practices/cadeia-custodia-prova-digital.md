---
id: cadeia-custodia-prova-digital
name: "Cadeia de Custódia da Prova Digital"
whenToUse: |
  Agentes que auditam, produzem ou impugnam prova digital no processo penal — prints de WhatsApp, extração/espelhamento de celular, quebra de sigilo telemático, mídias e logs. Aplica os arts. 158-A a 158-F do CPP (Pacote Anticrime) e a jurisprudência do STJ sobre integridade e quebra da cadeia de custódia.
version: "1.0.0"
---

# Cadeia de Custódia da Prova Digital — Best Practices

> **Guarda-corpo de PROVA.** Toda squad do CriminalSquad que tocar prova digital — auditá-la, citá-la em peça ou impugná-la — deve referenciar este documento. A prova digital é volátil, copiável e adulterável sem deixar rastro aparente; sua admissibilidade depende de uma corrente documental ininterrupta do reconhecimento ao descarte (CPP, arts. 158-A a 158-F, incluídos pela Lei 13.964/2019). Quebra documentada da cadeia é fundamento de impugnação — mas **não** equivale, por si só, a declaração de ilicitude (o efeito é decidido caso a caso pelo juízo). Esta best-practice se combina com `etica-oab-sigilo` (sigilo/LGPD do conteúdo) e `verificacao-citacoes` (toda jurisprudência aqui invocada passa pelo gate antes de ir para peça).

## Como Aplicar (Fluxo Operacional)

1. **Documentação primeiro, conclusão depois.** O agente verifica se os elementos da cadeia **existem nos autos** (laudo, hash, lacre, autorização, relatório de extração). Ele **não** valida hash tecnicamente nem refaz perícia — apenas constata presença, ausência ou contradição documental.
2. **Indício, não veredito.** Constatada falha, o agente sinaliza **INDÍCIOS de quebra a arguir**, com o dispositivo e o precedente que sustentam a tese. Nunca declara "prova ilícita" — a ilicitude/nulidade é decisão judicial, e o STJ a examina caso a caso.
3. **Verificação antes da entrega.** Lei, súmula e jurisprudência citadas rodam o protocolo de `verificacao-citacoes` antes de qualquer peça. Precedente "de memória" não entra.
4. **Sigilo sobre o conteúdo (LGPD).** O conteúdo da prova digital (mensagens, fotos, contatos) é dado pessoal, em regra sensível. Manuseio segue `etica-oab-sigilo`: minimização, anonimização e nada de colar autos em serviço externo sem salvaguarda.
5. **Bloqueio e escalonamento.** Diante de dúvida sobre a existência de documentação ou sobre o alcance de um precedente, a squad **interrompe e escala** ao advogado responsável — não conclui pela ilicitude por conta própria.

## Princípios Fundamentais

### As 10 etapas da cadeia de custódia (CPP, art. 158-B)

A cadeia de custódia é o conjunto de procedimentos para manter e documentar a história cronológica do vestígio, rastreando sua posse e manuseio do reconhecimento ao descarte (CPP, art. 158-A). O art. 158-B fixa **dez etapas**, todas aplicáveis à prova digital (o vestígio digital é o dado/dispositivo):

1. **Reconhecimento** — distinguir o elemento como de potencial interesse probatório (ex.: identificar o celular, a conta, a mídia relevante).
2. **Isolamento** — evitar alteração do estado das coisas (ex.: modo avião / bloqueio de rede para impedir wipe remoto, sincronização ou recebimento de mensagens).
3. **Fixação** — descrição detalhada do vestígio como encontrado (modelo, IMEI, estado da tela, lacre), ilustrável por fotos/filmagem; indispensável no laudo.
4. **Coleta** — recolher o vestígio respeitando suas características (apreensão do aparelho/mídia; extração forense dos dados).
5. **Acondicionamento** — embalar cada vestígio de forma individualizada e identificada (saco/lacre numerado; mídia de cópia identificada).
6. **Transporte** — levar o vestígio com registro de quem, quando e como, preservando a integridade.
7. **Recebimento** — termo formal de entrega/recebimento entre custodiantes, com data, hora e responsável (registro de cada passagem de mão).
8. **Processamento** — exame pericial sobre o vestígio (extração, decodificação, análise), por metodologia auditável e reprodutível.
9. **Armazenamento** — guarda do vestígio e das cópias em ambiente com controle de acesso, preservando a integridade até a destinação final.
10. **Descarte** — destinação final, por determinação e mediante registro, após cumprida a finalidade.

> O fio condutor das dez etapas é o **registro ininterrupto da posse**: cada pessoa que manuseou o vestígio e cada movimentação devem estar documentadas. Lacuna entre etapas (gap de custódia) é o que se argui.

O art. 158-A divide a cadeia em duas grandes fases — a **externa**, que vai da preservação do local/vestígio até a entrega à perícia (etapas 1 a 7), e a **interna**, que abrange o trâmite do vestígio dentro do órgão pericial até o descarte (etapas 8 a 10). Na prova digital, a fase externa concentra os riscos de alteração do dispositivo (sincronização, wipe remoto, manuseio sem registro) e a fase interna concentra os riscos de cópia, decodificação e guarda. O art. 158-C exige que a coleta seja feita preferencialmente por perito oficial e que o vestígio seja encaminhado à central de custódia; os arts. 158-D, 158-E e 158-F tratam, respectivamente, do acondicionamento e lacre, da central de custódia e do laudo. Auditar a prova digital é, portanto, percorrer esse trajeto e perguntar, a cada passo, **quem teve a posse, quando, e onde isso está registrado**.

### Tipos de prova digital e exigências próprias

Cada modalidade tem um regime distinto — não se aplica a mesma régua a um print enviado pela vítima e a uma extração estatal de aparelho apreendido:

- **Print de tela produzido por particular** (vítima/terceiro) — admissível quando **não há indício de adulteração** e o conteúdo é **confirmado sob contraditório** (autoria, contexto, possibilidade de impugnação). Não se exige do particular o rigor pericial estatal, mas o print isolado tem força probatória limitada e pode ser contraposto pela exibição do dispositivo de origem.
- **Extração forense de aparelho apreendido** — exige toda a cadeia do art. 158-B, com hash, laudo (art. 158-F) e, em regra, autorização judicial para o acesso ao conteúdo. É o terreno onde o STJ mais reconhece quebra por ausência de documentação técnica.
- **Espelhamento (WhatsApp Web/QR Code)** — acesso bidirecional e manipulável; tratado como **ilícito** pelo STJ (RHC 99.735/SC), com tema afetado à 3ª Seção para definição em repetitivo.
- **Quebra de sigilo telemático junto a provedor** — dados obtidos diretamente da plataforma mediante ordem judicial (Marco Civil, Lei 12.965/2014); a cadeia recai sobre a preservação e a transmissão dos registros pelo provedor à autoridade.
- **Mídias e logs** (áudios, fotos, metadados, registros de conexão) — vestígios digitais sujeitos às mesmas etapas; metadados são especialmente sensíveis à alteração por manuseio.

### Especificidades da prova digital

1. **Integridade comprovável (hash).** O dado digital deve ter sua integridade demonstrada por código de verificação (hash — ex.: SHA-256), gerado na extração e conferível depois. Hash divergente ou ausente impede afirmar que o dado não foi alterado.
2. **Autorização judicial prévia.** Acesso a dados telemáticos e a conteúdo de celular apreendido depende, em regra, de autorização judicial fundamentada (proteção do sigilo das comunicações e da intimidade, CF art. 5º, X e XII; Marco Civil da Internet, Lei 12.965/2014). Autorização para acessar **não** dispensa o rigor técnico da cadeia (STJ).
3. **Espelhamento ≠ extração.** *Extração forense* gera cópia estática, com hash, sem permitir alteração — admissível quando documentada. *Espelhamento* (ex.: WhatsApp Web via QR Code) dá acesso **bidirecional**, permitindo enviar e apagar mensagens sem rastro — o STJ trata essa prova como **ilícita** por inviabilizar a garantia de integridade (RHC 99.735/SC, 6ª Turma).
4. **Documentação técnica completa, não só o PDF.** O STJ tem exigido o relatório íntegro da extração e o acesso aos dados brutos para exame independente pela defesa, não apenas o relatório resumido em PDF — sob pena de cerceamento e de quebra epistêmica da cadeia.
5. **Atributos da prova digital idônea (STJ).** A jurisprudência sistematizou quatro atributos: **auditabilidade, repetibilidade, reprodutibilidade e justificabilidade**, com metodologia certificada compatível com a forense computacional (referência a normas técnicas como ABNT e ISO/IEC 27037/27041/27042).
6. **Ônus da integridade é do Estado.** Quando a acusação apresenta a prova digital, é do **Estado** o ônus de demonstrar a integridade e a confiabilidade da fonte; não se presume a veracidade da alegação estatal quando a cadeia é desrespeitada (AgRg no HC 828.054/RN, 5ª Turma). Para a defesa, a consequência prática é que basta **apontar a falha documental** (o gap, o hash ausente, a ordem judicial inexistente) para deslocar à acusação o encargo de comprovar a higidez — não cabe à defesa provar que a prova foi adulterada.

7. **Volatilidade e cópia.** O dado digital é volátil e copiável sem deixar marca aparente: ligar o aparelho, conectá-lo à rede ou abrir um arquivo pode alterar metadados (datas de acesso, leitura, sincronização). Por isso o isolamento (etapa 2) e a fixação do estado original (etapa 3) são críticos, e a extração deve operar sobre cópia, preservando o original. A ausência de registro de que o dispositivo foi isolado antes do exame é, por si, indício relevante de comprometimento.

### Quando arguir nulidade / ilicitude (quebra documentada)

Argui-se a partir de **quebra documentada** — falha demonstrável nos autos, não conjectura:

- **Gap de custódia** — ausência de registro de uma ou mais etapas do art. 158-B (ex.: não há termo de recebimento, não se sabe quem manuseou o aparelho entre a apreensão e a perícia).
- **Ausência de hash / integridade não demonstrada** — extração sem código de verificação, ou hash que não confere.
- **Espelhamento** — prova obtida por acesso bidirecional ao app (WhatsApp Web), por inviabilizar a integridade (RHC 99.735/SC).
- **Falta de autorização judicial** quando exigida para o acesso telemático/conteúdo do aparelho.
- **Negativa de acesso aos dados brutos** pela defesa, impedindo exame técnico independente.
- **Quebra de lacre** sem registro, ou lacre não documentado na apreensão.

> **Efeito não é automático.** O STJ firmou que a quebra da cadeia de custódia **não** gera nulidade ou inadmissibilidade automática: a consequência é aferida **caso a caso**, à luz dos demais elementos dos autos (HC 653.515/RJ e linha subsequente). Por isso o agente sinaliza *indícios a arguir* e o **peso/comprometimento** da prova, deixando a conclusão de ilicitude para a peça assinada e o juízo.

**A divergência de fundo (registrar como casuístico).** Convivem duas leituras sobre o efeito da quebra:

- **Corrente da valoração** — a quebra não exclui a prova, mas afeta seu **peso**: o juiz a admite e pondera sua confiabilidade reduzida no conjunto probatório. A nulidade só ocorreria com demonstração de prejuízo concreto (CPP, art. 563 — *pas de nullité sans grief*).
- **Corrente da inadmissibilidade** — a quebra que torna a fonte **epistemicamente inconfiável** contamina a prova, que deve ser desentranhada por inservível para reconstruir o fato. Aproxima-se do regime da prova ilícita (CF, art. 5º, LVI; CPP, art. 157).

Ao formular a tese, o agente apresenta o indício e **ambas as molduras**, indicando qual sustenta a impugnação, sem afirmar que uma é "a correta" — a escolha e o risco são do advogado.

**Fatores que pesam no exame caso a caso.** Ao decidir, os tribunais costumam ponderar: (a) a **gravidade** da falha (ausência total de hash e de termos pesa mais que irregularidade formal sanável); (b) se a falha **compromete a confiabilidade** do dado ou é mero defeito burocrático; (c) a **existência de prova independente** apta a sustentar a imputação sem o elemento viciado; e (d) o **prejuízo concreto** à defesa. Sinalizar esses fatores ajuda a calibrar o comprometimento — mas a conclusão permanece com o juízo.

## Quality Criteria

Checklist antes de entregar qualquer auditoria ou tese sobre prova digital:

- [ ] **Etapas do art. 158-B mapeadas** — para cada etapa (reconhecimento → descarte), registrado se há documentação nos autos, está ausente ou é contraditória.
- [ ] **Hash verificado documentalmente** — constatada a presença/ausência de código de integridade; **não** se afirmou validade técnica do hash (fora do escopo do agente).
- [ ] **Autorização judicial conferida** — verificada a existência (ou ausência) de ordem judicial para o acesso telemático/conteúdo, quando exigível.
- [ ] **Espelhamento vs. extração distinguido** — identificado o método de obtenção; sinalizado o RHC 99.735/SC se houver espelhamento.
- [ ] **Acesso da defesa aos dados brutos** — verificado se a defesa teve acesso à extração íntegra, não só ao PDF.
- [ ] **Conclusão como INDÍCIO, não veredito** — texto sinaliza "indícios de quebra a arguir"; nenhuma afirmação categórica de "prova ilícita".
- [ ] **Efeito caso a caso registrado** — apontado que a quebra não gera nulidade automática (STJ), com o peso da prova.
- [ ] **Citações verificadas** — toda lei e jurisprudência passou pelo gate de `verificacao-citacoes` (classe/número, relator, órgão, data).
- [ ] **Sigilo/LGPD do conteúdo preservado** — conteúdo da prova tratado conforme `etica-oab-sigilo`; sem expor dados em repositório/serviço externo.
- [ ] **Revisão humana sinalizada** — entrega marcada como insumo; o advogado decide a tese e a estratégia.

## Anti-Patterns

Padrões proibidos. A ocorrência de qualquer um é motivo para **bloquear a entrega** e escalar ao advogado responsável:

- **Declarar "prova ilícita" / "prova nula"** — o agente conclui pela ilicitude no lugar do juízo. O correto é sinalizar **indícios de quebra**; o STJ decide o efeito caso a caso.
- **Validar hash tecnicamente** — afirmar que o código de integridade "está correto" ou "comprova a autenticidade". O agente só verifica se a documentação **existe**; validação técnica é perícia.
- **Tratar quebra como nulidade automática** — ignorar que o STJ exige análise caso a caso e o cotejo com os demais elementos (HC 653.515/RJ).
- **Confundir extração com espelhamento** — equiparar cópia forense estática (com hash) ao acesso bidirecional do WhatsApp Web (manipulável). São regimes distintos.
- **Presumir a integridade da prova estatal** — aceitar a prova digital sem cobrar do Estado a demonstração de integridade quando a cadeia é desrespeitada (inverte o ônus — AgRg no HC 828.054/RN).
- **Citar precedente "de memória"** — invocar HC/REsp/AREsp sobre cadeia de custódia sem conferir número, relator, órgão e data contra a fonte (viola `verificacao-citacoes`).
- **Expor o conteúdo da prova** — colar mensagens, fotos ou autos em prompt/serviço externo sem salvaguarda, ou em repositório público. Conteúdo é dado sensível (viola `etica-oab-sigilo`).
- **Generalizar prints de particular** — afirmar que todo print de WhatsApp é ilícito. O STJ admite prints produzidos por particular quando não há indício de adulteração e há confirmação sob contraditório.

## Fluxo de Auditoria (passo a passo)

Quando a squad recebe prova digital para auditar, o percurso é sempre o mesmo:

1. **Identificar o tipo de prova** — print de particular, extração forense de aparelho apreendido, espelhamento, quebra de sigilo telemático junto a provedor, mídia ou logs. Cada tipo tem um regime de exigências distinto.
2. **Localizar a documentação nos autos** — auto de apreensão, laudo pericial (art. 158-F), cópia da autorização judicial, termos de custódia/recebimento, registro de hash e de lacre. Anotar folha/evento de cada um.
3. **Percorrer as 10 etapas** do art. 158-B atribuindo status (documentado / ausente / contraditório) a cada uma, sem presumir o que não está escrito.
4. **Conferir os requisitos digitais** — hash presente?, autorização prévia?, foi extração ou espelhamento?, a defesa teve acesso aos dados brutos?
5. **Mapear as quebras** e, para cada uma, formular o **indício a arguir** com dispositivo + precedente + comprometimento da confiabilidade.
6. **Fechar com o disclaimer** (indício, não veredito; hash não validado tecnicamente; efeito caso a caso; citações a conferir; revisão humana).

> **Exemplo de saída (anonimizado e hipotético).** "Extração do aparelho do investigado realizada em [data]; laudo descreve uso de ferramenta forense, mas **não consta hash** de verificação nem **termo de recebimento** entre a apreensão e a perícia (etapas 6 e 7 do art. 158-B sem registro). **Indício de quebra a arguir:** integridade não demonstrada e gap de custódia — fundamento nos arts. 158-A/158-B do CPP e no entendimento do STJ de que o ônus de comprovar a integridade é do Estado (AgRg no HC 828.054/RN). **Comprometimento:** alto, por impossibilitar aferir alteração dos dados. **Não se conclui pela ilicitude** — o efeito é caso a caso (HC 653.515/RJ); cabe ao advogado deduzir a tese e ao juízo decidir."

## Referência Cruzada

Por tocar prova e conteúdo sensível, este documento se combina com:

- **verificacao-citacoes** — toda jurisprudência e dispositivo invocados aqui passam pelo gate anti-alucinação antes de virar fundamento.
- **etica-oab-sigilo** — o conteúdo da prova digital é dado pessoal/sensível; sigilo, LGPD e minimização aplicam-se integralmente.
- **peticao-criminal** / **recurso-criminal** — a tese de quebra da cadeia alimenta a peça (resposta à acusação, HC, RESE, apelação); a redação final é dessas best-practices.
- **pesquisa-jurisprudencial** — fornece o método de busca dos precedentes sobre cadeia de custódia; este documento fornece o enquadramento técnico-jurídico.
- **habeas-corpus** — quando a quebra justificar trancamento ou exclusão de prova por via de HC.

## Fontes

Pesquisa realizada em junho de 2026; precedentes a reconferir via `verificacao-citacoes` antes de uso em peça (números, relator, órgão e data devem bater com a fonte oficial).

- STJ — *A cadeia de custódia no processo penal do Pacote Anticrime à jurisprudência do STJ* (notícia institucional): https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/2023/23042023-A-cadeia-de-custodia-no-processo-penal-do-Pacote-Anticrime-a-jurisprudencia-do-STJ.aspx
- STJ — *Quebra da cadeia de custódia não gera nulidade obrigatória da prova, define Sexta Turma* (HC 653.515/RJ): https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/09122021-Quebra-da-cadeia-de-custodia-nao-gera-nulidade-obrigatoria-da-prova--define-Sexta-Turma.aspx
- STJ — *Sexta Turma reafirma invalidade de prova obtida pelo espelhamento de conversas via WhatsApp Web* (RHC 99.735): https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/09032021-Sexta-Turma-reafirma-invalidade-de-prova-obtida-pelo-espelhamento-de-conversas-via-WhatsApp-Web.aspx
- Buscador Dizer o Direito — *Falta de procedimentos para garantir a idoneidade e integridade dos dados extraídos de celular resulta em quebra da cadeia de custódia e inadmissibilidade da prova digital* (AgRg no HC 828.054/RN, 5ª Turma, rel. Min. Joel Ilan Paciornik, j. 23/04/2024): https://buscadordizerodireito.com.br/jurisprudencia/12717/a-falta-de-procedimentos-para-garantir-a-idoneidade-e-integridade-dos-dados-extraidos-de-um-celular-apreendido-resulta-na-quebra-da-cadeia-de-custodia-e-na-inadmissibilidade-da-prova-digital
- Migalhas — *A cadeia de custódia da prova digital no STJ: o que revela a recente sistematização jurisprudencial da Corte* (sistematização dos requisitos e divergência valoração × inadmissibilidade): https://www.migalhas.com.br/depeso/457759/a-cadeia-de-custodia-da-prova-digital-no-stj
- ConJur — *STJ vai definir licitude da prova obtida por espelhamento do app de mensagem* (afetação a repetitivo na 3ª Seção, 2025): https://www.conjur.com.br/2025-out-04/stj-vai-definir-licitude-da-prova-obtida-por-espelhamento-do-app-de-mensagem/
- ConJur — *A distribuição do ônus da prova no âmbito da cadeia de custódia da prova digital* (2025): https://www.conjur.com.br/2025-out-15/a-distribuicao-do-onus-da-prova-no-ambito-da-cadeia-de-custodia-da-prova-digital/
- Planalto — Decreto-Lei 3.689/1941 (CPP), arts. 158-A a 158-F, e Lei 13.964/2019 (Pacote Anticrime): http://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm

---

> **Em caso de dúvida, sinalize e escale.** Diante de incerteza sobre a existência da documentação da cadeia ou sobre o alcance de um precedente, a squad **descreve o indício e consulta o advogado responsável** antes de qualquer afirmação sobre ilicitude. A presunção é pró-cautela: o que não se confirma documentalmente, não se conclui.
>
> **Base normativa e jurisprudencial:** CPP, arts. 158-A a 158-F (incluídos pela Lei 13.964/2019 — Pacote Anticrime); CF, art. 5º, X e XII; Lei 12.965/2014 (Marco Civil da Internet). STJ: AgRg no HC 828.054/RN (5ª Turma, rel. Min. Joel Ilan Paciornik, j. 23/04/2024 — ônus do Estado e atributos da prova digital); RHC 99.735/SC (6ª Turma, rel. Min. Nefi Cordeiro — ilicitude do espelhamento via WhatsApp Web); HC 653.515/RJ (6ª Turma — quebra não gera nulidade automática, análise caso a caso). Tema afetado à 3ª Seção (2025) sobre licitude do espelhamento de aplicativo de mensagens — acompanhar julgamento. **Citações sujeitas a conferência via `verificacao-citacoes` antes de uso em peça.** Este documento é orientação de conformidade e não substitui parecer jurídico específico.
