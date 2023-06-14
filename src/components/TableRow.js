import React, { useState } from "react";

const TableRow = ({ index, rowData, updateRowData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateRowData(index, { ...rowData, [name]: value });
  };

  return (
    <tr>
      <td>
        <input
          type="number"
          name="value1"
          value={rowData.value1}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="number"
          name="value2"
          value={rowData.value2}
          onChange={handleChange}
        />
      </td>
      <td>{rowData.result}</td>
    </tr>
  );
};

export default TableRow;
