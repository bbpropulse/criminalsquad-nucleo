---
name: assistente-acusacao
description: >-
  Use ao habilitar a vítima (ofendido) como ASSISTENTE DE ACUSAÇÃO na ação penal pública e ao
  conduzir toda a sua atuação — propor provas, requerer perguntas às testemunhas, aditar razões,
  requerer preventiva e desaforamento, recorrer supletivamente quando o MP silencia e executar no
  cível a reparação do dano. Gatilhos: assistente de acusação, assistente do Ministério Público/MP,
  habilitação do ofendido, vítima habilitada… Não use para decisão final, assinatura, protocolo ou
  citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-assistente-acusacao"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["assistente-acusacao", "assistente acusacao"]
  negative_triggers: ["decisão final, assinatura, protocolo ou citação não verificada"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Assistente de Acusação

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

Esta skill orienta a **habilitação** e a **atuação do assistente de acusação** (arts. 268 a 273 do CPP) — o instrumento pelo qual a **vítima (ofendido)** ingressa na **ação penal PÚBLICA** ao lado do Ministério Público. Cobre a petição de habilitação, os poderes processuais, o **recurso supletivo** (art. 598 CPP) e a ponte para a **execução civil da sentença** (art. 63 CPP). Aqui se advoga para a vítima — mas em processo cuja titularidade é do MP.

## Instituto e base legal — a vítima intervém, o MP acusa

A ação penal pública é privativa do Ministério Público (art. 129, I, CF). O ofendido não é parte originária: **intervém** como **assistente do MP** "em todos os termos da ação pública" (art. 268 CPP) e **recebe a causa no estado em que se achar** (art. 269 CPP) — não se repetem atos já praticados.

Não confunda os três papéis processuais da vítima:

| Papel | Espécie de ação | Instrumento | Onde está |
|---|---|---|---|
| **Querelante** | Privada | Queixa-crime — a vítima é **autora** | skill `queixa-crime` |
| **Representante** | Pública condicionada | Representação — condição de procedibilidade | skill `representacao` |
| **Assistente** | Pública **em curso** | Habilitação — a vítima é **interveniente** | **esta skill** |

**Legitimados (art. 268):** o **ofendido**, seu **representante legal** ou, na falta (morte ou ausência), as pessoas do **art. 31 CPP** — macete **CADI**: **C**ônjuge (e companheiro, por equiparação assentada na doutrina), **A**scendente, **D**escendente, **I**rmão. Pessoa jurídica ofendida pode habilitar-se. Leis especiais ampliam a legitimação — entidades de defesa do consumidor nos crimes de consumo (art. 80 do CDC) e legitimados próprios nos crimes falimentares (Lei 11.101/2005): **confira o dispositivo exato via `lei-e-sumula` antes de citar em peça**.

**Vedação expressa:** o **corréu no mesmo processo** não pode ser assistente (art. 270 CPP).

## Cabimento — quem, quando e onde

| Pergunta | Resposta | Base |
|---|---|---|
| Quem pode | Ofendido, representante legal ou CADI; PJ ofendida | arts. 268 e 31 CPP |
| Quem não pode | Corréu no mesmo processo | art. 270 CPP |
| A partir de quando | Do início da ação penal (recebida a denúncia) | art. 268 CPP |
| Até quando | O trânsito em julgado, no estado em que a causa se achar | art. 269 CPP |
| No plenário do júri | Habilitação requerida até **5 dias antes** da sessão | art. 430 CPP |
| Onde NÃO cabe | Inquérito policial, execução penal (posição clássica), habeas corpus | art. 268 CPP; Súmula 208 STF |
| Forma | Petição nos autos, por advogado(a); MP ouvido antes da decisão | art. 272 CPP |
| Recurso da decisão | **Nenhum** — irrecorrível; via residual = mandado de segurança | art. 273 CPP |

> Na fase de investigação a vítima atua por outros instrumentos (requerimento de diligências, acesso aos autos, representação) — terreno do squad `investigacao-acusacao-privada`. O assistente nasce **com o processo**: habilitação protocolada em inquérito é natimorta.

## Poderes do assistente — o art. 271 e as ampliações posteriores

Rol do **art. 271, caput, CPP**: **propor meios de prova**; **requerer perguntas às testemunhas** (repergunta, sempre **após o MP** — no júri a ordem é expressa no art. 473 CPP); **aditar os articulados** (a referência ao "libelo" perdeu objeto com a Lei 11.689/2008 — leia-se hoje: aditar alegações finais e arrazoar recursos); **participar do debate oral**; **recorrer** nos casos dos arts. 584, §1º, e 598 CPP e **arrazoar os recursos interpostos pelo MP**.

A legislação posterior ampliou o rol clássico:

- **Prisão preventiva a requerimento do assistente** — o art. 311 CPP o nomeia expressamente desde a Lei 12.403/2011 (menção mantida na redação da Lei 13.964/2019, que vedou a decretação de ofício).
- **Desaforamento no júri** — o art. 427 CPP legitima o assistente a requerer.
- **Alegações orais** — após o MP, o assistente tem **10 minutos**, prorrogando-se por igual tempo a defesa (art. 403, §2º, CPP); convertidos os debates em memoriais, o prazo é sucessivo de 5 dias (art. 403, §3º, CPP).
- **Plenário do júri** — fala **depois do MP** (art. 476, §1º, CPP) e divide com ele o tempo da acusação (art. 477 CPP).
- **Valor mínimo de indenização** — pedir expressamente a fixação do art. 387, IV, CPP (ver adiante: é o elo com a execução civil).

O que o assistente **não** faz: aditar a denúncia (o conteúdo acusatório é do MP), recorrer fora das hipóteses legais, intervir em habeas corpus ou na execução penal.

## Estrutura forense — petição de habilitação

```
1. Endereçamento: ao Juízo da ação penal em curso — "nos autos da Ação Penal nº ..."
2. Qualificação completa do requerente (ofendido/representante legal/CADI) —
   art. 319, II, CPC por analogia
3. Representação por advogado(a), com procuração nos autos — bastam poderes gerais
   de foro (os "poderes especiais" do art. 44 CPP são exigência da QUEIXA, não daqui)
4. I — Da Legitimidade: condição de ofendido (ou vínculo do art. 31 CPP), com prova
   documental (documentos pessoais; certidão de óbito e de parentesco, se sucessão)
5. II — Do Cabimento: ação penal pública em curso, antes do trânsito (arts. 268 e 269);
   requerente não é corréu (art. 270); no júri, tempestividade do art. 430
6. III — Dos Pedidos:
   a) a oitiva do MP (art. 272) e a HABILITAÇÃO como assistente de acusação;
   b) a intimação de todos os atos do processo na pessoa do(a) advogado(a);
   c) desde logo, os requerimentos probatórios (art. 271), se houver;
   d) a fixação de valor mínimo de indenização na sentença (art. 387, IV) — expresso.
7. Fechamento: "Termos em que pede deferimento. Local e data. Advogado(a). OAB."
```

> **Verbo: REQUERER a habilitação** (o assistente não "oferece" nada — quem oferece é o querelante na queixa e o MP na denúncia). Formular o pedido do art. 387, IV **já na habilitação** garante o contraditório e blinda a fixação contra a tese defensiva de surpresa — a jurisprudência exige pedido expresso e oportunidade de defesa (pesquise o precedente atual via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até conferir).

## Atuação na instrução e nas alegações finais

- **Provas propostas:** o juiz decide **ouvido o MP** (art. 271, §1º, CPP) — antecipe a pertinência e a utilidade de cada diligência na própria petição.
- **Reperguntas:** perguntas diretas às testemunhas (art. 212 CPP), na posição de acusação, após o MP.
- **Ônus de comparecimento:** intimado e ausente sem força maior comprovada, o processo **segue sem nova intimação** do assistente (art. 271, §2º, CPP) — a habilitação não é assento decorativo.
- **Sentença:** o assistente habilitado é intimado dela (art. 391 CPP) — mas o prazo do recurso supletivo conta do **fim do prazo do MP**, não dessa intimação (Súmula 448 STF).

## Recurso supletivo — o assistente recorre quando o MP silencia

**Cabimento (art. 598 CPP):** nos crimes de competência do júri ou do juiz singular, se o MP **não apelou** no prazo legal, o ofendido ou as pessoas do art. 31 — **ainda que não habilitados** — podem interpor apelação. O recurso **não tem efeito suspensivo** (art. 598, caput).

**Prazos — o ponto que mais derruba:**

| Situação | Prazo | Termo inicial |
|---|---|---|
| Assistente **habilitado** | **5 dias** (prazo geral da apelação — art. 593 CPP) | Fim do prazo do MP — Súmula 448 STF |
| Ofendido **não habilitado** | **15 dias** (art. 598, parágrafo único, CPP) | Fim do prazo do MP — Súmula 448 STF |

A distinção 5/15 dias é a leitura dominante na doutrina e nos tribunais superiores — em caso limítrofe, confirme o estado atual via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até a checagem.

**Contagem:** prazo processual penal é **contínuo, em dias corridos** (art. 798, caput, CPP) — não se aplica a contagem em dias úteis do CPC; exclui-se o dia do começo e inclui-se o do vencimento (art. 798, §1º); vencendo em domingo ou feriado, prorroga-se ao dia útil seguinte (art. 798, §3º). **Defensoria Pública** atuando pelo ofendido: todos os prazos contam **em dobro** (LC 80/94, arts. 44, I, 89, I, e 128, I).

**Alcance recursal consolidado em súmula:**

- **Súmula 210 STF** — o assistente pode recorrer, **inclusive extraordinariamente**, nos casos dos arts. 584, §1º, e 598 CPP. A súmula é anterior à criação do STJ e fala em RE; a extensão ao **REsp** é admitida na prática dos tribunais superiores — confirme via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até a checagem.
- **Súmula 208 STF** — o assistente **não** recorre extraordinariamente de decisão **concessiva de habeas corpus**.
- **RESE do assistente:** contra a decisão que declara **extinta a punibilidade** (art. 581, VIII, c/c art. 584, §1º, CPP) — ex.: prescrição mal reconhecida.

**Interesse recursal:** a leitura ampla — o assistente recorre pela **justa aplicação da lei penal** (condenação e mesmo exasperação da pena), e não apenas pelo interesse indenizatório — prevalece nos tribunais superiores; pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**. A mesma cautela vale para a apelação supletiva **parcial** (quando o MP recorreu só de capítulo da sentença).

**Estrutura da apelação supletiva:** interposição ao juízo *a quo* + razões ao tribunal, como qualquer apelação — monte a arquitetura recursal com as skills `apelacao` e `contrarrazoes-apelacao` e acrescente duas preliminares próprias: **(i)** legitimidade e interesse do assistente/ofendido (arts. 268, 271 e 598 CPP; Súmula 210 STF) e **(ii)** tempestividade demonstrada com **certidão do decurso do prazo do MP em branco** (Súmula 448 STF).

## Da condenação à reparação — execução civil (art. 63 CPP)

Transitada em julgado a condenação, a sentença é **título executivo judicial** no cível (art. 63 CPP; art. 515, VI, CPC). Podem promover a execução o **ofendido, seu representante legal ou seus herdeiros**:

- **Execução imediata do valor mínimo** fixado na sentença (art. 387, IV) — art. 63, parágrafo único, CPP —, **sem prejuízo da liquidação** para apurar o dano efetivamente sofrido no que exceder.
- **Ação civil *ex delicto*** (art. 64 CPP): alternativa de conhecimento proposta desde logo no cível, contra o autor do crime e, se for o caso, o responsável civil — independe da habilitação como assistente.
- Em **violência doméstica**, tese repetitiva do STJ admite dano moral *in re ipsa* para o valor mínimo, dispensando instrução específica sobre o dano — pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]**.

