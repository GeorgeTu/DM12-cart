import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      quantity: 0,
      products: []
    };
  }
  makeProduct() {
    const newObj = {
      productName: this.state.productName,
      quantity: this.state.quantity
    };
    console.log("newObj: ", newObj);
    // const {productName, quantity} = this.state;
    // const newObj = {productName, quantity}
    const newProducts = this.state.products.slice();
    newProducts.push(newObj);
    this.setState({ products: newProducts }); // this.state = Object.assign({}, {products: [//some new value]})
  }
  render() {
    console.log(this.state);
    const products = this.state.products.map((product, ind) => {
      return (
        <div key={ind}>
          <div> Quantity: {product.quantity} </div>
          <div> Name: {product.productName} </div>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <input
            onChange={event =>
              this.setState({ productName: event.target.value })
            }
            placeholder="Product"
          />
          <input
            onChange={event => this.setState({ quantity: +event.target.value })}
            type="number"
            placeholder="Quantity"
          />
          <button onClick={() => this.makeProduct()} type="button">
            Submit
          </button>
        </header>
        {products}
      </div>
    );
  }
}

export default App;
