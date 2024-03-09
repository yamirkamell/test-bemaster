import { BtnSlide, BtnLeft, BtnRight } from "./styled";

interface Props {
  direction: string
  moveSlide(): void
}

const BtnSlider = ({ direction, moveSlide }: Props) => {

  return (
    <BtnSlide
      onClick={moveSlide}
      style={direction === "next" ? { top: '50%', right: 20, transform: `translate-y(-60%)` } : { top: '50%', left: 20, transform: `translate-y(-60%)` }}
    >
      {direction === "next" ? <BtnRight /> : <BtnLeft />}
    </BtnSlide>
  );
};

export default BtnSlider;
