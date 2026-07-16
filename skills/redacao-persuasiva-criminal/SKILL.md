---
name: redacao-persuasiva-criminal
description: >-
  Use ao REDIGIR ou REVISAR qualquer peça, parecer, memorial ou manifestação penal para elevá-la de
  tecnicamente correta a verdadeiramente persuasiva — teoria do caso, narrativa estratégica dos
  fatos, subsunção explícita (a Regra do Porquê), coesão argumentativa, eventualidade sem autofagia,
  refutação antecipada, precedente narrado e estilo forense. Gatilhos: redação persuasiva, melhorar
  a peça, deixar a peça mais… Não use para decisão final, assinatura, protocolo ou citação não
  verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, redacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-redacao-persuasiva-criminal"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["redacao-persuasiva-criminal", "redacao persuasiva", "persuasiva criminal"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Redação Persuasiva Criminal — a peça como obra-prima

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

Esta skill governa a ESCRITA da peça penal — o que acontece dentro dos capítulos, depois que a estrutura formal (endereçamento, cabimento, prazos, eventualidade) está garantida pelas skills de cada peça. Uma peça pode estar formalmente perfeita e ainda assim ser fraca: blocos corretos sem tese que os organize, fatos copiados da denúncia, artigos que nunca tocam o caso concreto. O padrão aqui é outro: **peça que o julgador leia sem esforço, entenda em uma passada e tenha dificuldade de negar.** Aplique-a em conjunto com a skill da peça específica (apelacao, habeas-corpus, rese…).

## Princípios Fundamentais

1. **Escreva para um leitor real: o julgador com 300 processos na mesa.** Ele não vai reler. Vai decidir com a impressão da primeira leitura — muitas vezes lendo o relatório do assessor. Consequências práticas: a tese aparece **na primeira página** (não na 12ª); os subtítulos contam a história sozinhos (quem lê só o sumário entende a defesa); cada parágrafo sobrevive isolado (tópico frasal afirmativo + desenvolvimento). Peça que exige releitura já perdeu.

2. **Uma teoria do caso comanda a peça inteira.** Antes de escrever a primeira linha, formule em UMA frase o que este caso é: *"Este caso é sobre um reconhecimento fotográfico feito sem nenhuma das cautelas do art. 226 do CPP — e nada mais liga o réu ao fato."* Essa frase é o teste de tudo: seção que não a serve, sai; fato que não a alimenta nem precisa ser neutralizado, sai; tese subsidiária existe para protegê-la, não para competir com ela. Peça sem teoria do caso é colcha de retalhos com boa formatação.

3. **Os fatos são o primeiro argumento.** "Dos Fatos" não é burocracia nem cópia da denúncia — é a única chance de o julgador ver o caso pelos olhos da parte, antes de qualquer artigo de lei. Fato bem narrado faz o leitor chegar ao Direito já meio convencido; fato mal narrado obriga o Direito a remar contra a impressão inicial.

4. **Subsunção explícita — a Regra do Porquê.** Nenhuma norma entra na peça sem ser **aplicada ao fato concreto em seguida**; nenhum fato relevante fica sem **consequência jurídica declarada**. "Norma órfã" (artigo citado que nunca toca o caso) e "fato órfão" (narrado e nunca usado) são os dois defeitos mais comuns da peça mediana. O leitor jamais deve fazer a ponte sozinho: a peça faz a ponte, com nome, data e folha dos autos.

5. **Coesão é corrente, não pilha.** Os argumentos não são empilhados: são **encadeados**. Cada seção termina preparando a seguinte; cada seção nova abre reconhecendo o terreno já percorrido ("Ainda que superada a preliminar — o que se admite apenas pelo dever de eventualidade —, no mérito…"). O leitor nunca se pergunta "por que estou lendo isto agora?".

