import React, { Component } from 'react';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="content-grid">
        <h1>About</h1>
          <div className="about-wrapper">
            <div className="about-content">
              <p>I like <span className="highlight">JavaScript</span> and everything web.</p>
              <p>I build <span className="highlight">awesome</span> stuff, fork interesting repos, <span className="highlight">blog</span> what I learn and solve mythical problems.</p>
              <p className='text-emoji'>\ (•◡•) /</p>
            </div>
          </div>        
          
        </div>
        <ScrollToNext pageSelector='.portfolio-page' />
      </div>
    );
  }
}

export default AboutPage;