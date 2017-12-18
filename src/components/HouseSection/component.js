import React, { Component } from 'react';
import OurHome from '../OurHome';
import './styles.css';

class HouseSection extends Component {
  render() {
    return (
      <section className="HouseSection">
        <OurHome />
        <h2>To our new house</h2>
        <p>
          Can't imagine being anywhere other than here with you.
        </p>
      </section>
    );
  }
}

export default HouseSection;
