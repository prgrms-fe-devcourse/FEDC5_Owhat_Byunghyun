import { cva } from 'class-variance-authority';

export const imageVariants = cva(``, {
  variants: {
    imgWidth: {
      small: 'w-20',
      halfFull: 'w-1/2',
      full: 'w-full',
      screen: 'w-screen',
      auto: 'w-auto',
    },
    imgHeight: {
      small: 'h-20',
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
    imgWidth: 'small',
    imgHeight: 'small',
    mode: 'cover',
  },
});
