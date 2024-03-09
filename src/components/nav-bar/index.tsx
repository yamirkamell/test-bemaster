import React from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { ContainerMain, ContainerMobile, ContainerSubHeader, Divider, LogoApp, Menu, TextComponent } from './styled';
import BeMasterIcon from '../../assets/ic_bemaster.png';

const links = [
  {
    label: 'home',
    route: '/'
  }, 
  {
    label: 'INICIO',
    route: 'home'
  }, 
  {
    label: 'CATEGORIAS',
    route: 'content-category'
  }, 
  {
    label: 'PELICULAS',
    route: 'aboutUs'
  }
]

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleRedirectUrl = (url: string) => {
    navigate(url);
  }

  return (
    <ContainerMain>
      <ContainerMobile>
        <LogoApp>
          <img src={BeMasterIcon} alt='metaImg' style={{height: 45}} />
        </LogoApp>
      </ContainerMobile>

      <ContainerSubHeader>
        <LogoApp>
          <img src={BeMasterIcon} alt='metaImg' style={{height: 45}}/>
        </LogoApp>
        <Menu>
          { links.map(({ label, route }) => (
            <div key={route} onClick={()=>{HandleRedirectUrl(`/${route}`)}} 
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
              { label !== 'home' ?
                <>
                  <TextComponent>
                    {label}
                  </TextComponent>
                  { location.pathname === `/${route}`
                    ? <Divider></Divider>
                    : null
                  }
                </>
                : null
              }
            </div>
          ))}
        </Menu>
      </ContainerSubHeader>
  </ContainerMain >
  );
};

export default NavBar;
