---
name: juri-perfilamento-jurados
description: >-
  Use ao preparar e conduzir a leitura estratégica do corpo de jurados na formação do Conselho de
  Sentença (sorteio da 2ª fase do júri) — análise prévia da relação/lista de jurados, sinais
  observáveis lícitos, matriz perfil favorável × adverso à tese e priorização de quem recusar
  (recusa peremptória e imotivada, art. 468 CPP), dentro de limites éticos estritos. Gatilhos:
  perfilamento de jurados, escolha de jurados, voir dire… Não use para conclusão definitiva sem
  autos suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, analise, juri]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-juri-perfilamento-jurados"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["juri-perfilamento-jurados", "juri perfilamento", "perfilamento jurados"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Perfilamento e Leitura dos Jurados (arts. 425-426 e 462-472 do CPP; art. 5º, XXXVIII, CF)

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

Esta skill orienta a **leitura estratégica do corpo de jurados** na **formação do Conselho de Sentença**: como analisar a relação/lista de jurados antes da sessão, o que observar durante o sorteio das cédulas, como cruzar cada perfil com a **tese** do caso e como transformar impressão em **decisão de recusa** (peremptória e imotivada) ou **contradita** (motivada). É o "voir dire à brasileira" — muito mais restrito que o americano: no Brasil **não há interrogatório dos jurados**, e a recusa peremptória é **imotivada e limitada a três por parte** (art. 468 CPP).

> **Lição central:** a escolha de jurados é decidida em **segundos** e com **informação escassa e lícita**. O erro mais comum é gastar recusa por "sensação" solta. **Defina a tese primeiro** (o que você vai pedir ao Conselho) e só então classifique cada jurado como *favorável × adverso a essa tese específica* — a recusa serve para **remover os mais adversos**, não os "antipáticos". Perfil sem tese é chute; recusa sem critério é desperdício de um recurso escasso (só 3).

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 425-426 e 462-472 do CPP** e do **art. 5º, XXXVIII, da CF** (soberania dos veredictos, sigilo das votações, plenitude de defesa, competência para crimes dolosos contra a vida). Confira também as regras do **Provimento 205/2021 da OAB** (publicidade e captação) e a **Res. CNJ 231/2016 / normas locais** sobre listagem e alistamento de jurados. Súmulas, temas e precedentes específicos passam **obrigatoriamente** pelo gate `verificacao-citacoes` (ou a skill `jurisprudencia-stj-stf`) antes de qualquer uso.

## Para quem é (polo)

Esta skill é **neutra quanto ao polo**: serve tanto à **defesa** quanto à **acusação** (MP ou assistente de acusação), porque a **recusa peremptória cabe a ambas as partes** (art. 468 CPP), assim como a **contradita** (art. 466). A régua muda apenas o **código de ética aplicável** — OAB + Provimento 205/2021 na advocacia; CNMP no Ministério Público; LC 80/94 na Defensoria. Os **limites éticos da seção abaixo valem para todos**, sem exceção.

## Base legal

- **Art. 5º, XXXVIII, CF** — instituição do júri: **plenitude de defesa**, **sigilo das votações**, **soberania dos veredictos**, **competência** para crimes dolosos contra a vida.
- **Arts. 425-426, CPP** — **relação/lista geral de jurados** (alistamento anual, número de jurados por comarca, publicação da lista, exclusões e isenções). É a fonte lícita primária do perfilamento prévio.
- **Art. 432-435, CPP** — sorteio dos jurados que servirão na sessão periódica (formação do **corpo de jurados** convocado).
- **Arts. 447-452, CPP** — composição do Tribunal do Júri (**25 jurados** sorteados para a reunião; presença mínima de **15** para instalar a sessão — art. 463).
- **Art. 458-461, CPP** — pregão, verificação de presenças, adiamentos.
- **Art. 466, CPP** — **advertências** aos jurados (incomunicabilidade — §1º) e possibilidade de **contradita** (recusa motivada por impedimento/suspeição).
- **Art. 468, CPP** — **sorteio das cédulas** para o Conselho de Sentença e a **recusa peremptória (imotivada): até 3 por parte**. Recusado ou aceito jurado a jurado, à medida que sorteado.
- **Art. 469, CPP** — **separação de julgamentos** por excesso de recusas em caso de **coautoria** (quando as recusas impedem formar o Conselho com os presentes).
- **Art. 470, CPP** — sorteio de jurado suplente se não completar o número (7) por recusas/impedimentos.
- **Arts. 448-449, CPP** — **impedimentos e incompatibilidades** entre jurados (parentesco entre jurados do mesmo Conselho; quem já atuou/opinou no caso; etc.).
- **Art. 472, CPP** — **compromisso** e formação definitiva do **Conselho de Sentença (7 jurados)**.

## Distinção — três formas de "tirar" um jurado

