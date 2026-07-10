import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import { loadEnv } from "vite";
import spectre, { type GiscusMapping } from "./package/src";
import { spectreDark } from "./src/ec-theme";
const {
	GISCUS_REPO, GISCUS_REPO_ID, GISCUS_CATEGORY, GISCUS_CATEGORY_ID,
	GISCUS_MAPPING, GISCUS_STRICT, GISCUS_REACTIONS_ENABLED,
	GISCUS_EMIT_METADATA, GISCUS_LANG,
} = loadEnv(process.env.NODE_ENV!, process.cwd(), "");
export default defineConfig({
	site: "https://Kajir-009.github.io",
	output: "static",
	integrations: [
		expressiveCode({ themes: [spectreDark] }),
		mdx(),
		sitemap(),
		spectre({
			name: "General",
			openGraph: {
				home: { title: "Diego Reyes", description: "Mi Portafolio" },
				blog: { title: "3D Models", description: "Mi 3D models I have mede until now." },
				projects: { title: "Projects" },
			},
		}),
	],
});
