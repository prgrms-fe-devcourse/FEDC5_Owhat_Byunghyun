import { ComponentProps } from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../Avatar';
import Badge from '../Badge';
import Group from '../Group';
import Icon from '../Icon';
import { IconName } from '../Icon/type';

export interface NavigationBarProps extends ComponentProps<'nav'> {
  myProfile: string | undefined;
  isAlarm: boolean;
  isLogin: boolean;
}

interface NavLinkInfo {
  to: string;
  id: IconName;
  label: string;
  img?: string;
}

const navLinks: NavLinkInfo[] = [
  { to: '/', id: 'home', label: '메인' },
  { to: '/search', id: 'search', label: '검색' },
  { to: '/message', id: 'message', label: '메세지' },
  { to: '/notification', id: 'notifications', label: '알림' },
  { to: '/account', id: 'account-circle', label: '유저 정보', img: '' },
];

const NavigationBar = ({ myProfile, isAlarm, isLogin }: NavigationBarProps) => {
  const userNavLink = navLinks.find(link => link.id === 'account-circle');
  if (userNavLink) {
    userNavLink.img = myProfile;
  }

  return (
    <nav className="fixed bottom-0 w-full max-w-layout -translate-x">
      <Group
        position="evenly"
        align="center"
        spacing="md"
        className="h-14 rounded rounded-b-none border-2 border-primary-lighter bg-primary-lighter"
      >
        {navLinks.map(({ to, id, label, img }) => (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'rounded-full bg-primary fill-white p-1'
                : 'group rounded-full fill-white p-1 hover:bg-primary'
            }
          >
            {isLogin && label === '유저 정보' ? (
              <div className="h-6 w-6 group-hover:opacity-70">
                <Avatar src={img} size="full" className="h-6 w-6" />
              </div>
            ) : isAlarm && label === '알림' ? (
              <div className="h-6 w-6">
                <Badge
                  isActive={isAlarm}
                  badgeType="alarm"
                  corner="top-right"
                  size="xsmall"
                >
                  <Icon id={id} aria-label={label} />
                </Badge>
              </div>
            ) : (
              <Icon id={id} aria-label={label} />
            )}
          </NavLink>
        ))}
      </Group>
    </nav>
  );
};

export default NavigationBar;
