import * as React from 'react';

import { Button } from './styles';
import ClipLoader from 'react-spinners/ClipLoader';

interface ButtonData {
  label: string,
  click: Function,
  plain?: Boolean,
  loading? :Boolean
}

export default function ButtonComponent(props: ButtonData) {
  const theme1 = {
    background: '#834825',
    color: 'white',
    border: '0px',
    padding:'13px 60px',
    content: '',
    margin: '0px'
  };
  const theme2 = {
    background: 'transparent',
    color: '#834825',
    border: '1px solid #834825',
    padding: '13px 20px',
    content: 'aaa',
    margin: '5px'
  };

  const override =`
    display: block;
    margin: 0 auto;
    height: 10px;
    width: 10px;
  `;

  return (
    <Button loading={props.loading} theme={props.plain ? theme2 : theme1} onClick={props.click}>
      <ClipLoader
        color={'#ffffff'}
        css={override}
        loading={props.loading}
        size={150}
      /> {props.label}
    </Button>
  );
}
