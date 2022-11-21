import { input, external, onwarn } from "./build.constant.mjs";

export default {
	input,
	external,
	onwarn,
	output: {
		file: "dist/index.mjs",
		format: "esm",
		exports: "named"
	}
};
