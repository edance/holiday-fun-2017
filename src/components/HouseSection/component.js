import React, { Component } from 'react';
import OurHome from '../OurHome';
import './styles.css';

class HouseSection extends Component {
  render() {
    return (
      <section className="HouseSection">
        <div className="ui container">
          <OurHome />
          <div className="text">
            <h2>To our new house</h2>
            <p>
              Can't imagine being anywhere other than here with you.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HouseSection;
