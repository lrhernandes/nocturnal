import * as React from 'react';
import plus from '../../assets/plus.svg';

// components
import { Button } from './styles';
import ClipLoader from 'react-spinners/ClipLoader';

interface ButtonData {
  label: string;
  click: Function;
  plain?: boolean;
  loading?: boolean;
}

export default function ButtonComponent(props: ButtonData) {
  const theme1 = {
    background: '#834825',
    color: 'white',
    border: '0px',
    padding: '13px 60px',
    content: '',
    margin: '0px',
  };
  const theme2 = {
    background: 'transparent',
    color: '#834825',
    border: '1px solid #834825',
    padding: '13px 20px',
    content: 'aaa',
    margin: '5px',
  };

  return (
    <Button
      loading={props.loading}
      theme={props.plain ? theme2 : theme1}
      onClick={props.click}
    >
      <ClipLoader
        color={'#ffffff'}
        css={`
          display: block;
          margin: 0 auto;
          height: 10px;
          width: 10px;
        `}
        loading={props.loading}
        size={150}
      />
      {props.plain ? <img src={plus} alt="Plus" /> : null}
      {props.label}
    </Button>
  );
}
