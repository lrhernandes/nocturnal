import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import JournalList from './pages/JournalList/index';
import JournalRegister from './pages/JournalRegister/index';
import NoteList from './pages/NoteList/index';
import NoteRegister from './pages/NoteRegister/index';
import NoteDescription from './pages/NoteDescription/index';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/journal/new" element={<JournalRegister />} />
        <Route path="/journal/:id" element={<NoteList />} />
        <Route path="/journal/:id/add-note" element={<NoteRegister />} />
        <Route path="/journal/:id/:noteid" element={<NoteDescription />} />
        <Route path="/" element={<JournalList />} />
      </Routes>
    </BrowserRouter>
  );
}
