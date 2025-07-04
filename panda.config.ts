import { defineConfig } from "@pandacss/dev";
import { defaultThemes } from "themes/configs";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./themes/recipes/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
  theme: defaultThemes,
});
