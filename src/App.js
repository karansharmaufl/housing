import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarMain from './AppBarMain.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      
       <MuiThemeProvider> 
      <AppBarMain/>
        </MuiThemeProvider>
     
    );
  }
}

export default App;
