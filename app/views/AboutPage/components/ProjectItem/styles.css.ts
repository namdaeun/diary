import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',
  borderRadius: '1.2rem',
  overflow: 'hidden',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      flexDirection: 'column',
    },
  },
});

export const imageContainer = style({
  width: '50%',
  padding: '4.8rem',
  backgroundColor: colors.blue_600,

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
  borderRadius: '1.2rem 0 0 1.2rem',

  '@media': {
    'screen and (min-width: 769px)': {
      borderRadius: '1.2rem 1.2rem 0 0',
    },
  },
});

export const rightSide = style({
  borderRadius: '0 1.2rem 1.2rem 0',

  '@media': {
    'screen and (min-width: 769px)': {
      borderRadius: '0 0 1.2rem 1.2rem',
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  width: '50%',
  flexDirection: 'column',
  padding: '4.8rem',
  gap: '2.4rem',
  backgroundColor: colors.blue_700,

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
  width: '48rem',
  height: '48rem',
  objectFit: 'cover',
  borderRadius: '1.2rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      height: 'auto',
      aspectRatio: '1',
      maxWidth: '32rem',
      margin: '0 auto',
    },
    [breakpoints.MOBILE_MAX]: {
      maxWidth: '24rem',
    },
  },
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,
  backgroundColor: colors.blue_700,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.8rem',
      textAlign: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.6rem',
    },
  },
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  backgroundColor: colors.blue_700,
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
