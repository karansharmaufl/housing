import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const AppBarMain =React.createClass({
  getInitialState(){
    return {open: false};
  },
  _toggle(e){
    e.preventDefault();
    //this.refs.Drawer.toggle();
    this.setState({open: !this.state.open})
  },
  render(){
    return(
      <div>
        <AppBar onLeftIconButtonTouchTap={this._toggle} title="Rent-In-Noida.com"/>
        <Drawer
        ref="Drawer"
        docked={false}
        open={this.state.open}
        //onRequestChange = {open => this.setState({open})}
        >
        <MenuItem>Login</MenuItem>
        <MenuItem>Signup</MenuItem>
        </Drawer>
      </div>
    );
  }
});

export default AppBarMain;