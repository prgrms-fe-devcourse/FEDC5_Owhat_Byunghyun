import { VariantProps } from 'class-variance-authority';
import {
  cloneElement,
  ComponentProps,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

import { cn } from '~/utils/cn';

import { useHandleTooltip } from './\bhooks/useHandleTooltip';
import useSmartTooltip, { Placement } from './\bhooks/useSmartTooltip';
import { tooltipArrowVariants, tooltipVariants } from './Tooltip.variants';
import { TooltipArrow } from './TooltipArrow';

export interface TooltipProps
  extends VariantProps<typeof tooltipVariants>,
    ComponentProps<'div'> {
  targetElement: ReactNode;
  eventType?: 'click' | 'hover';
  isArrow?: boolean;
  placement?: Placement;
}

const Tooltip = ({
  children,
  targetElement,
  className,
  eventType = 'click',
  placement = 'bottom-left',
  isArrow = true,
  ...props
}: TooltipProps) => {
  const { isVisible, toggleVisibility, showTooltip, hideTooltip } =
    useHandleTooltip();

  const { newPlacement, tooltipRef } = useSmartTooltip(placement);

  const target =
    isValidElement<HTMLAttributes<ReactElement>>(targetElement) &&
    cloneElement(targetElement, {
      ...(eventType === 'click' && { onClick: toggleVisibility }),
      ...(eventType === 'hover' && {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
      }),
    });

  return (
    <div className="relative cursor-pointer">
      {target}
      <div
        ref={tooltipRef}
        className={cn(
          tooltipVariants({ placement: newPlacement }),
          isVisible ? 'opacity-100' : 'opacity-0',
          className,
        )}
        {...props}
      >
        {children}
        {isArrow && (
          <TooltipArrow
            className={cn(tooltipArrowVariants({ placement: newPlacement }))}
          />
        )}
      </div>
    </div>
  );
};

export default Tooltip;
