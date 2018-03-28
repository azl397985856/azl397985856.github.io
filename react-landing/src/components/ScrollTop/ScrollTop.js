import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toTop as scrollToPageTop } from '@utils/scroll';

import './style.scss';

class ScrollTop extends Component {

  scrollToTop() {
    scrollToPageTop();
  }

  render() {
    const { shouldHide } = this.props;
    const { theme: { colorPrimary } } = this.context;
    
    return (
      <div className="scroll-top" onClick={ e => this.scrollToTop()}>
        <div className={`arrow ${shouldHide ? 'hide' : ''}`} style={ { color: colorPrimary } }>
          <button className="fas fa-angle-double-up fa-2x" href="#"></button>
          <div className="to-top">To Top</div>
        </div>
      </div>
    );
  }
}

ScrollTop.contextTypes = {
  theme: PropTypes.any
};

export default ScrollTop;