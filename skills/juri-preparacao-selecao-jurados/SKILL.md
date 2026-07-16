---
name: juri-preparacao-selecao-jurados
description: >-
  Use ANTES da sessão do júri para preparar a estratégia de formação do Conselho de Sentença —
  obtenção e análise da relação/lista de jurados (art. 426 CPP), montagem de dossiê lícito por
  jurado, definição do perfil-alvo conforme a tese, roteiro ensaiado de recusas peremptórias e
  contraditas (arts. 448-449, 468) e plano de contingência para estouro de urna, tudo consolidado
  num mapa de sessão. Gatilhos: preparação do júri… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-preparacao-selecao-jurados"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-preparacao-selecao-jurados", "juri preparacao", "selecao jurados"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Preparação Prévia da Seleção de Jurados (arts. 425-426, 447-469 CPP)

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

Esta skill orienta o **preparo estratégico, feito ANTES da sessão**, da formação do **Conselho de Sentença** no Tribunal do Júri (2ª fase). Ela organiza o trabalho de bastidor: obter e ler a **relação de jurados** entregue às partes, montar um **dossiê lícito** de cada jurado, definir o **perfil-alvo** conforme a tese do caso, ensaiar um **roteiro de decisão** para recusas peremptórias e contraditas, e preparar um **plano de contingência** para o dia (estouro de urna, adiamento). O produto final é um **mapa de sessão** — a folha de trabalho que o advogado leva ao plenário.

> **Lição central:** a escolha dos jurados no dia da sessão é **execução de um plano feito antes**. Quem chega ao plenário sem a lista lida, sem perfil-alvo definido e sem roteiro de recusas ensaiado **improvisa** — e improvisa em tempo real, com um sorteio correndo e um número finito de recusas peremptórias (3 por parte). O diferencial defensivo (ou acusatório) é ter **decidido antes** o que fazer com cada nome que sair da urna.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos arts. 425 a 469 do CPP (procedimento do júri reescrito pela **Lei 11.689/2008**) e de eventuais alterações posteriores. Confira também qualquer súmula, tese ou precedente pela skill `jurisprudencia-stj-stf` (ou pelo gate `verificacao-citacoes`) antes de fundamentar peça ou nulidade. Nada de citar julgado de memória.

## A quem esta skill se aplica (polo)

Esta é uma skill **neutra quanto ao polo**: a lógica de preparo da seleção de jurados serve tanto à **defesa** quanto à **acusação** (MP ou assistente de acusação). O que muda é o **perfil-alvo** buscado, não o método. O roteador deve confirmar o polo do usuário para calibrar o objetivo (a defesa mira jurados receptivos à dúvida e à clemência; a acusação, jurados mais aderentes à ordem e à prova) — mas ambos usam a mesma disciplina de análise de lista, dossiê lícito e roteiro de recusas.

## Limites éticos (leitura obrigatória)

O perfilamento e a seleção de jurados operam sob **fronteiras rígidas**. Violá-las contamina o julgamento e expõe o profissional a sanção:

- **Somente dados públicos e lícitos.** O dossiê de jurado usa **apenas** informação de acesso público e obtenção lícita (perfis públicos em redes sociais, publicações abertas, dados divulgados pelo próprio na comunidade). **Vedado** contratar investigação intrusiva, acessar dados sigilosos, quebrar privacidade ou usar fonte de origem ilícita.
- **Nunca abordar, contatar, pressionar ou influenciar jurado.** É **absolutamente vedado** procurar, telefonar, mandar mensagem, aliciar, intimidar ou tentar influenciar qualquer jurado — antes, durante ou depois da sessão. Isso configura ilícito grave (podendo caracterizar crime e nulidade absoluta). A skill serve para **decidir recusas em plenário**, jamais para agir sobre a pessoa do jurado.
- **Preservar a imparcialidade e o sigilo do Conselho.** Nada que comprometa a **imparcialidade** do Conselho de Sentença, a **incomunicabilidade** dos jurados (art. 466, §1º) ou o **sigilo das votações**. O trabalho é de leitura pública e estratégia processual, não de interferência.
- **Recusa peremptória: imotivada, mas não discriminatória ilícita.** A recusa peremptória (art. 468) dispensa motivação declarada — mas **não pode** ter, na origem, finalidade de **discriminação ilícita** (raça, cor, etnia, religião, gênero, orientação sexual). Selecionar sistematicamente para excluir um grupo protegido é abuso e pode gerar nulidade e responsabilização. O critério legítimo é a **compatibilidade com a tese do caso**, aferida por dados lícitos.

