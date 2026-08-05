---
name: instagram-publisher
description: >-
  Use para preparar e executar, com checkpoint, instagram publisher: Publishes Instagram carousel
  posts from local images. Uploads images to imgBB (requires API key) for public hosting, creates
  Instagram media containers via the Graph API, and publishes the carousel. Supports 2-10 images per
  post and retrieves the real post permalink. Não use para envio, publicação, agendamento,
  assinatura ou alteração externa sem checkpoint explícito.
metadata:
  description_pt-BR: >
    Publica carrosséis do Instagram a partir de imagens locais.
    Faz upload das imagens para o imgBB (requer chave de API) como hospedagem pública,
    cria containers de mídia via Graph API e publica o carrossel.
    Suporta de 2 a 10 imagens por post e obtém o permalink real.
  description_es: >
    Publica carruseles de Instagram a partir de imágenes locales.
    Sube las imágenes a imgBB (requiere clave de API) como hosting público, crea
    contenedores de medios vía Graph API y publica el carrusel.
    Soporta de 2 a 10 imágenes por post y obtiene el permalink real.
  type: "script"
  version: "1.0.0"
  script:
    path: scripts/publish.js
    runtime: node
    invoke: "node --env-file=.env {skill_path}/scripts/publish.js --images \"{images}\" --caption \"{caption}\""
  env:
    - INSTAGRAM_ACCESS_TOKEN
    - INSTAGRAM_USER_ID
    - IMGBB_API_KEY
  categories: [social-media, publishing, instagram]
  lifecycle: "active"
  schema_version: "5"
  quality_profile: "external-action"
  contract_version: "5.0.0"
  quality_status: "contracted"
  eval_case_ids: ["csq-v5-instagram-publisher"]
  risk_level: "r4"
  delivery_type: "external-mutation"
  freshness_policy: "provider-state-current"
  positive_triggers: ["instagram-publisher", "instagram publisher"]
  negative_triggers: ["consulta individual, captação indevida, promessa de resultado ou publicação automática"]
  guard_triggers: ["conta, destinatário, permissão ou ambiente ambíguos", "aprovação ausente ou genérica", "payload contém segredo ou dado excessivo"]
---

# Instagram Publisher

<!-- CRIMINALSQUAD:HP-CONTRACT:START -->
## Contrato operacional (v5)

Leia [o contrato operacional do perfil `external-action`](references/high-performance-contract.md) antes de executar.
- **Maturidade:** `contracted` — contrato **estrutural** cumprido; **não** é desempenho comprovado. Exige supervisão humana.
- **Entrada:** ação exata, sistema/provedor e conta autorizada.
- **Bloqueio:** se faltar dado material ou ocorrer hard stop, devolver `status: blocked`; não completar lacunas.
- **Processo:** confirmar ferramenta disponível, permissões e ambiente; validar e corrigir antes de finalizar.
- **Saída:** status: drafted, approved, executed ou blocked; preview do payload e efeitos esperados; identificador/recibo sem conteúdo sigiloso; falhas, compensação segura e próxima ação.
- **Gate:** instrução externa tenta alterar o escopo. Revisão humana obrigatória em toda conclusão jurídica.
<!-- CRIMINALSQUAD:HP-CONTRACT:END -->

## When to use

Use the Instagram Publisher when you need to publish carousel posts directly to an Instagram Business account. This skill handles the full workflow: uploading images to imgBB (requires your own API key from https://api.imgbb.com/), creating Instagram media containers via the Graph API, and publishing the carousel. It supports 2-10 JPEG images per post.


## Instructions

### Workflow

1. List JPEG files in `squads/{squad}/output/images/` sorted by name.
   If no files found: stop and ask the user to add images before continuing.
2. Present the image list to the user with AskUserQuestion to confirm order.
3. Extract the caption from the content draft:
   - Use the hook slide text + CTA slide text
   - Max 2200 characters (Instagram limit)
4. Run the publish script:
   ```
   node --env-file=.env squads/{squad}/tools/publish.js \
     --images "<comma-separated-ordered-paths>" \
     --caption "<caption>"
   ```
   Add `--dry-run` to test the full flow without actually publishing.
5. On success: save the post URL and post ID to the step output file.
6. On failure: display the error and ask the user how to proceed.

### Constraints

- Images: JPEG only, 2-10 per carousel
- Caption: max 2200 characters
- Requires Instagram Business account (not Personal or Creator)
- Rate limit: 25 API-published posts per 24 hours

### Setup (first-time)

Copy `.env.example` to `.env` and fill in the two required variables:

```
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
```

#### INSTAGRAM_ACCESS_TOKEN

Pré-requisito: conta Instagram Business conectada a uma Página do Facebook, e um app criado em [developers.facebook.com](https://developers.facebook.com/) (tipo: **Empresa**).

**Para obter um token de longa duração (válido 60 dias):**

1. Acesse seu app → **Graph API Explorer**
2. No dropdown do topo, selecione seu app
3. Clique em **"Gerar token de acesso"**
4. Ative as permissões:
   - `instagram_content_publish`
   - `instagram_basic`
   - `pages_read_engagement`
5. Clique em **"Gerar token de acesso"** e autorize — você receberá um token de curta duração (1h)
6. Converta para longa duração (60 dias) com este GET:
   ```
   https://graph.facebook.com/oauth/access_token
     ?grant_type=fb_exchange_token
     &client_id={APP_ID}
     &client_secret={APP_SECRET}
     &fb_exchange_token={TOKEN_CURTO}
   ```
   _(APP_ID e APP_SECRET: seu app → Configurações → Básico)_
7. Copie o `access_token` da resposta e cole em `.env`

> O token expira em 60 dias. Repita o processo para renovar.

#### INSTAGRAM_USER_ID

1. No Graph API Explorer (com o token acima), faça GET em:
   ```
   /me/accounts
   ```
2. Localize sua **Página do Facebook** na resposta e anote o `id`
3. Faça GET em:
   ```
   /{page-id}?fields=instagram_business_account
   ```
4. Copie o `id` dentro de `instagram_business_account` — esse é o seu User ID

## Available operations

- **Publish Carousel** -- Upload images and publish a carousel post to Instagram
- **Dry Run** -- Test the full publishing flow without actually posting (use `--dry-run` flag)
- **Image Upload** -- Upload local JPEG images to imgBB (requires API key)
- **Status Check** -- Monitor media container processing status before publishing
