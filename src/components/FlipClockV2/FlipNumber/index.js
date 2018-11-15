import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class FlipNumber extends Component {
  _renderNumber = () => {
    let i = 0;
    const arrayNumber = [];
    while (i < 10) {
      let className = 'flip-number__item-wrap';

      if (i === this.props.current) {
        className += ' active';
      }
      const number = (
        <div className={className}>
          <div className="flip-number__item">
            <div className="flip-number__item-top">{i}</div>
            <div className="flip-number__item-bottom">{i}</div>
            <div className="flip-number__item-top-next">{i + 1 > 9 ? 0 : i + 1}</div>
            <div className="flip-number__item-bottom-next">{i + 1 > 9 ? 0 : i + 1}</div>
          </div>
        </div>
      );

      arrayNumber.push(number);

      i += 1;
    }

    return arrayNumber;
  };

  render() {
    return (
      <div className="flip-number">
        <div className="flip-number__section">{this._renderNumber()}</div>
      </div>
    );
  }
}

FlipNumber.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  current: PropTypes.number,
};

FlipNumber.defaultProps = {
  min: 0,
  max: 99,
  current: 0,
};

export default FlipNumber;
