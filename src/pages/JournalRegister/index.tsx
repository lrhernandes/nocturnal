import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import api from '../../services/api.ts';

// components
import JounalRegisterBookComponent from './Book';
import DefaultComponent from '../../components/Default';
import InputTextComponent from '../../components/InputText';
import ButtonComponent from '../../components/Button';

// styled components
import { Centered } from '../../styles';

// interfaces
import { Journal } from '../../interfaces/journal.interface';

export default function JournalRegisterPage() {
  const navigate = useNavigate();
  const [journal, setJournal] = useState<Journal>({
    title: '',
    userId: '',
    entryIds: [],
    type: 'private',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [journalError, setJournaleError] = useState<string | null>(null);

  // set specific user prop while it changes on the input
  // receive the input value as param
  const changeTitle = (value: string) => {
      setJournal({ ...journal, title: value });
  };

  // validate email format
  // receive the journal title input and the error setter as params
  function validateEmpty(data: string, errorSetter: Function) {
    if (data !== '' && data !== undefined) {
      errorSetter(null);
      return true;
    } else {
      errorSetter('Required field');
      return false;
    }
  }

  // consume journal register route for journal registration
  // use journal data and user id
  async function handleSave() {
    if (validateEmpty(journal?.title, setJournaleError)) {
      try {
        setLoading(true);
        const final = journal
        final.userId = `${localStorage.getItem('userId')}`
        setJournal(final)
        await api.post(`/journals/`, journal);
        navigate('/');
      } catch (error) {
        if (error instanceof Error) {
          setJournaleError(error.message);
        }else{
          setJournaleError('Unexpected error');
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <DefaultComponent
      child={
        <Centered>
          <JounalRegisterBookComponent title={journal?.title} />
          <InputTextComponent
            state={journal?.title}
            inputChange={changeTitle}
            label="Title"
            error={journalError}
          />
          <ButtonComponent
            loading={loading}
            click={() => {
              handleSave();
            }}
            label="Save journal"
          />
        </Centered>
      }
    />
  );
}
