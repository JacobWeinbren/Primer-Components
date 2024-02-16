import Component from "@/src/components/Icon.svelte";
import { Meta, StoryObj } from "@storybook/svelte";

const meta: Meta = {
	title: "Components/Icon",
	component: Component,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		iconName: {
			control: "text",
			description:
				"Icon name - full list avaliable at https://icongr.am/octicons",
			table: { defaultValue: { summary: "alert" } },
		},
		className: {
			control: "text",
			description: "CSS classes to apply",
			table: { defaultValue: { summary: "" } },
		},
		"aria-label": {
			control: "text",
			description: "Accessibility label",
			table: { defaultValue: { summary: "Alert Icon" } },
		},
		colour: {
			control: "text",
			description:
				"Icon colour - either a default Primer colour or a string",
			table: { defaultValue: { summary: "fg.danger" } },
		},
	},
};

export default meta;

export const Default: StoryObj = {
	args: {
		iconName: "alert",
		"aria-label": "Alert icon",
		className: "",
		colour: "fg.danger",
	},
};
