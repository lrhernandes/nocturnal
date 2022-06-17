import * as React from 'react';

import Logo from '../Logo';

import { Container } from '../../styles';
import { DefaultComponent } from './styles';
import Empty from '../Empty';

interface DefaultData {
  child: React.ReactNode;
}

export default function Default(props: DefaultData) {
  return (
    <Container>
      <DefaultComponent>
        <Logo></Logo>
        <main>
          {props?.child}
          {/* <Empty
            message="Mensagem X"
            link="Create a note"
            route="/note/register"
          /> */}
        </main>
      </DefaultComponent>
    </Container>
  );
}
