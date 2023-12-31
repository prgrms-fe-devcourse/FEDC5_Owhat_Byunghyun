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
  size = 'md',
  strong = false,
  decoration = 'none',
  elementType = 'div',
  isLogo = false,
  ...props
}: TextProps) => {
  return createElement(
    elementType,
    {
      ...props,
      className: cn(
        textVariants({ size, strong, decoration, isLogo }),
        className,
      ),
    },
    children,
  );
};

export default Text;
