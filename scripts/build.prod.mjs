import terser from "@rollup/plugin-terser";
import { input, external, onwarn } from "./build.constant.mjs";

export default [
	{
		input,
		external,
		onwarn,
		output: [
			{
				file: "dist/index.js",
				exports: "named",
				format: "cjs",
			},
			{
				file: "dist/index.mjs",
				format: "esm",
			},
			{
				file: "dist/index.module.js",
				format: "es"
			}
		],
		plugins: [
			terser()
		]
	}
];

