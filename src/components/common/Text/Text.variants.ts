import { cva } from 'class-variance-authority';

export const TextVariants = cva(``, {
  variants: {
    color: {
      default: 'text-gray900',
      primary: 'text-primary',
      red: 'text-red',
      green: 'text-green',
      lightGreen: 'text-light-green',
      black: 'text-gray900',
      white: 'text-gray0',
      lightGray: 'text-gray300',
      gray: 'text-gray700',
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
