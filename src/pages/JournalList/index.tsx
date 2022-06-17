import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';
import Empty from '../../components/Empty';

import JournalList from '../../components/JournalList';
import { Journal } from '../../interfaces/journal.interface';

export default function JournalListPage() {
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
      child={
        journals.length > 0 ? (
          <JournalList list={journals} />
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
