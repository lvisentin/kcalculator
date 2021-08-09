import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
