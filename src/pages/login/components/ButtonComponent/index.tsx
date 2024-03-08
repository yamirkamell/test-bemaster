import React from 'react';
import { Button, ContainerComponent, } from './styled';

const ButtonComponent = (props: any) => {
  const { title, press } = props;

  return (
    <ContainerComponent>
      <Button onClick={() => { press() }}> {title} </Button>
    </ContainerComponent>
  )
};

export default ButtonComponent;