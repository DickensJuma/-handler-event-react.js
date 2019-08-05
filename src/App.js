import React from 'react';
import './App.css';
import LoginControl from './login';
import Profile from './Profile';
import Count from "./Count";
import Test from './test';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (<span>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
      <LoginControl/>
      <Test/>
      <Count/>
      <Profile logo_url="https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-9/67466835_1117185668482304_4136798481010393088_n.jpg?_nc_cat=110&_nc_oc=AQkCZ5s2kJ-BKrEAA5y3S9eS74IwXTCXGaNJL0CCocSdXro_zlePh50JgwIzVXtYIv0&_nc_ht=scontent.fnbo1-1.fna&oh=92d1d348a436179da0d148e536bfb01b&oe=5DE7697F"
     title="Mobile App, Web App and API Development and More"/></span>
    );
  }
}

export default App;
