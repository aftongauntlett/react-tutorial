import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/Home';
import Recursion from './pages/recursion/Recursion';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="recursion" element={<Recursion />} />
        <Route path="traversal" element={<div>GLaDOS scene here</div>} />
        <Route path="state-chaos" element={<div>Wheatley scene here</div>} />
        <Route path="system-design" element={<div>G-Man scene here</div>} />
        <Route path="final-boss" element={<div>Final boss here</div>} />
      </Route>
    </Routes>
  );
}
