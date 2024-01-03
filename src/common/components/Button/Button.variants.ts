import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  `text-md relative px-4 py-2 font-semibold transition-colors`,
  {
    variants: {
      styleType: {
        primary:
          'rounded-lg bg-primary text-white hover:bg-[#cc6600] focus:outline-none',
        secondary:
          'rounded-md bg-white text-primary hover:bg-[#cc6600] focus:outline-none',
        outline:
          'rounded-md border border-primary text-primary hover:bg-[#cc6600] focus:outline-none',
        ghost: 'hover:bg-[#cc6600]focus:outline-none rounded-md text-primary',
      },
    },
    defaultVariants: {
      styleType: 'primary',
    },
  },
);
