import {
  createTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { colors } from "./colors";
import { Pretendard } from "./fonts/fonts.css";

const themeColor = createThemeContract({
  color: {
    font: null,
    background: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    font: colors.gray_800,
    background: colors.white,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    font: colors.white,
    background: colors.navy_bg,
  },
});

export const vars = { themeColor };

globalStyle("body, *", {
  width: "100%",

  boxSizing: "border-box",

  color: `${vars.themeColor.color.font}`,
  backgroundColor: `${vars.themeColor.color.background}`,

  fontFamily: Pretendard,
});
