import { defineConfig } from "vite";
import { glob } from "glob";
import path from "path";

// Use glob to dynamically find component files and use them as entry points
const componentsDir = path.resolve(__dirname, "src", "components");
const componentFiles = glob.sync(`${componentsDir}/**/*.component.ts`);

const components = componentFiles.reduce((entries, file) => {
	const name = path.basename(file, ".component.ts");
	entries[name] = file;
	return entries;
}, {});

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, "src", "index.ts"),
			formats: ["esm"],
		},
		rollupOptions: {
			input: components,
			output: {
				entryFileNames: "components/[name].js",
			},
		},
		minify: true,
	},
});
