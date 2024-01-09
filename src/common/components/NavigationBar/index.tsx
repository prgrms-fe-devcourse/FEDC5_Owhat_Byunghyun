import { ComponentProps } from 'react';
import { NavLink } from 'react-router-dom';

import Group from '../Group';
import Icon from '../Icon';
import { IconName } from '../Icon/type';

export interface NavigationBarProps extends ComponentProps<'nav'> {}

interface NavLinkInfo {
  to: string;
  id: IconName;
  label: string;
}

const navLinks: NavLinkInfo[] = [
  { to: '/', id: 'home', label: '메인' },
  { to: '/search', id: 'search', label: '검색' },
  { to: '/message', id: 'message', label: '메세지' },
  { to: '/notification', id: 'notifications', label: '알림' },
  { to: '/account', id: 'account-circle', label: '유저 정보' },
];

const NavigationBar = () => {
  return (
    <nav>
      <Group
        position="evenly"
        align="center"
        spacing="md"
        className="absolute bottom-0 h-14 w-full rounded border-2 border-primary-lighter bg-primary-lighter"
      >
        {navLinks.map(({ to, id, label }) => (
          <NavLink
            key={id}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'rounded-full bg-primary p-1'
                : 'rounded-full p-1 hover:bg-primary'
            }
          >
            <Icon id={id} aria-label={label} />
          </NavLink>
        ))}
      </Group>
    </nav>
  );
};

export default NavigationBar;
