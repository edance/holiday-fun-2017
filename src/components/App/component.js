import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import * as ScrollMagic from 'scrollmagic';
import './styles.css';

class App extends Component {
  componentDidMount() {
    console.log(ScrollMagic.Controller);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
