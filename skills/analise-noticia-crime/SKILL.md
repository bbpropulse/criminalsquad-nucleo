---
name: analise-noticia-crime
description: >-
  Use para dissecar, sob a ótica da DEFESA, a notícia-crime (delatio criminis) que deflagrou a
  investigação — exame da origem (identificada, anônima, requisição da autoridade, cognição direta),
  da credibilidade e da suficiência da notitia criminis, da verificação preliminar de informações
  (VPI) exigível antes de instaurar IP com base em anônimo, e diagnóstico de fragilidade da base que
  originou o inquérito contra o cliente… Não use para conclusão definitiva sem autos suficientes,
  fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, inquerito, investigacao]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-analise-noticia-crime"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["analise-noticia-crime", "analise noticia", "noticia crime"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Análise da Notícia-Crime / *Delatio Criminis* (CPP, art. 5º)

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `legal-analysis`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** pergunta decisória, polo, fase e resultado pretendido.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** formular questões verificáveis e hipóteses concorrentes; validar e corrigir antes de finalizar.
- **Saída:** status: ready, partial ou blocked; conclusão calibrada com nível de confiança; premissas, fontes, evidências favoráveis e contrárias; alternativas priorizadas, riscos e próxima ação.
- **Gate:** inferência apresentada como fato. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

Esta skill orienta a **leitura crítica e defensiva da notícia-crime** — a *notitia criminis* que chegou ao conhecimento da autoridade e deflagrou a investigação contra o cliente. É um **diagnóstico**, não uma peça: mapeia a **origem**, a **credibilidade** e a **suficiência** do insumo que antecede a portaria, e converte fragilidades desse gatilho em **teses** (trancamento do IP, nulidade de diligências dele decorrentes, arquivamento) para as peças subsequentes.

> **Lição central:** a notícia-crime é o **gatilho**, não a prova. Instaurar investigação exige *justa causa* mínima; instaurar com base em **denúncia anônima pura**, sem **verificação preliminar (VPI)**, é ilegítimo. Antes de discutir o mérito, **pergunte de onde veio a notícia e o que a autoridade fez com ela antes de instaurar** — muitas vezes a fragilidade da origem contamina tudo o que veio depois.

> **Cautela de vigência (obrigatória antes de citar):** confira a **redação vigente do art. 5º do CPP** e conheça o **art. 3º-B do CPP** (juiz das garantias / controle da investigação, com eficácia reconhecida a partir das ADIs 6.298 e conexas — confirmar situação atual). Toda súmula, tema ou precedente citado aqui passa **obrigatoriamente** pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes de ir para a peça. Melhor faltar precedente do que citar julgado inexistente.

---

## O que é (e o que não é)

- **Notícia-crime / *notitia criminis*:** o conhecimento, pela autoridade, de um fato aparentemente criminoso. É o **pressuposto de fato** da instauração do inquérito.
- ***Delatio criminis*:** a espécie de notícia-crime **provocada por terceiro** (comunicação de particular à autoridade), por oposição à cognição **espontânea/direta** da própria autoridade.
- **NÃO se confunde** com a *representação* (condição de procedibilidade da ação penal pública condicionada) nem com a *requisição* do MP/juiz — embora qualquer delas possa **funcionar como** notícia-crime.

Esta skill é **defensiva**: examina o insumo **contra** o cliente. Distingue-se de:
- `requerimento-investigacao` — aquela é a **peça da vítima** que **provoca** a apuração; esta é a **crítica defensiva** da notícia que já deflagrou o IP.
- `analise-portaria` — aquela foca no **ato formal de instauração**; esta foca no **insumo que o antecede** (a origem e a suficiência da notícia).

## Base legal (âncoras)

