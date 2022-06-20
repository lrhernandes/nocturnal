import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

// components
import DefaultComponent from '../../components/Default';
import ButtonComponent from '../../components/Button';
import EmptyComponent from '../../components/Empty';
import NoteListComponent from '../../components/NoteList';
import NavigationComponent from '../../components/Navigation';
import { ClipLoader } from 'react-spinners';

// interfaces
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
interface JournalListData {
  journals: Journal[];
}
interface JournalEntriesData {
  entries: Entry[];
}

export default function NoteListPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<Entry[]>([]);
  const [journalTitle, setJournalTitle] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [navigationLoading, setNavigationLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    fetchEntries();
    fetchJournals();
  }, []);
  
  // consume journal entries list route for entries listing
  // use journal id to find journal entries
  async function fetchEntries() {
    try {
      const response: JournalEntriesData = await api.get(
        `/journals/entries/${id}`
      );
      setNotes(response.entries);
    } catch (error) {
      console.log(error);
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
      journalsList.journals.map((journal: Journal) => {
        if (journal.id === id) {
          setJournalTitle(journal.title);
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setNavigationLoading(false);
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
        ) : notes.length > 0 ? (
          <>
            {navigationLoading ? (
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
            ) : (
              <NavigationComponent
                title={journalTitle}
                button={
                  <ButtonComponent
                    plain
                    loading={false}
                    click={() => {
                      navigate(`add-note`);
                    }}
                    label="Add note"
                  />
                }
              />
            )}
            <NoteListComponent list={notes} />
          </>
        ) : (
          <EmptyComponent
            message="No notes available"
            link="Create a note"
            route="add-note"
          />
        )
      }
    />
  );
}
