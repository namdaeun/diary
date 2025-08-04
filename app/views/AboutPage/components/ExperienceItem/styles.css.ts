import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  gap: '2.4rem',
  padding: '3.2rem',
  borderRadius: '1.2rem',
  backgroundColor: colors.gray_800,
  boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      flexDirection: 'column',
      gap: '1.6rem',
      padding: '2.4rem',
      alignItems: 'center',
      textAlign: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '1.6rem',
      gap: '1.2rem',
    },
  },
});

export const logo = style({
  minWidth: '20.6rem',
  maxWidth: '20.6rem',
  height: 'auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      minWidth: '12rem',
      maxWidth: '12rem',
      alignSelf: 'center',
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
  flex: 1,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '1.2rem',
      alignItems: 'center',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.8rem',
    },
  },
});

export const position = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,

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

export const descriptionList = style({
  display: 'flex',
  flexDirection: 'column',
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
  color: colors.gray_600,
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
  color: colors.gray_600,
  textAlign: 'right',

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
