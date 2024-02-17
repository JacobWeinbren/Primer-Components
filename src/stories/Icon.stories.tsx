import Icon from "../components/Icon.svelte";
import { Meta, StoryObj } from "@storybook/svelte";

const meta: Meta = {
	title: "Components/Icon",
	component: Icon,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		iconName: {
			control: "text",
		},
		className: {
			control: "text",
		},
		"aria-label": {
			control: "text",
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
	},
};

export default meta;

export const Default: StoryObj = {
	args: {
		iconName: "alert",
		"aria-label": "alert icon",
		className: "text-fg-danger",
		size: "lg",
	},
};
