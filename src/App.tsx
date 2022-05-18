import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Authentication } from './pages/Login/Authentication';
import { Lists } from './pages/Dashboard/Lists';
import { Tasks } from './pages/Dashboard/Tasks';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Authentication />} />
          <Route path="/" element={<Tasks />} />
          <Route path="/lists" element={<Lists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
