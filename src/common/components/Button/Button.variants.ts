import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  'relative flex justify-center border p-[0.5rem] text-base font-semibold leading-5 transition-colors',
  {
    variants: {
      styleType: {
        primary:
          'rounded-[0.35rem] border-transparent bg-primary fill-white text-white hover:bg-primary-darker disabled:pointer-events-none disabled:bg-primary-lighter',
        secondary:
          'rounded-[0.35rem] border-transparent bg-white fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white disabled:pointer-events-none disabled:fill-primary-lighter disabled:text-primary-lighter',
        outline:
          'box-border rounded-[0.35rem] border border-primary fill-primary fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white disabled:pointer-events-none disabled:border-primary-lighter disabled:fill-primary-lighter disabled:text-primary-lighter',
        ghost:
          'rounded-[0.35rem] border-transparent text-primary hover:fill-gray-600 hover:fill-gray-600 hover:text-primary-darker disabled:pointer-events-none disabled:fill-gray-500 disabled:text-primary-lighter',
      },
    },
    defaultVariants: {
      styleType: 'primary',
    },
  },
);
