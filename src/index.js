import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import FlipClockV2 from './components/FlipClockV2';
import FlipClock from './components/FlipClock';

ReactDOM.render(
	<Router>
		<div>
			<Route path="/" exact component={App} />
			<Route path="/flip-clock-v2" component={FlipClockV2} />
			<Route path="/flip-clock" component={FlipClock} />
		</div>
	</Router>,
	document.getElementById('root')
);
