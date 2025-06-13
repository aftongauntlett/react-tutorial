import React from 'react';
import { useState, useEffect } from 'react';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

function App() {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/tree')
      .then(response => response.json())
      .then(data => setTree(data))
      .catch(error => console.error('Error fetching tree:', error));
  }, []);

  const selectNode = (nodeId: string) => {
    setSelectedNode(nodeId);
  };

  const renderTree = (node: TreeNode, level = 0) => {
    return (
      <div key={node.id} className={`pl-${level * 2}`}>
        <div
          className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
            selectedNode === node.id ? 'bg-blue-100' : ''
          }`}
          onClick={() => selectNode(node.id)}
        >
          <span className="mr-2">{node.name}</span>
          {node.children && node.children.length > 0 && (
            <span className="text-gray-500">({node.children.length})</span>
          )}
        </div>
        {node.children && node.children.length > 0 && (
          <div className="pl-4">
            {node.children.map((child) => renderTree(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tree Traversal Tutorial</h1>
        {tree ? renderTree(tree) : <p>Loading tree...</p>}
      </div>
    </div>
  );
}

export default App;
