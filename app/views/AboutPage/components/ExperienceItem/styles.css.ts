import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  gap: '2.4rem',
  padding: '3.2rem',
  borderRadius: '1.2rem',
  backgroundColor: colors.gray_800,
  boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',
});

export const logo = style({
  minWidth: '20.6rem',
  maxWidth: '20.6rem',
  height: 'auto',
});

export const contentLayout = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.6rem',
});

export const position = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,
});

export const descriptionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  listStyle: 'inside',
  lineHeight: '2.4rem',
});

export const date = style({
  maxWidth: '15rem',
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  textAlign: 'right',
});
