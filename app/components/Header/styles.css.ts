import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { vars } from '~/styles/global.css';

export const headerStyle = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  padding: '2.4rem 4rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: vars.themeColor.color.background,
  transition: 'all 0.2s ease',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '1.6rem 4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '1.4rem 2rem',
    },
  },
});

export const logoStyle = style({
  fontSize: '2rem',
  fontWeight: 400,
  textDecoration: 'none',
  color: vars.themeColor.color.neutral_2,
});

export const navigationContainer = style({
  position: 'fixed',
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  left: '50%',
  transform: 'translateX(-50%)',
});
