import { cva } from 'class-variance-authority';

export const LoadingVariants = cva(
  `animate-spin rounded-full border-gray-300 border-t-primary`,
  {
    variants: {
      size: {
        default: 'h-5 w-5 border-4',
        sm: 'h-5 w-5 border-4',
        md: 'h-10 w-10 border-8',
        lg: 'h-20 w-20 border-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);
