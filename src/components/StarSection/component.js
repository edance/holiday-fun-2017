import React, { Component } from 'react';
import GoldStar from '../GoldStar';
import './styles.css';

class StarSection extends Component {
  render() {
    return (
      <section className="StarSection">
        <div className="ui container">
          <GoldStar />
          <h2>You deserve a gold star!</h2>
          <p>
            I can't imagine my life without you. You are my best friend.
          </p>
        </div>
      </section>
    );
  }
}

export default StarSection;
