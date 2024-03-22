// App.js

import React, { useState } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import DataTable from './components/DataTable';

const App = () => {
  // Example data
  const [inputFile,SetInputFile] = useState();
  //console.log(inputFile);
  const [selectedFields, setSelectedFieldsLocal] = useState([]);
  console.log(selectedFields);
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [availableFields, setAvailableFields] = useState([]);
  const [csvInRowFormat, SetcsvInRowFormat] = useState([])

  //const [selectedFields, setSelectedFieldsLocal] = useState([]);

  return (
    <div className="container mx-auto">
    <Section1 SetInputFile={SetInputFile} inputFile={inputFile} setCsvHeaders={ setCsvHeaders} setAvailableFields={setAvailableFields} SetcsvInRowFormat={SetcsvInRowFormat} />
    <Section2  setAvailableFields={setAvailableFields}  availableFields={availableFields} setSelectedFieldsLocal={setSelectedFieldsLocal} selectedFields={selectedFields}/>
    <DataTable csvInRowFormat={csvInRowFormat} selectedFields={selectedFields}/>
  </div>
  );
};

export default App;
