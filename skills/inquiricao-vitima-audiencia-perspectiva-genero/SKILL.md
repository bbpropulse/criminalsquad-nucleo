---
name: inquiricao-vitima-audiencia-perspectiva-genero
description: >-
  Use ao planejar e conduzir a INQUIRIÇÃO DA VÍTIMA (ofendido) em audiência de instrução com
  perspectiva de gênero e sem revitimização, preservando o contraditório e a ampla defesa — arts.
  201, 212, 217 e 400 do CPP; art. 400-A (Lei 14.245/2021, Lei Mariana Ferrer); art. 10-A da Lei
  11.340/2006. Gatilhos: inquirição/oitiva da vítima, ofendido (art. 201 CPP), declarações do
  ofendido, audiência de instrução (art. 400), Lei… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, audiencia, oralidade, genero]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-inquiricao-vitima-audiencia-perspectiva-genero"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["inquiricao-vitima-audiencia-perspectiva-genero", "inquiricao vitima", "perspectiva genero"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Inquirição da vítima com perspectiva de gênero e sem revitimização

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

Esta skill orienta a **técnica de oralidade** para inquirir a **vítima (ofendido)** em audiência de instrução (art. 400 do CPP) — em especial nos crimes contra a dignidade sexual e de violência doméstica e familiar — **conduzindo o contraditório de forma tecnicamente eficaz sem revitimizar**. O foco primário é o **polo da defesa**: como confrontar a prova oral produzida pela vítima sem violar a Lei 14.245/2021 (Lei Mariana Ferrer) nem a perspectiva de gênero, preservando a ampla defesa e o direito ao confronto. (Para o polo acusatório/assistência, ver a nota de reversibilidade ao final.)

> **Lição central:** contraditório forte **não é ataque à pessoa da vítima**. A defesa preserva sua força perguntando sobre **fatos e contradições objetivas** — cronologia, condições de percepção, incompatibilidade com a prova material — e **nunca** sobre vida sexual pregressa, comportamento, vestimenta ou moralidade (vedação do art. 400-A do CPP). Revitimizar hoje é **ilegal, contraproducente e expõe o próprio advogado** a responsabilização civil, penal e administrativa.

> **Cautela de vigência (obrigatória antes de citar):** confira a redação vigente dos **arts. 201, 212, 217, 400 e 400-A do CPP** (e do art. 474-A, no júri), da **Lei 14.245/2021**, do **art. 10-A da Lei 11.340/2006** (red. Lei 13.505/2017) e da **Lei 13.431/2017**. O **Protocolo para Julgamento com Perspectiva de Gênero (CNJ)** e a resolução que o tornou de observância obrigatória devem ser conferidos antes de invocar. Toda súmula/tese/precedente passa pelos gates `verificacao-citacoes` e `jurisprudencia-stj-stf`.

## A tensão central

Dois vetores constitucionais convivem nesta audiência e precisam ser harmonizados:

- **Proteção da vítima e perspectiva de gênero** — dignidade da pessoa humana; dever estatal de devida diligência reforçada (Convenção de Belém do Pará, Decreto 1.973/1996; CEDAW); vedação legal à revitimização (art. 400-A do CPP; art. 10-A da Lei 11.340/2006).
- **Ampla defesa e direito ao confronto** — contraditório (CF, art. 5º, LV) e o direito de **inquirir** a fonte da prova (CADH — Pacto de San José, art. 8.2.f).

A chave é entender que **um não anula o outro**: a proteção **disciplina o modo** da inquirição (ambiente, forma das perguntas, temas vedados), mas **não suprime** o direito de a defesa perguntar sobre os **fatos** e apontar **contradições**. Perder de vista esse equilíbrio produz os dois erros clássicos — a defesa que revitimiza (e se expõe) e a defesa que se cala (e abre mão do confronto).

## Base legal

