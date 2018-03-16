import React, { Component } from "react";


class Table extends React.Component {
  
  render() {
    return  (
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
       {/* <tbody>
            <tr>
             <td>{this.props.data.itemName}</td>
             <td>{this.props.data.itemQuant}</td>
             <td>{this.props.data.measureUnit}</td>
             <td>{this.props.data.estPrice}</td>
            <td>{this.total}</td>
           </tr>
          
           </tbody> */}
      </table>
      </div>
    )
  }
}

export default Table;