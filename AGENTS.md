## Development

This site is built with [Zola](https://www.getzola.org/).

- Local dev: `zola serve` (or `mise run serve`)
- Build: `mise run build` → `zola build` then Pagefind indexing, outputs to `dist/`
- Check: `zola check` (or `mise run check`)
- i18n messages: `mise run i18n` (compile Paraglide) and `mise run i18n-check` (inlang check)

## Structure

- `zola.toml` — site configuration (base URL, menus, i18n languages)
- `content/` — Markdown pages/sections; translations use suffixes like `.de.md`, `.bn.md`
- `templates/` — Tera templates (`base.html`, `index.html`, `page.html`, `search.html`, `partials/`)
- `sass/` — SCSS styles compiled by Zola
- `static/` — static files (images, manifest, robots, Pagefind init script, etc.)
- `messages/` — inlang message files (`en.json`, `de.json`, `bn.json`)
- `project.inlang/` — inlang project settings for Paraglide

## Notes

- Preserve existing URLs/content paths when editing docs.
- Prefer updating `templates/partials/head.html` and `templates/partials/footer.html` for site-wide meta/scripts.
- Search uses Pagefind; the index only exists after a build (`mise run build`), not under `zola serve`.
- Generate Paraglide output (`src/paraglide/`) instead of editing it; it is ignored by git.
