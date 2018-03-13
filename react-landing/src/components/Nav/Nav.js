import React, { Component } from 'react';
import './style.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="content-grid">
          <div className="menu">
            <div className="menu__item">Zoom</div>
            <div className="menu__item active">About</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;