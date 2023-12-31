import { VariantProps } from 'class-variance-authority';
import {
  Children,
  cloneElement,
  ComponentProps,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

import { cn } from '~/utils/cn';

import { tooltipVariants } from './Tooltip.variants';
import { TooltipArrow } from './TooltipArrow';

export type arrowPosition = 'left' | 'center' | 'right';

export interface TooltipProps
  extends VariantProps<typeof tooltipVariants>,
    ComponentProps<'div'> {
  children: ReactNode | ReactNode[];
  eventType?: 'click' | 'hover';
  isArrow?: boolean;
  arrowPosition?: arrowPosition;
}

const Tooltip = ({
  children,
  className,
  eventType = 'click',
  isShadowed = false,
  isArrow = true,
  arrowPosition = 'left',
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const childrenArray = Children.toArray(children);

  if (!isValidElement<HTMLAttributes<ReactElement>>(childrenArray[0])) {
    throw new Error('유효한 리액트 element가 아닙니다.');
  }

  const firstChild = isValidElement<HTMLAttributes<ReactElement>>(
    childrenArray[0],
  ) ? (
    cloneElement(childrenArray[0], {
      className: cn(
        childrenArray[0].props.className,
        'relative cursor-pointer',
      ),
      ...(eventType === 'click' && { onClick: () => setIsVisible(!isVisible) }), // eventType이 'click'인 경우에만 onClick 핸들러를 추가합니다.
      ...(eventType === 'hover' && {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
      }),
    })
  ) : (
    <div>Invalid element</div>
  );

  return (
    <>
      {firstChild}
      {isVisible && (
        <div
          className={cn(tooltipVariants({ isShadowed }), className)}
          {...props}
        >
          {childrenArray[1]}
          {isArrow && <TooltipArrow position={arrowPosition} />}
        </div>
      )}
    </>
  );
};

export default Tooltip;
