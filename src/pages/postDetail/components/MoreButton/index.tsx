import Button from '~/common/components/Button';
import Icon from '~/common/components/Icon';
import Tooltip from '~/common/components/Tooltip';

interface MoreButtonProps {
  type: 'comment' | 'post';
  id: string;
  handleDelete: (id: string) => void;
  handleEdit?: (postId: string) => void;
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
      className="pointer-events-auto"
    >
      {type === 'post' && (
        <div className="flex w-[35px] flex-col">
          <Button
            onClick={() => handleEdit && handleEdit()}
            styleType="secondary"
            className="z-10 p-1 text-xs"
          >
            수정
          </Button>
        </div>
      )}

      <div className="flex w-[35px] flex-col">
        <Button
          onClick={() => handleEdit && handleEdit(id)}
          styleType="secondary"
          className="z-10 p-1  text-xs text-error hover:bg-error"
        >
          삭제
        </Button>
      </div>
    </Tooltip>
  );
};

export default MoreButton;
