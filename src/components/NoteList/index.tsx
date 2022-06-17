import * as React from 'react';
import NoteCard from '../NoteCard';

import { NoteList } from './styles';

import { Entry } from '../../interfaces/entry.interface';

interface NoteListData {
  list: Array<Entry>;
}

export default function NoteListComponent(props: NoteListData) {
  return (
    <NoteList>
      {props.list.map((note: Entry, index: number) => (
        <NoteCard
          label={note.title}
          id={note.id}
          index={index}
          key={note.id}
        />
      ))}
    </NoteList>
  );
}
