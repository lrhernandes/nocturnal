import * as React from 'react';

import {Button} from './styles'

interface ButtonData {
  label: string,
  click: Function
}

export default function ButtonComponent (props: ButtonData) {

  return (
    <Button onClick={props.click}>{props.label}</Button>
  );
}
