import React, { Component } from "react";
import "./App.css";
import { Result } from "./Result.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header background-dark">
          <div className="wrap app-header-wrap flex">
            <div className="app-header-left">
              <h2 className="color-light">Smartphone Finder Prototype </h2>
              <p className="color-light">created by <a href="http://blakeweissman.com/" className="color-light" target="_blank">Blake Weissman</a></p>
            </div>
            <div className="app-header-right">
              <p className="color-light">Price:</p>
              <input className="app-header-input" onChange={Result.update} />
            </div>
          </div>
        </div>
        <Result />
        <footer className="background-dark">
          <p className="footer color-light text-center">&copy;2019 <a href="http://blakeweissman.com/" className="color-light" target="_blank">Blake Weissman</a></p>
        </footer>
      </div>
    );
  }
}

export default App;