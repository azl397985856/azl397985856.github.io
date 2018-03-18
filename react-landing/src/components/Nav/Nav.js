import React, { Component } from 'react';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <nav>
        <div className="menu">
          <div className="menu__item active" onClick={ e => this.scrollToPage('.about-page')}>About</div>
          <div className="menu__item" onClick={ e => this.scrollToPage('.portfolio-page')}>Portfolio</div>
          {/* <div className="menu__item" onClick={ e => this.scrollToPage('.timeline-page')}>Blogs</div> */}
        </div>
      </nav>
    );
  }
}

export default Nav;