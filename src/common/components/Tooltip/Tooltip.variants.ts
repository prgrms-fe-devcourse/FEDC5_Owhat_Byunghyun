import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  `pointer-events-none absolute z-10 rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-sm text-black transition-opacity ease-in-out duration-300`,
  {
    variants: {
      isShadowed: {
        true: 'shadow-md',
        false: 'shadow-none',
      },
    },
    defaultVariants: {
      isShadowed: false,
    },
  },
);
