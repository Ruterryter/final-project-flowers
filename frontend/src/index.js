import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

import GA4React from 'ga-4-react';
const ga4react = new GA4React('G-271954971');

(async (_) => {
  await ga4react.initialize();

  ReactDOM.render(<App />, document.getElementById('root'));
})();
