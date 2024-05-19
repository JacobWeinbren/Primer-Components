const plugin = require("tailwindcss/plugin");
const fs = require("fs");
const path = require("path");

function extractCSSVariables(filePaths) {
	const cssVariables = {};

	filePaths.forEach((filePath) => {
		const fileContent = fs.readFileSync(filePath, "utf8");
		const variableRegex = /--([^:]+):\s*([^;]+);/g;
		let variableMatch;
		while ((variableMatch = variableRegex.exec(fileContent)) !== null) {
			const variableName = `--${variableMatch[1]}`;
			const variableValue = variableMatch[2].trim();
			cssVariables[variableName] = variableValue;
		}
	});

	return cssVariables;
}

module.exports = plugin(function ({ addBase, addComponents, addUtilities }) {
	const themes = [
		{
			name: "dark-colorblind",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/dark-colorblind.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="dark"][data-dark-theme="dark_colorblind"], [data-color-mode="dark"][data-dark-theme="dark_colorblind"] ::backdrop, [data-color-mode="auto"][data-light-theme="dark_colorblind"], [data-color-mode="auto"][data-light-theme="dark_colorblind"] ::backdrop',
		},
		{
			name: "dark-dimmed",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/dark-dimmed.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="dark"][data-dark-theme="dark_dimmed"], [data-color-mode="dark"][data-dark-theme="dark_dimmed"] ::backdrop, [data-color-mode="auto"][data-light-theme="dark_dimmed"], [data-color-mode="auto"][data-light-theme="dark_dimmed"] ::backdrop',
		},
		{
			name: "dark-high-contrast",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/dark-high-contrast.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="dark"][data-dark-theme="dark_high_contrast"], [data-color-mode="dark"][data-dark-theme="dark_high_contrast"] ::backdrop, [data-color-mode="auto"][data-light-theme="dark_high_contrast"], [data-color-mode="auto"][data-light-theme="dark_high_contrast"] ::backdrop',
		},
		{
			name: "dark-tritanopia",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/dark-tritanopia.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="dark"][data-dark-theme="dark_tritanopia"], [data-color-mode="dark"][data-dark-theme="dark_tritanopia"] ::backdrop, [data-color-mode="auto"][data-light-theme="dark_tritanopia"], [data-color-mode="auto"][data-light-theme="dark_tritanopia"] ::backdrop',
		},
		{
			name: "dark",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/dark.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="dark"][data-dark-theme="dark"], [data-color-mode="dark"][data-dark-theme="dark"] ::backdrop, [data-color-mode="auto"][data-light-theme="dark"], [data-color-mode="auto"][data-light-theme="dark"] ::backdrop',
		},
		{
			name: "light-colorblind",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/light-colorblind.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="light"][data-light-theme="light_colorblind"], [data-color-mode="light"][data-light-theme="light_colorblind"], [data-color-mode="auto"][data-light-theme="light_colorblind"] ::backdrop',
		},
		{
			name: "light-high-contrast",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/light-high-contrast.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="light"][data-light-theme="light_high_contrast"], [data-color-mode="light"][data-light-theme="light_high_contrast"] ::backdrop, [data-color-mode="auto"][data-light-theme="light_high_contrast"], [data-color-mode="auto"][data-light-theme="light_high_contrast"] ::backdrop',
		},
		{
			name: "light-tritanopia",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/light-tritanopia.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="light"][data-light-theme="light_tritanopia"], [data-color-mode="light"][data-light-theme="light_tritanopia"] ::backdrop, [data-color-mode="auto"][data-light-theme="light_tritanopia"], [data-color-mode="auto"][data-light-theme="light_tritanopia"] ::backdrop',
		},
		{
			name: "light",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/themes/light.css"
				),
			],
			dataAttribute: "data-color-mode",
			selector:
				'[data-color-mode="light"][data-light-theme="light"], [data-color-mode="light"][data-light-theme="light"] ::backdrop, [data-color-mode="auto"][data-light-theme="light"], [data-color-mode="auto"][data-light-theme="light"] ::backdrop',
		},
		{
			name: "base-size",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/base/size/size.css"
				),
			],
			dataAttribute: "data-size-mode",
			selector: ":root",
		},
		{
			name: "base-typography",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/base/typography/typography.css"
				),
			],
			dataAttribute: "data-typography-mode",
			selector: ":root",
		},
		{
			name: "functional-motion",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/motion/motion.css"
				),
			],
			dataAttribute: "data-motion-mode",
			selector: ":root",
		},
		{
			name: "functional-size-border",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/size/border.css"
				),
			],
			dataAttribute: "data-border-mode",
			selector: ":root",
		},
		{
			name: "functional-size-breakpoints",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/size/breakpoints.css"
				),
			],
			dataAttribute: "data-breakpoints-mode",
			selector: ":root",
		},
		{
			name: "functional-size",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/size/size.css"
				),
			],
			dataAttribute: "data-size-mode",
			selector: ":root",
		},
		{
			name: "functional-typography",
			filePaths: [
				path.join(
					__dirname,
					"node_modules/@primer/primitives/dist/css/functional/typography/typography.css"
				),
			],
			dataAttribute: "data-typography-mode",
			selector: ":root",
		},
	];

	themes.forEach((theme) => {
		const cssVariables = extractCSSVariables(theme.filePaths);
		addBase({
			[theme.selector]: cssVariables,
		});
	});

	// Define custom media queries
	addComponents({
		"@media (max-width: calc(48rem - 0.02px))": {
			"--viewportRange-narrow": true,
		},
		"@media (max-width: calc(63.25rem - 0.02px)) and (max-height: calc(34rem - 0.02px)) and (orientation: landscape)":
			{
				"--viewportRange-narrowLandscape": true,
			},
		"@media (min-width: 48rem)": {
			"--viewportRange-regular": true,
		},
		"@media (min-width: 87.5rem)": {
			"--viewportRange-wide": true,
		},
		"@media (orientation: portrait)": {
			"--viewportRange-portrait": true,
		},
		"@media (orientation: landscape)": {
			"--viewportRange-landscape": true,
		},
	});

	// Adding the spin animation utility
	addUtilities({
		"@keyframes spin": {
			from: { transform: "rotate(0deg)" },
			to: { transform: "rotate(360deg)" },
		},
		".spin": {
			animation: "spin 1s linear infinite",
		},
	});
});
