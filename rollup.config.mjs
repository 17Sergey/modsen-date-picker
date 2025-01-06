import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

export default {
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
      file: "lib/index.es.js",
      format: "es",
      interop: "esModule",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
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
    svgr({ icon: true }),
    image(),
    alias({
      entries: [{ find: "@", replacement: "./src" }],
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
  ],
  external: ["react", "react-dom", "styled-components"]
};

