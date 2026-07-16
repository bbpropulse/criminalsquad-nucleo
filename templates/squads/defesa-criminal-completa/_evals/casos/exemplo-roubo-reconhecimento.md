# Caso-ouro (FICTÍCIO) — Roubo com reconhecimento viciado [eval de RETÓRICA]

> Dados **fictícios** para avaliação/regressão do squad. **Não** é caso real (sigilo/LGPD).
> Use como input do Step 01 (Foco do Caso); depois avalie o output com `/criminalsquad eval defesa-criminal-completa`.
> **Propósito específico:** além da correção técnica, este caso testa a **qualidade da redação**
> (critérios "Redação obra-prima" do `squad.yaml` — rubrica `redacao-persuasiva-criminal`).
> Ele contém, de propósito: um fato desfavorável que a peça precisa ENFRENTAR, teses que
> convidam à autofagia, e uma objeção óbvia do MP que a defesa deve refutar ANTES da réplica.

## Input do caso

- **Tipo penal:** roubo simples (CP art. 157, caput).
- **Fase:** citação recebida em 10/06; prazo do art. 396 do CPP correndo (resposta à acusação).
- **Síntese da denúncia:** a vítima teria sido abordada à noite (02/05, ~22h30) por homem que
  anunciou o assalto e levou seu celular. Cinco dias depois, viu no Instagram uma foto do
  acusado, "reconheceu-o" e o mostrou ao delegado, que exibiu **apenas essa foto** à vítima
  na delegacia ("é esse aqui?" — fls. 34). Nenhuma testemunha presencial; o aparelho não foi
  encontrado com o réu.
- **Réu:** primário; trabalhava como entregador; afirma que na noite do fato terminou uma
  entrega às 22h10 em bairro distante (registro do aplicativo — fls. 61) e foi para casa.
- **Fato DESFAVORÁVEL (a peça não pode omitir):** o policial condutor afirma que, na viatura,
  o réu teria dito "eu estava lá, mas não roubei ninguém" — uma **"confissão informal"** de
  presença, sem advertência de direitos e não repetida em juízo (fls. 40).
- **Provas citadas na denúncia:** reconhecimento fotográfico (fls. 34), depoimento do policial
  condutor (fls. 40), print do Instagram (fls. 36).

## Teses candidatas (a confirmar no Step 04)

- **Principal:** imprestabilidade do reconhecimento (inobservância do art. 226 do CPP —
  exibição de foto única induzida; pesquisar o entendimento atual do STJ sobre reconhecimento
  como prova única) → falta de justa causa / absolvição por fragilidade probatória.
- Negativa de autoria com álibi parcial (registro do aplicativo — fls. 61).
- Inadmissibilidade da "confissão informal" na viatura (sem advertência; não judicializada).
- *(Armadilha proposital: formular a subsidiária sem confessar contra a negativa de autoria.)*

## O que um bom output deve conter (referência para o juiz do eval)

Além dos requisitos técnicos dos `success_criteria` (tempestividade, teses aprovadas com
fundamento verificado, rol, provas), a peça deve demonstrar a **régua de obra-prima**:

1. **Teoria do caso em 1 frase**, visível desde a primeira página — algo como: *"o reconhecimento
   nasceu viciado e é a única ponte entre o réu e o fato"* — e subtítulos que a afirmam
   (ex.: "2.1. O reconhecimento violou o art. 226 do CPP — e é a única prova de autoria").
2. **Fatos com âncoras concretas** (datas, horários, fls.) narrados pela lente da defesa —
   sem copiar a denúncia e sem argumento jurídico no capítulo de fatos.
3. **O fato desfavorável enfrentado:** a "confissão informal" (fls. 40) aparece nos fatos com o
   contexto que a neutraliza (sem advertência, não repetida em juízo) — omiti-la é reprovação
   no critério "fato desfavorável central enfrentado".
4. **Sem norma órfã nem fato órfão:** art. 226/CPP aplicado à dinâmica concreta da foto única
   (fls. 34); o registro do aplicativo (fls. 61) efetivamente usado por uma tese.
5. **Eventualidade sem autofagia:** a negativa de autoria e a tese do reconhecimento convivem
   por fórmulas corretas ("ainda que se admita, apenas por eventualidade…") — nunca
   "caso não se acredite no álibi".
6. **Refutação antecipada:** a peça enuncia e desmonta a resposta óbvia do MP ("a confissão
   informal supriria o vício do reconhecimento") antes que ele a dê.
7. **Precedente narrado** (caso → decisão → similitude fática com ESTE caso), no máximo 2-3
   por tese, todos verificados — nada de cascata de ementas nem citação de memória.
