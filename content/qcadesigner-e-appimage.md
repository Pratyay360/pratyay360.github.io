---
title: "QCADesigner-E: QCA Simulator with Power Estimation on Linux"
description: "A plain language guide to QCADesigner-E: what the QCA energy simulation does, how to install the Linux AppImage, and how to run your first power estimate."
date: 2026-11-20T07:21:35.873Z
draft: false
slug: qcadesigner-qca-simulator-power-estimation-linux
keywords:
  - qcadesigner-e
---

I maintain the Linux AppImage for QCADesigner-E. The simulator itself came out of a group at the University of Bremen, and the energy model is based on work by Timler, Lent, and their coauthors. My part is small: I repackage it into one file you can download and run, without fighting Qt and a pile of simulation libraries.

QCADesigner-E is a free tool for drawing quantum-dot cellular automata (QCA) circuits and estimating how much power they dissipate. Think of it as QCADesigner 2.0.3 with one extra simulation module strapped on. Same canvas, same file format, plus a way to measure energy. That's the short version.

![The QCADesigner-E design canvas with a QCA layout open](/assets/qcadesigner-e-gui.png)

*The design canvas. If you've used QCADesigner 2.0.3, this will look familiar. The energy simulation lives in the simulation dialog.*

## What it actually is

QCA is a proposed way to compute without transistors. A cell is a few tiny quantum dots holding two electrons, and where those electrons sit encodes a 0 or a 1. Neighboring cells push on each other, so a line of cells behaves like a wire and certain arrangements behave like gates. A four-phase clock keeps the signal moving along.

QCADesigner has been the usual way to sketch these circuits for years. Version 2.0.3 will simulate a design and tell you whether the logic does what you intended. What it won't tell you is the energy bill. QCADesigner-E adds that. The new piece is the Coherence Vector Simulation Engine, or CVSE, which handles the power calculation while the older engines carry on doing their usual jobs.

## Why the Power Number Matters

Low power is one of the standard arguments for QCA. That argument only goes somewhere if you can put a number on it.

In practice I use the estimate for two things. First, comparing two layouts that compute the same function, because switching activity can differ a lot between them. Second, checking what a clocking scheme costs, since the clock drives the whole computation and not all schemes are equally expensive. The 2018 paper from the Bremen group ties this into logic synthesis, which is worth reading if you want the theory behind the number.

I'm not going to re-derive the physics here. The good sources are the [Timler and Lent paper on power gain and dissipation](https://doi.org/10.1103/PhysRevB.65.045303), the [Bennett clocking paper](https://doi.org/10.1088/0957-4484/17/16/040), and the [IEEE TCAD paper describing QCADesigner-E itself](https://doi.org/10.1109/TCAD.2018.2789782).

## What happens when you run the energy simulation

Under the hood, QCADesigner-E keeps the engines you already know: bistable, coherence vector, and exhaustive. The added module tracks the cell states across the clock cycle and applies the Timler Lent dissipation model to the transitions it finds. You don't write any equations. You pick the energy simulation, feed it input vectors, and read the result.

I should be straight with you about the documentation. The energy module is described in `Manual_QDE.pdf`, which ships with the source, and the papers are the real reference. I haven't found a modern walkthrough that explains every setting in detail. If you need to defend a number in a publication, expect to do some reading beyond this page.

## Getting It Running

The AppImage is the easy path. It bundles Qt, the CVSE libraries, and the simulation engines, so nothing needs installing on your machine.

```bash
wget https://github.com/Pratyay360/QCADesigner-E/releases/download/main/QCADesignerE-x86_64.AppImage
chmod +x QCADesignerE-x86_64.AppImage
./QCADesignerE-x86_64.AppImage
```

On systems where FUSE is unavailable or user mounts are blocked, use the fallback:

```bash
./QCADesignerE-x86_64.AppImage --appimage-extract-and-run
```

