import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { verticalDividerVariants } from './VerticalDivider.variants';

interface VerticalDividerProps
  extends VariantProps<typeof verticalDividerVariants>,
    ComponentProps<'div'> {}

const VerticalDivider = ({
  size = 'small',
  className,
  ...props
}: VerticalDividerProps) => {
  return (
    <div
      {...props}
      className={cn(verticalDividerVariants({ size }), className)}
    />
  );
};

export default VerticalDivider;
