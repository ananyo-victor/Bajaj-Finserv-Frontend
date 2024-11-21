import React, { useState } from "react";
import axios from "axios";

function JsonInput({ setResponseData }) {
  const [jsonInput, setJsonInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const parsedJson = JSON.parse(jsonInput);
      const response = await axios.post(
        "http://localhost:3000/bfhl",
        parsedJson
      );
      setResponseData(response.data);
    } catch (err) {
      setError("Invalid JSON or API request failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        rows="5"
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-300"
        placeholder='Enter JSON (e.g., {"data": ["A", "1"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
      >
        Submit
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default JsonInput;
