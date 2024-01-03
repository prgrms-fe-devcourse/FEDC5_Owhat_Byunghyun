import { useEffect, useRef, useState } from 'react';

export type Placement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export default function useSmartTooltip(initialPlacement: Placement) {
  const [newPlacement, setNewPlacement] = useState<Placement>(initialPlacement);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const calculateTooltipPlacement = (
    tooltipRect: DOMRect,
    placement: Placement,
  ): Placement => {
    const viewPortWidth = window.innerWidth;

    const placementXAxis: { [key in Placement]?: Placement } = {
      'top-left': 'top-right',
      'top-right': 'top-left',
      'bottom-left': 'bottom-right',
      'bottom-right': 'bottom-left',
    };

    const placementYAxis: { [key in Placement]?: Placement } = {
      'top-left': 'bottom-left',
      'top-center': 'bottom-center',
      'top-right': 'bottom-right',
      'bottom-left': 'top-left',
      'bottom-center': 'top-center',
      'bottom-right': 'top-right',
    };

    if (
      (tooltipRect.y < tooltipRect.height && placement.startsWith('top')) ||
      (tooltipRect.bottom > window.innerHeight &&
        placement.startsWith('bottom'))
    ) {
      placement = placementYAxis[placement] || placement;
    }

    if (tooltipRect.left < 0) {
      placement === 'top-center' && (placement = 'top-left');
      placement === 'bottom-center' && (placement = 'bottom-left');
      placement = placementXAxis[placement] || placement;
    }

    if (tooltipRect.right > viewPortWidth) {
      placement === 'top-center' && (placement = 'top-right');
      placement === 'bottom-center' && (placement = 'bottom-right');
      placement = placementXAxis[placement] || placement;
    }

    return placement;
  };

  useEffect(() => {
    if (!tooltipRef.current) {
      return;
    }

    const tooltipRect: DOMRect = tooltipRef.current.getBoundingClientRect();
    const result = calculateTooltipPlacement(tooltipRect, initialPlacement);

    setNewPlacement(result);
  }, [initialPlacement]);

  return { newPlacement, tooltipRef };
}
