import React from 'react';
import { render } from 'react-dom';
import App from './modules/app';

render(
  <App />,
  document.getElementById('test') || document.createElement('div')
);

if (module.hot) {
  module.hot.accept();
}
