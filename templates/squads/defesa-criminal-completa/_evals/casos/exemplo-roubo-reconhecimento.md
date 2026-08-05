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

---

> **O gabarito deste caso está em `exemplo-roubo-reconhecimento.gabarito.md`.**
> Ele é do JUIZ. Quem executa o squad lê **apenas este arquivo** — receber a
> lista de armadilhas junto com o caso faz a nota medir transcrição.
