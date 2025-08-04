import { style } from '@vanilla-extract/css';
import { colors } from '~/styles/colors';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',
  padding: '9.6rem 20.2rem',
  backgroundColor: colors.blue_400,
});

export const titleWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',
});

export const description = style({
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 400,
  color: colors.gray_600,
});

export const experienceList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.8rem',
});
