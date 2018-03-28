import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if(window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const { theme: { colorPrimary, bgPrimary, navAlpha } } = this.context;
    
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky ? { backgroundColor: navAlpha, color: colorPrimary } : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav className={ stickyClass } ref={elem => {this.nav = elem}} style={ stickyStyles }>
      <style jsx>{`
          .menu__item:hover {
            border-bottom: 2px solid ${colorPrimary};
          }
        `}
        </style>
        <div className="menu">
          <div className="menu__item active" onClick={ e => this.scrollToPage('.about-page')}>About</div>
          <div className="menu__item" onClick={ e => this.scrollToPage('.portfolio-page')}>Portfolio</div>
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any
};

export default Nav;