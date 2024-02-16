module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx|svelte)",
	],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
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
