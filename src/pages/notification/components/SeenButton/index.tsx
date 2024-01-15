import Button from '~/common/components/Button';
import useSeenNotification from '~/common/hooks/mutations/useSeenNotification';

const SeenButton = () => {
  const { mutate: mutateSeenNotification, isPending } = useSeenNotification();

  const handleClickButton = () => {
    mutateSeenNotification();
  };

  return (
    <Button
      styleType="ghost"
      onClick={handleClickButton}
      loading={isPending}
      className="p-xsmall"
    >
      모두 읽음
    </Button>
  );
};

export default SeenButton;
