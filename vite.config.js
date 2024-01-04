import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import path from "path";

export default defineConfig({
	server: {
		port: 3000, // Specify the port for the development server
	},
	// Configure the build settings
	build: {
		rollupOptions: {
			input: {
				main: "main.js", // Name of the entry point
			},
			output: {
				entryFileNames: `[name].js`,
				chunkFileNames: `[name].js`,
				assetFileNames: `[name].[ext]`,
			},
		},
	},
	plugins: [Inspect()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
});
