import React, { Component } from 'react';
import GoldStar from '../GoldStar';
import './styles.css';

class StarSection extends Component {
  text() {
    return `
    I can't imagine my life without you. You are my best friend. It has been
    almost 4 years since we met and we have been through so much together. You
    are the best partner I could have asked for.
    `;
  }
  render() {
    return (
      <section className="StarSection">
        <div className="ui container">
          <GoldStar />
          <div className="text">
            <h2>You deserve a gold star!</h2>
            <p>{this.text()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default StarSection;
