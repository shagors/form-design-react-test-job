import React, { useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const [rowsData, setRowsData] = useState([
    { value1: "", value2: "", result: "" },
    { value1: "", value2: "", result: "" },
  ]);

  const updateRowData = (index, updatedRowData) => {
    const updatedRowsData = [...rowsData];
    updatedRowsData[index] = updatedRowData;
    setRowsData(updatedRowsData);
  };

  const calculateResult = () => {
    const updatedRowsData = rowsData.map((rowData) => ({
      ...rowData,
      result: parseFloat(rowData.value1) + parseFloat(rowData.value2),
    }));
    setRowsData(updatedRowsData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Value 1</th>
            <th>Value 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {rowsData.map((rowData, index) => (
            <TableRow
              key={index}
              index={index}
              rowData={rowData}
              updateRowData={updateRowData}
            />
          ))}
        </tbody>
      </table>
      <button onClick={calculateResult} className="btn btn-primary mt-3 ml-3">Calculate</button>
    </div>
  );
};

export default Table;
