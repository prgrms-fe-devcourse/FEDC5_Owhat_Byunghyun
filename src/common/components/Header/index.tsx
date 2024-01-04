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
      <div className="absolute left-0 top-1/2 -translate-y-1/2">{left}</div>
      {title ? <b>{title}</b> : <Logo />}
      <div className="absolute right-0 top-1/2 -translate-y-1/2">{right}</div>
    </header>
  );
};

export default Header;
