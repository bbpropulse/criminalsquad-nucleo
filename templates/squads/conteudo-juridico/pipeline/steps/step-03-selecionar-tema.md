---
step: "03"
name: "Selecionar Tema"
type: checkpoint
depends_on: step-02
---

# 🛑 Checkpoint: Selecionar Tema

## Para o Pipeline Runner

Apresentar ao usuário os temas encontrados pela Júlia Jurisprudência e aguardar a seleção antes de avançar para o copywriter.

## Formato de Apresentação ao Usuário

Ler `output/temas.yaml` e apresentar no formato:

```
🔍 Júlia Jurisprudência encontrou [N] temas sobre [área].

Ranqueados por potencial de conteúdo de autoridade:

---
1️⃣ [Título do tema 1]  —  [tipo]
🏛️ Fonte: [órgão, nº, relator, data]
🔗 [URL oficial]
📝 [Resumo em 2-3 linhas]
💡 Por que importa: [por_que_importa]
⚠️ Atenção ética: [risco_etico, se houver]

---
2️⃣ [Título do tema 2]  —  [tipo]
...

---
Qual tema você quer transformar em conteúdo? (responda com o número)
Ou: "buscar mais" se nenhum te interessou.
```

## Ação do Pipeline Runner após Seleção

1. Registrar o tema escolhido (e qualquer ajuste do usuário)
2. Salvar em `output/tema-selecionado.yaml`:

```yaml
tema_id: 1
titulo: "Título exato do tema"
tipo: "julgado | súmula | tese repetitiva | repercussão geral | lei nova"
fonte: "órgão, nº do acórdão/tema/súmula/lei, relator, data"
url: "URL oficial"
resumo: "Resumo de 2-3 linhas"
por_que_importa: "por que o público se importa"
ajustes_usuario: "[ajustes solicitados, ou vazio]"
selecionado_em: "YYYY-MM-DD HH:MM"
```

3. Avançar para o Step 04 (Gustavo Gancho — Geração de Ângulos + Copy)

## Opções Especiais

- **"buscar mais"** → Solicitar que a Júlia Jurisprudência faça novas buscas com recortes diferentes. Voltar ao Step 02.
- **"[número] + ajuste"** → Registrar o ajuste em `ajustes_usuario` antes de avançar

## Quality Gate

Antes de avançar para o Step 04:
- [ ] `output/tema-selecionado.yaml` existe
- [ ] Há um tema selecionado com fonte (identificação completa) e URL
- [ ] O tema selecionado não depende de caso/cliente identificável (sigilo)
