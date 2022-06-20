import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [journal, setJournal] = useState<Journal>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [journalError, setJournaleError] = useState<string | null>(null);

  const changeTitle = (value: string) => {
    setJournal({ ...journal, title: value });
  };

  useEffect(() => {
    const id = localStorage.getItem('userId');
    setJournal({
      title: '',
      userId: `${id}`,
      entryIds: [],
      type: 'private',
    });
  }, []);

  function validateEmpty(data: string, errorSetter: Function) {
    if (data != '' && data != undefined) {
      errorSetter(null);
      return true;
    } else {
      errorSetter('Required field');
      return false;
    }
  }

  async function handleSave() {
    if (validateEmpty(journal?.title, setJournaleError)) {
      try {
        setLoading(true);
        await api.post(`/journals/`, journal);
        navigate('/');
      } catch (error) {
        setJournaleError(error.message);
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
