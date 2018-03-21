import React from 'react';
import './style';

const PortfolioItem = props => {
  if (props.render)
    return (props.render);
  else
    return (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>
          Badass
        </div>
        <div className='portfolio-item__icon'>
          <i className="fab fa-js"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-html5"></i>
        </div>
        <div className='portfolio-item__desc'>
          I do badass things and kickass everyday!
        </div>
        <div className='portfolio-item__links'>
          <a href="#" title="View on GitHub"><i className="fab fa-github"></i></a>
          <a href="#" title="Star on GitHub"><i className="fas fa-star"></i></a>
          {/* <a href="#" title="Fork to GitHub"><i className="fas fa-code-branch"></i></a> */}
        </div>
        <div className='portfolio-item__hash-tags'>
          #javascript #react #ES6
        </div>
      </div>
    );
};

export default PortfolioItem;