import styled from "styled-components";

const ContainerTitle = styled.div<{$img: string}>`
    background: top / cover no-repeat url(${props => props.$img});
    height: 85vh;
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
    margin: -40px 0px 0px 0px;

`;

const TitleComponent = styled.span`
    font-size: 52px;  
    color: #ffff;
    text-shadow: 1px 1px 5px black;
    padding: 5px 20px;
`;

const Divider = styled.hr`
    width: 97%;
    box-shadow: 1px 1px 5px black;
`;

const SubTitleComponent = styled.span`
    font-size: 25px;  
    color: #ffff;
    text-shadow: 1px 1px 5px black;
    padding: 5px 20px;
`;

const DescriptionComponent = styled.span`
    font-size: 22px;  
    color: #ffff;
    text-shadow: 1px 1px 5px black;
    padding: 5px 40px;
    text-align: justify;
`;
export {
  ContainerTitle,
  TitleComponent,
  Divider,
  SubTitleComponent,
  DescriptionComponent
};