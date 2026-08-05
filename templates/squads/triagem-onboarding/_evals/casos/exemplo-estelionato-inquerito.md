# Caso-ouro (FICTÍCIO) — Estelionato em inquérito (novo cliente)

> Dados **fictícios** para avaliação/regressão do squad. **Não** é caso real (sigilo/LGPD).
> Use como input do Step 01 (Dados do Caso); depois avalie o output com `/criminalsquad eval triagem-onboarding`.

## Input do caso

- **Cliente:** Ricardo Menezes Fialho, 41 anos, sócio-administrador da "Fialho Tech Serviços de TI ME".
- **Contato:** (11) 98888-1234 · ricardo.fialho@exemplo.com.br
- **Processo / Inquérito nº:** Inquérito Policial nº 0021/2026 (fictício), instaurado em 09/02/2026.
- **Comarca / Vara:** Comarca de São Paulo/SP — Polícia Civil, "1ª DP Modelo" (fictícia); ainda sem ação penal.
- **Tipo penal aparente:** estelionato — CP art. 171, caput (a confirmar; o cliente cogita concurso com falsidade documental).
- **Urgência:** **alta** — não há réu preso, mas o cliente foi intimado em **16/07/2026** para prestar depoimento na delegacia em **04/08/2026**; procurou o escritório em 20/07/2026.

### Relato dos fatos (o que o cliente narrou)

- Entre **11/03/2024 e 26/08/2024**, a Fialho Tech emitiu 7 notas fiscais contra a **Núcleo Alfa Distribuidora Ltda.** (sócios: Heloísa Brandt e Otávio Brandt), totalizando **R$ 148.500,00**, todas pagas.
- A Núcleo Alfa sustenta, em auditoria interna encerrada em **12/11/2025**, que ao menos 5 dessas notas se referem a serviços de suporte de TI **não prestados**, e que os aceites foram obtidos com relatórios de horas inventados.
- A empresa protocolou **representação criminal em 20/01/2026**; o inquérito foi instaurado em 09/02/2026.
- Ricardo nega a fraude: afirma que os serviços foram prestados em regime de sobreaviso (sem chamado aberto), que quem emitia as notas e montava os relatórios de horas era sua sócia **Damares Sampaio**, e que ele apenas assinava.
- Ricardo entregou uma cópia de **e-mail interno da Núcleo Alfa datado de 30/04/2025**, no qual um diretor já apontava nominalmente "as notas do Ricardo/Fialho Tech" como suspeitas.
- **Damares Sampaio, também investigada no mesmo inquérito, ligou para o escritório em 17/07/2026 pedindo defesa** e apresenta versão oposta (diz que Ricardo autorizava tudo).
- Situação econômica: renda declarada de aproximadamente R$ 18.000,00/mês; **não** é caso de gratuidade. Ricardo é primário e sem antecedentes.
- Verificação de base: o cliente afirma que nunca foi atendido por este escritório e que, até onde sabe, a Núcleo Alfa e os sócios Brandt também não.

### Documentos trazidos (caminhos fictícios, sob pasta sigilosa)

- Intimação policial: `acervo/casos/fialho-2026/intimacao-depoimento-16-07-2026.pdf`
- Representação da vítima (cópia): `acervo/casos/fialho-2026/representacao-20-01-2026.pdf`
- Contrato de prestação de serviços e as 7 notas fiscais: `acervo/casos/fialho-2026/contrato-e-notas.pdf`
- E-mail interno da Núcleo Alfa de 30/04/2025: `acervo/casos/fialho-2026/email-diretoria-30-04-2025.pdf`
- Extratos bancários da Fialho Tech (2024): `acervo/casos/fialho-2026/extratos-2024.pdf`

---

> **O gabarito deste caso está em `exemplo-estelionato-inquerito.gabarito.md`.**
> Ele é do JUIZ. Quem executa o squad lê **apenas este arquivo** — receber a
> lista de armadilhas junto com o caso faz a nota medir transcrição.
