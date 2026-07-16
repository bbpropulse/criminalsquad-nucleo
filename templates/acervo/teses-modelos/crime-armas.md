# Eixo: Armas / Estatuto do Desarmamento

> Lei 10.826/2003 (Estatuto do Desarmamento). Teses sobre tipicidade (arma desmuniciada/ineficaz/desmontada, munição isolada, numeração suprimida), abolitio criminis temporária, posse x porte, perícia, concurso de crimes e (in)significância.

## Contagens

- **Entradas brutas processadas:** 24 (22 do bucket `crime-armas` + 1 reclassificada de `indefinido` ARM-MISC + 1 já no rodapé do bucket).
- **Duplicatas/quase-duplicatas mescladas:** 2 pares (arma desmuniciada × arma desmontada são distintas — mantidas; "posse de munição caracteriza crime" × "tipicidade do porte de munições" mantidas por recortes distintos).
- **Teses únicas finais:** 23.
- **Por polo:** Defensiva 2 | Acusatória 21.
- **Por natureza:** Mérito 19 | Subsidiária 4.

### Contratese (eixos espelhados def ↔ acus)

| Tema | Polo defensivo | Polo acusatório |
|------|----------------|-----------------|
| Arma inapta/ineficaz | ARM-01 (atipicidade) | ARM-12 (nulidade da perícia não gera atipicidade) / ARM-13 (perícia por policiais válida) |
| Munição isolada / quantidade | ARM-02 (insignificância no caso concreto) | ARM-09, ARM-16 (perigo abstrato, tipicidade independe de quantidade) |
| Consunção porte × outro crime | — | ARM-20, ARM-21, ARM-22 (sem consunção/desígnios autônomos) |

---

## Fichas completas (lote equilibrado)

### ARM-01 — Atipicidade do porte de arma inapta/ineficaz
- **Natureza:** Mérito (tipicidade)
- **Polo:** Defensiva
- **Tese:** É atípica a conduta de possuir ou portar arma inapta (sem aptidão para produzir disparos), por ausência de lesão ao bem jurídico tutelado.
- **Fundamento:** Lei 10.826/2003; ausência de potencialidade lesiva.
- **Jurisprudência:** STJ AREsp 1.553.489/SE; STJ AREsp 1.285.073/SE.
- **Contratese (acusação):** ARM-12 / ARM-13 (a eficácia pode ser aferida por outros meios; nulidade pericial não induz atipicidade).
- **Fonte(s):** Coletânea-Defensoria-SE, p. 32.

### ARM-02 — Insignificância na posse de mínima munição sem potencialidade lesiva relevante (caso concreto)
- **Natureza:** Mérito (tipicidade material)
- **Polo:** Defensiva
- **Tese:** Reconhece-se a insignificância e a absolvição quando a posse se resume a 1 munição de uso permitido e 1 de uso restrito, sem potencialidade lesiva relevante — exceção acolhida no caso concreto, embora a regra geral seja de crime de perigo abstrato.
- **Fundamento:** Lei 10.826/2003 arts. 12 e 16; princípio da insignificância.
- **Jurisprudência:** STJ REsp 1.918.506.
- **Contratese (acusação):** ARM-09, ARM-16, ARM-17 (perigo abstrato; tipicidade independe de quantidade).
- **Fonte(s):** Sanitize, p. 26 (reclassificada de `indefinido` item 41).

### ARM-09 — Posse/porte de munição isolada caracteriza o crime (perigo abstrato)
- **Natureza:** Mérito (tipicidade)
- **Polo:** Acusatória
- **Tese:** O porte de munição de arma de fogo (de uso restrito) constitui crime de perigo abstrato e de mera conduta; é irrelevante a presença da arma para a tipificação.
- **Fundamento:** Lei 10.826/2003 arts. 14 e 16.
- **Jurisprudência:** STF RHC 118.304; STF HC 119.154.
- **Contratese (defesa):** ARM-02 (insignificância no caso concreto).
- **Fonte(s):** Teses-MP, p. 307.

### ARM-20 — Imputação simultânea de homicídio e porte de arma (sem consunção)
- **Natureza:** Subsidiária (concurso/consunção)
- **Polo:** Acusatória
- **Tese:** Não se aplica a consunção entre portar arma e a tentativa de homicídio, por decorrerem de desígnios autônomos.
- **Fundamento:** princípio da consunção (afastado).
- **Jurisprudência:** STJ HC 101.127/SP.
- **Contratese (defesa):** absorção do porte como crime-meio (ver OUT — item 38 do bucket indefinido, eixo dosimetria/drogas-armas).
- **Fonte(s):** Teses-MP, p. 173.

