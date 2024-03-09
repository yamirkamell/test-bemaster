import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: 10px;
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #ffff;  
  box-shadow: 1px 1px 5px #4bffff;
  padding: 0 0 0 15px;
  border-radius: 25px;    
`;

const Input = styled.input`
  color: #ffff;
  text-shadow: 1px 1px 5px #4bffff;
  background-color: transparent;
  border: 0;
  outline: none;
  width:  20vw;
  @media (max-width: 940px) {
    width: 30vw;
  }
  @media (max-width: 475px) {
    width: 70vw;
  } 
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  background-color: #ffff;
  width: 15%;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px; 
`;


export {
  ContainerComponent,
  ContainerIcon,
  Input,
  Icon

};