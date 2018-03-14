import React from "react";

export const TableItem = props => {
  return (
    <tr>
      <td>{props.itemName}</td>
      <td>{props.itemQuant}</td>
      <td>{props.measureUnit}</td>
      <td>{props.estPrice}</td>
    </tr>
  );
};
