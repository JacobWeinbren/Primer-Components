import "@/dist/components/test";

import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

export default {
	title: "My Element",
	parameters: {
		layout: "centered",
	},
	argTypes: {
		name: { control: "text" },
	},
	render: (args) =>
		html`<test-component .name=${args.name}></test-component>`,
} as Meta;

export const Default: StoryObj = {
	args: {
		name: "Lit",
	},
};
