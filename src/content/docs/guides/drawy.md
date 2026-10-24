---
title: 'Drawy: Self Hostable Collaborative Whiteboard with Supabase'
description: >-
  Deploy and self-host Drawy, a multi-tenant collaborative whiteboard web
  application powered by Excalidraw, Supabase Realtime WebSockets, and Nitro.
date: '2026-10-01T13:31:00Z'
draft: false
weight: 0
tags:
  - drawy
  - excalidraw
  - supabase
  - realtime
  - whiteboards
  - tanstack-start
  - nitro
  - selfhosted
isCJKLanguage: false
headless: false
---
> Effortless, multi-tenant capable, collaborative whiteboards powered by Excalidraw and Supabase. Easily self-hostable, serverless-ready, and 100% free and open source.
>
> 🚀 **Live Demo**: [**drawy.pratyay.online**](https://drawy.pratyay.online) | 📦 **GitHub**: [**Pratyay360/drawy**](https://github.com/Pratyay360/drawy)

---

## What is Drawy?

[**Drawy**](https://github.com/Pratyay360/drawy) is a modern, full-featured collaborative drawing web application that packages the complete [Excalidraw canvas](https://npmx.dev/package/@excalidraw/excalidraw) into a lightweight, multi-tenant capable, and serverless friendly architecture.

While Excalidraw is an exceptional visual tool, self-hosting it typically comes with frustrating trade-offs:

- **Single-board limitations** that require spinning up separate instances for each diagram.
- **Paid collaboration tiers** or proprietary hosted services for team syncing.
- **Complex Docker setups** requiring multi-container networking, reverse proxies, and stateful socket servers.

**Drawy** eliminates these pain points by offloading database persistence, authentication, and real-time syncing to **Supabase**, allowing you to deploy the entire frontend and backend to standard serverless hosts like Vercel, Netlify, or Cloudflare with zero DevOps overhead.

---

## Key Features &amp; Highlights

- 🎨 **Full Excalidraw Experience**: Includes all standard Excalidraw tools, handwriting styles, shapes, arrow bindings, and full compatibility with the official [Excalidraw Libraries](https://libraries.excalidraw.com/?theme=light&sort=default).
- 🗂️ **Unlimited Multi-Board Management**: Create, categorize, organize, and rename multiple independent whiteboards from a unified dashboard.
- ⚡ **Real-Time Collaboration**: Collaborative multi-cursor drawing and instant stroke synchronization powered by [Supabase Realtime WebSockets](https://supabase.com/docs/guides/realtime).
- 🔒 **Total Data Ownership**: Run Drawy against your own Supabase instance and PostgreSQL database. Your proprietary architectural diagrams and team brainstorming sessions remain completely private.
- 🚀 **Serverless Ready**: Built with [Nitro](https://nitro.build/) and [TanStack Start](https://tanstack.com/start/latest) for effortless zero-config deployment.

---

## Architectural Stack

Drawy is engineered with a modern, high-performance web stack:


| Component               | Technology                           | Purpose                                                |
| :----------------------- | :------------------------------------ | :------------------------------------------------------ |
| **Canvas Engine**       | `@excalidraw/excalidraw`             | Industry-standard vector drawing and sketching         |
| **Frontend Framework**  | TanStack Start + Vite                | SSR-capable, type-safe full-stack application          |
| **Server Engine**       | [Nitro Engine](https://nitro.build/) | Universal deployment adapters for any cloud runtime    |
| **Database &amp; Auth** | PostgreSQL (Supabase)                | User accounts, board metadata, and document storage    |
| **Realtime Sync**       | Supabase Realtime                    | Low latency WebSockets for multi user stroke broadcast |


---

## Quickstart &amp; Self-Hosting Guide

Deploy your own instance of Drawy in minutes:

### 1. One-Click Cloud Deployment

Deploy directly to your preferred cloud provider:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FPratyay360%2Fdrawy)

### 2. Manual Local Setup

Clone the repository and install dependencies using [mise](https://mise.jdx.dev):

```bash
git clone https://github.com/Pratyay360/drawy.git
cd drawy

# Setup development dependencies
mise run dev
```

### 3. Environment Configuration

Copy the example environment configuration:

```bash
cp .env.example .env
```

Configure your Supabase credentials in `.env`:

```dotenv
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

Start the development server:

```bash
npm run dev
```

---

## The Drawy Ecosystem

Looking for different deployment patterns or offline capability? Explore the complete Drawy lineup:


| Edition                                | Description                       | Sync Backend                     | Best For                                  |
| :-------------------------------------- | :--------------------------------- | :-------------------------------- | :----------------------------------------- |
| [**Drawy**](/guides/drawy/)            | Full web collaboration app        | Supabase (PostgreSQL + Realtime) | Team workspaces and multi-board setups    |
| [**DrawyParty**](/guides/drawy-party/) | Ultra-low latency edge whiteboard | Cloudflare PartyKit + PostgreSQL | High-speed global collaboration           |
| [**Drawx**](/guides/drawx/)            | Native desktop application        | 100% Offline                     | Air gapped privacy and personal sketching |
