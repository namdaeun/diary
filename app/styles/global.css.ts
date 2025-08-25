import {
  createTheme,
  createThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import { colors } from './colors';
import { Pretendard } from './fonts/fonts.css';

const themeColor = createThemeContract({
  color: {
    font: null,
    subTitle: null,
    description: null,
    background: null,
    article_bg: null,
    border: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    font: colors.gray_900,
    subTitle: colors.gray_600,
    description: colors.gray_500,
    background: colors.white,
    article_bg: colors.gray_50,
    border: colors.gray_200,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    font: colors.dark_text_primary,
    subTitle: colors.dark_text_secondary,
    description: colors.dark_text_tertiary,
    background: colors.navy_bg,
    article_bg: colors.dark_surface,
    border: colors.dark_border,
  },
});

export const vars = { themeColor };

globalStyle(`.${lightTheme}, .${darkTheme}`, {
  backgroundColor: vars.themeColor.color.background,
  minHeight: '100vh',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('*', {
  width: '100%',
  boxSizing: 'border-box',
  color: `${vars.themeColor.color.font}`,
  fontFamily: Pretendard,
});

globalStyle('body', {
  paddingTop: '5rem',
  scrollBehavior: 'smooth',
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});