- **CPP, art. 5º, *caput* e incisos I e II** — instauração do IP **de ofício** (crime de ação pública), por **requisição** do MP/juiz, a **requerimento** do ofendido, ou mediante **auto de prisão em flagrante**.
- **CPP, art. 5º, §3º** — **qualquer do povo** que tiver conhecimento da existência de infração de ação pública **poderá comunicá-la, verbalmente ou por escrito**, à autoridade policial (a base da *delatio criminis*).
- **CPP, art. 5º, §§1º e 2º** — requisitos e forma do **requerimento** do ofendido; recurso ao chefe de polícia em caso de indeferimento.
- **CPP, art. 5º, §4º e §5º** — ação pública **condicionada à representação** e ação **privada** (a notícia só move a máquina nos limites da titularidade da ação).
- **CPP, art. 27** — qualquer pessoa pode **provocar a iniciativa do MP** nos crimes de ação pública, fornecendo informações e indicando provas.
- **CF, art. 5º, IV e X** — **vedação ao anonimato** e proteção à honra/imagem (fundamento para exigir cautela com a delação anônima).
- **CPP, art. 3º-B** — juiz das garantias e controle de legalidade da fase de investigação (conferir vigência/alcance atuais).

## Tipologia da origem — mapa de triagem

Classifique **de onde veio** a notícia; a origem define o grau de exigência de VPI e as teses cabíveis.

| Origem | Descrição | Ponto sensível para a defesa |
|---|---|---|
| **Cognição imediata/direta** | A autoridade toma conhecimento por atividade própria (patrulhamento, outro procedimento) | Verificar se houve efetivo fato objetivo ou mera suspeita/"faro policial" |
| ***Delatio* identificada** | Comunicação de particular **identificado** (vítima, testemunha) | Credibilidade, interesse do noticiante, animosidade, contradições |
| **Requisição (MP/juiz)** | Determinação de instaurar (art. 5º, II) | A requisição **substitui** a análise de justa causa? Motivação idônea? |
| **Flagrante** | Auto de prisão em flagrante como notícia | Regularidade do flagrante contamina o insumo (ver `analise-auto-prisao-flagrante` se existir) |
| **Denúncia anônima / disque-denúncia** | Comunicação **sem identificação** | **Núcleo do problema:** exige VPI antes de instaurar; anônimo puro não basta |

## Roteiro de análise (passo a passo)

1. **Identifique a origem** da notícia (tabela acima). É a chave de tudo.
2. **Verifique a forma e o registro** — foi reduzida a termo? Consta dos autos o documento/áudio/registro do disque-denúncia? A **ausência de registro da origem** é, por si, um vício de rastreabilidade.
3. **Afira a credibilidade do noticiante** (se identificado): interesse na causa, inimizade capital, versões contraditórias, ganho secundário. Notícia de fonte interessada não vira, sozinha, justa causa.
4. **Mensure a suficiência** — a notícia descreve **fato determinado, com circunstâncias mínimas** (autoria/participação indiciária, tempo, lugar)? Notícia vaga/genérica não sustenta instauração dirigida a pessoa certa.
5. **Cheque a VPI (quando anônima)** — houve **verificação preliminar de informações** antes de instaurar? Que diligências prévias e apuratórias mínimas a autoridade fez para confirmar a verossimilhança **antes** de abrir o IP? (ver seção própria abaixo).
6. **Teste a licitude da obtenção** — a notícia (ou seus anexos) veio de **prova ilícita** (interceptação sem ordem, dado obtido com violação de sigilo, gravação clandestina usada indevidamente)? Ilicitude na origem projeta-se por **derivação** (art. 157, §1º, CPP — *fruits of the poisonous tree*).
7. **Confira a titularidade da ação** — se ação **condicionada à representação** ou **privada**, faltando a manifestação do ofendido/legitimado, **não cabia** instaurar de ofício; ausência de condição de procedibilidade.
8. **Trace o nexo com os atos posteriores** — quais diligências (busca, quebra de sigilo, oitivas) **decorreram diretamente** da notícia frágil? É esse nexo que fundamenta a contaminação por derivação.
9. **Formule o diagnóstico** — origem + credibilidade + suficiência + VPI + licitude → conclusão sobre a **legitimidade da deflagração** e as teses cabíveis.

## O ponto nevrálgico — denúncia anônima e a VPI

