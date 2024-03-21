import React, { useState } from 'react';

const InputFile = ({ SetInputFile }) => {
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // setSelectedFile(event.target.files[0]); // Store the first selected file
    SetInputFile(event.target.files[0]);  // Pass the file to the parent
  };

  return (
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-lg font-semibold mb-4">Step 1: Input File</h2>
      <label htmlFor="fileInput" className="block mb-2">Select File:</label>
      <input 
        type="file" 
        id="fileInput" 
        className="border border-gray-300 px-4 py-2 mb-4" 
        accept=".csv, .json" 
        onChange={handleFileChange} // Add an onChange handler
      />
      <p>Supported file types: CSV, JSON</p>
    </div>
  );
};

export default InputFile;