import { ComponentProps, useState } from 'react';

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
  const [row, setRow] = useState(1);

  return (
    <textarea
      placeholder={placeholder}
      readOnly={readonly}
      required={required}
      disabled={disabled}
      onFocus={() => setRow(2)}
      onBlur={() => setRow(1)}
      rows={row}
      className={cn(
        'box-border w-full resize-none overscroll-contain px-3 py-1.5 outline-none',
        size === 'lg' && 'h-full',
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
