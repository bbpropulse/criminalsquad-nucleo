---
id: execucao-penal-alta-performance
name: "Execução Penal — Protocolo de Alta Performance"
whenToUse: |
  TRANSVERSAL e obrigatório em triagem, cálculo, diagnóstico, peça, recurso ou gestão de execução penal. Carregar antes da skill específica do instituto.
version: "4.0.0"
---

# Execução Penal — Protocolo de Alta Performance

> Toda saída é rascunho técnico, sujeito à revisão humana obrigatória. Questões de liberdade, prazo, cálculo, vigência, eficácia ou direito intertemporal ficam **bloqueadas** enquanto faltar dado material, fonte oficial ou validação profissional.

## Ordem operacional

1. **Defina o caso e o polo.** Registre objetivo, urgência, pessoa afetada, juízo competente, número da execução e resultado pretendido. Pare se o perfil institucional estiver incompleto para o caso real.
2. **Classifique os documentos.** Separe guia, atestado de pena, cálculo homologado, sentenças, acórdãos, certidões de trânsito, decisões, faltas, trabalho/estudo/leitura, laudos e comprovantes.
3. **Extraia sem interpretar.** Cada dado material recebe âncora de documento, página ou evento. Divergências permanecem lado a lado; não escolha silenciosamente a versão conveniente.
4. **Monte a cronologia.** Inclua fatos, prisões, solturas, condenações, trânsitos, unificações, transferências, faltas, reabilitações, remições, datas-base e decisões supervenientes.
5. **Faça a matriz fato–prova–inferência–tese.** Fato sem prova vira lacuna; inferência não pode ser apresentada como fato; tese precisa mostrar a premissa e o suporte.
6. **Resolva a regra temporal.** Verifique redação, vigência, eficácia, retroatividade, alcance de cautelares e situação de cada condenação. Use fonte oficial consultada na execução atual.
7. **Calcule deterministicamente.** O motor recebe a regra já escolhida e identificada; ele não decide qual lei se aplica. Preserve inputs, versão, arredondamentos, memória e cenários.
8. **Diagnostique e hierarquize.** Apresente tese principal, subsidiárias compatíveis, riscos, objeção provável do MP, razão provável de rejeição e resposta possível.
9. **Redija somente conclusões aprovadas.** Selecione uma skill canônica do instituto. Não injete todas as skills de execução na mesma rodada.
10. **Revise em contextos independentes.** Revisões jurídica, probatória, de cálculo/prazo e de citações não podem ser autovalidação do redator.
11. **Checkpoint humano.** O profissional confirma fatos, estratégia, regra temporal, cálculo, fontes, pedidos e versão protocolável.

## Contrato de bloqueio

O status é `bloqueado` quando ocorrer qualquer condição abaixo:

- documento indispensável ausente, ilegível ou conflitante;
- identidade, polo, fase, competência ou objetivo não confirmados;
- data do fato, pena, trânsito, período de custódia ou data-base materialmente incertos;
- regra jurídica sem fonte oficial atual ou com controvérsia de vigência/eficácia não resolvida;
- cálculo sem `regra_id`, inputs completos, memória ou teste compatível;
- citação material não verificada individualmente;
- fato material sem âncora;
- conflito de interesses, sigilo, LGPD ou risco ético não tratado;
- hard fail identificado por qualquer revisor;
- ausência da revisão humana final.

`concluido_com_ressalvas` pode ser usado somente para análise interna não protocolável quando a pendência estiver explícita e não afetar conclusão material. Marcadores como `[NÃO VERIFICADO]` nunca chegam à entrega externa.

## Direito intertemporal e fontes vivas

Para cada regra material, registre:

- dispositivo e redação usados;
- lei que introduziu ou alterou a regra;
- publicação, início de vigência e eventual vacatio;
- data do fato e marcos de cada condenação;
- caráter mais benéfico ou gravoso, sem presumir aplicação automática;
- decisão cautelar ou controle concentrado, distinguindo existência, eficácia e alcance subjetivo;
- URL oficial, data de consulta e data da próxima revalidação;
- responsável humano pela confirmação.

Consulte o acervo local primeiro. Material sem classificação de confiança serve apenas para descoberta. Confirme proposições materiais na fonte oficial atual antes de usar.

## Cálculo reproduzível

Um cálculo válido produz:

