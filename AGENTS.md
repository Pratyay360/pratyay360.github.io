## Development

This site is built with [Zola](https://www.getzola.org/).

- Local dev: `zola serve` (or `mise run serve`)
- Build: `zola build` (or `mise run build`) → outputs to `dist/`
- Check: `zola check` (or `mise run check`)

## Structure

- `config.toml` — site configuration (base URL, menus, i18n languages)
- `content/` — Markdown pages/sections; translations use suffixes like `.de.md`, `.bn.md`
- `templates/` — Tera templates (`base.html`, `index.html`, `page.html`, `partials/`)
- `sass/` — SCSS styles compiled by Zola
- `static/` — static files (images, manifest, robots, etc.)

## Notes

- Preserve existing URLs/content paths when editing docs.
- Prefer updating `templates/partials/head.html` and `templates/partials/footer.html` for site-wide meta/scripts.
