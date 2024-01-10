import { ComponentProps, useState } from 'react';

import { cn } from '~/utils/cn';

interface TextareaProps extends ComponentProps<'textarea'> {
  size?: 'sm' | 'lg';
  readonly?: boolean;
}

const Textarea = ({
  size = 'sm',
  readonly = false,
  className,
  ...props
}: TextareaProps) => {
  const [row, setRow] = useState(1);

  return (
    <textarea
      readOnly={readonly}
      onFocus={() => !readonly && setRow(2)}
      onBlur={() => setRow(1)}
      rows={row}
      className={cn(
        'box-border w-full resize-none overscroll-contain px py-small outline-none',
        size === 'lg' && 'h-full',
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
