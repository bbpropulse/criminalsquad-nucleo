# Caso-ouro (FICTÍCIO) — Homicídio qualificado, réu pronunciado (plenário)

> Dados **fictícios** para avaliação/regressão do squad. **Não** é caso real (sigilo/LGPD).
> Use como input do Step 01 (Caso do Júri); depois avalie o output com `/criminalsquad eval tribunal-juri`.

## Input do caso

- **Cliente:** o **réu** (defesa técnica). Há assistente de acusação habilitado (CPP art. 268 c/c art. 31), constituído pela **mãe** da vítima.
- **Réu:** Aurélio Braga Nogueira, 34 anos, motorista de aplicativo, primário, sem antecedentes, responde **solto** (liberdade provisória concedida no plantão; preventiva não decretada).
- **Vítima:** Damião Sertório da Luz, 29 anos.
- **Crime imputado (doloso contra a vida):** homicídio qualificado — CP art. 121, § 2º, **II** (motivo fútil) e **IV** (recurso que dificultou a defesa do ofendido — surpresa), na denúncia.
- **Crime conexo:** porte ilegal de arma de fogo de uso permitido — **Lei 10.826/2003, art. 14** (revólver .38 sem registro/porte), atraído à competência do júri por conexão (CPP art. 78, I).
- **FASE atual:** **(b) réu JÁ PRONUNCIADO** — preparação de **plenário** (judicium causae).
- **Fato (síntese da denúncia):** em **12/03/2024**, por volta das 23h20, na calçada em frente ao Bar do Nel, Rua das Palmeiras, bairro Vila Aurora, comarca fictícia de Santa Rosa do Cedro, após discussão sobre dívida de R$ 400,00, o réu efetuou dois disparos contra a vítima, um deles no tórax, causando-lhe a morte; evadiu-se e apresentou-se à delegacia na manhã seguinte, entregando a arma.

### Marcos processuais (todos fictícios, coerentes entre si)

| Data | Ato |
|------|-----|
| 12/03/2024 | Fato |
| 20/05/2024 | Recebimento da denúncia |
| 18/11/2025 | **Decisão de pronúncia** (CPP art. 413) — mantidas as duas qualificadoras e o crime conexo |
| 21/11/2025 | Intimação da defesa da pronúncia |
| 26/11/2025 | Recurso em sentido estrito da defesa (CPP art. 581, IV; prazo do art. 586) |
| 12/03/2026 | **Acórdão** dá parcial provimento ao RESE e **exclui a qualificadora do art. 121, § 2º, IV** (surpresa), mantendo o **motivo fútil** (inciso II) e o crime conexo |
| 10/04/2026 | Certidão de **preclusão** da pronúncia |
| 04/05/2026 | Intimação para o rol de plenário (CPP art. 422) |
| 08/05/2026 | Rol da defesa protocolado (3 testemunhas), dentro do quinquídio |
| **09/09/2026 (quarta-feira)** | **Sessão de julgamento designada** — atenção ao feriado de 07/09 (segunda-feira) no cômputo de prazos em dias úteis |

### Provas nos autos (com âncora fictícia de folhas)

- **fls. 112/118** — Laudo de exame cadavérico: dois ferimentos por projétil de arma de fogo; o letal no tórax, **trajeto ântero-posterior, sem componente descendente**; ausência de resíduos de disparo a curta distância (tiro a distância intermediária).
- **fls. 121/124** — Laudo de lesão corporal no **réu**, feito na manhã seguinte: ferimento **cortante de 6 cm no antebraço esquerdo**, compatível com lesão de defesa.
- **fls. 130** — Auto de apreensão: garrafa de vidro quebrada recolhida ao lado do corpo; **não** houve exame de impressões digitais na garrafa.
- **fls. 55/57** — Nivaldo Prata (garçom), em juízo: viu a vítima **avançar** sobre o réu com um objeto de vidro na mão, "veio pra cima gritando"; confirmou discussão anterior sobre dinheiro.
- **fls. 60/61** — Cleide Amorim (vizinha), em juízo: ouviu gritos e xingamentos por vários minutos antes dos disparos; não viu o início.
- **fls. 22 (fase policial) × fls. 63/65 (juízo)** — Wagner Teles: na delegacia afirmou que o réu atirou "sem que a vítima esboçasse qualquer reação"; **em juízo, sob contraditório, disse não ter visto o início da agressão** (contradição relevante — CPP art. 155).
- **fls. 70** — Ofício do bar: **não há imagens** (câmera sem gravação na data).
- **fls. 92/95** — Certidão de antecedentes da vítima: duas ocorrências anteriores por vias de fato no mesmo bar.

### Pendências práticas de plenário

- A defesa pretende **exibir em plenário** um laudo fotográfico das lesões do réu **ainda não juntado aos autos** — calcular o prazo do CPP art. 479 em face da sessão de 09/09/2026 e do feriado de 07/09.
- Uma das testemunhas da defesa (Nivaldo) mudou de cidade — verificar se o rol do art. 422 pediu intimação **por mandado com cláusula de imprescindibilidade** (CPP art. 461).

---

> **O gabarito deste caso está em `exemplo-homicidio-plenario.gabarito.md`.**
> Ele é do JUIZ. Quem executa o squad lê **apenas este arquivo** — receber a
> lista de armadilhas junto com o caso faz a nota medir transcrição.
