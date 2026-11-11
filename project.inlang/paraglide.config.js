import { defineConfig } from "@inlang/paraglide-js";

export default defineConfig({
	outdir: "./src/paraglide",
	strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
	urlPatterns: [
		{
			pattern: "/:path(.*)?",
			localized: [
				["en", "/:path(.*)?"],
				["de", "/de/:path(.*)?"],
			],
		},
	],
	emitTsDeclarations: true,
});
