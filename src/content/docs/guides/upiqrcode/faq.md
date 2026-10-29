---

title: "Frequently Asked Questions: Dynamic UPI & upiqrcode"
description: "Answers to common questions about client-side UPI QR code generation, supported payment apps, WebAssembly security, and transaction limits."
label: "FAQ"
tags:
- upi
- faq
- qrcode
- security

---

Find quick answers to common questions about Dynamic UPI, the `upiqrcode` WebAssembly package, privacy guarantees, and payment app compatibility.

## Is my payment and personal data safe?

**Yes, completely.** Every calculation — QR matrix calculation, vector SVG rendering, and `upi://pay` deep link string generation — occurs purely inside your browser's local WebAssembly memory sandbox. No data, IP logs, amounts, or VPA addresses are ever sent to any remote server or stored in cookies.

## Which UPI payment apps are supported?

Dynamic UPI adheres strictly to the official NPCI specifications. The generated QR codes and deep links can be scanned and processed by any standard UPI-enabled application, including:
- **Google Pay (GPay)**
- **PhonePe**
- **Paytm**
- **BHIM UPI**
- **CRED**
- **Amazon Pay**
- **All major Indian bank apps** (HDFC, ICICI, SBI YONO, Axis, Kotak, etc.)

## Do I need to install an app or backend server?

**No.** For end users, Dynamic UPI runs directly in any modern browser without sign-ups or downloads. For software developers, the `@1.5.5` build can be loaded via CDN (jsDelivr) or installed via npm (`npm install upiqrcode`) without requiring any server-side runtime.

## Why compile from Rust to WebAssembly?

The core QR encoding algorithms are written in Rust and compiled to WebAssembly (WASM). This architecture provides:
- **Sub-millisecond performance**: Instant generation without lag.
- **Cross-platform consistency**: Identical vector SVG output across every browser and device.
- **Zero backend dependencies**: Runs completely client-side in an isolated sandbox.

## Can I generate open-amount QR codes?

**Yes.** The `amount` parameter is completely optional. If left blank, the generated QR code lets the payer enter their preferred payment amount directly inside their UPI application.

## Are there any transaction fees or commissions?

**No.** Dynamic UPI is 100% free and open source. It is not an intermediary payment gateway; it merely encodes standard UPI intent strings into visual QR codes. Transactions occur peer-to-peer or peer-to-merchant directly between your bank accounts through NPCI.
