import React, { Component } from 'react';
import OurHome from '../OurHome';
import './styles.css';

class HouseSection extends Component {
  text() {
    return `
    Can't imagine being anywhere other than here with you. Our house is so
    comfortable and I enjoy coming home to see you every day.
    `;
  }
  render() {
    return (
      <section className="HouseSection">
        <div className="ui container">
          <OurHome />
          <div className="text">
            <h2>To our new house</h2>
            <p>{this.text()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default HouseSection;
