import React, {Component} from "react";

const TableItem = props => {
  console.log(props.info);
  console.log(props.info["itemName"])
    return (
      <tr>
      <td>{props.info["itemName"]}</td>
      </tr>
    );
  
}

export default TableItem;