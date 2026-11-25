---
title: Configure forgit
description: Point one config file at every forge and wire in tokens from password managers.
date: 2026-11-26T06:36:30.601Z
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
slug: configure-forgit
isCJKLanguage: false
headless: false
---

ForGit reads every forge from a single file at `$HOME/.config/forgit/config.toml`. Configure each forge once and every command can target it.

## A full example

```toml
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
username = "pratyaymustafi@outlook.com"

[sourcehut]
token = "echo $SOURCE_HUT_PAT"

[[instance]]
name = "gitgud"
type = "gitlab"
url = "https://gitgud.io"
token = "echo $GITGUD_PAT"
```

Token values are run as shell commands, so `echo $GITHUB_PAT` reads the token from your environment instead of storing it in the file.

## Tokens from password managers

Because values are executed, you can pull a token from any CLI password manager.

With [rbw](https://github.com/doy/rbw):

```toml
[github]
token = "rbw get GITHUB_PAT"
```

With [doppler](https://www.doppler.com/):

```toml
[[instance]]
name = "disroot"
type = "forgejo"
url = "https://git.disroot.org"
token = "doppler secrets --json --project test | jq '.DISROOT_PAT.computed'"
```

## Raw tokens

You can also write the token directly. Keep the file safe for  example, encrypt it with [sops](https://getsops.io/) or use something like [pass](https://www.passwordstore.org/)

```toml
[github]
token = "ghp_1234567890123456789012345678901234567890"
```

```toml
[bitbucket]
token = "asdfghjklqwertyuiopzxcvbnm1234567890asdfghjklqwertyuiopzxcvbnm1234567890"
username = "pratyaymustafi@outlook.com"
```

```toml
[sourcehut]
token = "srht-token"
```

## Custom instances

Add any self-hosted forge with an `[[instance]]` table — `type` selects which API it speaks:

```toml
[[instance]]
name = "gitgud"
type = "gitlab"      # gitlab, forgejo or gitea
url = "https://gitgud.io"
token = "echo $GITGUD_PAT"
```

`name` is the value you pass to `--instance` on the command line. See [Default behaviour](default-behaviour) for how commands fan out across instances.
