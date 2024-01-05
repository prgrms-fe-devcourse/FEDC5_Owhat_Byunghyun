import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { dividerVariants } from './Divider.varients';

interface DividerProps
  extends VariantProps<typeof dividerVariants>,
    ComponentProps<'div'> {
  size: number;
}

const Divider = ({ type, size = 8, className, ...props }: DividerProps) => {
  const dividerStyle = {
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  };

  return (
    <div
      {...props}
      className={cn(dividerVariants({ type }), className)}
      style={{ ...dividerStyle }}
    />
  );
};

export default Divider;
