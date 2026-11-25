---
title: Forgit, one cli for all the git forges
description: One CLI supports GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut.
date: 2026-11-19T15:35:35.000Z
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
  - sourcehut
isCJKLanguage: false
slug: forgit-a-cli-for-all-the-gitforges
headless: false
---

Managing code across multiple Git forges can be done with a single CLI, [Git](https://git-scm.com/), why not use one tool to interact with all Git forges from a single place? Why have 10 different tools for the interaction part? 
like `gh`, `glab`, `fj`, `hut`

**forgit** tries to solve this: one CLI, one command set for all the forges.

```bash
forgit repos
forgit issue list
forgit prs
forgit repo create testrepo --instance github --public
forgit repo delete --instance gitlab --owner pratyay360 testrepo
```

## Installation

Pick your package manager:

### [mise](https://mise.jdx.dev/)

```bash
mise use github:github.com/pratyay360/forgit@latest
```

### [Homebrew](https://brew.sh/)

```bash
brew trust --cask pratyay360/tap/forgit
brew install pratyay360/tap/forgit
```

### [Scoop (Windows)](https://scoop.sh/)

```powershell
scoop bucket add pratyay360 https://github.com/Pratyay360/scoop-bucket
scoop install pratyay360/forgit
```

### [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/) (Windows)

```powershell
winget install pratyay360.forgit
```

### [Stew](https://stew.sh/)

```bash
stew install pratyay360/forgit
```

### Direct download

[Latest release on github](https://github.com/Pratyay360/forgit)

[![asciicast](https://asciinema.org/a/1273284.svg)](https://asciinema.org/a/1273284)

## Configuration

One `$HOME/.config/forgit/config.toml` defines all your forges:

```toml
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
type = "gitlab" 
url = "https://gitgud.io" 
token = "echo $GITGUD_PAT"
```

## Comparison: forgit vs. forge specific CLIs

| Task               | `gh`                             | `glab`                             | `fj`                                   | `forgit`                                                                  |
| ------------------ | -------------------------------- | ---------------------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| List repos         | `gh repo list`                   | `glab repo list`                   | `fj repo list --hostname codeberg.org` | `forgit repos`                                                            |
| **Auth per forge** | `gh auth login`                  | `glab auth login`                  | `fj auth login`                        | one config file                                                           |
| create repo        | `gh repo create test --public`   | `glab repo create demo --public`   | `fj repo create test --public`         | `forgit repo create --instance bitbucket --owner pratyaymustafi testrepo` |
| delete repo        | `gh repo delete Pratyay360/test` | `glab repo delete Pratyay360/demo` | `fj repo delete <owner>/<repo>`        | `forgit repo delete --instance sourcehut pratyaymustafi/testrepo`         |


## Contributing

I am using [mise](https://mise.jdx.dev/) in the process of development to make development environment as identical as possible

```bash
git clone https://github.com/Pratyay360/forgit
cd forgit
mise deps
mise run test
```


[Please feel free to suggest any changes you feel important](https://github.com/Pratyay360/forgit) Any kind of contribution is heavily admired.
