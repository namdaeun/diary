import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';
import { vars } from '~/styles/global.css';

export const footer = style({
  width: '100%',
  backgroundColor: vars.themeColor.color.background,
  marginTop: 'auto',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4rem 10rem 2rem',

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '3rem 2rem 2rem',
    },
  },
});

export const leftSection = style({
  marginBottom: '3rem',
});

export const logoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const logo = style({
  width: '10rem',
  height: '2.8rem',
  objectFit: 'cover',
  cursor: 'pointer',
});

export const description = style({
  fontSize: '1.4rem',
  color: vars.themeColor.color.subTitle,
  lineHeight: 1.6,
  maxWidth: '30rem',
});

export const linkSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const socialSection = style({
  display: 'flex',
  gap: '1.5rem',
});

export const linkList = style({
  display: 'flex',
  gap: '1rem',
  listStyleType: 'none',
  justifyContent: 'end',
  padding: 0,
  margin: 0,
});

export const linkItem = style({
  width: 'fit-content',
  fontSize: '1.4rem',
});

export const link = style({
  color: vars.themeColor.color.subTitle,
  textDecoration: 'none',
  transition: 'color 0.2s ease',

  ':hover': {
    color: vars.themeColor.color.font,
  },
});

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  color: vars.themeColor.color.subTitle,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
});

export const socialLinkIcon = style({
  fontSize: '2.5rem',
  transition: 'color 0.2s ease',

  selectors: {
    [`${socialLink}:hover &`]: {
      color: colors.blue_500,
    },
  },
});

export const bottomSection = style({
  padding: '2rem 10rem',
  textAlign: 'right',
});

export const copyright = style({
  fontSize: '1.2rem',
  color: vars.themeColor.color.subTitle,
  margin: 0,
});
