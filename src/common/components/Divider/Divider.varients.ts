import { cva } from 'class-variance-authority';

export const dividerVariants = cva('', {
  variants: {
    type: {
      horizontal: 'block h-px w-full border-none bg-gray-400',
      vertical:
        'relative -top-px inline-block h-[13px] w-px bg-gray-400 align-middle',
    },
  },
  defaultVariants: { type: 'horizontal' },
});
