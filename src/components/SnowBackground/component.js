import React, { Component } from 'react';
import './styles.css';

class SnowBackground extends Component {
  render() {
    return (
      <div className="SnowBackground">
        <div className="snow near"></div>
        <div className="alt snow near"></div>
        <div className="snow mid"></div>
        <div className="alt snow mid"></div>
        <div className="snow far"></div>
        <div className="alt snow far"></div>
      </div>
    );
  }
}

export default SnowBackground;
