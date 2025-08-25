import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { darkTheme, lightTheme, vars } from '~/styles/global.css';

export const headerStyle = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  padding: '1.8rem 6rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(15px)',
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
  transition: 'all 0.3s ease',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '1.6rem 4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '1.4rem 2rem',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      backgroundColor: 'rgba(34, 33, 31, 0.95)',
      borderBottom: '1px solid rgba(58, 58, 58, 0.8)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    },
  },
});

export const logoImage = style({});

globalStyle(`${lightTheme} .dark-logo`, {
  display: 'none',
});

globalStyle(`${darkTheme} .light-logo`, {
  display: 'none',
});

export const imageStyle = style({
  width: '12rem',
  height: '3.2rem',
  objectFit: 'cover',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, opacity 0.2s ease',

  ':hover': {
    transform: 'scale(1.02)',
    opacity: 0.8,
  },
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
