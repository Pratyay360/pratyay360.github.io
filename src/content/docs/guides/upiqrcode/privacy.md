---

title: "Privacy & Security Model: In-Browser UPI QR Generation"
description: "Understand the zero-backend, client-side privacy model of Dynamic UPI and how the WebAssembly sandbox ensures zero payment data retention."
isCJKLanguage: false
headless: false
label: "Privacy Model"
tags:
- privacy
- security
- upi
- webassembly

---

Dynamic UPI is built with privacy as a non-negotiable core architectural principle. Everything runs strictly on the client side inside your local browser.

## The Zero-Backend Guarantee

Unlike traditional payment QR generators that route your UPI ID, payee details, and transaction amounts through remote APIs, Dynamic UPI has **no backend server**.
- **No API requests**: Generating a QR code makes zero HTTP requests.
- **No data logging**: Your VPA, merchant name, amounts, and notes are never stored or tracked.
- **No cookies or trackers**: Zero analytics scripts, tracking beacons, or telemetry.

## In-Memory WebAssembly Sandbox

The [`upiqrcode`](https://npmx.dev/package/upiqrcode) library compiles from Rust to WebAssembly. The WASM module runs entirely inside your browser's isolated memory space:
1. Input parameters are passed directly from your DOM to the WebAssembly module.
2. The QR matrix is calculated and transformed into a vector SVG string purely in browser RAM.
3. Once the SVG is rendered to your screen, temporary memory buffers are released.

## Audit & Verification

Because Dynamic UPI is fully open source, the client-side code and WebAssembly build steps can be independently audited directly in the [GitHub Repository](https://github.com/Pratyay360/upiqrcode).
