import { VariantProps } from 'class-variance-authority';
import { ComponentProps, HTMLAttributes, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { textVariants } from './Text.variants';

type ElementType = 'div' | 'span' | 'p';

type ElementProps = {
  div: HTMLAttributes<HTMLDivElement>;
  span: HTMLAttributes<HTMLSpanElement>;
  p: HTMLAttributes<HTMLParagraphElement>;
};

type TextProps<T extends ElementType> = ElementProps[T] &
  VariantProps<typeof textVariants> & {
    children: ReactNode;
    elementType?: T;
    className?: ComponentProps<typeof cn>;
  };

const Text = ({
  children,
  className,
  size = 'md',
  strong = false,
  decoration = 'none',
  elementType = 'div',
  isLogo = false,
  ...props
}: TextProps<ElementType>) => {
  const Element = elementType;

  return (
    <Element
      {...props}
      className={cn(
        textVariants({ size, strong, decoration, isLogo }),
        className,
      )}
    >
      {children}
    </Element>
  );
};

export default Text;
