import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';
import { vars } from '~/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  padding: '9.6rem 11rem',
  height: 'calc(100vh - 5rem)',
  gap: '4.8rem',
});

// export const cursor = style({
//   position: 'absolute',
//   width: '12rem',
//   height: '12rem',
//   borderRadius: '50%',
//   background: `
//   radial-gradient(
//     circle,
//     rgba(59, 130, 246, 0.50) 0%,
//     rgba(59, 130, 246, 0.35) 20%,
//     rgba(59, 130, 246, 0.15) 45%,
//     rgba(59, 130, 246, 0.00) 70%
//   )
// `,
//   pointerEvents: 'none',
//   transform: 'translate(-50%, -50%)',
// });

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const title = style({
  fontSize: '6rem',
  fontWeight: '700',
});

export const subTitle = style({
  fontSize: '4rem',
  fontWeight: 'bold',
  lineHeight: '1.5',
  wordBreak: 'keep-all',
});

export const locationWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const icon = style({
  fontSize: '2.4rem',
  flexShrink: 0,
  width: '2.4rem',
});

export const location = style({
  fontSize: '1.6rem',
  fontWeight: '400',
  color: vars.themeColor.color.subTitle,
});

export const contactWrapper = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
});

export const button = style({
  width: 'fit-content',
  padding: '0.6rem',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: vars.themeColor.color.background,
});

export const buttonIcon = style({
  fontSize: '3.2rem',
  width: '2.4rem',
  transition: 'color 0.3s ease',

  selectors: {
    [`${button}:hover &`]: {
      color: colors.blue_500,
    },
  },
});
