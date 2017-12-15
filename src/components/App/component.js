import React, { Component } from 'react';
import IntroSection from '../IntroSection';
import StarSection from '../StarSection';
import BusSection from '../BusSection';
import HouseSection from '../HouseSection';
import LoveSection from '../LoveSection';
import * as ScrollMagic from 'scrollmagic';
import './styles.css';

class App extends Component {
  componentDidMount() {
    console.log(ScrollMagic.Controller);
  }
  render() {
    return (
      <div className="App">
        <IntroSection />
        <StarSection />
        <BusSection />
        <HouseSection />
        <LoveSection />
      </div>
    );
  }
}

export default App;
