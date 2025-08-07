import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '2.4rem',
  padding: '4.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '100%',
      padding: '3.2rem',
      gap: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
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
  color: vars.themeColor.color.description,
  lineHeight: '2.4rem',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',

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
  width: '30%',
  flexDirection: 'column',
  textAlign: 'right',
  gap: '1rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '0.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.6rem',
    },
  },
});

export const name = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: vars.themeColor.color.font,
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
  color: vars.themeColor.color.font,
  lineHeight: '2rem',

  '@media': {
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
    },
  },
});
