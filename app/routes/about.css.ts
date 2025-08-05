import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { vars } from '~/styles/global.css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  padding: '9.6rem 8rem',
  height: 'calc(100vh - 5rem)',
  gap: '4.8rem',
  scrollSnapAlign: 'start',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '4rem 2rem',
      gap: '3.2rem',
      height: 'auto',
      minHeight: 'calc(100vh - 5rem)',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '3rem 1.6rem',
      gap: '2.4rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '0.4rem',
    },
  },
});

export const title = style({
  fontSize: '6rem',
  fontWeight: '700',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '3.2rem',
    },
  },
});

export const subTitle = style({
  fontSize: '4rem',
  fontWeight: 'bold',
  lineHeight: '1.5',
  wordBreak: 'keep-all',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '2.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '2.4rem',
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
  gap: '0.4rem',
  alignItems: 'center',
});

export const button = style({
  width: 'fit-content',
  padding: '0.6rem',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: vars.themeColor.color.background,
});

export const buttonIcon = style({
  fontSize: '3.2rem',
  width: '2.4rem',
  transition: 'color 0.3s ease',

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '2.8rem',
      width: '2rem',
    },
  },

  selectors: {
    [`${button}:hover &`]: {
      color: colors.blue_500,
    },
  },
});
