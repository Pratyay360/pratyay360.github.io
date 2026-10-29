---
title: "Ensor: Secret Detection & Redaction CLI"
description: Interactive CLI tool to scan codebases, detect and redact hardcoded secrets, and manage environment variables across .env, JSON, YAML, and TOML.
label: Ensor
draft: false
tags:
  - secrets
  - gitops
  - golang
  - secret management
  - betterleaks
isCJKLanguage: false
fmContentType: default
template: doc
weight: 1
date: 2026-10-29T10:15:07.070Z
slug: ensor-secret-detection-redaction-cli
---

## Ensor: The Automated Secret Redaction for Your Codebase



Ensor is a lightweight, easy to use CLI tool designed to automatically censor hardcoded secrets from your codebase with proper reference. Currently mapping secrets via `.env` or `env.json`.

Ensor bridges a critical gap in current secret management pipeline.

## The Problem: Readability vs. Security

I've been trying to back up and sync my API calls to Git. Since Bruno stores requests as `.bru` files (and many other clients use `.yml`), I faced a dilemma: should I encrypt all the files using a tool like SOPS, or manually find and replace my secrets?

The main issue is that encryption specifically AES-256 makes it impossible to read my own requests when I'm away from my computer, which defeats the entire purpose of storing them for quick reference. On the other hand, manually scrubbing secrets is tedious and time-consuming T\_T task.

## The Safety factor

This risk is compounded by AI bots continuously scanning and crawling all the files along with some threat actors with basic dork searching can find your secrets. And once leaked the only way remains is to rotate secret.

One can say but there is private repos. but [private git repos are not as private as it sounds.](https://www.geeky-gadgets.com/are-github-private-repos-secure/)

# How Ensor Works

Powered by robust scanning backend of betterleaks/gitleaks. Ensor currently operates on uncommitted files to catch potential leaks and mitigates them:

## Intelligent env Mapping

If you have a `.env` file with valid `KEY=VALUE` pairs, Ensor automatically finds the `values` in your codebase and replaces them with their respective `KEY` references.

## Interactive Codebase censoring.

Ensor detects raw secrets and either auto-suggests a randomized name or prompts
you for a custom `SECRET_NAME` to replace the hardcoded value.

## Convert between different formats of secret.

Use `ensor convert` to seamlessly translate environment files between dotenv, YAML, TOML, and JSON.



## [ensor repo](https://github.com/Pratyay360/ensor)

## Installation

Using Go:

```bash
go install github.com/pratyay360/ensor@latest

```

Using Mise:

```bash
mise use github:Pratyay360/ensor@latest
# or 
mise use go:github.com/Pratyay360/ensor@latest

```

with stew:

```
stew s pratyay360/ensor
```

Using cURL:

```bash
curl -sSL https://raw.githubusercontent.com/Pratyay360/ensor/main/install.sh | sh

```

Also binaries are available for linux, macos and windows you can find them in the [release section of the repo](https://github.com/Pratyay360/ensor/releases)

## A small video demonstrating ensor.

![Watch the video](https://img.youtube.com/vi/3d1xLYkeVsA/hqdefault.jpg)

# ensor demo 1

[![asciicast](https://asciinema.org/a/1264776.svg)](https://asciinema.org/a/1264776)

## ensor demo of secret conversion

ensor can convert between any format of `env` files. Convert dotenv, YAML, TOML, JSON, etc interchangeably.

[![asciicast](https://asciinema.org/a/1264777.svg)](https://asciinema.org/a/1264777)

**ensor** is a fast, interactive CLI tool for **detecting and redacting
secrets from your codebase** and **managing environment variable
configurations** — ensuring leaked API keys, tokens, and credentials
never make it into a commit, screenshot, or public release.

By default, `ensor` extracts discovered secrets into a `.env` file and substitutes them 
with customizable placeholders across your project, but also includes a versatile converter for `.env`, JSON, YAML, and TOML.

---

## ✨ Features

- 🔍 **Secret scanning & redaction** — walks all files and directories and redacts secrets automatically
- 🔄 **Format conversion** — convert between `.env`, JSON, YAML, TOML, and more
- 📁 **Smart skipping** — dot-prefixed files like `.env` and `.git/*` are ignored by default
- 🎨 **Beautiful TUI** — interactive prompts built with [huh](https://github.com/charmbracelet/huh) and
  [bubbletea](https://github.com/charmbracelet/bubbletea)
- ⚡ **Zero config** — no config files, no setup. Just run it.

## 🎬 Demo

Watch `ensor` in action:

[![ensor](https://img.youtube.com/vi/3d1xLYkeVsA/hqdefault.jpg)](http://www.youtube.com/watch?v=3d1xLYkeVsA "ensor cli")

## 📦 Installation

### Homebrew

```bash
brew trust --cask pratyay360/tap/ensor
brew install pratyay360/tap/ensor
```

### mise

```bash
mise use github:pratyay360/ensor@latest
```

### curl (automated install script)

```bash
curl -sSL https://raw.githubusercontent.com/Pratyay360/ensor/main/install.sh | sh
```

### goblin

```bash
curl -sf http://goblin.run/github.com/pratyay360/ensor | PREFIX=~/.local/bin sh 
```

### Go Install

```bash
go install github.com/Pratyay360/ensor@latest
```

### Scoop

```bash
scoop bucket add pratyay360 https://github.com/pratyay360/scoop-bucket
scoop install pratyay360/ensor
```

### Winget (not yet available)

```bash
winget install pratyay360.ensor
```

### Prebuilt Binaries & Packages

Download ready-to-run binaries or `.deb`, `.rpm`, and `.apk` packages from the
[Releases](https://github.com/Pratyay360/ensor/releases) page for Linux, macOS, Windows, and FreeBSD.

---

## 🚀 Usage

### 1. Scan and Censor Secrets

Scan the current directory:

```bash
ensor
```

That's it. `ensor` walks all the files and directories in your project and redacts the secrets from them.

By default, `ensor` skips scanning any file or directory that starts with a trailing dot, like `.env`, `.env.json`, or `.git/*` — so your actual secret files stay untouched.

> Run `ensor --help` to see all available options.

## Convert env files

`ensor convert` converts between any format of env files. Convert `.env`, YAML, TOML, JSON, and more — interchangeably.

## Live demos

**ensor in action**

[![asciicast](https://asciinema.org/a/1264776.svg)](https://asciinema.org/a/1264776)

**ensor convert**

[![asciicast](https://asciinema.org/a/1264777.svg)](https://asciinema.org/a/1264777)
