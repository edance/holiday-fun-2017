import React, { Component } from 'react';
import './styles.css';
import tree from '../../images/christmastree.jpg';
import Pixel from '../Pixel';

class ChristmasTree extends Component {
  constructor(props) {
    super(props);
    this.state = { pixels: [] };
  }
  componentDidMount() {
    const img = new Image();
    img.onload = this.setPixelData.bind(this);
    img.src = tree;
  }
  createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  resizeImage(image, width, height) {
    const canvas = this.createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(image, 0, 0, width, height);
    return canvas;
  }
  setPixelData(e) {
    let i, pixels = [];
    const img = e.currentTarget;
    const scale = 0.01 * this.props.scale;
    const scaledW = img.width * scale;
    const scaledH = img.height * scale;
    const canvas = this.resizeImage(img, scaledW, scaledH);
    const imgd = canvas.getContext('2d').getImageData(0, 0, scaledW, scaledH);
    const pix = imgd.data;
    for (i = 0; i < pix.length; i += 4) {
      pixels.push(`rgb(${pix[i]}, ${pix[i + 1]}, ${pix[i + 2]})`);
    }
    this.setState({ pixels: pixels });
  }
  render() {
    const pixels = this.state.pixels.map((x, idx) => {
      return <Pixel key={idx} background={x} />;
    });
    return (
      <div className="ChristmasTree">{pixels}</div>
    );
  }
}

export default ChristmasTree;
