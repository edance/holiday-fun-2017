import React, { Component } from 'react';
import Heart from '../Heart';
import './styles.css';

class LoveSection extends Component {
  text() {
    return `
    Love you so much Lauren. You truly are the best! I am excited for the next
    adventure with my partner and favorite person.
    `;
  }
  render() {
    return (
      <section className="LoveSection">
        <div className="ui container">
          <Heart />
          <div className="text">
            <h2>All my love</h2>
            <p>{this.text()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default LoveSection;
