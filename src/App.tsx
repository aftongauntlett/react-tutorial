/**
 * App.tsx
 * 
 * React frontend that fetches data from backend Express API,
 * transforms flat file_nodes into tree structure,
 * and renders it recursively using FileTree component.
 */

import React, { useState, useEffect } from 'react';
import { buildFileTree, FileNode } from './utils/buildTree';
import { FileTree } from './components/FileTree'; // <-- import recursive component

function App() {
  const [fileTree, setFileTree] = useState<FileNode[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/files')
      .then(response => response.json())
      .then(data => {
        const tree = buildFileTree(data);
        setFileTree(tree);
      })
      .catch(error => console.error('Error fetching files:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">File Nodes (Full-Stack Example)</h1>

      <div className="bg-white p-4 rounded shadow">
        <FileTree nodes={fileTree} />
      </div>
    </div>
  );
}

export default App;