import { cva } from 'class-variance-authority';

export const LoadingVariants = cva(
  `animate-spin rounded-full border-gray-300 border-t-primary`,
  {
    variants: {
      size: {
        default: 'w-5 h-5 border-4',
        sm: 'w-5 h-5 border-4',
        md: 'w-10 h-10 border-8',
        lg: 'w-20 h-20 border-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);
