import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';

import JournalList from '../../components/JournalList';
import { Journal } from '../../interfaces/journal.interface';

export default function Home() {
  const [journals, setJournals] = useState <Journal[]>([]);

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

  return <Default child={<JournalList list={journals} />} />;
}
