import { MouseEvent } from 'react';

import Icon from '../Icon';

interface LikeProps {
  initialState: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Like = ({ initialState = false, onClick }: LikeProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  };

  return (
    <button onClick={handleClick} className="outline-none">
      {initialState ? (
        <Icon id="favorite-filled" className="animate-beat fill-red-400" />
      ) : (
        <Icon id="favorite" />
      )}
    </button>
  );
};

export default Like;
