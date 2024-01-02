import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '~/utils/cn';

import Icon from '../Icon/index';
import { NavigationBarVariants } from './NavigationBar.variants';

export interface NavigationBarProps
  extends VariantProps<typeof NavigationBarVariants>,
    ComponentProps<'div'> {}

const NavigationBar = ({ className, ...props }: NavigationBarProps) => {
  return (
    <div className={cn(NavigationBarVariants(), className)} {...props}>
      <Link to={'/'}>
        <Icon id="home" />
      </Link>
      <Link to={'/message'}>
        <Icon id="message" />
      </Link>
      <Link to={'/notification'}>
        <Icon id="notifications" />
      </Link>
      <Link to={'/account'}>
        <Icon id="account-circle" />
      </Link>
    </div>
  );
};

export default NavigationBar;
