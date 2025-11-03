import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/global.css';

export const articleStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '44.5rem',
  height: '44.2rem',
  padding: '2rem',
  justifyContent: 'space-between',
  gap: '2.4rem',
  border: `1px solid ${vars.themeColor.color.neutral_4}`,
  borderRadius: '2rem',
  backgroundColor: `${vars.themeColor.color.neutral_5}`,
  cursor: 'pointer',

  ':hover': {
    borderColor: `${vars.themeColor.color.neutral_4}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
});

export const imgStyle = style({
  width: '25rem',
  height: '16.7rem',
  objectFit: 'cover',
});

export const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const titleStyle = style({
  fontSize: '2.4rem',
  fontWeight: 500,
  lineHeight: '120%',
  wordBreak: 'keep-all',
});

export const dateStyle = style({
  color: `${vars.themeColor.color.neutral_2}`,
  fontSize: '2rem',
  fontWeight: 400,
  lineHeight: '140%',
});
