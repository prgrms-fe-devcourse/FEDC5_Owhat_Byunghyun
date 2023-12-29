import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { InputVariants } from './Input.variants';

interface InputProps
  extends VariantProps<typeof InputVariants>,
    ComponentProps<'input'> {}

const Input = ({
  className,
  hasBorder,
  isBottomBorderOnly,
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        InputVariants({
          hasBorder,
          isBottomBorderOnly,
        }),
        className,
      )}
    />
  );
};

export default Input;