6. **Persuasão ética: ethos, logos e pathos calibrados.** *Ethos* — credibilidade: precisão absoluta nas citações e nas folhas dos autos, tom sóbrio, zero exagero (um único erro conferível destrói a peça inteira). *Logos* — o motor: silogismo limpo, premissas ancoradas. *Pathos* — em dose forense: a dimensão humana entra pelos **fatos concretos** (idade, primariedade, contexto), nunca por adjetivos inflamados. Indignação declarada convence menos que fato que indigna.

7. **Clareza é poder, não simplificação.** Período curto, voz ativa, verbo forte. A frase que precisa ser relida é uma frase contra o cliente. Sofisticação está na precisão do conceito, jamais no rebuscamento da forma.

## Método — da teoria do caso ao texto

### A) Antes de escrever: a teoria do caso

Responda por escrito, em rascunho, antes da primeira linha da peça:

1. **A frase-síntese:** "Este caso é sobre ___." (uma frase; se precisar de duas, ainda não entendeu o caso)
2. **Os 3 fatos que ganham** — e a prova/folha de cada um.
3. **O fato ruim inevitável** — e como será enfrentado (nunca ignorado; item D.4).
4. **A hierarquia de teses:** principal → subsidiárias, e a fórmula de transição entre elas.
5. **O pedido exato** que decorre de cada tese (o espelho pedido↔tese fecha a peça).

### B) A narrativa dos fatos (o capítulo decisivo)

- **Abra com o quadro, não com o processo.** Primeira frase situa o leitor no evento, não na burocracia: *"Na noite de 12 de março, João voltava do trabalho quando…"* — e não *"Trata-se de ação penal em que se imputa…"*.
- **Cronologia com âncoras concretas:** datas, horários, lugares, folhas dos autos (fls./ID). Concretude é credibilidade; vagueza parece esconderijo.
- **Selecione sem distorcer.** Narre da perspectiva da parte, enfatize o que serve à tese — mas **enfrente o fato desfavorável central** dando-lhe o contexto que o neutraliza. Omitir o que a acusação vai gritar é entregar a réplica de graça.
- **Semeie o que o Direito vai colher.** Todo fato que a fundamentação usará deve ter sido plantado aqui (a regra vale invertida: fato narrado que nenhuma tese usa é ruído — corte).
- **Mostre, não qualifique.** Não escreva "o reconhecimento foi absolutamente irregular"; escreva "a vítima viu uma única fotografia, exibida pelo investigador com a frase 'é esse aqui?' (fls. 34)" — e deixe o adjetivo nascer na cabeça do juiz.
- **Zero argumento jurídico nos fatos.** Artigo de lei no capítulo de fatos denuncia insegurança e quebra a narrativa. O Direito tem capítulo próprio.

### C) O bloco argumentativo padrão (cada tese, cada seção)

Todo tópico de mérito ou preliminar segue a mesma anatomia — o parágrafo forense completo:

```
1. AFIRMAÇÃO   — tópico frasal que já entrega a conclusão da seção
   ("A denúncia é inepta porque não descreve qual conduta teria sido de cada acusado.")
2. PREMISSA    — a norma/súmula/precedente que sustenta (âncora exata)
3. APLICAÇÃO   — a subsunção explícita: o fato DESTE caso encaixado na premissa,
   com nome, data e folha ("No caso, a denúncia dedica um único período aos três
   réus, sem individualizar… — fls. 3")
4. CONSEQUÊNCIA — o arremate que conecta ao pedido ("Impõe-se, pois, a rejeição
   — art. 395, I, do CPP.")
```

Teste mecânico ao revisar: **em cada seção, aponte com o dedo onde está cada um dos 4 elementos.** Faltou o 3 (aplicação)? A seção é doutrina abstrata. Faltou o 4? O argumento não trabalha para o pedido.

### D) Arquitetura persuasiva (a ordem e a costura)

