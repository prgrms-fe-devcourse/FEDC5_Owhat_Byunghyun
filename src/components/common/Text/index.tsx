import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { TextVariants } from './Text.variants';

export interface TextProps
  extends VariantProps<typeof TextVariants>,
    ComponentProps<'div'> {
  children: ReactNode;
}

const Text = ({
  children,
  className,
  fontColor,
  fontSize,
  strong,
  decoration,
}: TextProps) => {
  return (
    <div
      className={cn(
        TextVariants({ fontColor, fontSize, strong, decoration }),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Text;
