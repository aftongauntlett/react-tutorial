import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Room427 from './pages/room-427/Room427';
import ControlFlowLesson from './pages/room-427/ControlFlowLesson';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/shared/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home/Level Selection */}
          <Route index element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Stanley Parable - Room 427 Experience */}
          <Route path="/room-427" element={<Room427 />} />
          <Route path="/room-427/start" element={<ControlFlowLesson />} />

          {/* Portal Universe - Aperture Science */}
          <Route path="aperture-science" element={<div>GLaDOS scene here</div>} />

          {/* Portal 2 - Space Core Experience */}
          <Route path="space" element={<div>Wheatley scene here</div>} />

          {/* Half-Life - Black Mesa Research Facility */}
          <Route path="black-mesa" element={<div>G-Man scene here</div>} />

          {/* Final Challenge */}
          <Route path="final-boss" element={<div>Final boss here</div>} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}
