import { ReactNode } from 'react';

import Logo from '../Logo';

export interface HeaderProps {
  title?: ReactNode;
  left: ReactNode;
  right: ReactNode;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className="mb grid h-14 w-full grid-cols-[1fr,4fr,1fr] items-center border-b text-center">
      <span className="justify-self-start">{left}</span>
      {title !== 'Owhat!' ? <b>{title}</b> : <Logo />}
      <span className="justify-self-end">{right}</span>
    </header>
  );
};

export default Header;
