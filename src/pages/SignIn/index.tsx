import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ButtonComponent from '../../components/Button';
import InputText from '../../components/InputText';
import Logo from '../../components/Logo';

import { User } from '../../interfaces/user.interface';

import {
  Container,
  ColumnCentered,
  LinkComponent,
  Title,
  RowBetween,
  Centered,
  AuthForm,
  RowEnd,
} from '../../styles';

export default function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser({
      username: '',
      email: '',
      password: '',
      journalIds: [],
    });
  }, []);

  const changeUsername = (value: string) => {
    setUser({ ...user, username: value });
  };
  const changePassword = (value: string) => {
    setUser({ ...user, password: value });
  };

  function handleLogin() {
    navigate('/');
  }

  return (
    <Container>
      <ColumnCentered>
        <Logo></Logo>
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
          <InputText
            state={user?.username}
            inputChange={changeUsername}
            label="You username"
          />
          <InputText
            state={user?.password}
            inputChange={changePassword}
            label="You password"
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
        <Centered>
        <ButtonComponent click={handleLogin} label="Log In" />
        </Centered>
      </ColumnCentered>
    </Container>
  );
}
