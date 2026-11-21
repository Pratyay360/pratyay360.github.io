---
title: Drawy Self hostable Collaborative Whiteboard
description: >-
  Drawy, a multi tenant capable with real time collaboration and version
  history. Covers setup, self hosting on Cloudflare Workers, and architecture.
date: '2026-11-19T14:41:56.828Z'
weight: 1
draft: false
slug: drawy
tags:
  - Excalidraw
  - self-hosting
  - Cloudflare Workers
  - real-time collaboration
  - Drawy
  - postgres
  - collaborative
  - whiteboard
  - collaboration
  - opensource
  - wrangler
---
Drawy is a collaborative drawing workspace built on Excalidraw. It gives you the full Excalidraw editor — infinite canvas, shapes, arrows, freehand, frames, images — plus the collaboration features most teams need: live cursors, shared canvases, version history, and reusable libraries. Everything runs on your infrastructure.

## Quick Start (5 Minutes)

### 1. Create an Account

No email required. Just a username and password.

```bash
# Open the hosted version
open https://drawy.pratyay.online/login

# Or self-host (see Self-Hosting section below)
```

- Usernames: letters, numbers, underscores, hyphens (lowercased)
- No email, no confirmation link, no password reset **keep credentials safe**

### 2. Start a canvas

Click **New canvas** in the sidebar. Canvases group by last-edit date so recent work stays visible.

Drawy autosaves as you draw. After a short pause the header shows **Saved**. The **Save** Button in the editor header forces an immediate save.

### 3. Share &amp; collaborate

Open **Share canvas** to choose access:


| Option                 | Who can open         | Best for                                          |
| ---------------------- | -------------------- | ------------------------------------------------- |
| **Private** (default)  | Only you             | Work in progress                                  |
| **Invite by username** | Specific Drawy user  | Editing together in real time                     |
| **Read-only link**     | Anyone with the link | Publishing finished drawings, collecting feedback |


Revoke access anytime without deleting the canvas.

---

## Core Features

### Real-time collaboration

Multiple people edit the same canvas simultaneously. Live cursors, selections, and strokes appear as they happen — point at a shape instead of describing it.

Powered by Cloudflare’s Durable Objects. The worker relays updates between users.

### Version history

Drawy keeps the 50 most recent snapshots per canvas. Open version history → click a snapshot → one-click rollback.

### Libraries

Reusable shape collections (icons, diagram pieces, UI mockups) that work across canvases.

