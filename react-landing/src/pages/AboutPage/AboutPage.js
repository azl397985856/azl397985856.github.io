import React, { Component } from 'react';
import ScrollToNext from '@components/ScrollToNext';
import PicSource from '@images/pic.jpeg';
import './style.scss';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="content-grid">
        <h1>About</h1>
          <div className="about-wrapper">
            <div className="about-pic">
              <img src={PicSource} alt="pic" />
            </div>
            <div className="about-content">
              <p>I am a popular bla bla blaaaaah. I go blah and do blah blah blah. I bla bla bla of all the awesomatic blahs.</p>
              <p>The biggess of all the jajajas are my hats in my bin.</p>
              <p className='text-emoji'>\ (•◡•) /</p>
            </div>
          </div>        
          
        </div>
        <ScrollToNext pageSelector='.portfolio-page' />
      </div>
    );
  }
}

export default AboutPage;