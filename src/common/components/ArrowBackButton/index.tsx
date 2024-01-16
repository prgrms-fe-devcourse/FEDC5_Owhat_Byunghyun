import { useNavigate } from 'react-router-dom';

import { cn } from '~/utils/cn';

import Button from '../Button';
import Icon from '../Icon';

interface ArrowButtonProps {
  className?: string;
}

const ArrowBackButton = ({ className }: ArrowButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      styleType="ghost"
      className={cn('p-0', className)}
      onClick={() => navigate(-1)}
    >
      <Icon
        id="arrow-back"
        className="fill-gray-400 hover:fill-primary"
        size={18}
      />
    </Button>
  );
};
export default ArrowBackButton;
