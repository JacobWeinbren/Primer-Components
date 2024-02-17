<script lang="ts">
	import "@/src/common/tailwind.css";
	import { twMerge } from "tailwind-merge";
	import octicons from "@primer/octicons";

	/**
	 * Specifies the icon to be used from the octicons library.
	 */
	export let iconName: string = "";
	/**
	 * Additional CSS classes to apply to the icon for styling.
	 */
	export let className: string = "";
	/**
	 * Size of the icon, can be 'sm', 'md', or 'lg'.
	 */
	export let size: "sm" | "md" | "lg" = "md";

	// Reactive statement that updates whenever iconName, className, or size changes
	$: svg = getIconSVG(iconName, className, size);

	function getIconSVG(iconName, className, size) {
		const sizeClasses = {
			sm: "w-3 h-3",
			md: "w-4 h-4",
			lg: "w-6 h-6",
		};
		const defaultClasses = "fill-current " + sizeClasses[size] || "w-4 h-4";
		const mergedClasses = twMerge(defaultClasses, className);
		let svg =
			octicons[iconName]?.toSVG({
				class: mergedClasses,
			}) || "";

		// Only manipulate svg if it exists
		if (svg) {
			// Remove width and height attributes from the SVG string
			svg = svg
				.replace(/width="[^"]*"/, "")
				.replace(/height="[^"]*"/, "");
		}

		return svg;
	}
</script>

<div>{@html svg}</div>
