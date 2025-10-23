import { recipe } from '@vanilla-extract/recipes';
import { colors } from '~/styles/colors';
import sunny from '../../../public/assets/icon/ic_sunny.svg';

export const backgroundStyle = recipe({
  base: {
    position: 'relative',
    width: '5.2rem',
    height: '3.2rem',
    flexShrink: '0',
    padding: '0.3rem',
    borderRadius: '10rem',
    background: colors.neutral_200,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
  },

  variants: {
    mode: {
      light: {
        background: `linear-gradient(135deg, ${colors.neutral_900} 0%, #2c2b29 100%)`,
        boxShadow:
          'inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(34, 33, 31, 0.3)',
      },
      dark: {
        background: `linear-gradient(135deg, ${colors.neutral_600} 0%, ${colors.neutral_500} 100%)`,
        boxShadow:
          'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 12px rgba(74, 158, 255, 0.4)',
      },
    },
  },
});

export const switchStyle = recipe({
  base: {
    position: 'absolute',
    width: '2.6rem',
    height: '2.6rem',
    margin: '0',
    top: '0.3rem',
    backgroundColor: colors.neutral_white,
    backgroundImage: `url(${sunny})`,
    backgroundSize: '3rem',
    backgroundPosition: 'center calc(50% + 1px)',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    border: 'none',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateX(1.9rem)',
    appearance: 'none',
    cursor: 'pointer',

    ':checked': {
      transform: 'translateX(0rem)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15)',
    },
  },
});
