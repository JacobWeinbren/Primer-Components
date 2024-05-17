import customPlugin from "primer-components/tailwind-plugin.js";

// Check the environment variable
const isDev = process.env.NODE_ENV === "development";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/primer-components/**/*.{js,jsx,ts,tsx,astro}",
	],
	theme: {
		extend: {},
	},
	plugins: [customPlugin],
};
