import React, { Component } from 'react';
import LandingPage from '@pages/LandingPage';
import AboutPage from '@pages/AboutPage';
import PortfolioPage from '@pages/PortfolioPage';
import ParallaxBackground from '@components/ParallaxBackground';
import ScrollTop from '@components/ScrollTop';
import ThemeSwitcher from '@components/ThemeSwitcher';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shouldShowScrollTopArrow: false
    }
  }

  handleScroll() {
    if(this.appWrapper) {
      if ((this.appWrapper.getBoundingClientRect().top * -1) > 100) {
        this.setState({shouldShowScrollTopArrow: true});
      } else {
        this.setState({shouldShowScrollTopArrow: false});
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="dev-landing-page" ref={elem => {this.appWrapper = elem}}>
        <ThemeSwitcher>
          <ParallaxBackground />
          <LandingPage />
          <AboutPage />
          <PortfolioPage />
          <ScrollTop shouldHide={!this.state.shouldShowScrollTopArrow}/>
        </ThemeSwitcher>
      </div>
    );
  }
}

export default App;
