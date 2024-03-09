import React, { FC } from 'react';
import NavBar from '../nav-bar';
import { ContainerMain } from './styled';

interface Props {
  children: JSX.Element,
}

const Layout: FC<Props> = ({ children }: Props): React.ReactElement => {

  return (
    <>
      <NavBar/>
      <ContainerMain>{children}</ContainerMain>
    </>
  );
};

export default Layout;

