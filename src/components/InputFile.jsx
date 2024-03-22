import React from 'react';

const InputFile = ({ SetInputFile }) => {
  const handleFileChange = (event) => {
    SetInputFile(event.target.files[0]);
  };

  return (
    <div className="w-full lg:w-1/2 p-4 border-4 border-green-900 m-2 rounded-lg bg-green-50">
      <h2 className="text-lg font-semibold mb-4">Step 1: Input File</h2>
      <label htmlFor="fileInput" className="block mb-2">Select File:</label>
      <input
        type="file"
        id="fileInput"
        className="border border-gray-300 px-4 py-2 mb-4"
        accept=".csv, .json"
        onChange={handleFileChange}
      />
      <p>Supported file types: CSV, JSON</p>
    </div>
  );
};

export default InputFile;
