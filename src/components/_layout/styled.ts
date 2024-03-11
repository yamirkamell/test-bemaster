import styled from 'styled-components';
import { TbArrowBack } from "react-icons/tb";

const ContainerMain = styled.div`
    padding: 120px 40px 20px 40px;
`

const IconComponent = styled(TbArrowBack)`
    position: absolute;
    top: 90px;
    left: 10px;
    color: #ffff;
    font-size: 25px;
    cursor: pointer;
` 
export {
    ContainerMain, 
    IconComponent
  };
  