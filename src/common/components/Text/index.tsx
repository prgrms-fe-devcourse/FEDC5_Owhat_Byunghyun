import { VariantProps } from 'class-variance-authority';
import { ComponentProps, createElement, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { textVariants } from './Text.variants';

export interface TextProps
  extends VariantProps<typeof textVariants>,
    ComponentProps<'div'> {
  children: ReactNode;
  elementType?: 'div' | 'span' | 'p';
}

const Text = ({
  children,
  className,
  size,
  strong,
  decoration,
  elementType = 'div',
  ...props
}: TextProps) => {
  return createElement(
    elementType,
    {
      ...props,
      className: cn(textVariants({ size, strong, decoration }), className),
    },
    children,
  );
};

export default Text;
