/**
 * TreeExplanation.tsx
 *
 * Provides a visual step-through of core tree traversal concepts.
 * This is meant to teach learners how trees work, why React uses them,
 * and how to think recursively when solving real-world problems.
 */

import { useState } from 'react';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

// Static step-by-step explanation content
export function TreeExplanation() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "What is a Tree?",
      description:
        "Think of a tree like a family tree or an organization chart. Each circle (node) represents a person or department, and lines show relationships. In programming, trees help us organize data with parent-child relationships.",
      codeExample: `// Example of a simple tree
const familyTree = {
  name: 'Grandparent',
  children: [
    {
      name: 'Parent',
      children: [{ name: 'Child' }]
    }
  ]
};`,
    },
    {
      title: "How We Traverse the Tree",
      description:
        "Imagine you're exploring a maze. You start at the entrance (root node), then check each room (node) one by one. If a room has doors (children), you go through them to explore more rooms. This is called 'Depth-First Search' - we go as deep as possible before moving to the next branch.",
      codeExample: `// How we visit each node
function visitNode(node) {
  console.log(node.name); // visit this node
  if (node.children) {
    node.children.forEach(child => visitNode(child));
  }
}`,
    },
    {
      title: "How React Handles This",
      description:
        "When you write JSX like <div>{children}</div>, React is actually doing tree traversal! It looks at your component tree, figures out what needs to be updated, and makes those changes efficiently.",
      codeExample: `// React's virtual DOM tree
const App = () => {
  return (
    <div>
      <ChildComponent>
        <GrandchildComponent />
      </ChildComponent>
    </div>
  );
};`,
    },
    {
      title: "Why This Matters",
      description:
        "Understanding tree traversal helps you write better code because:\n1. You can optimize how you search through data\n2. You can make your React components more efficient\n3. You can understand how frameworks work under the hood\n4. You can solve complex problems by breaking them into smaller parts",
      codeExample: `// A real-world example
const findPerson = (tree, name) => {
  if (tree.name === name) {
    return tree;
  }
  if (tree.children) {
    for (const child of tree.children) {
      const result = findPerson(child, name);
      if (result) return result;
    }
  }
  return null;
};`,
    },
  ];

  const handleNext = () =>
    setCurrentStep((prev) => (prev + 1) % steps.length);

  const handlePrev = () =>
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div className="bg-slate-900/60 p-6 rounded-xl border border-blue-800 shadow-md text-white">
      <h2 className="text-2xl font-bold mb-6 text-blue-400 drop-shadow">
        Tree Traversal Concepts
      </h2>

      <div className="space-y-6">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
          <h3 className="text-lg font-semibold mb-2 text-purple-300">
            {steps[currentStep].title}
          </h3>
          <p className="text-gray-300 mb-4 whitespace-pre-line">
            {steps[currentStep].description}
          </p>
          <div className="bg-black/40 p-4 rounded-lg border border-slate-600 text-green-400">
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {steps[currentStep].codeExample}
            </pre>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded shadow"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded shadow"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}