import React, { useState, useEffect } from 'react';
import Default from '../../components/Default';
import Empty from '../../components/Empty';

import NoteList from '../../components/NoteList';
import ButtonComponent from '../../components/Button';
import Navigation from '../../components/Navigation';
import { Entry } from '../../interfaces/entry.interface';
import { useNavigate } from 'react-router-dom';

export default function NoteListPage() {
  const navigate = useNavigate()
  const [notes, setNotes] = useState<Entry[]>([]);

  useEffect(() => {
    setNotes([
      {
        title: 'The h1, h2, h3, h4, h5, and h6 elements ',
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
      button={false}
      child={
        notes.length > 0 ? (
          <>
            <Navigation title="aa" button={(
              <ButtonComponent plain click={()=>{navigate(`add-note`)}} label="Add note" />
            )} />
            <NoteList list={notes} />
          </>
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
