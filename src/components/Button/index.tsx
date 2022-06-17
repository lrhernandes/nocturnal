import * as React from 'react';

import { Button } from './styles';

interface ButtonData {
  label: string;
  click: Function;
  plain?: Boolean;
}

export default function ButtonComponent(props: ButtonData) {
  const theme1 = {
    background: '#834825',
    color: 'white',
    border: '0px',
    padding:'13px 60px'
  };
  const theme2 = {
    background: 'transparent',
    color: '#834825',
    border: '1px solid #834825',
    padding: '13px 20px'
  };

  return (
    <Button theme={props.plain ? theme2 : theme1} onClick={props.click}>
      {props.label}
    </Button>
  );
}
