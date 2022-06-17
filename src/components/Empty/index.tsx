import * as React from 'react';
import { Link } from 'react-router-dom';

import empty from '../../assets/empty.svg';
import { Centered, LinkComponent } from '../../styles';
import { EmptyComponent } from './styles';

interface EmptyData{
  message: string,
  link: string,
  route: string
}

export default function Empty(props: EmptyData) {
  return (
    <EmptyComponent>
      <h6>{props.message}</h6>
      <img src={empty} alt="Sem dados disponíveis" />
      <Centered>
        <Link
          to={{
            pathname: props.route,
          }}
        >
          <LinkComponent>{props.link}</LinkComponent>
        </Link>
      </Centered>
    </EmptyComponent>
  );
}