- **Public catalog**: Browse [libraries.excalidraw.com](https://libraries.excalidraw.com) From the Libraries sidebar. Search, preview, **Save** to your personal library.
- **Personal library**: Saved libraries live in browser local Storage — available across canvases in the same browser, not tied to your account.
- **From canvas**: Select shapes in the editor → add to library via Excalidraw's library panel.
- **Import from Excalidraw.com**: "Add to library" links on excalidraw.com open directly in Drawy.

## Self Hosting Drawy

Drawy has three components: front end (TanStack Start), real time worker (Cloudflare Durable Objects), and data store (Postgres). All deploy together via `wrangler deploy`.

### Prerequisites

- **mise** (version/task manager) — `curl https://mise.run \| sh`
- **PostgreSQL** — Neon, Supabase, or any remote Postgres (pooled URL preferred)
- **Cloudflare account** — Durable Objects live in the same Worker as the app
- **Bun** — `curl -fsSL https://bun.sh/install \| bash`

### 1. Clone &amp; install

```bash
git clone https://github.com/Pratyay360/drawy.git
cd drawy
mise deps
```

### 2. Configure environment


| Variable            | Required | Purpose                                                             |
| ------------------- | -------- | ------------------------------------------------------------------- |
| `DATABASE_URL`      | yes      | Postgres connection string (pooled URL preferred)                   |
| `SESSION_SECRET`    | yes      | Signs session cookie — `openssl rand -hex 32`                       |
| `VITE_SITE_URL`     | no       | Canonical app URL (defaults to `https://drawyparty.pratyay.online`) |
| `SENTRY_AUTH_TOKEN` | no       | Uploads source maps during build (optional)                         |


Copy `.env.example` to `.env` and fill in values.

### 3. Create database tables

```bash
bun run db:generate
bun run db:migrate
bun run db:push
```

Applies `src/lib/db/schema.ts` → creates `app_users`, `canvases`, `canvas_versions`.

### 4. Run locally

```bash
bun run dev          # Frontend on http://localhost:3000
bun run cf:dev       # Built worker on http://localhost:8787 (app + rooms)
```

### 5. Deploy to Cloudflare Workers

```bash
bun run build              # Writes .output/server and .output/public
bun run deploy:dry-run     # Packages worker without uploading
bun run deploy             # Builds and uploads to Cloudflare
```

**wrangler.jsonc** is the single source of truth for worker config: name, compatibility date/flags, `ASSETS` binding, `Main`/`Rooms` Durable Object bindings.

**Secrets** (set in Cloudflare dashboard or via CLI):

```bash
bunx wrangler secret put DATABASE_URL
bunx wrangler secret put SESSION_SECRET
```

**Operational notes:**

- Reverse proxy must forward WebSocket upgrades on `/parties`
- Image uploads go to imgcdn.dev via `src/lib/s3.ts` — replace if you want own storage
- Session cookie marked `Secure` only when `NODE_ENV=production` — serve over HTTPS
- Lint/format: `mise run lint` (oxlint), `mise run format` (oxfmt)

---

## Architecture (for developers)


| Layer                   | Technology                                | Role                                           |
| ----------------------- | ----------------------------------------- | ---------------------------------------------- |
| Canvas &amp; editor     | Excalidraw                                | Drawing surface, tools, element model          |
| App shell &amp; routing | TanStack Start + Router                   | Application framework &amp; routes             |
| API                     | oRPC                                      | Typed API between client &amp; server          |
| Realtime                | PartyServer on Cloudflare Durable Objects | Presence &amp; Yjs sync for live collaboration |
| Storage                 | Postgres via Drizzle ORM                  | Persistent canvas storage                      |
| UI                      | Astryx                                    | Component library &amp; theming                |


**Data flow:**

1. Client renders Excalidraw inside TanStack Start app
2. Live cursors/selections/strokes sync via Cloudflare Durable Objects
3. Canvases persist to Postgres → enables autosave + version history

---

## Privacy &amp; Security

### What Drawy Stores

- **Account**: Username + password hash (≥2 chars, any hash)
- **Canvas data**: Content, title, version history (50 snapshots max/canvas)
- **Sharing settings**: Usernames with access, read-only link status

### What Drawy does NOT store

- No email addresses
- No advertising cookies
- No third-party ad profiles
- No analytics/tracking

### Images

Pasted/uploaded images may go to an external host (imgbb.com by default). The saved URL stays with the canvas. Once uploaded, the image lives on that host. To request removal: [Drawy contact page](https://drawy.pratyay.online/contact).

### Sessions &amp; error tracking

May use Sentry (when enabled) for error tracking — collects technical details per its own policy.

### Data removal

- **Delete canvas**: Remove from sidebar → deletes canvas + version history
- **Uploaded images**: May persist on external host until removed there
- **Account removal**: [Contact page](https://drawy.pratyay.online/contact)



## Resources &amp; Links

- 🌐 **Hosted instance**: [https://drawy.pratyay.online](https://drawy.pratyay.online)
- 📦 **GitHub**: [https://github.com/Pratyay360/drawy](https://github.com/Pratyay360/drawy)
- 📦 **DrawX repo**: [https://github.com/Pratyay360/drawx](https://github.com/Pratyay360/drawx)
- 📖 **DrawX downloads**: [https://github.com/Pratyay360/drawx/releases](https://github.com/Pratyay360/drawx/releases)
- 🏗️ **Self-hosting guide**: This page (Self-Hosting section)
- 🔒 **Privacy details**: Privacy &amp; Security section above
- 🐛 **Issues**: [https://github.com/Pratyay360/drawy/issues](https://github.com/Pratyay360/drawy/issues)
