import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// styled components
import { NoteRegister } from './styles';
import { RowCentered } from '../../styles';

// components
import DefaultComponent from '../../components/Default';
import NavigationComponent from '../../components/Navigation';
import ButtonComponent from '../../components/Button';
import InputTextComponent from '../../components/InputText';
import TextareaComponent from '../../components/Textarea';
import { ClipLoader } from 'react-spinners';
import EmptyComponent from '../../components/Empty';

// interfaces
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
interface JournalListData {
  journals: Journal[];
}

export default function NoteRegisterPage() {
  const [note, setNote] = useState<Entry>({
    title: '',
    content: '',
  });
  const [journalTitle, setJournalTitle] = useState<string>();
  const [journalError, setJournalError] = useState<string>('Opps, something went wrong');
  const [titleError, setTitleError] = useState<string>('');
  const [contentError, setContentError] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const [journalLoading, setJournalLoading] = useState<Boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJournals() {
      try {
        const userId = localStorage.getItem('userId');
        const journalsList: JournalListData = await api.get(
          `/journals/${userId}`
        );
        journalsList.journals.map((journal: Journal) => {
          if (journal.id === id) {
            setJournalTitle(journal.title);
          }
        });
      } catch (err) {
        setJournalError(err.message);
      } finally {
        setJournalLoading(false);
      }
    }
    fetchJournals();
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
  const changeTitle = (value: string) => {
    setNote({ ...note, title: value });
  };
  const changeContent = (value: string) => {
    setNote({ ...note, content: value });
  };

  async function handleSave() {
    if (
      validateEmpty(note.title, setTitleError) &&
      validateEmpty(note.content, setContentError)
    ) {
      try {
        setLoading(true);
        await api.post(`/journals/entry/${id}`, note);
        navigate(-1);
      } catch (error) {
        setTitleError(error.message);
        setContentError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <DefaultComponent
      button={false}
      child={
        journalLoading ? (
          <ClipLoader
            color={'#2e2d2d'}
            css={`
              display: block;
              margin: 0 auto;
              height: 20px;
              width: 20px;
              margin-top: 30px;
            `}
            loading={journalLoading}
            size={150}
          />
        ) : journalTitle ? (
          <>
            <NavigationComponent title={journalTitle} route="#" />
            <NoteRegister>
              <InputTextComponent
                state={note?.title}
                inputChange={changeTitle}
                label="Title"
                error={titleError}
              />
              <TextareaComponent
                state={note?.content}
                inputChange={changeContent}
                label="Write your note"
                error={contentError}
              />
              <RowCentered>
                <ButtonComponent
                  loading={loading}
                  click={() => {
                    handleSave();
                  }}
                  label="Save note"
                />
              </RowCentered>
            </NoteRegister>
          </>
        ) : (
          <EmptyComponent
            message={journalError}
            link="Back to start"
            route="/"
          />
        )
      }
    />
  );
}
