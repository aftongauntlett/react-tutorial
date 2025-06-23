/**
 * FileTree.tsx
 *
 * Recursively renders a file/folder tree with expand/collapse support.
 * Demonstrates:
 * - Recursive rendering
 * - Local component state
 * - Interactive tree traversal
 */

import { useState } from 'react';
import { FileNode } from '../../utils/buildTree';

type FileTreeProps = {
  nodes: FileNode[];
};

/**
 * Renders a nested tree of file/folder nodes.
 * Allows folders to be expanded/collapsed.
 */
export function FileTree({ nodes }: FileTreeProps) {
  // Track which folder nodes are expanded by ID
  const [openNodes, setOpenNodes] = useState<Set<number>>(new Set());

  // Toggle folder open/closed by modifying the ID Set
  const toggleNode = (id: number) => {
    setOpenNodes(prev => {
      const newSet = new Set(prev); // shallow copy
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  return (
    <ul className="ml-4 space-y-2">
      {nodes.map((node) => (
        <li key={node.id} className="flex flex-col">
          <div
            className="px-3 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white cursor-pointer hover:bg-slate-600/60 transition-colors flex items-center"
            onClick={() => node.type === 'folder' && toggleNode(node.id)}
          >
            <span className="mr-2 text-lg">
              {node.type === 'folder'
                ? openNodes.has(node.id) ? '📂' : '📁'
                : '📄'}
            </span>
            <span className="font-medium">{node.name}</span>
          </div>

          {/* Recursively render children if folder is expanded */}
          {node.children && node.children.length > 0 && openNodes.has(node.id) && (
            <FileTree nodes={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
}