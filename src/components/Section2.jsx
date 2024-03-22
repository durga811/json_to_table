// Section2.js

import React from 'react';
import DisplayHandling from './DisplayHandling';

const Section2 = ({availableFields,setAvailableFields, setSelectedFieldsLocal,selectedFields}) => {
  return (
    <div className="flex flex-col  justify-center lg:flex-row mt-8">
      <DisplayHandling setAvailableFields={setAvailableFields} availableFields={availableFields} setSelectedFieldsLocal={setSelectedFieldsLocal} selectedFields={selectedFields}/>
    </div>
  );
};

export default Section2;
