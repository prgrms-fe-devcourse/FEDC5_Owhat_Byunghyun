import { cva } from 'class-variance-authority';

export const InputVariants = cva(
  `rounded-[8px] px-2 py-1 text-black placeholder:text-sm border border-gray-300 focus:outline-none focus:border-primary`,
  {
    variants: {
      isBorderNone: {
        default: false,
        true: 'border-none',
        false: 'border',
      },
      isBottomBorderOnly: {
        default: false,
        true: 'rounded-none border-x-0 border-t-0',
        false: '',
      },
    },
    defaultVariants: {
      isBorderNone: 'default',
      isBottomBorderOnly: 'default',
    },
  },
);