Não confundir os institutos: cada um tem momento, fundamento e limite próprios.

| Instituto | Fundamento | Motivação | Limite | Momento |
|---|---|---|---|---|
| **Contradita** (art. 466) | Impedimento, suspeição, incompatibilidade (arts. 448-449, 252, 254) | **Motivada** — declarar e provar de plano | **Ilimitada** (quantos incidirem) | Ao ser sorteada a cédula, antes do compromisso |
| **Recusa peremptória** (art. 468) | Estratégia — **não precisa dizer por quê** | **Imotivada** | **Até 3 por parte** | Ao ser sorteada a cédula, antes do compromisso |
| **Dispensa/isenção** (arts. 434, 437) | Isenção legal (idade, profissão), força maior | Motivada, decidida pelo juiz | — | Antes ou no início da sessão |

> **A recusa peremptória é o instrumento tático desta skill.** Ela é **imotivada** — a parte simplesmente diz "recuso" e **não declara o motivo** (o sigilo protege a estratégia e evita constranger o jurado). Mas é **escassa (3)** e **irreversível** (jurado recusado não volta). Por isso cada recusa deve ser reservada para o **perfil mais adverso à sua tese**, não para o primeiro que causar má impressão.

## Metodologia — do alistamento à cédula

### Fase 1 — Análise prévia da relação de jurados (antes do dia)

Fontes **lícitas**: a **lista anual publicada** (arts. 425-426), a **pauta/convocação** da sessão, e **dados públicos** de acesso irrestrito (o que a pessoa tornou público). Nada de investigação intrusiva.

1. **Obtenha a relação dos jurados convocados** para a sessão (secretaria da vara / pauta publicada).
2. **Monte uma matriz** (planilha) com o que for **público e lícito**: nome, e — quando efetivamente público — profissão/ocupação declarada na lista, e sinais de valores prováveis a partir de fontes abertas.
3. **Não** faça: contato, mensagem, "amizade", monitoramento dirigido, contratação de terceiros para vasculhar a vida do jurado, ou qualquer coleta que a pessoa não tornou pública. **Isso é vedado** (ver *Limites éticos*).
4. **Cruze com a tese**: para cada jurado, pergunte "esse perfil provável tende a ouvir bem ou mal a MINHA tese central?".

### Fase 2 — Leitura no dia (sorteio das cédulas)

No Brasil **não se interroga o jurado**. A leitura é de **sinais observáveis** no curto intervalo entre o pregão (art. 458) e o sorteio (art. 468):

- **Reações às advertências e ao caso** (art. 466): expressão ao ouvir a imputação, ao réu, à vítima.
- **Linguagem corporal e apresentação**: postura, formalidade, sinais de identificação/repulsa.
- **Comportamento na espera**: interações, leitura, atenção.
- **Elementos objetivos da lista**: profissão/ocupação declarada (só o que é público).

> Trate cada sinal como **hipótese fraca**, não como certeza. Estereótipo puro (idade, gênero, aparência, raça, religião) é **mau preditor** e, se vira critério, pode configurar **recusa discriminatória ilícita** (ver *Limites éticos*). Use o sinal **em conjunto** com a relação com a tese — nunca isolado.

### Fase 3 — Decisão de recusa (gestão dos 3 tiros)

1. **Ranqueie** os jurados prováveis por **grau de adversidade à tese** (não por antipatia).
2. **Reserve as 3 recusas** para o topo do ranking de adversidade. Não gaste a 1ª recusa no 1º jurado morno se há risco de vir alguém pior depois.
3. **Ordem importa** — os jurados são sorteados um a um e você decide na hora, **sem saber quem vem depois** (informação incompleta). Calibre: recusar cedo demais esgota o recurso; recusar tarde demais pode deixar entrar o pior.
4. **Contradita primeiro** — se há impedimento/suspeição real (art. 466 + 448-449), **contradite** (motivada, ilimitada) e **preserve as 3 peremptórias** para pura estratégia.
5. **Coautoria (art. 469)** — com dois ou mais réus, o total de recusas pode **inviabilizar** o Conselho; atento à possível **separação de julgamentos**. Alinhe estratégia entre defensores.
6. **Consigne em ata** cada recusa/contradita e eventual incidente — munição para nulidade (arts. 448-452, 466-472) em eventual apelação (art. 593, III, "a").

## Matriz de perfil — favorável × adverso (ferramenta de trabalho)

> **Aviso metodológico:** a tabela abaixo é **heurística de partida**, não verdade. Perfis reais são individuais e contextuais; a mesma característica pode jogar dos dois lados conforme a tese. **Jamais** transforme a matriz em critério **discriminatório** (recusar por raça, religião, gênero, orientação é ilícito). O eixo correto é sempre **"como esse perfil provável se relaciona com a MINHA tese"**, cruzado com sinais observáveis lícitos.

