import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function ResponseDisplay({ responseData }) {
  const options = [
    { label: "Alphabets", value: "alphabets" },
    { label: "Numbers", value: "numbers" },
    { label: "Highest Lowercase Alphabet", value: "highest_lowercase_alphabet" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const renderFilteredResponse = () => {
    if (!selectedOptions.length) return null;

    return selectedOptions.map((option) => {
      const key = option.value;
      const data = responseData[key];

      if (!data || (Array.isArray(data) && data.length === 0)) {
        return (
          <p key={key} className="mt-2 text-gray-700">
            <strong>{option.label}:</strong> No data available
          </p>
        );
      }

      return (<>
      <h1 className="mt-3 font-semibold text-lg">Filtered Response</h1>
        <p key={key} className="mt-2 text-gray-700">
          <strong>{option.label}:</strong>{" "}
          {Array.isArray(data) ? data.join(", ") : data}
        </p></>
      );
    });
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Response:</h3>
      <MultiSelect
        options={options}
        value={selectedOptions}
        onChange={setSelectedOptions}
        labelledBy="Select categories"
        className="w-full"
      />
      <div className="mt-4 bg-gray-50 p-4 rounded-md shadow-sm">
        {renderFilteredResponse()}
      </div>
    </div>
  );
}

export default ResponseDisplay;
