import { cn } from '~/utils/cn';

import { arrowPosition } from '.';

export const TooltipArrow = ({
  className,
  position = 'left',
}: {
  className?: string;
  position?: arrowPosition;
}) => {
  const getArrowPosition = (position: arrowPosition) => {
    const positions = {
      center: `left-1/2`,
      left: `left-[23.5%]`,
      right: `left-[76.5%]`,
    } as const;

    return positions[position];
  };

  return (
    <div
      className={cn(
        'absolute top-[-5px] h-2 w-2 translate-x-[-50%] rotate-45 transform border border-b-0 border-r-0 border-gray-300 bg-white',
        getArrowPosition(position),
        className,
      )}
    ></div>
  );
};
