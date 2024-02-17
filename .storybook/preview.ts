import "@/src/common/outputTailwind.css";
import "../src/components/Icon.svelte";

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
