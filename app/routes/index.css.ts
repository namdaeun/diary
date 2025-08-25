import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  padding: '10rem 6rem',
  height: 'calc(100vh - 6.65rem)',
  gap: '5rem',
  scrollSnapAlign: 'start',
  maxWidth: '120rem',
  margin: '5rem auto 0',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 4rem',
      gap: '3.5rem',
      height: 'auto',
      minHeight: 'calc(100vh - 5rem)',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 2rem',
      gap: '2.5rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  textAlign: 'center',
  marginBottom: '2rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
      marginBottom: '1.5rem',
    },
  },
});

export const title = style({
  fontSize: '5.6rem',
  fontWeight: '700',
  lineHeight: '1.2',
  letterSpacing: '-0.02em',
  marginBottom: '0.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '4.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '3.6rem',
    },
  },
});

export const subTitle = style({
  fontSize: '3.2rem',
  fontWeight: '600',
  lineHeight: '1.4',
  letterSpacing: '-0.01em',
  wordBreak: 'keep-all',
  color: vars.themeColor.color.subTitle,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '2.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '2.2rem',
    },
  },
});

export const locationWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  justifyContent: 'flex-start',
  alignItems: 'center',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      justifyContent: 'center',
    },
  },
});

export const icon = style({
  fontSize: '2.4rem',
  flexShrink: 0,
  width: '2.4rem',

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '2rem',
      width: '2rem',
    },
  },
});

export const location = style({
  fontSize: '1.6rem',
  fontWeight: '400',
  color: vars.themeColor.color.subTitle,

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.4rem',
    },
  },
});

export const contactWrapper = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
  justifyContent: 'center',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.8rem',
  height: '4.8rem',
  padding: '1.2rem',
  border: 'none',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  backgroundColor: vars.themeColor.color.article_bg,
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',

  ':hover': {
    backgroundColor: vars.themeColor.color.border,
    transform: 'translateY(-0.2rem)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      width: '4.4rem',
      height: '4.4rem',
      borderRadius: '1rem',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      backgroundColor: colors.dark_card,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    },
    [`${darkTheme} &:hover`]: {
      backgroundColor: colors.dark_border,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
  },
});

export const buttonIcon = style({
  fontSize: '2.4rem',
  width: '2.4rem',
  height: '2.4rem',
  transition: 'color 0.2s ease',
  color: vars.themeColor.color.subTitle,

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '2.2rem',
      width: '2.2rem',
      height: '2.2rem',
    },
  },

  selectors: {
    [`${button}:hover &`]: {
      color: colors.primary,
    },
    [`${darkTheme} ${button}:hover &`]: {
      color: colors.primary_dark_hover,
    },
  },
});
