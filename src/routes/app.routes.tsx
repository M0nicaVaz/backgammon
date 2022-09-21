import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Game } from '../pages/Game';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
