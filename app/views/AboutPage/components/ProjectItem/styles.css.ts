import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  borderRadius: '1.6rem',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
  border: `1px solid ${vars.themeColor.color.border}`,

  ':hover': {
    transform: 'translateY(-0.4rem)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
  },

  '@media': {
    [breakpoints.TABLET_MAX]: {
      flexDirection: 'column',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      backgroundColor: colors.dark_card,
      border: `1px solid ${colors.dark_border}`,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
    },
    [`${darkTheme} &:hover`]: {
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)',
    },
  },
});

export const imageContainer = style({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '2.4rem',
  backgroundColor: vars.themeColor.color.article_bg,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      padding: '2.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '1.6rem',
    },
  },
});

export const leftSide = style({
  borderRadius: '1.6rem 0 0 1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      borderRadius: '1.6rem 1.6rem 0 0',
    },
  },
});

export const rightSide = style({
  borderRadius: '0 1.6rem 1.6rem 0',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      borderRadius: '0 0 1.6rem 1.6rem',
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  padding: '4.8rem',
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
  height: '100%',
  objectFit: 'cover',
  borderRadius: '1.2rem',
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
  fontSize: '2.2rem',
  fontWeight: 700,
  color: vars.themeColor.color.font,
  lineHeight: '1.3',
  letterSpacing: '-0.01em',
  marginBottom: '0.4rem',

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

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: vars.themeColor.color.description,
  wordBreak: 'keep-all',
  lineHeight: '1.5',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.4rem',
      textAlign: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
    },
  },
});

export const tagList = style({
  display: 'flex',
  gap: '0.8rem',
  flexWrap: 'wrap',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      justifyContent: 'center',
      gap: '0.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.4rem',
    },
  },
});

export const githubIcon = style({
  fontSize: '2.4rem',
  width: '2.4rem',
  color: colors.white,
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
