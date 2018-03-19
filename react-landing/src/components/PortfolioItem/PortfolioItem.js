import React from 'react';
// import PropTypes from 'prop-types';
import './style';

const PortfolioItem = props => {
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
        <a href="#" title="View on GitHub"><i class="fab fa-github"></i></a>
        <a href="#" title="Link to Page"><i class="fas fa-external-link-alt"></i></a>
      </div>
      <div className='portfolio-item__hash-tags'>
        #javascript #react #ES6
      </div>
    </div>
  );
};

// PortfolioItem.propTypes = {
  
// };

export default PortfolioItem;