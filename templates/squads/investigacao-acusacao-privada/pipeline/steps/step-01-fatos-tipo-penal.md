---
step: "01"
name: "Fatos e Tipo Penal"
type: checkpoint
description: A vítima/advogado relata os fatos, indica as provas e informa os dados que definem a espécie de ação penal e o prazo decadencial.
---

# 🛑 Checkpoint: Fatos e Tipo Penal

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Coletar o relato da vítima e os dados mínimos que a Classificadora precisa para distinguir a espécie de ação penal e indicar a peça cabível. **Não avançar enquanto a data do conhecimento da autoria não estiver registrada** — sem ela é impossível conferir a DECADÊNCIA (prazo de 6 meses, fatal — CP art. 103 / CPP art. 38).

## Solicitação ao Usuário

🗡️ Vamos identificar e produzir a peça correta para defender a vítima na fase pré-processual ou na ação penal privada.

Para começar, preciso que você informe:

1. **O relato dos fatos** — o que aconteceu, na ótica da vítima (quem fez o quê, quando, onde, como).
2. **Crime / tipo penal provável** — se já souber, indique (ex.: ameaça, injúria, calúnia, difamação, perseguição/stalking, dano, estelionato). Se não souber, descreva a conduta.
3. **A autoria é conhecida?** — sabe-se quem é o ofensor (nome/qualificação) ou ainda precisa ser apurada na investigação?
4. **Provas disponíveis** — prints, documentos, áudios, vídeos, testemunhas, exame de corpo de delito etc.
5. **Houve crime contra a mulher (Lei Maria da Penha) ou contexto de violência doméstica/familiar?** — sim ou não (pode alterar a espécie de ação).
6. **O MP já atuou?** — em caso de crime de ação pública, o MP já denunciou, requisitou diligências, arquivou ou ficou inerte? (define eventual queixa subsidiária — CPP art. 29).
7. **Data do conhecimento da autoria** (DD/MM/AAAA) — dia em que a vítima soube quem é o ofensor. É o termo inicial da decadência (e, na queixa subsidiária, considerar também a data do esgotamento do prazo do MP).
8. **O objetivo é processar/investigar ou DESISTIR?** — a vítima quer provocar a investigação/ação, ou quer retirar/não oferecer representação já manifestada (retratação/renúncia)?

## Ação do Pipeline Runner

1. Receber e registrar os dados fornecidos.
2. Salvar o relato e os metadados em `output/fatos.md` no formato abaixo.
3. Avançar para o Step 02 (Classificadora — Cabimento).

## Formato de Salvamento (`output/fatos.md`)

```markdown
# Fatos e Tipo Penal

**Crime/tipo penal provável:** [ex.: ameaça (CP 147) | injúria (CP 140) | calúnia (CP 138) | difamação (CP 139) | perseguição (CP 147-A) | outro]
**Autoria conhecida:** [sim — nome/qualificação | não — a apurar]
**Contexto Maria da Penha / violência doméstica:** [sim | não]
**Atuação do MP (se ação pública):** [não se aplica | MP inerte no prazo | MP arquivou | MP denunciou | desconhecido]
**Objetivo da vítima:** [provocar investigação/ação | desistir (retratação/renúncia)]
**Data do conhecimento da autoria:** [DD/MM/AAAA]
**Recebido em:** YYYY-MM-DD

## Relato dos fatos
[transcrever o relato da vítima — o que aconteceu no mundo dos fatos]

## Provas indicadas
[listar prints, documentos, áudios, vídeos, testemunhas, perícias etc.]
```

## Quality Gate

Antes de avançar para o Step 02, verificar:
- [ ] `output/fatos.md` existe
- [ ] O relato dos fatos está registrado (o que aconteceu, na ótica da vítima)
- [ ] O crime/tipo penal provável (ou a conduta descrita) está identificado
- [ ] O campo "autoria conhecida" (sim/não) está preenchido
- [ ] As provas disponíveis estão listadas (ou registrado "nenhuma por ora")
- [ ] **VERIFICAÇÃO DE DECADÊNCIA (crítico):** a data do conhecimento da autoria está preenchida. Sem ela, NÃO avançar — o prazo de 6 meses é fatal e precisa ser conferido. Solicitar a data ao usuário.

Se qualquer verificação falhar, repetir a solicitação do dado faltante antes de prosseguir.

## Opções Especiais

- **"não sei a data do conhecimento da autoria"** → orientar o usuário a precisar a data (foi quando a vítima soube quem é o ofensor), pois é o dado mais crítico — define se já houve DECADÊNCIA.
- **"autoria desconhecida"** → sinalizar à Classificadora que o caminho provável é o requerimento de instauração de investigação (apurar materialidade e autoria), não a queixa-crime (que exige querelado qualificado).
- **"a vítima quer desistir"** → sinalizar à Classificadora que o caminho provável é a retratação/renúncia da representação (atenção ao momento: antes do oferecimento da denúncia; Maria da Penha, antes do recebimento — Lei 11.340 art. 16).
