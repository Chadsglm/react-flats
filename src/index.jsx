import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app';

// render an instance of the component in the DOM
// ReactDOM.render(<App />, document.querySelector('#root'));
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
