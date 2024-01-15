import { cva } from 'class-variance-authority';

export const followButtonVariants = cva(``, {
  variants: {
    styleType: {
      default: 'mt-small',
      small: 'rounded-large px-small py-xsmall',
    },
  },
});
