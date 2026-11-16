+++
title = 'Drawy Privacy and Security'
description = 'What Drawy stores, what it does not store, and how to remove your data.'
slug = 'drawy-privacy'
weight = 4
+++

Drawy keeps drawings private by default. This page summarizes what Drawy stores, how sessions and sharing work, and how to remove your data.

For this documentation site’s own policy, see [Privacy Policy](/privacy/).

## What Drawy stores

- **Account data:** your username and a password hash. Passwords are hashed with scrypt and a per-user salt, so the original password is not stored.
- **Canvas data:** canvas content, title, and version history. Version history is capped at the newest 50 snapshots per canvas.
- **Sharing settings:** usernames a canvas is shared with and whether a public read-only link is enabled.

## What Drawy does not store

- No email address is required or collected.
- No advertising cookies.
- No third-party advertising profile.

## Images

Images pasted or uploaded while drawing may be sent to an external image host (imgcdn.dev), and the resulting URL is saved with the canvas. Content already uploaded to that host is outside Drawy’s direct control. If you need an uploaded image removed, use the [Drawy contact page](https://drawy.pratyay.online/contact).

## Libraries

Saved libraries and library items live in your browser’s local storage, not on the Drawy server. They are not tied to your account and do not follow you to another browser or device.

## Sessions and monitoring

Drawy uses a `drawy-session` cookie for authentication. It is `httpOnly`, uses `SameSite=Lax`, is `Secure` in production, and expires after seven days. The session value is signed with HMAC-SHA256 using the server’s `SESSION_SECRET`, and signing out deletes it.

Drawy may use error monitoring (such as Sentry, where enabled) to diagnose problems. Error monitoring can collect technical diagnostics and may set its own cookies or storage entries depending on configuration.

## Deleting your data

- **Delete a canvas:** removing a canvas from the sidebar deletes the canvas and its saved version history.
- **Uploaded images:** images already uploaded to an external host may remain there until removed by that host or by request.
- **Account deletion:** use the [Drawy contact page](https://drawy.pratyay.online/contact) to request account or data removal.

## Report a vulnerability

If you find a security issue, report it privately through the [vulnerability form](https://app.youform.com/forms/moki0tve) instead of opening a public issue. Include steps to reproduce the issue.

## Related

- [Drawy getting started](/guides/drawy-getting-started/) — sharing and collaboration options
- [Drawy Documentation](/drawy-documentation/) — product overview and FAQ
- [Drawy Libraries](/guides/drawy-library/) — local browser storage for libraries
