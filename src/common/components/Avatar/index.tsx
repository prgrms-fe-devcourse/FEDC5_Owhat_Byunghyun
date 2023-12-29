import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useEffect, useState } from 'react';

import { IconName } from '~/common/components/Icon/type';
import ImageComponent from '~/common/components/Image';
import { cn } from '~/utils/cn';

import Icon from '../Icon';
import { avatarVariants } from './Avatar.varients';

export interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    ComponentProps<'div'> {
  src: string;
  imgSize?: 'small' | 'halfFull' | 'full' | 'screen' | 'auto';
  alt?: string;
  placeholder?: string;
  lazy?: boolean;
  mode?: 'cover' | 'fill' | 'contain';
  threshold?: number;
  display?: 'block' | 'inlineBlock';
  AvatarType: 'svg' | 'img';
  svgId?: IconName;
  svgSize?: number;
}

const Avatar = ({
  AvatarType = 'img',
  display = 'block',
  lazy = false,
  threshold = 0.5,
  src,
  imgSize = 'small',
  shape = 'circle',
  alt = '이미지',
  placeholder = 'https://via.placeholder.com/200',
  mode = 'cover',
  svgId = 'home',
  svgSize,
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
      {AvatarType === 'img' ? (
        <ImageComponent
          display={display}
          lazy={lazy}
          threshold={threshold}
          imgWidth={imgSize}
          imgHeight={imgSize}
          src={src}
          alt={alt}
          mode={mode}
          placeholder={placeholder}
          className={`${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : (
        <Icon id={svgId} size={svgSize}></Icon>
      )}
    </div>
  );
};

export default Avatar;
