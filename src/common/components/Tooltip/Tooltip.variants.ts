import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  `pointer-events-none absolute z-10 min-w-[108px] rounded-lg border border-gray-300 bg-white shadow-md px-3 py-2 text-center text-sm text-black transition-opacity duration-300 ease-in-out`,
  {
    variants: {
      placement: {
        'bottom-left': `top-full left-0 translate-y-1`,
        'bottom-right': `top-full right-0 translate-y-1`,
        'bottom-center': `top-full left-1/2 -translate-x-1/2 translate-y-1`,
        'top-left': `bottom-full left-0 -translate-y-1`,
        'top-right': `bottom-full right-0 -translate-y-1`,
        'top-center': 'bottom-full left-1/2 -translate-x-1/2 -translate-y-1',
      },
    },
    defaultVariants: {
      placement: 'bottom-right',
    },
  },
);

export const tooltipArrowVariants = cva(
  'absolute h-2 w-2 rotate-45 transform border border-gray-300 bg-white',
  {
    variants: {
      placement: {
        'bottom-left': `top-0 left-1 translate-x-1/2 -translate-y-1/2  border-r-0 border-b-0`,
        'bottom-right': `top-0 right-1 -translate-x-1/2 -translate-y-1/2  border-r-0 border-b-0`,
        'bottom-center': `top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-r-0 border-b-0`,
        'top-left': `bottom-0 left-1 translate-x-1/2 translate-y-1/2  border-l-0 border-t-0 `,
        'top-right': `bottom-0 right-1 -translate-x-1/2 translate-y-1/2 border-l-0 border-t-0`,
        'top-center': `bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-l-0 border-t-0`,
      },
    },
  },
);
