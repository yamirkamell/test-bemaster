import styled from 'styled-components';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
`
  
const ContainerSubHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    opacity: 1;
    width: 100%;
    background-color: #4bffff;
    background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
    @media (max-width: 720px) {
        display: none;
    }
`
  
const SubMenu = styled.div`
    flex: .4;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 720px) {
        display:none;
    }
`
  
const LogoApp = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 10px;
    @media (max-width: 720px) {
        display:flex;
        justify-content: center;
        margin-top: 10px;
        width: 90%;
    }
`
  
const Menu = styled.div`
    flex: .8;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
  
const Divider = styled.div`
    border-top: solid #ffff;
    width: 50px;
    margin-top: 5px;
    box-shadow: 1px 1px 5px #4bffff;
`
  
const ContainerMobile = styled.div`
    display: none;
    @media (max-width: 720px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 75px;
        background-color: #4bffff;
        background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
        width: 100%;
    }
`

const TextComponent = styled.h1`
    font-size: 12px; 
    font-weight: 600; 
    color: #ffff;
    text-shadow: 1px 1px 5px #4bffff;
`;

export {
    ContainerMain, 
    ContainerSubHeader,
    SubMenu,
    LogoApp, 
    Menu, 
    Divider,
    ContainerMobile,
    TextComponent,
  };
  