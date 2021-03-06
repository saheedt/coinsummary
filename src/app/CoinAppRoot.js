/**
* Root component which is the entry point into the dom.
*/
import React from 'react';
import ReactDOM from 'react-dom';

import CoinApp from './components/CoinApp.js';

require('./css/main.css');

ReactDOM.render(<CoinApp />, document.getElementById('app'));