- **Art. 400 do CPP** — ordem da audiência de instrução: as **declarações do ofendido** abrem a colheita da prova oral, antes das testemunhas e do interrogatório.
- **Art. 201 do CPP** — estatuto do ofendido: comunicação dos atos (§2º); **espaço separado** antes e durante a audiência (§4º); encaminhamento a **atendimento multidisciplinar** (§5º); **preservação da intimidade, vida privada, honra e imagem**, cabendo até **segredo de justiça** (§6º).
- **Art. 400-A do CPP (Lei 14.245/2021 — Lei Mariana Ferrer)** — dever de todas as partes e sujeitos processuais de **zelar pela integridade física e psicológica da vítima**, sob pena de responsabilização civil, penal e administrativa; **vedadas**: (I) manifestação sobre **circunstâncias ou elementos alheios aos fatos**; (II) **linguagem, informações ou material que ofendam a dignidade** da vítima ou de testemunhas.
- **Art. 474-A do CPP (Lei 14.245/2021)** — regra espelhada para a **instrução em plenário do júri**.
- **Art. 212 do CPP** — as perguntas são formuladas **diretamente pelas partes**; o juiz **não admite** as que puderem **induzir a resposta**, não tiverem relação com a causa ou importarem **repetição** de outra já respondida.
- **Art. 217 do CPP** — se a presença do réu causar **temor ou humilhação** ao ofendido/testemunha a ponto de prejudicar a verdade, o juiz determina a **retirada do réu**, prosseguindo por **videoconferência**.
- **Art. 10-A da Lei 11.340/2006 (red. Lei 13.505/2017)** — diretrizes da inquirição da mulher em situação de violência doméstica: (I) salvaguarda da integridade física, psíquica e emocional; (II) **vedação de contato direto** com investigado/suspeito; (III) **não revitimização** — evitar sucessivos depoimentos e **questionamentos sobre a vida privada**.
- **Lei 13.431/2017** — **escuta especializada** e **depoimento especial** de criança/adolescente vítima ou testemunha (aplicável, por analogia protetiva, a pessoas vulneráveis) — ver skill `depoimento-especial-lei-13431`.
- **Protocolo para Julgamento com Perspectiva de Gênero (CNJ)** — parâmetro de atuação do julgador; reforça o repúdio à revitimização em audiência (conferir número/vigência via `verificacao-citacoes`).

## Metodologia — roteiro em três tempos

### 1. Antes da audiência (preparação)

- **Estudar a palavra da vítima** em toda a linha do tempo: boletim de ocorrência, declarações na fase policial, laudos (perícia, corpo de delito, exame sexológico), mensagens, geolocalização, imagens. Em crimes praticados às ocultas, a palavra da vítima tem **especial relevância probatória** — o confronto se faz pela **coerência**, não pela pessoa.
- **Montar a matriz de contradições objetivas** (skill `matriz-contradicoes-prova-oral`): divergências entre versões; incompatibilidades com a prova material; impossibilidades de tempo, lugar e percepção. Cada ponto deve ancorar-se em **fato verificável**, não em juízo moral.
- **Fixar a teoria do caso** e ajustar a linha de perguntas a ela (negativa de autoria; atipicidade; consentimento válido e demonstrável por elementos objetivos; legítima defesa; erro). A tese define o que é **pertinente** perguntar.
- **Aferir a vulnerabilidade** da vítima: criança/adolescente, pessoa com deficiência ou em sofrimento agudo → **depoimento especial/escuta especializada** (Lei 13.431) — planejar as perguntas para serem intermediadas por profissional.

### 2. Enquadramento protetivo (aceitar o que é legítimo)

Estas medidas **não** cerceiam a defesa — recusá-las por reflexo cria incidente inútil, desgasta a defesa perante o juízo e tende ao indeferimento:

- **Sala/espaço separado** (art. 201, §4º) e **atendimento multidisciplinar** (art. 201, §5º).
- **Retirada do réu / videoconferência** (art. 217) — a defesa técnica **acompanha o ato** e mantém o direito de perguntar; a saída do réu, por si, **não gera nulidade**.
- **Segredo de justiça** e preservação da imagem (art. 201, §6º).
- **Vedação de contato direto** com o acusado e **não repetição** de inquirições (art. 10-A, II e III, da Lei 11.340/2006).

### 3. Durante a inquirição — o sistema de perguntas (art. 212)

A defesa formula perguntas **diretamente** à vítima, dentro do filtro do art. 212 (nada indutor, impertinente ou repetitivo) somado ao filtro do art. 400-A (nada que ofenda a dignidade). O direito ao **confronto** (CADH 8.2.f) garante o **acesso à inquirição**; a proteção define **como** ela ocorre.

