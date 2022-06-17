import React from 'react';
import { ErrorMessage } from '../../styles';
import { Input, InputWrapper, InputLabel } from './styles.ts';

interface InputData {
  state: string;
  label: string;
  inputChange: Function;
  error?: string;
}

export default function InputTextComponent(props: InputData) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChange(e.target.value);
  };

  return (
    <>
      <InputWrapper>
        <Input
          error={props.error}
          onChange={handleChange}
          value={props.state}
        ></Input>
        <InputLabel inputValue={props.state}>{props.label}</InputLabel>
      </InputWrapper>
      <ErrorMessage>{props.error}</ErrorMessage>
    </>
  );
}
