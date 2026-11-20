---
title: "My Open-Source Toolkit: From QCA Simulators to Git Forge CLIs"
description: "A practical guide to the open-source tools I've built and packaged: QCADesigner-E AppImage, Drawy collaborative whiteboard, ensor secrets CLI, forgit multi-forge CLI, Tauri app distribution, and bootc immutable OS workflows."
weight: 0
draft: false
date: 2026-11-19T17:02:39.678Z
keywords:
  - open-source tools
  - Linux app distribution
  - AppImage
  - Tauri
  - bootc
  - secrets management
  - Git CLI
---

I've spent the last few years building and packaging tools that solve specific problems I encountered as a developer — from quantum circuit simulation to secrets management to Git forge unification. This post walks through each project, why it exists, and how to use it.

## TL;DR

| Project | Category | One-Liner |
| --------- | ---------- | ----------- |
| **QCADesigner-E AppImage** | Scientific Computing | Portable QCA simulator with power-dissipation estimation |
| **Drawy** | Collaborative Tools | Self-hostable, multi-tenant Excalidraw wrapper |
| **ensor** | Security/DevOps | Interactive CLI to detect/redact secrets, convert env formats |
| **forgit** | Developer Productivity | Unified CLI for GitHub, GitLab, Gitea, Forgejo, Bitbucket, SourceHut |
| **Tauri AppImage packaging** | App Distribution | Building portable Linux binaries for Tauri apps |
| **bootc workflows** | Infrastructure | Immutable OS management via container images |

---

## QCADesigner-E AppImage: Quantum Cellular Automata on Any Linux

**The problem:** QCADesigner-E (University of Bremen) adds power-dissipation estimation to QCADesigner 2.0.3 using the Coherence Vector Simulation Engine (CVSE) based on Timler & Lent's theoretical work. But it was only available as source code — researchers had to compile it manually with complex dependencies.

**My solution:** Repackaged it as an AppImage — a single portable binary that runs on any modern Linux distro without installation.

```bash
# Download and run (no install needed)
wget https://appimage.github.io/QCADesigner-E/QCADesigner-E-latest-x86_64.AppImage
chmod +x QCADesigner-E-latest-x86_64.AppImage
./QCADesigner-E-latest-x86_64.AppImage
```

**Why AppImage?** It bundles all dependencies (Qt, CVSE libraries, simulation engines) into one file. Researchers on Ubuntu, Fedora, Arch, or NixOS get identical behavior — critical for reproducible scientific computing.

**Key features preserved:**

- Full QCA logic gate design and simulation
- Timing analysis and verification
- Power-dissipation estimation via CVSE module
- Backward compatibility with QCADesigner 2.0.3 `.qca` files

**Links:**

- 📦 AppImageHub: <https://appimage.github.io/QCADesigner-E/>
- 📋 Portable Linux Apps: <https://portable-linux-apps.github.io/en/app/qcadesigner-e.html>
- 🔬 Original authors: <https://github.com/FSillT/QCADesigner-E>

---

## Drawy: Collaborative Whiteboard, Self-Hosted

**The problem:** Excalidraw is excellent but single-board by default. Self-hosting multi-tenant Excalidraw means managing separate instances, databases, and auth for each team — operational overhead most small teams can't justify.

**My solution:** Drawy wraps Excalidraw in a lightweight, multi-tenant architecture with Supabase backend. One deployment serves unlimited boards, teams, and users.

**Architecture highlights:**

- **Frontend:** Excalidraw canvas (React, TypeScript)
- **Backend:** Supabase (PostgreSQL + Realtime + Auth + Storage)
- **Deployment:** Single container, serverless-friendly
- **Auth:** Email/password, OAuth (GitHub, Google), magic links
- **Real-time:** WebSocket sync via Supabase Realtime

**Getting started:**

```bash
# Clone and configure
git clone https://github.com/Pratyay360/drawy
cd drawy
cp .env.example .env
# Add your Supabase URL, anon key, service role key

# Deploy (Docker)
docker compose up -d
```

**Use cases:** Architecture diagrams, wireframes, brainstorming, technical documentation — all collaborative, all versioned.

**Repo:** <https://github.com/Pratyay360/drawy>

---

