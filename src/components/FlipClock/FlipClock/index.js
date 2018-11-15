import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipItem from '../FlipItem';
import './style.scss';

class FlipClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      second: this.props.seconds,
    };
  }
  componentDidMount() {
    this.interval = setInterval(this._handleCountdown, 1000);
  }

  _handleCountdown = () => {
    this.setState({
      second: this.state.second - 1,
    });
  };

  render() {
    return (
      <div className="flip-clock">
        <div className="flip-clock__item">
          <FlipItem current={this.state.second} under={this.state.second - 1} />
        </div>
      </div>
    );
  }
}

FlipClock.propTypes = {
  seconds: PropTypes.number,
};

export default FlipClock;
