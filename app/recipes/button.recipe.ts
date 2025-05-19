import { defineSlotRecipe } from "@pandacss/dev";

export const buttonRecipe = defineSlotRecipe({
  className: "button",
  description: "The styles for the Button component",
  slots: ["root", "control", "label"],
  base: {
    root: { display: "flex", alignItems: "center", gap: "2" },
    control: { borderWidth: "1px", borderRadius: "sm" },
    label: { marginStart: "2" },
  },
  variants: {
    size: {
      sm: {
        control: { width: "8", height: "8" },
        label: { fontSize: "sm" },
      },
      md: {
        control: { width: "10", height: "10" },
        label: { fontSize: "md" },
      },
      lg: {
        control: { width: "12", height: "12" },
        label: { fontSize: "lg" },
      },
    },
    color: {
      red: {
        control: { bg: "red.200" },
        label: { color: "red.500" },
      },
      blue: {
        control: { bg: "blue" },
        label: { color: "blue" },
      },
      green: {
        control: { bg: "green.200" },
        label: { color: "green.500" },
      },
    },
  },
  defaultVariants: {
    size: "sm",
    color: "red",
  },
});
