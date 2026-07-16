---
name: "Pesquisa Jurisprudencial e Doutrinária"
description: "Método de pesquisa de jurisprudência, súmulas e doutrina — vinculação CPC 927, leading cases, consulta ao acervo local antes da web"
whenToUse: |
  Agentes que pesquisam jurisprudência (STJ/STF), súmulas, repetitivos, repercussão geral e doutrina para fundamentar peças, pareceres ou recursos.
version: "1.0.0"
---

# Pesquisa Jurisprudencial e Doutrinária

Este best-practice define o método de pesquisa de fontes do Direito para o framework
CriminalSquad. Vale para qualquer agente que precise localizar e citar jurisprudência
(STJ, STF), súmulas, recursos repetitivos, repercussão geral e doutrina. O objetivo é
produzir fundamentação **vinculante, atual e precisa**, e não apenas "achar um acórdão
que ajuda".

A regra de ouro do projeto é a **estratégia híbrida**: consulte SEMPRE o acervo local
(`acervo/`) ANTES de pesquisar na web. O acervo é uma camada curada de **descoberta e
contexto**; toda afirmação material, norma, súmula ou precedente destinado a uma
entrega deve ser confirmado na fonte oficial vigente.

---

## Princípios Fundamentais

1. **Precedente vinculante × precedente persuasivo (CPC 927).** Saber distinguir é o
   ponto de partida. São vinculantes, entre outros: decisões do STF em controle
   concentrado; súmulas vinculantes (CF 103-A; Lei 11.417/2006); acórdãos em IRDR e IAC
   (CPC 947 e 985); teses fixadas em recursos extraordinário e especial REPETITIVOS
   (CPC 1.036-1.041); e os enunciados das súmulas do STF e do STJ. Acórdãos comuns de
   Turma, doutrina e jurisprudência de tribunais inferiores são persuasivos — pesam,
   mas não obrigam.

2. **Hierarquia das fontes.** Ordene a força da fundamentação: súmula vinculante e
   controle concentrado do STF → repercussão geral (CPC 1.035) e repetitivo do STJ
   (CPC 1.036) → súmula ordinária → acórdão de Seção/Órgão Especial → acórdão de Turma
   → doutrina e tribunais locais (TJ/TRF). Cite a fonte mais alta disponível para a tese.

3. **Atualidade — checar overruling.** Um precedente só vale se ainda for o
   entendimento vigente. Antes de citar, verifique se a tese foi superada, revista ou
   está em revisão (overruling pendente). Acórdão antigo sem essa conferência é risco,
   não munição.

4. **Precisão de citação.** Toda referência deve trazer **número do processo, relator,
   órgão julgador, data de julgamento** e, quando houver, o **número do Tema** (Tema 69,
   Tema 1.093 etc.). Citação sem esses dados é inverificável e fragiliza a peça.

5. **Distinguishing e superação.** Saber afastar um precedente desfavorável é tão
   importante quanto invocar um favorável. Estruture o distinguishing fato a fato,
   demonstrando que a hipótese do caso difere da ratio decidendi do paradigma.

6. **Consultar o acervo local ANTES da web.** Esta é a estratégia HÍBRIDA do projeto.
   O acervo curado (`acervo/`) tem prioridade para **descoberta**, porque já foi
   organizado e alinhado à linha do escritório. Ele não substitui a confirmação do
   teor, vigência e estado atual na fonte oficial. Item sem confirmação oficial fica
   marcado como não verificado e bloqueado para citação material.

7. **Prequestionamento (recursos excepcionais).** Para fundamentar RE/REsp, a tese
   precisa ter sido prequestionada no acórdão recorrido (Súmulas 282 e 356 do STF). Ao
   pesquisar, já mapeie se o ponto foi debatido na origem — sem prequestionamento, o
   recurso sequer é conhecido.

8. **Rastreabilidade.** Todo precedente citado deve ter URL oficial conferida. Nada de
   "o STJ já decidiu" sem indicar onde se confere.

---

## Estratégia de Busca (passo a passo)

Execute nesta ordem. A lógica é começar pelas fontes de maior força vinculante e descer
até a doutrina.

**Passo 1 — Súmulas (vinculantes e ordinárias) primeiro.**
Busque por palavra-chave nas súmulas vinculantes do STF (CF 103-A) e nas súmulas
ordinárias de STF e STJ. Súmula é enunciado pronto — "munição" mais forte e direta.
Atenção: súmula vinculante obriga juízos e Administração; súmula ordinária apenas
orienta.

**Passo 2 — Repetitivos (CPC 1.036) e repercussão geral (CPC 1.035).**
Verifique se há tese fixada em recurso repetitivo (STJ) ou em repercussão geral (STF).
Havendo tese fixada, ela é vinculante (CPC 927, III) e tende a encerrar a discussão.
Liste também os temas apenas **afetados** (ainda não julgados) — eles permitem pedir
suspensão (CPC 1.037, II).

