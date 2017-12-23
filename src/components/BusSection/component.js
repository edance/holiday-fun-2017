import React, { Component } from 'react';
import PartyBus from '../PartyBus';
import './styles.css';

class BusSection extends Component {
  text() {
    return `
    I am happy that you picked me. I would do that awkward night a million times
    over and I wouldn't change one thing. I am glad you were amused by the
    animals because I was amused by you.
    `;
  }
  render() {
    return (
      <section className="BusSection">
        <div className="ui container">
          <PartyBus />
          <div className="text">
            <h2>From the party bus with the animals</h2>
            <p>{this.text()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default BusSection;
