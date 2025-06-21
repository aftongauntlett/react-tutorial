/**
 * App.tsx
 *
 * Root-level component that sets up client-side routing using React Router.
 * This wraps the entire app in a Router and defines which component renders for each route.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vulcan from './pages/Vulcan';
import Bajor from './pages/Bajor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vulcan" element={<Vulcan />} />
        <Route path="/bajor" element={<Bajor />} />
      </Routes>
    </Router>
  );
}

export default App;