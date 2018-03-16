import { h, render } from 'preact';

import App from './App';

function init() {
  window.preactRoot = render(<App />, document.body, window.preactRoot);
}

init();
