import { cva } from 'class-variance-authority';

export const horizontalDividerVariants = cva(
  'block h-px w-full border-none bg-gray-400',
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
