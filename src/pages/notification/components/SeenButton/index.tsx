import Button from '~/common/components/Button';
import useSeenNotification from '~/common/hooks/mutations/useSeenNotification';

const SeenButton = () => {
  const mutation = useSeenNotification();

  const handleClickButton = () => {
    mutation.mutate();
  };

  return (
    <Button
      styleType="ghost"
      onClick={handleClickButton}
      loading={mutation.isPending}
      className="p-xsmall"
    >
      모두 읽음
    </Button>
  );
};

export default SeenButton;
