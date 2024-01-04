import { defineConfig } from 'vite';
import Inspect from "vite-plugin-inspect";
import path from "path";

export default {
	define: {
		DEVELOPMENT_BASE_URL: JSON.stringify("http://localhost:3000")
  },
	plugins: [Inspect()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
		},
	},
};

