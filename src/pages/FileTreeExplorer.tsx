import { useEffect, useState } from 'react';
import { buildFileTree, FileNode } from '../utils/buildTree';
import { FileTree } from '../components/FileTree';

export default function FileTreeExplorer() {
  const [fileTree, setFileTree] = useState<FileNode[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/files')
      .then(res => res.json())
      .then(data => {
        const tree = buildFileTree(data); 
        setFileTree(tree); 
      })
      .catch(err => console.error('Failed to load files:', err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      <h2 className="text-2xl font-bold mb-6 text-purple-300">File Tree Explorer</h2>
      <FileTree nodes={fileTree} />
    </div>
  );
}