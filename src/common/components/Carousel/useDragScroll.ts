import { useEffect, useState } from 'react';

interface UseDragScrollParams {
  containerRef: React.RefObject<HTMLDivElement>;
  childSize: number;
}

interface UseDragScrollResult {
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  buttonScrollLeft: () => void;
  buttonScrollRight: () => void;
  isLeftButtonActive: boolean;
  isRightButtonActive: boolean;
}
interface ScrollButtonState {
  isLeftButtonActive: boolean;
  isRightButtonActive: boolean;
}

const useDragScroll = ({
  containerRef,
  childSize,
}: UseDragScrollParams): UseDragScrollResult => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [buttonState, setButtonState] = useState<ScrollButtonState>({
    isLeftButtonActive: false,
    isRightButtonActive: true,
  });

  const currentContainerRef = containerRef.current;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!currentContainerRef) return;
    e.preventDefault();
    e.stopPropagation();

    const { offsetLeft, scrollLeft } = currentContainerRef;

    setIsDragging(true);
    setStartX(e.pageX - offsetLeft);
    setScrollLeft(scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !currentContainerRef) return;
    const { offsetLeft } = currentContainerRef;

    const x = e.pageX - offsetLeft;
    const walk = (x - startX) * 2;
    currentContainerRef.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const buttonScrollLeft = () => {
    if (currentContainerRef) {
      currentContainerRef.scrollLeft -= childSize;
    }
  };

  const buttonScrollRight = () => {
    if (currentContainerRef) {
      currentContainerRef.scrollLeft += childSize;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!currentContainerRef) return;

      const { scrollLeft, scrollWidth, clientWidth } = currentContainerRef;
      const maxScrollLeft = scrollWidth - clientWidth;

      setButtonState({
        isLeftButtonActive: scrollLeft > 0,
        isRightButtonActive: scrollLeft < maxScrollLeft,
      });
    };

    if (currentContainerRef) {
      currentContainerRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentContainerRef]);

  return {
    isLeftButtonActive: buttonState.isLeftButtonActive,
    isRightButtonActive: buttonState.isRightButtonActive,
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useDragScroll;
