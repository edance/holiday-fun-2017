import React, { Component } from 'react';
import Heart from '../Heart';
import './styles.css';

class LoveSection extends Component {
  render() {
    return (
      <section className="LoveSection">
        <div className="ui container">
          <Heart />
          <div className="text">
            <h2>All my love</h2>
            <p>Love you so much Lauren. You are the best!</p>
          </div>
        </div>
      </section>
    );
  }
}

export default LoveSection;
