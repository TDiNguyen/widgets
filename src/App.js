import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<div className="app">
				<Link to="/flip-clock-v2">Flip clock V2</Link>
				<Link to="/flip-clock">Flip clock</Link>
			</div>
		);
	}
}

export default App;
