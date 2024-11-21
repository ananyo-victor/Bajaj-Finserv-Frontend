import React, { useState } from "react";
import JsonInput from "./components/JsonInput";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
  const [responseData, setResponseData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">BFHL API</h1>
        <JsonInput setResponseData={setResponseData} />
        {responseData && <ResponseDisplay responseData={responseData} />}
      </div>
    </div>
  );
}

export default App;
