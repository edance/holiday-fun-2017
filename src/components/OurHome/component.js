import React, { Component } from 'react';
import './styles.css';
import home from '../../images/home.jpg';
import PixelImage from '../PixelImage';

class OurHome extends Component {
  render() {
    return (
      <div className="OurHome">
        <PixelImage pixelSize={10} scale={5} src={home} />
      </div>
    );
  }
}

export default OurHome;
