<<<<<<< HEAD
import React, { Component } from 'react';
import './App.css';
=======
import React, {Component} from 'react';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import TopAppBar, {
  TopAppBarFixedAdjust, 
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
//import './App.css';
import { Appbar } from "./components/appbar";
import { FilterMenu } from "./components/filtermenu";
import { Card } from "./components/card";

>>>>>>> d87367dc4d77b59db015646d4f7cfaf429a23417

class App extends Component {
  render() {
    return (
      <div className="app">
<<<<<<< HEAD
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
=======
        <Appbar />
          <div className="display">
            <Card />
          </div>
>>>>>>> d87367dc4d77b59db015646d4f7cfaf429a23417
      </div>
    );
  }
}

export default App;