import { Children, ComponentProps, ReactNode, useRef } from 'react';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';

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
  const itemToShowWidth =
    itemsToShow * (childSize + groupGap) + (childSize + groupGap) / 2;
  const totalCarousels = Children.count(children);

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
        <Group spacing={groupGap} align={'center'} position={'center'} noWrap>
          {Children.map(children, child => (
            <div
              className="flex snap-start flex-nowrap justify-center"
              style={{ width: `${childSize}px` }}
            >
              {child}
            </div>
          ))}
        </Group>
      </div>

      {useButton && (
        <>
          <button
            onClick={buttonScrollLeft}
            className="order-1"
            disabled={isLeftButtonActive}
          >
            <Icon
              id="chevron-left"
              className={`${
                isLeftButtonActive
                  ? 'cursor-pointer fill-black hover:fill-primary'
                  : 'fill-gray-400'
              }`}
            />
          </button>
          <button
            onClick={buttonScrollRight}
            className="order-3"
            disabled={isRightButtonActive}
          >
            <Icon
              id="chevron-right"
              className={`${
                isRightButtonActive
                  ? 'cursor-pointer fill-black hover:fill-primary'
                  : 'fill-gray-400'
              } `}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
