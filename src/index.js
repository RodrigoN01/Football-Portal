import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CompetitionsState from './context/competitions/CompetitionsState';
import TeamsState from './context/teams/TeamsState';

ReactDOM.render(
  <CompetitionsState>
    <TeamsState>
      <App />
    </TeamsState>
  </CompetitionsState>,
  document.getElementById('root')
);
