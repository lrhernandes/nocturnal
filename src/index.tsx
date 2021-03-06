import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { setupServer } from './services/mirage/server';

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  setupServer();
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
