---
title: "QCADesigner-E Power Estimation on Linux"
description: "A plain language guide to QCADesigner-E: what the QCA energy simulation does, how to install the Linux AppImage, and how to run your first power estimate."
date: 2026-11-20T07:21:35.873Z
draft: false
slug: qcadesigner-qca-simulator-power-estimation-linux
keywords:
  - qcadesigner-e
---



> Easy.
> The key idea of the AppImage format is one app = one file. Every AppImage contains an app and all the files the app needs to run. In other words, each AppImage has no dependencies other than what is included in the targeted base operating system(s).

> Trusted.

> AppImage format is ideal for upstream packaging, which means that you get the software directly from the original author(s) without any intermediaries, exactly in the way the author(s) intended. And quickly.

AppImages can be downloaded and run without installation or the need for root rights.

[![QCADesigner-E AppImage](https://i.ibb.co/CdHy7k1/Screenshot-20260928-002154-png.png)](https://i.ibb.co/CdHy7k1/Screenshot-20260928-002154-png.png)

[![QCADesigner-E AppImage](https://i.ibb.co/Gvrw30yb/Screenshot-2026-09-28-at-02-05-51-QCADesigner-E-App-Images-png.png)](https://i.ibb.co/Gvrw30yb/Screenshot-2026-09-28-at-02-05-51-QCADesigner-E-App-Images-png.png)

I repackaged QCADesigner-E to make life easier for users. I repackaged it into one file you can download and run, without fighting the dependency collisions.

QCADesigner-E is available as an AppImage which means "one app = one file", which you can download and run on your Linux system while you don't need a package manager and nothing gets changed in your system. Awesome!

AppImages are single-file applications that run on most Linux distributions. Download an application, make it executable, and run! No need to install. No system libraries or system preferences are altered. Most AppImages run on recent versions of Arch Linux, CentOS, Debian, Fedora, openSUSE, Red Hat, Ubuntu, and other common desktop distributions.

This AppImage uses the C library of the system and may need glibc 2.35 or later. It does not run on distributions that use a different C library (such as musl on Alpine Linux) or an older glibc.
Running QCADesigner-E on Linux without installation
Unlike other applications, AppImages do not need to be installed before they can be used. However, they need to be marked as executable before they can be run. This is a Linux security feature.

QCADesigner-E is a free tool for drawing quantum-dot cellular automata (QCA) circuits and estimating how much power they dissipate. Think of it as QCADesigner 2.0.3 with one extra simulation module strapped on. Same canvas, same file format, plus a way to measure energy. That's the short version.

# what is this about?

not as such it's just a opensource repackaging of the original [QCADesigner-E](https://fsillt.github.io/QCADesigner-E/) project. The original is owned by the original authors.

```bash
wget https://github.com/Pratyay360/QCADesigner-E/releases/download/main/QCADesignerE-x86_64.AppImage
chmod +x QCADesignerE-x86_64.AppImage
./QCADesignerE-x86_64.AppImage
```

## Where to get it

| What | Where |
| ---- | ----- |
| AppImage | [Release asset on GitHub](https://github.com/Pratyay360/QCADesigner-E/releases/download/main/QCADesignerE-x86_64.AppImage) |
| Source | [Pratyay360/QCADesigner-E](https://github.com/Pratyay360/QCADesigner-E) |
| Listing | [https://appimage.github.io/QCADesigner-E/](https://appimage.github.io/QCADesigner-E/) |
| Listing | [https://portable-linux-apps.github.io/en/app/qcadesigner-e.html](https://portable-linux-apps.github.io/en/app/qcadesigner-e.html) |
| Original project | [FSillT/QCADesigner-E](https://github.com/FSillT/QCADesigner-E) |
| Upstream site | [https://fsillt.github.io/QCADesigner-E](https://fsillt.github.io/QCADesigner-E) |

### Can I Use It in a Paper?

Yes the code is owned by the original authors. I have just repackages it. You can learn about that [here](https://fsillt.github.io/QCADesigner-E/).

The simulator and the energy model are the work of the University of Bremen team. The AppImage is my packaging effort and isn't affiliated with them. If something breaks in the package, [open an issue](https://github.com/Pratyay360/QCADesigner-E/issues)

This is an effort to make the tool accessable on any modern system without depending on the host dependencies. And even installing it.
