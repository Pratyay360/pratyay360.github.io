---
title: Forgit
description: One CLI for GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut. Manage repos, issues, pull requests, and releases from a single command set.
---

## Forgit

Forgit is a single CLI for every Git forge — GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut. Instead of juggling `gh`, `glab`, `tea`, `hut`, and `fj`, you get one command set for repos, issues, pull requests, and releases.

```bash
forgit repos
forgit issue list
forgit prs
forgit repo create testrepo --instance github --public
```

## Guides

| Guide | Description |
|-------|-------------|
| [Forgit, one CLI for all the Git forges](forgit-a-cli-for-all-the-gitforges) | What forgit is, how to install it, and how it compares to forge-specific CLIs. |
| [Configure forgit](config) | Point one config file at every forge and wire in tokens from password managers. |
| [Default behaviour](default-behaviour) | How commands fan out across all forges and how `--instance` narrows them. |

## Quick links

- [Install forgit](forgit-a-cli-for-all-the-gitforges)
- [Write a config file](config)
- [Target a single forge](default-behaviour)

---

[github releases](https://github.com/Pratyay360/forgit/releases) [Source on GitHub](https://github.com/Pratyay360/forgit)
