import { cva } from 'class-variance-authority';

export const InputVariants = cva(``, {
  variants: {
    borderColor: {
      default: 'border border-gray-300',
      white: 'border border-white',
      primary: 'border border-primary',
    },
    outlineColor: {
      default: 'focus:outline-none focus:border-primary',
      lightGray: 'focus:outline-none focus:border-gray-300',
      none: 'focus:outline-none focus:border-transparent',
    },
    isBorderNone: {
      default: false,
      true: 'border-transparent',
      false: 'border',
    },
    isBottomBorderOnly: {
      default: false,
      true: 'rounded-none border-x-0 border-t-0',
      false: '',
    },
  },
  defaultVariants: {
    borderColor: 'default',
    outlineColor: 'default',
    isBorderNone: 'default',
    isBottomBorderOnly: 'default',
  },
});
