import { cva } from 'class-variance-authority';

export const buttonVarients = cva(
  'group relative p-small text-base font-semibold transition-colors',
  {
    variants: {
      styleType: {
        primary:
          'rounded-small bg-primary hover:bg-[#cc6600] focus:outline-none',
        secondary:
          'rounded-small bg-white hover:bg-primary hover:fill-white focus:outline-none',
        outline:
          'rounded-small border border-primary hover:bg-primary focus:outline-none',
        ghost: 'rounded-small hover:fill-gray-600 focus:outline-none',
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
export const fontColorVarients = cva('', {
  variants: {
    styleType: {
      primary: 'fill-white text-white',
      secondary: 'text-primary group-hover:fill-white  group-hover:text-white ',
      outline: 'text-primary group-hover:fill-white  group-hover:text-white ',
      ghost:
        'text-primary group-hover:fill-gray-600  group-hover:text-primary-darker ',
    },
    disabled: {
      true: 'pointer-events-none border-gray-300 bg-gray-400 fill-white text-white',
      false: '',
    },
  },
  defaultVariants: {
    styleType: 'primary',
  },
});
