import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '~/utils/cn';

import Group from '../Group';
import Icon from '../Icon';
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
        <Icon id="home" aria-label="메인" />
      </Link>
      <Link to={'/search'} className={cn(NavigationBarVariants())}>
        <Icon id="search" aria-label="검색" />
      </Link>
      <Link to={'/message'} className={cn(NavigationBarVariants())}>
        <Icon id="message" aria-label="메세지" />
      </Link>
      <Link to={'/notification'} className={cn(NavigationBarVariants())}>
        <Icon id="notifications" aria-label="알림" />
      </Link>
      <Link to={'/account'} className={cn(NavigationBarVariants())}>
        <Icon id="account-circle" aria-label="유저 정보" />
      </Link>
    </Group>
  );
};

export default NavigationBar;
