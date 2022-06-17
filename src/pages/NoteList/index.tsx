import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';
import Empty from '../../components/Empty';

import NoteList from '../../components/NoteList';
import { Entry } from '../../interfaces/entry.interface';

export default function NoteListPage() {
  const [notes, setNotes] = useState<Entry[]>([]);

  useEffect(() => {
    setNotes([
      {
        title: 'string',
        content: 'string',
      },
      {
        title: 'string',
        content: 'string',
      },
      {
        title: 'string',
        content: 'string',
      },
      {
        title: 'string',
        content: 'string',
      },
      {
        title: 'string',
        content: 'string',
      },
      {
        title: 'string',
        content: 'string',
      },
    ]);
  }, []);

  return (
    <Default
      child={
        notes.length > 0 ? (
          <NoteList list={notes} />
        ) : (
          <Empty
            message="No notes available"
            link="Create a note"
            route="/note/new"
          />
        )
      }
    />
  );
}
