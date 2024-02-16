import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
	theme: theme,
	toolbar: {
		title: { hidden: true },
		eject: { hidden: true },
		copy: { hidden: true },
	},
});
