import React, { Component } from 'react';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

export default class LandingPage extends Component {
  render() {
    
    return (
      <div className="landing-page">
        <Nav />
        <main>
          <div className="intro">Hello, I'm Dinesh!</div>
          <div className="tagline">Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja</div>
          <SocialIcons />
        </main>
        <ScrollToNext pageSelector='.about-page' />
      </div>
    );
  }
}
