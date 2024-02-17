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
		},
		className: {
			control: "text",
		},
		"aria-label": {
			control: "text",
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
