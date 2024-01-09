import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactNode,
  useRef,
} from 'react';

import Group from '~/common/components/Group';
import { cn } from '~/utils/cn';

import Button from '../Button';
import Icon from '../Icon';
import useDragScroll from './useDragScroll';

interface CarouselProps extends ComponentProps<'div'> {
  children: ReactNode;
  itemsToShow?: number;
  childSize?: number;
  useButton?: boolean;
  groupGap?: number;
}

const Carousel = ({
  children,
  itemsToShow = 4,
  childSize = 100,
  useButton = false,
  groupGap = 5,
  className,
  ...props
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemToShowWidth = itemsToShow * (childSize + groupGap) + childSize / 2;
  const totalCarousels = Children.count(children);

  const avatars = Children.toArray(children).map((child: ReactNode) => {
    if (isValidElement(child)) {
      return cloneElement(child as JSX.Element, {
        style: { width: `${childSize}px` },
        className: `${child.props.className || ''} snap-start`,
      });
    }
  });

  const {
    isLeftButtonActive,
    isRightButtonActive,
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDragScroll({
    containerRef,
    childSize: childSize + groupGap,
  });

  return (
    <div className="flex items-center" {...props}>
      <div
        ref={containerRef}
        className={cn(
          'order-2 flex snap-x scroll-pl-2 overflow-hidden scroll-smooth px-2 py-2',
          className,
        )}
        style={{ width: `${itemToShowWidth}px` }}
        role="slider"
        aria-valuenow={itemsToShow}
        aria-valuemin={1}
        aria-valuemax={totalCarousels}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Group spacing={groupGap} align="center" position="center" noWrap>
          {avatars}
        </Group>
      </div>

      {useButton && (
        <>
          <Button
            onClick={buttonScrollLeft}
            className="order-1"
            disabled={!isLeftButtonActive}
            styleType="ghost"
          >
            <Icon id="chevron-left" />
          </Button>
          <Button
            onClick={buttonScrollRight}
            className="order-3"
            disabled={!isRightButtonActive}
            styleType="ghost"
          >
            <Icon id="chevron-right" />
          </Button>
        </>
      )}
    </div>
  );
};

export default Carousel;
