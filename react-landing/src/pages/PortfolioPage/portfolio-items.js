import React from 'react';

export default [{
  name: 'typy',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Typy
      </div>
      <div className='portfolio-item__desc'>
        Type checking library for JavaScript published to NPM
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
        <i className="fab fa-npm"></i>
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
      <div className='portfolio-item__desc'>
        Minimal landing page for developers
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3"></i>
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
      <div className='portfolio-item__desc'>
        Minimal boilerplate plate code with community best practices
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>
      </div>
    </div>
  )
}]