import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { getSpacing, groupVariants, TSpacing } from './Group.variants';

export interface GroupProps
  extends ComponentProps<'div'>,
    VariantProps<typeof groupVariants> {
  spacing: TSpacing | number;
}

const Group = ({
  direction = 'rows',
  position = 'left',
  align = 'start',
  inline = false,
  grow = false,
  spacing = 'md',
  noWrap,
  className,
  children,
  ...props
}: GroupProps) => {
  const groupSpacing = getSpacing(spacing);

  return (
    <div
      className={cn(
        className,
        groupVariants({
          direction,
          position,
          align,
          inline,
          noWrap,
          grow: grow && !inline,
        }),
      )}
      style={{ gap: groupSpacing }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Group;
