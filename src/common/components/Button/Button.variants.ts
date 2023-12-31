import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  `relative px-4 py-2 text-md font-semibold transition-opacity`,
  {
    variants: {
      styleType: {
        primary:
          'rounded-lg bg-primary text-white hover:opacity-60 focus:outline-none',
        secondary:
          'rounded-md bg-white text-primary hover:opacity-60 focus:outline-none',
        outline:
          'rounded-md border border-primary text-primary hover:opacity-60 focus:outline-none',
        ghost: 'rounded-md text-primary hover:opacity-60 focus:outline-none',
      },
    },
    defaultVariants: {
      styleType: 'primary',
    },
  },
);
