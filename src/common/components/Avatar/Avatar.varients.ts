import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  'relative inline-block overflow-hidden bg-gray-200 ring-1 ring-gray-400 ring-offset-2',
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        round: 'rounded',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      shape: 'circle',
    },
  },
);
