import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

export default class LandingPage extends Component {
  render() {
    const { theme: { bgPrimary, colorPrimary } } = this.context;

    return (
      <div style={{ backgroundColor: bgPrimary }} className="landing-page">
        <Nav />
        <main style={{ color: colorPrimary }}>
          <div className="intro">Hello, I'm Dinesh!</div>
          <div className="tagline">
            Full Stack Dev | Open-Source Enthusiast | Blogger | Ninja
          </div>
          <SocialIcons />
        </main>
        <ScrollToNext pageSelector=".about-page" />
      </div>
    );
  }
}

LandingPage.contextTypes = {
  theme: PropTypes.any
};
