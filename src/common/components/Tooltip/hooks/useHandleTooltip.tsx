import { useCallback, useState } from 'react';

export const useHandleTooltip = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const showTooltip = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setIsVisible(false);
  }, []);

  return { isVisible, toggleVisibility, showTooltip, hideTooltip };
};
