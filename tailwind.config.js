module.exports = {
	darkMode: "class",
	content: ["src/**/*.{ts,tsx,html,css,scss,svelte}"],
	safelist: [],
	theme: {
		colors: {
			"color-scale": {
				gray: {
					0: "#f6f8fa",
					1: "#eaeef2",
					2: "#d0d7de",
					3: "#afb8c1",
					4: "#8c959f",
					5: "#6e7781",
					6: "#57606a",
					7: "#424a53",
					8: "#32383f",
					9: "#24292f",
				},
				blue: {
					0: "#ddf4ff",
					1: "#b6e3ff",
					2: "#80ccff",
					3: "#54aeff",
					4: "#218bff",
					5: "#0969da",
					6: "#0550ae",
					7: "#033d8b",
					8: "#0a3069",
					9: "#002155",
				},
				green: {
					0: "#dafbe1",
					1: "#aceebb",
					2: "#6fdd8b",
					3: "#4ac26b",
					4: "#2da44e",
					5: "#1a7f37",
					6: "#116329",
					7: "#044f1e",
					8: "#003d16",
					9: "#002d11",
				},
				yellow: {
					0: "#fff8c5",
					1: "#fae17d",
					2: "#eac54f",
					3: "#d4a72c",
					4: "#bf8700",
					5: "#9a6700",
					6: "#7d4e00",
					7: "#633c01",
					8: "#4d2d00",
					9: "#3b2300",
				},
				orange: {
					0: "#fff1e5",
					1: "#ffd8b5",
					2: "#ffb77c",
					3: "#fb8f44",
					4: "#e16f24",
					5: "#bc4c00",
					6: "#953800",
					7: "#762c00",
					8: "#5c2200",
					9: "#471700",
				},
				red: {
					0: "#ffebe9",
					1: "#ffcecb",
					2: "#ffaba8",
					3: "#ff8182",
					4: "#fa4549",
					5: "#cf222e",
					6: "#a40e26",
					7: "#82071e",
					8: "#660018",
					9: "#4c0014",
				},
				purple: {
					0: "#fbefff",
					1: "#ecd8ff",
					2: "#d8b9ff",
					3: "#c297ff",
					4: "#a475f9",
					5: "#8250df",
					6: "#6639ba",
					7: "#512a97",
					8: "#3e1f79",
					9: "#2e1461",
				},
				pink: {
					0: "#ffeff7",
					1: "#ffd3eb",
					2: "#ffadda",
					3: "#ff80c8",
					4: "#e85aad",
					5: "#bf3989",
					6: "#99286e",
					7: "#772057",
					8: "#611347",
					9: "#4d0336",
				},
				coral: {
					0: "#fff0eb",
					1: "#ffd6cc",
					2: "#ffb4a1",
					3: "#fd8c73",
					4: "#ec6547",
					5: "#c4432b",
					6: "#9e2f1c",
					7: "#801f0f",
					8: "#691105",
					9: "#510901",
				},
				black: "#1f2328",
				white: "#ffffff",
			},
			fgColor: {
				default: "#1f2328",
				muted: "#636c76",
				onEmphasis: "#ffffff",
				disabled: "#8c959f",
				link: "#0969da",
				neutral: "#6e7781",
				accent: "#0969da",
				success: "#1a7f37",
				attention: "#9a6700",
				severe: "#bc4c00",
				danger: "#d1242f",
				open: "#1a7f37",
				closed: "#d1242f",
				done: "#8250df",
				sponsors: "#bf3989",
			},
			bgColor: {
				default: "#ffffff",
				muted: "#f6f8fa",
				inset: "#f6f8fa",
				emphasis: "#24292f",
				inverse: "#24292f",
				disabled: "#f6f8fa",
				transparent: "#ffffff00",
				"neutral-muted": "#afb8c133",
				"neutral-emphasis": "#6e7781",
				"accent-muted": "#ddf4ff",
				"accent-emphasis": "#0969da",
				"success-muted": "#dafbe1",
				"success-emphasis": "#1f883d",
				"attention-muted": "#fff8c5",
				"attention-emphasis": "#9a6700",
				"severe-muted": "#fff1e5",
				"severe-emphasis": "#bc4c00",
				"danger-muted": "#ffebe9",
				"danger-emphasis": "#cf222e",
				"open-muted": "#dafbe1",
				"open-emphasis": "#1f883d",
				"closed-muted": "#ffebe9",
				"closed-emphasis": "#cf222e",
				"done-muted": "#fbefff",
				"done-emphasis": "#8250df",
				"sponsors-muted": "#ffeff7",
				"sponsors-emphasis": "#bf3989",
			},
			borderColor: {
				default: "#d0d7de",
				muted: "#d0d7deb3",
				emphasis: "#6e7781",
				disabled: "#f6f8fa",
				transparent: "#ffffff00",
				"neutral-muted": "#afb8c133",
				"neutral-emphasis": "#6e7781",
				"accent-muted": "#54aeff66",
				"accent-emphasis": "#0969da",
				"success-muted": "#4ac26b66",
				"success-emphasis": "#1a7f37",
				"attention-muted": "#d4a72c66",
				"attention-emphasis": "#bf8700",
				"severe-muted": "#fb8f4466",
				"severe-emphasis": "#bc4c00",
				"danger-muted": "#ff818266",
				"danger-emphasis": "#cf222e",
				"open-muted": "#4ac26b66",
				"open-emphasis": "#1a7f37",
				"closed-muted": "#ff818266",
				"closed-emphasis": "#cf222e",
				"done-muted": "#c297ff66",
				"done-emphasis": "#8250df",
				"sponsors-muted": "#ff80c866",
				"sponsors-emphasis": "#bf3989",
			},
			avatar: {
				bgColor: "#ffffff",
				borderColor: "#d0d7de",
			},
			control: {
				bgColor: {
					rest: "#f6f8fa",
					hover: "#eef1f4",
					active: "#e7ebef",
					disabled: "#f6f8fa",
					selected: "#f6f8fa",
				},
				fgColor: {
					rest: "#24292f",
					placeholder: "#6e7781",
					disabled: "#8c959f",
				},
				borderColor: {
					rest: "#d0d7de",
					emphasis: "#868f99",
					disabled: "#f6f8fa",
					selected: "#f6f8fa",
					success: "#1a7f37",
					danger: "#cf222e",
					warning: "#bf8700",
				},
				iconColor: {
					rest: "#636c76",
				},
				transparent: {
					bgColor: {
						rest: "#ffffff00",
						hover: "#d0d7de33",
						active: "#d0d7de66",
						disabled: "#ffffff00",
						selected: "#d0d7de33",
					},
					borderColor: {
						rest: "#ffffff00",
						hover: "#ffffff00",
						active: "#ffffff00",
					},
				},
				danger: {
					fgColor: {
						rest: "#d1242f",
						hover: "#d1242f",
					},
					bgColor: {
						hover: "#ffebe9",
						active: "#ffebe966",
					},
				},
				checked: {
					bgColor: {
						rest: "#0969da",
						hover: "#0860ca",
						active: "#0757ba",
						disabled: "#8c959f",
					},
					fgColor: {
						rest: "#ffffff",
						disabled: "#ffffff",
					},
					borderColor: {
						rest: "#0969da",
						hover: "#0860ca",
						active: "#0757ba",
						disabled: "#8c959f",
					},
				},
			},
			controlKnob: {
				bgColor: {
					rest: "#ffffff",
					disabled: "#f6f8fa",
					checked: "#ffffff",
				},
				borderColor: {
					rest: "#868f99",
					disabled: "#f6f8fa",
					checked: "#0969da",
				},
			},
			controlTrack: {
				bgColor: {
					rest: "#eaeef2",
					hover: "#dee3e8",
					active: "#d2d8de",
					disabled: "#8c959f",
				},
				fgColor: {
					rest: "#636c76",
					disabled: "#ffffff",
				},
				borderColor: {
					rest: "#ffffff00",
					disabled: "#8c959f",
				},
			},
			counter: {
				borderColor: "#ffffff00",
			},
			button: {
				default: {
					fgColor: {
						rest: "#24292f",
					},
					bgColor: {
						rest: "#f6f8fa",
						hover: "#eef1f4",
						active: "#e7ebef",
						selected: "#e7ebef",
						disabled: "#f6f8fa",
					},
					borderColor: {
						rest: "#d0d7de",
						hover: "#d0d7de",
						active: "#d0d7de",
						disabled: "#f6f8fa",
					},
				},
				primary: {
					fgColor: {
						rest: "#ffffff",
						disabled: "#ffffffcc",
					},
					iconColor: {
						rest: "#ffffffcc",
					},
					bgColor: {
						rest: "#1f883d",
						hover: "#1c8139",
						active: "#197935",
						disabled: "#95d8a6",
					},
					borderColor: {
						rest: "#1f232826",
						hover: "#1f232826",
						active: "#1f232826",
						disabled: "#95d8a6",
					},
				},
				invisible: {
					fgColor: {
						rest: "#0969da",
						hover: "#0969da",
						disabled: "#8c959f",
					},
					iconColor: {
						rest: "#636c76",
						hover: "#636c76",
						disabled: "#8c959f",
					},
					bgColor: {
						rest: "#ffffff00",
						hover: "#d0d7de33",
						active: "#d0d7de66",
						disabled: "#ffffff00",
					},
					borderColor: {
						rest: "#ffffff00",
						hover: "#ffffff00",
						disabled: "#f6f8fa",
					},
				},
				outline: {
					fgColor: {
						rest: "#0969da",
						hover: "#ffffff",
						active: "#ffffff",
						disabled: "#0969da80",
					},
					bgColor: {
						rest: "#f6f8fa",
						hover: "#0969da",
						active: "#0757ba",
						disabled: "#f6f8fa",
					},
					borderColor: {
						hover: "#1f232826",
						active: "#1f232826",
					},
				},
				danger: {
					fgColor: {
						rest: "#d1242f",
						hover: "#ffffff",
						active: "#ffffff",
						disabled: "#d1242f80",
					},
					iconColor: {
						rest: "#d1242f",
						hover: "#ffffff",
					},
					bgColor: {
						rest: "#f6f8fa",
						hover: "#a40e26",
						active: "#8b0820",
						disabled: "#f6f8fa",
					},
					borderColor: {
						rest: "#d0d7de",
						hover: "#1f232826",
						active: "#1f232826",
					},
				},
				inactive: {
					fgColor: {
						rest: "#57606a",
					},
					bgColor: {
						rest: "#eaeef2",
					},
				},
			},
			buttonCounter: {
				default: {
					bgColor: {
						rest: "#afb8c133",
					},
				},
				invisible: {
					bgColor: {
						rest: "#afb8c133",
					},
				},
				primary: {
					bgColor: {
						rest: "#002d1133",
					},
				},
				outline: {
					bgColor: {
						rest: "#0969da1a",
						hover: "#ffffff33",
						disabled: "#0969da0d",
					},
					fgColor: {
						rest: "#0550ae",
						hover: "#ffffff",
						disabled: "#0969da80",
					},
				},
				danger: {
					bgColor: {
						hover: "#ffffff33",
						disabled: "#cf222e0d",
						rest: "#cf222e1a",
					},
					fgColor: {
						rest: "#c21c2c",
						hover: "#ffffff",
						disabled: "#d1242f80",
					},
				},
			},
			focus: {
				outlineColor: "#0969da",
			},
			header: {
				fgColor: {
					default: "#ffffffb3",
					logo: "#ffffff",
				},
				bgColor: "#24292f",
				borderColor: {
					divider: "#57606a",
				},
			},
			menu: {
				bgColor: {
					active: "#ffffff00",
				},
			},
			overlay: {
				bgColor: "#ffffff",
				backdrop: {
					bgColor: "#8c959f33",
				},
			},
		},
		boxShadow: {
			shadow: {
				inset: "inset 0px 1px 0px 0px #1f23280a",
				"resting-xsmall": "0px 1px 0px 0px #1f23281a",
				"resting-small":
					"0px 1px 0px 0px #1f23280f, 0px 1px 3px 0px #1f232814",
				"resting-medium": "0px 3px 6px 0px #424a531f",
				"floating-small":
					"0px 6px 12px -3px #424a530a, 0px 6px 18px 0px #424a531f",
				"floating-medium":
					"0px 8px 16px -4px #424a5314, 0px 4px 32px -4px #424a5314, 0px 24px 48px -12px #424a5314, 0px 48px 96px -24px #424a5314",
				"floating-large": "0px 40px 80px 0px #424a533d",
				"floating-xlarge": "0px 56px 112px 0px #424a5352",
			},
			avatar: { shadow: "0px 0px 0px 2px #ffffffcc" },
			button: {
				default: {
					shadow: {
						resting: "0px 1px 0px 0px #1f23280a",
					},
				},
				primary: {
					shadow: {
						selected: "inset 0px 1px 0px 0px #002d114d",
					},
				},
				outline: {
					shadow: {
						selected: "inset 0px 1px 0px 0px #00215533",
					},
				},
				danger: {
					shadow: {
						selected: "inset 0px 1px 0px 0px #4c001433",
					},
				},
			},
		},
		plugins: [],
	},
};
