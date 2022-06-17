import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ButtonComponent from '../../components/Button';
import InputTextComponent from '../../components/InputText';
import Logo from '../../components/Logo';

import { User } from '../../interfaces/user.interface';

import {
  Container,
  ColumnCentered,
  LinkComponent,
  Title,
  RowBetween,
  RowCentered,
  AuthForm,
} from '../../styles';

export default function SignUpPage() {
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
  const changeEmail = (value: string) => {
    setUser({ ...user, email: value });
  };

  function handleRegister() {
    navigate('/');
  }

  return (
    <Container>
      <ColumnCentered>
        <Logo></Logo>
        <AuthForm>
          <RowBetween>
            <Title>Sign up</Title>
            <Link
              to={{
                pathname: '/login',
              }}
            >
              <LinkComponent weight={600}>
                Already have an account
              </LinkComponent>
            </Link>
          </RowBetween>
          <InputTextComponent
            state={user?.username}
            inputChange={changeUsername}
            label="Define a username"
          />
          <InputTextComponent
            state={user?.password}
            inputChange={changePassword}
            label="Set your password"
          />
          <InputTextComponent
            state={user?.email}
            inputChange={changeEmail}
            label="Email (optional)"
          />
        </AuthForm>
        <RowCentered>
          <ButtonComponent click={handleRegister} label="Create account" />
        </RowCentered>
      </ColumnCentered>
    </Container>
  );
}
