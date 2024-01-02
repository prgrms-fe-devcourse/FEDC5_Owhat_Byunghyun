import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { VerticalDividerVariants } from './VerticalDivider.variants';

interface VerticalDividerProps
  extends VariantProps<typeof VerticalDividerVariants>,
    ComponentProps<'div'> {}

const VerticalDivider = ({
  size = 'small',
  className,
  ...props
}: VerticalDividerProps) => {
  return (
    <div
      {...props}
      className={cn(VerticalDividerVariants({ size }), className)}
    />
  );
};

export default VerticalDivider;
