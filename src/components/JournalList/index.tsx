import * as React from 'react';
import JournalCard from '../JournalCard';

import { JournalList } from './styles';

import { Journal } from '../../interfaces/journal.interface';

interface JournalListData {
  list: Array<Journal>;
}

export default function JournalListComponent(props: JournalListData) {
  return (
    <JournalList>
      {props.list.map((journal: Journal, index: number) => (
        <JournalCard
          label={journal.title}
          route="#"
          index={index}
          key={journal.id}
        />
      ))}
    </JournalList>
  );
}
