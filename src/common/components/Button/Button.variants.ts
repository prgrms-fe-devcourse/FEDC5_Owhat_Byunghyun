import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  'relative flex justify-center border p-small text-base font-semibold transition-colors',
  {
    variants: {
      styleType: {
        primary:
          'rounded-small  border-transparent bg-primary fill-white text-white hover:bg-primary-darker focus:outline-none',
        secondary:
          'rounded-small  border-transparent  bg-white fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white focus:outline-none',
        outline:
          'focus:outline-nonefill-primary box-border rounded-small border border-primary fill-primary text-primary hover:bg-primary hover:fill-white hover:text-white ',
        ghost:
          'rounded-small border-transparent  text-primary hover:fill-gray-600 hover:fill-gray-600 hover:text-primary-darker focus:outline-none',
      },
      disabled: {
        true: 'pointer-events-none border-gray-300 bg-gray-400 fill-white',
        false: '',
      },
    },
    defaultVariants: {
      styleType: 'primary',
      disabled: false,
    },
  },
);
