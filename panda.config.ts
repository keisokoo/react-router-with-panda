import { defineConfig } from "@pandacss/dev";
import { buttonRecipe } from "recipes/button.recipe";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  theme: {
    extend: {
      recipes: {
        button: buttonRecipe,
      },
      textStyles: {
        "title-60-700": {
          value: {
            fontSize: "60px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "72px",
          },
        },
        "title-40-400": {
          value: {
            fontSize: "40px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "52px",
          },
        },
        "title-40-700": {
          value: {
            fontSize: "40px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "52px",
          },
        },
        "title-32-400": {
          value: {
            fontSize: "32px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "42px",
          },
        },
        "title-32-700": {
          value: {
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "42px",
          },
        },
        "title-24-400": {
          value: {
            fontSize: "24px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "34px",
          },
        },
        "title-24-700": {
          value: {
            fontSize: "24px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "34px",
          },
        },
        "title-18-400": {
          value: {
            fontSize: "18px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "26px",
          },
        },
        "title-18-700": {
          value: {
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "26px",
          },
        },
        "body-16-400": {
          value: {
            fontSize: "16px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "24px",
          },
        },
        "body-16-500": {
          value: {
            fontSize: "16px",
            fontWeight: "500",
            letterSpacing: "-0.4px",
            lineHeight: "24px",
          },
        },
        "body-16-700": {
          value: {
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "24px",
          },
        },
        "body-14-400": {
          value: {
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "20px",
          },
        },
        "body-14-500": {
          value: {
            fontSize: "14px",
            fontWeight: "500",
            letterSpacing: "-0.4px",
            lineHeight: "20px",
          },
        },
        "body-14-700": {
          value: {
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "20px",
          },
        },
        "body-12-400": {
          value: {
            fontSize: "12px",
            fontWeight: "400",
            letterSpacing: "-0.4px",
            lineHeight: "16px",
          },
        },
        "body-12-500": {
          value: {
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "-0.4px",
            lineHeight: "16px",
          },
        },
        "body-12-700": {
          value: {
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "-0.4px",
            lineHeight: "16px",
          },
        },
      },

      // 색상 설정
      tokens: {
        colors: {
          grayscale: {
            white: { value: "#ffffff" },
            "gray-50": { value: "#f7f8f9" },
            "gray-100": { value: "#e8ebed" },
            "gray-200": { value: "#c9cdd2" },
            "gray-300": { value: "#9ea4aa" },
            "gray-400": { value: "#72787f" },
            "gray-500": { value: "#4d5053" },
            "gray-600": { value: "#3d4043" },
            black: { value: "#1b1d1f" },
          },
          primary: {
            "50": { value: "#f8f5ff" },
            "100": { value: "#e2d6ff" },
            "200": { value: "#c8acff" },
            "500": { value: "#894fff" },
            "600": { value: "#6d35de" },
            "700": { value: "#5221b5" },
            DEFAULT: { value: "#6750a3" }, // UI/color/primary 값
          },
          red: {
            "50": { value: "#fef3f2" },
            "100": { value: "#ffeaea" },
            "200": { value: "#ffdddd" },
            "500": { value: "#e02d3c" },
            "600": { value: "#b91c1c" },
            "700": { value: "#981b25" },
          },
          green: {
            "50": { value: "#f5fbf8" },
            "100": { value: "#e9fdf0" },
            "200": { value: "#b1f3c8" },
            "500": { value: "#08875d" },
            "600": { value: "#04724d" },
            "700": { value: "#066042" },
          },
          yellow: {
            "50": { value: "#fffaeb" },
            "100": { value: "#fff5d7" },
            "200": { value: "#fedf89" },
            "500": { value: "#b25e09" },
            "600": { value: "#96530f" },
            "700": { value: "#80460d" },
          },
          blue: {
            "50": { value: "#f7faff" },
            "100": { value: "#edf3ff" },
            "200": { value: "#b8cfff" },
            "500": { value: "#2f6fed" },
          },
        },
      },
    },
  },
});
