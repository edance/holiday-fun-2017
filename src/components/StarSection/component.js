import React, { Component } from 'react';
import GoldStar from '../GoldStar';
import './styles.css';

class StarSection extends Component {
  render() {
    return (
      <section className="StarSection">
        <div className="ui container">
          <GoldStar />
          <h2>You deserve a gold star</h2>
          <p>Something Nice goes here</p>
        </div>
      </section>
    );
  }
}

export default StarSection;