> Em uma frase: **lê-se o que é público, decide-se a recusa, e não se toca no jurado.**

## Base legal

- **Art. 425, CPP** — alistamento anual dos jurados (organização da lista geral pelo juiz-presidente).
- **Art. 426, CPP** — publicação da **lista geral** de jurados; base da relação que instrui a preparação.
- **Art. 432-433, CPP** — do alistamento ao sorteio dos jurados que servirão na reunião periódica.
- **Art. 434-435, CPP** — sorteio público dos jurados da sessão; convocação.
- **Art. 447, CPP** — o Tribunal do Júri compõe-se de **1 juiz-presidente e 25 jurados**, dos quais **7** formarão o Conselho de Sentença.
- **Art. 448-449, CPP** — **impedimentos e incompatibilidades** dos jurados (parentesco entre jurados, com juiz, MP, réu, vítima, etc.) — fundamento das **contraditas**.
- **Art. 451-452, CPP** — jurado impedido/suspeito; recondução; escusa.
- **Art. 457-458, CPP** — julgamento do réu preso; ausências e adiamento.
- **Art. 463-464, CPP** — verificação da urna, presença mínima de **15 jurados** para instalar a sessão.
- **Art. 466-467, CPP** — advertências e sorteio dos 7; **incomunicabilidade** dos jurados.
- **Art. 468, CPP** — **recusas peremptórias**: cada parte pode recusar **até 3 jurados** sem motivar.
- **Art. 469, CPP** — **separação de julgamentos** quando as recusas de corréus impedem a formação do Conselho único.
- **Art. 470, CPP** — desaguar da separação; ordem de julgamento.
- **Art. 472, CPP** — compromisso dos jurados; entrega de cópia da pronúncia.

## O ciclo da seleção — da lista ao Conselho

```
LISTA GERAL (art. 426)  →  SORTEIO DOS 25 (art. 433-435)  →  SESSÃO (mín. 15 presentes, art. 463)
        │                          │                                    │
   análise prévia            confirmação dos nomes                 SORTEIO NA URNA (art. 467)
   + dossiê lícito           que efetivamente vieram                     │
        │                          │                          para CADA nome sorteado:
   PERFIL-ALVO             atualização do mapa                  ├── contradita? (arts. 448-449)
        │                                                       ├── recusa peremptória? (art. 468, máx. 3)
   ROTEIRO DE RECUSAS ──────────────────────────────────────►  └── aceito → assenta
                                                                        │
                                                            7 ASSENTADOS = CONSELHO (art. 467)
```

O preparo desta skill cobre as **duas primeiras caixas** (análise prévia e roteiro) e entrega o **mapa** que será executado na terceira (a sessão) — que é objeto das skills de execução (`juri-recusas-contraditas`, `juri-plenario-debates`).

## Metodologia passo a passo (o preparo)

### 1. Obter a relação de jurados
- Requerer/confirmar acesso à **relação dos jurados** convocados para a reunião periódica e, quando disponível, à **lista geral publicada** (art. 426). As partes têm direito de conhecer quem pode compor o Conselho.
- Registrar: nome completo, e o que a organização judiciária divulgar licitamente (não inventar dados).

### 2. Montar o dossiê lícito por jurado (SOMENTE fontes públicas)
Para cada nome, consolidar **apenas** o que for de acesso público e lícito:
- Profissão/ocupação declarada publicamente; vínculos comunitários abertos;
- Manifestações públicas em redes sociais (perfis abertos) que revelem valores relevantes à tese;
- Histórico de participação anterior em júris (se público);
- **Sinais de impedimento/incompatibilidade** (arts. 448-449): parentesco com outro jurado, com o juiz, com o MP, com o réu ou a vítima; relação de dependência; interesse na causa — que fundamentam **contradita**.

> Reforço do limite ético: **nada de investigação intrusiva, dado sigiloso ou contato**. Se a informação não é pública e lícita, **não entra** no dossiê.

