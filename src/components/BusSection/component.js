import React, { Component } from 'react';
import PartyBus from '../PartyBus';
import './styles.css';

class BusSection extends Component {
  render() {
    return (
      <section className="BusSection">
        <PartyBus />
        <h2>From the party bus with the animals</h2>
        <p>
          I am happy that you picked me. I would do that awkward night a million times over.
        </p>
      </section>
    );
  }
}

export default BusSection;
