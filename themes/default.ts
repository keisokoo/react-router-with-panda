import { textStyles } from "./textStyles";

export const defaultTheme = {
  // 타이포그래피 설정
  textStyles: textStyles,

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
};
type ThemeType = typeof defaultTheme;

// 타입에서 색상 카테고리 추출
type ColorCategory = keyof ThemeType["tokens"]["colors"];

// 색상 카테고리별 쉐이드 타입 정의
type ShadeMap = {
  [K in ColorCategory]: keyof ThemeType["tokens"]["colors"][K];
};
// 재귀적인 경로 타입 생성
type ColorTokenPath = {
  [Category in ColorCategory]: {
    [Shade in keyof ThemeType["tokens"]["colors"][Category]]: `colors.${Category}.${string &
      Shade}`;
  }[keyof ThemeType["tokens"]["colors"][Category]];
}[ColorCategory];

// ColorValue 타입 정의 - getColor 함수의 반환 타입을 위해
type ColorValue = {
  [Path in ColorTokenPath]: Path extends `colors.${infer Category}.${infer Shade}`
    ? Category extends ColorCategory
      ? Shade extends keyof ThemeType["tokens"]["colors"][Category]
        ? ThemeType["tokens"]["colors"][Category][Shade] extends {
            value: string;
          }
          ? ThemeType["tokens"]["colors"][Category][Shade]["value"]
          : never
        : never
      : never
    : never;
};
export const getColor = <P extends ColorTokenPath>(path: P): ColorValue[P] => {
  const [, category, shade] = path.split(".");
  return defaultTheme.tokens.colors[category as ColorCategory][
    shade as keyof ThemeType["tokens"]["colors"][ColorCategory]
  ]["value"] as ColorValue[P];
};
