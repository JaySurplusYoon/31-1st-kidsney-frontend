import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import 'Styles/common.scss';
import 'Styles/reset.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
