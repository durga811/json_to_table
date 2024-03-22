import React, { useState } from 'react';

const DisplayHandling = ({ availableFields, setAvailableFields, setSelectedFieldsLocal, selectedFields }) => {
  const [selectedAvailableFields, setSelectedAvailableFields] = useState([]);
  const [selectedDisplayedFields, setSelectedDisplayedFields] = useState([]);

  const handleMoveToDisplayed = () => {
    setAvailableFields(availableFields.filter(field => !selectedAvailableFields.includes(field)));
    setSelectedFieldsLocal([...selectedFields, ...selectedAvailableFields]);
    setSelectedAvailableFields([]);
  };

  const handleMoveToAvailable = () => {
    setSelectedFieldsLocal(selectedFields.filter(field => !selectedDisplayedFields.includes(field)));
    setAvailableFields([...availableFields, ...selectedDisplayedFields]);
    setSelectedDisplayedFields([]);
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
              <li key={field} className={`cursor-pointer hover:bg-gray-100 p-2 ${selectedAvailableFields.includes(field) ? 'bg-blue-200' : ''}`} onClick={() => setSelectedAvailableFields(prevState => [...prevState, field])}>{field}</li>
            ))}
          </ul>
        </div>
        <div className="m-4 flex  flex-col justify-center align-center">
        <button onClick={handleMoveToAvailable} className="bg-blue-500 text-white h-12 m-2 px-4 py-2 rounded ">«</button>
        <button onClick={handleMoveToDisplayed} className="bg-blue-500 text-white h-12 m-2 px-4 py-2 rounded">»</button>
        
      </div>
        <div className="w-1/2 pl-4">
          <h3 className="font-semibold mb-2">Fields to be Displayed</h3>
          <ul className="border border-gray-600 p-2 min-h-44">
            {selectedFields.map(field => (
              <li key={field} className={`cursor-pointer hover:bg-gray-100 p-2 ${selectedDisplayedFields.includes(field) ? 'bg-blue-200' : ''}`} onClick={() => setSelectedDisplayedFields(prevState => [...prevState, field])}>{field}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="mt-4">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Submit</button>
      </div> */}
    </div>
  );
};

export default DisplayHandling;
