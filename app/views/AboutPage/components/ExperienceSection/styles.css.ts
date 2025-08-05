import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',
  padding: '9.6rem 20.2rem',
  backgroundColor: colors.blue_400,
  minHeight: '100vh',
  scrollSnapAlign: 'start',

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

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
    },
  },
});

export const description = style({
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 400,
  color: colors.gray_600,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.4rem',
    },
  },
});

export const experienceList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '3.2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '2.4rem',
    },
  },
});
