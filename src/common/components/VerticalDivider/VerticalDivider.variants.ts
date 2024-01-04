import { cva } from 'class-variance-authority';

export const verticalDividerVariants = cva(
  'relative -top-px inline-block h-[13px] w-px bg-gray-400 align-middle',
  {
    variants: {
      size: {
        xsmall: 'mx-xsmall',
        small: 'mx-small',
        large: 'mx-large',
        xlarge: 'mx-xlarge',
      },
    },
    defaultVariants: { size: 'small' },
  },
);
