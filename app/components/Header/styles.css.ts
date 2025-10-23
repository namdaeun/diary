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

export const menuSectionStyle = style({
  display: 'flex',
  maxWidth: '5rem',
  height: '1.7rem',
  margin: '0 3rem',
  gap: '1.5rem',
});

export const menuStyle = style({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  listStyleType: 'none',
  cursor: 'pointer',
});

export const linkStyle = style({
  position: 'relative',
  alignItems: 'center',
  width: 'fit-content',
  padding: '1rem',
  textDecoration: 'none',
  fontWeight: 300,
  fontSize: '1.5rem',

  selectors: {
    '&::after': {
      display: 'block',
      position: 'absolute',
      content: '',
      left: '1rem',
      right: '1rem',
      width: '0',
      borderBottom: `1.5px solid ${vars.themeColor.color.font}`,
      transition: 'width 250ms ease-out',
    },

    '&:hover::after': {
      width: 'calc(100% - 2rem)',
    },
  },
});
