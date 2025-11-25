import React from "react";

const ProblemCard = ({ 
  title, 
  description, 
  input, 
  output, 
  example 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto my-8">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">{title}</h1>
      
      {/* Description */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Problem Statement</h2>
        <p className="text-gray-700">{description}</p>
      </section>

      {/* Input */}
      {input && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Input</h2>
          <p className="text-gray-700">{input}</p>
        </section>
      )}

      {/* Output */}
      {output && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <p className="text-gray-700">{output}</p>
        </section>
      )}

      {/* Example */}
      {example && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <pre className="bg-gray-100 p-4 rounded text-gray-800">{example}</pre>
        </section>
      )}

    </div>
  );
};

export default ProblemCard;
