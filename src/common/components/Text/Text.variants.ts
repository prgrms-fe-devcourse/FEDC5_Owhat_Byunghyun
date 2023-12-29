import { cva } from 'class-variance-authority';

export const textVariants = cva(`text-black`, {
  variants: {
    fontSize: {
      default: 'text-md',
      xs: `text-xs`,
      sm: `text-sm`,
      md: `text-md`,
      lg: `text-lg`,
      xl: `text-xl`,
      '2xl': `text-2xl`,
      '3xl': `text-3xl`,
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
    fontSize: 'default',
    strong: 'default',
    decoration: 'default',
  },
});
