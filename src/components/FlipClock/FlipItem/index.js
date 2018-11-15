import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class FlipItem extends Component {
  render() {
    const { current, under } = this.props;
    return (
      <div className="flip-item">
        <div className="flip-item--bottom">{current}</div>
        <div className="flip-item--under">{under}</div>
        <div className={`flip-item--top flip-down`}>{current}</div>
        <div className={`flip-item--under-bottom flip-down-middle`}>{under}</div>
      </div>
    );
  }
}

FlipItem.propTypes = {
  current: PropTypes.number,
  under: PropTypes.number,
};

export default FlipItem;