| A defesa PODE explorar (fato e contradição) | A defesa NÃO PODE (vedações do art. 400-A) |
|---|---|
| Cronologia e sequência dos fatos imputados | Vida sexual pregressa e relacionamentos anteriores |
| Condições de percepção (luz, distância, tempo, estado físico) | Vestimenta, comportamento, "o que fez para provocar" |
| Contradições entre a versão atual e a da fase policial | Juízos morais, reputação, moralidade da vítima |
| Incompatibilidade com laudo/perícia/mensagens/geolocalização | Circunstâncias ou elementos **alheios aos fatos** (inc. I) |
| Presença de terceiros; contexto objetivo verificável | Linguagem ou material que **ofenda a dignidade** (inc. II) |

O que está na coluna esquerda **ataca a credibilidade da narrativa por meios legítimos**. O que está na direita é **vedado por lei**, gera **responsabilização** (art. 400-A) e é **contraproducente** — o Protocolo do CNJ orienta o julgador a repudiar a conduta, e o desgaste recai sobre a tese defensiva.

### 4. Se cercearem uma pergunta legítima (preservar a nulidade)

Distinção fina e decisiva:

- Indeferir pergunta sobre a **esfera íntima/vida pregressa** da vítima **não é nulidade** — não existe direito a revitimizar.
- Indeferir pergunta sobre **contradição fática relevante** pode configurar **cerceamento de defesa** (nulidade).

Diante do indeferimento de pergunta **objetiva e pertinente**, a defesa deve **consignar em ata**: a pergunta na íntegra, o indeferimento e o **protesto** — matéria-prima de eventual preliminar de nulidade em razões de apelação (ver skills `impugnacao-ata-termo-interrogatorio` e `transcricao-audiencia`).

## Teses e contra-teses

- **Tese (defesa) — direito ao confronto:** a oitiva da vítima **não pode ser suprimida**; a medida protetiva disciplina o modo, não elimina a inquirição (CADH, art. 8.2.f; CF, art. 5º, LV).
- **Tese (defesa) — valor relativo da palavra da vítima:** nos crimes cometidos às ocultas, a palavra da vítima tem peso, **mas exige coerência interna e harmonia com o conjunto probatório**; a defesa demonstra a **incoerência objetiva**, sem tocar na pessoa. Confirmar o estado atual do entendimento via `jurisprudencia-stj-stf` — **não citar número de acórdão de memória**.
- **Contra-tese (limite à defesa):** a vedação do art. 400-A é **legítima e constitucional**; o cerceamento de perguntas sobre a intimidade **não gera nulidade**.
- **Contra-tese (acusação/assistência):** a revitimização pode **anular a audiência** e **responsabilizar** quem a pratica — argumento que a defesa **neutraliza** conduzindo-se de forma técnica, objetiva e respeitosa (a melhor defesa contra essa contra-tese é não dar causa a ela).

## Súmulas e precedentes (sob Citation Gate)

- **Não há súmula específica consagrada** sobre "inquirição da vítima com perspectiva de gênero" — **não invente**. Se precisar de ancoragem sumular para tema conexo (ex.: nulidades, prova oral), confira número e teor via `verificacao-citacoes`.
- Entendimentos sobre (a) **especial relevância da palavra da vítima** em crimes sexuais/violência doméstica e (b) **nulidade por afronta à dignidade** na audiência existem na jurisprudência, mas **variam e evoluem** — confirmar caso a caso via `jurisprudencia-stj-stf`. **[NÃO VERIFICADO]** quanto a qualquer número de acórdão específico: prefira sustentar **tese + dispositivo** (art. 400-A; art. 201; art. 10-A) a arriscar citação numérica.
- A **Lei 14.245/2021** também repercutiu na esfera penal material (constrangimento/coação relacionados ao curso do processo) — **[NÃO VERIFICADO]** a extensão e o dispositivo exato; conferir antes de invocar.

## Erros comuns e anti-padrões

