import { cva } from 'class-variance-authority';

export const VerticalDividerVariants = cva(
  'relative -top-px inline-block h-[13px] w-[1px] border-none bg-gray-400 align-middle',
  {
    variants: {
      size: {
        xsmall: 'mx-xsmall',
        small: 'mx-small',

        large: 'mx-large',
        xlarge: 'mx-xlarge',
      },
    },
    defaultVariants: { size: 'small' },
  },
);
