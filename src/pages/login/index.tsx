import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLogin from './../../assets/login/ic_user.png';
import PasswordLogin from './../../assets/login/ic_pass.png';
import BeMasterLogo from './../../assets/ic_bemaster.png';
import InputComponent from './components/inputComponent';
import ButtonComponent from './components/buttonComponent';
import MockUsers from '../../mocks/api-authenticate/GET.json';
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
import { resources, retuResource } from '../../_data/resources';

interface userTypes {
  id: number
  name: string
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
          <TitleComponent> {retuResource(resources._login_label)}</TitleComponent>
          <ContainerInput>
            <InputComponent placeholder={retuResource(resources._user_label)} type='text' img={UserLogin} name={username} setName={setUsername} />
            <InputComponent placeholder={retuResource(resources._password_label)} type='password' img={PasswordLogin} name={password} setName={setPassword} />
          </ContainerInput>
          {errorAlert !== false ? <ErrorText>{retuResource(resources._validate_login_label)}</ErrorText>
            : null}
          <LostPassComponent> {retuResource(resources._lost_password_label)}</LostPassComponent>
        </ContainerBody>
        <ButtonComponent title={retuResource(resources._login_label)} press={LogIn} />
      </ContainerCenter>
      <BackgroundSide />
    </ContainerRoot>
  )
};

export default Login;