import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Navigation } from './styles';
import chevron from '../../assets/chevron.svg';
import { RowBetween } from '../../styles';

interface NavigationData {
  title: string | undefined;
  button?: React.ReactNode;
}

export default function NavigationComponent(props: NavigationData) {
  const navigate = useNavigate()
  return (
    <Navigation>
      <RowBetween>
        <a
          onClick={() => navigate(-1)}
        >
          <img src={chevron} alt="Voltar" />
          {props.title}
        </a>
        {props.button ? props?.button : null}
      </RowBetween>
    </Navigation>
  );
}