Sem o pedido expresso do art. 387, IV, a vítima sai da ação penal com título ilíquido e recomeça do zero no cível — por isso ele entra na habilitação, reaparece nas alegações finais e é conferido no checklist.

## Teses típicas do polo vítima

- **Habilitação tardia é habilitação válida** — o art. 269 CPP admite o ingresso até o trânsito em julgado; preclusos estão os atos passados, não o direito de habilitar-se.
- **Mandado de segurança contra a inadmissão** — o art. 273 CPP fecha o recurso, não a via mandamental: direito líquido e certo do legitimado que comprova a condição de ofendido.
- **Interesse recursal amplo** — o assistente busca a justa aplicação da lei penal, não só a indenização (pesquise via `jurisprudencia-stj-stf`; **[NÃO VERIFICADO]**).
- **Preventiva e cautelares a requerimento do assistente** — legitimidade expressa do art. 311 CPP (desde a Lei 12.403/2011).
- **Valor mínimo robusto (art. 387, IV)** — com dano moral *in re ipsa* em violência doméstica (**[NÃO VERIFICADO]** — confirmar tese repetitiva).
- **Desaforamento (art. 427 CPP)** — quando a parcialidade local compromete o júri, o assistente tem legitimidade autônoma para requerer.
- **RESE contra extinção da punibilidade** (art. 581, VIII, c/c art. 584, §1º) — ataque à prescrição reconhecida com marcos interruptivos ignorados.

