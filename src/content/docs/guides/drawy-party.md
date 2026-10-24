---
title: "DrawyParty: Low-Latency Collaborative Whiteboard with Cloudflare PartyKit"
description: "High-performance real-time collaborative whiteboard engine combining Excalidraw with Cloudflare PartyKit edge WebSockets and pooled PostgreSQL."
sidebar:
  label: "DrawyParty (PartyKit)"
tags:
  - drawyparty
  - partykit
  - cloudflare-workers
  - excalidraw
  - postgresql
  - realtime
  - crdt
  - edge-computing
---

> Ultra-low-latency, edge-powered collaborative whiteboards powered by Excalidraw and Cloudflare PartyKit.
>
> 🚀 **Live Demo**: [**https://drawyparty.pratyay.online/**](https://drawyparty.pratyay.online/) | 📦 **GitHub**: [**Pratyay360/drawy-party**](https://github.com/Pratyay360/drawy-party)

---

## What is DrawyParty?

[**DrawyParty**](https://github.com/Pratyay360/drawy-party) is a performance-focused, edge-first variant of Drawy designed for teams that require sub-millisecond real-time synchronization across geographic regions.

Instead of routing real-time WebSockets through centralized database servers, DrawyParty utilizes [**PartyKit**](https://partykit.io) running directly on **Cloudflare Workers**. Each collaborative whiteboard room runs as an isolated, stateful edge micro-server located closest to the connected users, providing instant cursor presence and effortless concurrent drawing.

---

## Key Technical Highlights

- ⚡ **Edge-Native WebSockets**: Powered by Cloudflare Workers and PartyKit for lightning-fast broadcast of cursor positions and whiteboard strokes.
- 🐘 **Pooled PostgreSQL Persistence**: Whiteboard snapshots and document versions persist reliably in PostgreSQL (compatible with Supabase, Neon, Tembo, or any connection-pooled Postgres).
- 🧩 **Optimistic CRDT Updates**: Conflict-free concurrent drawing prevents conflicting element overrides when multiple teammates sketch simultaneously.
- 🌐 **Deploy Anywhere**: Packaged with [Nitro](https://nitro.build/) and [TanStack Start](https://tanstack.com/start/latest) for universal hosting across Vercel, Netlify, or Cloudflare Pages.

---

## Architecture: How PartyKit Powers DrawyParty

Traditional real-time web whiteboards face latency challenges when collaborators are distributed across different continents:

```
[User A (Europe)] ──> [Cloudflare Edge PartyKit Room (Frankfurt)] <── [User B (Europe)]
                                   │
                                   ▼ (Async Snapshot Sync)
                        [PostgreSQL Database]
```

1. **Stateful Rooms**: When a user creates or joins a whiteboard, PartyKit automatically provisions a stateful WebSocket room on Cloudflare's nearest edge node.
2. **Instant Broadcast**: Drawing events and cursor coordinates broadcast immediately between peer connections without database write bottlenecks.
3. **Durable Persistence**: Board states are asynchronously saved to pooled PostgreSQL for permanent document storage and retrieval.

---

## Quickstart & Deployment

### 1. One-Click Cloud Deployment

Deploy DrawyParty directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPratyay360%2Fdrawy-party)

### 2. Local Development

Clone the repository and set up your local development environment:

```bash
git clone https://github.com/Pratyay360/drawy-party.git
cd drawy-party

# Install dependencies using mise or npm
npm install
```

### 3. Environment Variables

Create your `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Configure your PartyKit room host and PostgreSQL connection string:

```dotenv
DATABASE_URL="postgres://user:password@host:5432/drawyparty?sslmode=require"
VITE_PARTYKIT_HOST="127.0.0.1:1999"
```

Start the local server and PartyKit development daemon:

```bash
npm run dev
```

---

## Compare Drawy Editions

| Edition | Realtime Engine | Data Storage | Ideal Deployment |
| :--- | :--- | :--- | :--- |
| **[Drawy](/guides/drawy/)** | Supabase Realtime | Supabase PostgreSQL | Full-stack teams on Vercel + Supabase |
| **[DrawyParty](/guides/drawy-party/)** | Cloudflare PartyKit | Pooled PostgreSQL | Low-latency global edge collaboration |
| **[DrawX](/guides/drawx/)** | Local Native Runtime | Local Filesystem | Air-gapped, 100% private offline sketching |
