import { cva } from 'class-variance-authority';

export const dividerVariants = cva('border-box border-gray-400', {
  variants: {
    type: {
      horizontal: 'block w-full border-b',
      vertical: 'inline h-full border-l',
    },
  },
  defaultVariants: { type: 'horizontal' },
});
