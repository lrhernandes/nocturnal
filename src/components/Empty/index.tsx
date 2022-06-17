import * as React from 'react';
import { Link } from 'react-router-dom';

import empty from '../../assets/empty.svg';
import { RowCentered, LinkComponent } from '../../styles';
import { Empty } from './styles';

interface EmptyData{
  message: string,
  link: string,
  route: string
}

export default function EmptyComponent(props: EmptyData) {
  return (
    <Empty>
      <h6>{props.message}</h6>
      <img src={empty} alt="Sem dados disponíveis" />
      <RowCentered>
        <Link
          to={{
            pathname: props.route,
          }}
        >
          <LinkComponent>{props.link}</LinkComponent>
        </Link>
      </RowCentered>
    </Empty>
  );
}
