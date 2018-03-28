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

  switchTheme = () => {
    this.setState({
      theme: getThemes()[1]
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="theme-switcher">
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