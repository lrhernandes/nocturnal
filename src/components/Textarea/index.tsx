import React from 'react';

// styled components
// @ts-ignore
import { Textarea, TextareaWrapper, TextareaLabel, TextareaContainer } from './styles.ts'
import { ErrorMessage } from '../../styles';

// interfaces
interface TextareaData {
  state: string;
  label: string;
  error? : string
  inputChange: Function;
}

export default function TextareaComponent(props: TextareaData) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.inputChange(e.target.value);
  };

  return (
    <TextareaContainer>
      <TextareaWrapper>
        <Textarea 
          error={props.error} onChange={handleChange} value={props.state}></Textarea>
        <TextareaLabel inputValue={props.state}>{props.label}</TextareaLabel>
      </TextareaWrapper>
      <ErrorMessage>{props.error}</ErrorMessage>
    </TextareaContainer>
  );
}
