import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class SmallOnly extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='small-only'>
        { children }
      </div>
    );
  }
}

SmallOnly.propTypes = {
  children: PropTypes.node
}

export default SmallOnly;