import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  gap: '3rem',
  padding: '3.6rem',
  alignItems: 'center',
  borderRadius: '1.6rem',
  backgroundColor: vars.themeColor.color.background,
  border: `1px solid ${vars.themeColor.color.border}`,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',

  ':hover': {
    transform: 'translateY(-0.2rem)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06)',
  },

  '@media': {
    [breakpoints.TABLET_MAX]: {
      flexDirection: 'column',
      gap: '2rem',
      padding: '2.8rem',
      alignItems: 'center',
      textAlign: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '2rem',
      gap: '1.6rem',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      backgroundColor: colors.neutral_800,
      border: `1px solid ${colors.neutral_700}`,
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15)',
    },
    [`${darkTheme} &:hover`]: {
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2)',
    },
  },
});

export const logo = style({
  minWidth: '20.6rem',
  maxWidth: '20.6rem',
  height: '100%',
  objectFit: 'contain',
  borderRadius: '1.2rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      minWidth: '12rem',
      maxWidth: '12rem',
      alignSelf: 'start',
    },
    [breakpoints.MOBILE_MAX]: {
      minWidth: '8rem',
      maxWidth: '8rem',
    },
  },
});

export const contentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
      alignItems: 'center',
      justifyContent: 'start',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.8rem',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },
});

export const position = style({
  fontSize: '2.2rem',
  fontWeight: 700,
  color: vars.themeColor.color.font,
  lineHeight: '1.3',
  letterSpacing: '-0.01em',

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

export const descriptionList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '0.4rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      textAlign: 'center',
    },
  },
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: vars.themeColor.color.description,
  listStyle: 'inside',
  lineHeight: '2.4rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      listStyle: 'none',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
    },
  },
});

export const date = style({
  maxWidth: '15rem',
  fontSize: '1.6rem',
  fontWeight: 400,
  color: vars.themeColor.color.description,
  textAlign: 'right',
  alignSelf: 'flex-end',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      maxWidth: 'none',
      textAlign: 'center',
      fontSize: '1.4rem',
      alignSelf: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
    },
  },
});
