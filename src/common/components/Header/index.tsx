import { ReactNode } from 'react';

import Logo from '../Logo';

export interface HeaderProps {
  title?: ReactNode;
  left: ReactNode;
  right: ReactNode;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className="relative mb w-full border-b py text-center">
      <div className="absolute left-0 top-1/2 w-max max-w-16 -translate-y-1/2 overflow-hidden text-ellipsis text-nowrap">
        {left}
      </div>
      {title ? <b>{title}</b> : <Logo />}
      <div className="absolute right-0 top-1/2 w-max max-w-16 -translate-y-1/2 overflow-hidden text-ellipsis text-nowrap">
        {right}
      </div>
    </header>
  );
};

export default Header;
