import { VariantProps } from 'class-variance-authority';
import { ComponentProps, useEffect, useState } from 'react';

import ImageComponent from '~/common/components/Image';
import { cn } from '~/utils/cn';

import { avatarVariants } from './Avatar.varients';

const DEFAULT_AVATAR =
  'https://media.istockphoto.com/id/1223671392/ko/%EB%B2%A1%ED%84%B0/%EA%B8%B0%EB%B3%B8-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%95%84%EB%B0%94%ED%83%80-%EC%82%AC%EC%A7%84-%EC%9E%90%EB%A6%AC-%ED%91%9C%EC%8B%9C%EC%9E%90-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8%EB%A0%88%EC%9D%B4%EC%85%98.jpg?s=612x612&w=0&k=20&c=Z1Yi41x1bDPNjBG5KAn51ZRFfslI4Pz01BOqaRjuzRk=';

export interface AvatarProps
  extends VariantProps<typeof avatarVariants>,
    ComponentProps<'div'> {
  src?: string;
  size?: 'small' | 'halfFull' | 'full' | 'screen' | 'auto';
  alt?: string;
  placeholder?: string;
}

const Avatar = ({
  src = DEFAULT_AVATAR,
  size = 'small',
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
        className={`${
          loaded ? 'opacity-100' : 'opacity-0'
        } select-none transition-opacity duration-200 ease-out`}
      />
    </div>
  );
};

export default Avatar;
