import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Home from './pages/Home/index';

export default function AppRoutes () {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/login" element = { <SignIn/> } />
            <Route path="/register" element = { <SignUp/> } />
            <Route path="/" element = { <Home/> } />
        </Routes>
    </BrowserRouter>
  );
}