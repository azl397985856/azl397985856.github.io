import React, { Component } from 'react';
import SocialIcons from '../SocialIcons';
import './style.scss';

export default class LandingPage extends Component {
  render() {
    return (
      <main>
        <div className="intro">Hello, I'm Dinesh!</div>
        <div className="tagline">Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja</div>
        <SocialIcons />
      </main>
    );
  }
}
