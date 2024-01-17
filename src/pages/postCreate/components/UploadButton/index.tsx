import Button from '~/common/components/Button';

interface SubmitButtonProps {
  onSubmit: (event: React.MouseEvent) => void;
  isEdit: boolean;
}

const UploadButton = ({ onSubmit, isEdit }: SubmitButtonProps) => {
  return (
    <Button onClick={event => onSubmit(event)} styleType="ghost">
      {isEdit ? '수정' : '완료'}
    </Button>
  );
};

export default UploadButton;
