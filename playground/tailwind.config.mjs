import customPlugin from "primer-components/tailwind-plugin.js";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/primer-components/**/*.{js,jsx,ts,tsx,astro}",
		"../package/src/**/*.{js,jsx,ts,tsx,astro}",
	],
	theme: {
		extend: {},
	},
	plugins: [customPlugin],
};
