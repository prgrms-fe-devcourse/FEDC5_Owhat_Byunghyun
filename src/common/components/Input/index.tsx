import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { inputVariants } from './Input.variants';

interface InputProps
  extends VariantProps<typeof inputVariants>,
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
        inputVariants({
          hasBorder,
          isBottomBorderOnly,
        }),
        className,
      )}
    />
  );
};

export default Input;
