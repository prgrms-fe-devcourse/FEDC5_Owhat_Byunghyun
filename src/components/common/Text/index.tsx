import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { TextVariants } from './Text.variants';

export interface TextProps
  extends VariantProps<typeof TextVariants>,
    ComponentProps<'div'> {
  children: ReactNode;
  color?:
    | 'primary'
    | 'success'
    | 'error'
    | 'online'
    | 'white'
    | 'black'
    | 'lightGray'
    | 'gray';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  strong?: boolean;
  decoration?: 'none' | 'underline' | 'lineThrough' | 'overline';
}

const Text = ({
  children,
  className,
  color,
  size,
  strong,
  decoration,
}: TextProps) => {
  return (
    <div
      className={cn(
        TextVariants({ color, size, strong, decoration }),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Text;
