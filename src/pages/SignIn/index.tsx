import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api'

// styled components
import {
  Container,
  ColumnCentered,
  LinkComponent,
  Title,
  RowBetween,
  RowCentered,
  AuthForm,
  RowEnd,
} from '../../styles';

// components
import ButtonComponent from '../../components/Button';
import InputTextComponent from '../../components/InputText';
import LogoComponent from '../../components/Logo';

// interfaces
import { User } from '../../interfaces/user.interface';
interface TokenData {
  token: string;
}

export default function SignInPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    journalIds: [],
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const [usernameErrorMessage, setUsernameErroMessage] = useState<string>();
  const [passwordErrorMessage, setPasswordErroMessage] = useState<string>();

  const changeUsername = (value: string) => {
    setUser({ ...user, username: value });
  };
  const changePassword = (value: string) => {
    setUser({ ...user, password: value });
  };

  function validateEmpty(data: string) {
    if (data != '' && data != undefined) {
      return true;
    } else {
      return false;
    }
  }

  async function handleLogin() {
    if (
      validateEmpty(user.username) &&
      validateEmpty(user.password) &&
      !loading
    ) {
      try {
        setLoading(true);
        const response: TokenData = await api.post('/auth/login', user);
        localStorage.setItem('token', response.token);
        navigate('/');
      } catch (err) {
        setUsernameErroMessage('Invalid username')
        setPasswordErroMessage('Invalid password')
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <ColumnCentered>
        <LogoComponent size=""></LogoComponent>
        <AuthForm>
          <RowBetween>
            <Title>Sign in</Title>
            <Link
              to={{
                pathname: '/register',
              }}
            >
              <LinkComponent weight={600}>Sign up</LinkComponent>
            </Link>
          </RowBetween>
          <InputTextComponent
            state={user?.username}
            inputChange={changeUsername}
            label="You username"
            error={usernameErrorMessage}
          />
          <InputTextComponent
            state={user?.password}
            inputChange={changePassword}
            label="You password"
            error={passwordErrorMessage}
          />
          <RowEnd>
            <Link
              to={{
                pathname: '#',
              }}
            >
              <LinkComponent>Forgot Password</LinkComponent>
            </Link>
          </RowEnd>
        </AuthForm>
        <RowCentered>
          <ButtonComponent
            loading={loading}
            click={handleLogin}
            label="Log In"
          />
        </RowCentered>
      </ColumnCentered>
    </Container>
  );
}
