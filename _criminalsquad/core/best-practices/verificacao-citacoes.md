---
id: verificacao-citacoes
name: "Verificação de Citações (anti-alucinação)"
whenToUse: |
  TRANSVERSAL — qualquer agente que cite lei, súmula, tese ou jurisprudência em peças/pareceres/pesquisas. Deve rodar ANTES de entregar qualquer peça.
version: "1.0.0"
---

# Verificação de Citações (anti-alucinação) — Best Practices

> **Guarda-corpo TRANSVERSAL e OBRIGATÓRIO.** Toda squad do CriminalSquad que produza ou revise conteúdo jurídico — peça, parecer, recurso, pesquisa, post de autoridade — deve executar este protocolo **antes de entregar**. Não é uma etapa opcional de revisão: é um portão (gate) anti-alucinação. Sistemas de IA inventam citações com aparência convincente — número de acórdão, relator, ementa — que **não existem**. Em 2026 há sanções judiciais reais aplicadas a advogados por peticionar com jurisprudência fabricada por IA (litigância de má-fé, multas, representação à OAB). A responsabilidade pela peça é sempre do advogado (CED, art. 2º); nenhuma citação sai sem fonte verificável.

## Como Aplicar (Fluxo Operacional)

Este documento se sobrepõe a qualquer best-practice de redação ou pesquisa. Ordem de prioridade quando houver conflito:

1. **Fonte verificável antes de eloquência.** Se uma best-practice de redação sugerir "reforçar a tese com precedente", a citação só entra depois de verificada. Argumento bem escrito com precedente falso é pior do que argumento sem precedente.
2. **Omitir vence inventar.** Na dúvida sobre a existência ou o teor de uma citação, **remova-a** e fundamente pela lei e pela doutrina conferidas. Lacuna é recuperável; citação falsa é infração.
3. **Verificação antes da entrega.** Nenhuma peça que contenha lei, súmula, tese ou jurisprudência é finalizada sem rodar o *Protocolo de Verificação* (abaixo) e o checklist de *Quality Criteria*.
4. **Bloqueio e escalonamento.** Identificada citação não verificada, divergente ou inventada, a squad **interrompe a entrega** e escala ao advogado responsável — não entrega "com ressalva" nem "para conferência posterior".

## Princípios Fundamentais

1. **Toda citação tem fonte verificável.** Lei, súmula, tese, repetitivo, repercussão geral ou acórdão só podem constar de uma peça se houver fonte conferível e rastreável até o documento original (texto legal vigente, enunciado oficial da súmula, inteiro teor ou ementa do julgado). Citação sem fonte é hipótese, não fundamento — e hipótese não vai para peça assinada.

2. **Melhor omitir do que inventar.** Diante da impossibilidade de confirmar uma citação, a conduta correta é **não citá-la**. A peça pode sustentar-se em lei conferida e doutrina identificada. Preencher lacuna com precedente plausível mas não verificado é alucinação travestida de robustez — e é exatamente o que gera sanção.

3. **Número de acórdão + relator + órgão + data sempre.** Toda jurisprudência citada deve trazer, no mínimo, a **classe e número do processo/recurso**, o **relator(a)**, o **órgão julgador** (Turma, Seção, Plenário) e a **data de julgamento** (ou de publicação). Citação genérica do tipo "o STJ já decidiu que..." sem esses elementos é incompleta e não passa no gate. A completude do dado é o que permite a conferência por terceiro.

4. **Conferir vigência da lei e da súmula.** Citação correta de norma revogada, alterada ou de súmula cancelada/superada é tão grave quanto citação inventada. Antes de citar, confirmar que o dispositivo legal está **vigente** e com a redação atual, e que a súmula **não foi cancelada, revista ou superada** (overruling). Vinculação de precedentes segue o CPC 927; precedente superado não vincula nem persuade.

5. **Flag "NÃO VERIFICADO" para o que não puder ser confirmado.** Quando uma citação não puder ser confirmada no momento da produção, ela deve ser **marcada de forma ostensiva** como `[NÃO VERIFICADO]` no rascunho interno — nunca silenciosamente mantida. Esse marcador é um bloqueio: a peça não é entregue ao cliente ou ao juízo enquanto restar um único `[NÃO VERIFICADO]`. O marcador serve à decisão humana (verificar, substituir ou remover), não para "passar batido".

6. **A responsabilidade final é do advogado (CED, art. 2º).** O advogado é indispensável à administração da justiça e responde pelos atos que pratica no exercício profissional; a IA é ferramenta de apoio, não fonte de autoridade. Nenhuma citação herda credibilidade por ter sido "gerada pelo sistema". O dever de zelo e a responsabilidade pela exatidão da peça (CED, arts. 2º e 4º; EAOAB, art. 32) são intransferíveis — e por isso a verificação humana fecha o ciclo.

