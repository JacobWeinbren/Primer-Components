import primer from "primer-components/tailwind";

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/primer-components/**/*.{js,jsx,ts,tsx,astro}",
	],
	theme: {
		extend: {},
	},
	plugins: [primer],
};
