import * as React from 'react';

import Logo from '../Logo';

import { Container, RowBetween } from '../../styles';
import { Default } from './styles';
interface DefaultData{
  child: React.ReactNode,
  button?: React.ReactNode
}

export default function DefaultComponent(props: DefaultData) {
  return (
    <Container>
      <Default>
        <RowBetween>
            <Logo size='45vw'></Logo>
            {props?.button}
        </RowBetween>
        <main>
          {props?.child}
        </main>
      </Default>
    </Container>
  );
}
