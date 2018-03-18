import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class MediumUp extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='medium-up'>
        { children }
      </div>
    );
  }
}

MediumUp.propTypes = {
  children: PropTypes.node
}

export default MediumUp;