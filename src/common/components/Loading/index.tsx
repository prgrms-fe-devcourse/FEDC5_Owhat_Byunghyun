import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { LoadingVariants } from './Loading.variants';

export interface LoadingProps
  extends VariantProps<typeof LoadingVariants>,
    ComponentProps<'div'> {}

const Loading = ({ size, className, ...props }: LoadingProps) => {
  return (
    <div
      className={cn(
        LoadingVariants({
          size,
        }),
        className,
      )}
      {...props}
    />
  );
};

export default Loading;
