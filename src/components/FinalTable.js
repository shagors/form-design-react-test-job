import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "react-datepicker/dist/react-datepicker.css";

import "./form-stac.css";
import FinalPdf from "./FinalPdf";

const FinalTable = () => {
  const [tableData, setTableData] = useState([
    {
      buyer: "",
      deliveryAddress: "",
      notifyParty: "",
      finalDestination: "",
      item: "Thermal Printer",
      purchaseNumber: "CHB03",
      quantity: 500,
      pallet: 6,
      netWeight: 1.67,
      grossWeight: 2.87,
      totalVolume: 13,
      totalNetWeight: 0,
      totalGrossWeight: 0,
    },
  ]);

  const [inputValues, setInputValues] = useState({
    newItem: "",
    newPurchaseNumber: "",
    newQuantity: "",
    newPallet: "",
    newNetWeight: "",
    newGrossWeight: "",
    newTotalVolume: "",
    newTotalNetWeight: "",
    newTotalGrossWeight: "",
  });

  // input field
  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  // row add
  const addRow = () => {
    const newRow = {
      item: inputValues.newItem,
      purchaseNumber: inputValues.newPurchaseNumber,
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
      newPurchaseNumber: "",
      newQuantity: "",
      newPallet: "",
      newNetWeight: "",
      newGrossWeight: "",
      newTotalVolume: "",
      newTotalNetWeight: "",
      newTotalGrossWeight: "",
    });
  };

  // remove fields data
  const removeFields = (e, index) => {
    const data = tableData.length;
    if (data.index === data - 1) {
      
    }
  };

  const [totalSum, setTotalSum] = useState(0);

  // Main table data calculate
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

  // SUbtotal table data calculation
  const subTotal = () => {
    let allItem = "";
    let allPurchaseNumber = "";
    let subTotalGrossWeight = 0;
    let subTotalNetWeight = 0;
    let subTotalVolume = 0;
    let subtotalPalletQty = 0;
    let subTotalPcsQty = 0;
    tableData.map(
      (data) => (
        // console.log(typeof data.item),
        (allItem = data?.item.toUpperCase().concat([, allItem])),
        (allPurchaseNumber = data?.purchaseNumber
          .toUpperCase()
          .concat([, allPurchaseNumber])),
        (subTotalGrossWeight =
          subTotalGrossWeight + parseFloat(data?.totalGrossWeight)),
        (subTotalNetWeight =
          subTotalNetWeight + parseFloat(data?.totalNetWeight)),
        (subTotalVolume = subTotalVolume + parseFloat(data?.totalVolume)),
        (subtotalPalletQty = subtotalPalletQty + parseFloat(data?.pallet)),
        (subTotalPcsQty = subTotalPcsQty + parseInt(data?.quantity))
      )
    );
    setTotalSum({
      subTotalGrossWeight,
      subTotalNetWeight,
      subTotalVolume,
      subTotalPcsQty,
      subtotalPalletQty,
      allItem,
      allPurchaseNumber,
    });
  };

  // table cell empty function
  const cancel = () => {
    while (tableData.length > 0) {
      tableData.pop();
    }
  };

  // PDF download function
  const showDownloadLink = (totalSum) => (
    <PDFDownloadLink
      document={<FinalPdf totalSum={totalSum} />}
      fileName="final-result.pdf">
      Download PDF
    </PDFDownloadLink>
  );

  const [info, setInfo] = useState('')

  console.log(inputValues);

  return (
    <div className="w-4/5 m-auto">
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
        <div className="flex justify-between items-center my-2">
          <div>
            <textarea
              type="text"
              placeholder="Buyer Details"
              name="buyer"
              required={true}
              value={inputValues.buyer}
              onChange={handleInputChange}
              rows="3"
              cols="30"></textarea>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Delivery Address"
              name="deliveryAddress"
              required={true}
              value={inputValues.deliveryAddress}
              onChange={handleInputChange}
              rows="3"
              cols="30"></textarea>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Notify Party Details"
              name="notifyParty"
              required={true}
              value={inputValues.notifyParty}
              onChange={handleInputChange}
              rows="3"
              cols="30"></textarea>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Final Destination"
              name="finalDestination"
              required={true}
              value={inputValues.finalDestination}
              onChange={handleInputChange}
              rows="3"
              cols="30"></textarea>
          </div>
        </div>

        <div className="" style={{ maxWidth: "1100px" }}>
          <table className="mt-2 m-auto">
            <thead>
              <tr>
                <th className="p-2">Description of comodity</th>
                <th className="p-2">Purchase Order Number</th>
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
                  <td>{row.purchaseNumber}</td>
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
                    type="text"
                    name="newPurchaseNumber"
                    required={true}
                    value={inputValues.newPurchaseNumber}
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

          {/* New Row Add button */}
          <button onClick={addRow} className="btn btn-info mb-4">
            Add Row
          </button>

          {/* Calculate button */}
          <button
            onClick={calculateResult}
            className="btn btn-primary mt-3 mx-3">
            Calculate
          </button>

          {/* Delete button */}
          <button className="btn btn-error" onClick={removeFields}>
            Delete Row
          </button>

          {/* Sub total sheet button */}
          <button
            className="btn btn-secondary font-bold mx-3"
            onClick={subTotal}>
            Sub Total Sheet
          </button>

          {/* Cancel button */}
          <button className="btn btn-warning font-bold" onClick={cancel}>
            Clear Data
          </button>

          {/* Download button */}
          <button className="btn btn-success ml-3">
            {showDownloadLink(totalSum)}
          </button>

          {/* Final result table */}
          <div className="flex justify-center">
            <table>
              <thead>
                <tr>
                  <th className="p-2">Description of comodity</th>
                  <th className="p-2">Order Number</th>
                  <th className="p-2">Gross Weight</th>
                  <th className="p-2">Net Weight</th>
                  <th className="p-2">Volume</th>
                  <th className="p-2">Total Pallet Qty</th>
                  <th className="p-2">Total Pcs Qty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{totalSum.allItem}</td>
                  <td className="text-center">{totalSum.allPurchaseNumber}</td>
                  <td className="text-center">
                    {totalSum.subTotalGrossWeight} KG.
                  </td>
                  <td className="text-center">
                    {totalSum.subTotalNetWeight} .KG
                  </td>
                  <td className="text-center">
                    {totalSum.subTotalVolume} CBM.
                  </td>
                  <td className="text-center">{totalSum.subtotalPalletQty}</td>
                  <td className="text-center">{totalSum.subTotalPcsQty}</td>
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
