import {
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

interface SliderProps extends ComponentProps<'div'> {
  children: ReactNode;
  itemsToShow?: number;
}

//TODO: translateX를 이용해서 구현하는 방법도 구상해야함
const SlideTranslate = ({ children, itemsToShow = 4 }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Children.count(children);
  const slideWidth = 100 / itemsToShow;

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex overflow-hidden">
      <button className="z-10 transform bg-primary" onClick={handlePrev}>
        &lt; 이전
      </button>
      <div
        className={`flex w-[200px] transition-transform`}
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
        }}
      >
        {Children.map(
          children,
          child =>
            isValidElement(child) &&
            cloneElement(child as ReactElement, {
              className: `${
                child.props.className || ''
              } flex-none w-[50px] transition-transform`,
            }),
        )}
      </div>
      <button className="z-10 transform bg-primary" onClick={handleNext}>
        다음 &gt;
      </button>
    </div>
  );
};

export default SlideTranslate;
