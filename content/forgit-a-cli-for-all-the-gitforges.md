---
title: 'Forgit, one cli for all the git forges'
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
forgit repos
forgit issue list
forgit prs
forgit repo create testrepo --instance github --public
```

## Installation

Pick your package manager:

### Mise ([https://mise.jdx.dev/](https://mise.jdx.dev/))

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

One      `$HOME/.config/forgit/config.toml` defines all your forges:

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


| Task               | `gh`                             | `glab`                             | `fj`                                   | `forgit`                                                              |
| ------------------ | -------------------------------- | ---------------------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| List repos         | `gh repo list`                   | `glab repo list`                   | `fj repo list --hostname codeberg.org` | `forgit repos`                                                        |
| **Auth per forge** | `gh auth login`                  | `glab auth login`                  | `fj auth login`                        | **One config file**                                                   |
| create repo        | `gh repo create test --public`   | `glab repo create demo --public`   | `fj repo create test --public`         | `forgit repo create --instance bitbucket --owner pratyay360 testrepo` |
| delete repo        | `gh repo delete Pratyay360/test` | `glab repo delete Pratyay360/demo` | `fj repo delete <owner>/<repo>`<br>    | `forgit repo delete --instance sourcehut pratyaymustafi/testrepo`     |


## Contributing

```bash
git clone https://github.com/Pratyay360/forgit
cd forgit
mise deps
mise run test
```

[Please feel free to suggest any changes you feel important.](https://github.com/Pratyay360/forgit) Any kind of contribution is heavily admired.
