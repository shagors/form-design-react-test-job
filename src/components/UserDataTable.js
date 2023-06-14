import React, { useState, useEffect, useRef } from 'react';

const UserDataTable = () => {
    const ref = useRef();
  const [controllers, setControllers] = useState([
    [ref(), ref()],
    [ref(), ref()],
  ]);

  const addRow = () => {
    setControllers((prevState) => [
      ...prevState,
      Array(prevState[0].length).fill(ref()),
    ]);
  };

  const removeRow = () => {
    if (controllers.length > 2) {
      setControllers((prevState) => {
        const updatedControllers = [...prevState];
        updatedControllers.pop();
        return updatedControllers;
      });
    }
  };

  const addColumn = () => {
    setControllers((prevState) => {
      const updatedControllers = prevState.map((row) => [
        ...row,
        ref(),
      ]);
      return updatedControllers;
    });
  };

  const removeColumn = () => {
    if (controllers[0].length > 2) {
      setControllers((prevState) => {
        const updatedControllers = prevState.map((row) => {
          const newRow = [...row];
          newRow.pop();
          return newRow;
        });
        return updatedControllers;
      });
    }
  };

  useEffect(() => {
    return () => {
      controllers.forEach((row) => {
        row.forEach((controller) => {
          controller.current = null;
        });
      });
    };
  }, []);

  return (
    <div>
      <div>
        <h1>User Data Table</h1>
      </div>
      <div>
        <table style={{ border: '1px solid black' }}>
          <tbody>
            {controllers.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((controller, colIndex) => (
                  <td key={colIndex}>
                    <input type="text" ref={controller} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={removeRow}>Remove</button>
        </div>
        </div>
  )
}

export default UserDataTable;