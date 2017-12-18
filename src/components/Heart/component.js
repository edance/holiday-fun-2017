import React, { Component } from 'react';
import './styles.css';
import heart from '../../images/heart.jpg';
import PixelImage from '../PixelImage';

class Heart extends Component {
  render() {
    return (
      <div className="Heart">
        <PixelImage pixelSize={10} scale={4} src={heart} />
      </div>
    );
  }
}

export default Heart;
