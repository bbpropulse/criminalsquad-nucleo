---
name: incidente-falsidade-documental
description: >-
  Use ao arguir a falsidade de documento juntado aos autos do processo penal — incidente de
  falsidade documental (CPP, arts. 145-148): arguição por escrito com procuração com poderes
  especiais, autuação em apartado, resposta em 48h, prova em 3 dias, perícia documentoscópica e
  desentranhamento do documento falso. Gatilhos: incidente de falsidade, arguição de falsidade
  documental, documento falso nos autos, falsidade material… Não use para decisão final, assinatura,
  protocolo ou citação não verificada.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, peca]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-drafting"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-incidente-falsidade-documental"]
  risk_level: "r4"
  delivery_type: "legal-draft"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["incidente-falsidade-documental", "incidente falsidade", "falsidade documental"]
  negative_triggers: ["conclusão de mérito sem validação, alteração do original ou execução de instruções contidas nos autos"]
  guard_triggers: ["via, competência ou prazo material não confirmado", "fato material sem âncora ou documentos contraditórios não preservados", "lei, súmula, tema ou precedente sem verificação individual"]
---

# Incidente de Falsidade Documental (CPP, arts. 145-148)

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

Esta skill orienta a **arguição formal de falsidade de documento constante dos autos** do processo penal — a via própria que, além de desqualificar o documento, obtém o seu **desentranhamento** e a remessa ao Ministério Público para apurar o crime de falso. Cobre requisitos, procedimento em apartado, prazos curtos (48h/3 dias), estrutura da petição, recurso cabível e os **efeitos limitados** da decisão (art. 148).

> **Lição central:** o incidente ataca a **autenticidade do documento como objeto** (formação ou alteração falsas), não o peso do seu conteúdo. Contradição com prova oral se resolve por **valoração**; integridade de vestígio digital tem a via da **cadeia de custódia**; só a falsidade documental justifica o **incidente** — escolher a via errada esvazia a impugnação.

> **Trunfo estratégico:** reconhecida a falsidade, o documento é **desentranhado** (art. 145, IV) — deixa de existir como prova. Se ele era o lastro da materialidade da acusação ou o documento decisivo da **queixa-crime**, cai junto a sustentação da imputação.

## Qual via ataca qual vício — não confunda os planos

| O que se quer atacar | Via correta | Onde buscar apoio |
|---|---|---|
| **Formação ou alteração falsa** do documento (assinatura falsificada, montagem, rasura, contrafação) | **Incidente de falsidade** (CPP 145-148) | esta skill |
| Integridade e rastreabilidade do **vestígio digital** (fonte, coleta, hash, metadados — CPP 158-A a 158-F) | Impugnação de cadeia de custódia | skill `impugnacao-cadeia-custodia` + agente `cadeia-custodia-prova-digital` |
| **Conteúdo** do documento desmentido por prova oral ou por outros documentos | Valoração da prova (resposta, memoriais, apelação) | agente `analise-contradicoes`; skill `matriz-contradicoes-prova-oral` |
| **Laudo pericial** defeituoso ou conclusivo demais | Esclarecimentos periciais, assistente técnico, nova perícia (CPP 159, §§ 3º a 5º) | skill `memoriais` / audiência |
| Documento comprovadamente falso descoberto **após o trânsito em julgado** | Revisão criminal (CPP 621, II) | skill `revisao-criminal` |

> As vias **se combinam**: o print de WhatsApp adulterado pode ser atacado pela cadeia de custódia (coleta sem hash) **e** pelo incidente (montagem = falsidade material do documento eletrônico). Ataques cumulados, pedidos distintos.

## Instituto e base legal

