import React, { Component } from 'react';
import PartyBus from '../PartyBus';
import './styles.css';

class BusSection extends Component {
  render() {
    return (
      <section className="BusSection">
        <PartyBus />
      </section>
    );
  }
}

export default BusSection;