---

## Índice completo do eixo

| T-ID | Tese | Polo | Natureza | Fonte(s) |
|------|------|------|----------|----------|
| ARM-01 | Atipicidade do porte de arma inapta/ineficaz | Defensiva | Mérito | Coletânea-Defensoria-SE, p. 32 (STJ AREsp 1.553.489/SE; 1.285.073/SE) |
| ARM-02 | Insignificância de mínima munição sem potencialidade lesiva (caso concreto) | Defensiva | Mérito | Sanitize, p. 26 (STJ REsp 1.918.506) |
| ARM-03 | Arma desmontada configura o crime (provada a eficácia) | Acusatória | Mérito | Teses-MP, p. 306 (doutrina — Marcão) |
| ARM-04 | Arma desmuniciada configura crime (perigo abstrato) | Acusatória | Mérito | Teses-MP, p. 312-313 (STF HC 96.650; RHC 90.197) |
| ARM-05 | Posse de silenciador de uso restrito prescinde de perícia (com laudo do modelo) | Acusatória | Mérito | Teses-MP, p. 306 (STF RHC 128.281) |
| ARM-06 | Numeração adulterada/raspada/suprimida configura art. 16, p.ú., IV (uso permitido ou restrito) | Acusatória | Mérito | Teses-MP, p. 314 (STF HC 99.582; RHC 89.889) |
| ARM-07 | Atipicidade temporária da posse de uso restrito só entre 23/12/2003 e 23/10/2005 | Acusatória | Mérito | Teses-MP, p. 310-311 (STF HC 109.100; STJ REsp 1.311.408-RN) |
| ARM-08 | Porte de arma não foi abarcado pela abolitio temporária | Acusatória | Mérito | Teses-MP, p. 312 (STF HC 94.213) |
| ARM-09 | Munição isolada caracteriza o crime (perigo abstrato/mera conduta) | Acusatória | Mérito | Teses-MP, p. 307 (STF RHC 118.304; HC 119.154) |
| ARM-10 | Transporte para regularização, sem autorização, não gera atipicidade | Acusatória | Mérito | Teses-MP, p. 312 (STF HC 91.193) |
| ARM-11 | Tipicidade do tiro desportivo que transporta arma municiada fora da guia | Acusatória | Mérito | Teses-MP, p. 315-316 (STJ RHC 34.579-RS) |
| ARM-12 | Nulidade do exame pericial não induz necessariamente atipicidade | Acusatória | Mérito | Teses-MP, p. 313 (STF HC 96.921) |
| ARM-13 | Perícia em arma por policiais nomeados pelo Delegado é válida | Acusatória | Mérito | Teses-MP, p. 313-314 (STF HC 98.306) |
| ARM-14 | Policial pode cometer porte/posse sem autorização para o objeto específico | Acusatória | Mérito | Teses-MP, p. 307-308 (STF HC 106.659; STJ RHC 70.141-RJ; Inf. 597) |
| ARM-15 | Policial civil que não observa o registro comete o crime | Acusatória | Mérito | Teses-MP, p. 309-310 (STJ RHC 70.141-RJ; Inf. 597) |
| ARM-16 | Tipicidade do porte de munições independe de quantidade/tipo | Acusatória | Mérito | Teses-MP, p. 315 (STF HC 131771/RJ; Inf. 844) |
| ARM-17 | Inviável insignificância de munição no contexto de outros crimes (tráfico) | Acusatória | Subsidiária | PJTS, p. 72 |
| ARM-18 | Vigia que porta arma após o expediente — sem coação moral irresistível | Acusatória | Mérito | Teses-MP, p. 314 (STJ REsp 1.456.633-RS; Inf. 581) |
| ARM-19 | Concurso material entre arts. 14 e 16 (uso permitido x restrito) | Acusatória | Mérito | Teses-MP, p. 305 (STJ HC 211.834/SP) |
| ARM-20 | Possibilidade de concurso formal entre arts. 14 e 16 (mesmo contexto) | Acusatória | Mérito | Teses-MP, p. 305-306 (STJ HC 130.797) |
| ARM-21 | Imputação simultânea de homicídio e porte (sem consunção) | Acusatória | Subsidiária | Teses-MP, p. 173 (STJ HC 101.127/SP) |
| ARM-22 | Porte ilegal dias após o roubo é delito autônomo (sem consunção) | Acusatória | Subsidiária | Teses-MP, p. 306 (STF RHC 106.067) |
| ARM-23 | Sem consunção entre arts. 12, 14 e 16 do Estatuto | Acusatória | Subsidiária | PJTS, p. 72 |