A vedação constitucional ao anonimato (CF, art. 5º, IV) **não impede** que a autoridade **receba** a comunicação anônima, mas **impede** que ela, **isoladamente**, sirva de base para instaurar procedimento ou deferir medidas invasivas contra pessoa determinada.

**Regra prática consolidada na doutrina e na jurisprudência dominante:**
- A denúncia anônima **autoriza e recomenda** a **verificação preliminar de informações (VPI)** — diligências apuratórias **prévias, discretas e mínimas** para aferir a **verossimilhança** do que foi noticiado.
- **Só depois** de confirmada a plausibilidade por elementos autônomos é que se instaura o IP ou se representa por medidas cautelares.
- **Instaurar direto** (ou pior, deferir busca/interceptação) **com base apenas no anônimo**, sem VPI, é ilegítimo e vicia o que vier a reboque.

➡️ **Tese defensiva (forte):** ausência de VPI antes da instauração/das cautelares fundadas em denúncia anônima → **ilegitimidade da deflagração** e **contaminação por derivação** das provas subsequentes (art. 157, §1º, CPP). Sustentar o **trancamento do IP** por falta de justa causa (via HC) e/ou a **inutilização** das provas derivadas.

➡️ **Contra-argumento previsível (a antecipar):** a acusação costumará sustentar que **houve** diligências de confirmação, que a instauração não se deu "só" pelo anônimo, ou que os elementos posteriores têm **fonte independente** (art. 157, §2º, CPP). **Neutralize** exigindo que os autos demonstrem, **documentalmente**, a VPI e a autonomia da fonte — o ônus de evidenciar a licitude da origem recai sobre a acusação.

## Teses defensivas (catálogo)

1. **Falta de justa causa para a investigação** — notícia vaga, de fonte interessada ou anônima sem VPI → **trancamento do IP** por HC (ausência de suporte mínimo).
2. **Nulidade por ausência de VPI** em anônimo → ilegitimidade da deflagração; provas subsequentes contaminadas por derivação (art. 157, §1º).
3. **Prova ilícita na origem** — notícia/anexo obtido por meio ilícito → exclusão e derivação (*fruits of the poisonous tree*).
4. **Ausência de condição de procedibilidade** — ação condicionada/privada sem representação/queixa → não cabia instaurar de ofício.
5. **Desvio de finalidade / instauração seletiva** — notícia usada como pretexto para investigação genérica e prospectiva (*fishing expedition*) contra pessoa certa.
6. **Quebra da cadeia de rastreabilidade** — origem não documentada nos autos, impedindo o controle da legalidade (viola o contraditório diferido e o art. 3º-B, se aplicável).
7. **Falta de individualização** — notícia que não descreve fato determinado nem vincula o cliente a conduta específica não legitima diligências dirigidas contra ele.

> **Não confundir com a fase de denúncia (peça acusatória).** Aqui se discute a **notícia-crime** (insumo da investigação), não a **denúncia do MP** (art. 41 CPP) nem o **recebimento** dela. A justa causa exigível na notícia é o **mínimo** para investigar; a justa causa para a **ação penal** é exigência autônoma e posterior.

## Súmulas e precedentes (sob o Citation Gate)

Cite **livremente** os dispositivos legais acima (são texto de lei). Para os itens abaixo, **confirme número, teor e vigência** via `jurisprudencia-stj-stf` **antes de levar à peça** — prefira ensinar a tese e o dispositivo a arriscar um número de acórdão.

- **Súmula 397/STF** — "O poder de polícia da Câmara dos Deputados e do Senado Federal, em caso de crime cometido nas suas dependências, compreende, consoante o regimento, a prisão em flagrante do acusado e a realização do inquérito." Citada na spec **por afinidade temática** com a instauração; **avaliar pertinência ao caso concreto** — não forçar aplicação. **[VERIFICAR pertinência e teor atual]**
- **Orientação dominante STF/STJ sobre denúncia anônima e VPI** — a jurisprudência admite a denúncia anônima como *notitia criminis* **desde que precedida de verificação preliminar** que confirme a verossimilhança, vedada a instauração/cautelar fundada **exclusivamente** no anonimato. Há precedentes conhecidos do **Pleno do STF** e da **6ª/5ª Turmas do STJ** nesse sentido. **[NÃO VERIFICADO — não citar número de HC/RHC/Inq sem conferir em `jurisprudencia-stj-stf`]**
- **Teoria da fonte independente e do descobrimento inevitável** — art. 157, §§1º e 2º, CPP (dispositivo legal, pode citar); os **precedentes** que a aplicam devem ser conferidos caso a caso. **[VERIFICAR precedentes específicos]**

