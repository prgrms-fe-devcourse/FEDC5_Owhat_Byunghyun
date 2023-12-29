import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { LoadingVariants } from './Loading.variants';

export interface LoadingProps
  extends VariantProps<typeof LoadingVariants>,
    ComponentProps<'div'> {}

const Loading = ({
  loadingSize,
  loadingBorder,
  loadingBorderColor,
  loadingColor,
  className,
  ...props
}: LoadingProps) => {
  return (
    <div
      className={cn(
        'animate-spin rounded-full',
        LoadingVariants({
          loadingSize,
          loadingBorder,
          loadingBorderColor,
          loadingColor,
        }),
        className,
      )}
      {...props}
    />
  );
};

export default Loading;
