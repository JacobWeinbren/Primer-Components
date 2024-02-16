import TestComponent from "@/src/components/Icon.svelte";
import { Meta, StoryObj } from "@storybook/svelte";

const meta: Meta = {
	title: "Components/Icon",
	component: TestComponent,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		iconName: {
			control: "text",
			description:
				"Icon name - full list avaliable at https://icongr.am/octicons",
		},
		className: {
			control: "text",
			description: "CSS classes to apply",
		},
		"aria-label": {
			control: "text",
			description: "Accessibility label",
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
