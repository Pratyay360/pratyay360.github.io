import { defineConfig } from "@inlang/paraglide-js";

export default defineConfig({
	outdir: "./src/paraglide",
	strategy: ["url", "globalVariable", "baseLocale"],
	urlPatterns: [
		{
			pattern: "/:path(.*)?",
			localized: [
				["en", "/:path(.*)?"],
				["de", "/de/:path(.*)?"],
				["bn", "/bn/:path(.*)?"],
			],
		},
	],
	emitTsDeclarations: true,
});