## Erros comuns e pegadinhas

- **Confundir assistente com querelante** — "oferecer queixa" em ação pública é erro estrutural; aqui o verbo é **requerer a habilitação**. O contraste completo está na skill `queixa-crime`.
- **Exigir procuração com poderes especiais (art. 44 CPP)** — requisito da queixa; a habilitação pede capacidade postulatória com poderes gerais de foro.
- **Habilitar no inquérito ou na execução penal** — não cabe: o art. 268 fala em "ação pública". Antes do processo, use o squad `investigacao-acusacao-privada`.
- **Júri: perder o prazo do art. 430 CPP** (5 dias antes da sessão) — o assistente fica fora do plenário.
- **Contar o prazo supletivo da intimação da vítima** — errado: conta do **fim do prazo do MP** (Súmula 448 STF). E são **5 dias** para o habilitado; os 15 do parágrafo único do art. 598 são do **não habilitado**.
- **Contar prazo em dias úteis (regra do CPC)** — no processo penal o prazo é contínuo e corre em dias corridos (art. 798 CPP); só a Defensoria tem dobra (LC 80/94).
- **Apelar supletivamente quando o MP apelou de tudo** — falta interesse: o supletivo pressupõe inércia total (ou parcial — hipótese a pesquisar) do MP.
- **Esperar efeito suspensivo da apelação do art. 598** — não tem (caput, parte final).
- **Recorrer do indeferimento da habilitação** — irrecorrível (art. 273); a via é o mandado de segurança.
- **Esquecer o pedido expresso do art. 387, IV antes da sentença** — risco concreto de o tribunal afastar a fixação por ofensa ao contraditório.
- **Faltar a ato após intimado** — o processo segue sem nova intimação (art. 271, §2º).
- **Corréu requerendo habilitação** — vedação seca do art. 270.
- **Aditar a denúncia** — o assistente adita articulados e razões; a acusação é do MP.

