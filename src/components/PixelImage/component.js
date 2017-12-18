import React, { Component } from 'react';
import './styles.css';
import Pixel from '../Pixel';

class PixelImage extends Component {
  constructor(props) {
    super(props);
    this.state = { pixels: [], width: 0, height: 0 };
  }
  componentDidMount() {
    const img = new Image();
    img.onload = this.setPixelData.bind(this);
    img.src = this.props.src;
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
  createColor(red, green, blue) {
    if (red > 200 && green > 200 && blue > 200) {
      return '';
    }
    return `rgb(${red}, ${green}, ${blue})`;
  }
  setPixelData(e) {
    let i, pixels = [];
    const img = e.currentTarget;
    const scale = 0.01 * this.props.scale;
    const scaledW = parseInt(img.width * scale, 10);
    const scaledH = parseInt(img.height * scale, 10);
    const canvas = this.resizeImage(img, scaledW, scaledH);
    const imgd = canvas.getContext('2d').getImageData(0, 0, scaledW, scaledH);
    const pix = imgd.data;
    for (i = 0; i < pix.length; i += 4) {
      pixels.push(this.createColor(pix[i], pix[i + 1], pix[i + 2]));
    }
    this.setState({ pixels: pixels, height: scaledH, width: scaledW });
  }
  render() {
    const pixels = this.state.pixels.map((x, idx) => {
      return <Pixel key={idx} background={x} />;
    });
    const style = {
      width: this.state.width * this.props.pixelSize,
      height: this.state.height * this.props.pixelSize
    };
    return (
      <div className="PixelImage" style={style}>
        {pixels}
      </div>
    );
  }
}

export default PixelImage;
