import { useEffect, useRef, useState } from 'react';

export type Placement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export default function useTooltipPlacement(initialPlacement: Placement) {
  const [newPlacement, setNewPlacement] = useState<Placement>(initialPlacement);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function calculateTooltipPlacement(
    tooltipRect: DOMRect,
    placement: Placement,
  ): Placement {
    const viewPortWidth = window.innerWidth;

    const placementXAxis: { [key in Placement]?: Placement } = {
      'top-left': 'bottom-left',
      'top-center': 'bottom-center',
      'top-right': 'bottom-right',
      'bottom-left': 'top-left',
      'bottom-center': 'top-center',
      'bottom-right': 'top-right',
    };

    const placementYAxis: { [key in Placement]?: Placement } = {
      'bottom-left': 'bottom-right',
      'top-left': 'top-right',
      'bottom-right': 'bottom-left',
      'top-right': 'top-left',
    };

    if (tooltipRect.x < 0) {
      placement = placementYAxis[placement] || placement;
    } else if (
      tooltipRect.y < tooltipRect.height &&
      placement.startsWith('top')
    ) {
      placement = placementXAxis[placement] || placement;
    } else if (tooltipRect.right > viewPortWidth) {
      placement = placementYAxis[placement] || placement;
    } else if (tooltipRect.left > viewPortWidth) {
      placement = placementYAxis[placement] || placement;
    }

    return placement;
  }

  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipRect: DOMRect = tooltipRef.current.getBoundingClientRect();
      const result = calculateTooltipPlacement(tooltipRect, initialPlacement);

      setNewPlacement(result);
    }
  }, [initialPlacement]);

  return { newPlacement, tooltipRef };
}
