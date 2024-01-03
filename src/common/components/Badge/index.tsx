import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import {
  badgePositionVariants,
  badgeSizeVariants,
  badgeVariants,
} from './Badge.variants';

interface BadgeProps
  extends VariantProps<typeof badgeVariants>,
    VariantProps<typeof badgeSizeVariants>,
    VariantProps<typeof badgePositionVariants>,
    ComponentProps<'img'> {
  children: React.ReactNode;
  badgeType: 'online' | 'offline' | 'alarm';
  isActive?: boolean;
}

const Badge = ({
  children,
  badgeType,
  isActive,
  corner,
  size,
  className,
  translateX,
  translateY,
  ...props
}: BadgeProps) => {
  const getBadgeStyles = () => {
    switch (badgeType) {
      case 'online':
        return 'bg-success';
      case 'offline':
        return ' bg-gray-700 animate-none';
      case 'alarm':
        return isActive ? 'bg-primary' : 'bg-transparent border-none';
      default:
        return '';
    }
  };

  const badgeStyles = getBadgeStyles();

  return (
    <div className="relative inline-block " {...props}>
      {children}
      <div className={`${cn(badgeVariants({ corner }), className)}`}>
        <span
          className={`${cn(badgePositionVariants({ translateX, translateY }))}`}
        >
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${badgeStyles}`}
          />
          <span
            className={`${cn(
              badgeSizeVariants({ size }),
              'relative inline-flex rounded-full border border-gray-300',
              badgeStyles,
            )}`}
          />
        </span>
      </div>
    </div>
  );
};

export default Badge;
