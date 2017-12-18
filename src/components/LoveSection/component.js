import React, { Component } from 'react';
import Heart from '../Heart';
import './styles.css';

class LoveSection extends Component {
  render() {
    return (
      <section className="LoveSection">
        <Heart />
      </section>
    );
  }
}

export default LoveSection;
