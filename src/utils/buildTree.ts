/**
 * Utility to transform flat file_nodes list into nested tree structure
 * for easier recursive rendering in React.
 */

export type FileNode = {
  id: number;
  name: string;
  type: string;
  parent_id: number | null;
  children?: FileNode[];
};

// Converts flat array into nested tree structure
export function buildFileTree(flatData: FileNode[]): FileNode[] {
  const map = new Map<number, FileNode>();
  const roots: FileNode[] = [];

  // First: create map of id -> node
  flatData.forEach(node => {
    map.set(node.id, { ...node, children: [] });
  });

  // Second: assign children to parents
  map.forEach(node => {
    if (node.parent_id === null) {
      roots.push(node);
    } else {
      const parent = map.get(node.parent_id);
      if (parent) {
        parent.children?.push(node);
      }
    }
  });

  return roots;
}