import React, {Component} from 'react';
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

export class Appbar extends Component {
  render() {
    return (
    <div>
        <TopAppBar
            title='Smartphone Finder '
            short
            navigationIcon={<MaterialIcon
                icon='menu'
                onClick={() => console.log('click')}
            />}
            actionItems={[
                <MaterialIcon icon='file_download' />,
                <MaterialIcon icon='print' />,
                <MaterialIcon icon='bookmark' />,
            ]}
        />
    </div>
    );
  }
}