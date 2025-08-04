import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4.8rem',
  padding: '4.8rem 8rem',
});

export const reviewList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',
});

export const descriptionLayout = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem',
});

export const description = style({
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2.4rem',
  wordBreak: 'keep-all',
});
