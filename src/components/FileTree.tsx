/**
 * FileTree.tsx
 * 
 * Recursively renders a nested file/folder tree structure with expand/collapse functionality.
 * Demonstrates recursion + stateful rendering in React functional components.
 */

import React, { useState } from 'react';
import { FileNode } from '../utils/buildTree';

type FileTreeProps = {
  nodes: FileNode[];
};

export function FileTree({ nodes }: FileTreeProps) {
  // Local state to track which folders are expanded
  const [openNodes, setOpenNodes] = useState<Set<number>>(new Set());

  // Toggle expand/collapse by node id
  const toggleNode = (id: number) => {
    setOpenNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <ul className="ml-4 space-y-1">
      {nodes.map((node) => (
        <li key={node.id} className="flex flex-col">
          <div
            className="p-1 rounded bg-white shadow-sm cursor-pointer hover:bg-gray-100 flex items-center"
            onClick={() => node.type === 'folder' && toggleNode(node.id)}
          >
            <span className="mr-2">
              {node.type === 'folder'
                ? openNodes.has(node.id) ? '📂' : '📁'
                : '📄'}
            </span>
            <span className="font-semibold">{node.name}</span>
          </div>

          {/* Only render children if node is open */}
          {node.children && node.children.length > 0 && openNodes.has(node.id) && (
            <FileTree nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
}