import * as React from 'react';

import { JournalCard } from './styles';

interface JournalCardData {
  label: string;
  route: string;
  index: number;
}

export default function JournalCardComponent(props: JournalCardData) {
  const theme1 = {
    background: '#B8E5E3',
    color: 'black',
  };
  const theme2 = {
    background: '#3B4E8D;',
    color: 'white',
  };
  return (
    <JournalCard theme={props.index % 2 == 0 ? theme1 : theme2}>
      <div></div>
      <span>{props.label}</span>
    </JournalCard>
  );
}
