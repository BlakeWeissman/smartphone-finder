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


class App extends Component {
  render() {
    return (
      <div className="app">
        <Appbar />
      </div>
    );
  }
}

export default App;