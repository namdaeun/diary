import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6rem',
  padding: '12rem 6rem 18rem 6rem',
  minHeight: '100vh',
  scrollSnapAlign: 'start',
  justifyContent: 'center',
  maxWidth: '140rem',
  margin: '0 auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '8rem 4rem 12rem 4rem',
      gap: '4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '6rem 2rem 8rem 2rem',
      gap: '3rem',
    },
  },
});

export const reviewList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
  gap: '2rem',
  width: '100%',
  alignItems: 'stretch',
  justifyContent: 'center',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
      gap: '1.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gridTemplateColumns: '1fr',
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
  fontSize: '1.8rem',
  fontWeight: 400,
  color: vars.themeColor.color.description,
  lineHeight: '1.6',
  letterSpacing: '-0.01em',
  wordBreak: 'keep-all',
  marginTop: '0.8rem',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.4rem',
    },
  },
});
