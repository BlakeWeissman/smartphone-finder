import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header background-dark">
          <div className="wrap">
            <p className="color-light">header</p>
          </div>
        </div>
        <div className="app-display">
          <div className="wrap">
            <p className="color-dark">display</p>
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
