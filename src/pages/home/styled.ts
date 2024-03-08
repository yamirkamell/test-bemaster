import styled from 'styled-components';

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
`

const ContainerCategories = styled.div`
  border-radius: 8px;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 30px red;
`;


export {
    ContainerMain, 
    ContainerCategories,
};
    