- **Confundir contraditório com ataque pessoal** — perguntar sobre vida sexual, vestimenta ou comportamento (viola o art. 400-A; responsabiliza o advogado; enfraquece a tese).
- **Calar-se por medo de "parecer agressivo"** — abrir mão do confronto legítimo sobre contradições objetivas.
- **Não consignar em ata** o indeferimento de pergunta pertinente — perde-se a nulidade por preclusão.
- **Criar incidente contra medidas protetivas legítimas** (sala separada, videoconferência do art. 217) — desgaste inútil.
- **Ignorar a condição de vulnerável** — inquirir criança/adolescente sem depoimento especial (Lei 13.431).
- **Chegar sem a matriz de contradições** pronta — perguntar "no escuro" revitimiza e não produz resultado.
- **Citar súmula/acórdão de memória** — risco de jurisprudência inventada (há sanções reais).

## Checklist antes e durante a audiência

- [ ] Palavra da vítima estudada em toda a linha do tempo (policial → laudos → judicial)?
- [ ] **Matriz de contradições objetivas** montada, cada ponto ancorado em fato verificável?
- [ ] Linha de perguntas alinhada à **teoria do caso** e ao filtro de pertinência (art. 212)?
- [ ] **Vulnerabilidade** aferida — necessidade de depoimento especial/escuta especializada (Lei 13.431)?
- [ ] Medidas protetivas **legítimas** aceitas sem incidente inútil (arts. 201, §§4º-6º, e 217)?
- [ ] Perguntas restritas a **fatos e contradições** — nenhuma sobre vida pregressa/comportamento/vestimenta (art. 400-A)?
- [ ] Indeferimento de pergunta **pertinente** consignado em ata **com protesto** (para nulidade)?
- [ ] Linguagem **objetiva e respeitosa**, sem material ofensivo à dignidade (art. 400-A, II)?
- [ ] Súmulas/teses/precedentes conferidos via `verificacao-citacoes` e `jurisprudencia-stj-stf` antes de citar?

## Nota de conformidade

- **Rascunho para revisão humana obrigatória.** Esta skill é apoio à preparação da audiência; a condução do ato e a responsabilidade pelas perguntas são sempre do **advogado** (CED/EAOAB). O material não substitui o juízo profissional nem a leitura do caso concreto.
- **Ética por polo (defesa):** o dever de zelar pela integridade da vítima (art. 400-A do CPP) alcança **também a defesa**; sua violação enseja **responsabilização civil, penal e administrativa** e pode contaminar a instrução. Atuação técnica robusta e conduta respeitosa **não** se excluem.
- **Citation Gate:** nenhuma súmula, tese ou precedente citado de memória — tudo pelos gates `verificacao-citacoes` e `jurisprudencia-stj-stf`. Na dúvida, **omitir vence inventar**.
- **Sigilo/LGPD:** dados da vítima e do assistido em ambiente protegido; atenção ao segredo de justiça (art. 201, §6º).

> **Nota de reversibilidade (polo acusatório / assistência de acusação):** a mesma metodologia serve, invertida, ao Ministério Público e ao assistente — que devem **assegurar** o enquadramento protetivo e **impugnar** perguntas revitimizantes da defesa (art. 400-A), consignando em ata. Para esse enfoque, ver `assistente-acusacao-crimes-pessoa` e `assistente-acusacao-producao-prova-instrucao`.

## Lembretes finais

- **Fato e contradição, nunca a pessoa** — é a régua de ouro que preserva a defesa e respeita a vítima.
- **Proteção disciplina, não suprime** — o direito ao confronto sobrevive às medidas protetivas.
- **Distinção da nulidade:** cercear pergunta sobre a intimidade não anula; cercear pergunta sobre contradição objetiva pode anular — **consigne em ata**.
- **Vulnerável → depoimento especial** (Lei 13.431); **violência doméstica → art. 10-A** da Lei Maria da Penha.
- **Confira vigência** (CPP arts. 201, 212, 217, 400, 400-A, 474-A; Lei 14.245/2021; Protocolo CNJ) e passe toda citação pelos gates antes de usar.

**Skills relacionadas:** `audiencia-inquiricao-testemunhas` (inquirição de testemunhas), `depoimento-especial-lei-13431` (vítima criança/adolescente/vulnerável), `matriz-contradicoes-prova-oral` (preparo das contradições), `preparacao-audiencia` (logística e estratégia do ato), `impugnacao-ata-termo-interrogatorio` e `transcricao-audiencia` (consignação e preservação de nulidade). Ao converter o resultado da audiência em memoriais/alegações, aplique também `redacao-persuasiva-criminal`.
