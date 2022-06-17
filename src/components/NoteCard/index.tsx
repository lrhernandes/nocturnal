import * as React from 'react';

import { NoteCard } from './styles';

interface NoteCardData {
  label: string;
  route: string;
  index: number;
}

export default function NoteCardComponent(props: NoteCardData) {
  const theme1 = {
    background: '#B8E5E3',
    color: 'black',
  };
  const theme2 = {
    background: '#3B4E8D;',
    color: 'white',
  };
  return (
    <NoteCard theme={props.index % 2 == 0 ? theme1 : theme2}>
      <div>
        <span>{props.label}</span>
      </div>
    </NoteCard>
  );
}
