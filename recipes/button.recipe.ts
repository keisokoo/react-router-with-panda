import { defineRecipe } from "@pandacss/dev";
export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      funky: {
        bg: "red.200",
        color: "figma.Gray300",
        fontWeight: "bold",
      },
      edgy: { border: "1px solid {colors.red.500}" },
      primary: { bg: "figma.Gray300", color: "figma.Blue200" },
    },
    size: {
      sm: { padding: "4", textStyle: "body-14-500" },
      lg: { padding: "8", textStyle: "title-40-400" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    visual: "funky",
    size: "sm",
    shape: "circle",
  },
});
