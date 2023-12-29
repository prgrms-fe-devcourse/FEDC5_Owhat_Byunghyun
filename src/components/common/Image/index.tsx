import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, useRef } from 'react';

import { cn } from '~/utils/cn';

import useObserver from '../../../hooks/useObserver';
import { imageVariants } from './Image.variants';

export interface ImageProps
  extends VariantProps<typeof imageVariants>,
    HTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  threshold?: number;
  imgSrc: string;
  imgAlt?: string;
  placeholder?: string;
  className?: string;
}

const Image = ({
  lazy,
  display,
  threshold = 0.5,
  imgSrc,
  placeholder = 'https://via.placeholder.com/200',
  imgAlt,
  mode,
  width,
  height,
  className,
  ...props
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded] = useObserver({ lazy, ref: imgRef, threshold });

  return (
    <img
      ref={imgRef}
      src={loaded ? imgSrc : placeholder}
      alt={imgAlt}
      className={cn(imageVariants({ width, height, mode, display }), className)}
      {...props}
    />
  );
};

export default Image;
