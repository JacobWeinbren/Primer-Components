import TestComponent from "@/src/components/TestComponent.svelte";
import { Meta, StoryObj } from "@storybook/svelte";

const meta: Meta = {
	title: "My Element",
	component: TestComponent,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		name: { control: "text" },
	},
};

export default meta;

export const Default: StoryObj = {
	args: {
		name: "Lit",
	},
};