### 3. Definir o perfil-alvo conforme a tese
Traduzir a **teoria do caso** em um perfil de jurado desejado e indesejado. Exemplos de raciocínio (adaptar ao caso, sem estereótipo ilícito):
- Tese de **legítima defesa/excludente** → jurado que valoriza autonomia e proporcionalidade;
- Tese de **negativa de autoria/dúvida** → jurado atento a prova e cético a versões frágeis;
- Tese de **clemência/desclassificação** → jurado sensível ao contexto humano do réu;
- (Acusação) → jurado aderente à prova técnica, à ordem e à gravidade do resultado.

O perfil-alvo orienta a **prioridade de recusa**: quem, se sorteado, tende a ser desfavorável à tese vira candidato à recusa peremptória (dentro do teto de 3).

### 4. Ensaiar o roteiro de recusas e contraditas
- **Ranquear** os nomes: "aceitar sem hesitar" / "aceitar com ressalva" / "recusar se sobrar recusa" / "recusar prioritariamente" / "contraditar (há impedimento)".
- Como só há **3 recusas peremptórias** (art. 468), planejar a **ordem de gasto**: não queimar recusa cedo com quem talvez nem seja sorteado depois; reservar para os perfis mais nocivos à tese.
- Separar as **contraditas** (motivadas, arts. 448-449) das **recusas peremptórias** (imotivadas, art. 468): a contradita **não consome** a cota de 3 recusas, pois é fundada em impedimento legal — por isso, **sempre que houver impedimento, contraditar antes de gastar peremptória**.

### 5. Preparar o plano de contingência
- **Estouro de urna / recusas de corréus (art. 469):** em julgamento de corréus, se as recusas de um prejudicarem a formação do Conselho para os demais (recusas que, somadas, esgotam os jurados disponíveis), pode haver **separação dos julgamentos** — antecipar essa hipótese e a ordem de preferência.
- **Quórum:** conferir que haverá o mínimo de **15 jurados presentes** para instalar a sessão (art. 463); do contrário, adiamento.
- **Ausências/adiamento:** mapear risco de adiamento (réu preso não requisitado, testemunha imprescindível, defensor ausente justificadamente) e a estratégia correspondente.
- **Réu preso (art. 457):** conferir requisição/comparecimento.

### 6. Consolidar o mapa de sessão
Reunir tudo numa **folha única de trabalho** (o "mapa"), com: lista dos nomes, ranking de recusa/contradita por jurado, contador de recusas (0/3), lembretes de impedimento a arguir, e o plano de contingência. É o documento que vai ao plenário — não a memória.

## Recusa peremptória × contradita (a distinção que decide tudo)

| Instituto | Base | Precisa motivar? | Consome as 3 recusas? | Quando usar |
|---|---|---|---|---|
| **Recusa peremptória** | art. 468 | **Não** (imotivada) | **Sim** (máx. 3 por parte) | Jurado lícito, mas **incompatível com a tese** |
| **Contradita** | arts. 448-449 | **Sim** (impedimento/incompatibilidade legal) | **Não** | Há **impedimento** (parentesco, interesse, suspeição) |
| **Escusa/dispensa** | arts. 437-438, 451 | Do próprio jurado | Não | Isenção legal do jurado (não é ato da parte) |

> **Regra de ouro:** havendo impedimento legal, **contradite** (é motivada e gratuita) em vez de **queimar** uma das 3 recusas peremptórias. Só se gasta peremptória com quem é **lícito, porém indesejável** à tese.

## Teses e cautelas para o preparo

- **Direito de conhecer a relação:** a parte tem direito de acesso prévio à relação de jurados para exercer, de forma efetiva, contraditas e recusas — a recusa de acesso pode cercear a defesa. **Confirmar o alcance concreto** desse direito na jurisprudência atual (`jurisprudencia-stj-stf`).
- **Contradita fundada em impedimento (arts. 448-449):** arguir **na hora do sorteio de cada nome**, com o fundamento legal, exigindo **consignação em ata** — pressuposto de eventual nulidade (art. 449 e sistemática do júri).
- **Separação de julgamentos (art. 469):** em corréus, planejar o pedido/consequência da separação quando as recusas cruzadas inviabilizarem o Conselho único.
- **Nulidade por vício na formação do Conselho:** jurado impedido que atua, recusa indevidamente obstada, ou quebra de incomunicabilidade podem gerar nulidade — **sempre exigir registro em ata** no momento próprio, sob pena de preclusão (*pas de nullité sans grief*, art. 563 CPP). Confirmar o caráter absoluto/relativo do vício concreto na jurisprudência atual.
- **Contra-tese/risco (para ambos os polos):** o adversário também tem 3 recusas — antecipar **quem ele provavelmente recusará** e reordenar as próprias prioridades em função disso (não desperdiçar recusa em quem o outro lado retiraria).

