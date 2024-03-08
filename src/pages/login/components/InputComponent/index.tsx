import { ContainerComponent, ContainerIcon, Input, Icon } from './styled';

const InputComponent = (props : any) => {
  const { placeholder, type, img, name, setName } = props;

  return (
    <ContainerComponent>
      <Input placeholder={placeholder} type={type} value={name} onChange={event => setName(event.target.value)} />
      <ContainerIcon>
        <Icon src={img} />
      </ContainerIcon>
    </ContainerComponent>
  )
};

export default InputComponent;