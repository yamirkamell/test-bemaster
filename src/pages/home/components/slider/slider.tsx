import React, { useState } from 'react';
import BtnSlider from './btn-slider';
import dataSlider from './data-slider';
import { ContainerDots, ContainerSlider, Dot, Slide, SliderImg } from './styled';

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    }
    else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <ContainerSlider>
      {dataSlider.map((obj, index) => {
        return (
          <Slide
            key={obj.id}
            style={slideIndex === index + 1 ? { opacity: 1 } : {}}
          >
            <SliderImg
              src={obj.img}
            />
          </Slide>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <ContainerDots>
        {Array.from({ length: 5 }).map((item, index) => (
          <Dot
            key={index}
            onClick={() => moveDot(index + 1)}
            style={slideIndex === index + 1 ? { background: `rgb(32, 32, 32)` } : {}}
          ></Dot>
        ))}
      </ContainerDots>
    </ContainerSlider>
  );
};

export default Slider;
