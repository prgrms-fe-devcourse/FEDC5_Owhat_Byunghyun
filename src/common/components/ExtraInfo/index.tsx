import { Children, ComponentProps, ReactNode } from 'react';

import { cn } from '~/utils/cn';

export interface TextProps extends ComponentProps<'div'> {
  children: ReactNode | ReactNode[];
}

const ExtraInfo = ({ className, children }: TextProps) => {
  const childComponents = Children.toArray(children);

  return (
    <ul className={cn('flex text-sm font-thin text-gray-300', className)}>
      {childComponents.map((child, index) => (
        <li key={index}>
          {child}
          {index < childComponents.length - 1 && (
            <span className="mx-1">·</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ExtraInfo;
