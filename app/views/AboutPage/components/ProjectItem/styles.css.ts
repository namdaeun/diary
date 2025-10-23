import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  borderRadius: '1.6rem',
  overflow: 'hidden',
  cursor: 'pointer',

  selectors: {
    [`${darkTheme} &`]: {
      backgroundColor: colors.neutral_800,
      border: `1px solid ${colors.neutral_700}`,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
    },
    [`${darkTheme} &:hover`]: {
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)',
    },
  },
});

export const imageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '2rem',
});

export const titleBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  backgroundColor: vars.themeColor.color.background,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      padding: '2.4rem',
      gap: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '1.6rem',
      gap: '1.2rem',
    },
  },
});

export const image = style({
  width: '100%',
  height: '35rem',
  objectFit: 'cover',
  borderRadius: '2rem',
  transition: 'transform 0.3s ease',

  ':hover': {
    transform: 'scale(1.02)',
  },

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      height: 'auto',
      aspectRatio: '1',
      maxWidth: '32rem',
      margin: '0 auto',
    },
    [breakpoints.MOBILE_MAX]: {
      width: '100%',
      height: 'auto',
      margin: 0,
    },
  },
});

export const title = style({
  width: 'fit-content',
  fontSize: '3.2rem',
  fontWeight: 500,
  color: vars.themeColor.color.neutral_1,
  lineHeight: '120%',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '2rem',
      textAlign: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.8rem',
    },
  },
});

export const period = style({
  color: vars.themeColor.color.neutral_2,
  fontSize: '2.4rem',
  fontWeight: 500,
  lineHeight: '120%',
});

export const description = style({
  color: vars.themeColor.color.neutral_3,
  fontSize: '2rem',
  fontWeight: 400,
  wordBreak: 'keep-all',
  lineHeight: '140%',
});

export const tagList = style({
  display: 'flex',
  gap: '1.2rem',
  flexWrap: 'wrap',
});

export const githubIcon = style({
  fontSize: '2.4rem',
  width: '2.4rem',
  color: colors.neutral_white,
  padding: '0.6rem',
  cursor: 'pointer',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '2rem',
      width: '2rem',
      alignSelf: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.8rem',
      width: '1.8rem',
    },
  },
});
