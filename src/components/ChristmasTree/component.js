import React, { Component } from 'react';
import './styles.css';
import tree from '../../images/christmastree.jpg';
import PixelImage from '../PixelImage';

class ChristmasTree extends Component {
  render() {
    return (
      <div className="ChristmasTree">
        <PixelImage pixelSize={10} scale={5} src={tree} />
      </div>
    );
  }
}

export default ChristmasTree;
