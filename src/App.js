import React, { Component } from "react";
import "./App.css";
import { Result } from "./Result.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      price: 0
    }
    this.priceChange = this.priceChange.bind(this);
  }

  //Function that runs if the price filter is changed
  priceChange(event) {
    let value = parseInt(document.getElementById("filter-price").value);
    if (isNaN(value) === false) {     
      this.setState({price: parseInt(document.getElementById("filter-price").value)});
    } 
    else {
      this.setState({price: 0});
    }
  }

  render() {
    return (
      <div className="app">
        <div className="app-header background-dark">
          <div className="wrap app-header-wrap flex">
            <div className="app-header-left">
              <h2 className="color-light">Smartphone Finder Prototype TEST</h2>
              <p className="color-light">created by <a href="http://blakeweissman.com/" className="color-light buttonless" target="_blank">Blake Weissman</a></p>
            </div>
            <div className="app-header-right">
              <p className="color-light">Price:</p>
              <input className="app-header-input" id="filter-price" onChange={this.priceChange} />
            </div>
          </div>
        </div>
        <Result price={this.state.price} />
        <footer className="background-dark">
          <p className="footer color-light text-center">&copy;2019 <a href="http://blakeweissman.com/" className="color-light buttonless" target="_blank">Blake Weissman</a></p>
        </footer>
      </div>
    );
  }
}

export default App;