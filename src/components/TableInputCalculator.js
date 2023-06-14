import React, { useState } from "react";

const TableInputCalculator = () => {
  const [data, setData] = useState([]);

  const handleInputChange = (event, rowIndex, colIndex) => {
    const updatedData = [...data];
    updatedData[rowIndex][colIndex] = event.target.value;
    setData(updatedData);
  };

  const handleCalculate = () => {
    // Perform your calculation here using the data array
    // For example, you can sum all the values in the table
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        const value = parseFloat(data[i][j]);
        if (!isNaN(value)) {
          sum += value;
        }
      }
    }
    console.log("Sum:", sum);
  };

  const renderTable = () => {
    return (
      <table>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(event) =>
                      handleInputChange(event, rowIndex, colIndex)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {renderTable()}
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default TableInputCalculator;
