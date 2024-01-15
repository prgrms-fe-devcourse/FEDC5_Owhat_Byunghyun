import { useNavigate } from 'react-router-dom';

import { cn } from '~/utils/cn';

import Button from '../Button';
import Icon from '../Icon';

interface ArrowButtonProps {
  className?: string;
}

const HomeButton = ({ className }: ArrowButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button styleType="ghost" className={cn('p-0', className)}>
      <Icon
        id="home"
        className="fill-gray-400 hover:fill-primary"
        size={18}
        onClick={() => navigate('/')}
      />
    </Button>
  );
};
export default HomeButton;
