import Icon from '~/common/components/Icon';
import { IconName } from '~/common/components/Icon/type';
interface CarouselButtonProps {
  onClick: () => void;
  className: string;
  disabled: boolean;
  iconId: IconName;
}

const CarouselButton = ({
  onClick,
  className,
  disabled,
  iconId,
}: CarouselButtonProps) => (
  <button onClick={onClick} className={className} disabled={disabled}>
    <Icon
      id={iconId}
      className={
        disabled
          ? 'fill-gray-400'
          : 'cursor-pointer fill-black hover:fill-primary'
      }
    />
  </button>
);

export default CarouselButton;