| Fator observável (lícito) | Tende a favorecer... | Cautela |
|---|---|---|
| **Tese = legítima defesa / excludente** | quem valoriza autonomia, reação a agressão | evitar leitura punitivista extrema |
| **Tese = negativa de autoria / dúvida** | perfil analítico, cético, atento a prova | jurado "justiceiro" tende a presumir culpa |
| **Tese = clemência / genérico de absolvição** | perfil empático, comunitário, com histórico de perdão | rigidez moral joga contra |
| **Tese = desclassificação (afastar dolo)** | quem distingue nuance e intenção | leitura simplista "matou = homicídio" adversa |
| **Vítima simpática / crime chocante** | — | risco de mobilização emocional pró-condenação; medir |
| **Réu com traços de identificação com o jurado** | proximidade social/valores comuns | não presumir por estereótipo |
| **Profissão ligada à segurança pública** (só se público) | (em regra) leitura mais punitiva | não é regra absoluta — confirmar com sinais |

> Uso correto: preencha a matriz **para a sua tese concreta**, ranqueie por adversidade e aplique as 3 recusas ao topo. A matriz **organiza** a decisão; não a automatiza.

## Sinais observáveis — o que ler (e o que NÃO ler)

**Ler (lícito, no ambiente da sessão):**
- Reação facial/corporal ao ouvir a imputação, o réu, a vítima.
- Grau de atenção e engajamento durante o pregão e as advertências.
- Apresentação e formalidade; interações espontâneas na espera.
- Dado objetivo público da lista (ocupação declarada).

**Não ler / não fazer (ilícito ou antiético):**
- Abordar, cumprimentar direcionado, puxar conversa ou "sondar" o jurado.
- Pesquisar a vida privada do jurado além do que é público; contratar terceiros para isso.
- Monitorar redes do jurado de forma dirigida durante a sessão.
- Basear a recusa **exclusivamente** em raça, religião, gênero, orientação, deficiência — **recusa discriminatória é ilícita** ainda que a peremptória seja "imotivada".

## Limites éticos (inegociáveis)

Esta seção **prevalece sobre qualquer vantagem tática**. Vale para **defesa, MP e Defensoria**.

1. **Somente dados públicos e lícitos.** O perfilamento usa a lista oficial e o que o jurado **tornou público** por vontade própria. **Vedada** qualquer coleta intrusiva, investigação dirigida à vida privada do jurado ou contratação de terceiros para vasculhá-la.
2. **Não abordar, não contatar, não influenciar.** É **terminantemente proibido** abordar, cumprimentar de forma dirigida, mandar mensagem, "fazer amizade", pressionar, presentear ou influenciar jurado, direta ou indiretamente, antes, durante ou depois da sessão. Conduta dessa natureza pode configurar **ilícito penal** (ex.: coação/aliciamento) e **infração ética grave**.
3. **Incomunicabilidade (art. 466, §1º).** Jurados sorteados ficam **incomunicáveis** quanto ao processo; qualquer tentativa de romper esse dever é gravíssima e pode **anular** o julgamento.
4. **Sigilo das votações e imparcialidade (art. 5º, XXXVIII, CF).** Nada que comprometa o **sigilo** das votações ou a **imparcialidade** do Conselho. A leitura é para **selecionar**, não para **manipular**.
5. **Recusa imotivada ≠ recusa discriminatória.** A peremptória (art. 468) dispensa **declarar** motivo, mas **não autoriza** discriminação por raça, religião, gênero, orientação, origem ou deficiência. Critério discriminatório é **ilícito** e fere a igualdade (art. 5º, *caput*, CF) — além de expor a parte a nulidade e responsabilização.
6. **Publicidade e captação (Prov. 205/2021 OAB).** Nenhuma ação de perfilamento pode desbordar em captação de clientela, exposição do jurado ou publicidade indevida.
7. **Revisão humana obrigatória.** A decisão de aceitar/recusar é **sempre** do profissional responsável em plenário; esta skill é **apoio à preparação**, não substitui o juízo do advogado/promotor/defensor (CED, art. 2º; e as normas de cada polo).

## Teses e cautelas processuais (fiscalização da formação do Conselho)

Mesmo sendo de **preparação**, a skill orienta o que **fiscalizar e consignar** para preservar nulidades:

- **Quórum e instalação** (arts. 447, 463): ao menos **15 dos 25** presentes para instalar; sem quórum, adia-se (art. 464-465). Confira e consigne.
- **Impedimentos entre jurados** (arts. 448-449): parentes no mesmo Conselho, quem já opinou/atuou no caso — **contradite** e registre.
- **Sorteio regular das cédulas** (art. 468): a recusa deve ser oportunizada a **cada** jurado sorteado; cerceamento do direito de recusa é nulidade.
- **Separação por coautoria** (art. 469): quando as recusas impedem formar o Conselho, requerer/consignar a separação de julgamentos.
- **Suplente** (art. 470): não completando os 7, sorteia-se suplente — acompanhar.
- **Tudo em ata:** contradita, recusa, incidente, protesto. Sem ata, a matéria **preclui** e não sobe em apelação (art. 593, III, "a").

