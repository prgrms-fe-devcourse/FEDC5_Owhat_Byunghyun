import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  `
'relative inline-block overflow-hidden border-2 border-solid bg-stone-200'
`,
  {
    variants: {
      shape: {
        circle: 'rounded-full',
        round: 'rounded',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      shape: 'circle',
    },
  },
);
