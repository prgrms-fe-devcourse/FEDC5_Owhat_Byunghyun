import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useRef } from 'react';

import { cn } from '~/utils/cn';

import useObserver from '../../../hooks/useLazyImage';
import { imageVariants } from './Image.variants';

export interface ImageProps
  extends VariantProps<typeof imageVariants>,
    ComponentProps<'img'> {
  lazy?: boolean;
  threshold?: number;
  src: string;
  alt?: string;
  placeholder?: string;
}

const Image = ({
  lazy,
  display,
  threshold = 0.5,
  src,
  placeholder = 'https://via.placeholder.com/200',
  alt,
  mode,
  imgWidth,
  imgHeight,
  className,
  ...props
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded] = useObserver({ lazy, ref: imgRef, threshold });

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      className={cn(
        imageVariants({ imgWidth, imgHeight, mode, display }),
        className,
      )}
      {...props}
    />
  );
};

export default Image;