**Passo 3 — Acórdãos recentes (últimos 24 meses).**
Filtre por classe processual (REsp, AgInt, EAREsp, AREsp no STJ; RE, ARE, AgR no STF).
Identifique o leading case e registre relator, órgão e data. Acórdãos recentes mostram
o estado atual da tese.

**Passo 4 — Divergência entre Turmas/Seções (EREsp — CPC 1.043).**
Verifique se há divergência atual entre Turmas (1ª e 2ª) ou Seções do mesmo tribunal.
Havendo, abre-se espaço para Embargos de Divergência (CPC 1.043). Lembre da regra de
peso: **Seção > Turma**; Órgão Especial/Pleno > Seção.

**Passo 5 — Informativos recentes.**
Revise os informativos mais novos (Informativo do STJ, semanal; Informativo do STF, a
cada sessão de julgamento) dos últimos 60 dias. Eles trazem tendências ainda não
consolidadas em jurisprudência uniforme.

**Passo 6 — Doutrina e tribunais locais (TJ/TRF).**
Complemento para teses sem precedente vinculante, para reforço argumentativo e para
casos de borda. Use doutrina de referência e jurisprudência local quando os tribunais
superiores forem omissos.

### Fontes oficiais

```
STJ      jurisprudencia.stj.jus.br  +  scon.stj.jus.br/SCON
STF      portal.stf.jus.br  +  jurisprudencia.stf.jus.br
Súmulas vinculantes   portal.stf.jus.br (textos/sumulas-vinculantes)
Súmulas STJ           stj.jus.br (Comunicacao/Sumulas)
Repercussão geral     portal.stf.jus.br (jurisprudencia-repercussao)
Repetitivos STJ       processo.stj.jus.br/repetitivos
Informativos STJ      stj.jus.br/informativosjurisprudencia
Informativos STF      stf.jus.br/informativos
```

### Operadores de busca (base do STJ)

```
ADJ          termos adjacentes (a ordem importa)
NEAR         termos próximos (ordem livre)
"..."        frase exata
*            curinga (radical de palavra)
NÃO / NOT    exclusão de termo
```

---

## Base de Conhecimento Local (acervo/)

ANTES de qualquer busca online, o agente DEVE consultar o acervo curado do projeto.
Esta é a etapa obrigatória da estratégia híbrida.

**Sequência de consulta ao acervo:**

1. **Busque ranqueado (não leia o índice inteiro).** Rode
   `npx criminalsquad search-acervo --query "<tema/tese sem dados do caso>" --limit 8 --json`.
   O motor consulta `acervo/_index.yaml` localmente e devolve uma shortlist ranqueada
   (path, tipo, tema, tags, confiança) — o análogo, no acervo, do `search-skills`. Fontes
   `oficial-verificado` vêm à frente de `descoberta`. Não carregue o `_index.yaml` inteiro
   no prompt; ele é fonte de verdade, não conteúdo para ler por completo. (Se precisar de
   um assunto muito específico não catalogado, complemente com `Grep` nas pastas.)

2. **Leia os arquivos pertinentes.** `Read` apenas nos `path` que a shortlist retornou
   como relevantes. Extraia o que já está consolidado: precedentes, citações prontas,
   distinções já mapeadas. Pastas: `acervo/jurisprudencia/`, `acervo/doutrina/`,
   `acervo/legislacao/`.

3. **Só então complemente com a web.** Depois de esgotar o acervo, use pesquisa web
   (web_search / web_fetch nas fontes oficiais do passo a passo) para:
   - atualizar precedentes (checar overruling e teses novas);
   - confirmar números, relatores e datas;
   - preencher lacunas que o acervo não cobre.

**Por que híbrido:** o acervo local é confiável, curado e rápido — evita reinventar
pesquisa já feita e mantém a linha do escritório. A web garante atualidade. Acervo
primeiro, web depois: nunca o contrário.

```
ROTEIRO HÍBRIDO (resumo)
1. search-acervo --query "<tema>" --limit 8 --json   (shortlist ranqueada do acervo)
2. Read          <paths relevantes da shortlist>
3. Web           web_search / web_fetch (fontes oficiais) para atualizar e complementar
```

---

## Entregável e Citação

O resultado da pesquisa deve conter os blocos necessários à suficiência da resposta.
Não complete quotas com precedentes redundantes: pertinência, hierarquia, atualidade e
confirmação oficial valem mais que volume.

### a) Tabela de precedentes

Inclua os itens materialmente necessários, ordenados por força vinculante. Pode haver
menos de cinco quando a controvérsia estiver resolvida por autoridade suficiente;
pode haver mais quando divergência, distinguishing ou atualização exigirem.

