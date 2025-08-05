import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  width: '37rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',
  padding: '4.8rem',
  borderRadius: '1.2rem',
  backgroundColor: colors.blue_700,
  boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      maxWidth: '30rem',
      padding: '3.2rem',
      gap: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      maxWidth: '28rem',
      padding: '2.4rem',
      gap: '1.2rem',
    },
  },
});

export const icon = style({
  width: '6.4rem',
  fontSize: '6.4rem',
  color: colors.gray_600,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '5.2rem',
      fontSize: '5.2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      width: '4.8rem',
      fontSize: '4.8rem',
    },
  },
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2.4rem',
  wordBreak: 'keep-all',
  textAlign: 'center',

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

export const infoLayout = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  marginBottom: '4.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '0.8rem',
      marginBottom: '3.2rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.6rem',
      marginBottom: '2.4rem',
    },
  },
});

export const name = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,
  lineHeight: '2.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
    },
  },
});

export const info = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2rem',

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
    },
  },
});
