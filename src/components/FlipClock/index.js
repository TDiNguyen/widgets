import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlipNumbers from './FlipNumbers';
import './style.scss';

const WAIT_TIME = 88000;

class FlipClock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			waitTime: WAIT_TIME,
			current: 1,
			next: 2,
		};

		this._getTimeFromSecond();
	}
	componentDidMount() {
		this.interval = setInterval(this._handleCountdown, 1000);
	}

	_handleCountdown = () => {
		let { waitTime } = this.state;

		waitTime -= 1;

		if (waitTime < 0) {
			waitTime = 0;
		}

		this.setState({
			waitTime,
		});
	};

	_getTimeFromSecond = () => {
		// get total seconds between the times
		let delta = WAIT_TIME;

		// calculate (and subtract) whole days
		const days = Math.floor(delta / 86400);
		delta -= days * 86400;

		// calculate (and subtract) whole hours
		const hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		// calculate (and subtract) whole minutes
		const minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		// what's left is seconds
		const seconds = delta % 60;

		const time = {
			days,
			hours,
			minutes,
			seconds,
		};

		console.log('timte', time);

		return time;
	};

	_extractFirstLetter = number => {
		return number < 10 ? 0 : number.toString()[0];
	};

	_extractSecondLetter = number => {
		return number < 10 ? number : number.toString()[1];
	};

	render() {
		const { current, next } = this.state;
		const { days, hours, minutes, seconds } = this._getTimeFromSecond();
		return (
			<div className="flip-clock">
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
				<div className="flip-clock__item">
					<FlipNumbers current={current} next={next} />
				</div>
			</div>
		);
	}
}

FlipClock.propTypes = {
	seconds: PropTypes.number,
};

export default FlipClock;
