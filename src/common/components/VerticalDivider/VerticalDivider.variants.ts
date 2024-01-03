import { cva } from 'class-variance-authority';

export const verticalDividerVariants = cva(
  'block h-[1px] w-full border-none bg-gray-400',
  {
    variants: {
      size: {
        xsmall: 'my-xsmall',
        small: 'my-small',
        large: 'my-large',
        xlarge: 'my-xlarge',
      },
    },
    defaultVariants: { size: 'small' },
  },
);
