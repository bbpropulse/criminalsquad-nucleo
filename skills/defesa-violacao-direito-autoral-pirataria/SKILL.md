---
name: defesa-violacao-direito-autoral-pirataria
description: >-
  Use ao defender acusado de violação de direito autoral (art. 184 do CP) — pirataria física
  (CDs/DVDs, camelô), reprodução/venda com intuito de lucro (§§1º e 2º) e oferecimento sob demanda
  por streaming/IPTV pirata (§3º). Orienta a triagem da ação penal (art. 186), o ataque à perícia e
  à apreensão (CPP 530-B a 530-H), o enquadramento das Súmulas 502 e 574 do STJ e as teses de
  atipicidade (§4º — cópia única para uso privado… Não use para conclusão definitiva sem autos
  suficientes, fonte atual ou revisão profissional.
metadata:
  type: "prompt"
  version: "1.0.0"
  categories: [law, criminal, defesa, propriedade-intelectual]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "legal-analysis"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-defesa-violacao-direito-autoral-pirataria"]
  risk_level: "r3"
  delivery_type: "legal-analysis"
  freshness_policy: "official-current-source-required"
  positive_triggers: ["defesa-violacao-direito-autoral-pirataria", "defesa violacao", "autoral pirataria"]
  negative_triggers: ["conclusão definitiva sem autos suficientes, fonte atual ou revisão profissional"]
  guard_triggers: ["objetivo, polo ou fase indefinidos", "documento determinante ausente ou ilegível", "regra temporal, competência ou precedente material não verificado"]
---

# Defesa de Violação de Direito Autoral e Pirataria (art. 184 do CP)

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

Esta skill orienta a **defesa criminal** nos crimes de violação de direito autoral: da pirataria física de CDs/DVDs à reprodução e venda com intuito de lucro (§§1º e 2º) e ao oferecimento de obras ao público sob demanda — streaming e IPTV piratas (§3º). O tipo protege o direito de autor e os direitos conexos (intérprete, executante, produtor de fonograma), tutelados pela Lei 9.610/98.

> **Lição central:** antes de qualquer tese de mérito, faça **duas triagens que decidem o processo**. (1) **Qual figura do art. 184** — o *caput* é ação penal **privada** (decadência em 6 meses); os §§1º, 2º e 3º mudam pena, ação penal e teses. (2) **A perícia existe e é idônea?** Crime que deixa vestígio exige **exame de corpo de delito** (art. 158 CPP) e laudo do art. 530-D do CPP: **sem materialidade pericialmente comprovada, não há condenação** — nem a Súmula 574 dispensa a perícia, só admite amostragem.

> **Cautela de vigência (obrigatória antes de citar):** a redação atual do art. 184 do CP, dos arts. 530-B a 530-H do CPP e do art. 186 do CP vem da **Lei 10.695/2003** — confira o texto vigente na fonte oficial. As **Súmulas 502 e 574 do STJ** e qualquer precedente sobre IPTV/*cardsharing* passam **obrigatoriamente** pelo gate `jurisprudencia-stj-stf` (e `verificacao-citacoes`) antes de fundamentar a peça. Na dúvida, **omitir vence inventar**.

## As figuras típicas do art. 184

| Dispositivo | Conduta nuclear | Pena | Intuito de lucro? |
|---|---|---|---|
| *caput* | Violar direitos de autor e conexos | detenção 3 meses–1 ano, **ou** multa | Não exigido |
| **§1º** | **Reproduzir** total/parcialmente obra, interpretação, execução ou fonograma, sem autorização | reclusão **2–4 anos** e multa | **Sim** (direto ou indireto) |
| **§2º** | **Distribuir, vender, expor à venda, alugar, adquirir, ocultar, ter em depósito** original/cópia reproduzida com violação | reclusão **2–4 anos** e multa | **Sim** (direto ou indireto) |
| **§3º** | **Oferecer ao público**, por cabo, fibra, satélite ou qualquer sistema, obra que o usuário seleciona para receber **em tempo e lugar por ele demandados** (VOD/streaming) | reclusão **2–4 anos** e multa | **Sim** (direto ou indireto) |
| **§4º** | **Excludente:** limitações da Lei 9.610/98 **e** cópia em **um só exemplar, para uso privado do copista, sem intuito de lucro** | — (atipicidade) | — |

## Base legal

- **Art. 184, *caput* e §§1º a 4º, do CP** — as quatro figuras e a excludente do §4º.
- **Art. 186 do CP** — regime da ação penal (ver seção própria).
- **Lei 9.610/98** — direitos autorais (define autoria, titularidade, limitações e usos livres; base do §4º).
- **Arts. 530-B a 530-H do CPP** — apreensão, termo com testemunhas, **perícia**, depósito, destruição e assistência de acusação nas infrações dos §§1º a 3º.
- **Arts. 158 e 158-A a 158-F do CPP** — exame de corpo de delito e **cadeia de custódia** dos bens apreendidos.
- **Distinções (não confundir):** pirataria de **software** = **art. 12 da Lei 9.609/98** (não o art. 184 CP); marca/produto falsificado = crimes contra a **propriedade industrial**, arts. 183–195 da **Lei 9.279/96**; sinal de telecom clandestino = **art. 183 da Lei 9.472/97**. Subsunção equivocada é tese de atipicidade/desclassificação.

## Ação penal (art. 186) — a primeira triagem

A **espécie de ação** muda condições de procedibilidade e prazos — e é onde nascem preliminares fulminantes.

- **Art. 184, *caput*** → ação penal **PRIVADA** (queixa-crime). Prazo **decadencial de 6 meses** do conhecimento da autoria (arts. 103 CP e 38 CPP); atenção à **legitimidade do querelante**, à **perempção** e ao **perdão**.
- **§§1º e 2º** → ação penal **PÚBLICA INCONDICIONADA**.
- **§3º** → ação penal **PÚBLICA CONDICIONADA À REPRESENTAÇÃO** do titular ou de quem o represente (art. 186, IV). **Sem representação tempestiva, falta condição de procedibilidade.**
- **Crime contra entidade de direito público** (União, autarquia, empresa pública, sociedade de economia mista, fundação pública) → ação **pública incondicionada** (art. 186, III), o que também repercute na **competência** (possível interesse da União → Justiça Federal, a confirmar no caso).

## O procedimento probatório especial (CPP 530-B a 530-H)

É o **ponto nevrálgico da defesa**. A lei impôs rito próprio de apreensão e perícia; cada falha é munição.

- **530-B — apreensão:** dos bens ilícitos e dos equipamentos/suportes, **desde que precipuamente destinados** ao ilícito. Equipamento de uso comum apreendido sem essa destinação é excesso.
- **530-C — termo de apreensão:** lavrado e assinado por **duas ou mais testemunhas**, com descrição dos bens e origem. Ausência de testemunhas ou descrição genérica fragiliza a prova.
- **530-D — perícia (chave):** perícia **por perito oficial** (ou pessoa tecnicamente habilitada) sobre os bens apreendidos, com **laudo** integrando inquérito/processo. É o **exame de corpo de delito** (art. 158 CPP). **Laudo ausente, genérico, sem metodologia ou que não conclui pela contrafação → falta de materialidade → absolvição** (CPP, art. 386, II/III).
- **530-E — depósito:** os titulares são fiéis depositários dos bens. Verifique a **cadeia de custódia** (arts. 158-A a 158-F): há correspondência inequívoca entre o **apreendido**, o **periciado** e o **imputado**? A ruptura gera dúvida sobre a materialidade.
- **530-F e 530-G — destruição/perdimento:** a destruição precoce dos bens **antes de assegurada a defesa** pode inviabilizar a contraperícia — **preserve o corpo de delito** e requeira exame por assistente técnico.
- **530-H — assistência de acusação:** associações de titulares podem funcionar como assistentes; fiscalize a **legitimidade** e eventual interesse econômico na prova produzida.

## Súmulas 502 e 574 do STJ (sob Citation Gate)

> **Confirme teor e vigência via `jurisprudencia-stj-stf` antes de citar.** Reproduzidas aqui como referência de trabalho, não como citação verificada.

- **Súmula 502/STJ (teor de referência):** presentes materialidade e autoria, é **típica** a conduta do §2º de **expor à venda CDs e DVDs piratas** — o STJ **afasta** as teses de **adequação social** e de **insignificância** para a pirataria comercial. *Consequência prática:* essas duas teses tendem a **não prosperar** no STJ; use-as com parcimônia e, se necessário, apenas para **prequestionamento** ou em cenário concreto excepcional.
- **Súmula 574/STJ (teor de referência):** para comprovar a materialidade, é **suficiente a perícia por amostragem**, nos **aspectos externos** do material, sendo **desnecessária a identificação dos titulares** dos direitos violados. *Leitura defensiva:* a súmula **facilita** a prova acusatória, mas **não dispensa a perícia** — ataque a **representatividade da amostra**, a **metodologia**, a **habilitação do perito** e a **cadeia de custódia**; sem perícia idônea alguma, não há materialidade, ainda que por amostragem.

## Metodologia de defesa — roteiro por etapas

1. **Classifique a figura típica** (*caput* / §1º / §2º / §3º) — define pena, ação penal e teses. Cheque se não é **software (9.609/98)**, **propriedade industrial (9.279/96)** ou **telecom (9.472/97)**: erro de subsunção → atipicidade/desclassificação.
2. **Ataque a ação penal:** *caput* → decadência (6 meses), legitimidade do querelante, perempção; §3º → **ausência/intempestividade da representação**.
3. **Ataque a materialidade:** existe **laudo** do art. 530-D? É idôneo (perito, método, amostra, conclusão pela contrafação)? Há **cadeia de custódia** íntegra (158-A a 158-F)? **Termo de apreensão** com duas testemunhas (530-C)?
4. **Ataque o elemento subjetivo do tipo:** os §§1º a 3º exigem **intuito de lucro direto ou indireto** — demonstre sua **ausência** (uso pessoal, compartilhamento não comercial). Invoque o **§4º** (cópia única para uso privado do copista, sem lucro, ou limitação legal da 9.610/98) → **atipicidade**.
5. **Ataque a autoria e o dolo:** posse/depósito exige vínculo com a mercadoria; discuta **erro de tipo/erro de proibição** conforme escolaridade e contexto (Súmula 502 afasta adequação social, **não** o exame do dolo concreto).
6. **Verifique prescrição** (§§1º a 3º: pena máx. 4 anos → 8 anos, art. 109, IV; *caput*: máx. 1 ano → 4 anos, art. 109, V) — use `calculadora-prescricao`.
7. **Explore vias despenalizadoras** (ANPP, transação/sursis processual conforme a figura) — ver seção própria.
8. **Só então**, mérito e dosimetria — com `redacao-persuasiva-criminal` e `calculadora-dosimetria`.

## Teses de defesa (e contra-teses)

➡️ **Atipicidade pelo §4º (forte):** cópia em **um só exemplar** para **uso privado do copista**, **sem intuito de lucro**, ou uso enquadrado nas **limitações da Lei 9.610/98** → fato atípico.
- *Contra-tese (acusação):* pluralidade de cópias, exposição à venda ou **lucro indireto** (ex.: monetização por publicidade) afastam o §4º.

➡️ **Ausência de intuito de lucro (§§1º a 3º):** sem finalidade lucrativa direta ou indireta, não se completa o tipo qualificado; no máximo, remanesceria o *caput* (ação privada).
- *Contra-tese:* "lucro indireto" é **amplo** — atrair público, economizar assinatura, ganhar com anúncios já basta; sustente com prova concreta da não lucratividade.

➡️ **Falta de materialidade (perícia deficiente/ausente):** sem laudo idôneo do art. 530-D, não há corpo de delito (art. 158 CPP) → absolvição (art. 386, II/III). Ataque método, amostra, habilitação e conclusão.
- *Contra-tese:* Súmula 574 admite **amostragem** e **aspectos externos** — por isso o foco defensivo é a **idoneidade técnica** e a **cadeia de custódia**, não a mera existência de amostragem.

➡️ **Preliminares de ação penal:** decadência (*caput*), ausência de representação (§3º), ilegitimidade do querelante — extinção da punibilidade / rejeição.

➡️ **Erro de subsunção:** software → 9.609/98; marca/produto → 9.279/96; sinal de TV → 9.472/97. Imputar o art. 184 a fato de outra lei é atipicidade quanto ao 184.

➡️ **Insignificância/adequação social (fraca no STJ):** barradas pela Súmula 502 na pirataria comercial; reserve para quantidade ínfima, contexto excepcional ou prequestionamento — sinalize a baixa probabilidade.

## Pirataria digital — streaming/IPTV (§3º)

O §3º pune o **oferecimento ao público sob demanda** (video on demand): o usuário **seleciona** a obra para recebê-la **em tempo e lugar que ele determina**. Isso alcança catálogos piratas de filmes/séries por aplicativos e sites.

- **Distinção crítica (tese de defesa):** a **retransmissão de sinal linear** de TV por assinatura — "gatonet", *cardsharing*, compartilhamento de sinal — **nem sempre** se ajusta ao §3º (que pressupõe seleção sob demanda). Pode configurar **outro tipo** (ex.: art. 183 da Lei 9.472/97, telecomunicação clandestina) **ou** atipicidade quanto ao 184, §3º. A subsunção correta muda pena, ação penal e competência. **Precedentes específicos do STJ/STF sobre IPTV, *cardsharing* e a fronteira 184,§3º × 9.472/97 são [NÃO VERIFICADO] — confira via `jurisprudencia-stj-stf` antes de sustentar.**
- **Materialidade digital:** exija **perícia técnica** que demonstre o funcionamento sob demanda, a origem ilícita do conteúdo e a autoria do oferecimento; questione **prova digital** sem cadeia de custódia (ver `preservacao-prova-digital-defesa`, `impugnacao-prova-documental-pericial-conteudo`).
- **Representação (§3º):** confirme a existência e a tempestividade da representação do titular — condição de procedibilidade.

## Vias despenalizadoras e dosimetria

- **ANPP (art. 28-A do CPP):** os §§1º a 3º têm pena mínima de **2 anos** (< 4) → **cabível**, se ausentes violência/grave ameaça e presentes confissão e demais requisitos. Ver `anpp` e `estrategia-plea-negociacao-integrada-anpp-colaboracao`.
- **Transação penal e JECRIM (Lei 9.099/95):** o ***caput*** (pena máx. 1 ano) é infração de **menor potencial ofensivo** → transação penal e rito sumaríssimo; ver `transacao-penal`. Os §§1º a 3º **não** são menor potencial (máx. 4 anos).
- **Suspensão condicional do processo (art. 89):** exige pena mínima **≤ 1 ano** → cabível no ***caput***; **não cabe** nos §§1º a 3º (mínimo de 2 anos). Ver `suspensao-condicional-processo`.
- **Dosimetria e prescrição:** use `calculadora-dosimetria` (pena e multa do §§) e `calculadora-prescricao`; a **multa** é cumulativa nos §§1º a 3º.

## Competência — onde tramita

- **Regra: Justiça Estadual.** A violação de direito autoral é, em regra, de competência estadual, ainda que a obra pirateada seja **estrangeira** (a origem estrangeira do produto, por si só, **não** desloca para a Justiça Federal).
- **Justiça Federal** apenas quando há **lesão a bens, serviços ou interesse da União** (art. 109, IV, CF) — p. ex., crime contra entidade de direito público (art. 186, III do CP) — ou **transnacionalidade** com previsão em tratado. Havendo dúvida sobre o deslocamento, **confirme o enunciado/precedente aplicável via `jurisprudencia-stj-stf`** e argua a incompetência como preliminar, se for o caso.

## Esqueleto da estrutura defensiva

Roteiro para a **resposta à acusação (art. 396-A do CPP)**, memoriais ou razões — adaptar ao caso e submeter à revisão humana:

```
I — PRELIMINARES
    a) Ação penal: decadência (caput) / ausência de representação (§3º) /
       ilegitimidade do querelante  → extinção da punibilidade ou rejeição.
    b) Incompetência (se houver deslocamento indevido à Justiça Federal).
    c) Inépcia/atipicidade prima facie (erro de subsunção: 9.609/98,
       9.279/96 ou 9.472/97 em vez do art. 184).

II — MÉRITO (absolvição — art. 386 do CPP)
    a) Falta de materialidade: perícia ausente/deficiente (530-D + 158),
       ruptura da cadeia de custódia (158-A a 158-F), termo sem testemunhas
       (530-C), amostra não representativa (limites da Súmula 574).
    b) Atipicidade: §4º (cópia única, uso privado, sem lucro) e/ou
       ausência de intuito de lucro direto ou indireto (§§1º a 3º).
    c) Autoria/dolo: ausência de vínculo com a mercadoria; erro de tipo/
       proibição conforme o contexto concreto.

III — SUBSIDIÁRIO
    a) Vias despenalizadoras (ANPP; transação/sursis processual no caput).
    b) Dosimetria: pena e multa no mínimo; prescrição.
```

## Erros comuns / checklist

- [ ] **Figura típica** identificada (*caput*/§1º/§2º/§3º) e **ação penal** correspondente (privada/pública/condicionada) conferida?
- [ ] ***Caput*:** decadência de 6 meses e legitimidade do querelante verificadas?
- [ ] **§3º:** existe **representação** válida e tempestiva do titular?
- [ ] **Perícia (530-D)** presente, idônea (perito, método, amostra, conclusão) e é **exame de corpo de delito** (art. 158)?
- [ ] **Termo de apreensão** com **duas testemunhas** (530-C) e **cadeia de custódia** íntegra (158-A a 158-F)?
- [ ] **Intuito de lucro** (direto/indireto) dos §§1º a 3º efetivamente **provado** — ou há espaço para o **§4º** (uso privado)?
- [ ] Fato é mesmo **art. 184** e não **software (9.609/98)**, **propriedade industrial (9.279/96)** ou **telecom (9.472/97)**?
- [ ] **Prescrição** e **vias despenalizadoras** (ANPP; transação/sursis no *caput*) avaliadas?
- [ ] **Súmulas 502 e 574** e precedentes de IPTV/*cardsharing* **conferidos** via `jurisprudencia-stj-stf` / `verificacao-citacoes`?
- [ ] Bens preservados para **contraperícia** antes de eventual destruição (530-F/G)?

**Anti-padrões (evitar):**
- Ir ao mérito sem antes triar **ação penal** e **perícia** — perde-se preliminar decadencial (*caput*) ou de representação (§3º).
- Insistir em **adequação social/insignificância** na pirataria comercial como se fossem teses fortes — o STJ as barra (Súmula 502).
- Tratar a **Súmula 574** como se dispensasse a perícia: ela admite **amostragem**, não **ausência** de laudo.
- Aceitar **laudo genérico** sem impugnar método, amostra e cadeia de custódia.
- Confundir **streaming sob demanda (§3º)** com **retransmissão de sinal/cardsharing** (possível 9.472/97) — subsunção errada beneficia a acusação.
- Imputar o art. 184 a **pirataria de software** (correto: art. 12 da Lei 9.609/98).
- Deixar **destruir os bens** (530-F/G) sem requerer preservação para contraperícia.

## Nota de conformidade e lembretes finais

- **Triagem antes do mérito:** ação penal (art. 186) e perícia (530-D) decidem o caso mais do que a tese de fundo.
- **Materialidade é pericial:** sem laudo idôneo, não há condenação — Súmula 574 admite amostragem, não a falta de exame.
- **§4º e intuito de lucro** são a espinha dorsal da atipicidade nos §§1º a 3º.
- **Revisão humana obrigatória:** este material é apoio à preparação; a responsabilidade pela peça e pelas teses é sempre do **advogado** (CED/EAOAB). Toda súmula, tese ou acórdão passa pelo gate de citações (`jurisprudencia-stj-stf` / `verificacao-citacoes`) — **omitir vence inventar**.

**Padrão de redação:** ao redigir a peça (resposta à acusação — art. 396-A do CPP —, memoriais ou razões de apelação), aplique também a skill `redacao-persuasiva-criminal` — teoria do caso, narrativa dos fatos, subsunção explícita, coesão e persuasão (a régua de obra-prima que a revisão cobra).
