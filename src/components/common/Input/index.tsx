import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { InputVariants } from './Input.variants';

interface InputProps
  extends VariantProps<typeof InputVariants>,
    ComponentProps<'input'> {
  inputType: 'text' | 'password' | 'number' | 'email';
}

const Input = ({
  id,
  placeholder,
  className,
  onChange,
  borderColor,
  outlineColor,
  isBorderNone,
  isBottomBorderOnly,
  inputType,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      id={id}
      type={inputType}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        'rounded-[8px] px-2 py-1 text-black placeholder:text-sm',
        InputVariants({
          borderColor,
          outlineColor,
          isBorderNone,
          isBottomBorderOnly,
        }),
        `${className}`,
      )}
    />
  );
};

export default Input;
