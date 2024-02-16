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
				"Icon name - full list avaliable at https://primer.style/foundations/icons/",
			table: { defaultValue: { summary: "alert" } },
		},
		className: {
			control: "text",
			description: "CSS classes to apply",
			table: { defaultValue: { summary: "w-4 h-4 text-fg-danger" } },
		},
		"aria-label": {
			control: "text",
			description: "Accessibility label",
			table: { defaultValue: { summary: "Alert Icon" } },
		},
	},
};

export default meta;

export const Default: StoryObj = {
	args: {
		iconName: "alert",
		"aria-label": "Alert icon",
		className: "w-4 h-4 text-fg-danger",
	},
};
