import { ContainerComponent, ContainerIcon, Icon, Input } from "./styled"

interface inputTypes {
  placeholder: string
  type: string
  img: string
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

const InputComponent = (props : inputTypes) => {
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