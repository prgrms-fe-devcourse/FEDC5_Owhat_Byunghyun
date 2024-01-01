import { cva } from 'class-variance-authority';

export const avatarVariants = cva(
  `
relative inline-block overflow-hidden border border-solid border-gray-300 bg-gray-200
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
