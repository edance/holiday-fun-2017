import React, { Component } from 'react';
import SnowBackground from '../SnowBackground';
import ChristmasTree from '../ChristmasTree';
import FlashingHeading from '../FlashingHeading';
import ScrollDownIcon from '../ScrollDownIcon';
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
        <div className="ui container">
          <FlashingHeading>Merry Christmas Lauren!</FlashingHeading>
          <ChristmasTree />
          <ScrollDownIcon />
        </div>
      </section>
    );
  }
}

export default IntroSection;