```json
{
  "motor": "nome",
  "versao": "x.y.z",
  "regra_id": "identificador-da-regra-validada",
  "inputs": {},
  "resultado": {},
  "memoria": [],
  "revisado_por_humano": false
}
```

Regras:

- datas e durações usam convenção explícita;
- cada desconto, interrupção, suspensão e arredondamento aparece na memória;
- cenários alternativos ficam separados, com a premissa que muda;
- divergência entre cálculo oficial, cálculo da defesa e motor é destacada, nunca reconciliada por suposição;
- a peça só usa o cálculo depois da revisão humana.

Motores determinísticos disponíveis no projeto:

- `scripts/legal-calculators/fraction-date-engine.mjs` — data por fração/dias configurados;
- `scripts/legal-calculators/remission-engine.mjs` — conversão de unidades em dias conforme regra configurada;
- `scripts/legal-calculators/executory-limitation-engine.mjs` — período e eventos de prescrição executória configurados.

Nenhum deles contém percentuais, prazos ou uma lei “universal”. O chamador fornece uma regra verificada, fonte oficial e confirmação humana de aplicabilidade ao caso; ausência ou conflito bloqueia o cálculo.

## Dupla saída

Produza:

1. artefato Markdown/DOCX/PDF legível, com linguagem adequada ao destinatário; e
2. sidecar JSON conforme `_criminalsquad/core/execution-output.schema.json`.

O sidecar guarda proveniência, premissas, riscos, cálculos e próxima ação. Ele não embrulha nem substitui a peça.

## Revisão adversarial

Os revisores devem responder de forma independente:

- **Jurídico:** via, competência, cabimento, tese, direito intertemporal e pedidos estão corretos?
- **Probatório:** cada fato relevante tem âncora? Há contradição, lacuna ou inferência indevida?
- **Cálculo/prazo:** inputs, regra, memória, cenários e datas são reproduzíveis?
- **Citações:** cada proposição material foi confirmada em fonte oficial e no teor invocado?
- **Red team:** qual seria a melhor objeção do MP e o motivo mais provável de indeferimento?

Qualquer hard fail gera `REJECT`, mesmo que a pontuação agregada seja alta.

## Hard fails

- lei errada, revogada, ineficaz ou temporalmente inaplicável;
- precedente material inventado, divergente ou sem confirmação oficial;
- fato material inventado ou sem âncora;
- prazo ou cálculo não reproduzível e validado;
- vazamento, conflito de interesses ou erro de polo;
- estratégia incompatível com os fatos aprovados;
- ausência de revisão humana.

## Rubrica de promoção

| Dimensão | Peso |
|---|---:|
| Integridade jurídica e temporal | 20 |
| Proveniência e citações | 15 |
| Fatos, provas e cronologia | 15 |
| Estratégia multítese | 15 |
| Robustez adversarial | 10 |
| Procedimento, prazo e cálculos | 10 |
| Entrega acionável e estruturada | 10 |
| Ética, governança e revisão humana | 5 |

Produção exige 90/100 sem hard fail; liberdade, prazo e cálculo exigem 95/100. De 80 a 89, apenas piloto supervisionado. Abaixo de 80, rejeitar.

## Critérios finais

- [ ] skill canônica única selecionada pelo instituto e contexto;
- [ ] nenhuma skill `preview`, `quarantined` ou `deprecated` usada em produção;
- [ ] cronologia e matriz fato–prova atualizadas;
- [ ] regra temporal e fontes oficiais registradas;
- [ ] cálculo reproduzível e revisado;
- [ ] tese principal e subsidiárias coerentes;
- [ ] objeções e respostas avaliadas;
- [ ] Citation Gate sem pendências;
- [ ] sidecar válido;
- [ ] próxima ação, responsável e prazo definidos;
- [ ] revisão humana registrada antes de protocolo, envio ou decisão.

## Anti-patterns

- escolher percentuais ou datas-base por memória;
- converter prompt em “calculadora” sem algoritmo e casos-ouro;
- carregar toda a biblioteca para parecer completo;
- misturar fato, inferência e tese;
- usar quantidade de precedentes como proxy de qualidade;
- corrigir silenciosamente contradição documental;
- permitir que o redator aprove a própria saída;
- afirmar produtividade “100x” sem medir baseline, tempo, retrabalho, tokens e correções.
