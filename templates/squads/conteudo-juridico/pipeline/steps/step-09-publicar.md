---
step: "09"
name: "Publicação nas Redes"
type: agent
agent: revisor
execution: inline
depends_on: step-08
---

# Step 09: Rita Revisão — Publicação nas Redes

## Para o Pipeline Runner

Executar a persona **Rita Revisão** (`agents/revisor.custom.md`) usando a skill `publicacao-redes` para publicar o conteúdo aprovado.

**ATENÇÃO:** Este step só executa após **APPROVE** no Step 08 e exige **confirmação explícita do usuário** antes de publicar. A skill `publicacao-redes` reaplica o gate ético como última barreira.

## Inputs para este Step

- `output/slides/rendered/manifest.json` → imagens prontas para upload
- `output/copy.md` → legenda final + hashtags + disclaimer
- `output/revisao-final.md` → confirmação de veredicto APPROVE
- `skills/publicacao-redes/SKILL.md` → protocolo de publicação + gate ético final

## Expected Outputs

- `output/publish-report.md` → relatório da publicação com link do post, plataforma, data/hora e status

## Execution Mode

- **Modo:** Inline
- **Skills:** publicacao-redes

## Quality Gate (antes de publicar)

- [ ] `output/revisao-final.md` com veredicto **APPROVE**
- [ ] `manifest.json` com `ready_to_publish: true`
- [ ] **Gate ético reaplicado** pela skill `publicacao-redes` — nenhum veto (captação, promessa de resultado, CTA comercial, caso identificável, sensacionalismo, superlativos)
- [ ] **Confirmação explícita do usuário** registrada (preview apresentado)

Se qualquer gate falhar, **PARAR** e reportar ao usuário. Nunca publicar sem todos os gates passando. Em dúvida sobre publicidade/sigilo, escalar ao advogado responsável.

## Após a Publicação

### Sucesso:
```
🎉 Conteúdo publicado!

🔗 Link do post: [URL]
🗓️ Publicado em: YYYY-MM-DD HH:MM
📊 Slides publicados: N
✅ Gate ético: aprovado

Relatório completo em output/publish-report.md.
```

### Falha:
```
❌ Falha na publicação.

Erro: [mensagem exata]
Causa provável: [análise]
Próximo passo: [ação específica]

Os arquivos estão em output/ e podem ser publicados manualmente ou após correção.
```

## Post-Execution: Memory Update

Após publicação bem-sucedida, registrar em `_memory/memories.md`:
- Data e título do conteúdo publicado
- Tema/fonte + ângulo utilizado
- Resultado do gate ético (e quaisquer vetos corrigidos no caminho)
- Link do post
- Observações sobre o que funcionou bem (dentro dos limites éticos)
