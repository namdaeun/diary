import type { ReactElement, SVGProps } from 'react';

declare module '*.svg' {
  const content: ReactElement<SVGProps<SVGAElement>>;

  export default content;
}
