import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useRef } from 'react';

import useLazyImage from '~/common/hooks/useLazyImage';
import { cn } from '~/utils/cn';

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
  lazy = false,
  display,
  threshold = 0.5,
  src,
  placeholder = 'https://via.placeholder.com/200',
  alt = '이미지',
  mode,
  imgWidth,
  imgHeight,
  className,
  ...props
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded] = useLazyImage({ lazy, ref: imgRef, threshold });

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
