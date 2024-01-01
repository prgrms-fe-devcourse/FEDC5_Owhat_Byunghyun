import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useEffect, useState } from 'react';

import ImageComponent from '~/common/components/Image';
import { cn } from '~/utils/cn';

import { avatarVariants } from './Avatar.varients';

export interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    ComponentProps<'div'> {
  src: string;
  size?: 'small' | 'halfFull' | 'full' | 'screen' | 'auto';
  alt?: string;
  placeholder?: string;
  lazy?: boolean;
  threshold?: number;
  display?: 'block' | 'inlineBlock';
}

const Avatar = ({
  display = 'block',
  lazy = false,
  threshold = 0.5,
  src,
  size = 'small',
  shape = 'circle',
  alt = '이미지',
  placeholder = 'https://via.placeholder.com/200',
  className,
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  });

  return (
    <div className={cn(avatarVariants({ shape }), className)} {...props}>
      <ImageComponent
        display={display}
        lazy={lazy}
        threshold={threshold}
        imgWidth={size}
        imgHeight={size}
        src={src}
        alt={alt}
        placeholder={placeholder}
        className={`${
          loaded ? 'opacity-100' : 'opacity-0'
        } select-none transition-opacity duration-200 ease-out`}
      />
    </div>
  );
};

export default Avatar;
