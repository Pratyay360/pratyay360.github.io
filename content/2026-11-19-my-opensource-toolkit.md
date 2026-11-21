---
title: My Open Build and Package
description: >-
  An overview of the open-source tools I build and package, including Drawy,
  ensor, forgit, QCADesigner-E, Tauri AppImage builds, and bootc workflows.
weight: 0
draft: false
date: '2026-11-19T17:02:39.678Z'
keywords:
  - open-source tools
  - Linux app distribution
  - AppImage
  - Tauri
  - bootc
  - secrets management
  - Git CLI
slug: 2026-11-19-my-opensource-toolkit
---
I build and package tools that solve problems I run into as a developer. A few started as scripts for my own machine and turned into releases other people use. This page is a short index of that work. Each item links to a fuller guide with install commands, configuration examples, and troubleshooting notes.

## TL;DR


| Project                    | Category               | One-Liner                                                  |
| -------------------------- | ---------------------- | ---------------------------------------------------------- |
| **QCADesigner-E AppImage** | Scientific computing   | Portable QCA simulator with power-dissipation estimation   |
| **Drawy**                  | Collaborative tools    | Self-hostable, multi-tenant Excalidraw workspace           |
| **DrawX**                  | Desktop apps           | Offline whiteboard for Linux, macOS, and Windows           |
| **ensor**                  | Security and DevOps    | CLI to detect and redact secrets, then convert env formats |
| **forgit**                 | Developer productivity | One command set for six Git forges                         |
| **Tauri AppImage builds**  | App distribution       | Portable Linux binaries for Tauri apps                     |
| **bootc workflows**        | Infrastructure         | Immutable OS images built from containers                  |


## QCADesigner-E AppImage

QCADesigner-E adds power-dissipation estimation to QCADesigner 2.0.3 using the Coherence Vector Simulation Engine. The upstream project ships source code only, so I package it as one AppImage that runs on current Linux distributions without a build step. The usual simulation engines and the `.qca` file format are preserved.

[Read the QCADesigner-E guide](/qcadesigner-qca-simulator-power-estimation-linux/) for the download commands, a first energy run, and the papers behind the model. The [source repository](https://github.com/Pratyay360/QCADesigner-E) holds the packaging scripts.

## Drawy and DrawX

Drawy wraps Excalidraw in a multi-tenant web app. It adds live cursors, shared canvases, version history, and reusable libraries, with Postgres as the source of truth and a Cloudflare Worker relaying realtime updates. DrawX is the offline desktop alternative, built with Tauri v2, for people who want the same canvas with no network at all.

- [Drawy self-hosting and setup guide](/guides/drawy/)
- [DrawX downloads and overview](/guides/drawx-100-private-offline-whiteboard-app/)

## ensor

Hardcoded keys and tokens are still one of the most common ways a repository leaks credentials. ensor scans a codebase, shows you each piece of finding, and writes the detected values into a `.env` file while replacing them with placeholders in your source. It also converts between dotenv, JSON, YAML, and TOML, and has a non-interactive mode for CI.

The [ensor guide](/guides/ensor/) covers installation on each platform, the config file, and how it compares with gitleaks and trufflehog.

## forgit

Working across GitHub, GitLab, Gitea, Forgejo, Bitbucket, and SourceHut normally means learning six CLIs with different flags and auth flows. forgit puts repos, issues, pull requests, and releases behind one command set, with a single YAML file for forge tokens and contexts.

The [forgit page](/forgit-a-cli-for-all-the-gitforges/) has the command table, configuration example, and CI usage.

## Tauri AppImage builds

Tauri v2 apps need separate handling for AppImage, DEB, RPM, and Flatpak targets. Most of the friction is in dependency metadata and glibc compatibility. I use `linuxdeploy` with the AppImage plugin, pin the `webkit2gtk` version in package dependencies, and sign release artifacts with GPG.

For the bundle settings and CI details, see the [Tauri distribution docs](https://v2.tauri.app/distribute/).

## bootc images

bootc makes OS updates transactional by treating the system as a container image. I build custom images with a Containerfile, test them locally with Podman, and switch machines with `bootc switch`. Rollback is a single command when an update goes badly.

The [bootc project](https://github.com/bootc-dev/bootc) is the place to start if you want to try it.

## How they fit together

These tools are not isolated. They compose into a working setup:

1. ensor keeps secrets out of repositories, with scans in CI.
2. forgit handles issues and pull requests across forges from one terminal.
3. A bootc image carries chezmoi and mise, which sync dotfiles and tool versions.
4. Tauri and AppImage packaging ships the GUI tools without distro friction.
5. Drawy documents the architecture visually; DrawX does the same offline.
6. QCADesigner-E validates hardware designs on a workstation.

The common thread is solving my own friction points, then packaging the solution so nobody else has to hit the same wall.

## Frequently Asked Questions

### Which project should I start with?

It depends on the problem. Use ensor if you manage secrets, forgit if you work across Git forges, and Tauri AppImage or bootc if you distribute Linux software. Each linked guide has a quick start.

### Are these production-ready?

ensor and forgit are in my daily workflow and are CI tested. The QCADesigner-E AppImage is used by researchers at the University of Bremen. Drawy runs in production for small teams. My bootc setup is for personal machines rather than multi-node deployments.

### Where do I get the binaries?

Releases live on the GitHub repositories for [ensor](https://github.com/Pratyay360/ensor), [forgit](https://github.com/Pratyay360/forgit), and [QCADesigner-E](https://github.com/Pratyay360/QCADesigner-E). DrawX has platform installers on its [releases page](https://github.com/Pratyay360/drawx/releases).

### How do I contribute?

Every repository accepts pull requests. Open an issue first for a larger change so we can agree on the approach.

## Conclusion

Building tools for yourself is a fast way to learn. Packaging them for other people forces you to handle edge cases, document assumptions, and automate releases. The projects above began as personal fixes and are now installed on machines I will never see.

If one of them solves a problem for you, try it. If it almost fits, open an issue. That feedback loop is how open source gets better.
