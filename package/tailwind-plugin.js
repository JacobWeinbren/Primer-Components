const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
	const newUtilities = {
		".text-shadow": {
			textShadow: "0 2px 4px rgba(0,0,0,0.10)",
		},
	};

	addUtilities(newUtilities);
});
