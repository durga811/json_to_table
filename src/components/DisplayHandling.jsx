import React, { useState } from 'react';

const DisplayHandling = ({availableFields,setAvailableFields, setSelectedFieldsLocal, selectedFields}) => {
  // const [selectedFields, setSelectedFieldsLocal] = useState([]);

  const handleMoveToDisplayed = (fieldName) => {
    setAvailableFields(availableFields.filter(field => field !== fieldName));
    setSelectedFieldsLocal([...selectedFields, fieldName]);
  };

  const handleMoveToAvailable = (fieldName) => {
    setSelectedFieldsLocal(selectedFields.filter(field => field !== fieldName));
    setAvailableFields([...availableFields, fieldName]);
  };

  const handleSubmit = () => {
    setSelectedFields(selectedFieldsLocal);
  };

  return (
    <div className="w-full lg:w-1/2 p-4">
      <h2 className="text-lg font-semibold mb-4">Display Handling</h2>
      <div className="flex">
        <div className="w-1/2 pr-4">
          <h3 className="font-semibold mb-2">Available Fields</h3>
          <ul className="border border-gray-600 p-2 min-h-44">
            {availableFields.map(field => (
              <li key={field} className="cursor-pointer hover:bg-gray-100 p-2" onClick={() => handleMoveToDisplayed(field)}>{field}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h3 className="font-semibold mb-2">Fields to be Displayed</h3>
          <ul className="border border-gray-600 p-2 min-h-44">
            {selectedFields.map(field => (
              <li key={field} className="cursor-pointer hover:bg-gray-100 p-2" onClick={() => handleMoveToAvailable(field)}>{field}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default DisplayHandling;

