import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { textVariants } from './Text.variants';

export interface TextProps
  extends VariantProps<typeof textVariants>,
    ComponentProps<'div'> {
  children: ReactNode;
}

const Text = ({
  children,
  className,
  size,
  strong,
  decoration,
  ...props
}: TextProps) => {
  return (
    <div
      {...props}
      className={cn(textVariants({ size, strong, decoration }), className)}
    >
      {children}
    </div>
  );
};

export default Text;