> **Regra de ouro anti-alucinação:** nenhum número de HC/RHC/REsp/Inq/Tema/Informativo entra na peça sem passar por `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar** — a fundamentação pela **tese + dispositivo** já sustenta a peça.

## Como o diagnóstico vira peça

O produto desta skill é o **insumo analítico** que alimenta, conforme o caso:
- **Habeas corpus** para **trancamento do IP** por falta de justa causa (origem frágil / ausência de VPI).
- **Alegações de nulidade / pedido de desentranhamento** de provas derivadas da notícia ilícita (art. 157).
- **Pedido de arquivamento** dirigido ao MP (ou manifestação em resposta), quando a base é insuficiente.
- **Resposta à acusação** (art. 396-A CPP), quando a fragilidade da origem repercute na justa causa da própria ação.

Ao redigir qualquer dessas peças, aplique a skill correspondente (ex.: `habeas-corpus`, `resposta-a-acusacao`) e o padrão `redacao-persuasiva-criminal`.

## Erros comuns (anti-padrões)

- **Atacar o mérito antes da origem** — deixar passar o vício da deflagração e brigar só com a prova final.
- **Confundir notícia-crime com denúncia do MP** — são fases e requisitos distintos.
- **Aceitar denúncia anônima como justa causa** sem exigir a demonstração documental da VPI.
- **Ignorar o nexo de derivação** — apontar a ilicitude da origem mas não mapear **quais** provas dela decorreram (sem nexo, não há contaminação a declarar).
- **Esquecer a condição de procedibilidade** em ação condicionada/privada.
- **Citar Súmula 397/STF ou qualquer precedente de memória**, sem conferir pertinência e vigência.
- **Tratar "faro policial" como fato objetivo** — suspeita difusa não é notícia-crime suficiente.

## Checklist final

- [ ] **Origem** da notícia identificada e classificada (direta / *delatio* identificada / requisição / flagrante / **anônima**)?
- [ ] **Forma e registro** da notícia constam dos autos (rastreabilidade)?
- [ ] **Credibilidade** do noticiante aferida (interesse, animosidade, contradições)?
- [ ] **Suficiência** — descreve fato determinado com circunstâncias mínimas e individualização?
- [ ] Sendo **anônima**, houve **VPI** documentada **antes** de instaurar/representar por cautelar?
- [ ] **Licitude da obtenção** da notícia e de seus anexos verificada (art. 157)?
- [ ] **Titularidade da ação** conferida (representação/queixa quando exigidas)?
- [ ] **Nexo de derivação** com as diligências posteriores mapeado?
- [ ] **Tese** definida (trancamento / nulidade / exclusão / arquivamento) e peça-destino escolhida?
- [ ] **Súmulas e precedentes** conferidos via `jurisprudencia-stj-stf` — nada citado de memória?
- [ ] **Revisão humana** do advogado responsável agendada antes de qualquer protocolo?

## Nota de conformidade

Este material é **rascunho técnico de apoio**, hipótese a confirmar — **não substitui** o exame dos autos concretos nem o juízo do(a) advogado(a) responsável, a quem cabe a decisão final e a assinatura da peça (**EAOAB e Código de Ética e Disciplina da OAB; Provimento 205/2021 do CFOAB** sobre publicidade/atuação; conflito de interesses do **art. 17 do EAOAB** checado na triagem). Nenhuma citação jurisprudencial vai à peça sem passar pelo **Citation Gate** (`verificacao-citacoes` / `jurisprudencia-stj-stf`). **Revisão humana obrigatória antes de protocolar.**

**Padrão de redação:** ao converter este diagnóstico em peça, aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
