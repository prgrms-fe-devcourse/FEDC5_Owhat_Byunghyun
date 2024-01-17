import { VariantProps } from 'class-variance-authority';
import { Children, ComponentProps, ReactNode } from 'react';

import { cn } from '~/utils/cn';

import { extraInfoVariants } from './ExtraInfo.variants';

export interface TextProps
  extends VariantProps<typeof extraInfoVariants>,
    ComponentProps<'ul'> {
  children: ReactNode | ReactNode[];
}

const ExtraInfo = ({ className, gap = 1, children, ...props }: TextProps) => {
  const childComponents = Children.toArray(children);

  return (
    <ul className={cn(extraInfoVariants({ gap }), className)} {...props}>
      {childComponents.map((child, index) => (
        <li
          key={index}
          className={cn(
            extraInfoVariants({ gap }),
            'items-center align-middle text-base-small ',
          )}
        >
          {child}
          {index < childComponents.length - 1 && <span>·</span>}
        </li>
      ))}
    </ul>
  );
};

export default ExtraInfo;
