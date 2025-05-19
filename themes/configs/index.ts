"textStyles";

import { buttonRecipe } from "~/recipes/button.recipe";
import { defaultColors } from "./colors";
import { textStyles } from "./textStyles";

const defaultThemes = {
  extend: {
    slotRecipes: {
      button: buttonRecipe,
    },
    // 타이포그래피 설정
    textStyles: textStyles,

    // 색상 설정
    tokens: {
      colors: defaultColors,
    },
  },
};

export { defaultThemes };
