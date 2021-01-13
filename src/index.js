import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CompetitionsState from './context/competitions/CompetitionsState';

ReactDOM.render(
  <CompetitionsState>
    <App />
  </CompetitionsState>,
  document.getElementById('root')
);