1. **Ordem de força:** abra com o argumento mais forte e feche com o segundo mais forte (primazia e recência); o material mais fraco — se precisar existir — vai para o meio. Exceção: a ordem legal das preliminares (processual antes do mérito) prevalece sobre a retórica.
2. **Pontes entre seções:** uma frase de transição no fim ou no início de cada seção ("Não bastasse a inépcia, falta à denúncia o mínimo lastro probatório…"). Seção que começa do zero desperdiça o impulso da anterior.
3. **Eventualidade sem autofagia:** a tese subsidiária jamais confessa contra a principal. Fórmulas que preservam: *"ainda que se admita, apenas por eventualidade…"*, *"mesmo na remota hipótese de…"*. Nunca: "caso não se acredite na negativa de autoria" (isso planta a dúvida que se queria evitar).
4. **Refutação antecipada (roube o argumento).** Identifique a melhor resposta da acusação e desmonte-a ANTES que ela seja dada: *"Dirá o Ministério Público que a confissão informal supriria o reconhecimento viciado. Não supre — e por três razões."* Quem enfrenta a objeção controla o enquadramento dela; quem finge que ela não existe responde no tempo do adversário.
5. **Subtítulos que afirmam.** Cada subtítulo é uma mini-tese, não uma etiqueta: em vez de "2.1. Da prova", escreva "2.1. O reconhecimento violou o art. 226 do CPP — e é a única prova contra o réu". O julgador que lê apenas o sumário deve sair sabendo exatamente o que a defesa sustenta.

### E) O precedente que persuade

- **Precedente é narrado, não colado.** Fórmula em 2-3 frases: *o que era o caso julgado* → *o que a corte decidiu* → *por que este caso é igual* (a similitude fática é o que dá força). Ementa transcrita sem amarração é decoração.
- **Dois ou três precedentes certeiros valem mais que dez em cascata.** Cascata de ementas sinaliza insegurança e enterra o precedente bom no meio dos irrelevantes. Hierarquia: precedente vinculante/qualificado > jurisprudência dominante do tribunal competente > julgado isolado.
- **Distinguishing do precedente contrário:** quando houver julgado desfavorável conhecido, distinga-o pelos fatos ("lá, o reconhecimento fora apenas confirmatório de investigação robusta; aqui, é a prova única") em vez de ignorá-lo.
- **Disciplina de verificação (inegociável):** nenhum precedente citado de memória — pesquise, confira o teor e marque `[NÃO VERIFICADO]` o que não confirmar (best-practice `verificacao-citacoes`). A peça-obra-prima com um julgado inventado vira prova contra o advogado.

### F) Estilo — a mecânica da clareza

- **Período: uma ideia; mire a média de 15–25 palavras.** O período de 50 palavras existe só quando o encadeamento o exigir — e termina antes de precisar de fôlego.
- **Parágrafo: um movimento argumentativo,** aberto por tópico frasal. Parágrafo de página inteira é onde teses morrem.
- **Voz ativa com agente definido:** "o delegado exibiu uma única foto" (não "foi exibida uma única foto" — a voz passiva esconde justamente quem errou; use-a apenas quando esconder o agente for estratégico para a defesa).
- **Verbo forte contra nominalização:** "requereu", "demonstrou", "violou" — não "efetuou o requerimento", "procedeu à demonstração", "incorreu em violação".
- **Corte o juridiquês de enchimento:** *data maxima venia* repetido, "com o devido acatamento", "hodiernamente", "in casu" a cada parágrafo, "pelo que se depreende do caderno processual". Um latinismo técnico necessário (in dubio pro reo, bis in idem) fica; o ornamento sai.
- **Adjetivo só com lastro.** Todo adjetivo forte deve ter acabado de ser provado pelos fatos ("ilegal", depois de demonstrada a ilegalidade). Termos técnicos com função processual (ex.: "flagrante ilegalidade" para fins de superação da Súmula 691) não são ornamento — são requisito, e vêm SEGUIDOS da demonstração.
- **Concretude numérica:** folhas/ID dos autos em toda referência a prova; datas completas; "9 meses preso preventivamente" (não "há considerável lapso temporal").

### G) A revisão do próprio redator (3 passadas antes de entregar)

