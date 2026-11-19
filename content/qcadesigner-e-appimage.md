---
title: "QCADesigner-E AppImage: Quantum Cellular Automata Simulator on Any Linux"
description: QCADesigner-E adds power-dissipation estimation to QCADesigner 2.0.3 via the Coherence Vector Simulation Engine. Repackaged as a portable AppImage — runs on any Linux distro without compilation.
date: 2026-08-23T11:10:00Z
draft: false
slug: qcadesigner-e-appimage
keywords:
  - QCADesigner-E
  - quantum cellular automata
  - QCA
  - AppImage
  - Linux
  - power dissipation
  - CVSE
  - scientific computing
---

A researcher at the University of Bremen emailed me: "We built this power-dissipation extension for QCADesigner, but nobody can compile it."

**QCADesigner-E** extends QCADesigner 2.0.3 with a Coherence Vector Simulation Engine (CVSE) based on Timler & Lent's theoretical work (IEEE TCAD 2018). It estimates power dissipation in quantum-dot cellular automata (QCA) circuits — critical for evaluating energy characteristics of QCA designs.

The problem: source-only distribution with a fragile dependency chain (Qt5, custom simulation libs, specific build environment). Researchers spent days fighting CMake, not simulating circuits.

## Solution: Portable AppImage

I repackaged QCADesigner-E as an AppImage — a single binary that runs on any modern Linux distribution without installation.

```bash
# Download and run — that's it
wget https://appimage.github.io/QCADesigner-E/QCADesigner-E-latest-x86_64.AppImage
chmod +x QCADesigner-E-latest-x86_64.AppImage
./QCADesigner-E-latest-x86_64.AppImage
```

**No FUSE required** — works with `fuse3` or `--appimage-extract-and-run` on restricted systems.

## What's Preserved

- Full QCA logic gate design and simulation
- Timing analysis and verification
- Power-dissipation estimation via CVSE module
- Backward compatibility with QCADesigner 2.0.3 `.qca` files
- All original simulation engines (bistable, coherence vector, exhaustive)

## Why AppImage for Scientific Computing?

| Challenge | AppImage Solution |
| ----------- | ------------------- |
| **Reproducibility** | Identical binary on Ubuntu, Fedora, Arch, NixOS, openSUSE |
| **Dependency hell** | Qt5, CVSE libs, simulation engines bundled inside |
| **HPC cluster restrictions** | No root, no package manager, no FUSE — `--appimage-extract-and-run` works |
| **Long-term archival** | Binary runs 10 years from now without dependency rot |

## Technical Details

**Base:** QCADesigner 2.0.3 + CVSE extension (University of Bremen)  
**Paper:** Timler, Lent, et al. — "An energy-aware model for the logic synthesis of quantum-dot cellular automata" (IEEE TCAD, 2018)  
**DOI:** [10.1109/TCAD.2018.2789782](https://doi.org/10.1109/TCAD.2018.2789782)  
**Packaging:** `linuxdeploy` + `linuxdeploy-plugin-qt` + custom AppDir structure  
**CI:** GitHub Actions → AppImageHub + Portable Linux Apps

## Download

| Platform | Link |
| ---------- | ------ |
| **AppImageHub** | <https://appimage.github.io/QCADesigner-E/> |
| **Portable Linux Apps** | <https://portable-linux-apps.github.io/en/app/qcadesigner-e.html> |
| **GitHub Releases** | <https://github.com/FSillT/QCADesigner-E/releases> (source) |

## For Researchers

If you're publishing work using QCADesigner-E, please cite:

> F. Sill Torres, R. Wille, P. Niemann, and R. Drechsler, "An energy-aware model for the logic synthesis of quantum-dot cellular automata," *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems*, vol. 37, no. 12, pp. 3031–3041, Dec. 2018.

## Acknowledgments

Thanks to the original authors at the University of Bremen: <https://github.com/FSillT/QCADesigner-E>

This AppImage is an independent community packaging effort — not affiliated with the university or original authors.

---

*Using QCADesigner-E AppImage in your research? [Let me know](https://github.com/Pratyay360/blogs_md/issues/1) — I'd love to hear how it's being used. Found a packaging issue? [File a bug](https://github.com/Pratyay360/blogs_md/issues/new).*
