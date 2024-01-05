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

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (containerRef.current) {
      const { offsetLeft, scrollLeft } = containerRef.current;

      setIsDragging(true);
      setStartX(e.pageX - offsetLeft);
      setScrollLeft(scrollLeft || 0);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const { offsetLeft } = containerRef.current;

    const x = e.pageX - offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const buttonScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= childSize;
    }
  };

  const buttonScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += childSize;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      setButtonState({
        isLeftButtonActive: scrollLeft > 0,
        isRightButtonActive: scrollLeft < maxScrollLeft,
      });
    };

    const currentContainerRef = containerRef.current;

    if (currentContainerRef) {
      currentContainerRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef]);

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
