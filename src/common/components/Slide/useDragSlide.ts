import { useState } from 'react';

interface UseDragSlideParams {
  containerRef: React.RefObject<HTMLDivElement>;
  childSize: number;
}

interface UseDragSlideResult {
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  buttonScrollLeft: () => void;
  buttonScrollRight: () => void;
}

const useDragSlide = ({
  containerRef,
  childSize,
}: UseDragSlideParams): UseDragSlideResult => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft); //현재 마우스 이벤트가 발생한 페이지(page)의 x 좌표에서 스크롤 컨테이너의 왼쪽 경계(offsetLeft)까지의 거리(슬라이드가 왼쪽에서부터 띄워져있는 거리)
      setScrollLeft(containerRef.current.scrollLeft || 0); //현재 스크롤 컨테이너의 가로 스크롤 위치
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.pageX - containerRef.current.offsetLeft; // 스크롤 컨테이너의 상대적인 x좌표를 계산
    const walk = (x - startX) * 2; // 스크롤 이동 거리를 부드럽게 만들기 위해 2배로 설정
    containerRef.current.scrollLeft = scrollLeft - walk; // 스크롤 이동
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

  return {
    buttonScrollLeft,
    buttonScrollRight,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};

export default useDragSlide;
