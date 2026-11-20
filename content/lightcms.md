---
title: "LightCMS: Git-Based CMS for Static Sites"
description: "LightCMS is a Git-backed CMS for static sites. Write and publish Markdown with front matter using Zola, Hugo, Astro, or Jekyll; every edit is a commit."
date: 2026-11-17T10:27:07.328Z
slug: lightcms
draft: false
tags:
  - lightcms
  - opensource
  - git-based-cms
  - ai
  - static-site-generator
  - zola
  - hugo
  - astro
---

LightCMS is an easy-to-use, interactive, Git-based CMS built to help you discover the hidden writer in you and fall in love with writing again.

Compatible with **any static site generator (SSG) that supports front matter** — Zola, Hugo, Astro, Jekyll, Eleventy, Next.js, Nuxt, and more. LightCMS makes creating, managing, and publishing content effortless.

Whether you're sharing experiences, documenting your journey, or putting thoughts into words, LightCMS turns ideas into published pages without the friction.

## Why LightCMS?

| Problem | LightCMS Approach |
|---------|-------------------|
| **CMS lock-in** | Your content lives in *your* Git repo — markdown + front matter |
| **Complex setup** | Connect repo → configure front matter fields → write |
| **No local preview** | Built-in preview renders your actual SSG templates |
| **Vendor hosting** | Deploy anywhere: Netlify, Vercel, Cloudflare Pages, GitHub Pages, your own server |
| **Content stuck in DB** | Every edit is a Git commit — full history, diffs, rollback |

## Core Features

### Git-Native Content Storage
- Content = markdown files + YAML/TOML front matter
- Every save = Git commit (signed, if you configure it)
- Branches = drafts, PRs = editorial workflow
- No database, no vendor lock-in

### Visual Editor with Live Preview
- Block-based editor (headings, paragraphs, code, images, tables, callouts)
- Real-time preview using *your* SSG's templates and CSS
- Dark/light mode matches your site

### AI Writing Assistant (optional)
- Inline completions, rephrasing, summarization
- Runs locally (Ollama) or via API (OpenAI, Anthropic)
- Your content never leaves your infrastructure unless you choose

### Speech-to-Text
- Dictate drafts directly in the editor
- Powered by Whisper (local) or cloud APIs
- Useful for capturing thoughts faster than typing

### Multi-SSG Support
| SSG | Front Matter | Status |
|-----|--------------|--------|
| Zola | TOML | ✅ Native |
| Hugo | YAML/TOML | ✅ Native |
| Astro | YAML | ✅ Native |
| Jekyll | YAML | ✅ Native |
| Eleventy | YAML/JSON | ✅ Native |
| Next.js (MDX) | YAML | ✅ Native |
| Nuxt (MDC) | YAML | ✅ Native |

### Team Collaboration
- Multi-user with role-based access (admin, editor, contributor)
- Review workflow via GitHub/GitLab PRs
- Comments and suggestions on drafts

## Getting Started

### 1. Try the hosted demo
<https://www.lightcms.me/> — connect a test repo and start writing.

### 2. Self-host (recommended for teams)

```bash
# Clone
git clone https://github.com/light-cms/lightcms
cd lightcms

# Configure
cp .env.example .env
# Add: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, DATABASE_URL, SESSION_SECRET

# Deploy to Cloudflare Workers (recommended)
bun run build
bun run deploy
```

**Requirements:**
- Cloudflare account (Workers + D1/KV/R2) or Node.js server + PostgreSQL
- GitHub OAuth app (for authentication)
- Your SSG repo with front matter schema

### 3. Configure your content model

```yaml
# lightcms.yaml in your content repo
collections:
  - name: "blog"
    path: "content/blog"
    fields:
      - name: "title"
        type: "string"
        required: true
      - name: "description"
        type: "text"
      - name: "date"
        type: "datetime"
        default: "now"
      - name: "tags"
        type: "tags"
      - name: "draft"
        type: "boolean"
        default: true
```

LightCMS reads this config and builds the editor UI automatically.

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   LightCMS UI   │────▶│   GitHub/GitLab │────▶│  Your SSG Repo  │
│  (React + Vite) │     │   OAuth + API   │     │ (Markdown + FM) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                                               │
        ▼                                               ▼
┌─────────────────┐                          ┌─────────────────┐
│  Preview Worker │                          │  Deploy Hook    │
│  (runs your SSG)│                          │  (Netlify/Vercel)│
└─────────────────┘                          └─────────────────┘
```

- **Frontend**: React, TypeScript, Vite, Tailwind
- **Backend**: Cloudflare Workers (Hono) + D1 (SQLite) + R2 (assets) + KV (cache)
- **Auth**: GitHub/GitLab OAuth (no passwords stored)
- **Preview**: Spins up your SSG in a Worker — renders actual templates
- **Deploy**: Triggers your existing CI/CD (Netlify, Vercel, Cloudflare Pages, etc.)

## Use Cases

### Technical Blog / Documentation
- Write posts in a clean editor
- Preview renders your actual Zola/Hugo/Astro theme
- Publish → Git commit → auto-deploy

### Product Changelog
- Team writes entries in LightCMS
- Changelog page pulls from `content/changelog/*.md`
- Version tags auto-generated from front matter

### Knowledge Base / Wiki
- Hierarchical collections (`docs/getting-started/`, `docs/api/`)
- Cross-references via front matter `links` field
- Search via Pagefind/Algolia on generated site

### Newsletter (à la utterances)
- Write issues in LightCMS
- GitHub Action compiles to email via your template
- Sent via Resend/SendGrid/Postmark

## Pricing

| Tier | Cost | Includes |
|------|------|----------|
| **Community** | Free | Self-hosted, unlimited repos, 1 user |
| **Team** | $15/user/mo | Hosted, 5 users, PR review workflow, AI assistant |
| **Enterprise** | Custom | SSO, audit logs, dedicated preview workers, SLA |

Self-hosted is fully featured — no artificial limits.

## Roadmap

- [ ] Visual page builder (compose from components)
- [ ] Webhook-based deploy triggers (beyond GitHub Actions)
- [ ] Custom field types (color picker, file upload, relation)
- [ ] Multi-language content (i18n front matter)
- [ ] Plugin system for custom editor blocks

## Links

- 🌐 **Live demo**: <https://www.lightcms.me/>
- 📦 **GitHub**: <https://github.com/light-cms/lightcms>
- 📖 **Docs**: <https://lightcms.me/docs>
- 💬 **Discord**: <https://discord.gg/lightcms>
- 🐛 **Issues**: <https://github.com/light-cms/lightcms/issues>
- 📜 **License**: MIT

---

*LightCMS is built by developers who got tired of fighting CMSs. If it helps you write, [star the repo](https://github.com/light-cms/lightcms). Questions? [Open a discussion](https://github.com/light-cms/lightcms/discussions).*