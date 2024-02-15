import "../../dist/components/test";

import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

export default {
	title: "My Element",
	parameters: {
		layout: "centered",
	},
	argTypes: {
		onOpen: { action: "onClick" },
	},
	render: (args) => html`<test-component></test-component>`,
} as Meta;

export const Default: StoryObj = {
	name: "Default",
	args: {
		name: "Lit",
	},
};
