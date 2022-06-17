import * as React from 'react';

import Logo from '../Logo';
import Button from '../Button';

import { Container, RowBetween } from '../../styles';
import { Default } from './styles';
// import Empty from '../Empty';

export default function DefaultComponent(props: DefaultData) {
  return (
    <Container>
      <Default>
        <RowBetween>
            <Logo size='45vw'></Logo>
            <Button plain click={()=>{}} label="Add Journal" />
        </RowBetween>
        <main>
          {props?.child}
          {/* <Empty
            message="Mensagem X"
            link="Create a note"
            route="/note/register"
          /> */}
        </main>
      </Default>
    </Container>
  );
}
