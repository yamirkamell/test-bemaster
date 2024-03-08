import React from 'react';
import { Button, ContainerComponent, } from './styled';

interface buttonTypes {
  title: string
  press: () => Promise<void>
}

const ButtonComponent = (props: buttonTypes) => {
  const { title, press } = props;

  return (
    <ContainerComponent>
      <Button onClick={() => { press() }}> {title} </Button>
    </ContainerComponent>
  )
};

export default ButtonComponent;