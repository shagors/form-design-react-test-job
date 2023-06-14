import React, { useRef, useState } from "react";
import Nature from "../img/nature.jpg";

import "react-datepicker/dist/react-datepicker.css";

import "./form-stac.css";

const FormStac = () => {
  const [formFields, setFormFields] = useState([
    {
      buyerAddress: "",
      destinationCountry: "",
      deliveryAddress: "",
      notifyParty: "",
      portOfDestination: "",
      descriptionOfComodity: "",
      styleNo: "",
      purchaseOrderNumber: "",
      hsCode: "",
      cartonFrom: "",
      cartonTo: "",
      numberOfPallet: "",
      numberOfpcsPack: "",
      numberOfPiece: "",
      netWeight: "",
      grossWeight: "",
      totalVolume: "",
      totalNetWeight: "",
      totalGrossWeight: "",
    },
  ]);

  const [inputValues, setInputValues] = useState({
    newBuyerAddress: "",
    newDestinationCountry: "",
    newDeliveryAddress: "",
    newNotifyParty: "",
    newPortOfDestination: "",
    newDescriptionOfComodity: "",
    newStyleNo: "",
    newPurchaseOrderNumber: "",
    newHsCode: "",
    newCartonFrom: 0,
    newCartonTo: 0,
    newNumberOfPallet: 0,
    newNumberOfpcsPack: 0,
    newNumberOfPiece: 0,
    newNetWeight: 0,
    newGrossWeight: 0,
    newTotalVolume: 0,
    newTotalNetWeight: 0,
    newTotalGrossWeight: 0,
  });

  const handlecompute = () => {};

  const handleFormChange = (e, index) => {
    const data = [...formFields];
    data[index][e.target.name] = e.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    const updateRowsData = formFields?.map((rowData) => ({
      ...rowData,
      totalNetWeight:
        parseFloat(rowData.numberOfPiece) * parseFloat(rowData.netWeight),
      totalGrossWeight:
        parseFloat(rowData.numberOfPiece) *
        parseFloat(rowData.grossWeight).toFixed(2),
    }));
    setFormFields(updateRowsData);
  };

  const removeFields = (e, index) => {
    const data = document.getElementById("orginal-tr");
    data.remove();
  };

  const handleCloneClick = () => {
    const node = document.getElementById("orginal-tr");
    const clone = node.cloneNode(true);
    const targetTr = document.getElementById("target-div");
    targetTr.appendChild(clone);
  };

  const calculateSum = () => {
    let sum = 0;
  };

  console.log(formFields);

  return (
    <div className="w-4/5 m-auto">
      <img
        src={Nature}
        alt="Banner"
        className="h-28"
        style={{ width: "100%" }}
      />
      <div className="mt-3 grid justify-center items-center align-middle">
        <p>UTTRA EXPORT PROCESSING ZONE</p>
        <p>MSSFB # 4, UTTRA EPZ, NILPHAMRI, RANGPUR, BANGLADESH</p>
        <p>MOB: +8801760053135</p>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-4 border-y-2 border-solid border-black">
          <div className="col-start-3 col-end-9 col-span-4 text-2xl font-bold">
            PACKING LISTE DE COLISAGE / PACKING LIST <br /> NO. THT2301010
          </div>
          <div className="col-start-10 flex gap-2 font-bold place-items-baseline">
            DATE: <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index} id="target-div">
                <table className="w-full mt-2">
                  <thead>
                    <tr>
                      <th colSpan="10">EXPEDITURE / SENDER</th>
                      <th colSpan="4">BUYER</th>
                      <th colSpan="4">FINAL DESTANETION</th>
                      <th colSpan="8">PROVENANCE / COUNTRY OF SHIPMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="10">
                        <textarea
                          className="font-bold text-center w-full h-full p-5"
                          readOnly
                          defaultValue="THT-SPACE ELECTRICAL COMPANY LTD. MS-SFB#4 (WEST WINGS)
                        UTTARA EPZ, NILPHAMARI, RANGPUR-5300, BANGLADESH. MOB:
                        +8801760053135"
                        />
                      </td>
                      <td colSpan="4">
                        <textarea
                          className="textarea textarea-md w-full max-w-xs h-full"
                          placeholder="Type Buyer Address"
                          name="buyerAddress"
                          required
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.buyerAddress}></textarea>
                      </td>
                      <td colSpan="4">
                        <input
                          type="text"
                          placeholder="Type Destination Country"
                          className="input w-full max-w-xs"
                          name="destinationCountry"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.destinationCountry}
                        />
                      </td>
                      <td rowSpan="4" colSpan="4">
                        <p className="flex justify-center">BANGLADESH</p>
                      </td>
                    </tr>

                    <tr>
                      <th colSpan="10">Delivery Address</th>
                      <th colSpan="4">Notify Party</th>
                      <th colSpan="4">Port Of Destination</th>
                    </tr>

                    <tr>
                      <td rowSpan="2" colSpan="10">
                        <textarea
                          placeholder="Type Buyer Address"
                          className="textarea textarea-md w-full mx-1"
                          name="deliveryAddress"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.deliveryAddress}></textarea>
                      </td>
                      <td rowSpan="2" colSpan="4">
                        <textarea
                          placeholder="Notify Party"
                          className="textarea textarea-md w-full max-w-xs"
                          name="notifyParty"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.notifyParty}></textarea>
                      </td>
                      <td rowSpan="1" colSpan="4">
                        <input
                          type="text"
                          placeholder="Type Destination PORT"
                          className="input w-full max-w-xs"
                          name="portOfDestination"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.portOfDestination}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="4">
                        <textarea
                          readOnly
                          className="font-bold text-center w-full"
                          defaultValue="INCOTERM: CFR, CHITTAGONG"
                        />
                      </td>
                    </tr>

                    <tr>
                      <th colSpan="4" rowSpan="2">
                        Description of Comodity
                      </th>
                      <th colSpan="3" rowSpan="2">
                        Style No.
                      </th>
                      <th colSpan="3" rowSpan="2">
                        Purchase Order Number
                      </th>
                      <th colSpan="2" rowSpan="2">
                        HS Code
                      </th>
                      <th colSpan="2" rowSpan="1">
                        CARTON NO
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Number of Pallet
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Number of pcs / perpack
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Number of pieces
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Net Weight / Parcel KGS
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Gross Weight / Parcel KGS
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Volume total / Total Volume
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Net Weight / Total Net Weight
                      </th>
                      <th colSpan="1" rowSpan="2">
                        Grows Weight / Totak Gross Weight
                      </th>
                    </tr>

                    <tr>
                      <td>From</td>
                      <td>TO</td>
                    </tr>

                    <tr id="orginal-tr">
                      <td colSpan="4" rowSpan="1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="descriptionOfComodity"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.descriptionOfComodity}
                        />
                      </td>
                      <td colSpan="3" rowSpan="1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="styleNo"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.styleNo}
                        />
                      </td>
                      <td colSpan="3" rowSpan="1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="purchaseOrderNumber"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.purchaseOrderNumber}
                        />
                      </td>
                      <td colSpan="2" rowSpan="1">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="hsCode"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.hsCode}
                        />{" "}
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="cartonFrom"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.cartonFrom}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="cartonTo"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.cartonTo}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="numberOfPallet"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.numberOfPallet}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="numberOfpcsPack"
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="numberOfPiece"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.numberOfPiece}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="netWeight"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.netWeight}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="grossWeight"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.grossWeight}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="totalVolume"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.totalVolume}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="totalNetWeight"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.totalNetWeight}
                        />
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <input
                          type="number"
                          placeholder="Type here"
                          className="input input-ghost w-full max-w-xs"
                          name="totalGrossWeight"
                          onChange={(e) => handleFormChange(e, index)}
                          value={form.totalGrossWeight}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
          <table>
            
          </table>
        </form>

        <div className="flex justify-end mt-5">
          <button className="btn btn-primary" onClick={handleCloneClick}>
            Add New Row
          </button>
          <button className="btn btn-success mx-3" onClick={submit}>
            Save
          </button>
          <button className="btn btn-warning mr-3" onClick={calculateSum}>
            Calculate
          </button>
          <button className="btn btn-error" onClick={removeFields}>
            Delete Row
          </button>
        </div>
        <div>
          <div className="flex justify-between mt-5">
            <div className="">
              <h2>MAERSK & NO: </h2>
              <p>MODEL NO: PRINTER</p>
              <p>CARTON QUANTITY ON PALLET: 1066 CTNS</p>
              <p>MADE IN BANGLADESH</p>
              <p>PALLET NO: 10</p>
            </div>

            <table>
              <tr>
                <th className="p-2">Gross Weight:</th>
                <td className="p-2">
                  <input
                    type="number"
                    placeholder="Type here"
                    className="input input-ghost w-full max-w-xs"
                    name="totalGrossWeight"
                    readOnly
                    value={formFields.totalGrossWeight}
                  />
                </td>
              </tr>
              <tr>
                <th className="p-2">Net Weight:</th>
                <td className="p-2">{formFields.totalNetWeight}</td>
              </tr>
              <tr>
                <th className="p-2">Volume:</th>
                <td className="p-2">22.46 CBM.</td>
              </tr>
              <tr>
                <th className="p-2">Total Quantity</th>
                <td className="p-2">10</td>
              </tr>
              <tr>
                <th className="p-2">Total Pcs Qty:</th>
                <td className="p-2">1066</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormStac;
