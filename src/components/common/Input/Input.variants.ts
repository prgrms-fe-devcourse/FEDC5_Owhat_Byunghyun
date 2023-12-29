import { cva } from 'class-variance-authority';

export const InputVariants = cva(
  `rounded-lg border border-gray-300 px-2 py-1 text-black placeholder:text-sm focus:border-primary focus:outline-none`,
  {
    variants: {
      isBorderNone: {
        true: 'border-none',
        false: 'border',
      },
      isBottomBorderOnly: {
        true: 'rounded-none border-x-0 border-t-0',
        false: '',
      },
    },
    defaultVariants: {
      isBorderNone: false,
      isBottomBorderOnly: false,
    },
  },
);
