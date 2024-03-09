import styled from "styled-components";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


const ContainerSlider = styled.div`
  height: 300px;
  margin: 0px auto 50px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 700px){
    height: 200px;
    .container-slider {
      margin: 100px 10px 0;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
`;

const SliderImg = styled.img`
  width: 100%;
  height: auto;
`;

const BtnSlide = styled.div`
  
  border-radius: 50%;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const BtnLeft = styled(BsArrowLeftCircleFill)`
  width: 35px;
  height: 35px;
  color: #f1f1f1;
  opacity: 0.7;
  pointer-events: none;
`;

const BtnRight = styled(BsArrowRightCircleFill)`
  width: 35px;
  height: 35px;
  color: #f1f1f1;
  opacity: 0.7;
  pointer-events: none;
`;

const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid #f1f1f1;
  margin: 0 5px;
  background: #f1f1f1;
`;


export {
  ContainerSlider,
  Slide,
  SliderImg,
  BtnSlide,
  BtnLeft,
  BtnRight,
  ContainerDots,
  Dot,
};