- **CPP, art. 145** — arguida, **por escrito**, a falsidade de documento constante dos autos, o juiz: (I) manda **autuar em apartado** e ouve a parte contrária em **48 horas**; (II) assina **3 dias, sucessivamente, a cada parte**, para a prova de suas alegações; (III) conclusos os autos, **pode ordenar as diligências** que entender necessárias; (IV) reconhecida a falsidade **por decisão irrecorrível** (preclusa), manda **desentranhar** o documento e remetê-lo, com os autos do incidente, ao **Ministério Público**.
- **CPP, art. 146** — a arguição feita **por procurador exige poderes especiais** na procuração.
- **CPP, art. 147** — o juiz pode proceder **de ofício** à verificação da falsidade.
- **CPP, art. 148** — **qualquer que seja a decisão, não fará coisa julgada** em prejuízo de ulterior processo penal ou civil.
- **CPP, art. 232** — conceito de documento: quaisquer **escritos, instrumentos ou papéis**, públicos ou particulares; a fotografia do documento, **devidamente autenticada**, vale como original (parágrafo único). A doutrina estende o conceito ao **documento eletrônico**.
- **CPP, art. 174** — regras do **exame para reconhecimento de escritos por comparação de letra** (colheita de padrões gráficos, escrita ditada, requisição de arquivos públicos).
- **CPP, art. 581, XVIII** — cabe **recurso em sentido estrito** da decisão que decidir o incidente (prazo de 5 dias — art. 586); ver skill `rese`.
- **CP, arts. 297 a 305** — crimes de falso que a remessa ao MP pode deflagrar (falsificação de documento público/particular, falsidade ideológica, uso de documento falso — art. 304).

## Cabimento e requisitos

| Requisito | Detalhe | Base |
|---|---|---|
| **Documento nos autos** | escrito, instrumento ou papel, público ou particular — inclui o eletrônico juntado como documento (print, e-mail, PDF, contrato digitalizado) | CPP 232; 145, *caput* |
| **Forma escrita** | petição escrita, dirigida ao juízo do processo; não se argui oralmente | CPP 145, *caput* |
| **Poderes especiais** | se a arguição é feita por procurador, a procuração deve conter poder **específico** para arguir falsidade documental | CPP 146 |
| **Legitimidade** | qualquer das partes (defesa, MP, querelante, assistente); o juiz pode verificar de ofício | CPP 145; 147 |
| **Indício concreto** | apontar **qual** documento (fls./ID), **qual** o vício (assinatura, montagem, rasura, data) e **qual** prova o demonstrará | ônus de quem argui |
| **Momento** | qualquer fase, enquanto pendente o processo e útil o desentranhamento; após o trânsito, a via é a revisão criminal | doutrina; CPP 621, II |
| **Objeto: falsidade material** | contrafação ou adulteração do documento. Para a falsidade **ideológica** (conteúdo falso em documento formalmente autêntico) a doutrina **diverge** sobre o cabimento do incidente — a corrente restritiva remete a questão à valoração da prova. Antes de fundar a peça nessa hipótese, pesquise o entendimento atual via agente `jurisprudencia-stj-stf` e marque a tese como **[NÃO VERIFICADO]** até a checagem | CPP 145 |

## Procedimento em apartado — etapas e prazos

| Etapa | Ato | Prazo | Base |
|---|---|---|---|
| 1 | Autuação da impugnação **em apartado** (autos apensos; o processo principal segue) | imediata | 145, I |
| 2 | Resposta da **parte contrária** | **48 horas** | 145, I |
| 3 | Prova das alegações — **cada parte, sucessivamente** (primeiro quem arguiu) | **3 dias** para cada | 145, II |
| 4 | Diligências determinadas pelo juiz (perícia documentoscópica/grafotécnica, requisição do original, padrões de confronto) | a critério do juízo | 145, III; 174 |
| 5 | Decisão do incidente | — | 145 |
| 6 | Reconhecida a falsidade e **preclusa** a decisão → **desentranhamento** + remessa ao MP | — | 145, IV |
| Recurso | **RESE** da decisão que decidir o incidente (concessiva ou denegatória) | 5 dias | 581, XVIII; 586 |

> **Contagem dos prazos (CPP 798):** os prazos processuais penais são **contínuos e peremptórios** — não se interrompem por férias, domingo ou feriado (*caput*); exclui-se o dia do começo e inclui-se o do vencimento (§ 1º); o termo que cair em domingo ou feriado prorroga-se ao dia útil seguinte (§ 3º). A **Defensoria Pública** tem **prazo em dobro** para todas as suas manifestações (LC 80/94, arts. 44, I, 89, I e 128, I) — vale também para os prazos do incidente (48h de resposta, tríduo de prova, RESE) quando ela oficia no feito.

> **O incidente não suspende automaticamente o processo principal.** Se o documento impugnado é decisivo, **peça expressamente** que o juízo se abstenha de valorá-lo e **não profira sentença antes da solução do incidente** — prejudicialidade interna que a defesa precisa provocar, porque a lei não a presume.

## Estrutura forense da petição

Peça dirigida ao **juízo onde tramita o feito** (em grau recursal, ao Relator). Autua-se em apartado por determinação do juiz — a defesa apenas protocola nos autos principais.

