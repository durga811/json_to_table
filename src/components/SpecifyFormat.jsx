// SpecifyFormat.jsx

import React, { useState } from 'react';

const SpecifyFormat = ({inputFile, setCsvHeaders,setAvailableFields, SetcsvInRowFormat}) => {
  const [fileType, setFileType] = useState('csv');
  const [characterEncoding, setCharacterEncoding] = useState('UTF-8');
  const [delimiter, setDelimiter] = useState(',');
  const [hasHeader, setHasHeader] = useState(false);
  const [csvContent, setCsvContent] = useState('');


  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  const handleCharacterEncodingChange = (e) => {
    setCharacterEncoding(e.target.value);
  };

  const handleDelimiterChange = (e) => {
    setDelimiter(e.target.value);
  };

  const handleHasHeaderChange = (e) => {
    setHasHeader(e.target.checked);
  };

  // const handleSubmit = () => {
  //   // Simulate CSV file data received from input file
  //   const csvFileData = inputFile
  //   console.log(csvFileData)
  //   // if (fileType === 'json') {
  //   //   // Convert JSON to CSV
  //   //   const json = JSON.parse(csvFileData);
  //   //   const headers = Object.keys(json[Object.keys(json)[0]]).join(delimiter);
  //   //   const rows = Object.keys(json).map(key => Object.values(json[key]).join(delimiter));
  //   //   const csv = `${hasHeader ? headers + '\n' : ''}${rows.join('\n')}`;
  //   //   console.log('hdghj')
  //   //   setCsvContent(csv);
  //   // } else {
  //   //   // Handle CSV file submission
  //   //   setCsvContent(csvFileData);
  //   // }
  // };
  const handleSubmit = () => {
    if (!inputFile) {
      setErrorMessage("Please select a file first.");
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = () => {
      const content = reader.result;
      setCsvContent(content);
      let rows = [];
  
      if (fileType === 'json') {
        try {
          const jsonData = JSON.parse(content);
          const products = jsonData.products;
  
          // Push headers
          rows.push(['products_ID', 'subcategory', 'title', 'price', 'popularity']);
  
          // Push data for each product
          Object.keys(products).forEach(productId => {
            const product = products[productId];
            rows.push([productId, product.subcategory, product.title, product.price, product.popularity]);
          });
        } catch (error) {
          setErrorMessage("Error parsing JSON file.");
          return;
        }
      } else if (fileType === 'csv') {
        // Parse CSV content
        rows = content.split('\n').map(row => row.split(','));
      }
  
      SetcsvInRowFormat(rows);
  
      // Extract headers
      const headers = rows[0];
      setCsvHeaders(headers);
      console.log(rows);
      setAvailableFields(headers);
    };
  
    reader.readAsText(inputFile);
  };
  
  
  

  return (
    <div className="w-full lg:w-1/2 p-4 border-4 border-green-900 m-2 rounded-lg bg-green-50">
      <h2 className="text-lg font-semibold mb-4">Step 2: Specify Format</h2>
      <div>
        <label htmlFor="fileType" className="block mb-2">File Type:</label>
        <div>
          <input type="radio" id="csv" name="fileType" value="csv" checked={fileType === 'csv'} onChange={handleFileTypeChange} className="mr-2 " />
          <label htmlFor="csv" className="mr-4">CSV</label>
          <input type="radio" id="json" name="fileType" value="json" checked={fileType === 'json'} onChange={handleFileTypeChange} />
          <label htmlFor="json">JSON</label>
        </div>
      </div>

      {fileType === 'csv' && (
        <>
          <div className="mt-4">
            <label htmlFor="characterEncoding">Character Encoding:</label>
            <select id="characterEncoding" value={characterEncoding} onChange={handleCharacterEncodingChange} className="block border border-gray-300 px-4 py-2 mt-1">
              <option value="UTF-8">UTF-8</option>
              <option value="UTF-32">UTF-32</option>
              <option value="ASCII">ASCII</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="delimiter">Delimiter:</label>
            <select id="delimiter" value={delimiter} onChange={handleDelimiterChange} className="block border border-gray-300 px-4 py-2 mt-1">
              <option value=",">Comma</option>
              <option value="\t">Tab</option>
            </select>
          </div>
          <div className="mt-4">
            <input type="checkbox" id="hasHeader" checked={hasHeader} onChange={handleHasHeaderChange} className="mr-2" />
            <label htmlFor="hasHeader">Has Header</label>
          </div>
        </>
      )}

      <button onClick={handleSubmit} className="mt-4 bg-green-800 text-white px-4 py-2 rounded">Submit</button>

      {csvContent && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{fileType.toUpperCase()} Content:</h3>
          <textarea value={csvContent} rows="5" className="w-full border border-gray-300 p-2 mt-2" readOnly></textarea>
        </div>
      )}
    </div>
  );
};

export default SpecifyFormat;
