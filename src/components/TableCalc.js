import React, { useState } from 'react';

const TableCalc = () => {
  const [rowData, setRowData] = useState([]);
  const [result, setResult] = useState(0);

  const handleRowChange = (event, rowIndex) => {
    const updatedRows = [...rowData];
    updatedRows[rowIndex] = Number(event.target.value);
    setRowData(updatedRows);
  };

  const addRow = () => {
    setRowData([...rowData, 0]);
  };

  const removeRow = (rowIndex) => {
    const updatedRows = [...rowData];
    updatedRows.splice(rowIndex, 1);
    setRowData(updatedRows);
  };

  const calculateSum = () => {
    const sum = rowData.reduce((acc, curr) => acc + curr, 0);
    setResult(sum);
  };

  return (
    <div className='text-center'>
      <table>
        <thead>
          <tr>
            <th>Row Data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((value, index) => (
            <tr key={index}>
              <td>
                <input type="number" value={value} onChange={(event) => handleRowChange(event, index)} />
              </td>
              <td>
                <button className='btn btn-error' onClick={() => removeRow(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn btn-primary mx-3' onClick={addRow}>Add Row</button>
      <button className='btn btn-secondary' onClick={calculateSum}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default TableCalc;
