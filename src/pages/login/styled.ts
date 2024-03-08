import styled from 'styled-components';

const BackgroundCenter = styled.div`
  position: relative;
  width: 85vw;
  height: 100vh;
  border-radius: 0 50% / 0 100%;
  background: #191c26; 
  @media (max-width: 915px) {
    width: 100vw;;
    border-radius: 0 50% / 0 20%;
  }
`
const BackgroundSide = styled.div` 
  flex:  .5;
`;

const ContainerBody = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

const ContainerCenter = styled.div`
  flex: 2; 
  height: 80vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly; 
  align-items: center;
  position: absolute; 
`;

const ContainerInput = styled.div`
  margin-top: 15px;
`;

const ContainerRoot = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center;
  background-color: #4bffff;
  background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
  width: 100%;
  height: 100vh;
  
`;

const ErrorText = styled.h5`
  color: red;  
`;

const LostPassComponent = styled.h5`
  color: #ffff;
  text-shadow: 1px 1px 5px #4bffff;
`;

const TitleComponent = styled.h1`
  color: #ffff;
  text-shadow: 1px 1px 5px #4bffff;
`;

export {
  BackgroundCenter, 
  BackgroundSide,
  ContainerBody,
  ContainerCenter, 
  ContainerInput, 
  ContainerRoot,
  ErrorText, 
  LostPassComponent,
  TitleComponent
};
    