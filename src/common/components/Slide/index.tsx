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
//TODO : div에 onMouseDown와 같은 이벤트를 적용하면 비네이티브(div)의 상호작용 요소에 대해 웹 접근성 관련 경고가 뜨게 됨. 현재는 상호작용 요소가 필요해서 접근성을 향상 시키기 위해 role과 tabIndex 추가

//presention : div가 아니다! 라는 의미 -> 찾아봐야 함-> ㅠㅕㅅ새ㅜdl skdma
const Slide = ({
  children,
  itemsToShow = 4,
  childSize = 100,
  useButton = false,
  groupGap = 5,
}: SlideProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemToShowWidth = itemsToShow * childSize;
  const totalSlides = Children.count(children);

  const {
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDragSlide({
    containerRef,
    childSize,
  });

  return (
    <div className="flex items-center">
      <div
        ref={containerRef}
        className="order-2 flex h-full w-[400px] snap-x overflow-hidden scroll-smooth border border-gray-300 first-letter:scroll-pl-6"
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
        {Children.map(children, child => (
          <Group
            spacing={groupGap}
            align={'center'}
            position={'center'}
            className="box-border flex flex-none snap-start transition-transform"
            style={{ width: `${childSize}px` }}
          >
            {child}
          </Group>
        ))}
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
