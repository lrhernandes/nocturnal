import * as React from 'react';

import { Navigation } from './styles';
import chevron from '../../assets/chevron.svg';
import { Link } from 'react-router-dom';
import { RowBetween } from '../../styles';

interface NavigationData {
  title: string;
  route: string;
  button?: React.ReactNode;
}

export default function NavigationComponent(props: NavigationData) {
  return (
    <Navigation>
      <RowBetween>
        <Link
          to={{
            pathname: props.route,
          }}
        >
          <img src={chevron} alt="Voltar" />
          {props.title}
        </Link>
        {props.button ? props?.button : null}
      </RowBetween>
    </Navigation>
  );
}
