import React, { Component } from "react";
import TableItem from "./TableItem";
const Table = props => {
  console.log(props.data);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit of Measurement</th>
            <th>Estimated Price</th>
            <th>Estimated Total</th>
          </tr>
        </thead>
        <tbody>
        <TableItem 
        info={props.data} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
