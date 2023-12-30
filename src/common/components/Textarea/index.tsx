import { ComponentProps, useRef } from 'react';

import { cn } from '~/utils/cn';

interface TextareaProps extends ComponentProps<'textarea'> {
  size?: 'sm' | 'lg';
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const Textarea = ({
  size = 'sm',
  placeholder = '',
  readonly = false,
  required = false,
  disabled = false,
  className,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    if (size === 'sm' && Number(textarea.scrollHeight) > 145) return;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <textarea
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      disabled={disabled}
      ref={textareaRef}
      onInput={resizeTextarea}
      rows={1}
      className={cn(
        'box-border w-full resize-none px-3 py-1.5 outline-none',
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
