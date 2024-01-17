import Button from '~/common/components/Button';

interface SubmitButtonProps {
  onSubmit: (event: React.MouseEvent) => void;
}

const UploadButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <Button onClick={event => onSubmit(event)} styleType="ghost">
      완료
    </Button>
  );
};

export default UploadButton;
