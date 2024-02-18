<script lang="ts">
	import "@/src/common/tailwind.css";
	import { twMerge } from "tailwind-merge";

	/**
	 * Specifies additional CSS classes for custom styling of the button.
	 */
	export let className: string = "";

	/**
	 * Determines the size of the button. Acceptable values are 'sm' (small), 'md' (medium), or 'lg' (large).
	 */
	export let size: "sm" | "md" | "lg" = "md";

	/**
	 * Sets the visual style of the button based on its state or purpose. Options include 'default', 'primary', 'danger', 'outline', and 'invisible'.
	 */
	export let variant:
		| "default"
		| "primary"
		| "danger"
		| "outline"
		| "invisible" = "default";

	/**
	 * Controls the active/inactive state of the button. A value of 'true' renders the button as inactive.
	 */
	export let inactive: true | false = false;

	$: sizeClasses = {
		sm: "w-7 h-7",
		md: "w-8 h-8",
		lg: "w-10 h-10",
	};

	$: stateClasses = {
		default: "opacity-100",
		active: "opacity-75",
		disabled: "opacity-50 cursor-not-allowed",
	};

	$: defaultClasses = `inline-flex items-center border border-border-default bg-bg-subtle hover:bg-[#f3f4f6] w-8 h-8 rounded-md justify-center ${
		sizeClasses[size] || "w-4 h-4"
	} ${stateClasses[variant] || "opacity-100"}`;

	$: mergedClasses = twMerge(defaultClasses, className);
</script>

<button class={mergedClasses} {...$$restProps}>
	<slot />
</button>
