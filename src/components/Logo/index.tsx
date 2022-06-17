import * as React from 'react';

import logo from '../../assets/logo.svg'
import {Logo} from './styles'

interface LogoData{
  size: string,
}

export default function LogoComponent (props: LogoData) {
  return (
    <Logo size={props.size}>
      <img src={logo} alt='Logo'/>
    </Logo>
  );
}
