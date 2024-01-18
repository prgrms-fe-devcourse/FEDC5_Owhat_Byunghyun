import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useEffect, useState } from 'react';

import DEFAULT_IMAGE from '~/assets/images/default_profile.webp';
import ImageComponent from '~/common/components/Image';
import { cn } from '~/utils/cn';

import { avatarVariants } from './Avatar.varients';

export interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    ComponentProps<'div'> {
  src?: string;
  size?: 'small' | 'halfFull' | 'full' | 'screen' | 'auto';
  alt?: string;
  placeholder?: string;
}

const Avatar = ({
  src = DEFAULT_IMAGE,
  size = 'full',
  shape = 'circle',
  alt = '아바타 이미지',
  placeholder = 'https://via.placeholder.com/200',
  className,
  ...props
}: AvatarProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div className={cn(avatarVariants({ shape }), className)} {...props}>
      <ImageComponent
        lazy={true}
        imgWidth={size}
        imgHeight={size}
        src={src}
        alt={alt}
        placeholder={placeholder}
        draggable="false"
        className={`${
          loaded ? 'opacity-100' : 'opacity-0'
        } select-none transition-opacity duration-200 ease-out`}
      />
    </div>
  );
};

export default Avatar;