---

## Fichas completas (lote 2) — Armas

> Eixo: Armas / Estatuto do Desarmamento (Lei 10.826/2003). Fichas das teses restantes (ARM-03 a ARM-08, ARM-10 a ARM-19, ARM-21, ARM-22, ARM-23). Jurisprudência transcrita apenas quando consta da fonte; do contrário `[a confirmar]`.

### ARM-03 — Arma desmontada configura o crime (provada a eficácia)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à atipicidade por arma desmontada |

- **Tese:** A circunstância de a arma encontrar-se desmontada quando da apreensão não impede a tipificação, desde que provada a eficácia do instrumento; o tipo incrimina também o porte de acessório e munição.
- **Fundamento:** Lei 10.826/2003 art. 14.
- **Jurisprudência:** doutrina — MARCÃO, Renato. *Estatuto do Desarmamento*, 2009, p. 77 (sem precedente numérico — `[a confirmar]` julgado correspondente).
- **Contratese (defesa):** ARM-01 (atipicidade da arma inapta/ineficaz).
- **Fonte(s):** Teses-MP, p. 306.

### ARM-04 — Arma desmuniciada configura crime (perigo abstrato)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à atipicidade por ausência de munição |

- **Tese:** O fato de a arma estar desprovida de munição não descaracteriza o crime de porte; a objetividade jurídica transcende a mera proteção da incolumidade pessoal, tratando-se de crime de perigo abstrato.
- **Fundamento:** Lei 10.826/2003 art. 14.
- **Jurisprudência:** STF HC 96.650; STF RHC 90.197.
- **Contratese (defesa):** atipicidade da arma desmuniciada/inapta (cf. ARM-01) `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 312-313.

### ARM-05 — Posse de silenciador de uso restrito prescinde de perícia (com laudo do modelo)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à exigência de perícia de potencialidade do acessório |

- **Tese:** Presente laudo especificando o modelo do silenciador de uso restrito, é desnecessária a perícia para comprovar a potencialidade lesiva do acessório (art. 16).
- **Fundamento:** Lei 10.826/2003 art. 16.
- **Jurisprudência:** STF RHC 128.281.
- **Contratese (defesa):** nulidade/atipicidade por ausência de perícia do acessório (cf. ARM-12) `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 306.

### ARM-06 — Numeração adulterada/raspada/suprimida configura art. 16, p.ú., IV (uso permitido ou restrito)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Tipificação autônoma por supressão de numeração |

- **Tese:** A supressão do número ou sinal identificador do artefato impede o cadastramento e controle; a função social do combate alcança qualquer tipo de arma, sendo crime autônomo ainda que de uso permitido.
- **Fundamento:** Lei 10.826/2003 art. 16, parágrafo único, IV.
- **Jurisprudência:** STF HC 99.582; STF RHC 89.889.
- **Contratese (defesa):** `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 314.

### ARM-07 — Atipicidade temporária da posse de uso restrito só entre 23/12/2003 e 23/10/2005
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Delimitação temporal da abolitio criminis temporária |

- **Tese:** A atipicidade temporária (abolitio criminis temporária) de possuir arma de uso restrito ocorreu apenas entre 23/12/2003 e 23/10/2005; após o termo final, o flagrado na posse comete o crime do art. 16.
- **Fundamento:** Lei 10.826/2003 art. 16; arts. 30 e 32.
- **Jurisprudência:** STF HC 109.100; STJ REsp 1.311.408-RN; STJ Inf. 519.
- **Contratese (defesa):** extensão da atipicidade temporária ao caso concreto `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 310-311.

### ARM-08 — Porte de arma não foi abarcado pela abolitio temporária
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à extensão da abolitio ao porte |

