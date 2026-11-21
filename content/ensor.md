---
title: ensor Secret Detection & Redaction CLI
description: >-
  ensor is a CLI tool built in golang that finds hardcoded secrets, redacts them
  with placeholders, and converts env files between dotenv, JSON, YAML, and
  TOML.
date: '2026-11-17T10:25:51.812Z'
weight: 2
draft: false
slug: ensor
tags:
  - secret detection
  - secret redaction
  - CLI
  - security
  - DevOps
  - gitleaks alternative
  - environment variables
  - Go
---
Hardcoded secrets in codebases (API keys, database URLs, tokens) are a top cause of breaches. Most tools scan and stop there — you still manually rotate secrets and update `.env` Files.

**ensor** scans, detects, **and redacts** in one interactive flow. It extracts discovered secrets into a `.env` file and replaces them with configurable placeholders across your project.

```bash
# Install
mise use github:github.com/pratyay360/ensor@latest
# or: brew install pratyay360/tap/ensor

# Scan and redact interactively
ensor scan --interactive
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
- **Interactive redaction**: TUI prompts for each finding — accept suggested name, customize, or skip
- **Smart .env mapping**: If a detected value matches an existing `.env` entry, uses that key automatically
- **Placeholder format**: `{SECRET_NAME}` (customizable via config)
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
ensor scan --interactive
```

**Before:** `config.py` contains `API_KEY = "sk-live-abc123"`  
**After:** `config.py` contains `API_KEY = "{STRIPE_API_KEY}"`  
**New `.env`:** `STRIPE_API_KEY=sk-live-abc123`

### Non-interactive (CI/CD)

```bash
# Exit code 1 if secrets found, 0 if clean
ensor scan --json > ensor-report.json
```

### Convert environment formats

```bash
# .env → JSON
ensor convert --from dotenv --to json --input .env --output config.json

# JSON → YAML
ensor convert --from json --to yaml --input config.json --output config.yaml

# YAML → TOML
ensor convert --from yaml --to toml --input config.yaml --output config.toml
```

### Configuration

`~/.config/ensor/config.yaml`:

```yaml
# Custom placeholder format
placeholder_format: "{NAME}"  # example

# Additional paths to skip
skip_paths:
  - "*.min.js"
  - "dist/"
  - "build/"

# Custom secret patterns (regex)
custom_patterns:
  - name: "INTERNAL_API_KEY"
    regex: "internal-[a-z0-9]{32}"
    description: "Internal service API key"
```

## How It Works

1. **Scan** — Walks project files (respects `.gitignore`, configurable skip paths)
2. **Detect** — Runs gitleaks/betterleaks engine + custom patterns
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

- Run `ensor scan --interactive` before committing changes that may include credentials
- Keep generated `.env` files out of version control (add to `.gitignore`)
- Review redactions — confirm placeholders match your app's configuration
- Use `ensor convert` when migrating config formats across tools/projects

## Comparison: ensor vs. gitleaks vs. trufflehog


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
- 📜 **License**: MIT

---

*ensor is my daily driver for secret hygiene. If it catches a leak for you, [star the repo](https://github.com/Pratyay360/ensor). Found a false positive? [File an issue](https://github.com/Pratyay360/ensor/issues/new).*