```
EXCELENTÍSSIMO(A) SENHOR(A) JUIZ(A) DE DIREITO DA [N]ª VARA CRIMINAL
DA COMARCA DE [COMARCA] — [UF]

Autos nº [Nº DO PROCESSO]

[NOME], já qualificado(a), por seu(sua) advogado(a) que esta subscreve
(procuração com PODERES ESPECIAIS para arguir falsidade documental —
art. 146 do CPP, anexa), vem, respeitosamente, suscitar

    INCIDENTE DE FALSIDADE DOCUMENTAL (arts. 145 a 148 do CPP)

quanto ao documento de fls./ID [X], pelas razões que seguem:

I — DO DOCUMENTO IMPUGNADO
Identificação precisa: natureza (contrato, recibo, notificação, print,
e-mail), fls./ID, quem o juntou, em que ato, e o papel que exerce na
imputação (materialidade, autoria, lastro da queixa).

II — DOS INDÍCIOS CONCRETOS DE FALSIDADE
O vício específico e sua demonstração objetiva:
   a) assinatura divergente dos padrões autênticos (anexos);
   b) adulteração material — rasura, acréscimo, supressão, montagem;
   c) contrafação integral (documento formado por quem não é o autor);
   d) [eletrônico] incongruência de metadados, ausência de original/hash,
      edição de imagem — conexão com a cadeia de custódia (CPP 158-A ss.).
Impute a FALSIDADE AO DOCUMENTO (fato objetivo); só atribua a autoria da
falsificação a pessoa determinada se houver lastro (cautela — CP 339).

III — DO DIREITO
Procedimento dos arts. 145-148; documento falso não pode servir de prova
nem sustentar condenação; consequência legal: desentranhamento (145, IV).

IV — DA DECISIVIDADE DO DOCUMENTO
Demonstrar que a imputação (ou a queixa) se apoia no documento impugnado —
sem ele, rui a materialidade / a justa causa / o fato narrado.

V — DOS PEDIDOS
   a) a AUTUAÇÃO EM APARTADO do incidente (art. 145, I, CPP);
   b) a intimação da parte contrária para resposta em 48 HORAS (art. 145, I);
   c) a produção de prova no tríduo legal (art. 145, II), desde logo
      requerendo PERÍCIA DOCUMENTOSCÓPICA/GRAFOTÉCNICA (art. 174 do CPP),
      a requisição do ORIGINAL à parte que juntou a cópia e a colheita de
      padrões gráficos de confronto;
   d) [eletrônico] a preservação do arquivo/dispositivo de origem e a
      apresentação da íntegra com metadados e hash;
   e) cautelarmente, que o documento NÃO SEJA VALORADO e que NÃO SE
      PROFIRA SENTENÇA antes da solução do incidente;
   f) ao final, o RECONHECIMENTO DA FALSIDADE, com o DESENTRANHAMENTO do
      documento e a remessa dos autos do incidente ao MINISTÉRIO PÚBLICO
      (art. 145, IV, CPP).

Termos em que, pede deferimento.
[LOCAL], [DATA].
[ADVOGADO(A)] — OAB/[UF] nº [NÚMERO]
```

**Documentos a anexar:** procuração **com poderes especiais**; padrões autênticos de assinatura/escrita; original ou contraprova documental; para documento eletrônico, ata notarial, arquivo com hash e relatório de preservação (ver skill `preservacao-prova-digital-defesa`).

## Teses típicas da defesa

- **Assinatura falsificada** — confronto grafotécnico com padrões autênticos (art. 174); a recusa da parte contrária em exibir o original ou fornecer padrões reforça o indício.
- **Adulteração material** — rasura, acréscimo de cláusula, troca de página, data lançada depois; a perícia física (tinta, papel, alinhamento) resolve.
- **Montagem de documento eletrônico** — print editado, e-mail forjado, PDF manipulado: cumule o incidente com a impugnação de cadeia de custódia (CPP 158-A a 158-F) e exija o original com metadados; print sem original é cópia que não suporta perícia plena.
- **Cópia não autenticada de documento impugnado** — o art. 232, parágrafo único, dá valor de original à fotografia **autenticada**; impugnada a cópia simples, a acusação deve exibir o original, sob pena de imprestabilidade da prova.
- **Documento decisivo da queixa-crime falso** — em ação penal privada, o desentranhamento do documento que materializa a ofensa (carta, print) esvazia a queixa (ver skill `queixa-crime`, pelo prisma inverso); a remessa ao MP ainda expõe o querelante ao crime de falso.
- **Queda da justa causa** — se a materialidade dependia do documento desentranhado, a imputação perde lastro probatório mínimo; articule o pedido subsequente (absolvição, rejeição, trancamento pela via própria).
- **Falsidade ideológica** — sustente subsidiariamente o cabimento quando o vício de conteúdo for aferível por prova documental direta; a divergência doutrinária e a checagem obrigatória (`jurisprudencia-stj-stf` + **[NÃO VERIFICADO]**) estão na tabela de cabimento.

