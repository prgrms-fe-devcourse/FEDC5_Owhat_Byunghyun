// 1. 함수 호출을 통한 방법
// 2. 컴포넌트가 로딩 된 후 바로 실행

import { useCallback, useEffect, useRef } from 'react';

const useTimeout = (fn: () => void, delay: number) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);

    timeoutId.current = setTimeout(() => {
      callback.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  useEffect(() => {
    run();

    return clear;
  }, [clear, run]);

  return clear;
};

export default useTimeout;
