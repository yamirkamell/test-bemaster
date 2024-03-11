import styled from 'styled-components';
import { FiLogOut } from "react-icons/fi";

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
        justify-content: space-between;
    }
`
    
const LogoApp = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 10px;
    @media (max-width: 720px) {
        display:flex;
        padding-left: 20px;
    }
`
  
const Menu = styled.div`
    flex: .8;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 720px) {
        display:none;
    }
`

const ContainerLogOut = styled.div`
    margin: 0 5%; 
    display: flex; 
    align-items: center;
    &:hover {
        opacity: 0.5;
        cursor: pointer;    
        }
`;

const IconComponent = styled(FiLogOut)`
    color: #ffff; 
    margin: 3px 10px 0 0; 
    font-size: 20px;
    padding-right: 10px;
    text-shadow: 1px 1px 5px #4bffff;

`;

const LogOutComponent = styled.span`
    color: #ffff;
    text-shadow: 1px 1px 5px #4bffff;
    @media (max-width: 720px) {
        display: none;
    } 
`;

const Divider = styled.div`
    border-top: solid #ffff;
    width: 50px;
    margin-top: 5px;
    box-shadow: 1px 1px 5px #4bffff;
`
  
const TextComponent = styled.h1`
    font-size: 12px; 
    font-weight: 600; 
    color: #ffff;
    text-shadow: 1px 1px 5px #4bffff;
    cursor: pointer;
`;

export {
    ContainerMain, 
    ContainerSubHeader,
    LogoApp, 
    Menu, 
    ContainerLogOut,
    IconComponent,
    LogOutComponent,
    Divider,
    TextComponent,
  };
  