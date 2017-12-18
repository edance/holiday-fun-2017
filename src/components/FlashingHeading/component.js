import React, { Component } from 'react';
import './styles.css';

class FlashingHeading extends Component {
  render() {
    return (
      <div className="FlashingHeading">
        <div className="header background"></div>
        <div className="header text">
          <h1>{this.props.children}</h1>
        </div>
      </div>
    );
  }
}

export default FlashingHeading;
