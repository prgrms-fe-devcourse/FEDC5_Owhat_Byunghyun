import { cva } from 'class-variance-authority';

export const LoadingVariants = cva(``, {
  variants: {
    loadingSize: {
      default: 'w-5 h-5',
      sm: 'w-5 h-5',
      md: 'w-10 h-10',
      lg: 'w-20 h-20',
    },
    loadingBorder: {
      default: 'border-4',
      thin: 'border-2',
      medium: 'border-4',
      thick: 'border-8',
    },
    loadingBorderColor: {
      default: 'border-gray-300',
      lightGray: 'border-gray-200',
      mediumGray: 'border-gray-300',
      darkGray: 'border-gray-400',
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
    loadingBorder: 'default',
    loadingBorderColor: 'default',
  },
});
