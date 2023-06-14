import React, { useState } from "react";

const TableCase = () => {
  const [tableData, setTableData] = useState([
    { item: "Apple", quantity: 5, price: 1.5, totalPrice: "" },
    { item: "Banana", quantity: 3, price: 0.75, totalPrice: "" },
    { item: "Mango", quantity: 5, price: 0.8, totalPrice: "" },
  ]);

  const [inputValues, setInputValues] = useState({
    newItem: "",
    newQuantity: "",
    newPrice: "",
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    // Calculate the data for the new row based on existing rows and input field values
    // const totalQuantity = tableData.reduce((total, row) => total + row.quantity, 0) + parseInt(inputValues.newQuantity);
    // const totalPrice = tableData.reduce((total, row) => total + (row.quantity * row.price), 0) + (parseFloat(inputValues.newQuantity) * parseFloat(inputValues.newPrice));

    // Create the new row
    const newRow = {
      item: inputValues.newItem,
      quantity: parseInt(inputValues.newQuantity),
      price: parseFloat(inputValues.newPrice).toFixed(2),
    };

    // Update the state with the new table data and input field values
    setTableData([...tableData, newRow]);
    setInputValues({
      newItem: "",
      newQuantity: "",
      newPrice: "",
      totalPrice: "",
    });
  };

  const [totalSum, setTotalSum] = useState(0);

  const calculateResult = () => {
    const updatedRowsData = tableData?.map((rowData) => ({
      ...rowData,
      totalPrice: parseFloat(
        parseFloat(rowData.quantity) * parseFloat(rowData.price)
      ).toFixed(2),
    }));
    setTableData(updatedRowsData);
  };

  const subTotal = () => {
    let sum = 0;
    tableData.forEach((data) => {
      sum = sum + parseFloat(data.totalPrice);
    });
    setTotalSum(sum);
  };

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th className="px-5">Total Price</th>
          </tr>
        </thead>
        <tbody className="">
          {tableData?.map((row, index) => (
            <tr key={index}>
              <td>{row.item}</td>
              <td>{row.quantity}</td>
              <td>{row.price}</td>
              <td>{row.totalPrice}</td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                name="newItem"
                value={inputValues.newItem}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="newQuantity"
                value={inputValues.newQuantity}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="number"
                name="newPrice"
                value={inputValues.newPrice}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={addRow} className="btn btn-info mx-3">
        Add Row
      </button>
      <button onClick={calculateResult} className="btn btn-primary mt-3 ml-3">
        Calculate
      </button>
      <div className="flex justify-center align-middle">
        <p className="text-xl font-bold mt-4 ml-4">
            <button className="btn btn-secondary mr-3 font-bold" onClick={subTotal}>Sub Total</button>
          SubTotal amount: <span>{totalSum}</span>
        </p>
      </div>
    </div>
  );
};

export default TableCase;
