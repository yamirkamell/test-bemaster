import styled from "styled-components";

const ContainerTitle = styled.div<{$img: string}>`
  background: top / cover no-repeat url(${props => props.$img});
  height: 200px;
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const TitleComponent = styled.span`
  font-size: 52px;  
  color: #ffff;
  text-shadow: 1px 1px 5px black;
`;

const ContainerBody = styled.div`
  margin-top: 15px; 
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  color: #101828;
`;
const SubTitleComponent = styled.h2`
  font-size: 22px;  
  color: #ffff;
  text-shadow: 1px 1px 5px #4bffff;
`;

const ContainerMoviesScroll = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; 
  gap: 32px;
  padding: 5px;
  overflow-x: scroll; 
  overflow-y: hidden;
  scrollbar-color: #ffff transparent;
  scrollbar-width: thin;
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: red;
  }
  ::-webkit-scrollbar {
    width: 4px; 
    height: 4px; 
  }
`

const ContainerMovies = styled.div<{$img?: string}>`
  background-image: url(${props => props.$img});
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  width: 260px;
  height: 150px;
  padding: 10px;
  box-shadow: 0px 0px 10px #4bffff;
  #name{
    display: none;
  }
  &:hover{
    cursor: pointer;
    #name{
      display: block;
    }
  }
`;

const TextComponentMovie = styled.span`
  font-size: 22px;  
  color: #4bffff;
  text-shadow: 1px 1px 5px black;
`;

export {
  ContainerTitle,
  TitleComponent,
  ContainerBody,
  SubTitleComponent,
  ContainerMoviesScroll,
  ContainerMovies,
  TextComponentMovie
};