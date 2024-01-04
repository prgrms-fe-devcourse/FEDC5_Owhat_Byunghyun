import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactNode,
  useRef,
} from 'react';

import Group from '~/common/components/Group';

import CarouselButton from './CarouselButton';
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
        className={`order-2 flex snap-x overflow-hidden scroll-smooth py-2 ${className}`}
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
        <Group
          spacing={groupGap}
          align={'center'}
          position={'center'}
          noWrap
          className="flex snap-start flex-nowrap justify-center "
        >
          {avatars}
        </Group>
      </div>

      {useButton && (
        <>
          <CarouselButton
            onClick={buttonScrollLeft}
            className="order-1"
            disabled={!isLeftButtonActive}
            iconId="chevron-left"
          />
          <CarouselButton
            onClick={buttonScrollRight}
            className="order-3"
            disabled={!isRightButtonActive}
            iconId="chevron-right"
          />
        </>
      )}
    </div>
  );
};

export default Carousel;
