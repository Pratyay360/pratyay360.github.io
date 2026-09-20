// Shiki-based syntax highlighting for Zine code blocks.
//
// Zine renders fenced code blocks server-side with tree-sitter as:
//   <pre><code class="<lang>"><span class="keyword">...</span></code></pre>
// This script re-highlights those blocks client-side with Shiki (TextMate
// grammars, many more languages + prettier themes).
//
// Usage: loaded as <script type="module"> from head.shtml.
// Docs: https://shiki.style/guide/install#cdn-usage

import { codeToHtml } from "https://esm.sh/shiki@3.0.0";

// Dual themes: Shiki emits CSS vars for both, highlight.css switches
// between them via prefers-color-scheme.
const THEMES = {
  light: "github-light",
  dark: "github-dark",
};

// Zine/tree-sitter language names -> Shiki language ids.
const LANG_ALIASES = {
  console: "shellsession",
  shell: "bash",
  sh: "bash",
  "c++": "cpp",
  shtml: "html",
  superhtml: "html",
  smd: "markdown",
  supermd: "markdown",
  ziggy: "zig",
};

const SKIP_LANGS = new Set(["=html"]);

function resolveLang(raw) {
  if (!raw) return "plaintext";
  // Zine emits `class="zig"`; handle `language-zig` too just in case.
  const name = raw.trim().split(/\s+/)[0].replace(/^language-/, "").toLowerCase();
  if (SKIP_LANGS.has(name) || name.startsWith("=")) return null;
  return LANG_ALIASES[name] ?? name;
}

async function highlightBlock(pre, codeEl) {
  const lang = resolveLang(codeEl.className);
  if (lang === null) return; // e.g. inlined =html, leave alone

  // textContent decodes entities and strips Zine's tree-sitter spans,
  // giving us the raw source to re-highlight.
  const code = codeEl.textContent.replace(/\n$/, "");

  try {
    const html = await codeToHtml(code, { lang, themes: THEMES });
    const tpl = document.createElement("template");
    tpl.innerHTML = html.trim();
    const shikiPre = tpl.content.firstElementChild;
    if (!shikiPre) return;
    // Keep Zine's language class for debugging / CSS hooks.
    shikiPre.dataset.lang = lang;
    pre.replaceWith(shikiPre);
  } catch {
    // Unknown language in Shiki (or network failure): fall back to
    // plaintext so the block still renders instead of breaking.
    if (lang !== "plaintext") {
      try {
        const html = await codeToHtml(code, { lang: "plaintext", themes: THEMES });
        const tpl = document.createElement("template");
        tpl.innerHTML = html.trim();
        const shikiPre = tpl.content.firstElementChild;
        if (shikiPre) {
          shikiPre.dataset.lang = lang;
          pre.replaceWith(shikiPre);
        }
      } catch {
        /* leave Zine's tree-sitter output as-is */
      }
    }
  }
}

async function highlightAll() {
  const blocks = document.querySelectorAll("pre > code");
  // Sequential to reuse Shiki's in-memory theme/lang cache warm-up
  // in order; could be parallel but this avoids request bursts.
  for (const codeEl of blocks) {
    const pre = codeEl.parentElement;
    if (pre?.tagName === "PRE" && !pre.classList.contains("shiki")) {
      await highlightBlock(pre, codeEl);
    }
  }
}

// Run ASAP but after parsing; module scripts are deferred by default,
// so DOM is ready here. Also re-run for lazily injected content.
highlightAll();
new MutationObserver(() => highlightAll()).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
