import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';

import ButtonComponent from '../../components/Button';
import Navigation from '../../components/Navigation';
import InputTextComponent from '../../components/InputText';

import { Entry } from '../../interfaces/entry.interface';

import { NoteRegister } from './styles';
import { RowCentered } from '../../styles';
import TextareaComponent from '../../components/Textarea';

export default function NoteRegisterPage() {
  const [note, setNote] = useState<Entry>();

  useEffect(() => {
    setNote({
      title: '',
      content: '',
    });
  }, []);

  return (
    <Default
      button={false}
      child={
        <>
          <Navigation title="aa" route="#" />
          <NoteRegister>
            <InputTextComponent
              state={note?.title}
              inputChange={setNote}
              label="Title"
            />
            <TextareaComponent
              state={note?.content}
              inputChange={setNote}
              label="Write your note"
            />
            <RowCentered>
              <ButtonComponent click={() => {}} label="Save note" />
            </RowCentered>
          </NoteRegister>
        </>
      }
    />
  );
}
