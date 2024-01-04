import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { horizontalDividerVariants } from './HorizontalDivider.variants';

interface VerticalDividerProps
  extends VariantProps<typeof horizontalDividerVariants>,
    ComponentProps<'div'> {}

const HorizontalDivider = ({
  size = 'small',
  className,
  ...props
}: VerticalDividerProps) => {
  return (
    <div
      {...props}
      className={cn(horizontalDividerVariants({ size }), className)}
    />
  );
};

export default HorizontalDivider;
