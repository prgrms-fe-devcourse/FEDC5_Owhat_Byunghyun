import { ComponentProps } from 'react';

import IconSprite from '~/assets/icon-sprite.svg';

import { IconName } from './type';

interface IconProps
  extends Omit<ComponentProps<'svg'>, 'id' | 'width' | 'height'> {
  id: IconName;
  size?: number;
}

export default function Icon({ id, size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`${IconSprite}#icon-${id}`} />
    </svg>
  );
}
