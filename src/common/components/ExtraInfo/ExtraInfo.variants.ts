import { cva } from 'class-variance-authority';

export const extraInfoVariants = cva(`[&>*]:font-thin [&>*]:text-gray-400`, {
  variants: {
    gap: {
      0: `gap-0`,
      1: `gap-1`,
      2: `gap-2`,
      3: `gap-3`,
      4: `gap-4`,
      5: `gap-5`,
      6: `gap-6`,
      7: `gap-7`,
      8: `gap-8`,
      9: `gap-9`,
      10: `gap-10`,
    },
  },
  defaultVariants: {
    gap: 1,
  },
});