## ensor: Secrets Detection & Redaction CLI

**The problem:** Hardcoded secrets in codebases (API keys, database URLs, tokens) are a top cause of breaches. Existing tools scan but don't remediate — you still manually rotate secrets and update `.env` files.

**My solution:** `ensor` scans, detects, **and redacts** secrets in one interactive flow. It extracts discovered secrets into a `.env` file and replaces them with configurable placeholders across your project.

```bash
# Install
mise use github:github.com/pratyay360/ensor@latest
# or: brew install pratyay360/tap/ensor

# Scan and redact interactively
ensor scan --interactive
```

**Key capabilities:**

- **Detection:** 50+ secret patterns (AWS, GitHub, Slack, Stripe, JWT, private keys, etc.)
- **Redaction:** Replaces secrets with `{SECRET_NAME}` placeholders (customizable)
- **Extraction:** Writes detected secrets to `.env` with descriptive keys
- **Format conversion:** `.env` ↔ JSON ↔ YAML ↔ TOML
- **CI/CD ready:** Non-interactive mode for pipelines

**Example workflow:**

```bash
# Before: config.py has hardcoded API_KEY = "sk-live-abc123"
ensor scan --interactive

# After: config.py has API_KEY = "{STRIPE_API_KEY}"
# .env has STRIPE_API_KEY=sk-live-abc123
```

**Built with:** Go, Bubble Tea (TUI), Huh (forms) — fast, terminal-native UX.

**Links:**

- 📦 Repo: <https://github.com/Pratyay360/ensor>
- 📖 Docs: [/guides/ensor/](/guides/ensor/)
- 🪟 WinGet: `winget install pratyay360.ensor`

---

## forgit: One CLI for All Git Forges

**The problem:** Working across GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut means learning 6 different CLIs (`gh`, `glab`, `tea`, `forgejo-cli`, `bb`, `hut`) with different flags, auth flows, and output formats.

**My solution:** `forgit` unifies them behind one consistent command set.

```bash
# Install
mise use github:github.com/pratyay360/forgit@latest
# or: brew install pratyay360/tap/forgit
# or: scoop install pratyay360/forgit
# or: winget install pratyay360.forgit

# Same commands, any forge
forgit repo list
forgit issue create --title "Bug: login broken" --body "Details..."
forgit pr create --base main --head feature/auth
forgit release create --tag v1.0.0 --title "v1.0.0"
```

**Supported operations:**

| Category | Commands |
| ---------- | ---------- |
| Repositories | `list`, `create`, `clone`, `delete`, `view` |
| Issues | `list`, `create`, `view`, `comment`, `close` |
| Pull/Merge Requests | `list`, `create`, `view`, `merge`, `checkout` |
| Releases | `list`, `create`, `view`, `upload-assets` |
| Authentication | `auth login`, `auth status`, `auth logout` |

**Configuration:** Single `forgit.yaml` defines forge endpoints, tokens, and defaults. Switch contexts with `forgit context use github|gitlab|...`

**Why Go?** Cross-compilation, single binary distribution, excellent CLI libraries (Cobra, Bubble Tea).

**Repo:** <https://github.com/Pratyay360/forgit>

---

## Tauri App Distribution: AppImage, DEB, RPM, Flatpak

**The problem:** Tauri v2 apps need distribution across Linux formats. Each format has quirks: AppImage bundling, DEB/RPM metadata, Flatpak sandboxing, Snap confinement.

**My approach:** Use `tauri.conf.json` with `linuxdeploy` plugins for automated multi-format builds.

```json
// tauri.conf.json (excerpt)
{
  "bundle": {
    "linux": {
      "appimage": {
        "bundleMediaFramework": false
      },
      "deb": {
        "depends": ["libwebkit2gtk-4.1-0", "libayatana-appindicator3-1"]
      },
      "rpm": {
        "depends": ["webkit2gtk4.1", "libayatana-appindicator3-1"]
      }
    }
  }
}
```

**CI pipeline (Goreleaser + mise):**

```yaml
# .goreleaser.yaml
builds:
  - id: tauri-app
    main: ./src-tauri/main.rs
    binary: myapp
    hooks:
      post: tauri build --target $TARGET
archives:
  - format: appimage
    name_template: "APPNAME-VERSION-OS-ARCH.AppImage"  # example pattern
  - format: deb
  - format: rpm
```

