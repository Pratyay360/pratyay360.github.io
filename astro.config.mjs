// @ts-check

import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightThemeExquisitus from "starlight-theme-exquisitus";

export default defineConfig({
	site: "https://pratyay360.github.io",
	compressHTML: true,
	integrations: [
		sitemap({
			serialize(item) {
				item.changefreq = ChangeFreqEnum.DAILY;
				return item;
			},
		}),
		starlight({
			title: "Docs for projects by pratyay",
			description:
				"Developer documentation, setup guides, and technical reference for Ensor, Dynamic UPI, Drawy, Newsy, and open-source tools.",
			components: {
				Footer: "./src/components/Footer.astro",
				// Head: "./src/components/Head.astro",
			},

			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Pratyay360/pratyay360.github.io",
				},
				{
					icon: "rss",
					label: "Website",
					href: "https://pratyay.online",
				},
			],

			head: [
				{
					tag: "meta",
					attrs: {
						name: "author",
						content: "PRATYAY MUSTAFI",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "google-site-verification",
						content: "Va5ujtlU8FJUGHM84xxJvdFwqT4ocbM-Wpjnl3vXsBw",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "ahrefs-site-verification",
						content:
							"d3773a4e761cae81cfc313a1f250e863c527544e86f99edc96fd82d01cceb2cb",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "msvalidate.01",
						content: "C348576BB92261CC55029F04F308DB94",
					},
				},
				{
					tag: "meta",
					attrs: {
						property: "og:type",
						content: "documentation",
					},
				},
				{
					tag: "meta",
					attrs: {
						property: "og:image",
						content: "https://pratyay360.github.io/og-image.png",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "twitter:image",
						content: "https://pratyay360.github.io/og-image.png",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "theme-color",
						content: "#0d0d12",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "referrer",
						content: "strict-origin-when-cross-origin",
					},
				},
				{
					tag: "link",
					attrs: {
						rel: "apple-touch-icon",
						sizes: "180x180",
						href: "/apple-touch-icon.png",
					},
				},
				{
					tag: "link",
					attrs: { rel: "manifest", href: "/manifest.json" },
				},
				{
					tag: "link",
					attrs: {
						rel: "preconnect",
						href: "https://www.googletagmanager.com",
						crossorigin: "",
					},
				},
				{
					tag: "link",
					attrs: { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
				},
				{
					tag: "link",
					attrs: {
						rel: "preconnect",
						href: "https://analytics.ahrefs.com",
						crossorigin: "",
					},
				},
				{
					tag: "link",
					attrs: { rel: "dns-prefetch", href: "https://analytics.ahrefs.com" },
				},
				{
					tag: "link",
					attrs: {
						rel: "preconnect",
						href: "https://unpkg.com",
						crossorigin: "",
					},
				},
				{
					tag: "link",
					attrs: { rel: "dns-prefetch", href: "https://unpkg.com" },
				},
				{
					tag: "meta",
					attrs: {
						property: "og:site_name",
						content: "Pratyay's project Docs",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "twitter:card",
						content: "summary_large_image",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "robots",
						content:
							"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
					},
				},
			],

			customCss: ["./src/styles/wide.css"],
			plugins: [starlightThemeExquisitus()],

			pagefind: true,

			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},

			pagination: true,

			sidebar: [
				{
					label: "Start Here",
					items: [
						{ label: "Introduction", slug: "index" },
						{ label: "Getting Started", slug: "getting-started" },
					],
				},
				{
					label: "Guides",
					collapsed: false,
					items: [{ autogenerate: { directory: "guides" } }],
				},
				{
					label: "Reference",
					collapsed: true,
					items: [
						{
							autogenerate: {
								directory: "reference",
								collapsed: true,
							},
						},
					],
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
		build: {
			minify: "oxc",
			cssMinify: "lightningcss",
		},
	},
});
