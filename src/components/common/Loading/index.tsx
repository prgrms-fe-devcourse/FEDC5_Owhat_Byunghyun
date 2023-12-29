import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { LoadingVariants } from './Loading.variants';

export interface LoadingProps
  extends VariantProps<typeof LoadingVariants>,
    ComponentProps<'div'> {}

const Loading = ({
  loadingSize,
  loadingColor,
  className,
  ...props
}: LoadingProps) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-gray-300',
        LoadingVariants({
          loadingSize,
          loadingColor,
        }),
        className,
      )}
      {...props}
    />
  );
};

export default Loading;
