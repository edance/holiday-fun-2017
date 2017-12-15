import React, { Component } from 'react';
import SnowBackground from '../SnowBackground';
import './styles.css';

// # IntroSection
// ## Items we want
// * snow falling animation
// * christmas tree with blinking lights
// * gold star that starts on the top of the tree
// * merry christmas lauren
class IntroSection extends Component {
  render() {
    return (
      <section className="IntroSection">
        <SnowBackground />
        <div className="container">
          <div className="header background"></div>
          <div className="header text">
            <h1>Merry Christmas Lauren!</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroSection;
