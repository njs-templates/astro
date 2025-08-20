// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	// If you want to use sharp with PNPM:
	// https://docs.astro.build/en/guides/images/#default-image-service
	image: {
		service: passthroughImageService(),
	},
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
