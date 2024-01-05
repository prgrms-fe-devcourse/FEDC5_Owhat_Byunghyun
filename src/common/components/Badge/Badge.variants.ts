import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'absolute inline-flex rounded-full shadow-xl',
  {
    variants: {
      corner: {
        'top-left': ' left-[12%] top-[17%] -translate-x-1/2 -translate-y-1/2',
        'top-right': 'right-[12%] top-[17%] -translate-y-1/2 translate-x-1/2',
        'bottom-left':
          'bottom-[17%] left-[12%] -translate-x-1/2 translate-y-1/2',
        'bottom-right':
          'bottom-[17%] right-[12%] translate-x-1/2 translate-y-1/2',
      },
      badgeType: {
        online: '[&>span]:bg-online',
        offline: '[&>span]:bg-gray-700 ',
        alarm: '[&>span]:bg-primary',
      },
      size: {
        xsmall: '[&>:last-child]:h-2 [&>:last-child]:w-2',
        small: '[&>:last-child]:h-3 [&>:last-child]:w-3',
        medium: '[&>:last-child]:h-4 [&>:last-child]:w-4',
        large: '[&>:last-child]:h-5 [&>:last-child]:w-5',
        xlarge: '[&>:last-child]:h-6 [&>:last-child]:w-6',
      },
    },
    defaultVariants: {
      corner: 'top-right',
      badgeType: 'online',
      size: 'large',
    },
  },
);
