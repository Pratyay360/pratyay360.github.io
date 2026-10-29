---

title: "Getting Started with Dynamic UPI QR Code Generator"
description: "Learn how to generate instant, client-side UPI payment QR codes and deep links using Dynamic UPI and the WebAssembly upiqrcode library."
tags:
- upi
- qrcode
- payments
- webassembly
- wasm
- npm
- rust
isCJKLanguage: false
headless: false

---

Welcome to **Dynamic UPI** — a high-performance, open-source tool and WebAssembly library designed for generating instant, customizable, and shareable UPI payment QR codes directly inside the browser.

## What is Dynamic UPI?

**Dynamic UPI** allows developers, merchants, and creators to generate standard-compliant Unified Payments Interface (UPI) QR codes on the fly. Unlike static QR codes, dynamic UPI QR codes can encode:
- **Payee Virtual Payment Address (VPA / UPI ID)**: e.g., `merchant@upi` or `name@okicici`
- **Payee Name**: Verified merchant or personal account name
- **Pre-filled Transaction Amount**: Exact payment amount in INR
- **Transaction Note**: Payment reference, order number, or purpose (e.g., `Invoice #1042`)

Any UPI-enabled application (Google Pay, PhonePe, Paytm, BHIM, CRED, Navi) can immediately scan the generated QR code or open the accompanying deep-link intent to execute the transaction without manual data entry.

## Key Features & Benefits

- ⚡ **Instant Client-Side Generation**: Zero server latency. Vector SVG QR codes and `upi://pay` intent links are generated directly in browser memory.
- 🔒 **Privacy-First & Zero Backend**: No transaction amounts, UPI IDs, or customer notes ever leave the user's device or touch an external server.
- 📱 **Universal App Compatibility**: Works seamlessly with all NPCI-compliant payment apps including PhonePe, Google Pay (GPay), Paytm, BHIM, CRED, and mobile banking apps.
- 🦀 **Powered by Rust & WebAssembly**: Compiled from Rust to lightweight WebAssembly (`upiqrcode`) for sub-millisecond execution and minimal bundle size.
- 🎨 **Framework Agnostic**: Usable via npm or CDN across React, Vue, Svelte, Angular, Astro, or plain Vanilla JavaScript.

## Quick Start: How to Generate a UPI QR Code

Follow these simple steps to generate a payment QR code:
1. **Enter Payee VPA**: Provide a valid UPI ID (e.g., `business@upi`). Must be at least 5 characters and include an `@` symbol.
2. **Enter Payee Name**: Enter the merchant or recipient name as registered with the bank (minimum 4 characters).
3. **Specify Amount (Optional)**: Set a fixed transaction amount (e.g., `249.00`). Leaving this blank produces an open-amount QR code where payers enter their own amount.
4. **Add a Transaction Note (Optional)**: Provide a context note (e.g., `Order #8921` or `Coffee donation`).
5. **Generate & Share**: Click **Generate QR Code**. Scan the rendered SVG QR code with any UPI app, or click the **Open in App** intent link on mobile devices to launch the preferred payment application directly.

## Supported UPI Apps & Payment Specifications

The generated QR codes and deep links adhere strictly to the National Payments Corporation of India (NPCI) UPI linking specifications:

| Payment App                             | QR Code Scan | Deep Link (`upi://pay`) |
| :-------------------------------------- | :----------- | :---------------------- |
| **PhonePe**                             | Supported    | Supported               |
| **Google Pay (GPay)**                   | Supported    | Supported               |
| **Paytm**                               | Supported    | Supported               |
| **BHIM UPI**                            | Supported    | Supported               |
| **CRED**                                | Supported    | Supported               |
| **Amazon Pay**                          | Supported    | Supported               |
| **Banking UPI Apps (HDFC, ICICI, SBI)** | Supported    | Supported               |

## Interactive Framework Demos

Explore live demos powered by the CDN-loaded `@1.5.5` WebAssembly build across multiple modern frontend frameworks:
- **[React Demo](https://dynamic-upi-qr.netlify.app/react)** — React implementation with custom hooks managing CDN WebAssembly.
- **[Vue 3 Demo](https://dynamic-upi-qr.netlify.app/vue)** — Vue 3 Composition API integration.
- **[Svelte Demo](https://dynamic-upi-qr.netlify.app/svelte)** — Svelte reactive bindings.
- **[Vanilla HTML / JS Demo](https://dynamic-upi-qr.netlify.app/html)** — Minimal vanilla JavaScript implementation without a frontend build step.

For an end-to-end architectural overview, visit the [Dynamic UPI Live Showcase](https://dynamic-upi-qr.netlify.app).

## Developer Installation: NPM & CDN

Integrate client-side UPI QR generation directly into your own web application:

### Install via NPM

```bash
npm install upiqrcode
```

### Quick Code Example

```javascript
import { upiqrcode } from "upiqrcode";

async function createPaymentQR() {
	const paymentData = await upiqrcode({
		payeeVPA: "merchant@upi",
		payeeName: "Acme Store",
		amount: "499.00",
		currency: "INR",
		transactionNote: "Order #1024",
	});

	// paymentData.qr     -> Vector SVG string ready to render
	// paymentData.intent -> Standardized upi://pay?... URI deep link
	console.log("Intent URL:", paymentData.intent);
}
```

## Related Guides & Documentation

Explore detailed technical guides and format specifications:
- **[Step-by-Step Usage Guide](/guides/upiqrcode/how-to-use/)** — Comprehensive guide with edge cases and input validation rules.
- **[UPI QR Format & Deep-Link Spec](/guides/upiqrcode/upi-format/)** — In-depth breakdown of `upi://pay` URI parameters and NPCI guidelines.
- **[Privacy & Security Architecture](/guides/upiqrcode/privacy/)** — How the client-side sandbox protects customer payment data.
- **[Frequently Asked Questions (FAQ)](/guides/upiqrcode/faq/)** — Common questions regarding transaction limits, fees, and compatibility.
