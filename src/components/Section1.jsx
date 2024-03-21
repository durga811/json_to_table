// Section1.js

import React, { useState } from 'react';
import InputFile from './InputFile';
import SpecifyFormat from './SpecifyFormat';

const Section1 = ({SetInputFile ,inputFile, setCsvHeaders,setAvailableFields, SetcsvInRowFormat}) => {
  
  return (
    <div className="flex flex-col lg:flex-row">
      <InputFile SetInputFile={SetInputFile} />
      <SpecifyFormat inputFile={inputFile} setCsvHeaders={ setCsvHeaders} setAvailableFields={setAvailableFields} SetcsvInRowFormat={SetcsvInRowFormat} />
    </div>
  );
};

export default Section1;
