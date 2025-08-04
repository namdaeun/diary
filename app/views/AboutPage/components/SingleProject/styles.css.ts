import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
});

export const imageContainer = style({
  padding: '4.8rem',
  backgroundColor: colors.blue_600,
});

export const leftSide = style({
  borderRadius: '1.2rem 0 0 1.2rem',
});

export const rightSide = style({
  borderRadius: '0 1.2rem 1.2rem 0',
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4.8rem',
  gap: '2.4rem',
  backgroundColor: colors.blue_700,
});

export const image = style({
  width: '48rem',
  height: '48rem',
  objectFit: 'cover',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,
  backgroundColor: colors.blue_700,
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  backgroundColor: colors.blue_700,
  wordBreak: 'keep-all',
  lineHeight: '1.5',
});

export const tagList = style({
  display: 'flex',
  gap: '0.8rem',
});

export const githubIcon = style({
  fontSize: '2.4rem',
  width: '2.4rem',
  color: colors.white,
  padding: '0.6rem',
  cursor: 'pointer',
});
