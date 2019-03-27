import React, { Component } from "react";
import "./App.css";
import { Result } from "./Result.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header background-dark">
          <div className="wrap app-header-wrap">
            <h2 className="color-light">Smartphone Finder Prototype </h2>
            <p className="color-light">created by <a href="http://blakeweissman.com/" className="color-light" target="_blank">Blake Weissman</a></p>
          </div>
        </div>
        <div className="app-display">
          <Result />
        </div>
        <footer className="background-dark">
          <div className="wrap">
            <p className="color-light">footer</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;