import { cva } from 'class-variance-authority';

export const textVariants = cva(`text-black text-inherit`, {
  variants: {
    size: {
      xsmall: `text-caption`,
      small: `text-base-small`,
      base: `text-base`,
      large: `text-heading-3`,
      xlarge: `text-heading-2`,
      '2xlarge': `text-heading-1`,
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
    size: 'base',
    strong: false,
    decoration: 'none',
    isLogo: false,
  },
});
