import React, { Component } from "react";
import { TableItem } from "./TableItem";

class Table extends Component {
  render() {
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
            <TableItem />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
