import { recipe } from '@vanilla-extract/recipes';
import { colors } from '~/styles/colors';
import { darkTheme } from '~/styles/global.css';

export const backgroundStyle = recipe({
  base: {
    display: 'flex',
    padding: '0.8rem 1.6rem',
    width: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2rem',
    transition: 'all 0.2s ease',
  },
  variants: {
    type: {
      primary: {
        color: colors.neutral_white,
        backgroundColor: colors.neutral_500,
        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',

        selectors: {
          [`${darkTheme} &`]: {
            backgroundColor: colors.neutral_600,
            boxShadow: '0 2px 12px rgba(74, 158, 255, 0.5)',
            color: colors.neutral_white,
          },
        },
      },
      secondary: {
        color: colors.neutral_500,
        backgroundColor: colors.neutral_100,
        border: `1px solid ${colors.neutral_200}`,

        selectors: {
          [`${darkTheme} &`]: {
            color: colors.neutral_600,
            backgroundColor: colors.neutral_800,
            border: `1px solid ${colors.neutral_700}`,
          },
        },
      },
    },
  },
});

export const textStyle = recipe({
  base: {
    fontSize: '1.4rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    letterSpacing: '-0.01em',
  },
  variants: {
    type: {
      primary: {
        color: colors.neutral_white,
      },
      secondary: {
        color: colors.neutral_500,

        selectors: {
          [`${darkTheme} &`]: {
            color: colors.neutral_600,
          },
        },
      },
    },
  },
});
