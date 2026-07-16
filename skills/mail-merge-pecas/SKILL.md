---
name: mail-merge-pecas
description: >-
  Use para redigir ou estruturar mail merge pecas: Cruza UM template de peça (com placeholders) com
  um dataset da carteira (CSV/JSON) e emite N documentos personalizados de uma vez — mutirão de
  benefícios, procurações/substabelecimentos, memoriais, notificações. Não use para decisão final,
  assinatura, protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [documentos, lote, pecas, geracao]
  positive_triggers: ["mail-merge-pecas", "gerar em lote", "1 para N", "mutirao de peticoes"]
  negative_triggers: ["envio, protocolo, assinatura ou publicação sem checkpoint humano explícito"]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
  eval_case_ids: ["csq-v5-mail-merge-pecas"]
---

# Mail-Merge de Peças (geração 1 para N)

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

## When to use

Quando o mesmo documento precisa sair **personalizado para muitos casos**: 30 petições de
mutirão de progressão, 40 procurações/substabelecimentos, 25 memoriais, avisos a clientes.
Produção documental de **1→N num passe**, em vez de copiar-colar-editar caso a caso.

Hoje `ep-modelos-dinamicos-pecas` e as ~47 skills de peça são **single-output** (um molde,
um documento). Esta skill envelopa o molde + o dataset + as ferramentas de preenchimento em
massa já disponíveis no ambiente para gerar os N documentos.

## Entradas mínimas

- **Template com placeholders:** um molde de peça com variáveis nomeadas — gerado/revisado
  por `ep-modelos-dinamicos-pecas` (que já define campos obrigatórios, opcionais e **blocos
  condicionais**). Ex.: `.docx` com `{{reu}}`, `{{processo}}`, `{{tese}}`; ou um PDF de
  formulário com campos nomeados.
- **Dataset:** a tabela da carteira `acervo/casos/_carteira/carteira.csv` (de `carteira-lote`)
  ou um CSV/JSON com uma linha por caso. As **colunas do dataset casam com os placeholders**
  do template (mesmos nomes).
- **Escopo aprovado:** quais casos entram e qual peça — confirmado com o(a) profissional.

## Setup (slot de ferramenta — escolha pelo formato do template)

- **Formulário PDF (campos nomeados)** → **PDF Tools MCP `bulk_fill_from_csv`**: preenche
  N cópias do PDF a partir do CSV (uma por linha), em um passe.
- **Template Word/`.docx` (placeholders textuais)** → **Word MCP `replace_text`**: para cada
  linha do dataset, abra o template, substitua os placeholders pelos valores e salve como
  `{peça}-{processo}.docx`.
- **Assinatura/montagem final** → reuse `assinatura-peca` (slot DocuSign/PDF Tools) — **após**
  revisão humana, nunca automático.

> Padrão: comece pelo `.docx` + `replace_text` (mais flexível para peça jurídica); use o
> `bulk_fill_from_csv` quando o alvo for formulário PDF padronizado.

## Workflow

1. **Prepare o template** com `ep-modelos-dinamicos-pecas`: placeholders nomeados, blocos
   condicionais e a lista de variáveis exigidas. Anote quais colunas o dataset precisa ter.
2. **Valide o dataset** contra o template: toda variável do template tem coluna no dataset?
   Linhas com campo obrigatório vazio **não** entram no merge — vão para uma lista de
   pendências (não gere peça com lacuna material).
3. **Gere os N documentos** pelo slot escolhido, um arquivo por caso
   (`output/mail-merge/{peça}-{processo}.docx`). Aplique os blocos condicionais conforme os
   dados de cada linha (ex.: incluir o bloco "falta grave" só quando a coluna indicar).
4. **Relatório do lote:** N gerados, quais entraram, quais ficaram pendentes (e por quê),
   variáveis não preenchidas. Nenhuma peça com lacuna crítica é dada como pronta.
5. **Checkpoint humano obrigatório** antes de qualquer protocolo/assinatura/envio em massa.
   A geração produz **rascunhos**; a revisão e o disparo são decisão do(a) profissional.

## Conformidade

- **Cada documento é rascunho `contracted`** para revisão — erro replicado em escala é o
  risco central. Amostragem obrigatória: revise uma fração antes de aprovar o lote inteiro.
- **Nada externo sem checkpoint:** esta skill **gera**; **não** protocola, assina nem envia.
  Protocolo/assinatura/envio em massa exigem aprovação humana específica (ver `assinatura-peca`).
- **Verificação de citações:** se o template cita súmula/precedente, ele passa por
  `verificacao-citacoes` **uma vez** (no molde) — não se multiplica citação não verificada.
- **Sigilo e LGPD:** dataset e documentos contêm dados de clientes; ficam **locais**
  (`acervo/casos/` e `output/` do projeto). Não gere merge cruzando dados de clientes que não
  sejam da mesma campanha autorizada.
