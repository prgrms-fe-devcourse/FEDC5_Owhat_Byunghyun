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
  borderColor,
  outlineColor,
  isBorderNone,
  isBottomBorderOnly,
  type,
}: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        'rounded-[8px] px-2 py-1',
        InputVariants({
          borderColor,
          outlineColor,
          isBorderNone,
          isBottomBorderOnly,
        }),
        `${className} `,
      )}
    />
  );
};

export default Input;
