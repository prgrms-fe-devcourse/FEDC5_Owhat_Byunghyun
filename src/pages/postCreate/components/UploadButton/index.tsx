type SubmitButtonProps = (event: React.MouseEvent) => void;

const UploadButton = ({ onSubmit }: { onSubmit: SubmitButtonProps }) => {
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
