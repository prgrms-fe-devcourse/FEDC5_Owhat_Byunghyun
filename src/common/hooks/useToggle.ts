import { useState } from 'react';

const useToggle = (
  initialState: boolean = false,
): [boolean, typeof toggle, typeof strictToggle] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => setState(prev => !prev);

  const strictToggle = (nextState: boolean) => {
    if (state === nextState) return;

    setState(nextState);
  };

  return [state, toggle, strictToggle];
};

export default useToggle;
