import React, { Component } from 'react';
import './styles.css';
import bus from '../../images/bus.jpg';
import PixelImage from '../PixelImage';

class PartyBus extends Component {
  render() {
    return (
      <div className="PartyBus">
        <PixelImage pixelSize={10} scale={15} src={bus} />
      </div>
    );
  }
}

export default PartyBus;
