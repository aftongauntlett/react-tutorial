/**
 * FileTree.tsx
 * 
 * Recursively renders a nested file/folder tree structure.
 * Demonstrates recursion in React functional components.
 */

import React from 'react';

// Import FileNode type for strong typing
import { FileNode } from '../utils/buildTree';

// Component receives one node and recursively renders children (if any)
type FileTreeProps = {
  nodes: FileNode[];
};

export function FileTree({ nodes }: FileTreeProps) {
  return (
    <ul className="ml-4 space-y-1">
      {nodes.map((node) => (
        <li key={node.id} className="flex flex-col">
          <div className="p-1 rounded bg-white shadow-sm">
            <span className="font-semibold">{node.name}</span> — {node.type}
          </div>

          {/* If node has children, render them recursively */}
          {node.children && node.children.length > 0 && (
            <FileTree nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
}