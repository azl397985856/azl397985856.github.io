import React from 'react';

export default [{
  name: 'typy',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Typy
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
      </div>
      <div className='portfolio-item__desc'>
        Type checking library for JavaScript published to NPM
      </div>
      <div className='portfolio-item__links'>
        <a href="#" title="View on GitHub"><i className="fab fa-github"></i></a>
        <a href="#" title="Star on GitHub"><i className="fas fa-star"></i></a>
        {/* <a href="#" title="Fork to GitHub"><i className="fas fa-code-branch"></i></a> */}
      </div>
      <div className='portfolio-item__hash-tags'>
        #javascript #ES6
      </div>
    </div>
  )
}, {
  name: 'dev-landing-page',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Dev Landing Page
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
      </div>
      <div className='portfolio-item__desc'>
        Minimal landing page for developers
      </div>
      <div className='portfolio-item__links'>
        <a href="#" title="View on GitHub"><i className="fab fa-github"></i></a>
        <a href="#" title="Star on GitHub"><i className="fas fa-star"></i></a>
      </div>
      <div className='portfolio-item__hash-tags'>
        #html #css #githubpages
      </div>
    </div>
  )
}, {
  name: 'react-redux-boilerplate',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        React-Redux Boilerplate
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
      </div>
      <div className='portfolio-item__desc'>
        Minimal boilerplate plate code with community best practices
      </div>
      <div className='portfolio-item__links'>
        <a href="#" title="View on GitHub"><i className="fab fa-github"></i></a>
        <a href="#" title="Star on GitHub"><i className="fas fa-star"></i></a>
        {/* <a href="#" title="Fork to GitHub"><i className="fas fa-code-branch"></i></a> */}
      </div>
      <div className='portfolio-item__hash-tags'>
        #javascript #ES6 #react #redux
      </div>
    </div>
  )
}]