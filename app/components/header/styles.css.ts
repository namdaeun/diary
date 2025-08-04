import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const headerStyle = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  padding: '1.5rem 10rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: vars.themeColor.color.background,
});

export const imageStyle = style({
  width: '13rem',
  height: '3.5rem',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const menuSectionStyle = style({
  display: 'flex',
  maxWidth: '15rem',
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
      width: 'calc(100% - 2rem)', // 전체 너비에서 좌우 padding 제외
    },
  },
});
