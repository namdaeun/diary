import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4.8rem',
  padding: '9.6rem 8rem',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  justifyContent: 'center',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '6rem 4rem',
      gap: '3.2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '4rem 2rem',
      gap: '2.4rem',
    },
  },
});

export const reviewList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      flexDirection: 'column',
      gap: '2rem',
      width: '100%',
      alignItems: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '1.6rem',
    },
  },
});

export const descriptionLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.8rem',
    },
  },
});

export const description = style({
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2.4rem',
  wordBreak: 'keep-all',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.4rem',
      lineHeight: '2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
    },
  },
});
