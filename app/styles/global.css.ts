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
    article_bg: null,
    border: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    font: colors.gray_800,
    background: colors.white,
    article_bg: colors.white,
    border: colors.gray_200,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    font: colors.white,
    background: colors.navy_bg,
    article_bg: colors.gray_800,
    border: colors.blue_200,
  },
});

export const vars = { themeColor };

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body, *", {
  width: "100%",

  boxSizing: "border-box",

  color: `${vars.themeColor.color.font}`,
  backgroundColor: `${vars.themeColor.color.background}`,

  fontFamily: Pretendard,
});
