const colorMap: { [key: string]: string } = {
	// Foreground
	"fg.default": "#24292E",
	"fg.muted": "#57606A",
	"fg.subtle": "#6E7781",
	"fg.onEmphasis": "#FFFFFF",
	"fg.accent": "#0968DA",
	"fg.success": "#1B7F36",
	"fg.attention": "#9A6700",
	"fg.danger": "#CF212E",
	"fg.severe": "#BC4C00",
	"fg.open": "#1B7F36",
	"fg.closed": "#CF212E",
	"fg.done": "#824FDE",
	// Background
	"bg.emphasis": "#24292E",
	"bg.default": "#FFFFFF",
	"bg.subtle": "#F5F8FA",
	"bg.inset": "#F5F8FA",
	"bg.accent": "#DCF3FF",
	"bg.success": "#D9FBE1",
	"bg.attention": "#FFF8C4",
	"bg.danger": "#FFEBE9",
	"bg.severe": "#FFF0E4",
	"bg.open": "#D9FBE1",
	"bg.closed": "#FFEBE9",
	"bg.done": "#FBEEFF",
	"bg.emphasisHighlighted": "#0968DA",
	// Border
	"border.default": "#CFD7DD",
	"border.muted": "#D8DEE3",
	"border.accent": "#BDDFFF",
	"border.success": "#BCE7C4",
	"border.attention": "#EEDCB0",
	"border.danger": "#FFCDCD",
	"border.severe": "#FFD2B7",
	"border.open": "#BCE7C4",
	"border.close": "#FFCDCD",
	"border.done": "#E7D5FF",
	"border.emphasisHighlighted": "#0968DA",
};

export function getColorHex(colorName: string): string | undefined {
	return colorMap[colorName];
}
