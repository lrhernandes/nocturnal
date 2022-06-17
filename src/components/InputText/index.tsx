import React from 'react';
import { Input, InputWrapper, InputLabel } from './styles.ts';

interface InputData {
  state: string;
  label: string;
  inputChange: Function;
}

export default function InputText(props: InputData) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChange(e.target.value);
  }

  return (
    <InputWrapper>
      <Input
        onChange={handleChange}
        value={props.state}
      ></Input>
      <InputLabel inputValue={props.state}>{props.label}</InputLabel>
    </InputWrapper>
  );
}

