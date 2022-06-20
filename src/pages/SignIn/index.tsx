import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

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
interface ResponseData {
  user: User;
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
  const [loading, setLoading] = useState<boolean>(false);
  const [usernameErrorMessage, setUsernameErroMessage] = useState<string>();
  const [passwordErrorMessage, setPasswordErroMessage] = useState<string>();

  // set specific user prop while it changes on the input
  // receive the input value as param
  const changeUsername = (value: string) => {
    setUser({ ...user, username: value });
  };
  const changePassword = (value: string) => {
    setUser({ ...user, password: value });
  };

  // validate required inputs
  // receive the input value and the error setter as params
  function validateEmpty(data: string, errorSetter: Function) {
    if (data !== '' && data !== undefined) {
      errorSetter(null);
      return true;
    } else {
      errorSetter('Required field');
      return false;
    }
  }

  // consume login route for user authentication
  // use user data
  async function handleLogin() {
    if (
      validateEmpty(user.username, setUsernameErroMessage) &&
      validateEmpty(user.password || '', setPasswordErroMessage) &&
      !loading
    ) {
      try {
        setLoading(true);
        const response: ResponseData = await api.post('/auth/login', user);
        
        if (response.user.id) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
          navigate('/');
        }
      } catch (err) {
        setUsernameErroMessage('Invalid username');
        setPasswordErroMessage('Invalid password');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <ColumnCentered>
        <AuthForm>
          <LogoComponent size=""></LogoComponent>
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
            state={user?.password || ''}
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
              <LinkComponent weight={400}>Forgot Password</LinkComponent>
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
