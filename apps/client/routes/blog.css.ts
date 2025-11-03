import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem 10rem',
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1.6rem',
});

export const articleListContainer = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const articleList = style({
  display: 'flex',
  width: '100%',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: '2rem',
});

export const articleItem = style({
  width: 'fit-content',
});
