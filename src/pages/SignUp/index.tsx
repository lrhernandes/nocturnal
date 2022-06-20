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
} from '../../styles';
import LogoComponent from '../../components/Logo';

// components
import ButtonComponent from '../../components/Button';
import InputTextComponent from '../../components/InputText';

// interfaces
import { User } from '../../interfaces/user.interface';
interface ResponseData {
  token: string;
  user: {
    id: string;
  };
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>();
  const [usernameError, setUsernameError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    journalIds: [],
  });

  // set specific user prop while it changes on the input
  // receive the input value as param
  const changeUsername = (value: string) => {
    setUser({ ...user, username: value });
  };
  const changePassword = (value: string) => {
    setUser({ ...user, password: value });
  };
  const changeEmail = (value: string) => {
    setUser({ ...user, email: value });
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

  // validate email format
  // receive the email input and the email error setter as params
  function validateEmail(email: string, setError: Function) {
    const test = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (test.test(email)) {
      setError(undefined);
      return true;
    } else {
      setError('Invalid email');
      return false;
    }
  }

  // consume user register route for user registration
  // use user data
  async function handleRegister() {
    // email validation if the field is not empty
    var validEmail = true;
    if (user.email) {
      validEmail = validateEmail(user.email, setEmailError);
    }

    // validates required fields
    if (
      validateEmpty(user.username, setUsernameError) &&
      validateEmpty(user.password || "", setPasswordError) &&
      validEmail &&
      !loading
    ) {
      try {
        setLoading(true);
        const response: ResponseData = await api.post('/auth/signup', user);
        if (response) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
          navigate('/login');
        }
      } catch (error) {
        if (error instanceof Error) {
          setUsernameError(error.message);
        } else {
          setUsernameError('Unexpected error');
        }
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
            error={usernameError}
          />
          <InputTextComponent
            state={user?.password || ""}
            inputChange={changePassword}
            label="Set your password"
            error={passwordError}
          />
          <InputTextComponent
            state={user?.email}
            inputChange={changeEmail}
            label="Email (optional)"
            error={emailError}
          />
        </AuthForm>
        <RowCentered>
          <ButtonComponent
            loading={loading}
            click={handleRegister}
            label="Create account"
          />
        </RowCentered>
      </ColumnCentered>
    </Container>
  );
}
