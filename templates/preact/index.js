/** @jsx h */

import { h, render } from 'preact';

import App from './App';
import './style.css';

function init() {
  window.preactRoot = render(<App />, document.body, window.preactRoot);
}

init();
