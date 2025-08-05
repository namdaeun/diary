import type { ComponentPropsWithRef } from 'react';
import { backgroundStyle, textStyle } from './styles.css';

interface TagProps extends ComponentPropsWithRef<'div'> {
  variant?: 'primary' | 'secondary';
}

const Tag = ({ variant = 'primary', children }: TagProps) => {
  return (
    <div className={backgroundStyle({ type: variant })}>
      <span className={textStyle({ type: variant })}>{children}</span>
    </div>
  );
};

export default Tag;
