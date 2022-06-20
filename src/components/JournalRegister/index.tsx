import * as React from 'react';
import JournalCard from '../JournalCard';

import { JournalRegister } from './styles';

import { Journal } from '../../interfaces/journal.interface';

interface JournalRegisterData {
  list: Array<Journal>;
}

export default function JournalRegisterComponent(props: JournalRegisterData) {
  return (
    <JournalRegister>
      {props.list.map((journal: Journal, index: number) => (
        <JournalCard
          label={journal.title}
          index={index}
          key={journal.id}
        />
      ))}
    </JournalRegister>
  );
}
