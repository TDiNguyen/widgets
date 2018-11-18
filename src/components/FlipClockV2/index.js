import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipNumber from './FlipNumber';

class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 0,
		};
	}
	componentDidMount() {
		this.interval = setInterval(this._handleInterval, 1000);
	}

	_handleInterval = () => {
		let current = this.state.current + 1;

		if (current > 9) {
			current = 0;
		}
		this.setState({
			current: current,
		});
	};

	_getHour = second => {
		return parseInt(second / 60 / 60);
	};

	_getMinute = second => {
		return second % 60;
	};

	_getSecond = second => {
		return second % 60;
	};

	_getDay = second => {
		return 0;
	};

	render() {
		return (
			<div>
				<h4>Clock</h4>
				<FlipNumber current={this.state.current} />
			</div>
		);
	}
}

Clock.propTypes = {
	waitTime: PropTypes.number, // Time in second
};

Clock.defaultProps = {
	waitTime: 1,
};

export default Clock;