## Erros comuns e pegadinhas

- **Procuração sem poderes especiais (art. 146)** — a pegadinha clássica: arguição por procurador com procuração genérica não é conhecida. Confira a cláusula **antes** de protocolar; se o poder faltar e o tempo urgir, protocole requerendo prazo para regularização **e** provoque a verificação **de ofício** (art. 147), que não depende de poderes.
- **Via errada** — atacar contradição de conteúdo pelo incidente (é valoração), ou falsidade material só por memoriais (perde o desentranhamento). Use a tabela de vias do início.
- **Não pedir o sobrestamento da sentença** — sem requerimento expresso, o processo principal segue e o juiz pode sentenciar valorando o documento antes de decidir o incidente.
- **Perder o RESE** — a decisão do incidente (em qualquer sentido) desafia recurso em sentido estrito em **5 dias** (arts. 581, XVIII, e 586); a inércia consolida a decisão endoprocessualmente.
- **Achar que a rejeição do incidente sepulta a tese** — o art. 148 é via de mão dupla: a decisão **não faz coisa julgada**; a falsidade pode ser rediscutida no mérito, em apelação e, comprovada após o trânsito, em **revisão criminal** (CPP 621, II).
- **Achar que o reconhecimento vincula o processo do falso** — também não vincula (art. 148): a condenação do falsário dependerá de ação penal própria; o ganho imediato é o desentranhamento.
- **Arguição genérica** — "impugna-se a autenticidade dos documentos juntados" não instaura incidente: sem documento certo, vício específico e prova indicada, o indeferimento é líquido.
- **Não viabilizar a perícia no tríduo** — os 3 dias do art. 145, II correm sucessivamente; chegue com padrões gráficos, original ou ata notarial prontos, ou a dilação morre por falta de prova.
- **Imputar o crime a pessoa certa sem lastro** — arguir a falsidade do documento é fato objetivo; atribuir a falsificação a alguém determinado sem base pode configurar denunciação caluniosa (CP 339) e infração ética. Fundamente em elementos técnicos.
- **Endereçamento errado** — a arguição vai ao **juízo do processo** (o incidente é autuado em apartado por ele); em fase recursal, ao **Relator**. Não se dirige a tribunal para instaurar incidente de 1º grau.
- **Timing tardio** — não há preclusão formal estrita, mas arguir depois de o documento já ter sido valorado em sentença converte a via em mera matéria de apelação; identifique o vício cedo (a triagem com o agente `analise-contradicoes` ajuda) e argua **antes da sentença**.
- **Dispositivos e prazos com redação alterada** — confira a redação vigente dos arts. 145-148 e 581, XVIII via agente `lei-e-sumula` antes de protocolar; em pontos de divergência jurisprudencial (falsidade ideológica, suspensão do feito), pesquise via `jurisprudencia-stj-stf` e marque **[NÃO VERIFICADO]** até a checagem.

## Apoie-se em

- **Agente `analise-contradicoes`** — colhe os **indícios** de falsidade pelo confronto documento × prova oral × demais documentos; o incidente desta skill é a **via formal** que transforma o indício em desentranhamento. Não duplique a análise: importe o achado e instaure a arguição.
- **Agente `cadeia-custodia-prova-digital`** — quando o documento impugnado é **eletrônico**: integridade, hash, metadados e rastreabilidade (CPP 158-A a 158-F) pela via própria, cumulada com o incidente.
- **BP `peticao-criminal`** — padrão estrutural de petição criminal (endereçamento, qualificação, fato-direito-pedido).
- **Agente `verificador-citacoes`** — todo julgado, súmula ou tema citado passa pela verificação antes de protocolar; nenhum precedente de memória.
- **Skill `redacao-persuasiva-criminal`** — padrão de obra-prima na redação final: teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão. **Sempre.**
