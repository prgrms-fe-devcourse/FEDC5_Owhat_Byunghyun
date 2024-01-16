import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

interface MoreButtonProps {
  type: 'comment' | 'post';
  id: string;
  handleDelete: (id: string) => void;
  handleEdit?: () => void;
}

const MoreButton = ({
  type,
  id,
  handleDelete,
  handleEdit,
}: MoreButtonProps) => {
  return (
    <Tooltip
      targetElement={
        <Icon
          id="more-vert"
          className="rounded-full ring-gray-300 transition-colors hover:fill-gray-500 hover:ring-[1px]"
        />
      }
      placement="bottom-right"
      className="pointer-events-auto min-w-[45px]"
    >
      {type === 'post' && (
        <Button
          onClick={() => handleEdit && handleEdit()}
          styleType="secondary"
          className="z-10 p-[3px] text-xs"
        >
          수정
        </Button>
      )}

      <Button
        onClick={() => handleDelete(id)}
        styleType="secondary"
        className="z-10 p-[3px] text-xs text-error hover:bg-error"
      >
        삭제
      </Button>
    </Tooltip>
  );
};

export default MoreButton;