**Key tips:**

- Use `linuxdeploy` with `appimage` plugin for AppImage (handles glibc compat)
- Pin `webkit2gtk` versions in DEB/RPM deps to avoid runtime failures
- Sign AppImages with GPG for trust: `goreleaser sign --artifact-filter "*.AppImage"`
- Test on clean VMs (distrobox/toolbx) before release

**Reference:** <https://v2.tauri.app/distribute/appimage/>

---

## bootc: Immutable OS via Container Images

**The problem:** Traditional Linux updates are imperative (dnf/apt upgrade), risky (partial failures), and hard to roll back. `bootc` (bootable containers) makes OS updates transactional, atomic, and container-native.

**My workflow:** Build custom bootc images for reproducible workstations/servers.

```dockerfile
# Containerfile
FROM quay.io/fedora/fedora-bootc:41
RUN dnf install -y \
    chezmoi \
    mise \
    git \
    podman \
    distrobox \
    && dnf clean all

# Add dotfiles
COPY .chezmoi /etc/chezmoi
RUN chezmoi init --apply /etc/chezmoi
```

```bash
# Build and test
podman build -t localhost/my-bootc:latest .
podman run --rm -it --privileged localhost/my-bootc:latest

# Deploy to machine
sudo bootc switch localhost/my-bootc:latest
# Reboot → new OS active
# Rollback: sudo bootc rollback
```

**Benefits:**

- **Atomic updates:** Image pull + switch = single transaction
- **Rollback:** Instant revert to previous image
- **Reproducible:** Same Containerfile = identical OS everywhere
- **Layer caching:** Fast rebuilds, shared base layers

**Resources:**

- 📖 Fedora docs: <https://docs.fedoraproject.org/en-US/bootc/>
- 🛠️ GitHub: <https://github.com/bootc-dev/bootc>

---

## Connecting the Dots: A Cohesive Dev Environment

These tools aren't isolated — they compose into a workflow:

1. **ensor** keeps secrets out of repos (CI scans every PR)
2. **forgit** manages issues/PRs across all forges from one terminal
3. **chezmoi + mise** (in bootc image) syncs dotfiles and tool versions
4. **Tauri + AppImage** ships GUI tools to users without distro friction
5. **Drawy** documents architecture visually, stored in Supabase
6. **QCADesigner-E AppImage** validates hardware designs offline

**The meta-lesson:** Solve your own friction points. Package the solution so others don't hit the same wall. Automate the packaging so releases are non-events.

---

## Frequently Asked Questions

### Which project should I start with?

If you manage secrets: **ensor**. If you work across Git forges: **forgit**. If you distribute Linux apps: **Tauri AppImage** or **bootc**.

### Are these production-ready?

- **ensor**, **forgit**: Used in my daily workflow, CI-tested
- **QCADesigner-E AppImage**: Validated by researchers at University of Bremen
- **Drawy**: Running in production for small teams
- **bootc workflows**: Personal workstation, not yet multi-node

### How do I contribute?

All repos accept PRs. Check `CONTRIBUTING.md` or open an issue first for significant changes.

### Where can I find pre-built binaries?

- **ensor**: GitHub Releases, Homebrew, Scoop, WinGet, mise
- **forgit**: GitHub Releases, Homebrew, Scoop, WinGet, mise
- **QCADesigner-E**: AppImageHub, Portable Linux Apps
- **Drawy**: Docker Hub (`ghcr.io/pratyay360/drawy`)

---

## Conclusion

Building tools for yourself is the fastest way to learn. Packaging them for others forces you to handle edge cases, document assumptions, and automate releases. The six projects above started as personal scripts — now they're installed on machines I'll never see.

If any of these solve a problem you have, try them. Open an issue if they don't quite fit. That feedback loop is how open source gets better.

**Next steps for me:** Multi-arch bootc images, forgit v1.0 with plugin API, ensor SAST integration.

---

*Using any of these? Star the repos. Found a bug? File an issue. Want to chat? [GitHub Discussions](https://github.com/Pratyay360) or [Mastodon](https://mastodon.social/@realPratyay).*
