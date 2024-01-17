interface SubmitButtonProps {
  onSubmit: (event: React.MouseEvent) => void;
}

const UploadButton = ({ onSubmit }: SubmitButtonProps) => {
  return (
    <button
      onClick={event => onSubmit(event)}
      className="font-bold text-primary"
    >
      완료
    </button>
  );
};

export default UploadButton;
