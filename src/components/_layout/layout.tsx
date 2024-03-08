import React, { FC } from 'react';
import NavBar from '../nav-bar';

interface Props {
  children: JSX.Element,
}

const Layout: FC<Props> = ({ children }: Props): React.ReactElement => {

  return (
    <>
      <NavBar/>
      <main>{children}</main>
    </>
  );
};

export default Layout;

