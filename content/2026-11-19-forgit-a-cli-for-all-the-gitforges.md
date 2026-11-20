---
title: "forgit: One CLI for GitHub, GitLab, Gitea, Forgejo, Bitbucket, SourceHut"
description: Stop context-switching between gh, glab, tea, and forgejo-cli. forgit unifies repository, issue, PR, and release management across all major Git forges with one consistent command set.
date: 2026-11-19T15:35:35Z
weight: 0
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
isCJKLanguage: false
slug: forgit-a-cli-for-all-the-gitforges
---

I work across GitHub, a self-hosted GitLab, and a Gitea instance. For months I juggled `gh`, `glab`, and `tea` — three CLIs, three auth flows, three different flag conventions for "create a PR." It was exhausting.

**forgit** solves this: one CLI, one command set, six forges.

```bash
# Same commands, any forge
forgit repo list
forgit issue create --title "Bug: login broken" --body "Details..."
forgit pr create --base main --head feature/auth
forgit release create --tag v1.0.0 --title "v1.0.0"
```

## Installation

Pick your package manager:

### mise (recommended)

```bash
mise use github:github.com/pratyay360/forgit@latest
```

### Homebrew

```bash
brew trust --cask pratyay360/tap/forgit
brew install pratyay360/tap/forgit
```

### Scoop (Windows)

```powershell
scoop bucket add pratyay360 https://github.com/Pratyay360/scoop-bucket
scoop install pratyay360/forgit
```

### WinGet (Windows)

```powershell
winget install pratyay360.forgit
```

### Direct download

[Latest release](https://github.com/Pratyay360/forgit/releases/latest) — single binary, no dependencies.

## Supported Operations

| Category | Commands |
| ---------- | ---------- |
| **Repositories** | `list`, `create`, `clone`, `delete`, `view` |
| **Issues** | `list`, `create`, `view`, `comment`, `close` |
| **Pull/Merge Requests** | `list`, `create`, `view`, `merge`, `checkout` |
| **Releases** | `list`, `create`, `view`, `upload-assets` |
| **Authentication** | `auth login`, `auth status`, `auth logout` |

## Configuration

One `forgit.yaml` defines all your forges:

```yaml
# ~/.config/forgit/forgit.yaml
forges:
  github:
    type: github
    token: "${GITHUB_TOKEN}"
    hostname: "github.com"
  gitlab:
    type: gitlab
    token: "${GITLAB_TOKEN}"
    hostname: "gitlab.com"
  gitea:
    type: gitea
    token: "${GITEA_TOKEN}"
    hostname: "gitea.example.com"
  forgejo:
    type: forgejo
    token: "${FORGEJO_TOKEN}"
    hostname: "forgejo.example.com"
  bitbucket:
    type: bitbucket
    token: "${BITBUCKET_TOKEN}"
    hostname: "bitbucket.org"
  sourcehut:
    type: sourcehut
    token: "${SOURCEHUT_TOKEN}"
    hostname: "git.sr.ht"

contexts:
  default: github
```

Switch contexts instantly:

```bash
forgit context use github
forgit context use gitlab
forgit context use gitea
```

## Why Go?

- **Cross-compilation**: Single binary for Linux/macOS/Windows/ARM
- **Distribution**: Homebrew, Scoop, WinGet, mise, GitHub Releases — all from one build
- **CLI ecosystem**: Cobra (commands), Bubble Tea (TUI), Huh (forms) — battle-tested
- **Performance**: Fast startup, low memory, no runtime dependencies

## Comparison: forgit vs. forge-specific CLIs

| Task | `gh` | `glab` | `tea` (Gitea) | `forgit` |
| ------ | ------ | -------- | --------------- | ---------- |
| List repos | `gh repo list` | `glab repo list` | `tea repos` | `forgit repo list` |
| Create issue | `gh issue create` | `glab issue create` | `tea issue create` | `forgit issue create` |
| Create PR/MR | `gh pr create` | `glab mr create` | `tea pr create` | `forgit pr create` |
| Create release | `gh release create` | `glab release create` | `tea release create` | `forgit release create` |
| **Auth per forge** | `gh auth login` | `glab auth login` | `tea login` | **One config file** |
| **Context switch** | Manual env vars | Manual env vars | Manual env vars | `forgit context use` |

## CI/CD Integration

Non-interactive mode for pipelines:

```yaml
# .github/workflows/release.yml
- name: Create release on all forges
  env:
    GITHUB_TOKEN: ${GITHUB_TOKEN_SECRET}
    GITLAB_TOKEN: ${GITLAB_TOKEN_SECRET}
    GITEA_TOKEN: ${GITEA_TOKEN_SECRET}
  run: |
    forgit context use github
    forgit release create --tag vvX.Y.Z --title "vvX.Y.Z"
    forgit context use gitlab
    forgit release create --tag vvX.Y.Z --title "vvX.Y.Z"
```

## Roadmap

- [ ] Plugin API for custom forge integrations
- [ ] Webhook management commands
- [ ] Bulk operations (multi-repo issue creation)
- [ ] Shell completions (bash, zsh, fish, PowerShell)
- [ ] v1.0 stable release

## Contributing

```bash
git clone https://github.com/Pratyay360/forgit
cd forgit
mise deps
mise run test
```

Open an issue first for significant changes. PRs welcome for bug fixes, documentation, new forge integrations.

## Links

- 📦 **GitHub**: <https://github.com/Pratyay360/forgit>
- 📦 **Releases**: <https://github.com/Pratyay360/forgit/releases>
- 🐛 **Issues**: <https://github.com/Pratyay360/forgit/issues>
- 📜 **License**: Apache-2.0

---

*If forgit saves you context-switching, [give it a star](https://github.com/Pratyay360/forgit). Found a bug? [File an issue](https://github.com/Pratyay360/forgit/issues).*
