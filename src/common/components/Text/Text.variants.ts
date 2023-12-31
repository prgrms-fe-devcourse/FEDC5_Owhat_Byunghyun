import { cva } from 'class-variance-authority';

export const textVariants = cva(`text-black`, {
  variants: {
    size: {
      xs: `text-xs`,
      sm: `text-sm`,
      md: `text-md`,
      lg: `text-lg`,
      xl: `text-xl`,
      '2xl': `text-2xl`,
      '3xl': `text-3xl`,
    },
    strong: {
      true: 'font-bold',
      false: 'font-normal',
    },
    decoration: {
      none: 'no-underline',
      underline: 'underline',
      overline: 'overline',
      lineThrough: 'line-through',
    },
    isLogo: {
      true: 'font-logo',
      false: 'font-sans',
    },
  },
  defaultVariants: {
    size: 'md',
    strong: false,
    decoration: 'none',
    isLogo: false,
  },
});