7. **Acórdão é citado pelo inteiro teor, não pela memória.** Ementa e tese devem refletir o que o julgado efetivamente decidiu. É vedado citar precedente "de memória", parafrasear ementa sem conferir, ou atribuir a um julgado tese que ele não fixou. Precedente existe para ser lido antes de ser invocado.

## Protocolo de Verificação

Executado **antes da entrega** de qualquer peça, parecer ou pesquisa que contenha citações. É um pipeline de quatro passos com portão final de bloqueio.

### Passo 1 — Extrair todas as citações da peça

Varrer o documento e listar, em um inventário de verificação, **cada** referência a fonte do Direito:

- **Leis e dispositivos** — número da lei/decreto, artigo, inciso, parágrafo, alínea (ex.: CP, art. 157, § 2º).
- **Súmulas** — órgão e número (ex.: Súmula 444 do STJ; Súmula Vinculante 24).
- **Teses vinculantes** — repetitivos (Temas STJ), repercussão geral (Temas STF), IRDR/IAC.
- **Jurisprudência** — todo acórdão ou decisão monocrática citado, com seus elementos.

Cada item entra na lista com um identificador, para rastreio no Passo 3. Nada de "verificar por amostragem": o inventário é exaustivo.

### Passo 2 — Conferir cada citação contra as fontes do sistema

Para **cada** item do inventário, conferir nesta ordem (estratégia híbrida do projeto — acervo local primeiro):

1. **Acervo local (`acervo/`)** — camada curada de descoberta. Localizar candidatos em `acervo/legislacao/`, `acervo/jurisprudencia/`, súmulas e teses catalogadas, preservando a origem e o status do índice. Material local sem proveniência oficial verificável **não** confirma existência, teor, vigência ou aplicabilidade.
2. **Subagentes de pesquisa** — quando o item não constar do acervo ou exigir confirmação de atualidade, delegar ao subagente especialista correspondente em `.claude/agents/`:
   - `jurisprudencia-stj-stf` — para confirmar existência, relator, órgão, data e teor de acórdãos, repetitivos e repercussão geral do STJ/STF;
   - `lei-e-sumula` — para confirmar vigência e redação de lei e o teor/situação de súmulas (vigente, cancelada, superada).
   Se esses subagentes não estiverem instalados na squad, a verificação correspondente é feita pela fonte oficial conferível e o item permanece bloqueado até confirmação.
3. **Fonte oficial e confronto literal.** Mesmo quando o item foi descoberto no acervo, abra a fonte oficial aplicável e registre URL e data de consulta. Número, redação do artigo, enunciado da súmula, relator, órgão e data do acórdão precisam **bater exatamente** com a fonte. Aproximação não é verificação; sem fonte oficial acessível, o item permanece `não verificada`.

### Passo 3 — Marcar o status de cada citação

No inventário, atribuir a cada item um destes status:

- **`verificada`** — fonte localizada e todos os elementos conferem com o original (norma vigente; súmula em vigor; acórdão existente com relator/órgão/data corretos).
- **`não verificada`** — não foi possível localizar a fonte ou confirmar os elementos. Marcar `[NÃO VERIFICADO]` no texto.
- **`divergente`** — a fonte existe, mas algum elemento **não confere** (número de acórdão diferente, relator trocado, súmula cancelada, artigo com outra redação, tese atribuída que o julgado não fixou). Marcar `[DIVERGENTE]` e descrever a divergência.

Itens `divergente` são corrigidos contra a fonte (ou removidos) e **reverificados** do Passo 2. Reabrir o inventário sempre que houver correção.

### Passo 4 — Portão de bloqueio (gate)

A entrega só é liberada se **todos** os itens estiverem com status `verificada`.

> **Execução automatizada (enforcement).** Este protocolo deixou de ser só prosa:
> - O subagente read-only **`verificador-citacoes`** (`.claude/agents/`) executa os Passos 1–3 em **contexto isolado** — quem redige a peça **não** é quem valida a citação (quebra o viés de autoconfirmação) — e devolve o veredito por citação (VERIFICADA / DIVERGENTE / NÃO ENCONTRADA).
> - O hook **`verifica-citacoes`** (`.claude/hooks/`, PostToolUse em Write/Edit) é a rede determinística do Passo 4: **bloqueia** a finalização de qualquer peça em `squads/*/output/` enquanto restar um `[NÃO VERIFICADO]`/`[DIVERGENTE]` e **avisa** sobre precedente citado sem elementos de identificação.
> - O **runner** roda o *Citation Gate* antes da entrega, com teto de re-geração. A **revisão humana** continua fechando o ciclo (a responsabilidade é do profissional).

- Havendo **qualquer** item `não verificada`, `divergente` ou inventado, **BLOQUEAR a entrega**.
- Diante do bloqueio, a squad **escala ao advogado responsável** com o inventário de verificação anexo, recomendando: (a) substituir a citação por uma verificada; (b) remover a citação e refundamentar; ou (c) confirmar manualmente a fonte. Não há entrega "condicional".
- Registrar no rascunho interno o resultado da verificação (quantas citações, status de cada uma). O registro é evidência do dever de zelo cumprido.

