import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';
import Empty from '../../components/Empty';

import JournalListComponent from '../../components/JournalList';
import ButtonComponent from '../../components/Button';
import { Journal } from '../../interfaces/journal.interface';
import { useNavigate } from 'react-router-dom';

export default function JournalListPage() {
  const navigate = useNavigate();
  const [journals, setJournals] = useState<Journal[]>([]);

  useEffect(() => {
    setJournals([
      {
        id: '1',
        title: 'HTML',
        type: 'private',
        entryIds: null,
      },
      {
        id: '2',
        title: 'Javascript',
        type: 'private',
        entryIds: null,
      },
      {
        id: '3',
        title: 'HTML',
        type: 'private',
        entryIds: null,
      },
      {
        id: '4',
        title: 'Javascript',
        type: 'private',
        entryIds: null,
      },
      {
        id: '5',
        title: 'HTML',
        type: 'private',
        entryIds: null,
      },
      {
        id: '6',
        title: 'Javascript',
        type: 'private',
        entryIds: null,
      },
    ]);
  }, []);

  return (
    <Default
      button={
        journals.length > 0 ? (
          <ButtonComponent plain click={() => {navigate("/journal/new")}} label="Add Journal" />
        ) : null
      }
      child={
        journals.length > 0 ? (
          <JournalListComponent list={journals} />
        ) : (
          <Empty
            message="No journals available"
            link="Create a journal"
            route="/journal/new"
          />
        )
      }
    />
  );
}
