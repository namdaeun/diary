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
});

export const articleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '2rem',
});
