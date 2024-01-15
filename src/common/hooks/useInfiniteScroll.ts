import { useEffect, useRef } from 'react';

const useInfiniteScroll = <T extends Element>(
  callback: () => void,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && callback()),
      options || { threshold: 0.5 },
    );

    const target = ref && ref.current;

    if (!target) return;

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [callback, options]);

  return { ref };
};

export default useInfiniteScroll;
