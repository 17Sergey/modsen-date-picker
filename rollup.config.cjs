import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

import path from "path";

/**
 * @type {import('rollup').RollupOptions}
 */

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "lib/index.js",
        format: "cjs",
        exports: "named",
        interop: "auto",
        sourcemap: true,
      },
      {
        file: "lib/index.esm.js",
        format: "es",
        interop: "esModule",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss(),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      resolve({
        extensions: [
          ".mjs",
          ".js",
          ".json",
          ".node",
          ".jsx",
          ".tsx",
          ".ts",
          ".svg",
        ],
      }),
      url(),
      image(),
      alias({
        entries: [
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "src/assets"),
          },
          {
            find: "components",
            replacement: path.resolve(__dirname, "src/components"),
          },
          {
            find: "@constants",
            replacement: path.resolve(__dirname, "src/constants"),
          },
          {
            find: "@decorators",
            replacement: path.resolve(__dirname, "src/decorators"),
          },
          { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
          {
            find: "@styles",
            replacement: path.resolve(__dirname, "src/styles"),
          },
          { find: "@types", replacement: path.resolve(__dirname, "src/types") },
        ],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        outDir: "lib",
      }),
      terser(),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "lib/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/],
  },
];

