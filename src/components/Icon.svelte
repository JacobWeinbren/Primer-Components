<script lang="ts">
	import { twMerge } from "tailwind-merge";
	import { getColorHex } from "@/src/common/colours";
	import octicons from "@primer/octicons";

	export let iconName;
	export let className: string = "";
	export let colour: string = "";

	function getIconSVG(iconName, className, colour) {
		const defaultClasses = "my-custom-class";
		const mergedClasses = twMerge(defaultClasses, className);
		const fillColour = getColorHex(colour) || colour;
		return octicons[iconName]?.toSVG({
			class: mergedClasses,
			fill: fillColour,
		});
	}
</script>

<div>{@html getIconSVG(iconName, className, colour)}</div>
