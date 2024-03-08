import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLogin from './../../assets/login/ic_user.png';
import PasswordLogin from './../../assets/login/ic_pass.png';
import BeMasterLogo from './../../assets/ic_bemaster.png';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import MockUsers from '../../../mocks/api-authenticate/GET.json';
import {
  BackgroundCenter,
  BackgroundSide,
  ContainerBody,
  ContainerCenter,
  ContainerInput,
  ContainerRoot,
  LostPassComponent,
  TitleComponent,
  ErrorText
} from './styled';


interface userTypes {
  id: number
  name: string
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('yamir@test.com');
  const [password, setPassword] = useState('yamir123');
  const [errorAlert, setErrorAlert] = useState(false);

  const LogIn = async () => {
    MockUsers.users.forEach((user: userTypes)  => {
      if (user.email === username && user.password === password) {
        return navigate('/home');
      }
      else {
        setErrorAlert(true);
      }
    });
  }

  return (
    <ContainerRoot>
      <BackgroundSide />
      <BackgroundCenter />
      <ContainerCenter>
        <img src={BeMasterLogo} alt='logo'/>
        <ContainerBody>
          <TitleComponent> Inicia sesión</TitleComponent>
          <ContainerInput>
            <InputComponent placeholder='Usuario' type='text' img={UserLogin} name={username} setName={setUsername} />
            <InputComponent placeholder='Contraseña' type='password' img={PasswordLogin} name={password} setName={setPassword} />
          </ContainerInput>
          {errorAlert !== false ? <ErrorText>Usuario o Contraseña invalida</ErrorText>
            : null}
          <LostPassComponent> ¿Olvidaste tu contraseña?</LostPassComponent>
        </ContainerBody>
        <ButtonComponent title='Iniciar sesión ' press={LogIn} />
      </ContainerCenter>
      <BackgroundSide />
    </ContainerRoot>
  )
};

export default Login;