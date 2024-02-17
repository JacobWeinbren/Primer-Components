import "@/src/common/outputTailwind.css";

export const parameters = {
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
