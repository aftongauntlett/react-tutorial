import React from 'react';
import { useState, useEffect } from 'react';
import { TreeExplanation } from './components/TreeExplanation';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

function App() {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/tree')
      .then(response => response.json())
      .then(data => setTree(data))
      .catch(error => console.error('Error fetching tree:', error));
  }, []);

  const selectNode = (node: TreeNode) => {
    setSelectedNode(node);
  };

  const renderTree = (node: TreeNode, level = 0) => {
    return (
      <div key={node.id} className={`pl-${level * 2}`}>
        <div
          className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
            selectedNode?.id === node.id ? 'bg-blue-100' : ''
          }`}
          onClick={() => selectNode(node)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Selected Node:</h2>
              {selectedNode ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">{selectedNode.name}</p>
                  <p className="text-gray-600">ID: {selectedNode.id}</p>
                  <p className="text-gray-600">
                    Children: {selectedNode.children?.length || 0}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">Click on a node to select it</p>
              )}
            </div>
            {tree ? renderTree(tree) : <p>Loading tree...</p>}
          </div>
          <div>
            <TreeExplanation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
