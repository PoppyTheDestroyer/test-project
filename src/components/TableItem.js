import React, { Component } from "react";

class TableItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  shouldComponentUpdate(nextState, nextProps) {
    let total = parseFloat(
      this.props.data.itemQuant * this.props.data.estPrice
    );
    console.log(nextState.data);
    return true;
  }
  render() {
    return (
      <tr>
        <td>{this.props.data.itemName}</td>
        <td>{this.props.data.itemQuant}</td>
        <td>{this.props.data.measureUnit}</td>
        <td>{this.props.data.estPrice}</td>
        <td> </td>
      </tr>
    );
  }
}

export default TableItem;
