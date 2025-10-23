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
        color: colors.white,
        backgroundColor: colors.primary,
        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',

        selectors: {
          [`${darkTheme} &`]: {
            backgroundColor: colors.primary_dark_bright,
            boxShadow: '0 2px 12px rgba(74, 158, 255, 0.5)',
            color: colors.dark_text_primary,
          },
        },
      },
      secondary: {
        color: colors.primary,
        backgroundColor: colors.blue_50,
        border: `1px solid ${colors.blue_200}`,

        selectors: {
          [`${darkTheme} &`]: {
            color: colors.primary_dark_bright,
            backgroundColor: colors.dark_card,
            border: `1px solid ${colors.dark_border}`,
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
        color: colors.white,
      },
      secondary: {
        color: colors.primary,

        selectors: {
          [`${darkTheme} &`]: {
            color: colors.primary_dark_bright,
          },
        },
      },
    },
  },
});
