import React, { Component } from 'react';
import { toTop as scrollToPageTop } from '@utils/scroll';

import './style.scss';

class ScrollTop extends Component {

  scrollToTop() {
    scrollToPageTop();
  }

  render() {
    const { shouldHide } = this.props;
    
    return (
      <div className="scroll-top" onClick={ e => this.scrollToTop()}>
        <div className={`arrow ${shouldHide ? 'hide' : ''}`}>
          <button className="fas fa-angle-double-up fa-2x" href="#"></button>
          <div className="to-top">To Top</div>
        </div>
      </div>
    );
  }
}

export default ScrollTop;