1. **Passada da tese:** releia apenas subtítulos e primeiros períodos de cada parágrafo — a história se sustenta sozinha? Alguma seção não serve à teoria do caso?
2. **Passada da amarração:** para cada norma citada, aponte a frase de aplicação ao fato; para cada fato narrado, aponte onde o Direito o usa. Órfãos: corrigir ou cortar.
3. **Passada do bisturi:** corte 10% do texto — todo texto tem. Alvos: repetição da mesma tese com outras palavras, enchimento, adjetivo sem lastro, ementa em cascata.

## Quality Criteria (rubrica objetiva — usada também pela revisão)

- [ ] A teoria do caso é enunciável em 1 frase — e a peça inteira a serve (nenhuma seção estranha a ela)
- [ ] A tese principal aparece com clareza na primeira página
- [ ] "Dos Fatos": cronologia com âncoras concretas (datas, fls./ID), versão da parte, sem argumento jurídico e sem copiar a denúncia
- [ ] O fato desfavorável central foi enfrentado (não omitido)
- [ ] Todo fato usado na fundamentação foi semeado nos fatos — e todo fato narrado é usado (sem órfãos)
- [ ] Cada seção argumentativa tem os 4 elementos do bloco padrão (afirmação → premissa → aplicação ao fato → consequência)
- [ ] Nenhuma norma órfã: todo dispositivo citado é aplicado ao caso concreto em até 2 frases
- [ ] Há frase de transição entre todas as seções (a corrente não quebra)
- [ ] Teses escalonadas sem autofagia (fórmulas de eventualidade que não confessam)
- [ ] A principal objeção da acusação foi antecipada e refutada
- [ ] Subtítulos afirmam a tese (o sumário sozinho conta a defesa)
- [ ] Precedentes narrados com similitude fática declarada; máximo 2-3 por tese; nenhum citado sem verificação
- [ ] Estilo: tópicos frasais, períodos majoritariamente ≤ 25 palavras, voz ativa com agente, sem juridiquês de enchimento, adjetivos com lastro
- [ ] O capítulo de pedidos espelha exatamente as teses desenvolvidas (nada sobra, nada falta)

## Anti-Patterns

- **Colcha de retalhos.** Blocos de modelo corretos, colados sem teoria do caso que os organize — a peça "tem tudo" e não diz nada. Sintoma: seções que poderiam trocar de ordem sem que ninguém notasse.
- **Fatos-cópia-da-denúncia.** Reproduzir a narrativa acusatória e "responder" depois é ceder o enquadramento. Quem narra primeiro pela própria lente obriga o adversário a desconstruir.
- **Norma órfã.** Citar o art. 395 do CPP, o princípio da insignificância e três súmulas — e nunca encaixar o fato concreto em nenhum deles. Doutrina abstrata não decide caso.
- **Fato órfão.** Narrar minuciosamente um detalhe que nenhuma tese usa. Ruído que dilui os fatos que importam.
- **Citação em cascata.** Dez ementas coladas atrás de uma tese. O julgador não lê nenhuma; o precedente decisivo morre afogado. Dois narrados valem mais.
- **Autofagia de teses.** "Caso não se acolha a negativa de autoria, houve legítima defesa" — a subsidiária mal formulada apunhala a principal. Eventualidade tem fórmula própria (D.3).
- **Indignação adjetivada.** "Absurda e teratológica decisão", "flagrante e escancarada ilegalidade" sem demonstração — retórica inflamada lida como fraqueza. O fato provado indigna sozinho.
- **Fingir que a acusação não tem argumentos.** Peça que não enfrenta a melhor resposta contrária entrega a réplica pronta e parece não tê-la percebido.
- **Repetir a tese três vezes por insegurança.** Dizer de novo "com outras palavras" não fortalece: dilui e alonga. Diga uma vez, da melhor forma, e avance.
- **Rebuscamento como sofisticação.** "Hodiernamente, o caderno processual encartado" — a peça difícil de ler não parece culta; parece evasiva. Precisão conceitual com forma simples é a assinatura do criminalista experiente.
