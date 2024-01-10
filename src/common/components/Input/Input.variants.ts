import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  `placeholder:text-base-small rounded border border-gray-300 px-small py-xsmall focus:border-primary focus:outline-none`,
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
