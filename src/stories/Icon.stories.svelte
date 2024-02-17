<script context="module">
	import IconButton from "../components/IconButton.svelte";
	import { Alert16 } from "svelte-octicons";

	export const meta = {
		title: "Components/IconButton",
		component: IconButton,
		parameters: { layout: "centered" },
		argTypes: {
			className: {
				control: "text",
				description: "Additional CSS classes for custom styling.",
			},
			size: {
				control: "select",
				options: ["sm", "md", "lg"],
				description: "Determines the size of the button.",
			},
			variant: {
				control: "select",
				options: [
					"default",
					"primary",
					"danger",
					"outline",
					"invisible",
				],
				description: "Sets the visual style of the button.",
			},
			inactive: {
				control: "boolean",
				description:
					"Controls the active/inactive state of the button.",
			},
			"aria-label": {
				control: "text",
				description: "Accessibility label.",
			},
		},
	};
</script>

<script>
	import { Story, Template } from "@storybook/addon-svelte-csf";

	let args = {
		"aria-label": "Alert Button",
		size: "md",
		variant: "default",
		className: "",
		inactive: false,
	};
</script>

<Template let:args>
	<IconButton {...args}>
		<Alert16 class="fill-current text-fg-default" />
	</IconButton>
</Template>

<Story name="Default" {args} />