## Checklist final

- [ ] Legitimidade documentada (ofendido / representante legal / CADI — art. 31)?
- [ ] Ação penal pública **em curso**, antes do trânsito (art. 269)? No júri, art. 430 observado?
- [ ] Requerente não é corréu (art. 270)?
- [ ] Pedidos: oitiva do MP (art. 272) + habilitação + intimação dos atos + provas (art. 271)?
- [ ] Pedido **expresso** do valor mínimo (art. 387, IV)?
- [ ] Recurso supletivo: inércia do MP **certificada** + prazo correto (5 ou 15 dias, da Súmula 448 STF) + ciência de que não há efeito suspensivo?
- [ ] Preliminares de legitimidade/interesse e tempestividade na apelação supletiva?
- [ ] Precedentes atuais pesquisados via `jurisprudencia-stj-stf` e marcados **[NÃO VERIFICADO]** até a checagem; dispositivos de leis especiais conferidos via `lei-e-sumula`?

## Apoie-se em

- **Squad `investigacao-acusacao-privada`** — o polo vítima antes do processo (investigação, representação, queixa); esta skill é a extensão natural para dentro da ação penal pública.
- **Skill `queixa-crime`** — quando a ação é privada, a vítima não se habilita: ela é autora (querelante). Contraste estrutural direto; não duplique — referencie.
- **Skill `contrarrazoes-apelacao`** (com `apelacao`) — arquitetura recursal para a apelação supletiva, para arrazoar os recursos do MP e responder aos da defesa.
- **Agentes `jurisprudencia-stj-stf` e `lei-e-sumula`** — pesquisa de precedentes e conferência de vigência/redação de dispositivos e súmulas antes de qualquer citação.
- **Agente `verificador-citacoes`** — gate final: nenhuma súmula ou precedente entra na peça sem verificação; o que não confirmar permanece **[NÃO VERIFICADO]**.
- **BP `peticao-criminal`** — padrão estrutural de petição criminal (endereçamento, preâmbulo, fundamentação, pedidos).
- **BP `recurso-criminal`** — técnica e teses recursais que sustentam o capítulo supletivo.
- **Skill `redacao-persuasiva-criminal`** — **SEMPRE**: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão — a régua de obra-prima que a revisão cobra.
