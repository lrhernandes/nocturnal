import * as React from 'react';
import { JournalList } from './styles';

import { Journal } from '../../interfaces/journal.interface';
import JournalCardComponent from '../JournalCard';

interface JournalListData {
  list: Array<Journal>;
}

export default function JournalListComponent(props: JournalListData) {
  return (
    <JournalList>
      {props.list.map((journal: Journal, index: number) => (
        <JournalCardComponent
          label={journal.title}
          id={journal.id}
          index={index}
          key={journal.id}
        />
      ))}
    </JournalList>
  );
}
