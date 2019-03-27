import React, { Component } from "react";
import "./App.css";
import { Card } from "./Card.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="app-header background-dark">
          <div className="wrap app-header-wrap">
            <h2 className="color-light">Smartphone Finder </h2>
            <p className="color-light">created by <a href="http://blakeweissman.com/" class="color-light" target="_blank">Blake Weissman</a></p>
          </div>
        </div>
        <div className="app-display">
          <div className="wrap flex">
            <Card phoneName="Nexus 6P" phoneDesc="" />
            <Card />
            <Card />
          </div>
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