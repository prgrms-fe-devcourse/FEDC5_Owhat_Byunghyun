import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '~/utils/cn';

import Group from '../Group';
import Icon from '../Icon/index';
import { NavigationBarVariants } from './NavigationBar.variants';

export interface NavigationBarProps
  extends VariantProps<typeof NavigationBarVariants>,
    ComponentProps<'div'> {}

const NavigationBar = ({ ...props }: NavigationBarProps) => {
  return (
    <Group
      position="evenly"
      align="center"
      spacing="md"
      className="absolute bottom-0 h-14 w-full rounded border-2 border-primary-lighter bg-primary-lighter"
      {...props}
    >
      <Link to={'/'} className={cn(NavigationBarVariants())}>
        <Icon id="home" />
      </Link>
      <Link to={'/search'} className={cn(NavigationBarVariants())}>
        <Icon id="search" />
      </Link>
      <Link to={'/message'} className={cn(NavigationBarVariants())}>
        <Icon id="message" />
      </Link>
      <Link to={'/notification'} className={cn(NavigationBarVariants())}>
        <Icon id="notifications" />
      </Link>
      <Link to={'/account'} className={cn(NavigationBarVariants())}>
        <Icon id="account-circle" />
      </Link>
    </Group>
  );
};

export default NavigationBar;
