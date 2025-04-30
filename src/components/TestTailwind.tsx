import React from 'react';

const TestTailwind = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Tailwind Test</h1>
      <div className="bg-red-500 p-4 mb-4 rounded">This should have a red background</div>
      <div className="bg-green-500 p-4 mb-4 rounded">This should have a green background</div>
      <div className="bg-blue-500 p-4 mb-4 rounded">This should have a blue background</div>
      <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Button with Tailwind
      </button>
    </div>
  );
};

export default TestTailwind; 