import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';

class App extends Component {

  render() {
    return (
      <div className="dev-landing-page">
        <ThemeSwitcher>
          <ParallaxBackground />
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop />
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
