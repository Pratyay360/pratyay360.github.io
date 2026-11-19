---
title: 'Ensor: Secret Detection & Redaction'
description: >-
  Open source CLI to detect and redact hardcoded secrets, replace them with
  references
keywords:
  - secret detection
  - redaction
  - CLI
  - codebase
  - ensor
date: '2026-11-17T10:25:51.812Z'
weight: 1
slug: ensor-secret-detection-redaction-cli
draft: false
---
### What is Ensor?

[Ensor](https://github.com/Pratyay360/ensor) Is a fast, interactive CLI tool for detecting and redacting hard coded secrets in your codebase. It helps you replace leaked values such as API keys, tokens, and credentials with environment variable references, and it can convert environment files between `.env`, JSON, YAML, and TOML formats.

By default, Ensor scans your project, finds exposed secrets, and helps you move them into a `.env` File while substituting placeholders in source files. This makes it easier to keep code readable, shareable, and safer to commit.

#### Why use Ensor for secret detection and redaction?

Hard coded secrets are easy to leak through commits, screenshots, logs, or public repositories. Manually finding and replacing them is slow and error-prone, while fully encrypting files can make everyday configuration hard to read and maintain.

Ensor is useful when you want to:

- Detect secrets in a codebase Before they are committed or shared
- Redact hard coded credentials And replace them with named environment variables
- Map existing `.env` Values To matching secrets already present in files
- Seamlessly convert secret and configuration files among dotenv, JSON, YAML, and TOML formats.
- Keep workflows readable without storing plaintext secrets directly in source

> Even private repositories can be exposed through misconfiguration, access issues, or leaks. Rotating leaked secrets is costly—preventing exposure is better.

### Key features

- **Secret scanning and redaction** — scans project files and helps remove exposed secrets automatically
- **Intelligent `.env` mapping** — matches values from existing `.env` File and replaces them with their corresponding keys
- **Interactive secret naming** — prompts for custom secret names or suggests replacements for detected values
- **Environment file conversion** — convert between `.env`, JSON, YAML, and TOML with `ensor convert`
- **Smart defaults** — dot-prefixed files like `.env` and `.git/*` are skipped by default so source secret files stay untouched
- **Simple CLI workflow** — no complex setup required to get started

### How Ensor works

Ensor uses a robust scanning back end (powered by better leaks/git leaks) to identify potential secrets in your project.

1. **Scan files** in the current directory and subdirectories.
2. **Detect secrets** Such as tokens, keys, and credentials.
3. **Map or prompt for names**:
   - If a matching value exists in `.env`, Ensor can replace it with the corresponding key reference.
   - For newly detected secrets, Ensor can suggest a name or let you provide one.
4. **Redact values** in code by replacing hard coded secrets with placeholders/references.
5. **Store secrets** in environment files (commonly `.env`) for safer configuration management.

## Installation

### Install with Go

```bash
go install github.com/pratyay360/ensor@latest
```

### Install with mise

```bash
mise use github:Pratyay360/ensor@latest
# or
mise use go:github.com/pratyay360/ensor@latest
```

### Install with Homebrew

```bash
brew tap pratyay360/tap
brew install pratyay360/tap/ensor
```

### Install with the shell script (cURL)

```bash
curl -sSL https://raw.githubusercontent.com/Pratyay360/ensor/main/install.sh | sh
```

### Install with goblin

```bash
curl -sf http://goblin.run/github.com/pratyay360/ensor | PREFIX=~/.local/bin sh
```

### Install with Scoop (Windows)

```bash
scoop bucket add pratyay360 https://github.com/pratyay360/scoop-bucket
scoop install pratyay360/ensor
```

### Install with Stew

```bash
stew install pratyay360/ensor
```

### Prebuilt binaries and packages

Prebuilt binaries and `.deb`, `.rpm`, and `.apk` Packages for Linux, macOS, Windows, and FreeBSD are available on the [Ensor releases page](https://github.com/Pratyay360/ensor/releases).

## Usage

### Scan and redact secrets

Run Ensor in your project directory:

```bash
ensor
```

Ensor walks files and directories in the project, detects secrets, and helps redact them by replacing hard coded values with environment variable references.

By default, Ensor skips dot-prefixed paths such as `.env`, `.env.json`, and `.git/*` so existing secret/config files are not modified unintentionally.

To see available options:

```bash
ensor --help
```

### Convert environment file formats

Use `ensor convert` to translate environment/config files between supported formats, including:

- `.env` (dotenv)
- JSON
- YAML
- TOML

Example:

```bash
ensor convert
```

This is useful when migrating configuration formats across tools or projects while keeping key/value data consistent.

## Demo

### Video walkthrough

[![Watch the Ensor CLI demo on YouTube](https://img.youtube.com/vi/3d1xLYkeVsA/hqdefault.jpg)](http://www.youtube.com/watch?v=3d1xLYkeVsA "Ensor CLI demo")

### Secret scanning and redaction demo

[![Ensor secret detection and redaction demo on asciinema](https://asciinema.org/a/1264776.svg)](https://asciinema.org/a/1264776)

### Environment file conversion demo

[![Ensor env file conversion demo on asciinema](https://asciinema.org/a/1264777.svg)](https://asciinema.org/a/1264777)

## Best practices when using Ensor

- Run Ensor before committing changes that may include credentials or tokens
- Keep generated `.env` files out of version control (add them to `.gitignore`)
- Rotate any secrets that may have already been exposed
- Review redactions to confirm placeholders and variable names match your app's configuration

## Resources

- [Ensor GitHub repository](https://github.com/Pratyay360/ensor)
- [Ensor releases](https://github.com/Pratyay360/ensor/releases)
- [Betterleaks](https://github.com/betterleaks/betterleaks)
- [Gitleaks](https://github.com/gitleaks/gitleaks)
