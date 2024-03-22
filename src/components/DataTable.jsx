import React from 'react';

const DataTable = ({ selectedFields, csvInRowFormat }) => {
  if (!csvInRowFormat || csvInRowFormat.length === 0 || !csvInRowFormat[0]) {
    return null; // Return null or display an error message if csvInRowFormat is not defined or empty
  }

  const fieldIndices = selectedFields.map(field => csvInRowFormat[0].indexOf(field));
  const popularityIndex = csvInRowFormat[0].indexOf('products_popularity');
  const sortedData = csvInRowFormat.slice(1).sort((a, b) => b[popularityIndex] - a[popularityIndex]);
  const displayData = selectedFields.length === 0 ? sortedData.slice(0, 10) : sortedData;

  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 ml-4">Displaying Data in Table Format</h2>
      <div className="max-w-full overflow-x-auto m-4">
        <table className="border-collapse border w-full bg-green-50">
          <thead>
            <tr className="bg-gray-200">
              {selectedFields.map((field, index) => (
                <th key={index} className="border border-gray-400 px-4 py-2">{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {fieldIndices.map((fieldIndex, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-400 px-4 py-2">{row[fieldIndex]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
