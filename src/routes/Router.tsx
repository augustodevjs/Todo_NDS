import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Lists } from '../pages/Lists';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Tasks } from '../pages/Tasks';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/lists" element={<Lists />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