## Quality Criteria

Checklist obrigatório antes de finalizar qualquer peça, parecer ou pesquisa com citações:

- [ ] **Inventário completo** — todas as citações de lei, súmula, tese e jurisprudência foram extraídas e listadas (Passo 1), sem amostragem.
- [ ] **Cada citação conferida contra fonte** — acervo local primeiro; subagentes `jurisprudencia-stj-stf` / `lei-e-sumula` ou fonte oficial em seguida (Passo 2).
- [ ] **Jurisprudência completa** — todo acórdão citado tem classe/número do processo, relator(a), órgão julgador e data de julgamento/publicação.
- [ ] **Vigência conferida** — leis citadas estão vigentes e com redação atual; nenhuma norma revogada ou alterada apresentada como em vigor.
- [ ] **Súmulas válidas** — nenhuma súmula cancelada, revista ou superada citada como vigente; situação confirmada na fonte.
- [ ] **Teor fiel ao inteiro teor** — ementa, tese e paráfrases refletem o que o julgado decidiu; nada citado "de memória".
- [ ] **Nenhum `[NÃO VERIFICADO]` ou `[DIVERGENTE]` remanescente** — não resta marcador de pendência no texto entregue; o gate do Passo 4 foi cumprido.
- [ ] **Status final integralmente `verificada`** — o inventário de verificação não contém item em outro status.
- [ ] **Sem citação inventada** — nenhum número de acórdão, relator ou enunciado foi gerado sem confirmação na fonte.
- [ ] **Responsabilidade humana registrada** — o resultado da verificação está disponível ao advogado responsável, que valida a peça (CED, art. 2º).

## Anti-Patterns

Padrões proibidos. A ocorrência de qualquer um deles é motivo para **bloquear a entrega** e escalar ao advogado responsável:

- **Citar precedente "de memória"** — invocar acórdão, súmula ou tese sem conferir o inteiro teor e os elementos contra a fonte. Memória do modelo não é fonte; é onde nasce a alucinação.
- **Inventar número de acórdão** — gerar classe/número de processo, relator, órgão ou data que dão aparência de real a um julgado não confirmado. É a falha que gera sanção por litigância de má-fé.
- **Citar súmula revogada ou superada** — apresentar como vigente enunciado cancelado, revisto ou objeto de overruling, ou norma já alterada/revogada. Precedente superado não vincula (CPC 927) e induz o juízo a erro.
- **Atribuir ao julgado tese que ele não fixou** — distorcer o que o acórdão decidiu, parafrasear ementa de forma infiel ou "esticar" o precedente para além do que ele sustenta.
- **Dar falsa garantia de verificação** — entregar peça afirmando que as citações foram conferidas sem ter rodado o protocolo, ou marcar como `verificada` item apenas plausível. A garantia vazia é tão grave quanto a citação falsa.
- **Manter `[NÃO VERIFICADO]` silenciosamente** — deixar no texto entregue citação não confirmada sem o marcador, ou ignorar o marcador e finalizar mesmo assim, transferindo o risco ao advogado sem aviso.
- **Confiar na citação "porque a IA gerou"** — tratar a saída do modelo como autoridade. A IA é ferramenta de apoio; a responsabilidade pela exatidão é do advogado (CED, art. 2º).

## Referência Cruzada

Por ser transversal, este guarda-corpo se combina com outras best-practices do catálogo:

- **pesquisa-jurisprudencial** — fornece o método de busca; este documento fornece o gate de verificação que a pesquisa deve passar antes de virar fundamento.
- **peticao-criminal** / **recurso-criminal** — toda peça redigida roda o Protocolo de Verificação antes da entrega.
- **revisao-juridica** — o agente revisor inclui os *Quality Criteria* deste documento como critérios de aprovação obrigatórios; sem verificação, não há APPROVE.
- **conteudo-juridico-redes** — posts de autoridade que citem lei, súmula ou julgado também passam pelo gate; citação falsa em rede social é dano reputacional e disciplinar.
- **etica-oab-sigilo** — complementa: enquanto aquela trata de sigilo, LGPD e publicidade, esta trata da exatidão e da responsabilidade pela citação (CED, art. 2º).

---

> **Em caso de dúvida, omita e escale.** Diante de incerteza sobre a existência, a vigência ou o teor de uma citação, a squad **remove a citação e consulta o advogado responsável** antes de entregar. A presunção é sempre pró-verificação: o que não se confirma, não se cita.
>
> **Base normativa:** Código de Ética e Disciplina da OAB (Resolução 02/2015 — esp. arts. 2º e 4º, dever de zelo e responsabilidade profissional); Lei 8.906/94 (Estatuto da Advocacia e da OAB — esp. art. 32, responsabilidade por danos); Lei 13.105/2015 (CPC — esp. art. 927, vinculação de precedentes, e arts. 1.036-1.041, repetitivos). Este documento é orientação de conformidade e não substitui parecer jurídico específico.
