import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: getThemes()[Math.floor((Math.random() * 2))]
    }
    this.switchTheme = this.switchTheme.bind(this);
  }
  
  getChildContext() {
    return {
      theme: this.state.theme,
      switchTheme: this.switchTheme
    };
  }

  getRandomTheme = () => {
    const currentTheme = this.state.theme;
    const allThemes = getThemes();
    const randomThemeIndex = Math.floor((Math.random() * (allThemes.length)));
    return allThemes.filter(theme => theme.name !== currentTheme.name)[randomThemeIndex];
  }

  switchTheme = () => {
    this.setState({
      theme: this.getRandomTheme()
    });
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div className="theme-switcher">
        <style jsx>{`
          body {
            background-color: ${theme.bgPrimary};
            body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              color: ${theme.textPrimary}
            }
          }
        `}</style>
        { children }
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
}

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
}

export default ThemeSwitcher;