> **Contra-perspectiva (o outro polo também recusa).** Lembre que a parte adversa tem as **mesmas 3 recusas**. Antecipe **quem o adversário provavelmente recusará** (os mais favoráveis a você) e planeje o Conselho "realista" que tende a se formar depois das recusas cruzadas — não o Conselho ideal.

## Erros comuns / anti-padrões

- **Perfilar sem tese definida** — vira leitura de "simpatia", sem valor preditivo.
- **Gastar a 1ª recusa no 1º jurado** por impaciência, deixando entrar perfil pior depois.
- **Confundir contradita com recusa peremptória** — usar peremptória (escassa) onde cabia contradita (ilimitada e motivada) por impedimento real.
- **Basear recusa em estereótipo puro** (idade/gênero/aparência) — mau preditor **e** risco de recusa discriminatória ilícita.
- **Não consignar em ata** a contradita/recusa/incidente — preclui a nulidade.
- **Ignorar a coautoria** (art. 469) e o efeito das recusas sobre a formação do Conselho.
- **Qualquer contato com jurado** — do "bom dia" dirigido ao monitoramento de redes — é **linha vermelha ética**, não erro tático.
- **Citar número de HC/REsp/tema de memória** — passe pelo gate `verificacao-citacoes`.

## Checklist final (preparação do dia do júri)

- [ ] **Tese central definida** antes de perfilar qualquer jurado?
- [ ] **Relação de jurados** obtida por fonte oficial/lícita (arts. 425-426; pauta da sessão)?
- [ ] **Matriz perfil × tese** montada só com **dados públicos e lícitos**?
- [ ] **Nenhuma** coleta intrusiva, contato ou monitoramento dirigido a jurado?
- [ ] **Ranking de adversidade** feito, com as **3 recusas** reservadas ao topo?
- [ ] **Contradita** planejada (art. 466) para impedimentos reais, **preservando** as peremptórias?
- [ ] **Quórum** (≥15 de 25) e **impedimentos entre jurados** (arts. 448-449) checados?
- [ ] Plano para **coautoria** (art. 469) e **suplente** (art. 470), se aplicável?
- [ ] **Critério não-discriminatório** em toda recusa (nada de raça/religião/gênero/orientação)?
- [ ] **Ata** preparada para consignar contraditas, recusas, incidentes e protestos?
- [ ] **Citações** (arts., súmulas, precedentes) conferidas via `verificacao-citacoes` / `jurisprudencia-stj-stf`?
- [ ] **Revisão humana** do profissional responsável antes de agir em plenário?

## Distinção de skills irmãs

- **`juri-plenario-debates`** trata da **construção e sustentação oral da TESE** perante o Conselho **já formado** — atua **depois** desta skill.
- **`juri-quesitacao`** trata da **formulação, ordem e impugnação dos quesitos** (arts. 482-491) — **depois** dos debates.
- **Esta skill (`juri-perfilamento-jurados`)** atua **antes de tudo isso**: na **seleção de quem** comporá o Conselho, com foco em **perfil e recusa**, não em argumentação.

Fluxo típico da 2ª fase: **perfilamento/seleção (esta skill)** → **debates (`juri-plenario-debates`)** → **quesitação (`juri-quesitacao`)**.

## Nota de conformidade

Este material é **rascunho técnico de apoio à preparação**, sob **revisão humana obrigatória** — não substitui o juízo do profissional responsável em plenário. A decisão de aceitar, contraditar ou recusar cada jurado é sempre do advogado, promotor ou defensor que atua no caso. **Nenhuma** ação de perfilamento pode ultrapassar o uso de **dados públicos e lícitos**; **é vedado** qualquer contato, abordagem, pressão ou influência sobre jurado, ou qualquer conduta que comprometa a **imparcialidade** do Conselho, o **sigilo** das votações ou a **incomunicabilidade** (art. 466, §1º; art. 5º, XXXVIII, CF). Ética por polo: **OAB + Provimento 205/2021** (advocacia), **CNMP** (Ministério Público), **LC 80/94** (Defensoria). Toda citação normativa/jurisprudencial passa pelo gate `verificacao-citacoes` antes de uso.

**Padrão de trabalho:** para transformar o Conselho formado em vitória, aplique em seguida a skill `juri-plenario-debates` (sustentação da tese) e, ao final, `juri-quesitacao` (quesitos) — e, na redação de qualquer peça correlata, `redacao-persuasiva-criminal`.