- **Tese:** A atipicidade temporária aplica-se apenas ao crime de posse; a conduta de portar arma de fogo (fora da residência ou local de trabalho) não foi abarcada pela abolitio criminis temporária.
- **Fundamento:** Lei 10.826/2003 art. 14.
- **Jurisprudência:** STF HC 94.213.
- **Contratese (defesa):** extensão da abolitio temporária ao porte (cf. ARM-07) `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 312.

### ARM-10 — Transporte para regularização, sem autorização, não gera atipicidade
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à excludente de transporte para regularização |

- **Tese:** A alegação de que a arma estaria sendo transportada para regularização não torna a conduta atípica; estando a arma próxima a pente carregador com cartuchos intactos, a possibilidade de rápido municiamento é evidente.
- **Fundamento:** Lei 10.826/2003 art. 14.
- **Jurisprudência:** STF HC 91.193.
- **Contratese (defesa):** atipicidade/erro por transporte para regularização `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 312.

### ARM-11 — Tipicidade do tiro desportivo que transporta arma municiada fora da guia
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Tipificação do desportista em desacordo com guia de tráfego |

- **Tese:** É típica (art. 14) a conduta do praticante de tiro desportivo que transporta arma municiada em desacordo com os termos da guia de tráfego, que autorizava apenas o transporte de arma desmuniciada.
- **Fundamento:** Lei 10.826/2003 art. 14; art. 6º; Decreto 5.123/2004 art. 30, § 1º.
- **Jurisprudência:** STJ RHC 34.579-RS; STJ Inf. 540.
- **Contratese (defesa):** `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 315-316.

### ARM-12 — Nulidade do exame pericial não induz necessariamente atipicidade
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à atipicidade por vício pericial |

- **Tese:** Eventual nulidade do exame pericial na arma não descaracteriza o delito do art. 14 quando existir conjunto probatório que permita ao julgador formar convicção da existência do crime e da autoria.
- **Fundamento:** Lei 10.826/2003 art. 14, caput.
- **Jurisprudência:** STF HC 96.921.
- **Contratese (defesa):** ARM-01 (atipicidade da arma inapta/ineficaz — eficácia aferível só por perícia válida).
- **Fonte(s):** Teses-MP, p. 313.

### ARM-13 — Perícia em arma por policiais nomeados pelo Delegado é válida
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à nulidade da perícia por ausência de perito oficial |

- **Tese:** A perícia realizada por dois policiais nomeados pelo delegado, que assumiram o compromisso, é válida; ainda que o laudo não informe se tinham diploma de curso superior, possuíam habilitação técnica para aferir a eficácia da arma.
- **Fundamento:** Lei 10.826/2003 art. 16, parágrafo único, IV.
- **Jurisprudência:** STF HC 98.306.
- **Contratese (defesa):** ARM-01 (atipicidade da arma inapta/ineficaz).
- **Fonte(s):** Teses-MP, p. 313-314.

### ARM-14 — Policial pode cometer porte/posse sem autorização para o objeto específico
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à excludente do porte funcional do policial |

- **Tese:** A mera condição de policial militar não autoriza o porte de qualquer arma em qualquer situação; portando arma de uso restrito para a qual não possui autorização, responde pelo crime do art. 16.
- **Fundamento:** Lei 10.826/2003 art. 16.
- **Jurisprudência:** STF HC 106.659; STJ RHC 70.141-RJ; STJ Inf. 597.
- **Contratese (defesa):** atipicidade pela condição funcional do policial `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 307-308.

### ARM-15 — Policial civil que não observa o registro comete o crime
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Tipificação por descumprimento de registro mesmo autorizado |

