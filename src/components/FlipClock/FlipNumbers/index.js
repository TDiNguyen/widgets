import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MIN = 0;
const MAX = 9;

class FlipNumbers extends Component {
	_renderNumbers = () => {
		let { current, next } = this.props;

		current = parseInt(current, 10);
		next = parseInt(next, 10);

		const list = [];
		let index = MAX;
		let className = '';

		while (index >= MIN) {
			className = 'flip-numbers__item';

			if (index === current) {
				className = ' flip-numbers__item--current';
			}

			if (index === next) {
				className = ' flip-numbers__item--next';
			}

			list.push(
				<li key={index} className={className}>
					<div className="top">{index}</div>
					<div className="bottom">{index}</div>
				</li>
			);

			index -= 1;
		}

		return <ul className="flip-numbers__list">{list}</ul>;
	};

	render() {
		return <div className="flip-numbers">{this._renderNumbers()}</div>;
	}
}

FlipNumbers.propTypes = {
	current: PropTypes.any,
	next: PropTypes.any,
};

export default FlipNumbers;
