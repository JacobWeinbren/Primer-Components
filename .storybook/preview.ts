export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	themes: {
		clearable: false,
		list: [
			{
				name: "Light",
				class: [],
				color: "#ffffff",
				default: true,
			},
			{
				name: "Dark",
				class: ["dark"],
				color: "#000000",
			},
		],
	},
};
