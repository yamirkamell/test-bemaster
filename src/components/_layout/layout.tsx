import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../nav-bar';
import { ContainerMain, IconComponent } from './styled';

interface Props {
  children: JSX.Element,
}

const Layout: FC<Props> = ({ children }: Props): React.ReactElement => {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <NavBar/>
      {location.pathname !== '/home'
        ? <IconComponent onClick={() => {navigate(-1)}}/>
        : null
      }
      <ContainerMain>{children}</ContainerMain>
    </>
  );
};

export default Layout;

