import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  width: '37rem',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.4rem',
  padding: '4.8rem',
  borderRadius: '1.2rem',
  backgroundColor: colors.blue_700,
  boxShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',
});

export const icon = style({
  width: '6.4rem',
  fontSize: '6.4rem',
  color: colors.gray_600,
});

export const description = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2.4rem',
  wordBreak: 'keep-all',
});

export const infoLayout = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '1rem',
  marginBottom: '4.8rem',
});

export const name = style({
  fontSize: '2rem',
  fontWeight: 600,
  color: colors.white,
  lineHeight: '2.8rem',
});

export const info = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  color: colors.gray_600,
  lineHeight: '2rem',
});
