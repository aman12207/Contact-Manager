import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'chartjs-adapter-date-fns'; // Import the date-fns adapter for Chart.js

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);