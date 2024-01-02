import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '~/utils/cn';

import Icon from '../Icon/index';
import { NavigationBarVariants } from './NavigationBar.variants';

export interface NavigationBarProps
  extends VariantProps<typeof NavigationBarVariants>,
    ComponentProps<'div'> {}

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <div className={cn(NavigationBarVariants(), className)} {...props}>
      <Icon id="home" />
      <Icon id="sms" />
      <Icon id="notifications" />
      <Icon id="account-circle" />
      {/* message 아이콘이 없어서, 임시로 sms 아이콘 사용 */}
    </div>
  );
};

export default NavigationBar;
