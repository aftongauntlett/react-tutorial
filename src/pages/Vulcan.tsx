/**
 * Vulcan.tsx
 *
 * Mission route representing the FileTree traversal lesson.
 * Fetches file_nodes from the Express API, converts the flat list into a nested structure,
 * and renders the FileTree component to visualize it recursively.
 */

import { useEffect, useState } from 'react';
import { buildFileTree, FileNode } from '../utils/buildTree';
import { FileTree } from '../components/FileTree';

export default function Vulcan() {
  // Holds the nested file tree once fetched and built
  const [fileTree, setFileTree] = useState<FileNode[]>([]);

  useEffect(() => {
    // Simulate "receiving data from Starfleet API"
    fetch('http://localhost:5000/api/files')
      .then(res => res.json())
      .then(data => {
        const tree = buildFileTree(data); // convert flat array to nested structure
        setFileTree(tree); // store in state for rendering
      })
      .catch(err => console.error('Failed to load files:', err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h2 className="text-2xl font-bold mb-6 text-purple-300">
        Mission: Vulcan Archive Tree
      </h2>

      {/* Recursive tree visualizer */}
      <FileTree nodes={fileTree} />
    </div>
  );
}