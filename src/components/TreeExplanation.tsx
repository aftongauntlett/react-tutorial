import { useState } from 'react';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

export function TreeExplanation() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "What is a Tree?",
      description: "Think of a tree like a family tree or an organization chart. Each circle (node) represents a person or department, and lines show relationships. In programming, trees help us organize data with parent-child relationships.",
      codeExample: "// Example of a simple tree\nconst familyTree = {\n  name: 'Grandparent',\n  children: [\n    {\n      name: 'Parent',\n      children: [{\n        name: 'Child'\n      }]\n    }\n  ]\n};",
    },
    {
      title: "How We Traverse the Tree",
      description: "Imagine you're exploring a maze. You start at the entrance (root node), then check each room (node) one by one. If a room has doors (children), you go through them to explore more rooms. This is called 'Depth-First Search' - we go as deep as possible before moving to the next branch.",
      codeExample: "// How we visit each node\nfunction visitNode(node) {\n  // Visit this node first\n  console.log(node.name);\n  // Then visit its children\n  if (node.children) {\n    node.children.forEach(child => visitNode(child));\n  }\n}",
    },
    {
      title: "How React Handles This",
      description: "When you write JSX like <div>{children}</div>, React is actually doing tree traversal! It looks at your component tree, figures out what needs to be updated, and makes those changes efficiently. This is why React is so powerful - it handles the tree traversal for us!",
      codeExample: "// React's virtual DOM tree\nconst App = () => {\n  return (\n    <div>\n      <ChildComponent>\n        <GrandchildComponent />\n      </ChildComponent>\n    </div>\n  );\n};",
    },
    {
      title: "Why This Matters",
      description: "Understanding tree traversal helps you write better code because:\n1. You can optimize how you search through data\n2. You can make your React components more efficient\n3. You can understand how frameworks work under the hood\n4. You can solve complex problems by breaking them into smaller parts",
      codeExample: "// A real-world example\nconst findPerson = (tree, name) => {\n  if (tree.name === name) {\n    return tree;\n  }\n  if (tree.children) {\n    for (const child of tree.children) {\n      const result = findPerson(child, name);\n      if (result) return result;\n    }\n  }\n  return null;\n};",
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Tree Traversal Concepts</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">{steps[currentStep].title}</h3>
          <p className="text-gray-700 mb-4">{steps[currentStep].description}</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm font-mono">{steps[currentStep].codeExample}</pre>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
