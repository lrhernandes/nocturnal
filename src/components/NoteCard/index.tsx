import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { NoteCard } from './styles';

interface NoteCardData {
  label: string,
  id?: string |undefined,
  index: number,
}

export default function NoteCardComponent(props: NoteCardData) {
  const navigate = useNavigate()
  const theme1 = {
    background: '#B8E5E3',
    color: 'black',
  };
  const theme2 = {
    background: '#3B4E8D;',
    color: 'white',
  };
  return (
    <NoteCard theme={props.index % 2 == 0 ? theme1 : theme2} onClick={()=>{navigate(`${props.id}`)}}>
      <div>
        <span>{props.label}</span>
      </div>
    </NoteCard>
  );
}
