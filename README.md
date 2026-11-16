# pratyay360.github.io

Documentation site for projects by [Pratyay Mustafi](https://pratyay.online), built with [Zola](https://www.getzola.org/) using the [Mabuya](https://github.com/semanticdata/mabuya) theme as a base.

## Project structure

```text
.
├── config.toml      # Zola site configuration
├── content/         # Markdown content (pages, sections, i18n .de/.bn variants)
├── templates/       # Tera templates and partials
├── sass/            # Styles
├── static/          # Static assets copied as-is
└── dist/            # Build output (generated)
```

## Commands

```bash
zola serve   # local dev server
zola build   # build to ./dist (without the search index)
zola check   # check links/templates
pagefind --site dist  # index the built site for search
```

With mise:

```bash
mise run serve
mise run build     # zola build + pagefind
mise run check
mise run i18n      # compile Paraglide messages
mise run i18n-check
```

Search is provided by [Pagefind](https://pagefind.app/) on `/search/`; its index is generated at build time.
