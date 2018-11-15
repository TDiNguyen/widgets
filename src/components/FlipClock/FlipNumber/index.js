import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlipNumber extends Component {
  render() {
    return <div className="flip-number">flip number</div>;
  }
}

FlipNumber.propTypes = {
  number: PropTypes.any,
};

export default FlipNumber;
