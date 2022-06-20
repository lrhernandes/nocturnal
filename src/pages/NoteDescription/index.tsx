import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

// styled components
import { LargeNoteCard } from './styles';

// components
import DefaultComponent from '../../components/Default';
import NavigationComponent from '../../components/Navigation';
import { ClipLoader } from 'react-spinners';
import EmptyComponent from '../../components/Empty';

// interfaces
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
interface JournalListData {
  journals: Journal[];
}
interface ResponseData {
  entries: Entry[];
}

export default function NoteDescriptionPage() {
  const [note, setNote] = useState<Entry>();
  const [journalTitle, setJournalTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const { id, noteid } = useParams();

  useEffect(() => {
    fetchEntries();
    fetchJournals();
  }, []);

  // consume journal entries list route for entries listing and find the current entry
  // use journal id to find journal entries and the entry id to list its data
  async function fetchEntries() {
    try {
      const response: ResponseData = await api.get(`/journals/entries/${id}`);
      if (response.entries) {
        response.entries.map((note) => {
          if (note.id === noteid) {
            setNote(note);
          }
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }else{
        setError('Unexpected error');
      }
    } finally {
      setLoading(false);
    }
  }

  // consume journal list route for journal title list
  // use journal id to find journal title
  async function fetchJournals() {
    try {
      const userId = localStorage.getItem('userId');
      const journalsList: JournalListData = await api.get(
        `/journals/${userId}`
      );
      if (journalsList.journals.length > 0) {
        journalsList.journals.map((journal: Journal) => {
          if (journal.id === id) {
            setJournalTitle(journal.title);
          }
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Unexpected error');
      }
    }
  }

  return (
    <DefaultComponent
      button={false}
      child={
        loading ? (
          <ClipLoader
            color={'#2e2d2d'}
            css={`
              display: block;
              margin: 0 auto;
              height: 20px;
              width: 20px;
              margin-top: 30px;
            `}
            loading={loading}
            size={150}
          />
        ) : error ? (
          <EmptyComponent message={error} link="Back to start" route="/" />
        ) : (
          <>
            <NavigationComponent title={journalTitle} />

            <LargeNoteCard>
              <div>
                <span>
                  <strong>{note?.title}</strong>
                </span>
                <span>{note?.content}</span>
              </div>
            </LargeNoteCard>
          </>
        )
      }
    />
  );
}
