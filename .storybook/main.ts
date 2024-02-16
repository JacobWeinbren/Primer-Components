module.exports = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
	addons: [
		"@storybook/addon-links",
		{
			name: "@storybook/addon-essentials",
			options: {
				measure: false,
				actions: false,
				backgrounds: false,
				controls: true,
				docs: true,
				viewport: true,
				toolbars: false,
				grid: false,
			},
		},
		"@storybook/addon-a11y",
		"@whitespace/storybook-addon-html",
		"storybook-addon-themes",
	],
	framework: {
		name: "@storybook/svelte-vite",
		options: {},
	},
	docs: {
		autodocs: true,
	},
};