I've needed that on cluster machines. Since everything is bundled, the same binary behaves the same way on Ubuntu, Fedora, Arch, openSUSE, and NixOS.

If you want to read or change the code, build it instead:

```bash
git clone https://github.com/Pratyay360/QCADesigner-E.git
cd QCADesignerE
./autogen.sh
./configure --prefix=/home/your_account/your_install_location
make
make install
bin/QCADesignerE &
```

`./configure --help` lists the other build options. The packaging scripts are in the repository under `.github/workflows` and `Containerfile`.

## A First Session

Here is roughly what I do when I sit down with a new design:

1. Open one of the ready-made circuits in the `circuits` folder, or a `.qca` file I already have.
2. Run an ordinary simulation first. If the logic is wrong, the energy figure tells me nothing useful.
3. Switch to the energy simulation, set the input vectors, and run it.
4. Change one thing, either the layout or the clock zoning, and run again. The comparison is where this becomes interesting.

The interface looks like QCADesigner 2.0.3, so anyone who has used that will find their way around quickly.

## Will It Open My Old Designs?

Yes. QCADesigner-E is built on 2.0.3 and stays compatible with the `.qca` files that version produces. I've never had to convert anything, and the upstream README says the same thing plainly. You can open an existing design, run the usual simulation, and then add an energy run without rebuilding the circuit.

## Where to get it

| What | Where |
| ---- | ----- |
| AppImage | [Release asset on GitHub](https://github.com/Pratyay360/QCADesigner-E/releases/download/main/QCADesignerE-x86_64.AppImage) |
| Source | [Pratyay360/QCADesigner-E](https://github.com/Pratyay360/QCADesigner-E) |
| Listing | <https://appimage.github.io/QCADesigner-E/> |
| Listing | <https://portable-linux-apps.github.io/en/app/qcadesigner-e.html> |
| Original project | [FSillT/QCADesigner-E](https://github.com/FSillT/QCADesigner-E) |
| Upstream site | <https://fsillt.github.io/QCADesigner-E> |

## Questions I get asked

### What is QCADesigner-E for?

It's for designing quantum-dot cellular automata circuits and checking how much power they dissipate. People use it to compare layouts, try different clocking schemes, and get a rough energy figure before building anything physically. It's QCADesigner 2.0.3 with an added coherence-vector energy module.

### Do I have to compile it?

No. The AppImage comes with all its dependencies inside, so you make it executable and run it. Building from source is there if you want to change the simulator or read the implementation. That route uses `autogen.sh`, `configure`, and `make`.

### Does It Open QCADesigner 2.0.3 Files?

Yes. Designs made in version 2.0.3, including `.qca` files, open directly. You can keep working in the same format and add an energy simulation on top. I haven't run into a case that needed conversion.

### Can I Use It in a Paper?

Yes, it's free to use and modify under GPL-3.0. The original authors ask one thing in return: cite their paper and the original QCADesigner paper. I've put both references below so you can copy them.

## If you publish with it

The authors ask for both of these:

> F. Sill Torres, R. Wille, P. Niemann, and R. Drechsler, "An energy-aware model for the logic synthesis of quantum-dot cellular automata," *IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems*, vol. 37, no. 12, pp. 3031-3041, Dec. 2018. [doi:10.1109/TCAD.2018.2789782](https://doi.org/10.1109/TCAD.2018.2789782)

> K. Walus, T. J. Dysart, G. A. Jullien, and R. A. Budiman, "QCADesigner: a rapid design and simulation tool for quantum-dot cellular automata," *IEEE Transactions on Nanotechnology*, vol. 3, pp. 26-31, 2004.

The simulator and the energy model are the work of the University of Bremen team. The AppImage is my packaging effort and isn't affiliated with them. If something breaks in the package, [open an issue](https://github.com/Pratyay360/QCADesigner-E/issues) or [send me a note](https://app.youform.com/forms/8kgi7jvm).
