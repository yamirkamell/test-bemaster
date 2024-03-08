import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: -5px;
`;

const Button = styled.button`
  height: 50px;
  margin-left: 10px;
  border-width: 0px;
  background-color: #4bffff;
  border-radius: 25px;  
  background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
  color: white;
  width: 22vw;
  @media (max-width: 940px) {
    width: 30vw;
  }
  @media (max-width: 475px) {
    width: 70vw;
  }
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    }
`;

export {
  ContainerComponent,
  Button  
};