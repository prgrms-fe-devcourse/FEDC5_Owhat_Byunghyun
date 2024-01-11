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
        'duration-400 relative mx flex h-16 w-layout items-center',
        'mb-2 animate-move rounded-b-none border border-solid border-gray-300 bg-white p-4 opacity-100 shadow-md transition-opacity ease-out',
        !show && 'opacity-0',
      )}
    >
      <div
        className="absolute left-0 top-0 h-1 w-0 animate-progress bg-blue-500"
        style={{ animationDuration: `${duration}ms` }}
      />
      <Text>{message}</Text>
    </div>
  );
};

export default ToastItem;
