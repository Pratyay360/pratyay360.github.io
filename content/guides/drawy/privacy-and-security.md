---
title: Privacy and security
description: What Drawy stores, what it deliberately does not, and how to get rid of it.
order: 4
slug: privacy-and-security
date: 2026-11-04T18:43:35.221Z
draft: false
tags:
    - drawy
    - privacy
    - security
---

Drawy keeps your drawings private by default. Here’s what that means.

## What is stored

- Your account: username and salted password hash. The original password is never stored and cannot be recovered.
- Your canvases: content, title, and version history, capped at the newest 50 snapshots per canvas.
- Sharing settings: usernames a canvas is shared with, and whether its public link is enabled.

## What is not stored

- No email address is required or collected.
- No advertising cookies, and nothing is sold to advertisers.
- No third-party analytics profile is built about you.

## Images

Pasted or uploaded images are sent to an external image host; only the resulting URL is saved with the canvas. Content already on that host is outside our control—contact us via [mail](mailto:pratyaymustafi@outlook.com) for takedowns. Self-hosters can keep images on their own infrastructure by replacing the upload call in `src/lib/s3.ts`.

## Libraries

Saved libraries and library items live in your browser’s local storage, not on the server. They are not tied to your account and do not follow you to another device.

## Error monitoring

Sentry collects error and performance data, including sampled session replays, to diagnose problems. 

## Reporting a vulnerability

Report security issues through [GitHub issues](https://github.com/Pratyay360/drawy/issues). Include steps to reproduce.

## Related

- [Sharing and collaboration](sharing) — who can see a canvas
- [Self hosting](selfhost) — keep data on your own database

![s](https://i.ibb.co/TBKGbjM1/Screenshot-2026-11-04-at-17-05-26-Drawy-png.png)
