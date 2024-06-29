import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/content.js",
  plugins: [
    postcss({}),
    svelte({
      dev: true,
    }),
    babel({
      babelHelpers: "bundled",
      compact: false,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    globals(),
    builtins(),
  ],
  output: {
    file: "dist/content.js",
    format: "iife",
  },
};

export default config;
