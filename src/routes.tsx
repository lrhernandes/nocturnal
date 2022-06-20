import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import JournalList from './pages/JournalList/index';
import JournalRegister from './pages/JournalRegister/index';
import NoteList from './pages/NoteList/index';
import NoteRegister from './pages/NoteRegister/index';
import NoteDescription from './pages/NoteDescription/index';

import ProtectedRoute from './pages/ProtectedRoute';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: localStorage.getItem('token')? true : false,
  authenticationPath: '/login',
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<JournalList />}
            />
          }
        ></Route>

        <Route
          path="/journal/new"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<JournalRegister />}
            />
          }
        />
        <Route
          path="/journal/:id"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<NoteList />}
            />
          }
        />
        <Route
          path="/journal/:id/add-note"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<NoteRegister />}
            />
          }
        />
        <Route
          path="/journal/:id/:noteid"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<NoteDescription />}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
