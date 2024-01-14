import { useState } from 'react';

import useTimeout from '~/common/hooks/useTimeout';
import { cn } from '~/utils/cn';

import Text from '../Text';
import { Toast } from './type';

interface ToastItemProps extends Toast {
  onDone: () => void;
}

const ToastItem = ({ message, duration, onDone }: ToastItemProps) => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <div
      className={cn(
        'duration-400 relative mx mb-2 flex h-16 w-layout max-w-[296px] items-center ',
        'animate-move rounded border border-solid border-gray-300 bg-white p-4 opacity-100 shadow-md transition-opacity ease-out',
        !show && 'opacity-0',
      )}
    >
      <div
        className={cn(
          'absolute left-0 top-0 h-1 w-0 rounded bg-primary',
          'animate-progress',
        )}
        style={{ animationDuration: `${duration}ms` }}
      />
      <Text>{message}</Text>
    </div>
  );
};

export default ToastItem;
