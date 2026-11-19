---
title: Drawy Privacy and Security
description: What Drawy stores, what it does not store, and how to remove your data.
slug: drawy-privacy
weight: 4
keywords: 
  - drawy
  - privacy
  - security
date: 2026-11-17T10:27:53.916Z
draft: false
---

Drawy keeps drawings private by default. This page covers what Drawy saves, how sessions and sharing work, and how to remove your data.

For this documentation site’s own policy, see [Privacy Policy](/privacy/).

## What Drawy stores

- **Account data:** your username and a password hash. Passwords are hashed with scrypt and a per-user salt, so the plain password is never saved.
- **Canvas data:** canvas content, title, and version history. Version history keeps the 50 newest snapshots per canvas.
- **Sharing settings:** usernames a canvas is shared with and whether a public read-only link is on.

## What Drawy does not store

- No email address is needed or collected.
- No advertising cookies.
- No third-party advertising profile.

## Images

Images you paste or upload while drawing may go to an outside image host (imgbb.com). The saved URL is kept with the canvas. Once uploaded, the image is on that host, not under Drawy’s control. To have an uploaded image removed, use the [Drawy contact page](https://drawy.pratyay.online/contact).

## Libraries

Saved libraries and library items live in your browser’s local storage, not on the Drawy server. They are not tied to your account and do not follow you to another browser or device.

## Sessions and error tracking

Drawy uses a `drawy-session` cookie for sign-in. It is `httpOnly`, uses `SameSite=Lax`, is `Secure` in production, and ends after seven days. The session value is signed with HMAC-SHA256 using the server’s `SESSION_SECRET`. Signing out deletes it.

Drawy may use error tracking (such as Sentry, where on) to find problems. It can collect technical details, and it may set its own cookies or storage entries, based on how it is set up.

## Removing your data

- **Delete a canvas:** remove a canvas from the sidebar. This deletes the canvas and its saved version history.
- **Uploaded images:** images already on an outside host may stay there until the host removes them or you ask to.
- **Account removal:** use the [Drawy contact page](https://drawy.pratyay.online/contact) to ask for account or data removal.

### Report a security issue

If you find a security issue, report it in private through the [security form](https://app.youform.com/forms/8kgi7jvm) or open a public [issue](https://github.com/pratyay360/drawy/issues/new). Include steps to show the problem.

## Related

- [Drawy getting started](/guides/drawy-getting-started/) — sharing and collaboration options
- [Drawy Documentation](/drawy-documentation/) — product overview and FAQ
- [Drawy Libraries](/guides/drawy-library/) — local browser storage for libraries
