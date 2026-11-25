---
title: Default behaviour of forgit
date: 2026-11-25T18:15:17.912Z
description: How forgit fans a command out across every forge, and how to perform instance specific operations.
draft: false
tags:
  - cli
  - forgit
  - golang
  - opensource
  - git
  - github
  - gitlab
  - gitea
  - forgejo
  - open-source
isCJKLanguage: false
headless: false
---

By default forgit runs an action against **all the available forges in parallel**. Every forge that has a token in your config takes part, so one command can create a repo on GitHub, GitLab and the rest at once.

## Targeted operations on a single forge

Pass `--instance <forge>` to run the action on one forge only:

```bash
forgit repo create testrepo --instance github --public
```

`--instance` accepts a built-in forge name (`github`, `gitlab`, `forgejo`, `bitbucket`, `sourcehut`) or the `name` of a custom `[[instance]]` from your config.

## Related

- [Configure forgit](config) — define forges and custom instances
- [Forgit, one CLI for all the Git forges](forgit-a-cli-for-all-the-gitforges) — install and overview

