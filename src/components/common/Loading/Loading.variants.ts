import { cva } from 'class-variance-authority';

export const LoadingVariants = cva(``, {
  variants: {
    loadingSize: {
      default: 'w-5 h-5 border-4',
      sm: 'w-5 h-5 border-4',
      md: 'w-10 h-10 border-8',
      lg: 'w-20 h-20 border-8',
    },
    loadingColor: {
      default: 'border-t-primary',
      red: 'border-t-red-600',
      orange: 'border-t-orange-600',
      yellow: 'border-t-yellow-600',
      green: 'border-t-green-600',
      blue: 'border-t-blue-600',
      purple: 'border-t-purple-600',
    },
  },
  defaultVariants: {
    loadingColor: 'default',
    loadingSize: 'default',
  },
});
