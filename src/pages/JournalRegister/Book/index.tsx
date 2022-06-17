import React from 'react';

import {JounalRegisterBook} from './styles'

export interface JournalRegisterBookComponentData {
    title: string
}

export default function JounalRegisterBookComponent(props: JournalRegisterBookComponentData) {
  return (
    <JounalRegisterBook>
        <div></div>
        <span>{props.title}</span>
    </JounalRegisterBook>
  );
}
