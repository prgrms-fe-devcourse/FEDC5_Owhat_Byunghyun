import { cva } from 'class-variance-authority';

export const ImageVariants = cva(``, {
  variants: {
    width: {
      small: 'w-20',
      medium: 'w-40',
      large: 'w-72',
      halfFull: 'w-1/2',
      full: 'w-full',
      screen: 'w-screen',
      auto: 'w-auto',
    },
    height: {
      small: 'h-20',
      medium: 'h-40',
      large: 'h-72',
      halfFull: 'h-1/2',
      full: 'h-full',
      screen: 'h-screen',
      auto: 'h-auto',
    },
    mode: {
      cover: 'object-cover',
      fill: 'object-fill',
      contain: 'object-contain',
    },
    display: {
      block: 'block',
      inlineBlock: 'inline-block',
    },
  },
  defaultVariants: {
    display: 'block',
    width: 'small',
    height: 'small',
    mode: 'cover',
  },
});
