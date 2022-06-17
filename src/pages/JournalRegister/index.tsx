import React, { useState, useEffect } from 'react';
import DefaultComponent from '../../components/Default';
import InputTextComponent from '../../components/InputText';
import ButtonComponent from '../../components/Button';

import { Journal } from '../../interfaces/journal.interface';
import { ColumnCentered, Centered, RowCentered } from '../../styles';
import JounalRegisterBookComponent from './Book';

export default function JournalRegisterPage() {
  const [journal, setJournal] = useState<Journal>();

  useEffect(() => {
    setJournal({
      title: 'ss',
      entryIds: [],
      type: 'private',
    });
  }, []);

  const changeTitle = (value: string) => {
    setJournal({ ...journal, title: value });
  };

  return (
    <DefaultComponent
      child={
        <Centered>
          <JounalRegisterBookComponent title={journal?.title} />
          <InputTextComponent
            state={journal?.title}
            inputChange={changeTitle}
            label="Title"
          />
          <ButtonComponent click={() => {}} label="Save journal" />
        </Centered>
      }
    />
  );
}
