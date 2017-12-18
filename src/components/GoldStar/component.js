import React, { Component } from 'react';
import './styles.css';
import star from '../../images/star.jpg';
import PixelImage from '../PixelImage';

class GoldStar extends Component {
  render() {
    return (
      <div className="GoldStar">
        <PixelImage pixelSize={10} scale={3} src={star} />
      </div>
    );
  }
}

export default GoldStar;
