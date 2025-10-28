import { style } from '@vanilla-extract/css';
import { breakpoints } from '~/styles/breakpoints';
import { colors } from '~/styles/colors';
import { darkTheme, vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '6rem 3.2rem 4.8rem 3.2rem',
  borderRadius: '1.6rem',
  backgroundColor: vars.themeColor.color.neutral_5,
  border: `1px solid ${vars.themeColor.color.neutral_4}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: `linear-gradient(90deg, ${colors.neutral_500}, ${colors.neutral_600})`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  ':hover': {
    transform: 'translateY(-0.2rem)',
    backgroundColor: vars.themeColor.color.neutral_4,
  },

  '@media': {
    [breakpoints.TABLET_MAX]: {
      padding: '2.4rem',
      gap: '1.8rem',
      ':hover': {
        transform: 'none',
        boxShadow:
          '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
      },
    },
    [breakpoints.MOBILE_MAX]: {
      padding: '2rem',
      gap: '1.6rem',
      ':hover': {
        transform: 'none',
        boxShadow:
          '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
      },
    },
  },
});

export const icon = style({
  width: '4.8rem',
  fontSize: '4.8rem',
  color: colors.neutral_500,
  transition: 'all 0.3s ease',
  alignSelf: 'flex-start',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      width: '4.4rem',
      fontSize: '4.4rem',
    },
    [breakpoints.MOBILE_MAX]: {
      width: '4rem',
      fontSize: '4rem',
    },
  },

  selectors: {
    [`${darkTheme} &`]: {
      color: colors.neutral_600,
    },
  },
});

export const description = style({
  fontSize: '1.5rem',
  fontWeight: 400,
  color: vars.themeColor.color.neutral_1,
  lineHeight: '1.6',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  flex: 1,

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.4rem',
      lineHeight: '1.5',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.3rem',
      lineHeight: '1.5',
    },
  },
});

export const infoLayout = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'left',
  gap: '0.8rem',
  marginTop: 'auto',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      gap: '0.6rem',
    },
    [breakpoints.MOBILE_MAX]: {
      gap: '0.4rem',
    },
  },
});

export const name = style({
  fontSize: '2rem',
  fontWeight: 700,
  color: vars.themeColor.color.font,
  lineHeight: '1.3',
  letterSpacing: '-0.01em',

  '@media': {
    [breakpoints.TABLET_MAX]: {
      fontSize: '1.8rem',
    },
    [breakpoints.MOBILE_MAX]: {
      fontSize: '1.6rem',
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
