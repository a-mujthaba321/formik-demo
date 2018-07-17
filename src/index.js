import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();