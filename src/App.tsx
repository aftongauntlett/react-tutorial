import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/Home';
import Room427 from './pages/room-427/Room427';
import ControlFlowLesson from './pages/room-427/ControlFlowLesson';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/room-427" element={<Room427 />} />
        <Route path="/room-427/start" element={<ControlFlowLesson />} />
        <Route path="aperture-science" element={<div>GLaDOS scene here</div>} />
        <Route path="space" element={<div>Wheatley scene here</div>} />
        <Route path="black-mesa" element={<div>G-Man scene here</div>} />
        <Route path="final-boss" element={<div>Final boss here</div>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