- **Tese:** Configura crime a conduta do policial civil que, mesmo autorizado a portar ou possuir arma de fogo, não observa as imposições legais do Estatuto que impõem o registro das armas no órgão competente.
- **Fundamento:** Lei 10.826/2003 arts. 12 e 14.
- **Jurisprudência:** STJ RHC 70.141-RJ; STJ Inf. 597.
- **Contratese (defesa):** atipicidade/irrelevância por mera irregularidade administrativa `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 309-310.

### ARM-16 — Tipicidade do porte de munições independe de quantidade/tipo
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à insignificância por quantidade de munição |

- **Tese:** A configuração da conduta do art. 14, caput, da Lei 10.826/2003 não depende do tipo ou da quantidade da munição portada pelo agente.
- **Fundamento:** Lei 10.826/2003 art. 14, caput.
- **Jurisprudência:** STF HC 131.771/RJ; STF Inf. 844.
- **Contratese (defesa):** ARM-02 (insignificância de mínima munição sem potencialidade lesiva — caso concreto).
- **Fonte(s):** Teses-MP, p. 315.

### ARM-17 — Inviável insignificância de munição no contexto de outros crimes (tráfico)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Subsidiária | Armas | Réplica à insignificância quando há contexto de tráfico |

- **Tese:** É inviável a insignificância quando a apreensão de pequena quantidade de munição, mesmo desacompanhada de arma, ocorre no contexto de outros crimes, sobretudo o tráfico.
- **Fundamento:** Lei 10.826/2003 (art. 14/16); contexto de tráfico (Lei 11.343/2006) `[a confirmar]` dispositivo expresso.
- **Jurisprudência:** `[a confirmar]` (fonte sem precedente numérico).
- **Contratese (defesa):** ARM-02 (insignificância no caso concreto).
- **Fonte(s):** PJTS, p. 72.

### ARM-18 — Vigia que porta arma após o expediente — sem coação moral irresistível
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Réplica à excludente de culpabilidade do vigia |

- **Tese:** O fato de o empregador obrigar o empregado a portar arma durante o exercício das atribuições de vigia não caracteriza coação moral irresistível (art. 22 do CP) capaz de excluir a culpabilidade do porte ilegal após o término do expediente.
- **Fundamento:** Lei 10.826/2003 art. 14; CP art. 22.
- **Jurisprudência:** STJ REsp 1.456.633-RS; STJ Inf. 581.
- **Contratese (defesa):** coação moral irresistível (art. 22, CP) excludente da culpabilidade `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 314.

### ARM-19 — Concurso material entre arts. 14 e 16 (uso permitido x restrito)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Mérito | Armas | Fixação de concurso material entre os tipos |

- **Tese:** A posse de mais de uma arma ou de arma e munição de tipos penais distintos (arts. 14 e 16) caracteriza concurso material, pois, além da paz e segurança públicas, tutela-se a seriedade dos cadastros do Sistema Nacional de Armas.
- **Fundamento:** Lei 10.826/2003 arts. 14 e 16; CP (concurso material).
- **Jurisprudência:** STJ HC 211.834/SP.
- **Contratese (defesa):** crime único / concurso formal (cf. ARM-20).
- **Fonte(s):** Teses-MP, p. 305.

### ARM-21 — Imputação simultânea de homicídio e porte (sem consunção)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Subsidiária | Armas | Réplica à absorção do porte pelo crime contra a vida |

- **Tese:** Não se aplica a consunção entre portar arma e a tentativa de homicídio, por decorrerem de desígnios autônomos.
- **Fundamento:** princípio da consunção (afastado).
- **Jurisprudência:** STJ HC 101.127/SP.
- **Contratese (defesa):** absorção do porte como crime-meio.
- **Fonte(s):** Teses-MP, p. 173.

### ARM-22 — Porte ilegal dias após o roubo é delito autônomo (sem consunção)
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Subsidiária | Armas | Réplica à absorção do porte pelo roubo |

- **Tese:** Quando o acusado é preso portando ilegalmente arma usada em roubo três dias antes, há condutas autônomas, com violação de diferentes bens jurídicos; inocorrente o esgotamento do dano social no roubo, não há consunção.
- **Fundamento:** Lei 10.826/2003 art. 14; CP art. 157.
- **Jurisprudência:** STF RHC 106.067.
- **Contratese (defesa):** absorção do porte pelo roubo (crime-meio) `[a confirmar]`.
- **Fonte(s):** Teses-MP, p. 306.

### ARM-23 — Sem consunção entre arts. 12, 14 e 16 do Estatuto
| Polo | Natureza | Eixo | Aplicação |
|------|----------|------|-----------|
| Acusatória | Subsidiária | Armas | Réplica à unificação dos tipos do Estatuto por consunção |

- **Tese:** Não há consunção no cometimento dos delitos previstos nos arts. 12, 14 e 16 do Estatuto do Desarmamento.
- **Fundamento:** Lei 10.826/2003 arts. 12, 14 e 16.
- **Jurisprudência:** `[a confirmar]` (fonte sem precedente numérico).
- **Contratese (defesa):** consunção/crime único entre as figuras do Estatuto `[a confirmar]`.
- **Fonte(s):** PJTS, p. 72.

---

**Lote 2 — Armas:** 19 fichas (ARM-03 a ARM-08, ARM-10 a ARM-19, ARM-21, ARM-22, ARM-23).
