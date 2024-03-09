import styled from 'styled-components';

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
`

const ContainerCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  height: 150px;
  box-shadow: 0px 0px 10px #4bffff;
  #img{
    display: none;
  }
  &:hover{
    cursor: pointer;
    #name{
      display: none;
    }
    #img{
      display: block;
    }
  }
`;

const TextComponent = styled.span`
  font-size: 40px;  
  color: #ffff;
  text-shadow: 1px 1px 5px #4bffff;
`;

const ImgComponent = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export {
    ContainerMain, 
    ContainerCategories,
    TextComponent,
    ImgComponent
};
    