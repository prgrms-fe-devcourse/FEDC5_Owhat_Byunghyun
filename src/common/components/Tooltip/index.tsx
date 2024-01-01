import { VariantProps } from 'class-variance-authority';
import {
  Children,
  cloneElement,
  ComponentProps,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react';

import { cn } from '~/utils/cn';

import { useHandleTooltip } from './\bhooks/useHandleTooltip';
import { tooltipArrowVariants, tooltipVariants } from './Tooltip.variants';
import { TooltipArrow } from './TooltipArrow';

export interface TooltipProps
  extends VariantProps<typeof tooltipVariants>,
    ComponentProps<'div'> {
  children: ReactNode | ReactNode[];
  eventType?: 'click' | 'hover';
  isArrow?: boolean;
}

const Tooltip = ({
  children,
  className,
  eventType = 'click',
  placement = 'bottom-left',
  isShadowed = true,
  isArrow = true,
  ...props
}: TooltipProps) => {
  const { isVisible, toggleVisibility, showTooltip, hideTooltip } =
    useHandleTooltip();

  const childrenArray = Children.toArray(children);

  if (!isValidElement<HTMLAttributes<ReactElement>>(childrenArray[0])) {
    throw new Error('유효한 리액트 element가 아닙니다.');
  }

  const firstChild =
    isValidElement<HTMLAttributes<ReactElement>>(childrenArray[0]) &&
    cloneElement(childrenArray[0], {
      ...(eventType === 'click' && { onClick: toggleVisibility }),
      ...(eventType === 'hover' && {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
      }),
    });

  return (
    <div className="relative cursor-pointer">
      {firstChild}
      <div
        className={cn(
          tooltipVariants({ isShadowed, placement }),
          `${isVisible ? 'opacity-100' : 'opacity-0'}`,
          className,
        )}
        {...props}
      >
        {childrenArray[1]}
        {isArrow && (
          <TooltipArrow className={cn(tooltipArrowVariants({ placement }))} />
        )}
      </div>
    </div>
  );
};

export default Tooltip;