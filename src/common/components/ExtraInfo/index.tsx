import { VariantProps } from 'class-variance-authority';
import { Children, ComponentProps, ReactNode } from 'react';
import { ClassNameValue } from 'tailwind-merge';

import { cn } from '~/utils/cn';

import { ExtraInfoVariants } from './ExtraInfo.variants';

export interface TextProps
  extends VariantProps<typeof ExtraInfoVariants>,
    ComponentProps<'div'> {
  children: ReactNode | ReactNode[];
  dividerClassName?: ClassNameValue;
}

const ExtraInfo = ({ className, gap = 1, children }: TextProps) => {
  const childComponents = Children.toArray(children);

  return (
    <ul
      className={cn(
        'flex text-sm font-thin text-gray-300',
        ExtraInfoVariants({ gap }),
        className,
      )}
    >
      {childComponents.map((child, index) => (
        <li key={index} className={cn('flex', ExtraInfoVariants({ gap }))}>
          {child}
          {index < childComponents.length - 1 && <span>·</span>}
        </li>
      ))}
    </ul>
  );
};

export default ExtraInfo;
