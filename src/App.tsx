import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Authentication } from './pages/Login/Authentication';
import { Lists } from './pages/Dashboard/Lists';
import { Tasks } from './pages/Dashboard/Tasks';

import { GlobalStyle } from './styles/global';
import { Register } from './pages/Login/Register';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="login" element={<Authentication />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
