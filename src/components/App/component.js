import React, { Component } from 'react';
import IntroSection from '../IntroSection';
import StarSection from '../StarSection';
import BusSection from '../BusSection';
import HouseSection from '../HouseSection';
import LoveSection from '../LoveSection';
import * as ScrollMagic from 'scrollmagic';
import {TweenMax, Power1, TimelineMax} from 'gsap';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
import './styles.css';

class App extends Component {
  componentDidMount() {
    /* this.controller = new ScrollMagic.Controller();
     * console.log(TweenMax);*/
    /* console.log(ScrollMagic);*/
    var flightpath = {
      entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,	y: -20},
            {x: 300,	y: 10}
          ]
      },
      looping : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 510,	y: 60},
            {x: 620,	y: -60},
            {x: 500,	y: -100},
            {x: 380,	y: 20},
            {x: 500,	y: 60},
            {x: 580,	y: 20},
            {x: 620,	y: 15}
          ]
      },
      leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 660,	y: 20},
            {x: 800,	y: 130},
            {x: window.innerWidth + 300,	y: -100},
          ]
      }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    var plane = document.getElementById('plane');

    // create tween
    var tween = new TimelineMax()
      .add(TweenMax.to(plane, 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
      .add(TweenMax.to(plane, 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
      .add(TweenMax.to(plane, 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
            .setPin("#target")
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
  }
  render() {
    return (
      <div className="App">
        <br/>
        <br/>
        <br/>
        <div id="trigger"></div>
        <div id="target">
          <div id="plane">
          </div>
        </div>
        {/* <IntroSection />
            <StarSection />
            <BusSection />
            <HouseSection />
            <LoveSection /> */}
      </div>
    );
  }
}

export default App;
