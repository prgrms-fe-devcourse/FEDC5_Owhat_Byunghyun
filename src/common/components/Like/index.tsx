import { MouseEvent } from 'react';

import useToggle from '~/common/hooks/useToggle';

import Icon from '../Icon';

interface LikeProps {
  initialState: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Like = ({ initialState = false, onClick }: LikeProps) => {
  const [on, toggle] = useToggle(initialState);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggle();
    onClick && onClick(e);
  };

  return (
    <button onClick={handleClick} className="outline-none">
      {on ? (
        <Icon id="favorite-filled" className="fill-primary" />
      ) : (
        <Icon id="favorite" />
      )}
    </button>
  );
};

export default Like;
