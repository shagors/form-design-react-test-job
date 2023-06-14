import React, { useState } from "react";
import Nature from "../img/nature.jpg";

import "react-datepicker/dist/react-datepicker.css";

import "./form-stac.css";

const FinalTable = () => {
  const [tableData, setTableData] = useState([
    {
      item: "Thermal Printer",
      quantity: 500,
      pallet: 6,
      netWeight: 1.67,
      grossWeight: 2.87,
      totalVolume: 13,
      totalNetWeight: "",
      totalGrossWeight: "",
    },
    {
      item: "Dot Printer",
      quantity: 300,
      pallet: 6,
      netWeight: 1.67,
      grossWeight: 2.87,
      totalVolume: 13,
      totalNetWeight: "",
      totalGrossWeight: "",
    },
  ]);

  const [inputValues, setInputValues] = useState({
    newItem: "",
    newQuantity: "",
    newPallet: "",
    newNetWeight: "",
    newGrossWeight: "",
    newTotalVolume: "",
    newTotalNetWeight: "",
    newTotalGrossWeight: "",
  });

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    const newRow = {
      item: inputValues.newItem,
      quantity: inputValues.newQuantity,
      pallet: inputValues.newPallet,
      netWeight: inputValues.newNetWeight,
      grossWeight: inputValues.newGrossWeight,
      totalVolume: inputValues.newTotalVolume,
      totalNetWeight: inputValues.newTotalNetWeight,
      totalGrossWeight: inputValues.newTotalGrossWeight,
    };

    setTableData([...tableData, newRow]);
    setInputValues({
      newItem: "",
      newQuantity: "",
      newPallet:"",
      newNetWeight: "",
      newGrossWeight: "",
      newTotalVolume: "",
      newTotalNetWeight: "",
      newTotalGrossWeight: "",
    });
  };

  const removeFields = (e, index) => {
    const data = document.getElementById("orginal-tr");
    data.remove();
  };

  const [totalSum, setTotalSum] = useState(0);

  const calculateResult = () => {
    const updatedRowsData = tableData?.map((rowData) => ({
      ...rowData,
      totalNetWeight: parseFloat(
        parseFloat(rowData.quantity) * parseFloat(rowData.netWeight)
      ).toFixed(2),
      totalGrossWeight: parseFloat(
        parseFloat(rowData.quantity) * parseFloat(rowData.grossWeight)
      ).toFixed(2),
    }));
    setTableData(updatedRowsData);
  };

  const subTotal = () => {
    let allItem = "";
    let subTotalGrossWeight = 0;
    let subTotalNetWeight = 0;
    let subTotalVolume = 0;
    let subtotalPalletQty = 0;
    let subTotalPcsQty = 0;
    tableData.map(
      (data) =>
        (
            // console.log(typeof data.item),
            allItem = (data.item.concat([ allItem])),
            subTotalGrossWeight = subTotalGrossWeight + parseFloat(data.totalGrossWeight),
            subTotalNetWeight = subTotalNetWeight + parseFloat(data.totalNetWeight),
            subTotalVolume = subTotalVolume + parseFloat(data.totalVolume),
            subtotalPalletQty = subtotalPalletQty + parseFloat(data.pallet),
            subTotalPcsQty = subTotalPcsQty + parseInt(data.quantity)
          )
    );
    setTotalSum({subTotalGrossWeight, subTotalNetWeight, subTotalVolume, subTotalPcsQty, subtotalPalletQty, allItem});
  };

  console.log(totalSum);

  return (
    <div className="w-3/4 m-auto">
      {/* Heading for company */}
      <div className="mt-3 grid justify-center items-center align-middle">
        <p>UTTRA EXPORT PROCESSING ZONE</p>
        <p>MSSFB # 4, UTTRA EPZ, NILPHAMRI, RANGPUR, BANGLADESH</p>
        <p>MOB: +8801760053135</p>
      </div>

      <div>
        {/* Table top heading */}
        <div className="grid grid-cols-12 gap-4 border-y-2 border-solid border-black">
          <div className="col-start-3 col-end-9 col-span-4 text-2xl font-bold">
            PACKING LISTE DE COLISAGE / PACKING LIST <br /> NO. THT2301010
          </div>
          <div className="col-start-10 flex gap-2 font-bold place-items-baseline">
            DATE: <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="">
          <table className="mt-2 m-auto">
            <thead>
              <tr>
                <th className="p-2">Description of comodity</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Pallet</th>
                <th className="p-2">Net Weight</th>
                <th className="p-2">Gross Weight</th>
                <th className="p-2">Total Volume</th>
                <th className="p-2">Total Net Weight</th>
                <th className="p-2">Total Gross Weight</th>
              </tr>
            </thead>
            <tbody className="">
              {tableData?.map((row, index) => (
                <tr key={index}>
                  <td>{row.item}</td>
                  <td>{row.quantity}</td>
                  <td>{row.pallet}</td>
                  <td>{row.netWeight}</td>
                  <td>{row.grossWeight}</td>
                  <td>{row.totalVolume}</td>
                  <td>{row.totalNetWeight}</td>
                  <td>{row.totalGrossWeight}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <input
                    type="text"
                    name="newItem"
                    required={true}
                    value={inputValues.newItem}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newQuantity"
                    required
                    value={inputValues.newQuantity}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newPallet"
                    required
                    value={inputValues.newPallet}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newNetWeight"
                    required
                    value={inputValues.newNetWeight}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newGrossWeight"
                    required
                    value={inputValues.newGrossWeight}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newTotalVolume"
                    required
                    value={inputValues.newTotalVolume}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newTotalNetWeight"
                    required
                    value={inputValues.newTotalNetWeight}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="newTotalGrossWeight"
                    required
                    value={inputValues.newTotalGrossWeight}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button onClick={addRow} className="btn btn-info mb-4">
            Add Row
          </button>
          <button
            onClick={calculateResult}
            className="btn btn-primary mt-3 mx-3">
            Calculate
          </button>
          <button className="btn btn-error mr-3" onClick={removeFields}>
            Delete Row
          </button>

          <button className="btn btn-secondary font-bold" onClick={subTotal}>
            Sub Total Sheet
          </button>
          <div className="flex justify-center">
            <table>
              <thead>
                <tr>
                  <th className="p-2">Description of comodity</th>
                  <th className="p-2">Gross Weight</th>
                  <th className="p-2">Net Weight</th>
                  <th className="p-2">Volume</th>
                  <th className="p-2">Total Pallet Qty</th>
                  <th className="p-2">Total Pcs Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{totalSum.allItem}</td>
                  <td>{totalSum.subTotalGrossWeight}</td>
                  <td>{totalSum.subTotalNetWeight}</td>
                  <td>{totalSum.subTotalVolume}</td>
                  <td>{totalSum.subtotalPalletQty}</td>
                  <td>{totalSum.subTotalPcsQty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalTable;
