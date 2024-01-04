import { cva } from 'class-variance-authority';

export const extraInfoVariants = cva(
  `flex [&>*]:font-thin [&>*]:text-gray-400`,
  {
    variants: {
      gap: {
        0: `gap-0`,
        1: `gap-xsmall`,
        2: `gap-small`,
        3: `gap`,
        4: `gap-large`,
        5: `gap-xlarge`,
      },
    },
    defaultVariants: {
      gap: 1,
    },
  },
);
