import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'absolute inline-flex rounded-full shadow-xl',
  {
    variants: {
      corner: {
        'top-left': 'left-0 top-0 ',
        'top-right': 'right-0 top-0 ',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      corner: 'top-right',
    },
  },
);
export const badgeSizeVariants = cva('', {
  variants: {
    size: {
      xsmall: 'h-2 w-2',
      small: 'h-3 w-3',
      medium: 'h-4 w-4',
      large: 'h-5 w-5',
      xlarge: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});
export const badgePositionVariants = cva('relative flex', {
  variants: {
    translateX: {
      1: '-translate-x-5',
      2: '-translate-x-4',
      3: '-translate-x-3',
      4: '-translate-x-2',
      5: '-translate-x-1',
      6: 'translate-x-0',
      7: 'translate-x-1',
      8: 'translate-x-2',
      9: 'translate-x-3',
      10: 'translate-x-4',
      11: 'translate-x-5',
    },
    translateY: {
      1: '-translate-y-5',
      2: '-translate-y-4',
      3: '-translate-y-3',
      4: '-translate-y-2',
      5: '-translate-y-1',
      6: 'translate-y-0',
      7: 'translate-y-1',
      8: 'translate-y-2',
      9: 'translate-y-3',
      10: 'translate-y-4',
      11: 'translate-y-5',
    },
  },
  defaultVariants: {
    translateX: 1,
    translateY: 1,
  },
});
