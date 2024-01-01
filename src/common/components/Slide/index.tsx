import { Children, ComponentProps, ReactNode, useRef } from 'react';

import Group from '~/common/components/Group';
import Icon from '~/common/components/Icon';

import useDragSlide from './useDragSlide';

interface SlideProps extends ComponentProps<'div'> {
  children: ReactNode;
  itemsToShow?: number;
  childSize?: number;
  useButton?: boolean;
  groupGap?: number;
}

const Slide = ({
  children,
  itemsToShow = 4,
  childSize = 100,
  useButton = false,
  groupGap = 5,
  ...props
}: SlideProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemToShowWidth = itemsToShow * (childSize + groupGap);
  const totalSlides = Children.count(children);

  const {
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDragSlide({
    containerRef,
    childSize: childSize + groupGap,
  });

  return (
    <div className="flex items-center" {...props}>
      <div
        ref={containerRef}
        className="order-2 flex snap-x overflow-hidden scroll-smooth border-b-2 border-t-2 border-gray-300 py-2"
        style={{ width: `${itemToShowWidth}px` }}
        role="slider"
        aria-valuenow={itemsToShow}
        aria-valuemin={1}
        aria-valuemax={totalSlides}
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Group spacing={groupGap} align={'center'} position={'center'} noWrap>
          {Children.map(children, child => (
            <div
              className="flex-none snap-start"
              style={{ width: `${childSize}px` }}
            >
              {child}
            </div>
          ))}
        </Group>
      </div>

      {useButton && (
        <>
          <button onClick={buttonScrollLeft} className="order-1 px-4 py-2">
            <Icon id="arrow-circle-left" />
          </button>

          <button onClick={buttonScrollRight} className="order-3 px-4 py-2">
            <Icon id="arrow-circle-right" />
          </button>
        </>
      )}
    </div>
  );
};

export default Slide;
