---
title: forgit One CLI for all the git forges
description: >-
  One CLI for GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut. Manage
  repos, issues, pull requests, and releases from a single command set.
date: '2026-11-19T15:35:35.000Z'
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
  - open
  - gitlab
  - sourcehut
isCJKLanguage: false
slug: forgit-a-cli-for-all-the-gitforges
---
Managing code across multiple Git forges has become a pain point. While we rely on the Git CLI for version control, we lack a unified interface for essential tasks such as creating repositories. Consequently, teams have to juggle a disparate set of CLIs—`gh`, `glab`, `tea`, `hut`, `fj` etc. each with its own authentication flow and differing flag conventions for actions like creating a pull request. This fragmentation is exhausting and inefficient.

**forgit** Tries to Solve this: one CLI, one command set for all the forges.

```bash
forgit repo list
forgit issue create --title "Bug: login broken" --body "Details..."
forgit pr create --base main --head feature/auth
forgit release create --tag v1.0.0 --title "v1.0.0"
```

## Installation

Pick your package manager:

### mise ([https://mise.jdx.dev/](https://mise.jdx.dev/))

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

#### WinGet (Windows)

```powershell
winget install pratyay360.forgit
```

Stew

```bash
stew install pratyay360/forgit
```

### Direct download

[Latest release — single binary, no dependencies.](https://github.com/Pratyay360/forgit)

[![asciicast](https://asciinema.org/a/1273284.svg)](https://asciinema.org/a/1273284)

## Configuration

One    `$HOME/.config/forgit/config.toml` defines all your forges:

```yaml
## $HOME/.config/forgit/config.toml

[github]
token = "echo $GITHUB_PAT"

[gitlab]
url = "https://gitlab.com"
token = "echo $GITLAB_PAT"

[forgejo]
url = "https://codeberg.org"
token = "echo $CODEBERG_PAT"

[bitbucket]
token = "echo $BITBUCKET_PAT"
username = "pratyaymustafi@outlook.com" # bitbucket registered email

[sourcehut]
token = "echo $SOURCE_HUT_PAT"

[[instance]]
name = "gitgud"
type = "gitlab" # gitlab self hosted
url = "https://gitgud.io" 
token = "echo $GITGUD_PAT"

```


## Comparison: forgit vs. forge specific CLIs


| Task               | `gh`                | `glab`                | `tea` (Gitea)        | `forgit`                |
| ------------------ | ------------------- | --------------------- | -------------------- | ----------------------- |
| List repos         | `gh repo list`      | `glab repo list`      | `tea repos`          | `forgit repo list`      |
| Create issue       | `gh issue create`   | `glab issue create`   | `tea issue create`   | `forgit issue create`   |
| Create PR/MR       | `gh pr create`      | `glab mr create`      | `tea pr create`      | `forgit pr create`      |
| Create release     | `gh release create` | `glab release create` | `tea release create` | `forgit release create` |
| **Auth per forge** | `gh auth login`     | `glab auth login`     | `tea login`          | **One config file**     |


## Contributing

```bash
git clone https://github.com/Pratyay360/forgit
cd forgit
mise deps
mise run test
```

Open an issue first for significant changes. PRs welcome for bug fixes, documentation, new forge integrations.

## Links

- 📦 **GitHub**: [https://github.com/Pratyay360/forgit](https://github.com/Pratyay360/forgit)
- 📦 **Releases**: [https://github.com/Pratyay360/forgit/releases](https://github.com/Pratyay360/forgit/releases)
- 🐛 **Issues**: [https://github.com/Pratyay360/forgit/issues](https://github.com/Pratyay360/forgit/issues)
- 📜 **License**: Apache-2.0
