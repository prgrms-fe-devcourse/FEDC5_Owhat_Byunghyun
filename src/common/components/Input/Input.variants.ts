import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  `rounded-lg border border-gray-300 px-2 py-1 text-black placeholder:text-sm focus:border-primary focus:outline-none`,
  {
    variants: {
      hasBorder: {
        true: 'border',
        false: 'border-none',
      },
      isBottomBorderOnly: {
        true: 'rounded-none border-x-0 border-t-0',
        false: '',
      },
    },
    defaultVariants: {
      hasBorder: true,
      isBottomBorderOnly: false,
    },
  },
);
