import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Icon from '../Icon';

const ArrowBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button styleType="ghost">
      <Icon
        id="arrow-back"
        className=" fill-gray-400 hover:fill-primary"
        size={18}
        onClick={() => navigate(-1)}
      />
    </Button>
  );
};
export default ArrowBackButton;
