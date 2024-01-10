import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  'relative flex justify-center border p-small text-base font-semibold leading-5 transition-colors',
  {
    variants: {
      styleType: {
        primary:
          'rounded-small border-transparent bg-primary fill-white text-white hover:bg-primary-darker disabled:pointer-events-none disabled:bg-primary-lighter',
        secondary:
          'rounded-small border-transparent bg-white fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white disabled:pointer-events-none disabled:fill-primary-lighter disabled:text-primary-lighter',
        outline:
          'box-border rounded-small border border-primary fill-primary fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white disabled:pointer-events-none disabled:border-primary-lighter disabled:fill-primary-lighter disabled:text-primary-lighter',
        ghost:
          'rounded-small border-transparent text-primary hover:fill-gray-600 hover:fill-gray-600 hover:text-primary-darker disabled:pointer-events-none disabled:fill-gray-500 disabled:text-primary-lighter',
      },
    },
    defaultVariants: {
      styleType: 'primary',
    },
  },
);
