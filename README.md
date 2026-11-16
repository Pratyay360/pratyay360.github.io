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
zola build   # build to ./dist
zola check   # check links/templates
```

With mise:

```bash
mise run serve
mise run build
mise run check
```
