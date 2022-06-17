import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { JournalCard } from './styles';

interface JournalCardData {
  label: string,
  id?: string,
  index: number,
}

export default function JournalCardComponent(props: JournalCardData) {
  const navigate = useNavigate();

  const theme1 = {
    background: '#B8E5E3',
    color: 'black',
  };
  const theme2 = {
    background: '#3B4E8D;',
    color: 'white',
  };

  function openJournal(id: string){
    navigate(`/journal/${id}`)
  }

  return (
    <JournalCard onClick={() => openJournal(props.id)} theme={props.index % 2 == 0 ? theme1 : theme2}>
      <div></div>
      <span>{props.label}</span>
    </JournalCard>
  );
}
