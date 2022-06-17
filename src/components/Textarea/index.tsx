import React from 'react';
import { Textarea, TextareaWrapper, TextareaLabel } from './styles.ts';

interface TextareaData {
  state: string;
  label: string;
  inputChange: Function;
}

export default function TextareaComponent(props: TextareaData) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChange(e.target.value);
  }

  return (
    <TextareaWrapper>
      <Textarea
        onChange={handleChange}
        value={props.state}
      ></Textarea>
      <TextareaLabel inputValue={props.state}>{props.label}</TextareaLabel>
    </TextareaWrapper>
  );
}

