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
        'bottom-left': `top-[100%] left-0 `,
        'bottom-right': `top-[100%] right-[-7px]`,
        'bottom-center': `top-[100%] left-[-45px]`,
        'top-left': `bottom-[100%] left-0`,
        'top-right': `bottom-[100%] right-[-7px]`,
        'top-center': 'bottom-[100%] left-[-45px]',
      },
    },
    defaultVariants: {
      isShadowed: false,
      placement: 'bottom-left',
    },
  },
);

export const tooltipArrowVariants = cva(
  'absolute h-2 w-2 translate-x-[-50%] rotate-45 transform border border-gray-300 bg-white',
  {
    variants: {
      placement: {
        'bottom-left': `top-[-5px] left-[11px] border-b-0 border-r-0`,
        'bottom-center': `top-[-5px] left-[56px] border-b-0 border-r-0`,
        'bottom-right': `top-[-5px] right-[11px] border-b-0 border-r-0`,
        'top-left': `bottom-[-5px] left-[11px] border-t-0 border-l-0 `,
        'top-right': `bottom-[-5px] right-[11px] border-t-0 border-l-0`,
        'top-center': `bottom-[-5px] left-[56px] border-t-0 border-l-0`,
      },
    },
  },
);
