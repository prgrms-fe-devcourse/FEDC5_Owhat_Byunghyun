import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  `pointer-events-none absolute z-10 rounded-lg border border-gray-300 bg-white p-[2px] text-center text-sm text-black shadow-md transition-opacity duration-300 ease-in-out`,
  {
    variants: {
      placement: {
        'bottom-left': `left-0 top-full  translate-y-1`,
        'bottom-right': `right-0 top-full  translate-y-1`,
        'bottom-center': `left-1/2 top-full  -translate-x-1/2 translate-y-1`,
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
        'bottom-left': `left-1 top-0 -translate-y-1/2 translate-x-1/2  border-b-0 border-r-0`,
        'bottom-right': `right-1 top-0 -translate-x-1/2 -translate-y-1/2  border-b-0 border-r-0`,
        'bottom-center': `left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 border-b-0 border-r-0`,
        'top-left': `bottom-0 left-1 translate-x-1/2 translate-y-1/2  border-l-0 border-t-0 `,
        'top-right': `bottom-0 right-1 -translate-x-1/2 translate-y-1/2 border-l-0 border-t-0`,
        'top-center': `bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-l-0 border-t-0`,
      },
    },
  },
);
