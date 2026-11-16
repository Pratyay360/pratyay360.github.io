---
title: Drawy getting started
description: Create an account, draw your first canvas, share it, and export your work.
slug: guides/drawy-getting-started
sidebar:
  label: Drawy getting started
  order: 1
tags:
  - drawy
  - excalidraw
  - getting-started
fmContentType: default
---
    
## What is Drawy?

Drawy is a collaborative drawing workspace built on Excalidraw. You can create an account, start a canvas, and invite someone to draw with you.

## Create an account

An account uses a username and a password. There is no email address, confirmation link, or password reset flow, so keep your credentials somewhere safe.

1. Open [drawy.pratyay.online/login](https://drawy.pratyay.online/login).
2. Pick a username and a password.
3. Submit the form to sign in.

Usernames can contain letters, numbers, underscores, and hyphens. They are lowercased, so `Ada` and `ada` are treated as the same account.

## Create a canvas

Select **New canvas** in the sidebar. Your canvases are listed there and grouped by when you last edited them.

Drawy saves as you draw. After a short pause the header shows **Saved**, and the **Save** button in the editor header forces a save immediately. Canvases you own and canvases shared with you both appear in the sidebar.

## Rename or delete a canvas

- **Rename:** select the canvas title at the top of the editor, type a new name, and confirm. Collaborators can rename a shared canvas too.
- **Delete:** use the delete action in the sidebar. Only the owner can delete a canvas, and deleting it also removes its saved history.

## Share and collaborate

Open **Share canvas** to choose how other people can access a drawing:

| Option | Who can open it | Good for |
| :--- | :--- | :--- |
| **Private** | Only you | Work in progress |
| **Invite by username** | A specific Drawy user | Editing together |
| **Read-only link** | Anyone with the link | Sharing a finished drawing or getting feedback |

You can revoke access at any time without deleting the canvas. For more on collaboration and version history, see [Drawy Documentation](/drawy-documentation/).

## Export and import

The canvas menu can export the current drawing in several formats:

| Format | Use it for |
| :--- | :--- |
| `.excalidraw` | Reopening or importing the canvas later |
| PNG | Slides, docs, and raster images |
| SVG | Vector artwork that scales cleanly |

The same menu can import a `.excalidraw` file back into a canvas, so drawings can move between Drawy and other Excalidraw-compatible apps.

## Track exported drawings with Git and forgit (optional)

If you export canvases as `.excalidraw` files, you can keep them in a Git repository for history and backup. [forgit](https://github.com/Pratyay360/forgit) is an interactive Git CLI powered by fzf that can make common Git tasks easier:

- Browse commits and diffs for exported drawing files
- Stage and review changes interactively before committing
- Inspect file history when you update a canvas export

Example workflow:

```bash
# Export your canvas as .excalidraw from Drawy, then in your repo:
git add diagrams/my-canvas.excalidraw
git commit -m "Update architecture diagram"

# Use forgit commands (after installing forgit) for interactive views:
ga   # interactive git add
gd   # interactive git diff
glo  # interactive git log
```

> forgit is a separate tool and requires Git and fzf. See the [forgit repository](https://github.com/Pratyay360/forgit) for installation and command details.

## Next steps

- [Drawy Documentation](/drawy-documentation/) — full overview, collaboration, version history, and FAQ
- [Drawy Libraries](/guides/drawy-library/) — reuse shapes and assets across canvases
- [Drawy Privacy and Security](/guides/drawy-privacy/) — what Drawy stores and how to remove data
- [DrawX](/guides/drawx/) — offline, private desktop Excalidraw app