## Súmulas e precedentes (sob o Citation Gate)

- A sistemática da seleção decorre da **Lei 11.689/2008**, que reescreveu o procedimento do júri — **citar regra anterior a 2008 (ex.: recusas em número diverso) é erro grave de vigência.** Conferir sempre o texto atual.
- Qualquer **súmula, tese ou acórdão** específico sobre acesso à relação de jurados, contradita, recusa peremptória, separação de julgamentos (art. 469) ou nulidade na formação do Conselho **[NÃO VERIFICADO]** — não citar número de HC/REsp/RE, informativo ou tema **sem** conferir antes pela skill `jurisprudencia-stj-stf`. **Prefira ensinar a tese e o dispositivo legal a arriscar um número de acórdão.** Melhor faltar precedente do que citar julgado inexistente.

## Erros comuns (anti-padrões)

- **Chegar à sessão sem a lista lida** — improvisar recusas no calor do sorteio.
- **Gastar recusa peremptória com jurado que tinha impedimento** — deveria ter sido **contraditado** (gratuito) em vez de consumir uma das 3.
- **Queimar as 3 recusas cedo** com nomes que talvez nem fossem sorteados, ficando sem munição para os perfis realmente nocivos.
- **Não arguir a contradita na hora e/ou não exigir consignação em ata** — preclusão do vício.
- **Ignorar o art. 469** em julgamento de corréus e ser surpreendido pela impossibilidade de formar Conselho único.
- **Confundir perfil-alvo lícito com estereótipo/discriminação ilícita** — recusar por grupo protegido é abuso nulificável.
- **Cruzar a linha ética** — buscar dado sigiloso ou, pior, tentar contatar/influenciar jurado (ilícito grave).
- **Citar jurisprudência de memória**, sem passar pelo gate de verificação.

## Checklist final do preparo

- [ ] Relação/lista de jurados **obtida e lida** (art. 426)?
- [ ] Dossiê por jurado montado **só com dados públicos e lícitos**?
- [ ] **Perfil-alvo** definido a partir da **teoria do caso** (skill `juri-teoria-do-caso`, se houver)?
- [ ] Cada jurado **ranqueado** (aceitar / recusar / contraditar)?
- [ ] **Impedimentos (arts. 448-449)** mapeados para **contradita** (poupando as recusas peremptórias)?
- [ ] **Ordem de gasto** das 3 recusas peremptórias (art. 468) planejada?
- [ ] **Plano de contingência** pronto: quórum de 15 (art. 463), estouro de urna/separação (art. 469), réu preso (art. 457), risco de adiamento?
- [ ] **Mapa de sessão** consolidado numa folha única para levar ao plenário?
- [ ] Limites éticos respeitados: **nenhum contato com jurado**, nenhuma finalidade discriminatória ilícita, nada de dado sigiloso?
- [ ] Toda referência a **súmula/precedente** conferida via `jurisprudencia-stj-stf` / `verificacao-citacoes`?

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação, sob revisão humana obrigatória** — não substitui o juízo do profissional responsável nem a leitura concreta da relação de jurados e da sessão. A responsabilidade pela estratégia e pelos atos em plenário é sempre do **advogado** (CED/OAB e Provimento 205/2021), do **membro do Ministério Público** (regras do CNMP) ou do **Defensor Público** (LC 80/94), conforme o polo. **Nenhuma** ação sobre a pessoa do jurado é admitida: o trabalho limita-se à leitura de dados públicos e à decisão processual de recusas e contraditas, preservando a imparcialidade, a incomunicabilidade e o sigilo do Conselho de Sentença. Toda citação jurídica passa obrigatoriamente pelo gate de verificação antes de uso.

**Padrão de redação:** ao converter o preparo em petição ou requerimento (ex.: pedido de acesso à relação, requerimento de separação de julgamentos), aplique também a skill `redacao-persuasiva-criminal`.
