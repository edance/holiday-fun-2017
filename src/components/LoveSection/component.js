import React, { Component } from 'react';
import Heart from '../Heart';
import './styles.css';

class LoveSection extends Component {
  render() {
    return (
      <section className="LoveSection">
        <Heart />
        <h2>All my love</h2>
        <p>Love you so much Lauren. You are the best!</p>
      </section>
    );
  }
}

export default LoveSection;
