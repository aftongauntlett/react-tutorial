import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/Home';
import DistanceOptimization from './pages/DistanceOptimization';
import TreeTraversal from './pages/TreeTraversal';
import FileTreeExplorer from './pages/FileTreeExplorer';

export default function App() {
  return (
    <Routes>
     <Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="file-tree-explorer" element={<FileTreeExplorer />} />
  <Route path="tree-traversal" element={<TreeTraversal />} />
  <Route path="distance-optimization" element={<DistanceOptimization />} />
</Route>
    </Routes>
  );
}