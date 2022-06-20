import React from 'react';

// styled components
import { ErrorMessage } from '../../styles';
import { InputContainer } from './styles';
// @ts-ignore
import { Input, InputWrapper, InputLabel } from './styles.ts';

// interfaces
interface InputData {
  state: string;
  label: string;
  inputChange: Function;
  error?: string | null;
}

export default function InputTextComponent(props: InputData) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChange(e.target.value);
  };

  return (
    <InputContainer>
      <InputWrapper>
        <Input
          error={props.error}
          onChange={handleChange}
          value={props.state}
        ></Input>
        <InputLabel inputValue={props.state}>{props.label}</InputLabel>
      </InputWrapper>
      <ErrorMessage>{props.error}</ErrorMessage>
    </InputContainer>
  );
}
