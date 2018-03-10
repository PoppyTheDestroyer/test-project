import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AddBtn } from "./components/AddBtn";
import { InputUnit } from "./components/InputUnit";
//import { DeleteBtn } from "./components/DeleteBtn";
import { InputFld } from "./components/InputFld";
import { InputTxt } from "./components/InputTxt";

class CreateRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        itemName: "",
        itemQuant: "",
        measureUnit: "",
        estPrice: ""
      },
      taxRate: "",
      estShip: "",
      totalPrice: "",
      dateNeeded: "",
      vendor: "",
      justify: "",
      comments: ""
    };
  }

  handleItemSave = event => {
    event.preventDefault();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    let items = {};
    items[name] = value;
    this.setState({
      item: items
    });
    console.log(value);
  };

  handleOtherInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="itemName">Item Name</label>
            <InputFld
              type="text"
              name="itemName"
              value={this.state.item.itemName}
              onChange={this.handleInputChange}
            />
            <label htmlFor="itemQuant">Quantity</label>
            <InputFld
              type="number"
              name="itemQuant"
              value={this.state.item.itemQuant}
              onChange={this.handleInputChange}
            />
            <label htmlFor="measureUnit">Unit of Measurement</label>
            <InputUnit
              type="select"
              name="measureUnit"
              value={this.state.item.measureUnit}
              onChange={this.handleInputChange}
            />
            <label htmlFor="estPrice">Estimated Price (USD)</label>
            <InputFld
              precision={2}
              step={0.01}
              type="number"
              name="estPrice"
              value={this.state.item.estPrice}
              onChange={this.handleInputChange}
            />
            <AddBtn onClick={this.handleItemSave}>Save Item</AddBtn>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <label htmlFor="taxRate">Tax Rate</label>
            <InputFld
              name="taxRate"
              type="number"
              precision={3}
              step={0.001}
              value={this.state.taxRate}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="estShip">Estimated Shipping</label>
            <InputFld
              name="estShip"
              precision={2}
              type="number"
              step={0.01}
              value={this.state.estShip}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="dateNeeded">Date Needed</label>
            <InputFld
              name="dateNeeded"
              type="date"
              value={this.state.dateNeeded}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="vendor">Vendor</label>
            <InputFld
              name="vendor"
              value={this.state.vendor}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="justify">Justification</label>
            <InputTxt
              name="justify"
              value={this.state.justify}
              onChange={this.handleOtherInputChange}
            />
            <label htmlFor="comments">Comments</label>
            <InputTxt
              name="comments"
              value={this.state.comments}
              onChange={this.handleOtherInputChange}
            />
            <AddBtn>Submit</AddBtn>
          </div>
        </div>
      </form>
    );
  }
}

ReactDOM.render(<CreateRequest />, document.querySelector(".container"));
