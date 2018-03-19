import React from 'react';
import PortfolioItem from '@components/PortfolioItem';
import ScrollToPrevious from '@components/ScrollToPrevious';

import './style.scss';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
        <div className="content-grid">
        <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </div>        
          
        </div>
        <ScrollToPrevious pageSelector='.about-page' />
      </div>
  );
};

export default PortfolioPage;
