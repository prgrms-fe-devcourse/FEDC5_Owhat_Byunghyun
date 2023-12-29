import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { InputVariants } from './Input.variants';

interface InputProps
  extends VariantProps<typeof InputVariants>,
    ComponentProps<'input'> {}

const Input = ({
  id,
  placeholder,
  className,
  onChange,
  isBorderNone,
  isBottomBorderOnly,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        InputVariants({
          isBorderNone,
          isBottomBorderOnly,
        }),
        `${className}`,
      )}
    />
  );
};

export default Input;