```
| Tribunal | Classe       | Nº         | Relator  | Órgão | Data    | Tese (resumo) | Vinculante (CPC 927) | URL |
|----------|--------------|------------|----------|-------|---------|---------------|----------------------|-----|
| STF      | SV nº        | —          | Pleno    | Pleno | —       | ___           | SIM (CF 103-A)       | ___ |
| STF      | RE c/ RG     | ___        | Min. ___ | Pleno | __/____ | ___           | SIM (1.035)          | ___ |
| STJ      | REsp Repet.  | ___        | Min. ___ | 1ª S  | __/____ | ___           | SIM (1.036)          | ___ |
| STJ      | EAREsp       | ___        | Min. ___ | CE    | __/____ | ___           | NÃO (uniformizou)    | ___ |
| STJ      | REsp         | ___        | Min. ___ | 2ª T  | __/____ | ___           | NÃO (persuasivo)     | ___ |
```

### b) Leading cases materialmente relevantes

Comente cada leading case realmente relevante com **ratio decidendi**, **distinguishing
possível** e **aplicação no caso**. Não repita julgados equivalentes para alcançar
quantidade predeterminada.

```
LEADING CASE 1 — STJ REsp ___, Rel. Min. ___, 1ª Seção, j. __/__/____ (Tema ___)
TESE FIXADA: "___" (rito do art. 1.036 do CPC).
RATIO DECIDENDI: o STJ entendeu que ___ porque ___.
DISTINGUISHING POSSÍVEL: o caso do cliente difere em ___, o que pode afastar o
                         precedente / reforça sua aplicação.
APLICAÇÃO NO CASO: usar como fundamento direto OU distinguir, conforme a posição.
URL: https://scon.stj.jus.br/SCON/jurisprudencia/...
```

(Repita apenas para os demais paradigmas materialmente necessários.)

### c) Roteiro pronto de citação para a peça

```
"O E. Superior Tribunal de Justiça, ao julgar o REsp Repetitivo nº ___, sob o rito
do art. 1.036 do CPC, fixou a seguinte tese (Tema ___):

    '___'

Trata-se de precedente vinculante, nos termos do art. 927, III, do CPC, de
obrigatória observância pelos juízos e tribunais.

No mesmo sentido, o E. Supremo Tribunal Federal reconheceu a repercussão geral da
matéria no Tema ___ (RE ___), fixando a tese de que '___'.

Aplicáveis, portanto, ao caso em exame, impõe-se ___."
```

---

## Quality Criteria

- [ ] Acervo local (`acervo/_index.yaml`, `acervo/jurisprudencia/`, `acervo/doutrina/`,
      `acervo/legislacao/`) consultado ANTES da pesquisa web.
- [ ] Tabela com os precedentes **suficientes e não redundantes**, ordenada por força vinculante; eventual ausência de autoridade relevante foi explicitada.
- [ ] Indicação clara de vinculação (CPC 927) item a item — qual é vinculante e qual é
      persuasivo.
- [ ] Verificada a diferença entre **Súmula Vinculante** (CF 103-A; Lei 11.417/2006) e
      **súmula ordinária**.
- [ ] Verificada a existência de **repetitivo (CPC 1.036)** e/ou **repercussão geral
      (CPC 1.035)** sobre o tema; número do Tema registrado.
- [ ] Verificado overruling / revisão pendente para cada precedente citado.
- [ ] **Informativos recentes** (últimos 60 dias) consultados.
- [ ] Toda citação com **nº, relator, órgão, data** e **URL oficial** conferida.
- [ ] Para RE/REsp: prequestionamento avaliado (Súmulas 282 e 356 do STF).
- [ ] Leading cases materialmente relevantes comentados (ratio + distinguishing + aplicação), sem preenchimento por quota.

---

## Anti-Patterns

- **Citar acórdão antigo sem checar overruling.** Precedente superado vira argumento
  contra você. Confirme a vigência da tese antes de usar.
- **Confundir súmula vinculante com súmula ordinária.** Vinculante obriga juízos e
  Administração (CF 103-A); ordinária apenas orienta. Tratar uma como a outra é erro
  técnico grave.
- **Citar acórdão de Turma quando há repetitivo da Seção.** Seção > Turma. Existindo
  tese fixada em repetitivo (CPC 1.036), invocar Turma isolada enfraquece a peça.
- **Ignorar o acervo local e ir direto para a web.** Quebra a estratégia híbrida do
  projeto, desperdiça pesquisa já curada e arrisca divergir da linha do escritório.
  Acervo primeiro, sempre.
- **Citar sem número, relator e data.** Referência inverificável não fundamenta nada e
  expõe a peça a impugnação.
- **Citar repetitivo apenas afetado como se a tese estivesse fixada.** Tema afetado mas
  não julgado não tem tese — serve para pedir suspensão (CPC 1.037, II), não para
  fundamentar mérito.
- **Esquecer o número do Tema (Tema 69, Tema 1.093 etc.).** Sem o número, a conferência
  pela parte contrária e pelo juízo fica dificultada e a citação perde força.
