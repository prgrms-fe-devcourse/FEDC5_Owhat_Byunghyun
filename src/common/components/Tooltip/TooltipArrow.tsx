import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { tooltipArrowVariants } from './Tooltip.variants';

interface TooltipArrowProps
  extends VariantProps<typeof tooltipArrowVariants>,
    ComponentProps<'div'> {}

export const TooltipArrow = ({ className, placement }: TooltipArrowProps) => {
  return (
    <div className={cn(tooltipArrowVariants({ placement }), className)}></div>
  );
};
