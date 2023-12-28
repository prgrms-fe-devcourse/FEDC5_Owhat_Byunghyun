import { cva } from 'class-variance-authority';

export const TextVariants = cva(``, {
  variants: {
    color: {
      default: 'text-black',
      primary: 'text-primary',
      error: 'text-red',
      success: 'text-green',
      online: 'text-light-green',
      black: 'text-black',
      white: 'text-white',
      lightGray: 'text-gray-300',
      gray: 'text-gray-700',
    },
    size: {
      default: 'text-md',
      xs: `text-xs`,
      sm: `text-sm`,
      md: `text-md`,
      lg: `text-lg`,
      xl: `text-xl`,
    },
    strong: {
      default: 'font-normal',
      true: 'font-bold',
      false: 'font-normal',
    },
    decoration: {
      default: 'no-underline',
      none: 'no-underline',
      underline: 'underline',
      overline: 'overline',
      lineThrough: 'line-through',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
    strong: 'default',
    decoration: 'default',
  },
});
