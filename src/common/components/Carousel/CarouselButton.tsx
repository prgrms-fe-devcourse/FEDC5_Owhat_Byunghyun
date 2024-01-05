interface CarouselButtonProps {
  onClick: () => void;
  className: string;
  disabled: boolean;
  children: React.ReactNode;
}

const CarouselButton = ({
  onClick,
  className,
  disabled,
  children,
}: CarouselButtonProps) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default CarouselButton;
