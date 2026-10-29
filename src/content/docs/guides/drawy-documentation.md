---
title: Drawy Documentation
description: A guide to drawing, sharing and collaborating in Drawy.
date: 2026-10-01T13:31:00Z
draft: false
weight: 0
tags:
   - drawy
   - excalidraw
   - cloudflare
   - realtime
   - whiteboards
   - durable objects
   - tanstack-start
   - nitro
   - selfhosted
isCJKLanguage: false
keywords:
   - astryx
   - cloudflare
   - cloudflare workers
   - drawy
   - drizzle orm
   - durable workers
   - excalidraw
   - nitro
   - open source
   - partieserver
   - partykit
   - postgres
   - selfhosted
   - tanstack start
   - yjs
slug: drawy-documentation
label: drawy
---

Drawy is a collaborative drawing workspace. It gives you the full Excalidraw editor, plus the collaboration features: live cursors, shared canvases and version history. Realtime features run on Cloudflare Durable Objects via PartyServer.

Everything is saved as you draw, so you can close the tab and pick up exactly where you left off. A drawing is private by default. You can share it with one person or publish it as a read-only link.

## Getting started

1. **Create an account**  
   Pick a username and a password. There is no email address to enter and no confirmation link to click, so you are in straight away.

2. **Start a canvas**  
   Every new canvas gets a name, which you can rename later. Your drawings are grouped by the date you last touched them, so recent work is easy to find.

3. **Draw, share, invite**  
   Sketch on the canvas, pull in assets from your library, then share a link or invite a collaborator to work alongside you.

## The canvas

Drawy embeds the full Excalidraw editor on an infinite surface that pans and zooms the way you expect. You can draw with:

- Rectangles and diamonds
- Arrows
- Text
- Freehand strokes
- Frames
- Images

### Autosave

Changes are saved as you draw, and autosave is always on. There is no save button to remember. Close the tab, come back later, and the canvas is exactly where you left it.

### Real-time collaboration

Several people can work in the same canvas at once. Live cursors, selections and strokes appear as they happen, so you can point at a shape instead of describing it.

To start collaborating, open a canvas and either invite someone by username or share a link. See [Sharing and access](#sharing-and-access) below for the options.

## Sharing and access

A new drawing is private. You choose how, and with whom, to share it.

| Option | Who can open it | Good for |
| :--- | :--- | :--- |
| **Private (default)** | Only you | Work in progress |
| **Invite by username** | A specific person you choose | Working on a canvas together |
| **Read-only link** | Anyone with the link, view only | Publishing a finished drawing or asking for feedback |

You can revoke access at any time. Revoking removes the other person's or the link's access without deleting the drawing.

## Version history

While you work, Drawy keeps a snapshot of your canvas every minutes. If you want to go back, open the version history and roll back to an earlier snapshot with one click.

## Libraries

Libraries are reusable collections of shapes and assets you can drop into any drawing.

- **Public libraries**: browse the public Excalidraw libraries and save the ones you use.
- **Personal library**: build your own library of items and reuse them across canvases.

## Import and export

Nothing you draw is locked inside the app.

| Action | Formats |
| :--- | :--- |
| **Export a canvas** | `.excalidraw`, PNG, SVG |
| **Import into Drawy** | `.excalidraw` |

## Themes

Drawy offers six themes across light and dark mode. Your choice is remembered on the device you picked it on and is applied before the first paint, so the page never flashes the wrong theme while loading.

## Architecture (for developers)

Drawy is open source and built on a small set of well-known projects.

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Canvas and editor** | Excalidraw | Drawing surface, tools and element model |
| **App shell and routing** | TanStack Start and Router | Application framework and routes |
| **API** | oRPC | Typed API between client and server |
| **Realtime** | PartyServer on Cloudflare Durable Objects | Presence and Yjs sync for live collaboration |
| **Storage** | Postgres through Drizzle ORM | Persistent canvas storage |
| **UI** | Astryx | Component library and theming |

### How the pieces fit

- The client renders the Excalidraw editor inside a TanStack Start app.
- Calls for accounts, canvases, sharing and libraries go through typed oRPC procedures, so the client and server share the same types.
- Live cursors, selections and strokes are synced in realtime using Yjs over PartyServer.
- Canvases are persisted in Postgres, which is what makes autosave and version history possible.

## FAQ

### Do I need an email address to sign up?
No. You only choose a username and a password.

### Will I lose my work if I close the tab?
No. Changes are saved as you draw.

### Who can see my drawings?
Only you, until you invite someone or publish a read-only link.

### Can I stop sharing a drawing?
Yes. Revoke access whenever you like. The drawing itself is not deleted.

### Can I get my drawings out of Drawy?
Yes. Export as `.excalidraw`, PNG or SVG, and import `.excalidraw` files back in.

### Can I undo a big mistake after autosave has run?
Yes. Use version history to roll back to an earlier snapshot.

## Help and contact

- **Help centre**: [https://drawy.pratyay.online/help](https://drawy.pratyay.online/help)
- **Contact**: [https://drawy.pratyay.online/contact](https://drawy.pratyay.online/contact)
- **Open Drawy**: [https://drawy.pratyay.online/login](https://drawy.pratyay.online/login)

