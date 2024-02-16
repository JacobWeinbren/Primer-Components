<script lang="ts">
	import "@/src/common/tailwind.css";
	import { twMerge } from "tailwind-merge";
	import octicons from "@primer/octicons";

	export let iconName: string = "";
	export let className: string = "";

	function getIconSVG(iconName, className) {
		const defaultClasses = "w-4 h-4 fill-current";
		const mergedClasses = twMerge(defaultClasses, className);
		let svg = octicons[iconName]?.toSVG({
			class: mergedClasses,
		});

		// Remove width and height attributes from the SVG string
		svg = svg.replace(/width="[^"]*"/, "").replace(/height="[^"]*"/, "");

		return svg;
	}
</script>

<div class={className}>{@html getIconSVG(iconName, className)}</div>
