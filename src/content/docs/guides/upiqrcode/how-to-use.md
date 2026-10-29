---

title: "How to Generate UPI Payment QR Codes & Deep Links"
description: "Step-by-step guide to generating instant UPI payment QR codes, deep links, and integrating the upiqrcode WebAssembly library."
isCJKLanguage: false
headless: false
label: "How to Use"
tags:
- upi
- qrcode
- payments
- tutorial
- npm

---

Dynamic UPI is designed to be instant, secure, and friction-free. Here is the complete step-by-step process to generate a UPI payment QR code or integrate the library into your frontend application.

## 1. Enter the Payee VPA

Type a valid UPI Virtual Payment Address (VPA), such as `merchant@upi` or `name@okicici`. The VPA must:
- Be at least 5 characters long
- Contain an `@` symbol (e.g. `user@bank`)

## 2. Enter the Payee Name

Provide the registered name of the individual or merchant receiving the payment (minimum 4 characters). This is displayed on the payment confirmation screen of the payer's UPI app.

## 3. Set Transaction Amount & Note (Optional)

- **Amount**: A positive decimal number in INR, e.g. `150.00`. If left blank, the payer can manually enter any amount in their UPI app.
- **Transaction Note**: A concise description shown in the payer's transaction history, e.g. `Invoice #402` or `Coffee`.

## 4. Generate Vector QR & Deep Link

Click **Generate QR Code**. The Rust-compiled WebAssembly library builds the assets in browser memory in under a millisecond:
- A **vector SVG QR code** compatible with any UPI scanner.
- A **`upi://pay` intent link** that opens the payer's installed UPI app directly when tapped on mobile.

## Framework Demos

Every interactive demo uses the same `@1.5.5` WebAssembly build loaded via CDN:

| Framework           | Implementation Component   | Live Interactive Demo                                        |
| :------------------ | :------------------------- | :----------------------------------------------------------- |
| **React**           | `ReactUPIQRCode.tsx`       | [React UPI Demo](https://dynamic-upi-qr.netlify.app/react)   |
| **Vue 3**           | `VueUPIQRCode.vue`         | [Vue 3 UPI Demo](https://dynamic-upi-qr.netlify.app/vue)     |
| **Svelte**          | `SvelteUPIQRCode.svelte`   | [Svelte UPI Demo](https://dynamic-upi-qr.netlify.app/svelte) |
| **Vanilla HTML/JS** | `PlainHTMLUPIQRCode.astro` | [Vanilla JS Demo](https://dynamic-upi-qr.netlify.app/html)   |

## Install the NPM Package

To integrate client-side UPI QR code generation into your own project:

```bash
npm install upiqrcode
```

### ES Module / TypeScript Usage

```javascript
import { upiqrcode } from "upiqrcode";

const result = await upiqrcode({
	payeeVPA: "success@upi",
	payeeName: "John Doe",
	amount: "150.00",
	currency: "INR",
	transactionNote: "Coffee",
});

// result.qr     → Scalable vector SVG string
// result.intent → Standardized upi://pay?... intent URI
```

## Related Documentation

- **[Getting Started](/guides/upiqrcode/getting-started/)** — Overview of Dynamic UPI features and architecture.
- **[UPI QR & Deep Link Format](/guides/upiqrcode/upi-format/)** — NPCI URI parameters and specifications.
- **[Frequently Asked Questions](/guides/upiqrcode/faq/)** — Common questions and troubleshooting tips.
