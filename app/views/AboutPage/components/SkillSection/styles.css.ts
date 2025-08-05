import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
});

export const skillList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1.6rem',
});

export const skillItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const skillItemImg = style({
  width: '4.8rem',
  height: '4.8rem',
});

export const skillItemName = style({
  fontSize: '1.6rem',
  fontWeight: 600,
});
