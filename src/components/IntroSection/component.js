import React, { Component } from 'react';
import SnowBackground from '../SnowBackground';
import ChristmasTree from '../ChristmasTree';
import GoldStar from '../GoldStar';
import PartyBus from '../PartyBus';
import OurHome from '../OurHome';
import Heart from '../Heart';
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
        {/* <SnowBackground /> */}
        <div className="container">
          <div className="header background"></div>
          <div className="header text">
            {/* <h1>Merry Christmas Lauren!</h1> */}
          </div>
        </div>
        <ChristmasTree />
        <GoldStar />
        <PartyBus />
        <OurHome />
        <Heart />
      </section>
    );
  }
}

export default IntroSection;
