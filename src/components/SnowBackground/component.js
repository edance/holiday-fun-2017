import React, { Component } from 'react';
import './styles.css';

class SnowBackground extends Component {
  render() {
    return (
      <div class="SnowBackground">
        <div class="snow near"></div>
        <div class="alt snow near"></div>
        <div class="snow mid"></div>
        <div class="alt snow mid"></div>
        <div class="snow far"></div>
        <div class="alt snow far"></div>
      </div>
    );
  }
}

export default SnowBackground;
