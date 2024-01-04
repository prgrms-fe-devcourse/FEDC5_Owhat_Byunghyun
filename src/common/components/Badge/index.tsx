import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import { badgeVariants } from './Badge.variants';

interface BadgeProps
  extends VariantProps<typeof badgeVariants>,
    ComponentProps<'img'> {
  children: React.ReactNode;
  isActive?: boolean;
}

const Badge = ({
  children,
  badgeType,
  isActive = true,
  corner,
  size,
  className,
  ...props
}: BadgeProps) => {
  return (
    <div className="relative inline-block" {...props}>
      {children}
      {isActive === true && (
        <span
          className={cn(badgeVariants({ corner, badgeType, size }), className)}
        >
          {badgeType === 'alarm' && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full" />
          )}

          <span className="relative inline-flex rounded-full border border-white" />
        </span>
      )}
    </div>
  );
};

export default Badge;
