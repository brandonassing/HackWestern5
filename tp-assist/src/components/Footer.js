import React, { Component } from 'react';
import './Footer.css';
import '../App.css';
import process from '../assets/howitworks.png';
import reviews from '../assets/review.png';


class Footer extends Component {
  render() {
    return(
      <div id="footer-body">
      <img src={process} />
      <img src={reviews} />
      </div>
    );
  }
}

export default Footer;
