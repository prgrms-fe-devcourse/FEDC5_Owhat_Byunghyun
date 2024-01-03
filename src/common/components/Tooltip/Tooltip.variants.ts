import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  `pointer-events-none absolute z-10 min-w-[108px] rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-sm text-black transition-opacity duration-300 ease-in-out`,
  {
    variants: {
      isShadowed: {
        true: 'shadow-md',
        false: 'shadow-none',
      },
      placement: {
        'bottom-left': `top-full right-full translate-x-[1.3rem] translate-y-[8px]`,
        'bottom-right': `top-full left-0 translate-y-[8px]`,
        'bottom-center': `top-full left-0 -translate-x-[41%] translate-y-[8px]`,
        'top-left': `bottom-full right-full translate-x-[1.3rem] -translate-y-[8px]`,
        'top-right': `bottom-full left-0 -translate-y-[8px]`,
        'top-center':
          'bottom-full left-0 -translate-x-[41%] -translate-y-[8px]',
      },
    },
    defaultVariants: {
      isShadowed: false,
      placement: 'bottom-right',
    },
  },
);

export const tooltipArrowVariants = cva(
  'absolute h-2 w-2 rotate-45 transform border border-gray-300 bg-white',
  {
    variants: {
      placement: {
        'bottom-left': `top-0 left-full -translate-x-[153%] -translate-y-1/2  border-r-0 border-b-0`,
        'bottom-center': `top-0 left-[56px] -translate-x-1/2 -translate-y-1/2 border-r-0 border-b-0`,
        'bottom-right': `top-0 left-[11px] -translate-x-1/2 -translate-y-1/2  border-r-0 border-b-0`,
        'top-left': `bottom-0 left-full -translate-x-[153%] translate-y-1/2 border-l-0 border-t-0`,
        'top-center': `bottom-0 left-[56px] -translate-x-1/2 translate-y-1/2 border-l-0 border-t-0`,
        'top-right': `bottom-0 left-[11px] -translate-x-[42%] translate-y-1/2  border-l-0 border-t-0 `,
      },
    },
  },
);
