---
title: Ensor Secret Detection & Redaction
description: ensor is a CLI tool built in golang that finds hardcoded secrets, redacts them with placeholders, and converts env files between dotenv, JSON, YAML, and TOML.
date: 2026-11-17T10:25:51.812Z
weight: 2
draft: false
slug: ensor
tags:
  - CLI
  - security
  - DevOps
  - Go
  - secret
  - opensource
headless: false
isCJKLanguage: false
---
Hardcoded secrets in codebases (API keys, database URLs, tokens) are a top cause of breaches. Most tools scan and stop there — you still manually rotate secrets and update `.env` Files.

_ensor_ detects, **and redacts** in one interactive flow. It extracts discovered secrets into a `.env` File and replaces them with configurable placeholders across your project.

```bash
# Install
mise use github:github.com/pratyay360/ensor@latest
# or: brew install pratyay360/tap/ensor

ensor
```

## Why ensor?


| Problem                    | ensor Approach                              |
| -------------------------- | ------------------------------------------- |
| **Scanners only detect**   | Detects **and remediates** in one pass      |
| **Manual .env management** | Auto-generates `.env` with descriptive keys |
| **Format fragmentation**   | Converts `.env` ↔ JSON ↔ YAML ↔ TOML        |
| **CI/CD integration**      | Non-interactive mode for pipelines          |
| **False positive fatigue** | Interactive review before redaction         |


## Key Features

- **50+ secret patterns**: AWS, GitHub, Slack, Stripe, JWT, private keys, database URLs, generic high-entropy strings
- **Interactive redaction**: TUI prompts for each piece of finding — accept suggested name, customize, or skip
- **Smart .env mapping**: If a detected value matches existing `.env` entry, uses that key automatically
- **Zero configuration by default.**
- **Format conversion**: `ensor convert` — `.env` ↔ JSON ↔ YAML ↔ TOML
- **Safe defaults**: Skips `.env*`, `.git/*`, `node_modules/`, `vendor/` by default
- **CI/CD ready**: `ensor scan --json` for pipeline integration

## Installation


| Method              | Command                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **mise**            | `mise use github:github.com/pratyay360/ensor@latest`                                                                           |
| **Homebrew**        | `brew tap pratyay360/tap && brew install pratyay360/tap/ensor`                                                                 |
| **Go install**      | `go install github.com/pratyay360/ensor@latest`                                                                                |
| **Shell script**    | `curl -sSL https://raw.githubusercontent.com/Pratyay360/ensor/main/install.sh \| sh`                                           |
| **goblin**          | `curl -sf http://goblin.run/github.com/pratyay360/ensor \| PREFIX=~/.local/bin sh`                                             |
| **Scoop (Windows)** | `scoop bucket add pratyay360 https://github.com/pratyay360/scoop-bucket && scoop install pratyay360/ensor`                     |
| **Stew**            | `stew install pratyay360/ensor`                                                                                                |
| **Prebuilt**        | [GitHub Releases](https://github.com/Pratyay360/ensor/releases) — `.deb`, `.rpm`, `.apk`, Linux/macOS/Windows/FreeBSD binaries |


## Usage

### Scan &amp; redact (interactive)

```bash
ensor
```

### Convert environment formats

```bash
# .env → JSON
ensor convert .env env.json

# JSON → YAML
ensor convert env.json env.yaml

# YAML → TOML
ensor convert env.yaml env.toml
```

### How It Works

1. **Scan** — Walks project files (respects `.gitignore`, configurable skip paths)
2. **Detect** — Runs git leaks/better leaks engine + custom patterns
3. **Map or prompt** —
   - Match found in `.env`? → Use existing key
   - New secret? → Suggest name (e.g., `STRIPE_SECRET_KEY`) or prompt
4. **Redact** — Replace hardcoded value with `{KEY}` placeholder
5. **Store** — Write secrets to `.env` (or specified format)

## Demo


| Demo                     | Link                                                   |
| ------------------------ | ------------------------------------------------------ |
| Video walkthrough        | [YouTube](https://www.youtube.com/watch?v=3d1xLYkeVsA) |
| Secret scan &amp; redact | [asciinema](https://asciinema.org/a/1264776)           |
| Env file conversion      | [asciinema](https://asciinema.org/a/1264777)           |


## Best Practices

- Run `ensor` Before committing changes that may include credentials
- Keep generated `.env` Files out of version control (add to `.gitignore`)
- Review redactions — confirm placeholders match your app's configuration
- Use `ensor convert` When migrating configuration formats across tools/projects

## Comparison: ensor vs. git leaks vs. trufflehog


| Feature                   | ensor               | gitleaks | trufflehog |
| ------------------------- | ------------------- | -------- | ---------- |
| **Detection**             | ✅ (gitleaks engine) | ✅        | ✅          |
| **Interactive redaction** | ✅                   | ❌        | ❌          |
| **Auto .env generation**  | ✅                   | ❌        | ❌          |
| **Format conversion**     | ✅                   | ❌        | ❌          |
| **TUI/Interactive**       | ✅ (Bubble Tea)      | ❌        | ❌          |
| **CI/CD JSON output**     | ✅                   | ✅        | ✅          |
| **Custom patterns**       | ✅                   | ✅        | ✅          |


## Built With

- **Go** — Single binary, cross-platform
- **Bubble Tea** — Terminal UI framework
- **Huh** — Forms/prompts for TUI
- **git leaks/better leaks** — Detection engine
- **Cobra** — CLI structure

## Links

- 📦 **GitHub**: [https://github.com/Pratyay360/ensor](https://github.com/Pratyay360/ensor)
- 📦 **Releases**: [https://github.com/Pratyay360/ensor/releases](https://github.com/Pratyay360/ensor/releases)
- 📖 **Docs**: This guide
- 🐛 **Issues**: [https://github.com/Pratyay360/ensor/issues](https://github.com/Pratyay360/ensor/issues)
- 💬 **Discussions**: [https://github.com/Pratyay360/ensor/discussions](https://github.com/Pratyay360/ensor/discussions)
- 📜 **License**: Apache 2.0

[![asciicast](https://asciinema.org/a/1270301.svg)](https://asciinema.org/a/1270301)



[![asciicast](https://asciinema.org/a/1270303.svg)](https://asciinema.org/a/1270303)

[![asciicast](https://asciinema.org/a/1270273.svg)](https://asciinema.org/a/1270273)

<video src="https://github.com/user-attachments/assets/e817c8d7-f4eb-4eee-9cf1-f26c14f055c0" controls preload   style="width: 640px; max-width: 100%; height: auto;"></video>


[![ensor|662](https://img.youtube.com/vi/3d1xLYkeVsA/hqdefault.jpg)](http://www.youtube.com/watch?v=3d1xLYkeVsA "ensor cli")
