import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useEffect, useRef, useState } from 'react';

import { cn } from '~/utils/cn';

import { ImageVariants } from './Image.variants';

let observer = null;

const LOAD_IMG_EVENT_TYPE = 'loadImage';

const onIntersecrtion: IntersectionObserverCallback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

export interface ImageProps
  extends VariantProps<typeof ImageVariants>,
    ComponentProps<'img'> {
  lazy?: boolean;
  threshold?: number;
  display: 'block' | 'inlineBlock';
  src: string;
  alt?: string;
  placeholder: string;
  mode: 'cover' | 'fill' | 'contain';
  className?: string;
  width?:
    | 'small'
    | 'medium'
    | 'large'
    | 'halfFull'
    | 'full'
    | 'screen'
    | 'auto';
  height?:
    | 'small'
    | 'medium'
    | 'large'
    | 'halfFull'
    | 'full'
    | 'screen'
    | 'auto';
}

const Image = ({
  lazy,
  display,
  threshold = 0.5,
  src,
  placeholder,
  alt,
  mode,
  width,
  height,
  className,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);
    const imgElement = imgRef.current;
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;
    observer = new IntersectionObserver(onIntersecrtion, { threshold });

    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);
  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      className={cn(ImageVariants({ width, height, mode, display }), className)}
      {...props}
    />
  );
};

export default Image;
