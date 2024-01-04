import { cva } from 'class-variance-authority';

export const groupVariants = cva(``, {
  variants: {
    direction: {
      rows: 'flex-row',
      columns: 'flex-col',
    },
    position: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
      apart: 'justify-between',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    inline: {
      true: 'inline-flex',
      false: 'flex',
    },
    noWrap: {
      true: 'flex-nowrap',
      false: 'flex-wrap',
    },
    grow: {
      true: '[&>*]:grow-1 flex-nowrap [&>*]:w-full',
      false: '',
    },
  },
  defaultVariants: {
    direction: 'rows',
    position: 'left',
    align: 'start',
    inline: false,
    noWrap: false,
    grow: false,
  },
});

export type TSpacing = 'sm' | 'md' | 'lg';

type TSpacingMap = {
  [key in TSpacing]: number;
};

const spacingMap: TSpacingMap = {
  sm: 8,
  md: 20,
  lg: 32,
};

export const getSpacing = (spacing: TSpacing | number) => {
  if (typeof spacing === 'number') return spacing;

  return spacingMap[spacing];
};
