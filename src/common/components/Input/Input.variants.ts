import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  `rounded border border-gray-300 px-small py-xsmall placeholder:text-base-small focus:border-primary focus:outline-none`,
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
